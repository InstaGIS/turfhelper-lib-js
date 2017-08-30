import gmaps from 'gmaps';

import {
    Wicket
} from './wicket_helper.js';


import {
    default as _map
} from 'lodash-es/map.js';

import {
    default as _each
} from 'lodash-es/forEach.js';

import {
    toCoord,
    toCoords
} from './coords_to_latlng.js';

import {
    default as _size
} from 'lodash-es/size.js';

import {
    default as _reduce
}
from 'lodash-es/reduce.js';


import turf_centroid from '@turf/centroid';

import turf_union from '@turf/union';

import turf_helpers from '@turf/helpers';

var turf_linestring = turf_helpers.lineString;

var debug = console.debug.bind(console, '%c turfHelper' + ':', "color:#00CC00;font-weight:bold;"),
    warn = console.debug.bind(console, '%c turfHelper' + ':', "color:orange;font-weight:bold;");


/**
 * Transforma un array de geometrías WKT en un FeatureCollection
 * @param  {Array<String>} wktArray Array de string WKT
 * @return {Object}          FeatureCollection
 */
function wktArrayToFeatureCollection(wktArray) {
    var FeatureCollection = {
        "type": "FeatureCollection"
    };

    FeatureCollection.features = _map(wktArray, function (WKTString) {
        var geoJsonPolygon = Wicket().read(WKTString).toJson();
        return {
            type: "Feature",
            properties: {},
            geometry: geoJsonPolygon
        };
    });
    return FeatureCollection;
}


/**
 * Merges transform an array of WKT string to a Polygon or Multipolygon
 * @param  {String[]} WKTArray Array of WKT strings
 * @param  {[type]} debug    [description]
 * @return {[type]}          [description]
 */
function mergeWKTGeoms(WKTArray, debug) {
    if (debug) {
        console.log('merging', WKTArray);
    }
    var FC = wktArrayToFeatureCollection(WKTArray),
        geom_zero = FC.features.pop();

    var theUnion = _reduce(FC.features, function (acumulado, feature, index) {
        acumulado = turf_union(acumulado, feature);
        return acumulado;
    }, geom_zero);

    return theUnion;
};


/**
 * Transforma un array de gmaps.LatLng en un Feature.Polygon
 * @param  {Array.<google.maps.LatLng>} LatLngArray [description]
 * @return {Feature.<Polygon>}             [description]
 */
function arrayToFeaturePolygon(LatLngArray) {

    var vertices = toCoords(LatLngArray, true);

    return {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Polygon",

            coordinates: [vertices]
        }
    };
}


/**
 * [polylineToFeatureLinestring description]
 * @param  {Array.<google.maps.LatLng>|google.maps.Polyline} objeto array of positions or a google.maps.Polyline
 * @return {Feature.<LineString>}          [description]
 */
function polylineToFeatureLinestring(objeto) {
    var vertices
    if (objeto instanceof google.maps.Polyline) {
        vertices = toCoords(objeto.getPath().getArray());
    } else {
        vertices = toCoords(objeto);
    }

    return turf_linestring(vertices);
}


/**
 * Receives an object and returns a GeoJson Feature of type Polygon
 * @param  {google.maps.Polygon|Array.<google.maps.LatLng>|Feature.Polygon|Geometry} object object to transform into a Feature.Polygon
 * @return {Feature.Polygon}        [description]
 */
function polygonToFeaturePolygon(object) {
    var ring, polygonFeature;
    if (object.type === 'Feature') {
        polygonFeature = object;
    } else if (object instanceof google.maps.Polygon) {
        object = object.getPath().getArray();
        ring = toCoords(object, true);
        polygonFeature = arrayToFeaturePolygon(ring);
    } else if (!!(object && object.constructor === Array)) {

        ring = toCoords(object, true);
        polygonFeature = arrayToFeaturePolygon(ring);

    } else if (object.geometry) {
        polygonFeature = {
            type: "Feature",
            properties: {},
            geometry: object.geometry
        };
    } else {
        throw new Error('object is not a Feature, google.maps.Polygon nor an array of google.maps.LatLng');
    }

    polygonFeature.properties = {};


    return polygonFeature;
}


