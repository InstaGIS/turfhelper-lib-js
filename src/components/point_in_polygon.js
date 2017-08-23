import turf_inside from '@turf/inside';
import {
	default as _each
} from 'lodash-es/forEach.js';


/**
 * Filters an array of points returning those who falls inside a given {@link Polygon}
 * @param {Array<Point>} sourceArray array de SimpleFeature
 * @param {Polygon|Multipolygon} geojsonPolygon  the polygon thay may contain the points
 * @return {Array<SimpleFeature>} filteredArray the array of points which fall inside the Polygon
 */
export function pointInPolygon(sourceArray, geojsonPolygon) {
	var pointsInside = [];
	var pointsOutside = [];
	if (geojsonPolygon.type !== 'Feature') {
		geojsonPolygon = {
			"type": "Feature",
			"properties": {},
			"geometry": geojsonPolygon
		};
	}
	if (geojsonPolygon.geometry.type !== 'Polygon' || geojsonPolygon.geometry.type !== 'Multipolygon') {
		_each(sourceArray, function (item) {

			var Point = item.getGeoJsonPointFeature ? item.getGeoJsonPointFeature() : item.element.getGeoJsonPointFeature();
			//console.zlog('Point is', Point);
			if (turf_inside(Point, geojsonPolygon)) {
				pointsInside.push(item);
			} else {
				pointsOutside.push(item);
			}
		});
	}

	return {
		pointsInside: pointsInside,
		pointsOutside: pointsOutside
	};
};
