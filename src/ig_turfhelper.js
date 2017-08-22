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
    centroid
} from './components/utils.js';

import {
    toLatLngs,
    toCoords
} from './components/coords_to_latlng.js';

import {
    simplifyFeature,
    simplifyPointArray
} from './components/simplify_things.js';

import {
    along
} from './components/along.js';
import {
    union
} from './components/union.js';
import {
    createbuffer
} from './components/buffer.js';
import {
    pointInPolygon
} from './components/point_in_polygon.js';

import {
    kinks,
    trimPaths
} from './components/trimpaths.js';

/**
 * @alias module:turfHelper
 * @type {Object}
 */

export {
    along,
    arrayToFeaturePoints,
    centroid,
    createbuffer,
    pointInPolygon,
    polygonToFeaturePolygon,
    representGeometry,
    simplifyFeature,
    simplifyPointArray,
    toLatLngs,
    toCoords,
    trimPaths,
    kinks,
    union
};

export default {
    along: along,
    arrayToFeaturePoints: arrayToFeaturePoints,
    centroid: centroid,
    createbuffer: createbuffer,
    pointInPolygon: pointInPolygon,
    polygonToFeaturePolygon: polygonToFeaturePolygon,
    representGeometry: representGeometry,
    simplifyFeature: simplifyFeature,
    simplifyPointArray: simplifyPointArray,
    toLatLngs: toLatLngs,
    toCoords: toCoords,
    trimPaths: trimPaths,
    union: union,
    kinks: kinks
};
