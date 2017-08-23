import gmaps from 'gmaps';
import {
	toCoords
} from './coords_to_latlng.js';
import turf_along from '@turf/along';
import turf_helpers from '@turf/helpers';

var turf_linestring = turf_helpers.lineString;


/**
 * Takes a linestring and returns a {@link Point|point} at a specified distance along the line.
 * @param  {google.maps.Polyline|Array.<google.maps.LatLng>|Array.<google.maps.LatLngLiteral>} arrayLatLng either a Polyline or an array of points
 * @param  {Number} distance    [description]
 * @return {Point}             [description]
 */
export function along(arrayLatLng, distance) {

	if (arrayLatLng instanceof gmaps.Polyline) {
		arrayLatLng = arrayLatLng.getPath();
	}
	var arrayCoords = toCoords(arrayLatLng);
	var LineString = turf_linestring(arrayCoords);

	return turf_along(LineString, distance, 'kilometers');

};
