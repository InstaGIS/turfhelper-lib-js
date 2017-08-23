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
 * Simplifies an array of coordinates
 * @param  {Array.<google.maps.LatLng>|Array.<google.maps.LatLngLiteral>} coordArray Array of coordinates
 * @param  {number} tolerance   [description]
 * @param  {boolean} highQuality [description]
 * @return {Array.<Number>}  Array de coordenadas [lng,lat]
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
 * Simplified a Feature or google.maps.Polygon
 * @param  {google.maps.Polygon|Array.<google.maps.LatLng>|Feature.Polygon} object feature to be simplified
 * @param  {string} output either 'feature' or 'geometry'
 * @param  {mumber} tolerance   simplification tolerance
 * @param  {boolean} highQuality [description]
 * @return {Feature|Geometry} whether or not to spend more time to create a higher-quality simplification with a different algorithm
 */
export function simplifyFeature(object, output, tolerance, highQuality) {

	output = output || 'feature';
	var Feature = polygonToFeaturePolygon(object);

	if (Feature.geometry.type === 'MultiPolygon') {
		Feature.geometry.type = 'Polygon';
		Feature.geometry.coordinates = Feature.geometry.coordinates[0];
	}
	var simplifiedgeom = turf_simplify(Feature, tolerance, highQuality);

	if (simplifiedgeom && simplifiedgeom.geometry) {
		//debug('Simplified Feature', Feature, 'simplifiedgeom', simplifiedgeom);
		return (output === 'feature') ? simplifiedgeom : simplifiedgeom.feature;
	} else {
		warn('Cannot simplify  Feature', Feature);
		return (output === 'feature') ? Feature : Feature.geometry;
	}

};
