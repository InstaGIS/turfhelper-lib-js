import turf_unkink from '@turf/unkink-polygon';
import turk_kinks from '@turf/kinks';

import {
	polylineToFeatureLinestring,
	polygonToFeaturePolygon
} from './utils.js';

/**
 * Takes a kinked polygon and returns a feature collection of polygons that have no kinks. 
 * @param  {google.maps.Polygon|Array.<google.maps.LatLng>|Feature<Polygon>} object array of points, a google.maps.Polygon or Feature<Polygon>
 * @return {FeatureCollection<Polygon>}  Unkinked polygons
 */
export function unkink(object) {

	var polygonFeature = polygonToFeaturePolygon(object);

	return turf_unkink(polygonFeature);
};


/**
 * Takes an array of points, google.maps.Polygon or Feature<Polygon> and returns {@link Point|points} at all self-intersections.
 *
 * @name kinks
 * @param  {google.maps.Polyline|google.maps.Polygon|Array.<google.maps.LatLng>|Feature<Polygon>} object array of points, google.maps.Polygon or Feature<Polygon>
 * @returns {FeatureCollection<Point>} self-intersections
 *
 * var kinks = turf.kinks(poly);
 *
 * //addToMap
 * var addToMap = [poly, kinks]
 */
export function kinks(object) {
	var theFeature;
	if (object instanceof google.maps.Polyline) {
		theFeature = polylineToFeatureLinestring(object);
	} else {
		theFeature = polygonToFeaturePolygon(object);
	}


	return turk_kinks(theFeature);
}
