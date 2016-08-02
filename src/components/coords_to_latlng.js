import gmaps from 'gmaps';
import _ from 'underscore';

function toLatLng(point) {
	if (point.lat) {
		return point;
	} else {
		return new gmaps.LatLng(point[1], point[0]);
	}
}

/**
 * Transforma un array de LatLng en un array de coordenadas [lng,lat]
 * @param {Array.<Array.<Number>>} arrayLatLng [description]
 * @return {Array.<external:google.maps.LatLng>} array de posiciones {@link external:google.maps.LatLng}
 */
function toLatLngs(coordinates) {
	return _.map(coordinates, toLatLng);
}

function toCoord(LatLng) {
	if (LatLng instanceof gmaps.LatLng) {
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
	var ring = _.map(arrayLatLng, toCoord);
	if (closeRing === true) {
		ring.push(ring[0]);
	}
	return ring;
}

function latlngToPoint(latLng) {
	var feature = {
		type: "Feature",
		geometry: {
			type: "Point",
			coordinates: [latLng.lng(), latLng.lat()]
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
