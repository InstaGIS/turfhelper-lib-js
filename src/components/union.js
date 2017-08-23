import turf_union from '@turf/union';

/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */

import {
	polygonToFeaturePolygon,
} from './utils.js';

/**
 * Superpone dos Feature.<Polygon>
 * @param  {external:google.maps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon} poly1 object to transform into a Feature.Polygon
 * @param  {external:google.maps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon} poly1 object to transform into a Feature.Polygon
 * @return {Feature.<Polygon>|Feature.<MultiPolygon>}  result of the union. If inputs are disjoint, returns a Feature.Multipolygon
 */
export function union(poly1, poly2) {
	var featurePolygon1 = polygonToFeaturePolygon(poly1),
		featurePolygon2 = polygonToFeaturePolygon(poly2),
		FeatureUnion = turf_union(featurePolygon1, featurePolygon2);
	return FeatureUnion;
};
