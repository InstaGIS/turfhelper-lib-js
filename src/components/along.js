import gmaps from 'gmaps';
import {
	toCoords
} from './coords_to_latlng.js';
import turf_along from '@turf/along';
import turf_helpers from '@turf/helpers';

var turf_linestring = turf_helpers.lineString;


export function along(arrayLatLng, distance) {

	if (arrayLatLng instanceof gmaps.Polyline) {
		arrayLatLng = arrayLatLng.getPath();
	}
	var arrayCoords = toCoords(arrayLatLng);
	var LineString = turf_linestring(arrayCoords);

	return turf_along(LineString, distance, 'kilometers');

};
