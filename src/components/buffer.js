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
 * Convierte un path de google LatLng en un Feature.<Polygon>
 * @param  {external:google.maps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon} object [description]
 * @param  {Number} distance    [description]
 * @param  {String} units       [description]
 * @return {Geometry}            Any GeoJson Geometry type
 */
export function createbuffer(object, distance, units, comment, steps) {
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
                return buffered;
            }

            return buffered.features[0].geometry;
        } catch (e) {
            warn('Exception buffer', e);
            return polygonFeature.geometry;
        }
    }

    //debug('after buffer ' + comment, buffered, 'will return', buffered.features[0]);

};
