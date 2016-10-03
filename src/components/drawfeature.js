import gmaps from 'gmaps';

import {
    Wicket
} from './wicket_helper.js';
import {
    default as _each
} from 'lodash-es/forEach.js';
import {
    default as _isArray
} from 'lodash-es/isArray.js';

import {
    polygonToFeaturePolygon,
    verticesInPolygon,
    debug,
    warn
} from './utils.js';

export function drawFeature(Feature, strokeColor, numerateMarkers) {

    strokeColor = strokeColor || '#FF0000';
    if (Feature instanceof gmaps.Polygon) {
        Feature = polygonToFeaturePolygon(Feature);
    }
    if (numerateMarkers) {
        Feature.geometry.coordinates[0].forEach(function (punto, index) {

            var marker = new gmaps.Marker({
                map: globalvars.globalmap,
                position: toLatLng(punto),
                icon: ButtonFactory.autoIcon({
                    label: 'v' + index,
                    color: strokeColor
                })
            });
        });
    }
    var GPolygon = Wicket().fromJson(Feature).toObject();
    debug('GPolygon', GPolygon);
    if (_isArray(GPolygon)) {
        var Polygon;
        _each(GPolygon, function (iPolygon, index) {
            var hue = parseInt(360 * index / GPolygon.length, 10);
            strokeColor = "hsl(" + hue + ", 40%, 45%)";
            iPolygon.set('fillColor', 'transparent');
            iPolygon.set('strokeColor', strokeColor);
            iPolygon.setMap(globalvars.globalmap);
            Polygon = iPolygon;
        });
        return Polygon;
    } else {

        GPolygon.set('fillColor', strokeColor);
        GPolygon.set('strokeColor', strokeColor);
        GPolygon.setMap(globalvars.globalmap);
        return GPolygon;
    }

};
