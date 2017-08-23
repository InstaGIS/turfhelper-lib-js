import gmaps from 'gmaps';

import {
    toCoords
} from './coords_to_latlng.js';
import turf_buffer from '@turf/buffer';

import {
    arrayToFeaturePolygon,
    debug,
    warn
} from './utils.js';

/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */

/**
 * Convierte un path de google LatLng en un Feature.<Polygon>
 * @param  {external:google.maps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon} arrayLatLng [description]
 * @param  {Number} distance    [description]
 * @param  {String} units       [description]
 * @return {Feature.<Polygon>}             [description]
 */
export function createbuffer(arrayLatLng, distance, units, comment, steps) {
    units = units || 'meters';
    var polygonFeature, ring;

    if (arrayLatLng.type === 'Feature') {
        polygonFeature = arrayLatLng;
        ring = polygonFeature.geometry.coordinates[0];
    } else {

        if (arrayLatLng instanceof google.maps.Polygon) {
            arrayLatLng = arrayLatLng.getPath().getArray();
        }
        ring = toCoords(arrayLatLng, true);
        polygonFeature = arrayToFeaturePolygon(ring);

    }

    if (ring.length <= 3) {
        return polygonFeature;
    } else {
        try {
            var buffered = turf_buffer(polygonFeature, distance, units, steps);

            //debug('buffer ' + comment, 'buffered', buffered);
            if (buffered.type === 'Feature') {
                return buffered;
            }

            return buffered.features[0];
        } catch (e) {
            warn('Exception buffer', e);
            return polygonFeature;
        }
    }

    //debug('after buffer ' + comment, buffered, 'will return', buffered.features[0]);

};
