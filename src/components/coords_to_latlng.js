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
 * Transforma un array de LatLng en un array de coordenadas [lng,lat]
 * @param {Array.<Array.<Number>>} arrayLatLng [description]
 * @return {Array.<google.maps.LatLng>} array de posiciones {@link google.maps.LatLng}
 */
function toLatLngs(coordinates) {
	return _map(coordinates, toLatLng);
}


function toCoord(LatLng) {
	if (google.maps && google.maps.LatLng && LatLng instanceof google.maps.LatLng) {
		return [LatLng.lng(), LatLng.lat()];
	} else if (LatLng.lat && LatLng.lng) {
		return [LatLng.lng, LatLng.lat];
	} else if (LatLng.length && LatLng.length === 2) {
		return LatLng;
	} else {
		throw new Error('google.maps is not present in the global scope')
	}
}
/**
 * Transforma un array de LatLng en un array de coordenadas [lng,lat]
 * @param {Array.<google.maps.LatLng>} arrayLatLng Array de posiciones {@link google.maps.LatLng}
 * @return {Array.<Array.<Number>>} [description]
 */
function toCoords(arrayLatLng, closeRing) {
	var ring = _map(arrayLatLng, toCoord);


	if (closeRing === true) {
		var last_coord = ring.pop();
		if (last_coord[0] === ring[0][0] && last_coord[1] === ring[0][1]) {
			ring.push(ring[0]);
		} else {
			ring.push(last_coord);
			ring.push(ring[0]);
		}

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
