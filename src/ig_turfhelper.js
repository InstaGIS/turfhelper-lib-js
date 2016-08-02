/**
 * The Google Maps Namespace
 * @external "google.maps"
 * @see {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs/|Google Maps API}
 */
/**
 * @external Promise
 * @see  {@link https://promisesaplus.com/}
 */
/**
 * @external "google.maps.LatLng"
 * @see  {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs//LatLng.md}
 */

/**
 * @external "google.maps.Polygon"
 * @see  {@link https://github.com/amenadiel/google-maps-documentation/blob/master/docs//Polygon.md}
 */

/**
 * Este módulo permite realizar operaciones entre los objetos de Google Maps
 * y la representación de éstos como geoJson, permitiendo realizar para ellos
 * operaciones geométricas que Google Maps no tiene.
 * @name turfHelper
 * @module turfHelper
 * @todo  hay que separar esto en modulos más chicos!!!
 */


import {
    representGeometry,
    polygonToFeaturePolygon,
    arrayToFeaturePoints,
    centroid,
    verticesInPolygon
} from './components/utils.js';

import {
    latlngToPoint,
    toLatLng,
    toLatLngs,
    toCoord,
    toCoords
} from './components/coords_to_latlng.js';

import {
    simplifyGeometry,
    simplifyFeature,
    simplifyPointArray
} from './components/simplify_things.js';

import { along } from './components/along.js';
import { union } from './components/union.js';
import { createbuffer } from './components/buffer.js';
import { pointInPolygon } from './components/point_in_polygon.js';

import { trimPaths } from './components/trimpaths.js';
import { cleanFeaturePolygon } from './components/cleanfeaturepolygon.js';

import { drawFeature } from './components/drawfeature.js';





/**
 * @alias module:turfHelper
 * @type {Object}
 */

export {

    along,
    arrayToFeaturePoints,
    createbuffer,
    centroid,
    cleanFeaturePolygon,
    latlngToPoint,
    pointInPolygon,
    polygonToFeaturePolygon,
    representGeometry,
    simplifyFeature,
    simplifyGeometry,
    simplifyPointArray,
    toCoord,
    toCoords,
    toLatLng,
    toLatLngs,
    trimPaths,
    union,
    verticesInPolygon
};
export default {

    along: along,
    arrayToFeaturePoints: arrayToFeaturePoints,
    createbuffer: createbuffer,
    centroid: centroid,
    cleanFeaturePolygon: cleanFeaturePolygon,
    latlngToPoint: latlngToPoint,
    pointInPolygon: pointInPolygon,
    polygonToFeaturePolygon: polygonToFeaturePolygon,
    representGeometry: representGeometry,
    simplifyFeature: simplifyFeature,
    simplifyGeometry: simplifyGeometry,
    simplifyPointArray: simplifyPointArray,
    toCoord: toCoord,
    toCoords: toCoords,
    toLatLng: toLatLng,
    toLatLngs: toLatLngs,
    trimPaths: trimPaths,
    union: union,
    verticesInPolygon: verticesInPolygon
};
