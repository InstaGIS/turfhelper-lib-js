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

/**
 * Transforms a {@link google.maps.LatLng} or {@link google.maps.LatLngLiteral}
 * @param  {google.maps.LatLng|google.maps.LatLngLiteral|Array.<Number>} LatLng a coordinate to transform
 * @return {Array.<Number>}      an array of numbers representing [Lng, Lat]
 */
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
 * Transforms an array of coordinates to an array of [Lng, Lat]
 * @param {Array.<google.maps.LatLng>|Array.<google.maps.LatLngLiteral>} arrayLatLng Array of coordinates
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

/**
 * Transforms a {@link google.maps.LatLng} or {@link google.maps.LatLngLiteral} into a {@link Feature.<Point>}
 * @param  {google.maps.LatLng|google.maps.LatLngLiteral|Array.<Number>} LatLng a coordinate to transform
 * @return {Feature.<Point>} a Point type Feature
 */
function latlngToPoint(LatLng) {
	var coords = toCoord(LatLng),
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
