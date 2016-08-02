import gmaps from 'gmaps';
import turf_along from 'turf-along';

export function along (arrayLatLng, distance) {

		if (arrayLatLng instanceof gmaps.Polyline) {
			arrayLatLng = arrayLatLng.getPath();
		}
		var arrayCoords = toCoords(arrayLatLng);
		var LineString = turf_linestring(arrayCoords);

		return turf_along(LineString, distance, 'kilometers');

	};
