import {
	default as _filter
} from 'lodash-es/filter.js';
import {
	default as _max
} from 'lodash-es/max.js';
import {
	default as _min
} from 'lodash-es/min.js';

import turk_kinks from '@turf/kinks';

import turf_line_slice from '@turf/line-slice';

import turf_helpers from '@turf/helpers';

var turf_point = turf_helpers.point,
	turf_linestring = turf_helpers.lineString;


import {
	traverseRings
} from './traverse.js';
import {
	toCoords,
	toLatLng,
	toLatLngs
} from './coords_to_latlng.js';


/**
 * [polylineToFeatureLinestring description]
 * @param  {Array.<google.maps.LatLng>} polyline [description]
 * @return {Feature.Polyline}          [description]
 */
function polylineToFeatureLinestring(polyline) {
	var vertices = toCoords(polyline.getPath().getArray());
	return turf_linestring(vertices);
}

/**
 * Takes a {@link LineString|linestring}, {@link MultiLineString|multi-linestring}, {@link MultiPolygon|multi-polygon}, or {@link Polygon|polygon} and returns {@link Point|points} at all self-intersections.
 *
 * @name kinks
 * @param {Feature<LineString|MultiLineString|MultiPolygon|Polygon>} featureIn input feature
 * @returns {FeatureCollection<Point>} self-intersections
 * @example
 * var poly = turf.polygon([[
 *   [-12.034835, 8.901183],
 *   [-12.060413, 8.899826],
 *   [-12.03638, 8.873199],
 *   [-12.059383, 8.871418],
 *   [-12.034835, 8.901183]
 * ]]);
 *
 * var kinks = turf.kinks(poly);
 *
 * //addToMap
 * var addToMap = [poly, kinks]
 */
function kinks(featureIn) {
	return turk_kinks(featureIn);
}

/**
 * Encuentra los puntos en donde dos polilíneas se cruzan
 * @param  {Array.<google.maps.LatLng>} arrayLatLng1 array de posiciones {@link google.maps.LatLng}
 * @param  {Array.<google.maps.LatLng>} arrayLatLng2 array de posiciones {@link google.maps.LatLng}
 * @return {Array}             [description]
 */
function trimPaths(arrayLatLng1, arrayLatLng2, debugflag) {

	var ring1 = toCoords(arrayLatLng1); // googleGeom1.geometry.coordinates;
	var ring2 = toCoords(arrayLatLng2); // googleGeom2.geometry.coordinates;

	var thiskinks = traverseRings(ring1, ring2);

	if (thiskinks.intersections.features.length > 0) {

		var minRing1 = _min(thiskinks.intersections.features, function (kink) {
			return kink.properties.position1;
		});

		var firstIntersection = _max(_filter(thiskinks.intersections.features, function (kink) {
			return kink.properties.position1 === minRing1.properties.position1;
		}), function (kink) {
			return kink.properties.position2;
		});

		var intersectLatLng = toLatLng(firstIntersection.geometry.coordinates);

		var line1 = turf_linestring(ring1);
		var line2 = turf_linestring(ring2);
		var line1Start = turf_point(ring1[0]);
		var line2End = turf_point(ring2.slice(-1)[0]);
		var sliced1 = firstIntersection.properties.position1 === 0 ?
			line1 :
			turf_line_slice(line1Start, firstIntersection, line1);
		var sliced2 = firstIntersection.properties.position2 >= (ring2.length - 1) ?
			line2 :
			turf_line_slice(firstIntersection, line2End, line2);
		return [toLatLngs(sliced1.geometry.coordinates), toLatLngs(sliced2.geometry.coordinates), intersectLatLng];
	}
	return [];

};

export {
	trimPaths,
	kinks
}
