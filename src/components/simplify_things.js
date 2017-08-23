import gmaps from 'gmaps';


import turf_simplify from '@turf/simplify';
import {
	toCoords
} from './coords_to_latlng.js'
import {
	polygonToFeaturePolygon,
	debug,
	warn
} from './utils.js';

import turf_helpers from '@turf/helpers';

var turf_linestring = turf_helpers.lineString;
/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */


/**
 * Simplifica un conjunto de coordenadas
 * @param  {Array} coordArray [description]
 * @param  {Number} tolerance   [description]
 * @param  {Boolean} highQuality [description]
 * @return {Array}  Array de coordenadas [lng,lat]
 */
export function simplifyPointArray(coordArray, tolerance, highQuality) {
	tolerance = tolerance || 0.00001;
	highQuality = highQuality || false;
	var Feature = turf_linestring(toCoords(coordArray));

	var simplifiedgeom = turf_simplify(Feature, tolerance, highQuality);

	//debug('simplifyPointArray', 'geometry is', Feature.geometry, 'simplifiedgeom is', simplifiedgeom);

	return simplifiedgeom.geometry.coordinates;

};

/**
 * Simplifica un geoson Feature
 * @param  {external:google.maps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon} object [description]
 * @param  {Number} tolerance   [description]
 * @param  {Boolean} highQuality [description]
 * @return {Feature}             [description]
 */
export function simplifyFeature(object, tolerance, highQuality) {

	var Feature = polygonToFeaturePolygon(object);

	if (Feature.geometry.type === 'MultiPolygon') {
		Feature.geometry.type = 'Polygon';
		Feature.geometry.coordinates = Feature.geometry.coordinates[0];
	}
	var simplifiedgeom = turf_simplify(Feature, tolerance, highQuality);

	if (simplifiedgeom && simplifiedgeom.geometry) {
		//debug('Simplified Feature', Feature, 'simplifiedgeom', simplifiedgeom);
		return simplifiedgeom;
	} else {
		warn('Cannot simplify  Feature', Feature);
		return Feature;
	}

};

/**
 * Simplifica una geometría usando Douglas Peucker
 * @param  {external:google.maps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon|Geometry} Feature [description]
 * @param  {number} tolerance   [description]
 * @param  {boolean} highQuality [description]
 * @return {Geometry}             [description]
 */
export function simplifyGeometry(object, tolerance, highQuality) {
	tolerance = tolerance || 0.00001;
	highQuality = highQuality || false;

	var Feature = polygonToFeaturePolygon(object);

	var simplifiedFeature = turf_simplify(Feature, tolerance, highQuality);

	if (simplifiedFeature && simplifiedFeature.geometry) {
		//debug('Simplified Feature', Feature, 'simplifiedgeom', simplifiedgeom);
		return simplifiedFeature.geometry;
	} else {
		warn('Cannot simplify  Feature', Feature);
		return Feature.geometry;
	}

};
