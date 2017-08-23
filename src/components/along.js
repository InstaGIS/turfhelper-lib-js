import gmaps from 'gmaps';
import {
	toCoords
} from './coords_to_latlng.js';
import turf_along from '@turf/along';
import turf_linestring from 'turf-linestring';

/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */

export function along(arrayLatLng, distance) {

	if (arrayLatLng instanceof gmaps.Polyline) {
		arrayLatLng = arrayLatLng.getPath();
	}
	var arrayCoords = toCoords(arrayLatLng);
	var LineString = turf_linestring(arrayCoords);

	return turf_along(LineString, distance, 'kilometers');

};
