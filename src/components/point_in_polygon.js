import turf_inside from '@turf/inside';
import {
	default as _each
} from 'lodash-es/forEach.js';


/**
 * Filtra un array determinando si los puntos están dentro de un Polígono GeoJSON
 * @param {Array<SimpleFeature>} sourceArray array de SimpleFeature
 * @param {geojson.Polygon|geojson.Multipolygon} geojsonPolygon  [description]
 * @return {Array<SimpleFeature>} filteredArray el array de SimpleFeature que cae dentro de geojsonPolygon
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
