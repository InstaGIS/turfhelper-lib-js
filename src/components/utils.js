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
    default as _size
} from 'lodash-es/size.js';
import {
    default as _sum
} from 'lodash-es/sum.js';

import turf_linestring from 'turf-linestring';
import turf_polygon from 'turf-polygon';
import turf_merge from 'turf-merge';
import turf_centroid from 'turf-centroid';

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
            geometry: geoJsonPolygon
        };
    });
    return FeatureCollection;
};

/**
 * representGeometry: Obtiene distintas representaciones de acuerdo con lo obtenido en globalvars.globalmap.multipolygon
 * @param  {InstaMap}   mapInstance instancia de {@link InstaMap}
 * @param  {Function} callback    [description]
 * @return {object}               [description]
 */
function representGeometry(mapInstance, callback) {

    /**
     * geometryMultipolygon: Obtiene las geometrias de los poligonos seleccionados
     * @return {array} Array de Geometria/s
     */
    var geometryMultipolygon = function (map) {
            var multipolygon = map.multipolygon;
            var geometry = [];

            if (_size(multipolygon) === 0) {
                if (map.contextMenu.Polygons && map.contextMenu.Polygons.jqMenu.data('geometry')) {
                    geometry.push(map.contextMenu.Polygons.jqMenu.data('geometry'));
                }

            } else {
                _each(multipolygon, function (obj) {
                    geometry.push(obj.geometry);
                });
            }
            return geometry;
        },
        WKTmerged,
        arraygeometry = geometryMultipolygon(mapInstance);

    if (arraygeometry.length === 0) {
        if (callback) {
            callback({
                arraygeometry: arraygeometry
            });
        }

    } else if (arraygeometry.length === 1) {
        callback({
            arraygeometry: arraygeometry,
            wkt: arraygeometry[0]
        });

    } else {
        var FC = wktArrayToFeatureCollection(arraygeometry);

        var mergedFeature = turf_merge(FC);
        WKTmerged = Wicket().fromJson(mergedFeature.geometry).toString();

        callback({
            arraygeometry: arraygeometry,
            wkt: WKTmerged
        });

    }
    return;
}

/**
 * Transforma un array de gmaps.LatLng en un Feature.Polygon
 * @param  {Array.<external:google.maps.LatLng>} LatLngArray [description]
 * @return {Feature.<Polygon>}             [description]
 */
function arrayToFeaturePolygon(LatLngArray) {
    var vertices = _map(LatLngArray, function (LatLng) {
        return [LatLng.lng(), LatLng.lat()];
    });
    vertices.push(vertices[0]);

    return {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [vertices]
        }
    };
}

/**
 * Convierte un polígono en un geojson Feature.<Polygon>
 * @param  {external:google.maps.Polygon} polygon un {@link external:google.maps.Polygon} a convertir
 * @return {Feature.<Polygon>} Feature resultante
 */
var polygonToFeaturePolygon = function (polygon) {

        var vertices = toCoords(polygon.getPath().getArray());

        vertices.push(vertices[0]);
        return turf_polygon([vertices]);
    },

    /**
     * Transforma un array de gmaps.LatLng en un featurecollection geoJson
     * donde cada Feature es un punto del array de entrada
     * @param  {Array<external:google.maps.LatLng>} latLngArray array de posiciones {@link external:google.maps.LatLng}
     * @return {FeatureCollection}             geojson FeatureCollection
     */
    arrayToFeaturePoints = function (latLngArray) {

        var FeatureCollection = {
            "type": "FeatureCollection",
            "features": []
        };
        var features = _map(latLngArray, function (latLng) {
            return {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [latLng.lng(), latLng.lat()]
                }
            };
        });

        FeatureCollection.features = features;
        return FeatureCollection;

    },

    centroid = function (FeatureCollection) {
        return turf_centroid(FeatureCollection);
    },

    verticesInPolygon = function (polygon) {
        return _sum(_map(polygon.coordinates, function (ring) {
            return ring.length;
        }));
    },

    /**
     * Convierte un gmaps.Polygon en un FeatureCollection de puntos
     * @param  {external:google.maps.Polygon} polygon [description]
     * @return {FeatureCollection.<Point>}         [description]
     */
    polygonToFeaturePolygonCollection = function (polygon) {
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
    };

export {
    debug,
    warn,
    polygonToFeaturePolygonCollection,
    representGeometry,
    polygonToFeaturePolygon,
    arrayToFeaturePoints,
    centroid,
    verticesInPolygon
};