/**
 * Transforma un array de gmaps.LatLng en un featurecollection geoJson
 * donde cada Feature es un punto del array de entrada
 * @param  {Array<google.maps.LatLng>|google.maps.MVCArray} latLngArray array de posiciones {@link google.maps.LatLng}
 * @return {FeatureCollection}             geojson FeatureCollection
 */
function arrayToFeaturePoints(latLngArray) {


    var FeatureCollection = {
        "type": "FeatureCollection",
        "features": []
    };
    latLngArray.forEach(function (latLng) {
        var Feature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: toCoord(latLng)
            }
        };
        FeatureCollection.features.push(Feature);
    });

    return FeatureCollection;

}

function centroid(FeatureCollection) {
    return turf_centroid(FeatureCollection);
}

/**
 * Convierte un gmaps.Polygon en un FeatureCollection de puntos
 * @param  {google.maps.Polygon} polygon [description]
 * @return {FeatureCollection.<Point>}         [description]
 */
function polygonToFeaturePolygonCollection(polygon) {
    var geojsonPolygon = polygonToFeaturePolygon(polygon);

    var vertexToFeature = function (vertex) {
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: vertex
            }
        };
    };

    var FeatureCollection = {
        type: "FeatureCollection",
        features: _map(geojsonPolygon.coordinates[0], vertexToFeature)
    };

    FeatureCollection.features.push(vertexToFeature(geojsonPolygon.coordinates[0][0]));

    return FeatureCollection;
}

/**
 * representGeometry: Obtiene distintas representaciones de acuerdo con lo obtenido en globalvars.globalmap.multipolygon
 * @param  {Object}   parentObj object with a key named multipolygon and other calles contextMenu
 * @param  {Function} callback    [description]
 * @return {object}               [description]
 */
function representGeometry(parentObj, callback) {
    var resultado = {};
    /**
     * geometryMultipolygon: Obtiene las geometrias de los poligonos seleccionados
     * @param  {Object}   multipolygon object where each value is a google.maps.Polygon
     * @return {array} Array de Geometria/s
     */
    var geometryMultipolygon = function (multipolygon) {
            // reads the multipolygon array (where we store objects on shift+click)

            var geometry = [];

            if (_size(multipolygon) === 0) {

                if (parentObj.contextMenu.Polygons && parentObj.contextMenu.Polygons.jqMenu.data('geometry')) {
                    geometry.push(parentObj.contextMenu.Polygons.jqMenu.data('geometry'));
                }

            } else {
                _each(multipolygon, function (obj) {
                    geometry.push(obj.geometry);
                });
            }
            return geometry;
        },
        WKTmerged,
        arraygeometry = geometryMultipolygon(parentObj.multipolygon);

    if (arraygeometry.length === 0) {

        resultado = {
            arraygeometry: arraygeometry
        };

    } else if (arraygeometry.length === 1) {

        resultado = {
            arraygeometry: arraygeometry,
            wkt: arraygeometry[0]
        };

    } else {
        var theFeature = mergeWKTGeoms(arraygeometry);
        try {
            WKTmerged = Wicket().fromJson(theFeature.geometry).toString();
        } catch (err) {
            console.warn('Exception wicket reading ', theFeature.geometry);
        }

        resultado = {
            arraygeometry: arraygeometry,
            theFeature: theFeature,
            wkt: WKTmerged
        };

    }

    if (callback) {
        callback(resultado);
    }

    return resultado;
}

export {
    debug,
    warn,
    arrayToFeaturePolygon,
    polygonToFeaturePolygonCollection,
    representGeometry,
    polygonToFeaturePolygon,
    arrayToFeaturePoints,
    centroid,
    mergeWKTGeoms,
    verticesInPolygon,
    polylineToFeatureLinestring,
    objectToFeaturePolygon
};
