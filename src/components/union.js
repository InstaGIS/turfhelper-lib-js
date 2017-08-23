import turf_union from '@turf/union';

/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */

/**
 * Superpone dos Feature.<Polygon>
 * @param  {Feature.<Polygon>} poly1 [description]
 * @param  {Feature.<Polygon>} poly2 [description]
 * @return {Feature.<Polygon>}       [description]
 */
export function union(poly1, poly2) {
	var FeatureUnion = turf_union(poly1, poly2);
	return FeatureUnion;
};
