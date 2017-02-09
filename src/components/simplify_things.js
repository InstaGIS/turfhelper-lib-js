import gmaps from 'gmaps';

import turf_linestring from 'turf-linestring';
import turf_simplify from 'turf-simplify';
import {
	toCoords
} from './coords_to_latlng.js'
import {
	polygonToFeaturePolygon,
	debug,
	warn
} from './utils.js';

/**
 * Simplifica una geometría usando Douglas Peucker
 * @param  {Feature.<Polygon|MultiPolygon>} geometry    polígono o multipolígono geoJson
 * @param  {number} tolerance   [description]
 * @param  {boolean} highQuality [description]
 * @return {object}             [description]
 */
export function simplifyGeometry(geometry, tolerance, highQuality) {
	tolerance = tolerance || 0.00001;
	highQuality = highQuality || false;
	var Feature;
	if (geometry.type === 'Feature') {
		Feature = geometry;
	} else {
		Feature = {
			type: "Feature",
			geometry: geometry
		};
	}

	var simplifiedFeature = turf_simplify(Feature, tolerance, highQuality);

	if (simplifiedFeature && simplifiedFeature.geometry) {
		//debug('Simplified Feature', Feature, 'simplifiedgeom', simplifiedgeom);
		return simplifiedFeature.geometry;
	} else {
		warn('Cannot simplify  Feature', Feature);
		return geometry;
	}

};

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
 * @param  {Feature.<Polygon|MultiPolygon>} Feature     [description]
 * @param  {Number} tolerance   [description]
 * @param  {Boolean} highQuality [description]
 * @return {Feature}             [description]
 */
export function simplifyFeature(Feature, tolerance, highQuality) {
	highQuality = highQuality || false;

	if (Feature instanceof gmaps.Polygon) {
		Feature = polygonToFeaturePolygon(Feature);
	} else if (Feature.geometry.type === 'MultiPolygon') {
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
