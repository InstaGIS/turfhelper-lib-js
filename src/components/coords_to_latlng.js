import gmaps from 'gmaps';

import {
	default as _map
} from 'lodash-es/map.js';

function toLatLng(point) {
	if (point.lat) {
		return point;
	} else {
		return {
			lat: point[1],
			lng: point[0]
		};
	}
}
/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */

/**
 * Transforma un array de LatLng en un array de coordenadas [lng,lat]
 * @param {Array.<Array.<Number>>} arrayLatLng [description]
 * @return {Array.<external:google.maps.LatLng>} array de posiciones {@link external:google.maps.LatLng}
 */
function toLatLngs(coordinates) {
	return _map(coordinates, toLatLng);
}

function toCoord(LatLng) {
	if (gmaps && gmaps.LatLng && LatLng instanceof gmaps.LatLng) {
		return [LatLng.lng(), LatLng.lat()];
	} else if (LatLng.lat && LatLng.lng) {
		return [LatLng.lng, LatLng.lat];
	} else {
		return LatLng;
	}
}
/**
 * Transforma un array de LatLng en un array de coordenadas [lng,lat]
 * @param {Array.<external:google.maps.LatLng>} arrayLatLng Array de posiciones {@link external:google.maps.LatLng}
 * @return {Array.<Array.<Number>>} [description]
 */
function toCoords(arrayLatLng, closeRing) {
	var ring = _map(arrayLatLng, toCoord);
	if (closeRing === true) {
		ring.push(ring[0]);
	}
	return ring;
}

function latlngToPoint(latLng) {
	var coords = toCoord(latLng),
		feature = {
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: coords
			}
		};

	return feature;
}

export {
	latlngToPoint,
	toLatLng,
	toLatLngs,
	toCoord,
	toCoords
};
