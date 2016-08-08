import gmaps from 'gmaps';
import turf_line_slice from 'turf-line-slice';
import turf_point from 'turf-point';
import turf_linestring from 'turf-linestring';

import {
    traverseRings
} from './traverse.js';
import {
    toCoords,
    toLatLng,
    toLatLngs
} from './coords_to_latlng.js';
import {
    drawFeature
} from './drawfeature.js';

import {
    ButtonFactory
} from './buttonfactory.js';

/**
 * Encuentra los puntos en donde dos polilíneas se cruzan
 * @param  {Array.<external:google.maps.LatLng>} arrayLatLng1 array de posiciones {@link external:google.maps.LatLng}
 * @param  {Array.<external:google.maps.LatLng>} arrayLatLng2 array de posiciones {@link external:google.maps.LatLng}
 * @return {Array}             [description]
 */
export function cleanFeaturePolygon(FeaturePolygon, pass) {

    pass = pass || 0;

    var color = 'hsl(' + (pass * 30) + ',50%,50%)';

    var kinks = traverseRings(FeaturePolygon.geometry.coordinates[0], FeaturePolygon.geometry.coordinates[0]);

    if (kinks.intersections.features[0]) {
        var thekink = kinks.intersections.features[0];

        var marker = new gmaps.Marker({
            map: globalvars.globalmap,
            position: toLatLng(thekink.geometry.coordinates),
            icon: ButtonFactory.autoIcon({
                label: 'i' + pass,
                color: color
            })

        });

        var kprops = thekink.properties;

        if (Math.abs(kprops.position2 - kprops.position2) >= 5) {
            FeaturePolygon.geometry.coordinates[0] = FeaturePolygon.geometry.coordinates[0].slice(kprops.position1, kprops.position2);
            debug('cleanFeaturePolygon ', kprops.position1, kprops.position2, FeaturePolygon.geometry.coordinates[0]);
        } else {
            var auxPath = FeaturePolygon.geometry.coordinates[0].slice(0, kprops.position1);
            auxPath.push(thekink.geometry.coordinates);
            debug('cleanFeaturePolygon ', kprops.position1, kprops.position2, auxPath, FeaturePolygon.geometry.coordinates[0]);
            FeaturePolygon.geometry.coordinates[0] = auxPath.concat(FeaturePolygon.geometry.coordinates[0].slice(kprops.position2));
            //FeaturePolygon.geometry.coordinates[0][kprops.position1 + 1] = thekink.geometry.coordinates;
            //FeaturePolygon.geometry.coordinates[0][kprops.position2] = thekink.geometry.coordinates;

        }

        //this.drawFeature(FeaturePolygon, color);
        pass = pass + 1;
        return cleanFeaturePolygon(FeaturePolygon, pass);
    } else {
        drawFeature(FeaturePolygon, color, true);
        return FeaturePolygon;
    }

};
