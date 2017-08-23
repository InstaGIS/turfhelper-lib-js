import {
    toCoords
} from './coords_to_latlng.js';

import turf_buffer from '@turf/buffer';

import {
    polygonToFeaturePolygon,
    debug,
    warn
} from './utils.js';


/**
 * Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.
 * @param  {google.maps.Polygon|Array.<google.maps.LatLng>|Feature.Polygon} object [description]
 * @param  {String} output  either 'geometry' or 'feature', case insensitive, defaults to 'feature'
 * @param  {Number} distance    [description]
 * @param  {String} units       [description]
 * @return {Feature|Geometry}            Any GeoJson Geometry type
 */
export function createbuffer(object, output, distance, units, comment, steps) {
    units = units || 'meters';

    var polygonFeature = polygonToFeaturePolygon(object),
        ring = polygonFeature.geometry.coordinates[0];

    if (ring.length <= 3) {
        return polygonFeature;
    } else {
        try {
            var buffered = turf_buffer(polygonFeature, distance, units, steps);

            //debug('buffer ' + comment, 'buffered', buffered);
            if (buffered.type === 'Feature') {
                return buffered.geometry;
            }

            return buffered.features[0].geometry;
        } catch (e) {
            warn('Exception buffer', e);
            return polygonFeature.geometry;
        }
    }

    //debug('after buffer ' + comment, buffered, 'will return', buffered.features[0]);

};
