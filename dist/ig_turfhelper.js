!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], ["17"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Creates a {@link LineString} {@link Feature} based on a
   * coordinate array. Properties can be added optionally.
   *
   * @module turf/linestring
   * @category helper
   * @param {Array<Array<Number>>} coordinates an array of Positions
   * @param {Object} properties an Object of key-value pairs to add as properties
   * @return {LineString} a LineString feature
   * @throws {Error} if no coordinates are passed
   * @example
   * var linestring1 = turf.linestring([
   *	[-21.964416, 64.148203],
   *	[-21.956176, 64.141316],
   *	[-21.93901, 64.135924],
   *	[-21.927337, 64.136673]
   * ]);
   * var linestring2 = turf.linestring([
   *	[-21.929054, 64.127985],
   *	[-21.912918, 64.134726],
   *	[-21.916007, 64.141016],
   * 	[-21.930084, 64.14446]
   * ], {name: 'line 1', distance: 145});
   *
   * //=linestring1
   *
   * //=linestring2
   */
  module.exports = function (coordinates, properties) {
    if (!coordinates) {
      throw new Error('No coordinates passed');
    }
    return {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": coordinates
      },
      "properties": properties || {}
    };
  };
  return module.exports;
});
$__System.registerDynamic('3', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Takes an array of LinearRings and optionally an {@link Object} with properties and returns a GeoJSON {@link Polygon} feature.
   *
   * @module turf/polygon
   * @category helper
   * @param {Array<Array<Number>>} rings an array of LinearRings
   * @param {Object} properties an optional properties object
   * @return {Polygon} a Polygon feature
   * @throws {Error} throw an error if a LinearRing of the polygon has too few positions
   * or if a LinearRing of the Polygon does not have matching Positions at the
   * beginning & end.
   * @example
   * var polygon = turf.polygon([[
   *  [-2.275543, 53.464547],
   *  [-2.275543, 53.489271],
   *  [-2.215118, 53.489271],
   *  [-2.215118, 53.464547],
   *  [-2.275543, 53.464547]
   * ]], { name: 'poly1', population: 400});
   *
   * //=polygon
   */
  module.exports = function (coordinates, properties) {

    if (coordinates === null) throw new Error('No coordinates passed');

    for (var i = 0; i < coordinates.length; i++) {
      var ring = coordinates[i];
      for (var j = 0; j < ring[ring.length - 1].length; j++) {
        if (ring.length < 4) {
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        }
        if (ring[ring.length - 1][j] !== ring[0][j]) {
          throw new Error('First and last Position are not equivalent.');
        }
      }
    }

    var polygon = {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": coordinates
      },
      "properties": properties
    };

    if (!polygon.properties) {
      polygon.properties = {};
    }

    return polygon;
  };
  return module.exports;
});
$__System.registerDynamic('4', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /**
     * Iterate over coordinates in any GeoJSON object, similar to
     * Array.forEach.
     *
     * @param {Object} layer any GeoJSON object
     * @param {Function} callback a method that takes (value)
     * @param {boolean=} excludeWrapCoord whether or not to include
     * the final coordinate of LinearRings that wraps the ring in its iteration.
     * @example
     * var point = { type: 'Point', coordinates: [0, 0] };
     * coordEach(point, function(coords) {
     *   // coords is equal to [0, 0]
     * });
     */
    function coordEach(layer, callback, excludeWrapCoord) {
        var i,
            j,
            k,
            g,
            l,
            geometry,
            stopG,
            coords,
            geometryMaybeCollection,
            wrapShrink = 0,
            isGeometryCollection,
            isFeatureCollection = layer.type === 'FeatureCollection',
            isFeature = layer.type === 'Feature',
            stop = isFeatureCollection ? layer.features.length : 1;

        // This logic may look a little weird. The reason why it is that way
        // is because it's trying to be fast. GeoJSON supports multiple kinds
        // of objects at its root: FeatureCollection, Features, Geometries.
        // This function has the responsibility of handling all of them, and that
        // means that some of the `for` loops you see below actually just don't apply
        // to certain inputs. For instance, if you give this just a
        // Point geometry, then both loops are short-circuited and all we do
        // is gradually rename the input until it's called 'geometry'.
        //
        // This also aims to allocate as few resources as possible: just a
        // few numbers and booleans, rather than any temporary arrays as would
        // be required with the normalization approach.
        for (i = 0; i < stop; i++) {

            geometryMaybeCollection = isFeatureCollection ? layer.features[i].geometry : isFeature ? layer.geometry : layer;
            isGeometryCollection = geometryMaybeCollection.type === 'GeometryCollection';
            stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

            for (g = 0; g < stopG; g++) {
                geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
                coords = geometry.coordinates;

                wrapShrink = excludeWrapCoord && (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') ? 1 : 0;

                if (geometry.type === 'Point') {
                    callback(coords);
                } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
                    for (j = 0; j < coords.length; j++) callback(coords[j]);
                } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
                    for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length - wrapShrink; k++) callback(coords[j][k]);
                } else if (geometry.type === 'MultiPolygon') {
                    for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length; k++) for (l = 0; l < coords[j][k].length - wrapShrink; l++) callback(coords[j][k][l]);
                } else {
                    throw new Error('Unknown Geometry Type');
                }
            }
        }
    }
    module.exports.coordEach = coordEach;

    /**
     * Reduce coordinates in any GeoJSON object into a single value,
     * similar to how Array.reduce works. However, in this case we lazily run
     * the reduction, so an array of all coordinates is unnecessary.
     *
     * @param {Object} layer any GeoJSON object
     * @param {Function} callback a method that takes (memo, value) and returns
     * a new memo
     * @param {*} memo the starting value of memo: can be any type.
     * @param {boolean=} excludeWrapCoord whether or not to include
     * the final coordinate of LinearRings that wraps the ring in its iteration.
     * @return {*} combined value
     */
    function coordReduce(layer, callback, memo, excludeWrapCoord) {
        coordEach(layer, function (coord) {
            memo = callback(memo, coord);
        }, excludeWrapCoord);
        return memo;
    }
    module.exports.coordReduce = coordReduce;

    /**
     * Iterate over property objects in any GeoJSON object, similar to
     * Array.forEach.
     *
     * @param {Object} layer any GeoJSON object
     * @param {Function} callback a method that takes (value)
     * @example
     * var point = { type: 'Feature', geometry: null, properties: { foo: 1 } };
     * propEach(point, function(props) {
     *   // props is equal to { foo: 1}
     * });
     */
    function propEach(layer, callback) {
        var i;
        switch (layer.type) {
            case 'FeatureCollection':
                for (i = 0; i < layer.features.length; i++) {
                    callback(layer.features[i].properties);
                }
                break;
            case 'Feature':
                callback(layer.properties);
                break;
        }
    }
    module.exports.propEach = propEach;

    /**
     * Reduce properties in any GeoJSON object into a single value,
     * similar to how Array.reduce works. However, in this case we lazily run
     * the reduction, so an array of all properties is unnecessary.
     *
     * @param {Object} layer any GeoJSON object
     * @param {Function} callback a method that takes (memo, coord) and returns
     * a new memo
     * @param {*} memo the starting value of memo: can be any type.
     * @return {*} combined value
     */
    function propReduce(layer, callback, memo) {
        propEach(layer, function (prop) {
            memo = callback(memo, prop);
        });
        return memo;
    }
    module.exports.propReduce = propReduce;

    /**
     * Iterate over features in any GeoJSON object, similar to
     * Array.forEach.
     *
     * @param {Object} layer any GeoJSON object
     * @param {Function} callback a method that takes (value)
     * @example
     * var feature = { type: 'Feature', geometry: null, properties: {} };
     * featureEach(feature, function(feature) {
     *   // feature == feature
     * });
     */
    function featureEach(layer, callback) {
        if (layer.type === 'Feature') {
            callback(layer);
        } else if (layer.type === 'FeatureCollection') {
            for (var i = 0; i < layer.features.length; i++) {
                callback(layer.features[i]);
            }
        }
    }
    module.exports.featureEach = featureEach;

    /**
     * Get all coordinates from any GeoJSON object, returning an array of coordinate
     * arrays.
     * @param {Object} layer any GeoJSON object
     * @return {Array<Array<Number>>} coordinate position array
     */
    function coordAll(layer) {
        var coords = [];
        coordEach(layer, function (coord) {
            coords.push(coord);
        });
        return coords;
    }
    module.exports.coordAll = coordAll;
    return module.exports;
});
$__System.registerDynamic('5', ['4', '6'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var each = $__require('4').coordEach;
    var point = $__require('6').point;

    /**
     * Takes one or more features and calculates the centroid using
     * the mean of all vertices.
     * This lessens the effect of small islands and artifacts when calculating
     * the centroid of a set of polygons.
     *
     * @name centroid
     * @param {(Feature|FeatureCollection)} features input features
     * @return {Feature<Point>} the centroid of the input features
     * @example
     * var poly = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[
     *       [105.818939,21.004714],
     *       [105.818939,21.061754],
     *       [105.890007,21.061754],
     *       [105.890007,21.004714],
     *       [105.818939,21.004714]
     *     ]]
     *   }
     * };
     *
     * var centroidPt = turf.centroid(poly);
     *
     * var result = {
     *   "type": "FeatureCollection",
     *   "features": [poly, centroidPt]
     * };
     *
     * //=result
     */
    module.exports = function (features) {
        var xSum = 0,
            ySum = 0,
            len = 0;
        each(features, function (coord) {
            xSum += coord[0];
            ySum += coord[1];
            len++;
        }, true);
        return point([xSum / len, ySum / len]);
    };
    return module.exports;
});
$__System.registerDynamic('7', ['8'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // look here for help http://svn.osgeo.org/grass/grass/branches/releasebranch_6_4/vector/v.overlay/main.c
    //must be array of polygons

    // depend on jsts for now https://github.com/bjornharrtell/jsts/blob/master/examples/overlay.html

    var jsts = $__require('8');

    /**
     * Takes two {@link Polygon|polygons} and returns a combined polygon. If the input polygons are not contiguous, this function returns a {@link MultiPolygon} feature.
     *
     * @name union
     * @param {Feature<Polygon>} poly1 input polygon
     * @param {Feature<Polygon>} poly2 another input polygon
     * @return {Feature<(Polygon|MultiPolygon)>} a combined {@link Polygon} or {@link MultiPolygon} feature
     * @example
     * var poly1 = {
     *   "type": "Feature",
     *   "properties": {
     *     "fill": "#0f0"
     *   },
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[
     *       [-82.574787, 35.594087],
     *       [-82.574787, 35.615581],
     *       [-82.545261, 35.615581],
     *       [-82.545261, 35.594087],
     *       [-82.574787, 35.594087]
     *     ]]
     *   }
     * };
     * var poly2 = {
     *   "type": "Feature",
     *   "properties": {
     *     "fill": "#00f"
     *   },
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[
     *       [-82.560024, 35.585153],
     *       [-82.560024, 35.602602],
     *       [-82.52964, 35.602602],
     *       [-82.52964, 35.585153],
     *       [-82.560024, 35.585153]
     *     ]]
     *   }
     * };
     * var polygons = {
     *   "type": "FeatureCollection",
     *   "features": [poly1, poly2]
     * };
     *
     * var union = turf.union(poly1, poly2);
     *
     * //=polygons
     *
     * //=union
     */
    module.exports = function (poly1, poly2) {
        var reader = new jsts.io.GeoJSONReader();
        var a = reader.read(JSON.stringify(poly1.geometry));
        var b = reader.read(JSON.stringify(poly2.geometry));
        var union = a.union(b);
        var writer = new jsts.io.GeoJSONWriter();

        union = writer.write(union);
        return {
            type: 'Feature',
            geometry: union,
            properties: poly1.properties
        };
    };
    return module.exports;
});
$__System.registerDynamic('9', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /*
     (c) 2013, Vladimir Agafonkin
     Simplify.js, a high-performance JS polyline simplification library
     mourner.github.io/simplify-js
    */

    (function () {
        'use strict';

        // to suit your point format, run search/replace for '.x' and '.y';
        // for 3D version, see 3d branch (configurability would draw significant performance overhead)

        // square distance between 2 points

        function getSqDist(p1, p2) {

            var dx = p1.x - p2.x,
                dy = p1.y - p2.y;

            return dx * dx + dy * dy;
        }

        // square distance from a point to a segment
        function getSqSegDist(p, p1, p2) {

            var x = p1.x,
                y = p1.y,
                dx = p2.x - x,
                dy = p2.y - y;

            if (dx !== 0 || dy !== 0) {

                var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);

                if (t > 1) {
                    x = p2.x;
                    y = p2.y;
                } else if (t > 0) {
                    x += dx * t;
                    y += dy * t;
                }
            }

            dx = p.x - x;
            dy = p.y - y;

            return dx * dx + dy * dy;
        }
        // rest of the code doesn't care about point format

        // basic distance-based simplification
        function simplifyRadialDist(points, sqTolerance) {

            var prevPoint = points[0],
                newPoints = [prevPoint],
                point;

            for (var i = 1, len = points.length; i < len; i++) {
                point = points[i];

                if (getSqDist(point, prevPoint) > sqTolerance) {
                    newPoints.push(point);
                    prevPoint = point;
                }
            }

            if (prevPoint !== point) newPoints.push(point);

            return newPoints;
        }

        // simplification using optimized Douglas-Peucker algorithm with recursion elimination
        function simplifyDouglasPeucker(points, sqTolerance) {

            var len = points.length,
                MarkerArray = typeof Uint8Array !== 'undefined' ? Uint8Array : Array,
                markers = new MarkerArray(len),
                first = 0,
                last = len - 1,
                stack = [],
                newPoints = [],
                i,
                maxSqDist,
                sqDist,
                index;

            markers[first] = markers[last] = 1;

            while (last) {

                maxSqDist = 0;

                for (i = first + 1; i < last; i++) {
                    sqDist = getSqSegDist(points[i], points[first], points[last]);

                    if (sqDist > maxSqDist) {
                        index = i;
                        maxSqDist = sqDist;
                    }
                }

                if (maxSqDist > sqTolerance) {
                    markers[index] = 1;
                    stack.push(first, index, index, last);
                }

                last = stack.pop();
                first = stack.pop();
            }

            for (i = 0; i < len; i++) {
                if (markers[i]) newPoints.push(points[i]);
            }

            return newPoints;
        }

        // both algorithms combined for awesome performance
        function simplify(points, tolerance, highestQuality) {

            var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;

            points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
            points = simplifyDouglasPeucker(points, sqTolerance);

            return points;
        }

        // export as AMD module / Node module / browser or worker variable
        if (typeof define === 'function' && define.amd) define(function () {
            return simplify;
        });else if (typeof module !== 'undefined') module.exports = simplify;else if (typeof self !== 'undefined') self.simplify = simplify;else window.simplify = simplify;
    })();
    return module.exports;
});
$__System.registerDynamic('a', ['9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var simplify = $__require('9');

    // supported GeoJSON geometries, used to check whether to wrap in simpleFeature()
    var supportedTypes = ['LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'];

    /**
     * Takes a {@link LineString} or {@link Polygon} and returns a simplified version. Internally uses [simplify-js](http://mourner.github.io/simplify-js/) to perform simplification.
     *
     * @name simplify
     * @param {Feature<(LineString|Polygon|MultiLineString|MultiPolygon)>|FeatureCollection|GeometryCollection} feature feature to be simplified
     * @param {number} tolerance simplification tolerance
     * @param {boolean} highQuality whether or not to spend more time to create
     * a higher-quality simplification with a different algorithm
     * @return {Feature<(LineString|Polygon|MultiLineString|MultiPolygon)>|FeatureCollection|GeometryCollection} a simplified feature
     * @example
      * var feature = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[
     *       [-70.603637, -33.399918],
     *       [-70.614624, -33.395332],
     *       [-70.639343, -33.392466],
     *       [-70.659942, -33.394759],
     *       [-70.683975, -33.404504],
     *       [-70.697021, -33.419406],
     *       [-70.701141, -33.434306],
     *       [-70.700454, -33.446339],
     *       [-70.694274, -33.458369],
     *       [-70.682601, -33.465816],
     *       [-70.668869, -33.472117],
     *       [-70.646209, -33.473835],
     *       [-70.624923, -33.472117],
     *       [-70.609817, -33.468107],
     *       [-70.595397, -33.458369],
     *       [-70.587158, -33.442901],
     *       [-70.587158, -33.426283],
     *       [-70.590591, -33.414248],
     *       [-70.594711, -33.406224],
     *       [-70.603637, -33.399918]
     *     ]]
     *   }
     * };
    
     * var tolerance = 0.01;
     *
     * var simplified = turf.simplify(
     *  feature, tolerance, false);
     *
     * //=feature
     *
     * //=simplified
     */
    module.exports = function (feature, tolerance, highQuality) {
        if (feature.type === 'Feature') {
            return simpleFeature(simplifyHelper(feature, tolerance, highQuality), feature.properties);
        } else if (feature.type === 'FeatureCollection') {
            return {
                type: 'FeatureCollection',
                features: feature.features.map(function (f) {
                    var simplified = simplifyHelper(f, tolerance, highQuality);

                    // we create simpleFeature here because it doesn't apply to GeometryCollection
                    // so we can't create it at simplifyHelper()
                    if (supportedTypes.indexOf(simplified.type) > -1) {
                        return simpleFeature(simplified, f.properties);
                    } else {
                        return simplified;
                    }
                })
            };
        } else if (feature.type === 'GeometryCollection') {
            return {
                type: 'GeometryCollection',
                geometries: feature.geometries.map(function (g) {
                    if (supportedTypes.indexOf(g.type) > -1) {
                        return simplifyHelper({
                            type: 'Feature',
                            geometry: g
                        }, tolerance, highQuality);
                    }
                    return g;
                })
            };
        } else {
            return feature;
        }
    };

    function simplifyHelper(feature, tolerance, highQuality) {
        if (feature.geometry.type === 'LineString') {
            return {
                type: 'LineString',
                coordinates: simplifyLine(feature.geometry.coordinates, tolerance, highQuality)
            };
        } else if (feature.geometry.type === 'MultiLineString') {
            return {
                type: 'MultiLineString',
                coordinates: feature.geometry.coordinates.map(function (lines) {
                    return simplifyLine(lines, tolerance, highQuality);
                })
            };
        } else if (feature.geometry.type === 'Polygon') {
            return {
                type: 'Polygon',
                coordinates: simplifyPolygon(feature.geometry.coordinates, tolerance, highQuality)
            };
        } else if (feature.geometry.type === 'MultiPolygon') {
            return {
                type: 'MultiPolygon',
                coordinates: feature.geometry.coordinates.map(function (rings) {
                    return simplifyPolygon(rings, tolerance, highQuality);
                })
            };
        } else {
            // unsupported geometry type supplied
            return feature;
        }
    }

    /*
    * returns true if ring's first coordinate is the same as its last
    */
    function checkValidity(ring) {
        if (ring.length < 3) {
            return false;
            //if the last point is the same as the first, it's not a triangle
        } else if (ring.length === 3 && ring[2][0] === ring[0][0] && ring[2][1] === ring[0][1]) {
            return false;
        } else {
            return true;
        }
    }

    function simpleFeature(geom, properties) {
        return {
            type: 'Feature',
            geometry: geom,
            properties: properties
        };
    }

    function simplifyLine(coordinates, tolerance, highQuality) {
        return simplify(coordinates.map(function (coord) {
            return { x: coord[0], y: coord[1] };
        }), tolerance, highQuality).map(function (coords) {
            return [coords.x, coords.y];
        });
    }

    function simplifyPolygon(coordinates, tolerance, highQuality) {
        return coordinates.map(function (ring) {
            var pts = ring.map(function (coord) {
                return { x: coord[0], y: coord[1] };
            });
            if (pts.length < 4) {
                throw new Error('Invalid polygon');
            }
            var simpleRing = simplify(pts, tolerance, highQuality).map(function (coords) {
                return [coords.x, coords.y];
            });
            //remove 1 percent of tolerance until enough points to make a triangle
            while (!checkValidity(simpleRing)) {
                tolerance -= tolerance * 0.01;
                simpleRing = simplify(pts, tolerance, highQuality).map(function (coords) {
                    return [coords.x, coords.y];
                });
            }
            if (simpleRing[simpleRing.length - 1][0] !== simpleRing[0][0] || simpleRing[simpleRing.length - 1][1] !== simpleRing[0][1]) {
                simpleRing.push(simpleRing[0]);
            }
            return simpleRing;
        });
    }
    return module.exports;
});
$__System.registerDynamic('b', ['c', '6', 'd', 'e'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var measureDistance = $__require('c');
    var point = $__require('6').point;
    var bearing = $__require('d');
    var destination = $__require('e');

    /**
     * Takes a {@link LineString|line} and returns a {@link Point|point} at a specified distance along the line.
     *
     * @name along
     * @param {Feature<LineString>} line input line
     * @param {number} distance distance along the line
     * @param {String} [units=miles] can be degrees, radians, miles, or kilometers
     * @return {Feature<Point>} Point `distance` `units` along the line
     * @example
     * var line = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "LineString",
     *     "coordinates": [
     *       [-77.031669, 38.878605],
     *       [-77.029609, 38.881946],
     *       [-77.020339, 38.884084],
     *       [-77.025661, 38.885821],
     *       [-77.021884, 38.889563],
     *       [-77.019824, 38.892368]
     *     ]
     *   }
     * };
     *
     * var along = turf.along(line, 1, 'miles');
     *
     * var result = {
     *   "type": "FeatureCollection",
     *   "features": [line, along]
     * };
     *
     * //=result
     */
    module.exports = function (line, distance, units) {
        var coords;
        if (line.type === 'Feature') coords = line.geometry.coordinates;else if (line.type === 'LineString') coords = line.coordinates;else throw new Error('input must be a LineString Feature or Geometry');

        var travelled = 0;
        for (var i = 0; i < coords.length; i++) {
            if (distance >= travelled && i === coords.length - 1) break;else if (travelled >= distance) {
                var overshot = distance - travelled;
                if (!overshot) return point(coords[i]);else {
                    var direction = bearing(coords[i], coords[i - 1]) - 180;
                    var interpolated = destination(coords[i], overshot, direction, units);
                    return interpolated;
                }
            } else {
                travelled += measureDistance(coords[i], coords[i + 1], units);
            }
        }
        return point(coords[coords.length - 1]);
    };
    return module.exports;
});
(function() {
var define = $__System.amdDefine;
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define("8", ["exports"], e) : e(t.jsts = t.jsts || {});
}(this, function(t) {
  "use strict";
  function e(t, e) {
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  }
  function n() {}
  function i() {}
  function r() {}
  function s() {}
  function o() {}
  function a() {}
  function u() {}
  function l(t) {
    this.message = t;
  }
  function h(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
  }
  function c() {
    if (0 === arguments.length)
      l.call(this);
    else if (1 === arguments.length) {
      var t = arguments[0];
      l.call(this, t);
    }
  }
  function f() {}
  function g() {
    if (this.x = null, this.y = null, this.z = null, 0 === arguments.length)
      g.call(this, 0, 0);
    else if (1 === arguments.length) {
      var t = arguments[0];
      g.call(this, t.x, t.y, t.z);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      g.call(this, e, n, g.NULL_ORDINATE);
    } else if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];
      this.x = i, this.y = r, this.z = s;
    }
  }
  function d() {
    if (this.dimensionsToTest = 2, 0 === arguments.length)
      d.call(this, 2);
    else if (1 === arguments.length) {
      var t = arguments[0];
      if (2 !== t && 3 !== t)
        throw new i("only 2 or 3 dimensions may be specified");
      this.dimensionsToTest = t;
    }
  }
  function p() {}
  function v() {}
  function m(t) {
    this.message = t || "";
  }
  function y() {}
  function x(t) {
    this.message = t || "";
  }
  function E(t) {
    this.message = t || "";
  }
  function I() {
    this.array_ = [], arguments[0] instanceof v && this.addAll(arguments[0]);
  }
  function N() {
    if (I.apply(this), 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.ensureCapacity(t.length), this.add(t, !0);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.ensureCapacity(e.length), this.add(e, n);
    }
  }
  function C() {
    if (this.minx = null, this.maxx = null, this.miny = null, this.maxy = null, 0 === arguments.length)
      this.init();
    else if (1 === arguments.length) {
      if (arguments[0] instanceof g) {
        var t = arguments[0];
        this.init(t.x, t.x, t.y, t.y);
      } else if (arguments[0] instanceof C) {
        var e = arguments[0];
        this.init(e);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];
      this.init(n.x, i.x, n.y, i.y);
    } else if (4 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          a = arguments[3];
      this.init(r, s, o, a);
    }
  }
  function S() {}
  function w() {
    S.call(this, "Projective point not representable on the Cartesian plane.");
  }
  function L() {}
  function R(t, e) {
    return t.interfaces_ && t.interfaces_().indexOf(e) > -1;
  }
  function T() {}
  function P(t) {
    this.str = t;
  }
  function b(t) {
    this.value = t;
  }
  function O() {}
  function _() {
    if (this.hi = 0, this.lo = 0, 0 === arguments.length)
      this.init(0);
    else if (1 === arguments.length) {
      if ("number" == typeof arguments[0]) {
        var t = arguments[0];
        this.init(t);
      } else if (arguments[0] instanceof _) {
        var e = arguments[0];
        this.init(e);
      } else if ("string" == typeof arguments[0]) {
        var n = arguments[0];
        _.call(this, _.parse(n));
      }
    } else if (2 === arguments.length) {
      var i = arguments[0],
          r = arguments[1];
      this.init(i, r);
    }
  }
  function M() {}
  function D() {}
  function A() {}
  function F() {
    if (this.x = null, this.y = null, this.w = null, 0 === arguments.length)
      this.x = 0, this.y = 0, this.w = 1;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.x = t.x, this.y = t.y, this.w = 1;
    } else if (2 === arguments.length) {
      if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var e = arguments[0],
            n = arguments[1];
        this.x = e, this.y = n, this.w = 1;
      } else if (arguments[0] instanceof F && arguments[1] instanceof F) {
        var i = arguments[0],
            r = arguments[1];
        this.x = i.y * r.w - r.y * i.w, this.y = r.x * i.w - i.x * r.w, this.w = i.x * r.y - r.x * i.y;
      } else if (arguments[0] instanceof g && arguments[1] instanceof g) {
        var s = arguments[0],
            o = arguments[1];
        this.x = s.y - o.y, this.y = o.x - s.x, this.w = s.x * o.y - o.x * s.y;
      }
    } else if (3 === arguments.length) {
      var a = arguments[0],
          u = arguments[1],
          l = arguments[2];
      this.x = a, this.y = u, this.w = l;
    } else if (4 === arguments.length) {
      var h = arguments[0],
          c = arguments[1],
          f = arguments[2],
          d = arguments[3],
          p = h.y - c.y,
          v = c.x - h.x,
          m = h.x * c.y - c.x * h.y,
          y = f.y - d.y,
          x = d.x - f.x,
          E = f.x * d.y - d.x * f.y;
      this.x = v * E - x * m, this.y = y * m - p * E, this.w = p * x - y * v;
    }
  }
  function G() {}
  function q() {}
  function B() {
    this.envelope = null, this.factory = null, this.SRID = null, this.userData = null;
    var t = arguments[0];
    this.factory = t, this.SRID = t.getSRID();
  }
  function z() {}
  function V() {}
  function k() {}
  function Y() {}
  function U() {}
  function X() {}
  function H() {}
  function W() {}
  function j() {}
  function K() {}
  function Z() {}
  function Q() {}
  function J() {
    this.array_ = [], arguments[0] instanceof v && this.addAll(arguments[0]);
  }
  function $(t) {
    return null == t ? $s : t.color;
  }
  function tt(t) {
    return null == t ? null : t.parent;
  }
  function et(t, e) {
    null !== t && (t.color = e);
  }
  function nt(t) {
    return null == t ? null : t.left;
  }
  function it(t) {
    return null == t ? null : t.right;
  }
  function rt() {
    this.root_ = null, this.size_ = 0;
  }
  function st() {}
  function ot() {}
  function at() {
    this.array_ = [], arguments[0] instanceof v && this.addAll(arguments[0]);
  }
  function ut() {}
  function lt() {}
  function ht() {}
  function ct() {}
  function ft() {
    this.geometries = null;
    var t = arguments[0],
        e = arguments[1];
    if (B.call(this, e), null === t && (t = []), B.hasNullElements(t))
      throw new i("geometries must not contain null elements");
    this.geometries = t;
  }
  function gt() {
    var t = arguments[0],
        e = arguments[1];
    ft.call(this, t, e);
  }
  function dt() {
    if (this.geom = null, this.geomFact = null, this.bnRule = null, this.endpointMap = null, 1 === arguments.length) {
      var t = arguments[0];
      dt.call(this, t, V.MOD2_BOUNDARY_RULE);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.geom = e, this.geomFact = e.getFactory(), this.bnRule = n;
    }
  }
  function pt() {
    this.count = null;
  }
  function vt() {}
  function mt() {}
  function yt() {}
  function xt() {}
  function Et() {}
  function It() {}
  function Nt() {}
  function Ct() {}
  function St() {
    this.points = null;
    var t = arguments[0],
        e = arguments[1];
    B.call(this, e), this.init(t);
  }
  function wt() {}
  function Lt() {
    this.coordinates = null;
    var t = arguments[0],
        e = arguments[1];
    B.call(this, e), this.init(t);
  }
  function Rt() {}
  function Tt() {
    this.shell = null, this.holes = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    if (B.call(this, n), null === t && (t = this.getFactory().createLinearRing()), null === e && (e = []), B.hasNullElements(e))
      throw new i("holes must not contain null elements");
    if (t.isEmpty() && B.hasNonEmptyElements(e))
      throw new i("shell is empty but holes are not");
    this.shell = t, this.holes = e;
  }
  function Pt() {
    var t = arguments[0],
        e = arguments[1];
    ft.call(this, t, e);
  }
  function bt() {
    if (arguments[0] instanceof g && arguments[1] instanceof ie) {
      var t = arguments[0],
          e = arguments[1];
      bt.call(this, e.getCoordinateSequenceFactory().create(t), e);
    } else if (R(arguments[0], D) && arguments[1] instanceof ie) {
      var n = arguments[0],
          i = arguments[1];
      St.call(this, n, i), this.validateConstruction();
    }
  }
  function Ot() {
    var t = arguments[0],
        e = arguments[1];
    ft.call(this, t, e);
  }
  function _t() {
    if (this.factory = null, this.isUserDataCopied = !1, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.factory = t;
    }
  }
  function Mt() {}
  function Dt() {}
  function At() {}
  function Ft() {}
  function Gt() {
    if (this.dimension = 3, this.coordinates = null, 1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var t = arguments[0];
        Gt.call(this, t, 3);
      } else if (Number.isInteger(arguments[0])) {
        var e = arguments[0];
        this.coordinates = new Array(e).fill(null);
        for (var n = 0; e > n; n++)
          this.coordinates[n] = new g;
      } else if (R(arguments[0], D)) {
        var i = arguments[0];
        if (null === i)
          return this.coordinates = new Array(0).fill(null), null;
        this.dimension = i.getDimension(), this.coordinates = new Array(i.size()).fill(null);
        for (var n = 0; n < this.coordinates.length; n++)
          this.coordinates[n] = i.getCoordinateCopy(n);
      }
    } else if (2 === arguments.length)
      if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
        var r = arguments[0],
            s = arguments[1];
        this.coordinates = r, this.dimension = s, null === r && (this.coordinates = new Array(0).fill(null));
      } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        var o = arguments[0],
            a = arguments[1];
        this.coordinates = new Array(o).fill(null), this.dimension = a;
        for (var n = 0; o > n; n++)
          this.coordinates[n] = new g;
      }
  }
  function qt() {}
  function Bt(t, e) {
    return t === e || t !== t && e !== e;
  }
  function zt(t, e) {
    function n(t) {
      return this && this.constructor === n ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = e, void(t && Vt.call(this, t))) : new n(t);
    }
    return e || io(t, "size", {get: Jt}), t.constructor = n, n.prototype = t, n;
  }
  function Vt(t) {
    this.add ? t.forEach(this.add, this) : t.forEach(function(t) {
      this.set(t[0], t[1]);
    }, this);
  }
  function kt(t) {
    return this.has(t) && (this._keys.splice(no, 1), this._values.splice(no, 1), this._itp.forEach(function(t) {
      no < t[0] && t[0]--;
    })), no > -1;
  }
  function Yt(t) {
    return this.has(t) ? this._values[no] : void 0;
  }
  function Ut(t, e) {
    if (this.objectOnly && e !== Object(e))
      throw new TypeError("Invalid value used as weak collection key");
    if (e !== e || 0 === e)
      for (no = t.length; no-- && !Bt(t[no], e); )
        ;
    else
      no = t.indexOf(e);
    return no > -1;
  }
  function Xt(t) {
    return Ut.call(this, this._keys, t);
  }
  function Ht(t, e) {
    return this.has(t) ? this._values[no] = e : this._values[this._keys.push(t) - 1] = e, this;
  }
  function Wt() {
    (this._keys || 0).length = this._values.length = 0;
  }
  function jt() {
    return Qt(this._itp, this._keys);
  }
  function Kt() {
    return Qt(this._itp, this._values);
  }
  function Zt() {
    return Qt(this._itp, this._keys, this._values);
  }
  function Qt(t, e, n) {
    var i = [0],
        r = !1;
    return t.push(i), {next: function() {
        var s,
            o = i[0];
        return !r && o < e.length ? (s = n ? [e[o], n[o]] : e[o], i[0]++) : (r = !0, t.splice(t.indexOf(i), 1)), {
          done: r,
          value: s
        };
      }};
  }
  function Jt() {
    return this._values.length;
  }
  function $t(t, e) {
    for (var n = this.entries(); ; ) {
      var i = n.next();
      if (i.done)
        break;
      t.call(e, i.value[1], i.value[0], this);
    }
  }
  function te() {
    this.map_ = new so;
  }
  function ee() {
    if (this.modelType = null, this.scale = null, 0 === arguments.length)
      this.modelType = ee.FLOATING;
    else if (1 === arguments.length)
      if (arguments[0] instanceof ne) {
        var t = arguments[0];
        this.modelType = t, t === ee.FIXED && this.setScale(1);
      } else if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        this.modelType = ee.FIXED, this.setScale(e);
      } else if (arguments[0] instanceof ee) {
        var n = arguments[0];
        this.modelType = n.modelType, this.scale = n.scale;
      }
  }
  function ne() {
    this.name = null;
    var t = arguments[0];
    this.name = t, ne.nameToTypeMap.put(t, this);
  }
  function ie() {
    if (this.precisionModel = null, this.coordinateSequenceFactory = null, this.SRID = null, 0 === arguments.length)
      ie.call(this, new ee, 0);
    else if (1 === arguments.length) {
      if (R(arguments[0], G)) {
        var t = arguments[0];
        ie.call(this, new ee, 0, t);
      } else if (arguments[0] instanceof ee) {
        var e = arguments[0];
        ie.call(this, e, 0, ie.getDefaultCoordinateSequenceFactory());
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];
      ie.call(this, n, i, ie.getDefaultCoordinateSequenceFactory());
    } else if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];
      this.precisionModel = r, this.coordinateSequenceFactory = o, this.SRID = s;
    }
  }
  function re(t) {
    this.geometryFactory = t || new ie;
  }
  function se(t) {
    this.parser = new re(t);
  }
  function oe() {
    this.result = null, this.inputLines = Array(2).fill().map(function() {
      return Array(2);
    }), this.intPt = new Array(2).fill(null), this.intLineIndex = null, this._isProper = null, this.pa = null, this.pb = null, this.precisionModel = null, this.intPt[0] = new g, this.intPt[1] = new g, this.pa = this.intPt[0], this.pb = this.intPt[1], this.result = 0;
  }
  function ae() {
    oe.apply(this);
  }
  function ue() {}
  function le() {
    this.p = null, this.crossingCount = 0, this.isPointOnSegment = !1;
    var t = arguments[0];
    this.p = t;
  }
  function he() {}
  function ce() {
    if (this.p0 = null, this.p1 = null, 0 === arguments.length)
      ce.call(this, new g, new g);
    else if (1 === arguments.length) {
      var t = arguments[0];
      ce.call(this, t.p0, t.p1);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.p0 = e, this.p1 = n;
    } else if (4 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3];
      ce.call(this, new g(i, r), new g(s, o));
    }
  }
  function fe() {
    if (this.matrix = null, 0 === arguments.length)
      this.matrix = Array(3).fill().map(function() {
        return Array(3);
      }), this.setAll(lt.FALSE);
    else if (1 === arguments.length)
      if ("string" == typeof arguments[0]) {
        var t = arguments[0];
        fe.call(this), this.set(t);
      } else if (arguments[0] instanceof fe) {
        var e = arguments[0];
        fe.call(this), this.matrix[L.INTERIOR][L.INTERIOR] = e.matrix[L.INTERIOR][L.INTERIOR], this.matrix[L.INTERIOR][L.BOUNDARY] = e.matrix[L.INTERIOR][L.BOUNDARY], this.matrix[L.INTERIOR][L.EXTERIOR] = e.matrix[L.INTERIOR][L.EXTERIOR], this.matrix[L.BOUNDARY][L.INTERIOR] = e.matrix[L.BOUNDARY][L.INTERIOR], this.matrix[L.BOUNDARY][L.BOUNDARY] = e.matrix[L.BOUNDARY][L.BOUNDARY], this.matrix[L.BOUNDARY][L.EXTERIOR] = e.matrix[L.BOUNDARY][L.EXTERIOR], this.matrix[L.EXTERIOR][L.INTERIOR] = e.matrix[L.EXTERIOR][L.INTERIOR], this.matrix[L.EXTERIOR][L.BOUNDARY] = e.matrix[L.EXTERIOR][L.BOUNDARY], this.matrix[L.EXTERIOR][L.EXTERIOR] = e.matrix[L.EXTERIOR][L.EXTERIOR];
      }
  }
  function ge() {
    this.areaBasePt = null, this.triangleCent3 = new g, this.areasum2 = 0, this.cg3 = new g, this.lineCentSum = new g, this.totalLength = 0, this.ptCount = 0, this.ptCentSum = new g;
    var t = arguments[0];
    this.areaBasePt = null, this.add(t);
  }
  function de(t) {
    this.message = t || "";
  }
  function pe() {
    this.array_ = [];
  }
  function ve() {
    this.treeSet = new at, this.list = new I;
  }
  function me() {
    if (this.geomFactory = null, this.inputPts = null, 1 === arguments.length) {
      var t = arguments[0];
      me.call(this, me.extractCoordinates(t), t.getFactory());
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.inputPts = ve.filterCoordinates(e), this.geomFactory = n;
    }
  }
  function ye() {
    this.origin = null;
    var t = arguments[0];
    this.origin = t;
  }
  function xe() {
    this.inputGeom = null, this.factory = null, this.pruneEmptyGeometry = !0, this.preserveGeometryCollectionType = !0, this.preserveCollections = !1, this.preserveType = !1;
  }
  function Ee() {
    if (this.snapTolerance = 0, this.srcPts = null, this.seg = new ce, this.allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof St && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];
      Ee.call(this, t.getCoordinates(), e);
    } else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
      var n = arguments[0],
          i = arguments[1];
      this.srcPts = n, this._isClosed = Ee.isClosed(n), this.snapTolerance = i;
    }
  }
  function Ie() {
    this.srcGeom = null;
    var t = arguments[0];
    this.srcGeom = t;
  }
  function Ne() {
    if (xe.apply(this), this.snapTolerance = null, this.snapPts = null, this.isSelfSnap = !1, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      this.snapTolerance = t, this.snapPts = e;
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      this.snapTolerance = n, this.snapPts = i, this.isSelfSnap = r;
    }
  }
  function Ce() {
    this.isFirst = !0, this.commonMantissaBitsCount = 53, this.commonBits = 0, this.commonSignExp = null;
  }
  function Se() {
    this.commonCoord = null, this.ccFilter = new we;
  }
  function we() {
    this.commonBitsX = new Ce, this.commonBitsY = new Ce;
  }
  function Le() {
    this.trans = null;
    var t = arguments[0];
    this.trans = t;
  }
  function Re() {
    this.parent = null, this.atStart = null, this.max = null, this.index = null, this.subcollectionIterator = null;
    var t = arguments[0];
    this.parent = t, this.atStart = !0, this.index = 0, this.max = t.getNumGeometries();
  }
  function Te() {
    if (this.boundaryRule = V.OGC_SFS_BOUNDARY_RULE, this.isIn = null, this.numBoundaries = null, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      if (null === t)
        throw new i("Rule must be non-null");
      this.boundaryRule = t;
    }
  }
  function Pe() {}
  function be() {}
  function Oe() {
    this.pts = null, this.data = null;
    var t = arguments[0],
        e = arguments[1];
    this.pts = t, this.data = e;
  }
  function _e() {}
  function Me() {
    this.bounds = null, this.item = null;
    var t = arguments[0],
        e = arguments[1];
    this.bounds = t, this.item = e;
  }
  function De() {
    this._size = null, this.items = null, this._size = 0, this.items = new I, this.items.add(null);
  }
  function Ae() {}
  function Fe() {}
  function Ge() {
    if (this.childBoundables = new I, this.bounds = null, this.level = null, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.level = t;
    }
  }
  function qe() {
    this.boundable1 = null, this.boundable2 = null, this._distance = null, this.itemDistance = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.boundable1 = t, this.boundable2 = e, this.itemDistance = n, this._distance = this.distance();
  }
  function Be() {
    if (this.root = null, this.built = !1, this.itemBoundables = new I, this.nodeCapacity = null, 0 === arguments.length)
      Be.call(this, Be.DEFAULT_NODE_CAPACITY);
    else if (1 === arguments.length) {
      var t = arguments[0];
      f.isTrue(t > 1, "Node capacity must be greater than 1"), this.nodeCapacity = t;
    }
  }
  function ze() {}
  function Ve() {}
  function ke() {
    if (0 === arguments.length)
      ke.call(this, ke.DEFAULT_NODE_CAPACITY);
    else if (1 === arguments.length) {
      var t = arguments[0];
      Be.call(this, t);
    }
  }
  function Ye() {
    var t = arguments[0];
    Ge.call(this, t);
  }
  function Ue() {}
  function Xe() {
    this.segString = null, this.coord = null, this.segmentIndex = null, this.segmentOctant = null, this._isInterior = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];
    this.segString = t, this.coord = new g(e), this.segmentIndex = n, this.segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
  }
  function He() {
    this.nodeMap = new rt, this.edge = null;
    var t = arguments[0];
    this.edge = t;
  }
  function We() {
    this.nodeList = null, this.edge = null, this.nodeIt = null, this.currNode = null, this.nextNode = null, this.currSegIndex = 0;
    var t = arguments[0];
    this.nodeList = t, this.edge = t.getEdge(), this.nodeIt = t.iterator(), this.readNextNode();
  }
  function je() {}
  function Ke() {
    this.nodeList = new He(this), this.pts = null, this.data = null;
    var t = arguments[0],
        e = arguments[1];
    this.pts = t, this.data = e;
  }
  function Ze() {
    this.tempEnv1 = new C, this.tempEnv2 = new C, this.overlapSeg1 = new ce, this.overlapSeg2 = new ce;
  }
  function Qe() {
    this.pts = null, this.start = null, this.end = null, this.env = null, this.context = null, this.id = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];
    this.pts = t, this.start = e, this.end = n, this.context = i;
  }
  function Je() {}
  function $e() {}
  function tn() {}
  function en() {
    if (this.segInt = null, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
  function nn() {
    if (this.monoChains = new I, this.index = new ke, this.idCounter = 0, this.nodedSegStrings = null, this.nOverlaps = 0, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      en.call(this, t);
    }
  }
  function rn() {
    Ze.apply(this), this.si = null;
    var t = arguments[0];
    this.si = t;
  }
  function sn() {
    if (this.pt = null, 1 === arguments.length) {
      var t = arguments[0];
      l.call(this, t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      l.call(this, sn.msgWithCoord(e, n)), this.pt = new g(n);
    }
  }
  function on() {}
  function an() {
    this.findAllIntersections = !1, this.isCheckEndSegmentsOnly = !1, this.li = null, this.interiorIntersection = null, this.intSegments = null, this.intersections = new I, this.intersectionCount = 0, this.keepIntersections = !0;
    var t = arguments[0];
    this.li = t, this.interiorIntersection = null;
  }
  function un() {
    this.li = new ae, this.segStrings = null, this.findAllIntersections = !1, this.segInt = null, this._isValid = !0;
    var t = arguments[0];
    this.segStrings = t;
  }
  function ln() {
    this.nv = null;
    var t = arguments[0];
    this.nv = new un(ln.toSegmentStrings(t));
  }
  function hn() {
    this.mapOp = null;
    var t = arguments[0];
    this.mapOp = t;
  }
  function cn() {}
  function fn() {
    if (this.location = null, 1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var t = arguments[0];
        this.init(t.length);
      } else if (Number.isInteger(arguments[0])) {
        var e = arguments[0];
        this.init(1), this.location[cn.ON] = e;
      } else if (arguments[0] instanceof fn) {
        var n = arguments[0];
        if (this.init(n.location.length), null !== n)
          for (var i = 0; i < this.location.length; i++)
            this.location[i] = n.location[i];
      }
    } else if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];
      this.init(3), this.location[cn.ON] = r, this.location[cn.LEFT] = s, this.location[cn.RIGHT] = o;
    }
  }
  function gn() {
    if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
      if (Number.isInteger(arguments[0])) {
        var t = arguments[0];
        this.elt[0] = new fn(t), this.elt[1] = new fn(t);
      } else if (arguments[0] instanceof gn) {
        var e = arguments[0];
        this.elt[0] = new fn(e.elt[0]), this.elt[1] = new fn(e.elt[1]);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];
      this.elt[0] = new fn(L.NONE), this.elt[1] = new fn(L.NONE), this.elt[n].setLocation(i);
    } else if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];
      this.elt[0] = new fn(r, s, o), this.elt[1] = new fn(r, s, o);
    } else if (4 === arguments.length) {
      var a = arguments[0],
          u = arguments[1],
          l = arguments[2],
          h = arguments[3];
      this.elt[0] = new fn(L.NONE, L.NONE, L.NONE), this.elt[1] = new fn(L.NONE, L.NONE, L.NONE), this.elt[a].setLocations(u, l, h);
    }
  }
  function dn() {
    this.startDe = null, this.maxNodeDegree = -1, this.edges = new I, this.pts = new I, this.label = new gn(L.NONE), this.ring = null, this._isHole = null, this.shell = null, this.holes = new I, this.geometryFactory = null;
    var t = arguments[0],
        e = arguments[1];
    this.geometryFactory = e, this.computePoints(t), this.computeRing();
  }
  function pn() {
    var t = arguments[0],
        e = arguments[1];
    dn.call(this, t, e);
  }
  function vn() {
    var t = arguments[0],
        e = arguments[1];
    dn.call(this, t, e);
  }
  function mn() {
    if (this.label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.label = t;
    }
  }
  function yn() {
    mn.apply(this), this.coord = null, this.edges = null;
    var t = arguments[0],
        e = arguments[1];
    this.coord = t, this.edges = e, this.label = new gn(0, L.NONE);
  }
  function xn() {
    this.nodeMap = new rt, this.nodeFact = null;
    var t = arguments[0];
    this.nodeFact = t;
  }
  function En() {
    if (this.edge = null, this.label = null, this.node = null, this.p0 = null, this.p1 = null, this.dx = null, this.dy = null, this.quadrant = null, 1 === arguments.length) {
      var t = arguments[0];
      this.edge = t;
    } else if (3 === arguments.length) {
      var e = arguments[0],
          n = arguments[1],
          i = arguments[2];
      En.call(this, e, n, i, null);
    } else if (4 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          a = arguments[3];
      En.call(this, r), this.init(s, o), this.label = a;
    }
  }
  function In() {
    this._isForward = null, this._isInResult = !1, this._isVisited = !1, this.sym = null, this.next = null, this.nextMin = null, this.edgeRing = null, this.minEdgeRing = null, this.depth = [0, -999, -999];
    var t = arguments[0],
        e = arguments[1];
    if (En.call(this, t), this._isForward = e, e)
      this.init(t.getCoordinate(0), t.getCoordinate(1));
    else {
      var n = t.getNumPoints() - 1;
      this.init(t.getCoordinate(n), t.getCoordinate(n - 1));
    }
    this.computeDirectedLabel();
  }
  function Nn() {}
  function Cn() {
    if (this.edges = new I, this.nodes = null, this.edgeEndList = new I, 0 === arguments.length)
      this.nodes = new xn(new Nn);
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.nodes = new xn(t);
    }
  }
  function Sn() {
    this.geometryFactory = null, this.shellList = new I;
    var t = arguments[0];
    this.geometryFactory = t;
  }
  function wn() {
    this.op = null, this.geometryFactory = null, this.ptLocator = null, this.lineEdgesList = new I, this.resultLineList = new I;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.op = t, this.geometryFactory = e, this.ptLocator = n;
  }
  function Ln() {
    this.op = null, this.geometryFactory = null, this.resultPointList = new I;
    var t = arguments[0],
        e = arguments[1];
    arguments[2];
    this.op = t, this.geometryFactory = e;
  }
  function Rn() {}
  function Tn() {
    this.geom = null;
    var t = arguments[0];
    this.geom = t;
  }
  function Pn() {
    this.edgeMap = new rt, this.edgeList = null, this.ptInAreaLocation = [L.NONE, L.NONE];
  }
  function bn() {
    Pn.apply(this), this.resultAreaEdgeList = null, this.label = null, this.SCANNING_FOR_INCOMING = 1, this.LINKING_TO_OUTGOING = 2;
  }
  function On() {
    Nn.apply(this);
  }
  function _n() {
    this.mce = null, this.chainIndex = null;
    var t = arguments[0],
        e = arguments[1];
    this.mce = t, this.chainIndex = e;
  }
  function Mn() {
    if (this.label = null, this.xValue = null, this.eventType = null, this.insertEvent = null, this.deleteEventIndex = null, this.obj = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      this.eventType = Mn.DELETE, this.xValue = t, this.insertEvent = e;
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      this.eventType = Mn.INSERT, this.label = n, this.xValue = i, this.obj = r;
    }
  }
  function Dn() {}
  function An() {
    this._hasIntersection = !1, this.hasProper = !1, this.hasProperInterior = !1, this.properIntersectionPoint = null, this.li = null, this.includeProper = null, this.recordIsolated = null, this.isSelfIntersection = null, this.numIntersections = 0, this.numTests = 0, this.bdyNodes = null, this._isDone = !1, this.isDoneWhenProperInt = !1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.li = t, this.includeProper = e, this.recordIsolated = n;
  }
  function Fn() {
    Dn.apply(this), this.events = new I, this.nOverlaps = null;
  }
  function Gn() {
    this.min = r.POSITIVE_INFINITY, this.max = r.NEGATIVE_INFINITY;
  }
  function qn() {}
  function Bn() {
    Gn.apply(this), this.item = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.min = t, this.max = e, this.item = n;
  }
  function zn() {
    Gn.apply(this), this.node1 = null, this.node2 = null;
    var t = arguments[0],
        e = arguments[1];
    this.node1 = t, this.node2 = e, this.buildExtent(this.node1, this.node2);
  }
  function Vn() {
    this.leaves = new I, this.root = null, this.level = 0;
  }
  function kn() {
    if (this.lines = null, this.isForcedToLineString = !1, 1 === arguments.length) {
      var t = arguments[0];
      this.lines = t;
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.lines = e, this.isForcedToLineString = n;
    }
  }
  function Yn() {
    this.items = new I;
  }
  function Un() {
    this.index = null;
    var t = arguments[0];
    if (!R(t, Rt))
      throw new i("Argument must be Polygonal");
    this.index = new Hn(t);
  }
  function Xn() {
    this.counter = null;
    var t = arguments[0];
    this.counter = t;
  }
  function Hn() {
    this.index = new Vn;
    var t = arguments[0];
    this.init(t);
  }
  function Wn() {
    this.coord = null, this.segmentIndex = null, this.dist = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.coord = new g(t), this.segmentIndex = e, this.dist = n;
  }
  function jn() {
    this.nodeMap = new rt, this.edge = null;
    var t = arguments[0];
    this.edge = t;
  }
  function Kn() {}
  function Zn() {
    this.e = null, this.pts = null, this.startIndex = null, this.env1 = new C, this.env2 = new C;
    var t = arguments[0];
    this.e = t, this.pts = t.getCoordinates();
    var e = new Kn;
    this.startIndex = e.getChainStartIndices(this.pts);
  }
  function Qn() {
    this.depth = Array(2).fill().map(function() {
      return Array(3);
    });
    for (var t = 0; 2 > t; t++)
      for (var e = 0; 3 > e; e++)
        this.depth[t][e] = Qn.NULL_VALUE;
  }
  function Jn() {
    if (mn.apply(this), this.pts = null, this.env = null, this.eiList = new jn(this), this.name = null, this.mce = null, this._isIsolated = !0, this.depth = new Qn, this.depthDelta = 0, 1 === arguments.length) {
      var t = arguments[0];
      Jn.call(this, t, null);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.pts = e, this.label = n;
    }
  }
  function $n() {
    if (Cn.apply(this), this.parentGeom = null, this.lineEdgeMap = new te, this.boundaryNodeRule = null, this.useBoundaryDeterminationRule = !0, this.argIndex = null, this.boundaryNodes = null, this._hasTooFewPoints = !1, this.invalidPoint = null, this.areaPtLocator = null, this.ptLocator = new Te, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      $n.call(this, t, e, V.OGC_SFS_BOUNDARY_RULE);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      this.argIndex = n, this.parentGeom = i, this.boundaryNodeRule = r, null !== i && this.add(i);
    }
  }
  function ti() {
    if (this.li = new ae, this.resultPrecisionModel = null, this.arg = null, 1 === arguments.length) {
      var t = arguments[0];
      this.setComputationPrecision(t.getPrecisionModel()), this.arg = new Array(1).fill(null), this.arg[0] = new $n(0, t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      ti.call(this, e, n, V.OGC_SFS_BOUNDARY_RULE);
    } else if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];
      i.getPrecisionModel().compareTo(r.getPrecisionModel()) >= 0 ? this.setComputationPrecision(i.getPrecisionModel()) : this.setComputationPrecision(r.getPrecisionModel()), this.arg = new Array(2).fill(null), this.arg[0] = new $n(0, i, s), this.arg[1] = new $n(1, r, s);
    }
  }
  function ei() {
    this.pts = null, this._orientation = null;
    var t = arguments[0];
    this.pts = t, this._orientation = ei.orientation(t);
  }
  function ni() {
    this.edges = new I, this.ocaMap = new rt;
  }
  function ii() {
    this.ptLocator = new Te, this.geomFact = null, this.resultGeom = null, this.graph = null, this.edgeList = new ni, this.resultPolyList = new I, this.resultLineList = new I, this.resultPointList = new I;
    var t = arguments[0],
        e = arguments[1];
    ti.call(this, t, e), this.graph = new Cn(new On), this.geomFact = t.getFactory();
  }
  function ri() {
    this.geom = new Array(2).fill(null), this.snapTolerance = null, this.cbr = null;
    var t = arguments[0],
        e = arguments[1];
    this.geom[0] = t, this.geom[1] = e, this.computeSnapTolerance();
  }
  function si() {
    this.geom = new Array(2).fill(null);
    var t = arguments[0],
        e = arguments[1];
    this.geom[0] = t, this.geom[1] = e;
  }
  function oi() {
    this.factory = null, this.interiorPoint = null, this.maxWidth = 0;
    var t = arguments[0];
    this.factory = t.getFactory(), this.add(t);
  }
  function ai() {
    this.poly = null, this.centreY = null, this.hiY = r.MAX_VALUE, this.loY = -r.MAX_VALUE;
    var t = arguments[0];
    this.poly = t, this.hiY = t.getEnvelopeInternal().getMaxY(), this.loY = t.getEnvelopeInternal().getMinY(), this.centreY = oi.avg(this.loY, this.hiY);
  }
  function ui() {
    this.centroid = null, this.minDistance = r.MAX_VALUE, this.interiorPoint = null;
    var t = arguments[0];
    this.centroid = t.getCentroid().getCoordinate(), this.addInterior(t), null === this.interiorPoint && this.addEndpoints(t);
  }
  function li() {
    this.centroid = null, this.minDistance = r.MAX_VALUE, this.interiorPoint = null;
    var t = arguments[0];
    this.centroid = t.getCentroid().getCoordinate(), this.add(t);
  }
  function hi() {}
  function ci() {
    this.p0 = null, this.p1 = null, this.p2 = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.p0 = t, this.p1 = e, this.p2 = n;
  }
  function fi() {
    this.input = null, this.extremalPts = null, this.centre = null, this.radius = 0;
    var t = arguments[0];
    this.input = t;
  }
  function gi() {
    if (this.inputGeom = null, this.isConvex = null, this.convexHullPts = null, this.minBaseSeg = new ce, this.minWidthPt = null, this.minPtIndex = null, this.minWidth = 0, 1 === arguments.length) {
      var t = arguments[0];
      gi.call(this, t, !1);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.inputGeom = e, this.isConvex = n;
    }
  }
  function di() {
    this.inputGeom = null, this.distanceTolerance = null;
    var t = arguments[0];
    this.inputGeom = t;
  }
  function pi() {
    xe.apply(this), this.distanceTolerance = null;
    var t = arguments[0];
    this.distanceTolerance = t;
  }
  function vi() {
    this._orig = null, this._sym = null, this._next = null;
    var t = arguments[0];
    this._orig = t;
  }
  function mi() {
    this._isMarked = !1;
    var t = arguments[0];
    vi.call(this, t);
  }
  function yi() {
    this.vertexMap = new te;
  }
  function xi() {
    this._isStart = !1;
    var t = arguments[0];
    mi.call(this, t);
  }
  function Ei() {
    yi.apply(this);
  }
  function Ii() {
    this.result = null, this.factory = null, this.graph = null, this.lines = new I, this.nodeEdgeStack = new pe, this.ringStartEdge = null, this.graph = new Ei;
  }
  function Ni() {
    this.items = new I, this.subnode = new Array(4).fill(null);
  }
  function Ci() {}
  function Si(t, e) {
    var n,
        i,
        r,
        s,
        o = {
          32: {
            d: 127,
            c: 128,
            b: 0,
            a: 0
          },
          64: {
            d: 32752,
            c: 0,
            b: 0,
            a: 0
          }
        },
        a = {
          32: 8,
          64: 11
        }[t];
    if (s || (n = 0 > e || 0 > 1 / e, isFinite(e) || (s = o[t], n && (s.d += 1 << t / 4 - 1), i = Math.pow(2, a) - 1, r = 0)), !s) {
      for (i = {
        32: 127,
        64: 1023
      }[t], r = Math.abs(e); r >= 2; )
        i++, r /= 2;
      for (; 1 > r && i > 0; )
        i--, r *= 2;
      0 >= i && (r /= 2), 32 === t && i > 254 && (s = {
        d: n ? 255 : 127,
        c: 128,
        b: 0,
        a: 0
      }, i = Math.pow(2, a) - 1, r = 0);
    }
    return i;
  }
  function wi() {
    this.pt = new g, this.level = 0, this.env = null;
    var t = arguments[0];
    this.computeKey(t);
  }
  function Li() {
    Ni.apply(this), this.env = null, this.centrex = null, this.centrey = null, this.level = null;
    var t = arguments[0],
        e = arguments[1];
    this.env = t, this.level = e, this.centrex = (t.getMinX() + t.getMaxX()) / 2, this.centrey = (t.getMinY() + t.getMaxY()) / 2;
  }
  function Ri() {}
  function Ti() {
    Ni.apply(this);
  }
  function Pi() {
    this.root = null, this.minExtent = 1, this.root = new Ti;
  }
  function bi(t) {
    this.geometryFactory = t || new ie;
  }
  function Oi(t) {
    this.geometryFactory = t || new ie, this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new bi(this.geometryFactory);
  }
  function _i() {
    this.parser = new bi(this.geometryFactory);
  }
  function Mi(t) {
    this.geometryFactory = t || new ie, this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new re(this.geometryFactory);
  }
  function Di(t) {
    return [t.x, t.y];
  }
  function Ai(t) {
    this.geometryFactory = t || new ie;
  }
  function Fi() {
    if (this.noder = null, this.scaleFactor = null, this.offsetX = null, this.offsetY = null, this.isScaled = !1, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      Fi.call(this, t, e, 0, 0);
    } else if (4 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];
      arguments[2], arguments[3];
      this.noder = n, this.scaleFactor = i, this.isScaled = !this.isIntegerPrecision();
    }
  }
  function Gi() {
    if (this.inputGeom = null, this.isClosedEndpointsInInterior = !0, this.nonSimpleLocation = null, 1 === arguments.length) {
      var t = arguments[0];
      this.inputGeom = t;
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.inputGeom = e, this.isClosedEndpointsInInterior = !n.isInBoundary(2);
    }
  }
  function qi() {
    this.pt = null, this.isClosed = null, this.degree = null;
    var t = arguments[0];
    this.pt = t, this.isClosed = !1, this.degree = 0;
  }
  function Bi() {
    if (this.quadrantSegments = Bi.DEFAULT_QUADRANT_SEGMENTS, this.endCapStyle = Bi.CAP_ROUND, this.joinStyle = Bi.JOIN_ROUND, this.mitreLimit = Bi.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this.simplifyFactor = Bi.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length)
      ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(n);
    } else if (4 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(r), this.setJoinStyle(s), this.setMitreLimit(o);
    }
  }
  function zi() {
    this.minIndex = -1, this.minCoord = null, this.minDe = null, this.orientedDe = null;
  }
  function Vi() {
    this.array_ = [];
  }
  function ki() {
    this.finder = null, this.dirEdgeList = new I, this.nodes = new I, this.rightMostCoord = null, this.env = null, this.finder = new zi;
  }
  function Yi() {
    this.inputLine = null, this.distanceTol = null, this.isDeleted = null, this.angleOrientation = he.COUNTERCLOCKWISE;
    var t = arguments[0];
    this.inputLine = t;
  }
  function Ui() {
    this.ptList = null, this.precisionModel = null, this.minimimVertexDistance = 0, this.ptList = new I;
  }
  function Xi() {
    this.maxCurveSegmentError = 0, this.filletAngleQuantum = null, this.closingSegLengthFactor = 1, this.segList = null, this.distance = 0, this.precisionModel = null, this.bufParams = null, this.li = null, this.s0 = null, this.s1 = null, this.s2 = null, this.seg0 = new ce, this.seg1 = new ce, this.offset0 = new ce, this.offset1 = new ce, this.side = 0, this._hasNarrowConcaveAngle = !1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.precisionModel = t, this.bufParams = e, this.li = new ae, this.filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === Bi.JOIN_ROUND && (this.closingSegLengthFactor = Xi.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
  }
  function Hi() {
    this.distance = 0, this.precisionModel = null, this.bufParams = null;
    var t = arguments[0],
        e = arguments[1];
    this.precisionModel = t, this.bufParams = e;
  }
  function Wi() {
    this.subgraphs = null, this.seg = new ce, this.cga = new he;
    var t = arguments[0];
    this.subgraphs = t;
  }
  function ji() {
    this.upwardSeg = null, this.leftDepth = null;
    var t = arguments[0],
        e = arguments[1];
    this.upwardSeg = new ce(t), this.leftDepth = e;
  }
  function Ki() {
    this.inputGeom = null, this.distance = null, this.curveBuilder = null, this.curveList = new I;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.inputGeom = t, this.distance = e, this.curveBuilder = n;
  }
  function Zi() {
    this._hasIntersection = !1, this.hasProper = !1, this.hasProperInterior = !1, this.hasInterior = !1, this.properIntersectionPoint = null, this.li = null, this.isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
    var t = arguments[0];
    this.li = t;
  }
  function Qi() {
    this.bufParams = null, this.workingPrecisionModel = null, this.workingNoder = null, this.geomFact = null, this.graph = null, this.edgeList = new ni;
    var t = arguments[0];
    this.bufParams = t;
  }
  function Ji() {
    this.li = new ae, this.segStrings = null;
    var t = arguments[0];
    this.segStrings = t;
  }
  function $i() {
    this.li = null, this.pt = null, this.originalPt = null, this.ptScaled = null, this.p0Scaled = null, this.p1Scaled = null, this.scaleFactor = null, this.minx = null, this.maxx = null, this.miny = null, this.maxy = null, this.corner = new Array(4).fill(null), this.safeEnv = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    if (this.originalPt = t, this.pt = t, this.scaleFactor = e, this.li = n, 0 >= e)
      throw new i("Scale factor must be non-zero");
    1 !== e && (this.pt = new g(this.scale(t.x), this.scale(t.y)), this.p0Scaled = new g, this.p1Scaled = new g), this.initCorners(this.pt);
  }
  function tr() {
    this.tempEnv1 = new C, this.selectedSegment = new ce;
  }
  function er() {
    this.index = null;
    var t = arguments[0];
    this.index = t;
  }
  function nr() {
    tr.apply(this), this.hotPixel = null, this.parentEdge = null, this.hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.hotPixel = t, this.parentEdge = e, this.hotPixelVertexIndex = n;
  }
  function ir() {
    this.li = null, this.interiorIntersections = null;
    var t = arguments[0];
    this.li = t, this.interiorIntersections = new I;
  }
  function rr() {
    this.pm = null, this.li = null, this.scaleFactor = null, this.noder = null, this.pointSnapper = null, this.nodedSegStrings = null;
    var t = arguments[0];
    this.pm = t, this.li = new ae, this.li.setPrecisionModel(t), this.scaleFactor = t.getScale();
  }
  function sr() {
    if (this.argGeom = null, this.distance = null, this.bufParams = new Bi, this.resultGeometry = null, this.saveException = null, 1 === arguments.length) {
      var t = arguments[0];
      this.argGeom = t;
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.argGeom = e, this.bufParams = n;
    }
  }
  function or() {
    this.comps = null;
    var t = arguments[0];
    this.comps = t;
  }
  function ar() {
    if (this.component = null, this.segIndex = null, this.pt = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      ar.call(this, t, ar.INSIDE_AREA, e);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      this.component = n, this.segIndex = i, this.pt = r;
    }
  }
  function ur() {
    this.pts = null;
    var t = arguments[0];
    this.pts = t;
  }
  function lr() {
    this.locations = null;
    var t = arguments[0];
    this.locations = t;
  }
  function hr() {
    if (this.geom = null, this.terminateDistance = 0, this.ptLocator = new Te, this.minDistanceLocation = null, this.minDistance = r.MAX_VALUE, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      hr.call(this, t, e, 0);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          s = arguments[2];
      this.geom = new Array(2).fill(null), this.geom[0] = n, this.geom[1] = i, this.terminateDistance = s;
    }
  }
  function cr() {
    this.factory = null, this.directedEdges = new I, this.coordinates = null;
    var t = arguments[0];
    this.factory = t;
  }
  function fr() {
    this._isMarked = !1, this._isVisited = !1, this.data = null;
  }
  function gr() {
    fr.apply(this), this.parentEdge = null, this.from = null, this.to = null, this.p0 = null, this.p1 = null, this.sym = null, this.edgeDirection = null, this.quadrant = null, this.angle = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];
    this.from = t, this.to = e, this.edgeDirection = i, this.p0 = t.getCoordinate(), this.p1 = n;
    var r = this.p1.x - this.p0.x,
        s = this.p1.y - this.p0.y;
    this.quadrant = Je.quadrant(r, s), this.angle = Math.atan2(s, r);
  }
  function dr() {
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];
    gr.call(this, t, e, n, i);
  }
  function pr() {
    if (fr.apply(this), this.dirEdge = null, 0 === arguments.length)
      ;
    else if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      this.setDirectedEdges(t, e);
    }
  }
  function vr() {
    this.outEdges = new I, this.sorted = !1;
  }
  function mr() {
    if (fr.apply(this), this.pt = null, this.deStar = null, 1 === arguments.length) {
      var t = arguments[0];
      mr.call(this, t, new vr);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.pt = e, this.deStar = n;
    }
  }
  function yr() {
    pr.apply(this), this.line = null;
    var t = arguments[0];
    this.line = t;
  }
  function xr() {
    this.nodeMap = new rt;
  }
  function Er() {
    this.edges = new J, this.dirEdges = new J, this.nodeMap = new xr;
  }
  function Ir() {
    Er.apply(this);
  }
  function Nr() {
    this.graph = new Ir, this.mergedLineStrings = null, this.factory = null, this.edgeStrings = null;
  }
  function Cr() {
    this.edgeRing = null, this.next = null, this.label = -1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        i = arguments[3];
    gr.call(this, t, e, n, i);
  }
  function Sr() {
    pr.apply(this), this.line = null;
    var t = arguments[0];
    this.line = t;
  }
  function wr() {
    this.factory = null, this.deList = new I, this.lowestEdge = null, this.ring = null, this.ringPts = null, this.holes = null, this.shell = null, this._isHole = null, this._isProcessed = !1, this._isIncludedSet = !1, this._isIncluded = !1;
    var t = arguments[0];
    this.factory = t;
  }
  function Lr() {}
  function Rr() {
    Er.apply(this), this.factory = null;
    var t = arguments[0];
    this.factory = t;
  }
  function Tr() {
    if (this.lineStringAdder = new Pr(this), this.graph = null, this.dangles = new I, this.cutEdges = new I, this.invalidRingLines = new I, this.holeList = null, this.shellList = null, this.polyList = null, this.isCheckingRingsValid = !0, this.extractOnlyPolygonal = null, this.geomFactory = null, 0 === arguments.length)
      Tr.call(this, !1);
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.extractOnlyPolygonal = t;
    }
  }
  function Pr() {
    this.p = null;
    var t = arguments[0];
    this.p = t;
  }
  function br() {}
  function Or() {
    if (this.edgeEnds = new I, 1 === arguments.length) {
      var t = arguments[0];
      Or.call(this, null, t);
    } else if (2 === arguments.length) {
      var e = (arguments[0], arguments[1]);
      En.call(this, e.getEdge(), e.getCoordinate(), e.getDirectedCoordinate(), new gn(e.getLabel())), this.insert(e);
    }
  }
  function _r() {
    Pn.apply(this);
  }
  function Mr() {
    var t = arguments[0],
        e = arguments[1];
    yn.call(this, t, e);
  }
  function Dr() {
    Nn.apply(this);
  }
  function Ar() {
    this.li = new ae, this.ptLocator = new Te, this.arg = null, this.nodes = new xn(new Dr), this.im = null, this.isolatedEdges = new I, this.invalidPoint = null;
    var t = arguments[0];
    this.arg = t;
  }
  function Fr() {
    this.rectEnv = null;
    var t = arguments[0];
    this.rectEnv = t.getEnvelopeInternal();
  }
  function Gr() {
    this.li = new ae, this.rectEnv = null, this.diagUp0 = null, this.diagUp1 = null, this.diagDown0 = null, this.diagDown1 = null;
    var t = arguments[0];
    this.rectEnv = t, this.diagUp0 = new g(t.getMinX(), t.getMinY()), this.diagUp1 = new g(t.getMaxX(), t.getMaxY()), this.diagDown0 = new g(t.getMinX(), t.getMaxY()), this.diagDown1 = new g(t.getMaxX(), t.getMinY());
  }
  function qr() {
    this._isDone = !1;
  }
  function Br() {
    this.rectangle = null, this.rectEnv = null;
    var t = arguments[0];
    this.rectangle = t, this.rectEnv = t.getEnvelopeInternal();
  }
  function zr() {
    qr.apply(this), this.rectEnv = null, this._intersects = !1;
    var t = arguments[0];
    this.rectEnv = t;
  }
  function Vr() {
    qr.apply(this), this.rectSeq = null, this.rectEnv = null, this._containsPoint = !1;
    var t = arguments[0];
    this.rectSeq = t.getExteriorRing().getCoordinateSequence(), this.rectEnv = t.getEnvelopeInternal();
  }
  function kr() {
    qr.apply(this), this.rectEnv = null, this.rectIntersector = null, this.hasIntersection = !1, this.p0 = new g, this.p1 = new g;
    var t = arguments[0];
    this.rectEnv = t.getEnvelopeInternal(), this.rectIntersector = new Gr(this.rectEnv);
  }
  function Yr() {
    if (this._relate = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      ti.call(this, t, e), this._relate = new Ar(this.arg);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      ti.call(this, n, i, r), this._relate = new Ar(this.arg);
    }
  }
  function Ur() {
    this.geomFactory = null, this.skipEmpty = !1, this.inputGeoms = null;
    var t = arguments[0];
    this.geomFactory = Ur.extractFactory(t), this.inputGeoms = t;
  }
  function Xr() {
    this.pointGeom = null, this.otherGeom = null, this.geomFact = null;
    var t = arguments[0],
        e = arguments[1];
    this.pointGeom = t, this.otherGeom = e, this.geomFact = e.getFactory();
  }
  function Hr() {
    this.sortIndex = -1, this.comps = null;
    var t = arguments[0],
        e = arguments[1];
    this.sortIndex = t, this.comps = e;
  }
  function Wr() {
    this.inputPolys = null, this.geomFactory = null;
    var t = arguments[0];
    this.inputPolys = t, null === this.inputPolys && (this.inputPolys = new I);
  }
  function jr() {
    if (this.polygons = new I, this.lines = new I, this.points = new I, this.geomFact = null, 1 === arguments.length) {
      if (R(arguments[0], v)) {
        var t = arguments[0];
        this.extract(t);
      } else if (arguments[0] instanceof B) {
        var e = arguments[0];
        this.extract(e);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];
      this.geomFact = i, this.extract(n);
    }
  }
  function Kr() {
    this.geometryFactory = new ie, this.geomGraph = null, this.disconnectedRingcoord = null;
    var t = arguments[0];
    this.geomGraph = t;
  }
  function Zr() {
    this.items = new I, this.subnode = [null, null];
  }
  function Qr() {
    if (this.min = null, this.max = null, 0 === arguments.length)
      this.min = 0, this.max = 0;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.init(t.min, t.max);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.init(e, n);
    }
  }
  function Jr() {
    this.pt = 0, this.level = 0, this.interval = null;
    var t = arguments[0];
    this.computeKey(t);
  }
  function $r() {
    Zr.apply(this), this.interval = null, this.centre = null, this.level = null;
    var t = arguments[0],
        e = arguments[1];
    this.interval = t, this.level = e, this.centre = (t.getMin() + t.getMax()) / 2;
  }
  function ts() {
    Zr.apply(this);
  }
  function es() {
    this.root = null, this.minExtent = 1, this.root = new ts;
  }
  function ns() {}
  function is() {
    this.ring = null, this.tree = null, this.crossings = 0, this.interval = new Qr;
    var t = arguments[0];
    this.ring = t, this.buildIndex();
  }
  function rs() {
    tr.apply(this), this.mcp = null, this.p = null;
    var t = arguments[0],
        e = arguments[1];
    this.mcp = t, this.p = e;
  }
  function ss() {
    this.nodes = new xn(new Dr);
  }
  function os() {
    this.li = new ae, this.geomGraph = null, this.nodeGraph = new ss, this.invalidPoint = null;
    var t = arguments[0];
    this.geomGraph = t;
  }
  function as() {
    this.graph = null, this.rings = new I, this.totalEnv = new C, this.index = null, this.nestedPt = null;
    var t = arguments[0];
    this.graph = t;
  }
  function us() {
    if (this.errorType = null, this.pt = null, 1 === arguments.length) {
      var t = arguments[0];
      us.call(this, t, null);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.errorType = e, null !== n && (this.pt = n.copy());
    }
  }
  function ls() {
    this.parentGeometry = null, this.isSelfTouchingRingFormingHoleValid = !1, this.validErr = null;
    var t = arguments[0];
    this.parentGeometry = t;
  }
  function hs() {
    _t.CoordinateOperation.apply(this), this.targetPM = null, this.removeCollapsed = !0;
    var t = arguments[0],
        e = arguments[1];
    this.targetPM = t, this.removeCollapsed = e;
  }
  function cs() {
    this.targetPM = null, this.removeCollapsed = !0, this.changePrecisionModel = !1, this.isPointwise = !1;
    var t = arguments[0];
    this.targetPM = t;
  }
  function fs() {
    this.pts = null, this.usePt = null, this.distanceTolerance = null, this.seg = new ce;
    var t = arguments[0];
    this.pts = t;
  }
  function gs() {
    this.inputGeom = null, this.distanceTolerance = null, this.isEnsureValidTopology = !0;
    var t = arguments[0];
    this.inputGeom = t;
  }
  function ds() {
    xe.apply(this), this.isEnsureValidTopology = !0, this.distanceTolerance = null;
    var t = arguments[0],
        e = arguments[1];
    this.isEnsureValidTopology = t, this.distanceTolerance = e;
  }
  function ps() {
    if (this.parent = null, this.index = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      ps.call(this, t, e, null, -1);
    } else if (4 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2],
          s = arguments[3];
      ce.call(this, n, i), this.parent = r, this.index = s;
    }
  }
  function vs() {
    if (this.parentLine = null, this.segs = null, this.resultSegs = new I, this.minimumSize = null, 1 === arguments.length) {
      var t = arguments[0];
      vs.call(this, t, 2);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.parentLine = e, this.minimumSize = n, this.init();
    }
  }
  function ms() {
    this.index = new Pi;
  }
  function ys() {
    this.querySeg = null, this.items = new I;
    var t = arguments[0];
    this.querySeg = t;
  }
  function xs() {
    this.li = new ae, this.inputIndex = new ms, this.outputIndex = new ms, this.line = null, this.linePts = null, this.distanceTolerance = 0;
    var t = arguments[0],
        e = arguments[1];
    this.inputIndex = t, this.outputIndex = e;
  }
  function Es() {
    this.inputIndex = new ms, this.outputIndex = new ms, this.distanceTolerance = 0;
  }
  function Is() {
    this.inputGeom = null, this.lineSimplifier = new Es, this.linestringMap = null;
    var t = arguments[0];
    this.inputGeom = t;
  }
  function Ns() {
    xe.apply(this), this.linestringMap = null;
    var t = arguments[0];
    this.linestringMap = t;
  }
  function Cs() {
    this.tps = null;
    var t = arguments[0];
    this.tps = t;
  }
  function Ss() {
    this.seg = null, this.segLen = null, this.splitPt = null, this.minimumLen = 0;
    var t = arguments[0];
    this.seg = t, this.segLen = t.getLength();
  }
  function ws() {}
  function Ls() {}
  function Rs() {}
  function Ts() {
    if (this.p = null, 1 === arguments.length) {
      var t = arguments[0];
      this.p = new g(t);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      this.p = new g(e, n);
    } else if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];
      this.p = new g(i, r, s);
    }
  }
  function Ps() {
    this._isOnConstraint = null, this.constraint = null;
    var t = arguments[0];
    Ts.call(this, t);
  }
  function bs() {
    this._rot = null, this.vertex = null, this.next = null, this.data = null;
  }
  function Os() {
    this.subdiv = null, this.isUsingTolerance = !1;
    var t = arguments[0];
    this.subdiv = t, this.isUsingTolerance = t.getTolerance() > 0;
  }
  function _s() {}
  function Ms() {
    this.subdiv = null, this.lastEdge = null;
    var t = arguments[0];
    this.subdiv = t, this.init();
  }
  function Ds() {
    if (this.seg = null, 1 === arguments.length) {
      if ("string" == typeof arguments[0]) {
        var t = arguments[0];
        l.call(this, t);
      } else if (arguments[0] instanceof ce) {
        var e = arguments[0];
        l.call(this, "Locate failed to converge (at edge: " + e + ").  Possible causes include invalid Subdivision topology or very close sites"), this.seg = new ce(e);
      }
    } else if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1];
      l.call(this, Ds.msgWithSpatial(n, i)), this.seg = new ce(i);
    }
  }
  function As() {}
  function Fs() {
    this.visitedKey = 0, this.quadEdges = new I, this.startingEdge = null, this.tolerance = null, this.edgeCoincidenceTolerance = null, this.frameVertex = new Array(3).fill(null), this.frameEnv = null, this.locator = null, this.seg = new ce, this.triEdges = new Array(3).fill(null);
    var t = arguments[0],
        e = arguments[1];
    this.tolerance = e, this.edgeCoincidenceTolerance = e / Fs.EDGE_COINCIDENCE_TOL_FACTOR, this.createFrame(t), this.startingEdge = this.initSubdiv(), this.locator = new Ms(this);
  }
  function Gs() {}
  function qs() {
    this.triList = new I;
  }
  function Bs() {
    this.triList = new I;
  }
  function zs() {
    this.coordList = new N, this.triCoords = new I;
  }
  function Vs() {
    if (this.ls = null, this.data = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      this.ls = new ce(t, e);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      this.ls = new ce(n, i), this.data = r;
    } else if (6 === arguments.length) {
      var s = arguments[0],
          o = arguments[1],
          a = arguments[2],
          u = arguments[3],
          l = arguments[4],
          h = arguments[5];
      Vs.call(this, new g(s, o, a), new g(u, l, h));
    } else if (7 === arguments.length) {
      var c = arguments[0],
          f = arguments[1],
          d = arguments[2],
          p = arguments[3],
          v = arguments[4],
          m = arguments[5],
          y = arguments[6];
      Vs.call(this, new g(c, f, d), new g(p, v, m), y);
    }
  }
  function ks() {}
  function Ys() {
    if (this.p = null, this.data = null, this.left = null, this.right = null, this.count = null, 2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      this.p = new g(t), this.left = null, this.right = null, this.count = 1, this.data = e;
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      this.p = new g(n, i), this.left = null, this.right = null, this.count = 1, this.data = r;
    }
  }
  function Us() {
    if (this.root = null, this.numberOfNodes = null, this.tolerance = null, 0 === arguments.length)
      Us.call(this, 0);
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.tolerance = t;
    }
  }
  function Xs() {
    this.tolerance = null, this.matchNode = null, this.matchDist = 0, this.p = null;
    var t = arguments[0],
        e = arguments[1];
    this.p = t, this.tolerance = e;
  }
  function Hs() {
    this.initialVertices = null, this.segVertices = null, this.segments = new I, this.subdiv = null, this.incDel = null, this.convexHull = null, this.splitFinder = new Ls, this.kdt = null, this.vertexFactory = null, this.computeAreaEnv = null, this.splitPt = null, this.tolerance = null;
    var t = arguments[0],
        e = arguments[1];
    this.initialVertices = new I(t), this.tolerance = e, this.kdt = new Us(e);
  }
  function Ws() {
    this.siteCoords = null, this.tolerance = 0, this.subdiv = null;
  }
  function js() {
    this.siteCoords = null, this.constraintLines = null, this.tolerance = 0, this.subdiv = null, this.constraintVertexMap = new rt;
  }
  function Ks() {
    this.siteCoords = null, this.tolerance = 0, this.subdiv = null, this.clipEnv = null, this.diagramEnv = null;
  }
  function Zs() {}
  Array.prototype.fill || (Array.prototype.fill = function(t) {
    for (var e = Object(this),
        n = parseInt(e.length, 10),
        i = arguments[1],
        r = parseInt(i, 10) || 0,
        s = 0 > r ? Math.max(n + r, 0) : Math.min(r, n),
        o = arguments[2],
        a = void 0 === o ? n : parseInt(o, 10) || 0,
        u = 0 > a ? Math.max(n + a, 0) : Math.min(a, n); u > s; s++)
      e[s] = t;
    return e;
  }), Number.isFinite = Number.isFinite || function(t) {
    return "number" == typeof t && isFinite(t);
  }, Number.isInteger = Number.isInteger || function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
  }, Number.parseFloat = Number.parseFloat || parseFloat, Number.isNaN = Number.isNaN || function(t) {
    return t !== t;
  }, Math.trunc = Math.trunc || function(t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t);
  }, e(n.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return n;
    }
  }), n.equalsWithTolerance = function(t, e, n) {
    return Math.abs(t - e) <= n;
  }, r.isNaN = function(t) {
    return Number.isNaN(t);
  }, r.doubleToLongBits = function(t) {
    return t;
  }, r.longBitsToDouble = function(t) {
    return t;
  }, r.isInfinite = function(t) {
    return !Number.isFinite(t);
  }, r.MAX_VALUE = Number.MAX_VALUE, h(c, l), e(c.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return c;
    }
  }), e(f.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return f;
    }
  }), f.shouldNeverReachHere = function() {
    if (0 === arguments.length)
      f.shouldNeverReachHere(null);
    else if (1 === arguments.length) {
      var t = arguments[0];
      throw new c("Should never reach here" + (null !== t ? ": " + t : ""));
    }
  }, f.isTrue = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      f.isTrue(t, null);
    } else if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      if (!e)
        throw null === n ? new c : new c(n);
    }
  }, f.equals = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      f.equals(t, e, null);
    } else if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      if (!i.equals(n))
        throw new c("Expected " + n + " but encountered " + i + (null !== r ? ": " + r : ""));
    }
  }, e(g.prototype, {
    setOrdinate: function(t, e) {
      switch (t) {
        case g.X:
          this.x = e;
          break;
        case g.Y:
          this.y = e;
          break;
        case g.Z:
          this.z = e;
          break;
        default:
          throw new i("Invalid ordinate index: " + t);
      }
    },
    equals2D: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.x !== t.x ? !1 : this.y === t.y;
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            i = arguments[1];
        return n.equalsWithTolerance(this.x, e.x, i) ? !!n.equalsWithTolerance(this.y, e.y, i) : !1;
      }
    },
    getOrdinate: function(t) {
      switch (t) {
        case g.X:
          return this.x;
        case g.Y:
          return this.y;
        case g.Z:
          return this.z;
      }
      throw new i("Invalid ordinate index: " + t);
    },
    equals3D: function(t) {
      return this.x === t.x && this.y === t.y && (this.z === t.z || r.isNaN(this.z) && r.isNaN(t.z));
    },
    equals: function(t) {
      return t instanceof g ? this.equals2D(t) : !1;
    },
    equalInZ: function(t, e) {
      return n.equalsWithTolerance(this.z, t.z, e);
    },
    compareTo: function(t) {
      var e = t;
      return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
    },
    clone: function() {
      try {
        var t = null;
        return t;
      } catch (t) {
        if (t instanceof CloneNotSupportedException)
          return f.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
        throw t;
      } finally {}
    },
    copy: function() {
      return new g(this);
    },
    toString: function() {
      return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    },
    distance3D: function(t) {
      var e = this.x - t.x,
          n = this.y - t.y,
          i = this.z - t.z;
      return Math.sqrt(e * e + n * n + i * i);
    },
    distance: function(t) {
      var e = this.x - t.x,
          n = this.y - t.y;
      return Math.sqrt(e * e + n * n);
    },
    hashCode: function() {
      var t = 17;
      return t = 37 * t + g.hashCode(this.x), t = 37 * t + g.hashCode(this.y);
    },
    setCoordinate: function(t) {
      this.x = t.x, this.y = t.y, this.z = t.z;
    },
    interfaces_: function() {
      return [s, o, u];
    },
    getClass: function() {
      return g;
    }
  }), g.hashCode = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = r.doubleToLongBits(t);
      return Math.trunc(e ^ e >>> 32);
    }
  }, e(d.prototype, {
    compare: function(t, e) {
      var n = t,
          i = e,
          r = d.compare(n.x, i.x);
      if (0 !== r)
        return r;
      var s = d.compare(n.y, i.y);
      if (0 !== s)
        return s;
      if (this.dimensionsToTest <= 2)
        return 0;
      var o = d.compare(n.z, i.z);
      return o;
    },
    interfaces_: function() {
      return [a];
    },
    getClass: function() {
      return d;
    }
  }), d.compare = function(t, e) {
    return e > t ? -1 : t > e ? 1 : r.isNaN(t) ? r.isNaN(e) ? 0 : -1 : r.isNaN(e) ? 1 : 0;
  }, g.DimensionalComparator = d, g.serialVersionUID = 0x5cbf2c235c7e5800, g.NULL_ORDINATE = r.NaN, g.X = 0, g.Y = 1, g.Z = 2, p.prototype.hasNext = function() {}, p.prototype.next = function() {}, p.prototype.remove = function() {}, v.prototype.add = function() {}, v.prototype.addAll = function() {}, v.prototype.isEmpty = function() {}, v.prototype.iterator = function() {}, v.prototype.size = function() {}, v.prototype.toArray = function() {}, v.prototype.remove = function() {}, m.prototype = new Error, m.prototype.name = "IndexOutOfBoundsException", y.prototype = Object.create(v.prototype), y.prototype.constructor = y, y.prototype.get = function() {}, y.prototype.set = function() {}, y.prototype.isEmpty = function() {}, x.prototype = new Error, x.prototype.name = "NoSuchElementException", E.prototype = new Error, E.prototype.name = "OperationNotSupported", I.prototype = Object.create(y.prototype), I.prototype.constructor = I, I.prototype.ensureCapacity = function() {}, I.prototype.interfaces_ = function() {
    return [y, v];
  }, I.prototype.add = function(t) {
    return this.array_.push(t), !0;
  }, I.prototype.clear = function() {
    this.array_ = [];
  }, I.prototype.addAll = function(t) {
    for (var e = t.iterator(); e.hasNext(); )
      this.add(e.next());
    return !0;
  }, I.prototype.set = function(t, e) {
    var n = this.array_[t];
    return this.array_[t] = e, n;
  }, I.prototype.iterator = function() {
    return new Qs(this);
  }, I.prototype.get = function(t) {
    if (0 > t || t >= this.size())
      throw new m;
    return this.array_[t];
  }, I.prototype.isEmpty = function() {
    return 0 === this.array_.length;
  }, I.prototype.size = function() {
    return this.array_.length;
  }, I.prototype.toArray = function() {
    for (var t = [],
        e = 0,
        n = this.array_.length; n > e; e++)
      t.push(this.array_[e]);
    return t;
  }, I.prototype.remove = function(t) {
    for (var e = !1,
        n = 0,
        i = this.array_.length; i > n; n++)
      if (this.array_[n] === t) {
        this.array_.splice(n, 1), e = !0;
        break;
      }
    return e;
  };
  var Qs = function(t) {
    this.arrayList_ = t, this.position_ = 0;
  };
  Qs.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new x;
    return this.arrayList_.get(this.position_++);
  }, Qs.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, Qs.prototype.set = function(t) {
    return this.arrayList_.set(this.position_ - 1, t);
  }, Qs.prototype.remove = function() {
    throw new E;
  }, h(N, I), e(N.prototype, {
    getCoordinate: function(t) {
      return this.get(t);
    },
    addAll: function() {
      if (2 === arguments.length) {
        for (var t = arguments[0],
            e = arguments[1],
            n = !1,
            i = t.iterator(); i.hasNext(); )
          this.add(i.next(), e), n = !0;
        return n;
      }
      return I.prototype.addAll.apply(this, arguments);
    },
    clone: function t() {
      for (var t = I.prototype.clone.call(this),
          e = 0; e < this.size(); e++)
        t.add(e, this.get(e).copy());
      return t;
    },
    toCoordinateArray: function() {
      return this.toArray(N.coordArrayType);
    },
    add: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        I.prototype.add.call(this, t);
      } else if (2 === arguments.length) {
        if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
          var e = arguments[0],
              n = arguments[1];
          return this.add(e, n, !0), !0;
        }
        if (arguments[0] instanceof g && "boolean" == typeof arguments[1]) {
          var i = arguments[0],
              r = arguments[1];
          if (!r && this.size() >= 1) {
            var s = this.get(this.size() - 1);
            if (s.equals2D(i))
              return null;
          }
          I.prototype.add.call(this, i);
        } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
          var o = arguments[0],
              a = arguments[1];
          return this.add(o, a), !0;
        }
      } else if (3 === arguments.length) {
        if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
          var u = arguments[0],
              l = arguments[1],
              h = arguments[2];
          if (h)
            for (var c = 0; c < u.length; c++)
              this.add(u[c], l);
          else
            for (var c = u.length - 1; c >= 0; c--)
              this.add(u[c], l);
          return !0;
        }
        if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof g) {
          var f = arguments[0],
              d = arguments[1],
              p = arguments[2];
          if (!p) {
            var v = this.size();
            if (v > 0) {
              if (f > 0) {
                var m = this.get(f - 1);
                if (m.equals2D(d))
                  return null;
              }
              if (v > f) {
                var y = this.get(f);
                if (y.equals2D(d))
                  return null;
              }
            }
          }
          I.prototype.add.call(this, f, d);
        }
      } else if (4 === arguments.length) {
        var x = arguments[0],
            E = arguments[1],
            N = arguments[2],
            C = arguments[3],
            S = 1;
        N > C && (S = -1);
        for (var c = N; c !== C; c += S)
          this.add(x[c], E);
        return !0;
      }
    },
    closeRing: function() {
      this.size() > 0 && this.add(new g(this.get(0)), !1);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return N;
    }
  }), N.coordArrayType = new Array(0).fill(null), e(C.prototype, {
    getArea: function() {
      return this.getWidth() * this.getHeight();
    },
    equals: function(t) {
      if (!(t instanceof C))
        return !1;
      var e = t;
      return this.isNull() ? e.isNull() : this.maxx === e.getMaxX() && this.maxy === e.getMaxY() && this.minx === e.getMinX() && this.miny === e.getMinY();
    },
    intersection: function(t) {
      if (this.isNull() || t.isNull() || !this.intersects(t))
        return new C;
      var e = this.minx > t.minx ? this.minx : t.minx,
          n = this.miny > t.miny ? this.miny : t.miny,
          i = this.maxx < t.maxx ? this.maxx : t.maxx,
          r = this.maxy < t.maxy ? this.maxy : t.maxy;
      return new C(e, i, n, r);
    },
    isNull: function() {
      return this.maxx < this.minx;
    },
    getMaxX: function() {
      return this.maxx;
    },
    covers: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof g) {
          var t = arguments[0];
          return this.covers(t.x, t.y);
        }
        if (arguments[0] instanceof C) {
          var e = arguments[0];
          return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this.minx && e.getMaxX() <= this.maxx && e.getMinY() >= this.miny && e.getMaxY() <= this.maxy;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        return this.isNull() ? !1 : n >= this.minx && n <= this.maxx && i >= this.miny && i <= this.maxy;
      }
    },
    intersects: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof C) {
          var t = arguments[0];
          return this.isNull() || t.isNull() ? !1 : !(t.minx > this.maxx || t.maxx < this.minx || t.miny > this.maxy || t.maxy < this.miny);
        }
        if (arguments[0] instanceof g) {
          var e = arguments[0];
          return this.intersects(e.x, e.y);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        return this.isNull() ? !1 : !(n > this.maxx || n < this.minx || i > this.maxy || i < this.miny);
      }
    },
    getMinY: function() {
      return this.miny;
    },
    getMinX: function() {
      return this.minx;
    },
    expandToInclude: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof g) {
          var t = arguments[0];
          this.expandToInclude(t.x, t.y);
        } else if (arguments[0] instanceof C) {
          var e = arguments[0];
          if (e.isNull())
            return null;
          this.isNull() ? (this.minx = e.getMinX(), this.maxx = e.getMaxX(), this.miny = e.getMinY(), this.maxy = e.getMaxY()) : (e.minx < this.minx && (this.minx = e.minx), e.maxx > this.maxx && (this.maxx = e.maxx), e.miny < this.miny && (this.miny = e.miny), e.maxy > this.maxy && (this.maxy = e.maxy));
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        this.isNull() ? (this.minx = n, this.maxx = n, this.miny = i, this.maxy = i) : (n < this.minx && (this.minx = n), n > this.maxx && (this.maxx = n), i < this.miny && (this.miny = i), i > this.maxy && (this.maxy = i));
      }
    },
    minExtent: function() {
      if (this.isNull())
        return 0;
      var t = this.getWidth(),
          e = this.getHeight();
      return e > t ? t : e;
    },
    getWidth: function() {
      return this.isNull() ? 0 : this.maxx - this.minx;
    },
    compareTo: function(t) {
      var e = t;
      return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this.minx < e.minx ? -1 : this.minx > e.minx ? 1 : this.miny < e.miny ? -1 : this.miny > e.miny ? 1 : this.maxx < e.maxx ? -1 : this.maxx > e.maxx ? 1 : this.maxy < e.maxy ? -1 : this.maxy > e.maxy ? 1 : 0;
    },
    translate: function(t, e) {
      return this.isNull() ? null : void this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
    },
    toString: function() {
      return "Env[" + this.minx + " : " + this.maxx + ", " + this.miny + " : " + this.maxy + "]";
    },
    setToNull: function() {
      this.minx = 0, this.maxx = -1, this.miny = 0, this.maxy = -1;
    },
    getHeight: function() {
      return this.isNull() ? 0 : this.maxy - this.miny;
    },
    maxExtent: function() {
      if (this.isNull())
        return 0;
      var t = this.getWidth(),
          e = this.getHeight();
      return t > e ? t : e;
    },
    expandBy: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.expandBy(t, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        if (this.isNull())
          return null;
        this.minx -= e, this.maxx += e, this.miny -= n, this.maxy += n, (this.minx > this.maxx || this.miny > this.maxy) && this.setToNull();
      }
    },
    contains: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof C) {
          var t = arguments[0];
          return this.covers(t);
        }
        if (arguments[0] instanceof g) {
          var e = arguments[0];
          return this.covers(e);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        return this.covers(n, i);
      }
    },
    centre: function() {
      return this.isNull() ? null : new g((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
    },
    init: function() {
      if (0 === arguments.length)
        this.setToNull();
      else if (1 === arguments.length) {
        if (arguments[0] instanceof g) {
          var t = arguments[0];
          this.init(t.x, t.x, t.y, t.y);
        } else if (arguments[0] instanceof C) {
          var e = arguments[0];
          this.minx = e.minx, this.maxx = e.maxx, this.miny = e.miny, this.maxy = e.maxy;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        this.init(n.x, i.x, n.y, i.y);
      } else if (4 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2],
            a = arguments[3];
        s > r ? (this.minx = r, this.maxx = s) : (this.minx = s, this.maxx = r), a > o ? (this.miny = o, this.maxy = a) : (this.miny = a, this.maxy = o);
      }
    },
    getMaxY: function() {
      return this.maxy;
    },
    distance: function(t) {
      if (this.intersects(t))
        return 0;
      var e = 0;
      this.maxx < t.minx ? e = t.minx - this.maxx : this.minx > t.maxx && (e = this.minx - t.maxx);
      var n = 0;
      return this.maxy < t.miny ? n = t.miny - this.maxy : this.miny > t.maxy && (n = this.miny - t.maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n);
    },
    hashCode: function() {
      var t = 17;
      return t = 37 * t + g.hashCode(this.minx), t = 37 * t + g.hashCode(this.maxx), t = 37 * t + g.hashCode(this.miny), t = 37 * t + g.hashCode(this.maxy);
    },
    interfaces_: function() {
      return [s, u];
    },
    getClass: function() {
      return C;
    }
  }), C.intersects = function() {
    if (3 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
      return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
    }
    if (4 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3],
          a = Math.min(s.x, o.x),
          u = Math.max(s.x, o.x),
          l = Math.min(i.x, r.x),
          h = Math.max(i.x, r.x);
      return l > u ? !1 : a > h ? !1 : (a = Math.min(s.y, o.y), u = Math.max(s.y, o.y), l = Math.min(i.y, r.y), h = Math.max(i.y, r.y), l > u ? !1 : !(a > h));
    }
  }, C.serialVersionUID = 0x51845cd552189800, h(w, S), e(w.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return w;
    }
  }), e(L.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return L;
    }
  }), L.toLocationSymbol = function(t) {
    switch (t) {
      case L.EXTERIOR:
        return "e";
      case L.BOUNDARY:
        return "b";
      case L.INTERIOR:
        return "i";
      case L.NONE:
        return "-";
    }
    throw new i("Unknown location value: " + t);
  }, L.INTERIOR = 0, L.BOUNDARY = 1, L.EXTERIOR = 2, L.NONE = -1, e(T.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return T;
    }
  }), T.log10 = function(t) {
    var e = Math.log(t);
    return r.isInfinite(e) ? e : r.isNaN(e) ? e : e / T.LOG_10;
  }, T.min = function(t, e, n, i) {
    var r = t;
    return r > e && (r = e), r > n && (r = n), r > i && (r = i), r;
  }, T.clamp = function() {
    if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
      return e > t ? e : t > n ? n : t;
    }
    if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];
      return r > i ? r : i > s ? s : i;
    }
  }, T.wrap = function(t, e) {
    return 0 > t ? e - -t % e : t % e;
  }, T.max = function() {
    if (3 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          i = t;
      return e > i && (i = e), n > i && (i = n), i;
    }
    if (4 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          a = arguments[3],
          i = r;
      return s > i && (i = s), o > i && (i = o), a > i && (i = a), i;
    }
  }, T.average = function(t, e) {
    return (t + e) / 2;
  }, T.LOG_10 = Math.log(10), P.prototype.append = function(t) {
    this.str += t;
  }, P.prototype.setCharAt = function(t, e) {
    return this.str.substr(0, t) + e + this.str.substr(t + 1);
  }, P.prototype.toString = function(t) {
    return this.str;
  }, b.prototype.intValue = function() {
    return this.value;
  }, b.prototype.compareTo = function(t) {
    return this.value < t ? -1 : this.value > t ? 1 : 0;
  }, b.isNaN = function(t) {
    return Number.isNaN(t);
  }, O.isWhitespace = function(t) {
    return 32 >= t && t >= 0 || 127 == t;
  }, O.toUpperCase = function(t) {
    return t.toUpperCase();
  }, e(_.prototype, {
    le: function(t) {
      return this.hi < t.hi || this.hi === t.hi && this.lo <= t.lo;
    },
    extractSignificantDigits: function(t, e) {
      var n = this.abs(),
          i = _.magnitude(n.hi),
          r = _.TEN.pow(i);
      n = n.divide(r), n.gt(_.TEN) ? (n = n.divide(_.TEN), i += 1) : n.lt(_.ONE) && (n = n.multiply(_.TEN), i -= 1);
      for (var s = i + 1,
          o = new P,
          a = _.MAX_PRINT_DIGITS - 1,
          u = 0; a >= u; u++) {
        t && u === s && o.append(".");
        var l = Math.trunc(n.hi);
        if (0 > l)
          break;
        var h = !1,
            c = 0;
        l > 9 ? (h = !0, c = "9") : c = "0" + l, o.append(c), n = n.subtract(_.valueOf(l)).multiply(_.TEN), h && n.selfAdd(_.TEN);
        var f = !0,
            g = _.magnitude(n.hi);
        if (0 > g && Math.abs(g) >= a - u && (f = !1), !f)
          break;
      }
      return e[0] = i, o.toString();
    },
    sqr: function() {
      return this.multiply(this);
    },
    doubleValue: function() {
      return this.hi + this.lo;
    },
    subtract: function() {
      if (arguments[0] instanceof _) {
        var t = arguments[0];
        return this.add(t.negate());
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return this.add(-e);
      }
    },
    equals: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.hi === t.hi && this.lo === t.lo;
      }
    },
    isZero: function() {
      return 0 === this.hi && 0 === this.lo;
    },
    selfSubtract: function() {
      if (arguments[0] instanceof _) {
        var t = arguments[0];
        return this.isNaN() ? this : this.selfAdd(-t.hi, -t.lo);
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return this.isNaN() ? this : this.selfAdd(-e, 0);
      }
    },
    getSpecialNumberString: function() {
      return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
    },
    min: function(t) {
      return this.le(t) ? this : t;
    },
    selfDivide: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof _) {
          var t = arguments[0];
          return this.selfDivide(t.hi, t.lo);
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.selfDivide(e, 0);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = null,
            s = null,
            o = null,
            a = null,
            u = null,
            l = null,
            h = null,
            c = null;
        return u = this.hi / n, l = _.SPLIT * u, r = l - u, c = _.SPLIT * n, r = l - r, s = u - r, o = c - n, h = u * n, o = c - o, a = n - o, c = r * o - h + r * a + s * o + s * a, l = (this.hi - h - c + this.lo - u * i) / n, c = u + l, this.hi = c, this.lo = u - c + l, this;
      }
    },
    dump: function() {
      return "DD<" + this.hi + ", " + this.lo + ">";
    },
    divide: function() {
      if (arguments[0] instanceof _) {
        var t = arguments[0],
            e = null,
            n = null,
            i = null,
            s = null,
            o = null,
            a = null,
            u = null,
            l = null;
        o = this.hi / t.hi, a = _.SPLIT * o, e = a - o, l = _.SPLIT * t.hi, e = a - e, n = o - e, i = l - t.hi, u = o * t.hi, i = l - i, s = t.hi - i, l = e * i - u + e * s + n * i + n * s, a = (this.hi - u - l + this.lo - o * t.lo) / t.hi, l = o + a;
        var h = l,
            c = o - l + a;
        return new _(h, c);
      }
      if ("number" == typeof arguments[0]) {
        var f = arguments[0];
        return r.isNaN(f) ? _.createNaN() : _.copy(this).selfDivide(f, 0);
      }
    },
    ge: function(t) {
      return this.hi > t.hi || this.hi === t.hi && this.lo >= t.lo;
    },
    pow: function(t) {
      if (0 === t)
        return _.valueOf(1);
      var e = new _(this),
          n = _.valueOf(1),
          i = Math.abs(t);
      if (i > 1)
        for (; i > 0; )
          i % 2 === 1 && n.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
      else
        n = e;
      return 0 > t ? n.reciprocal() : n;
    },
    ceil: function() {
      if (this.isNaN())
        return _.NaN;
      var t = Math.ceil(this.hi),
          e = 0;
      return t === this.hi && (e = Math.ceil(this.lo)), new _(t, e);
    },
    compareTo: function(t) {
      var e = t;
      return this.hi < e.hi ? -1 : this.hi > e.hi ? 1 : this.lo < e.lo ? -1 : this.lo > e.lo ? 1 : 0;
    },
    rint: function() {
      if (this.isNaN())
        return this;
      var t = this.add(.5);
      return t.floor();
    },
    setValue: function() {
      if (arguments[0] instanceof _) {
        var t = arguments[0];
        return this.init(t), this;
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return this.init(e), this;
      }
    },
    max: function(t) {
      return this.ge(t) ? this : t;
    },
    sqrt: function() {
      if (this.isZero())
        return _.valueOf(0);
      if (this.isNegative())
        return _.NaN;
      var t = 1 / Math.sqrt(this.hi),
          e = this.hi * t,
          n = _.valueOf(e),
          i = this.subtract(n.sqr()),
          r = i.hi * (.5 * t);
      return n.add(r);
    },
    selfAdd: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof _) {
          var t = arguments[0];
          return this.selfAdd(t.hi, t.lo);
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0],
              n = null,
              i = null,
              r = null,
              s = null,
              o = null,
              a = null;
          return r = this.hi + e, o = r - this.hi, s = r - o, s = e - o + (this.hi - s), a = s + this.lo, n = r + a, i = a + (r - n), this.hi = n + i, this.lo = i + (n - this.hi), this;
        }
      } else if (2 === arguments.length) {
        var u = arguments[0],
            l = arguments[1],
            n = null,
            i = null,
            h = null,
            c = null,
            r = null,
            s = null,
            o = null,
            a = null;
        r = this.hi + u, h = this.lo + l, o = r - this.hi, a = h - this.lo, s = r - o, c = h - a, s = u - o + (this.hi - s), c = l - a + (this.lo - c), o = s + h, n = r + o, i = o + (r - n), o = c + i;
        var f = n + o,
            g = o + (n - f);
        return this.hi = f, this.lo = g, this;
      }
    },
    selfMultiply: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof _) {
          var t = arguments[0];
          return this.selfMultiply(t.hi, t.lo);
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.selfMultiply(e, 0);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = null,
            s = null,
            o = null,
            a = null,
            u = null,
            l = null;
        u = _.SPLIT * this.hi, r = u - this.hi, l = _.SPLIT * n, r = u - r, s = this.hi - r, o = l - n, u = this.hi * n, o = l - o, a = n - o, l = r * o - u + r * a + s * o + s * a + (this.hi * i + this.lo * n);
        var h = u + l;
        r = u - h;
        var c = l + r;
        return this.hi = h, this.lo = c, this;
      }
    },
    selfSqr: function() {
      return this.selfMultiply(this);
    },
    floor: function() {
      if (this.isNaN())
        return _.NaN;
      var t = Math.floor(this.hi),
          e = 0;
      return t === this.hi && (e = Math.floor(this.lo)), new _(t, e);
    },
    negate: function() {
      return this.isNaN() ? this : new _(-this.hi, -this.lo);
    },
    clone: function() {
      try {
        return null;
      } catch (t) {
        if (t instanceof CloneNotSupportedException)
          return null;
        throw t;
      } finally {}
    },
    multiply: function() {
      if (arguments[0] instanceof _) {
        var t = arguments[0];
        return t.isNaN() ? _.createNaN() : _.copy(this).selfMultiply(t);
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return r.isNaN(e) ? _.createNaN() : _.copy(this).selfMultiply(e, 0);
      }
    },
    isNaN: function() {
      return r.isNaN(this.hi);
    },
    intValue: function() {
      return Math.trunc(this.hi);
    },
    toString: function() {
      var t = _.magnitude(this.hi);
      return t >= -3 && 20 >= t ? this.toStandardNotation() : this.toSciNotation();
    },
    toStandardNotation: function() {
      var t = this.getSpecialNumberString();
      if (null !== t)
        return t;
      var e = new Array(1).fill(null),
          n = this.extractSignificantDigits(!0, e),
          i = e[0] + 1,
          r = n;
      if ("." === n.charAt(0))
        r = "0" + n;
      else if (0 > i)
        r = "0." + _.stringOfChar("0", -i) + n;
      else if (-1 === n.indexOf(".")) {
        var s = i - n.length,
            o = _.stringOfChar("0", s);
        r = n + o + ".0";
      }
      return this.isNegative() ? "-" + r : r;
    },
    reciprocal: function() {
      var t = null,
          e = null,
          n = null,
          i = null,
          r = null,
          s = null,
          o = null,
          a = null;
      r = 1 / this.hi, s = _.SPLIT * r, t = s - r, a = _.SPLIT * this.hi, t = s - t, e = r - t, n = a - this.hi, o = r * this.hi, n = a - n, i = this.hi - n, a = t * n - o + t * i + e * n + e * i, s = (1 - o - a - r * this.lo) / this.hi;
      var u = r + s,
          l = r - u + s;
      return new _(u, l);
    },
    toSciNotation: function() {
      if (this.isZero())
        return _.SCI_NOT_ZERO;
      var t = this.getSpecialNumberString();
      if (null !== t)
        return t;
      var e = new Array(1).fill(null),
          n = this.extractSignificantDigits(!1, e),
          i = _.SCI_NOT_EXPONENT_CHAR + e[0];
      if ("0" === n.charAt(0))
        throw new IllegalStateException("Found leading zero: " + n);
      var r = "";
      n.length > 1 && (r = n.substring(1));
      var s = n.charAt(0) + "." + r;
      return this.isNegative() ? "-" + s + i : s + i;
    },
    abs: function() {
      return this.isNaN() ? _.NaN : this.isNegative() ? this.negate() : new _(this);
    },
    isPositive: function() {
      return this.hi > 0 || 0 === this.hi && this.lo > 0;
    },
    lt: function(t) {
      return this.hi < t.hi || this.hi === t.hi && this.lo < t.lo;
    },
    add: function() {
      if (arguments[0] instanceof _) {
        var t = arguments[0];
        return _.copy(this).selfAdd(t);
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return _.copy(this).selfAdd(e);
      }
    },
    init: function() {
      if (1 === arguments.length) {
        if ("number" == typeof arguments[0]) {
          var t = arguments[0];
          this.hi = t, this.lo = 0;
        } else if (arguments[0] instanceof _) {
          var e = arguments[0];
          this.hi = e.hi, this.lo = e.lo;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        this.hi = n, this.lo = i;
      }
    },
    gt: function(t) {
      return this.hi > t.hi || this.hi === t.hi && this.lo > t.lo;
    },
    isNegative: function() {
      return this.hi < 0 || 0 === this.hi && this.lo < 0;
    },
    trunc: function() {
      return this.isNaN() ? _.NaN : this.isPositive() ? this.floor() : this.ceil();
    },
    signum: function() {
      return this.hi > 0 ? 1 : this.hi < 0 ? -1 : this.lo > 0 ? 1 : this.lo < 0 ? -1 : 0;
    },
    interfaces_: function() {
      return [u, s, o];
    },
    getClass: function() {
      return _;
    }
  }), _.sqr = function(t) {
    return _.valueOf(t).selfMultiply(t);
  }, _.valueOf = function() {
    if ("string" == typeof arguments[0]) {
      var t = arguments[0];
      return _.parse(t);
    }
    if ("number" == typeof arguments[0]) {
      var e = arguments[0];
      return new _(e);
    }
  }, _.sqrt = function(t) {
    return _.valueOf(t).sqrt();
  }, _.parse = function(t) {
    for (var e = 0,
        n = t.length; O.isWhitespace(t.charAt(e)); )
      e++;
    var i = !1;
    if (n > e) {
      var r = t.charAt(e);
      "-" !== r && "+" !== r || (e++, "-" === r && (i = !0));
    }
    for (var s = new _,
        o = 0,
        a = 0,
        u = 0; ; ) {
      if (e >= n)
        break;
      var l = t.charAt(e);
      if (e++, O.isDigit(l)) {
        var h = l - "0";
        s.selfMultiply(_.TEN), s.selfAdd(h), o++;
      } else {
        if ("." !== l) {
          if ("e" === l || "E" === l) {
            var c = t.substring(e);
            try {
              u = b.parseInt(c);
            } catch (e) {
              throw e instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + c + " in string " + t) : e;
            } finally {}
            break;
          }
          throw new NumberFormatException("Unexpected character '" + l + "' at position " + e + " in string " + t);
        }
        a = o;
      }
    }
    var f = s,
        g = o - a - u;
    if (0 === g)
      f = s;
    else if (g > 0) {
      var d = _.TEN.pow(g);
      f = s.divide(d);
    } else if (0 > g) {
      var d = _.TEN.pow(-g);
      f = s.multiply(d);
    }
    return i ? f.negate() : f;
  }, _.createNaN = function() {
    return new _(r.NaN, r.NaN);
  }, _.copy = function(t) {
    return new _(t);
  }, _.magnitude = function(t) {
    var e = Math.abs(t),
        n = Math.log(e) / Math.log(10),
        i = Math.trunc(Math.floor(n)),
        r = Math.pow(10, i);
    return e >= 10 * r && (i += 1), i;
  }, _.stringOfChar = function(t, e) {
    for (var n = new P,
        i = 0; e > i; i++)
      n.append(t);
    return n.toString();
  }, _.PI = new _(3.141592653589793, 1.2246467991473532e-16), _.TWO_PI = new _(6.283185307179586, 2.4492935982947064e-16), _.PI_2 = new _(1.5707963267948966, 6.123233995736766e-17), _.E = new _(2.718281828459045, 1.4456468917292502e-16), _.NaN = new _(r.NaN, r.NaN), _.EPS = 1.23259516440783e-32, _.SPLIT = 134217729, _.MAX_PRINT_DIGITS = 32, _.TEN = _.valueOf(10), _.ONE = _.valueOf(1), _.SCI_NOT_EXPONENT_CHAR = "E", _.SCI_NOT_ZERO = "0.0E0", e(M.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return M;
    }
  }), M.orientationIndex = function(t, e, n) {
    var i = M.orientationIndexFilter(t, e, n);
    if (1 >= i)
      return i;
    var r = _.valueOf(e.x).selfAdd(-t.x),
        s = _.valueOf(e.y).selfAdd(-t.y),
        o = _.valueOf(n.x).selfAdd(-e.x),
        a = _.valueOf(n.y).selfAdd(-e.y);
    return r.selfMultiply(a).selfSubtract(s.selfMultiply(o)).signum();
  }, M.signOfDet2x2 = function(t, e, n, i) {
    var r = t.multiply(i).selfSubtract(e.multiply(n));
    return r.signum();
  }, M.intersection = function(t, e, n, i) {
    var r = _.valueOf(i.y).selfSubtract(n.y).selfMultiply(_.valueOf(e.x).selfSubtract(t.x)),
        s = _.valueOf(i.x).selfSubtract(n.x).selfMultiply(_.valueOf(e.y).selfSubtract(t.y)),
        o = r.subtract(s),
        a = _.valueOf(i.x).selfSubtract(n.x).selfMultiply(_.valueOf(t.y).selfSubtract(n.y)),
        u = _.valueOf(i.y).selfSubtract(n.y).selfMultiply(_.valueOf(t.x).selfSubtract(n.x)),
        l = a.subtract(u),
        h = l.selfDivide(o).doubleValue(),
        c = _.valueOf(t.x).selfAdd(_.valueOf(e.x).selfSubtract(t.x).selfMultiply(h)).doubleValue(),
        f = _.valueOf(e.x).selfSubtract(t.x).selfMultiply(_.valueOf(t.y).selfSubtract(n.y)),
        d = _.valueOf(e.y).selfSubtract(t.y).selfMultiply(_.valueOf(t.x).selfSubtract(n.x)),
        p = f.subtract(d),
        v = p.selfDivide(o).doubleValue(),
        m = _.valueOf(n.y).selfAdd(_.valueOf(i.y).selfSubtract(n.y).selfMultiply(v)).doubleValue();
    return new g(c, m);
  }, M.orientationIndexFilter = function(t, e, n) {
    var i = null,
        r = (t.x - n.x) * (e.y - n.y),
        s = (t.y - n.y) * (e.x - n.x),
        o = r - s;
    if (r > 0) {
      if (0 >= s)
        return M.signum(o);
      i = r + s;
    } else {
      if (!(0 > r))
        return M.signum(o);
      if (s >= 0)
        return M.signum(o);
      i = -r - s;
    }
    var a = M.DP_SAFE_EPSILON * i;
    return o >= a || -o >= a ? M.signum(o) : 2;
  }, M.signum = function(t) {
    return t > 0 ? 1 : 0 > t ? -1 : 0;
  }, M.DP_SAFE_EPSILON = 1e-15, e(D.prototype, {
    setOrdinate: function(t, e, n) {},
    size: function() {},
    getOrdinate: function(t, e) {},
    getCoordinate: function() {
      if (1 === arguments.length) {
        arguments[0];
      } else if (2 === arguments.length) {
        arguments[0], arguments[1];
      }
    },
    getCoordinateCopy: function(t) {},
    getDimension: function() {},
    getX: function(t) {},
    clone: function() {},
    expandEnvelope: function(t) {},
    copy: function() {},
    getY: function(t) {},
    toCoordinateArray: function() {},
    interfaces_: function() {
      return [o];
    },
    getClass: function() {
      return D;
    }
  }), D.X = 0, D.Y = 1, D.Z = 2, D.M = 3, A.arraycopy = function(t, e, n, i, r) {
    for (var s = 0,
        o = e; e + r > o; o++)
      n[i + s] = t[o], s++;
  }, A.getProperty = function(t) {
    return {"line.separator": "\n"}[t];
  }, e(F.prototype, {
    getY: function() {
      var t = this.y / this.w;
      if (r.isNaN(t) || r.isInfinite(t))
        throw new w;
      return t;
    },
    getX: function() {
      var t = this.x / this.w;
      if (r.isNaN(t) || r.isInfinite(t))
        throw new w;
      return t;
    },
    getCoordinate: function() {
      var t = new g;
      return t.x = this.getX(), t.y = this.getY(), t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return F;
    }
  }), F.intersection = function(t, e, n, i) {
    var s = t.y - e.y,
        o = e.x - t.x,
        a = t.x * e.y - e.x * t.y,
        u = n.y - i.y,
        l = i.x - n.x,
        h = n.x * i.y - i.x * n.y,
        c = o * h - l * a,
        f = u * a - s * h,
        d = s * l - u * o,
        p = c / d,
        v = f / d;
    if (r.isNaN(p) || r.isInfinite(p) || r.isNaN(v) || r.isInfinite(v))
      throw new w;
    return new g(p, v);
  }, e(G.prototype, {
    create: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          arguments[0];
        } else if (R(arguments[0], D)) {
          arguments[0];
        }
      } else if (2 === arguments.length) {
        arguments[0], arguments[1];
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return G;
    }
  }), e(q.prototype, {
    filter: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return q;
    }
  }), e(B.prototype, {
    isGeometryCollection: function() {
      return this.getSortIndex() === B.SORTINDEX_GEOMETRYCOLLECTION;
    },
    getFactory: function() {
      return this.factory;
    },
    getGeometryN: function(t) {
      return this;
    },
    getArea: function() {
      return 0;
    },
    isRectangle: function() {
      return !1;
    },
    equals: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof B) {
          var t = arguments[0];
          return null === t ? !1 : this.equalsTopo(t);
        }
        if (arguments[0] instanceof Object) {
          var e = arguments[0];
          if (!(e instanceof B))
            return !1;
          var n = e;
          return this.equalsExact(n);
        }
      }
    },
    equalsExact: function(t) {
      return this === t || this.equalsExact(t, 0);
    },
    geometryChanged: function() {
      this.apply(B.geometryChangedFilter);
    },
    geometryChangedAction: function() {
      this.envelope = null;
    },
    equalsNorm: function(t) {
      return null === t ? !1 : this.norm().equalsExact(t.norm());
    },
    getLength: function() {
      return 0;
    },
    getNumGeometries: function() {
      return 1;
    },
    compareTo: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = t;
        return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
      }
      if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            e = n;
        return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(n, i);
      }
    },
    getUserData: function() {
      return this.userData;
    },
    getSRID: function() {
      return this.SRID;
    },
    getEnvelope: function() {
      return this.getFactory().toGeometry(this.getEnvelopeInternal());
    },
    checkNotGeometryCollection: function(t) {
      if (t.getSortIndex() === B.SORTINDEX_GEOMETRYCOLLECTION)
        throw new i("This method does not support GeometryCollection arguments");
    },
    equal: function(t, e, n) {
      return 0 === n ? t.equals(e) : t.distance(e) <= n;
    },
    norm: function() {
      var t = this.copy();
      return t.normalize(), t;
    },
    getPrecisionModel: function() {
      return this.factory.getPrecisionModel();
    },
    getEnvelopeInternal: function() {
      return null === this.envelope && (this.envelope = this.computeEnvelopeInternal()), new C(this.envelope);
    },
    setSRID: function(t) {
      this.SRID = t;
    },
    setUserData: function(t) {
      this.userData = t;
    },
    compare: function(t, e) {
      for (var n = t.iterator(),
          i = e.iterator(); n.hasNext() && i.hasNext(); ) {
        var r = n.next(),
            s = i.next(),
            o = r.compareTo(s);
        if (0 !== o)
          return o;
      }
      return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
    },
    hashCode: function() {
      return this.getEnvelopeInternal().hashCode();
    },
    isGeometryCollectionOrDerived: function() {
      return this.getSortIndex() === B.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === B.SORTINDEX_MULTIPOINT || this.getSortIndex() === B.SORTINDEX_MULTILINESTRING || this.getSortIndex() === B.SORTINDEX_MULTIPOLYGON;
    },
    interfaces_: function() {
      return [o, s, u];
    },
    getClass: function() {
      return B;
    }
  }), B.hasNonEmptyElements = function(t) {
    for (var e = 0; e < t.length; e++)
      if (!t[e].isEmpty())
        return !0;
    return !1;
  }, B.hasNullElements = function(t) {
    for (var e = 0; e < t.length; e++)
      if (null === t[e])
        return !0;
    return !1;
  }, B.serialVersionUID = 0x799ea46522854c00, B.SORTINDEX_POINT = 0, B.SORTINDEX_MULTIPOINT = 1, B.SORTINDEX_LINESTRING = 2, B.SORTINDEX_LINEARRING = 3, B.SORTINDEX_MULTILINESTRING = 4, B.SORTINDEX_POLYGON = 5, B.SORTINDEX_MULTIPOLYGON = 6, B.SORTINDEX_GEOMETRYCOLLECTION = 7, B.geometryChangedFilter = {
    interfaces_: function() {
      return [q];
    },
    filter: function(t) {
      t.geometryChangedAction();
    }
  }, e(z.prototype, {
    filter: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return z;
    }
  }), e(V.prototype, {
    isInBoundary: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return V;
    }
  }), e(k.prototype, {
    isInBoundary: function(t) {
      return t % 2 === 1;
    },
    interfaces_: function() {
      return [V];
    },
    getClass: function() {
      return k;
    }
  }), e(Y.prototype, {
    isInBoundary: function(t) {
      return t > 0;
    },
    interfaces_: function() {
      return [V];
    },
    getClass: function() {
      return Y;
    }
  }), e(U.prototype, {
    isInBoundary: function(t) {
      return t > 1;
    },
    interfaces_: function() {
      return [V];
    },
    getClass: function() {
      return U;
    }
  }), e(X.prototype, {
    isInBoundary: function(t) {
      return 1 === t;
    },
    interfaces_: function() {
      return [V];
    },
    getClass: function() {
      return X;
    }
  }), V.Mod2BoundaryNodeRule = k, V.EndPointBoundaryNodeRule = Y, V.MultiValentEndPointBoundaryNodeRule = U, V.MonoValentEndPointBoundaryNodeRule = X, V.MOD2_BOUNDARY_RULE = new k, V.ENDPOINT_BOUNDARY_RULE = new Y, V.MULTIVALENT_ENDPOINT_BOUNDARY_RULE = new U, V.MONOVALENT_ENDPOINT_BOUNDARY_RULE = new X, V.OGC_SFS_BOUNDARY_RULE = V.MOD2_BOUNDARY_RULE, e(H.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return H;
    }
  }), H.isRing = function(t) {
    return t.length < 4 ? !1 : !!t[0].equals2D(t[t.length - 1]);
  }, H.ptNotInList = function(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      if (H.indexOf(i, e) < 0)
        return i;
    }
    return null;
  }, H.scroll = function(t, e) {
    var n = H.indexOf(e, t);
    if (0 > n)
      return null;
    var i = new Array(t.length).fill(null);
    A.arraycopy(t, n, i, 0, t.length - n), A.arraycopy(t, 0, i, t.length - n, n), A.arraycopy(i, 0, t, 0, t.length);
  }, H.equals = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      if (t === e)
        return !0;
      if (null === t || null === e)
        return !1;
      if (t.length !== e.length)
        return !1;
      for (var n = 0; n < t.length; n++)
        if (!t[n].equals(e[n]))
          return !1;
      return !0;
    }
    if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2];
      if (i === r)
        return !0;
      if (null === i || null === r)
        return !1;
      if (i.length !== r.length)
        return !1;
      for (var n = 0; n < i.length; n++)
        if (0 !== s.compare(i[n], r[n]))
          return !1;
      return !0;
    }
  }, H.intersection = function(t, e) {
    for (var n = new N,
        i = 0; i < t.length; i++)
      e.intersects(t[i]) && n.add(t[i], !0);
    return n.toCoordinateArray();
  }, H.hasRepeatedPoints = function(t) {
    for (var e = 1; e < t.length; e++)
      if (t[e - 1].equals(t[e]))
        return !0;
    return !1;
  }, H.removeRepeatedPoints = function(t) {
    if (!H.hasRepeatedPoints(t))
      return t;
    var e = new N(t, !1);
    return e.toCoordinateArray();
  }, H.reverse = function(t) {
    for (var e = t.length - 1,
        n = Math.trunc(e / 2),
        i = 0; n >= i; i++) {
      var r = t[i];
      t[i] = t[e - i], t[e - i] = r;
    }
  }, H.removeNull = function(t) {
    for (var e = 0,
        n = 0; n < t.length; n++)
      null !== t[n] && e++;
    var i = new Array(e).fill(null);
    if (0 === e)
      return i;
    for (var r = 0,
        n = 0; n < t.length; n++)
      null !== t[n] && (i[r++] = t[n]);
    return i;
  }, H.copyDeep = function() {
    if (1 === arguments.length) {
      for (var t = arguments[0],
          e = new Array(t.length).fill(null),
          n = 0; n < t.length; n++)
        e[n] = new g(t[n]);
      return e;
    }
    if (5 === arguments.length)
      for (var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          o = arguments[3],
          a = arguments[4],
          n = 0; a > n; n++)
        s[o + n] = new g(i[r + n]);
  }, H.isEqualReversed = function(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
          r = e[t.length - n - 1];
      if (0 !== i.compareTo(r))
        return !1;
    }
    return !0;
  }, H.envelope = function(t) {
    for (var e = new C,
        n = 0; n < t.length; n++)
      e.expandToInclude(t[n]);
    return e;
  }, H.toCoordinateArray = function(t) {
    return t.toArray(H.coordArrayType);
  }, H.atLeastNCoordinatesOrNothing = function(t, e) {
    return e.length >= t ? e : [];
  }, H.indexOf = function(t, e) {
    for (var n = 0; n < e.length; n++)
      if (t.equals(e[n]))
        return n;
    return -1;
  }, H.increasingDirection = function(t) {
    for (var e = 0; e < Math.trunc(t.length / 2); e++) {
      var n = t.length - 1 - e,
          i = t[e].compareTo(t[n]);
      if (0 !== i)
        return i;
    }
    return 1;
  }, H.compare = function(t, e) {
    for (var n = 0; n < t.length && n < e.length; ) {
      var i = t[n].compareTo(e[n]);
      if (0 !== i)
        return i;
      n++;
    }
    return n < e.length ? -1 : n < t.length ? 1 : 0;
  }, H.minCoordinate = function(t) {
    for (var e = null,
        n = 0; n < t.length; n++)
      (null === e || e.compareTo(t[n]) > 0) && (e = t[n]);
    return e;
  }, H.extract = function(t, e, n) {
    e = T.clamp(e, 0, t.length), n = T.clamp(n, -1, t.length);
    var i = n - e + 1;
    0 > n && (i = 0), e >= t.length && (i = 0), e > n && (i = 0);
    var r = new Array(i).fill(null);
    if (0 === i)
      return r;
    for (var s = 0,
        o = e; n >= o; o++)
      r[s++] = t[o];
    return r;
  }, e(W.prototype, {
    compare: function(t, e) {
      var n = t,
          i = e;
      return H.compare(n, i);
    },
    interfaces_: function() {
      return [a];
    },
    getClass: function() {
      return W;
    }
  }), e(j.prototype, {
    compare: function(t, e) {
      var n = t,
          i = e;
      if (n.length < i.length)
        return -1;
      if (n.length > i.length)
        return 1;
      if (0 === n.length)
        return 0;
      var r = H.compare(n, i),
          s = H.isEqualReversed(n, i);
      return s ? 0 : r;
    },
    OLDcompare: function(t, e) {
      var n = t,
          i = e;
      if (n.length < i.length)
        return -1;
      if (n.length > i.length)
        return 1;
      if (0 === n.length)
        return 0;
      for (var r = H.increasingDirection(n),
          s = H.increasingDirection(i),
          o = r > 0 ? 0 : n.length - 1,
          a = s > 0 ? 0 : n.length - 1,
          u = 0; u < n.length; u++) {
        var l = n[o].compareTo(i[a]);
        if (0 !== l)
          return l;
        o += r, a += s;
      }
      return 0;
    },
    interfaces_: function() {
      return [a];
    },
    getClass: function() {
      return j;
    }
  }), H.ForwardComparator = W, H.BidirectionalComparator = j, H.coordArrayType = new Array(0).fill(null), K.prototype.get = function() {}, K.prototype.put = function() {}, K.prototype.size = function() {}, K.prototype.values = function() {}, K.prototype.entrySet = function() {}, Z.prototype = new K, Q.prototype = new v, Q.prototype.contains = function() {}, J.prototype = new Q, J.prototype.contains = function(t) {
    for (var e = 0,
        n = this.array_.length; n > e; e++) {
      var i = this.array_[e];
      if (i === t)
        return !0;
    }
    return !1;
  }, J.prototype.add = function(t) {
    return this.contains(t) ? !1 : (this.array_.push(t), !0);
  }, J.prototype.addAll = function(t) {
    for (var e = t.iterator(); e.hasNext(); )
      this.add(e.next());
    return !0;
  }, J.prototype.remove = function(t) {
    throw new javascript.util.OperationNotSupported;
  }, J.prototype.size = function() {
    return this.array_.length;
  }, J.prototype.isEmpty = function() {
    return 0 === this.array_.length;
  }, J.prototype.toArray = function() {
    for (var t = [],
        e = 0,
        n = this.array_.length; n > e; e++)
      t.push(this.array_[e]);
    return t;
  }, J.prototype.iterator = function() {
    return new Js(this);
  };
  var Js = function(t) {
    this.hashSet_ = t, this.position_ = 0;
  };
  Js.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new x;
    return this.hashSet_.array_[this.position_++];
  }, Js.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, Js.prototype.remove = function() {
    throw new E;
  };
  var $s = 0,
      to = 1;
  rt.prototype = new Z, rt.prototype.get = function(t) {
    for (var e = this.root_; null !== e; ) {
      var n = t.compareTo(e.key);
      if (0 > n)
        e = e.left;
      else {
        if (!(n > 0))
          return e.value;
        e = e.right;
      }
    }
    return null;
  }, rt.prototype.put = function(t, e) {
    if (null === this.root_)
      return this.root_ = {
        key: t,
        value: e,
        left: null,
        right: null,
        parent: null,
        color: $s,
        getValue: function() {
          return this.value;
        },
        getKey: function() {
          return this.key;
        }
      }, this.size_ = 1, null;
    var n,
        i,
        r = this.root_;
    do
      if (n = r, i = t.compareTo(r.key), 0 > i)
        r = r.left;
      else {
        if (!(i > 0)) {
          var s = r.value;
          return r.value = e, s;
        }
        r = r.right;
      }
 while (null !== r);
    var o = {
      key: t,
      left: null,
      right: null,
      value: e,
      parent: n,
      color: $s,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    };
    return 0 > i ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null;
  }, rt.prototype.fixAfterInsertion = function(t) {
    for (t.color = to; null != t && t != this.root_ && t.parent.color == to; )
      if (tt(t) == nt(tt(tt(t)))) {
        var e = it(tt(tt(t)));
        $(e) == to ? (et(tt(t), $s), et(e, $s), et(tt(tt(t)), to), t = tt(tt(t))) : (t == it(tt(t)) && (t = tt(t), this.rotateLeft(t)), et(tt(t), $s), et(tt(tt(t)), to), this.rotateRight(tt(tt(t))));
      } else {
        var e = nt(tt(tt(t)));
        $(e) == to ? (et(tt(t), $s), et(e, $s), et(tt(tt(t)), to), t = tt(tt(t))) : (t == nt(tt(t)) && (t = tt(t), this.rotateRight(t)), et(tt(t), $s), et(tt(tt(t)), to), this.rotateLeft(tt(tt(t))));
      }
    this.root_.color = $s;
  }, rt.prototype.values = function() {
    var t = new I,
        e = this.getFirstEntry();
    if (null !== e)
      for (t.add(e.value); null !== (e = rt.successor(e)); )
        t.add(e.value);
    return t;
  }, rt.prototype.entrySet = function() {
    var t = new J,
        e = this.getFirstEntry();
    if (null !== e)
      for (t.add(e); null !== (e = rt.successor(e)); )
        t.add(e);
    return t;
  }, rt.prototype.rotateLeft = function(t) {
    if (null != t) {
      var e = t.right;
      t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.left == t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e;
    }
  }, rt.prototype.rotateRight = function(t) {
    if (null != t) {
      var e = t.left;
      t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.right == t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e;
    }
  }, rt.prototype.getFirstEntry = function() {
    var t = this.root_;
    if (null != t)
      for (; null != t.left; )
        t = t.left;
    return t;
  }, rt.successor = function(t) {
    if (null === t)
      return null;
    if (null !== t.right) {
      for (var e = t.right; null !== e.left; )
        e = e.left;
      return e;
    }
    for (var e = t.parent,
        n = t; null !== e && n === e.right; )
      n = e, e = e.parent;
    return e;
  }, rt.prototype.size = function() {
    return this.size_;
  }, e(st.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return st;
    }
  }), ot.prototype = new Q, at.prototype = new ot, at.prototype.contains = function(t) {
    for (var e = 0,
        n = this.array_.length; n > e; e++) {
      var i = this.array_[e];
      if (0 === i.compareTo(t))
        return !0;
    }
    return !1;
  }, at.prototype.add = function(t) {
    if (this.contains(t))
      return !1;
    for (var e = 0,
        n = this.array_.length; n > e; e++) {
      var i = this.array_[e];
      if (1 === i.compareTo(t))
        return this.array_.splice(e, 0, t), !0;
    }
    return this.array_.push(t), !0;
  }, at.prototype.addAll = function(t) {
    for (var e = t.iterator(); e.hasNext(); )
      this.add(e.next());
    return !0;
  }, at.prototype.remove = function(t) {
    throw new E;
  }, at.prototype.size = function() {
    return this.array_.length;
  }, at.prototype.isEmpty = function() {
    return 0 === this.array_.length;
  }, at.prototype.toArray = function() {
    for (var t = [],
        e = 0,
        n = this.array_.length; n > e; e++)
      t.push(this.array_[e]);
    return t;
  }, at.prototype.iterator = function() {
    return new eo(this);
  };
  var eo = function(t) {
    this.treeSet_ = t, this.position_ = 0;
  };
  eo.prototype.next = function() {
    if (this.position_ === this.treeSet_.size())
      throw new x;
    return this.treeSet_.array_[this.position_++];
  }, eo.prototype.hasNext = function() {
    return this.position_ < this.treeSet_.size();
  }, eo.prototype.remove = function() {
    throw new E;
  }, ut.sort = function() {
    var t,
        e,
        n,
        i,
        r = arguments[0];
    if (1 === arguments.length)
      return i = function(t, e) {
        return t.compareTo(e);
      }, void r.sort(i);
    if (2 === arguments.length)
      n = arguments[1], i = function(t, e) {
        return n.compare(t, e);
      }, r.sort(i);
    else {
      if (3 === arguments.length) {
        e = r.slice(arguments[1], arguments[2]), e.sort();
        var s = r.slice(0, arguments[1]).concat(e, r.slice(arguments[2], r.length));
        for (r.splice(0, r.length), t = 0; t < s.length; t++)
          r.push(s[t]);
        return;
      }
      if (4 === arguments.length) {
        for (e = r.slice(arguments[1], arguments[2]), n = arguments[3], i = function(t, e) {
          return n.compare(t, e);
        }, e.sort(i), s = r.slice(0, arguments[1]).concat(e, r.slice(arguments[2], r.length)), r.splice(0, r.length), t = 0; t < s.length; t++)
          r.push(s[t]);
        return;
      }
    }
  }, ut.asList = function(t) {
    for (var e = new I,
        n = 0,
        i = t.length; i > n; n++)
      e.add(t[n]);
    return e;
  }, e(lt.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return lt;
    }
  }), lt.toDimensionSymbol = function(t) {
    switch (t) {
      case lt.FALSE:
        return lt.SYM_FALSE;
      case lt.TRUE:
        return lt.SYM_TRUE;
      case lt.DONTCARE:
        return lt.SYM_DONTCARE;
      case lt.P:
        return lt.SYM_P;
      case lt.L:
        return lt.SYM_L;
      case lt.A:
        return lt.SYM_A;
    }
    throw new i("Unknown dimension value: " + t);
  }, lt.toDimensionValue = function(t) {
    switch (O.toUpperCase(t)) {
      case lt.SYM_FALSE:
        return lt.FALSE;
      case lt.SYM_TRUE:
        return lt.TRUE;
      case lt.SYM_DONTCARE:
        return lt.DONTCARE;
      case lt.SYM_P:
        return lt.P;
      case lt.SYM_L:
        return lt.L;
      case lt.SYM_A:
        return lt.A;
    }
    throw new i("Unknown dimension symbol: " + t);
  }, lt.P = 0, lt.L = 1, lt.A = 2, lt.FALSE = -1, lt.TRUE = -2, lt.DONTCARE = -3, lt.SYM_FALSE = "F", lt.SYM_TRUE = "T", lt.SYM_DONTCARE = "*", lt.SYM_P = "0", lt.SYM_L = "1", lt.SYM_A = "2", e(ht.prototype, {
    filter: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ht;
    }
  }), e(ct.prototype, {
    filter: function(t, e) {},
    isDone: function() {},
    isGeometryChanged: function() {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ct;
    }
  }), h(ft, B), e(ft.prototype, {
    computeEnvelopeInternal: function() {
      for (var t = new C,
          e = 0; e < this.geometries.length; e++)
        t.expandToInclude(this.geometries[e].getEnvelopeInternal());
      return t;
    },
    getGeometryN: function(t) {
      return this.geometries[t];
    },
    getSortIndex: function() {
      return B.SORTINDEX_GEOMETRYCOLLECTION;
    },
    getCoordinates: function() {
      for (var t = new Array(this.getNumPoints()).fill(null),
          e = -1,
          n = 0; n < this.geometries.length; n++)
        for (var i = this.geometries[n].getCoordinates(),
            r = 0; r < i.length; r++)
          e++, t[e] = i[r];
      return t;
    },
    getArea: function() {
      for (var t = 0,
          e = 0; e < this.geometries.length; e++)
        t += this.geometries[e].getArea();
      return t;
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        if (!this.isEquivalentClass(t))
          return !1;
        var n = t;
        if (this.geometries.length !== n.geometries.length)
          return !1;
        for (var i = 0; i < this.geometries.length; i++)
          if (!this.geometries[i].equalsExact(n.geometries[i], e))
            return !1;
        return !0;
      }
      return B.prototype.equalsExact.apply(this, arguments);
    },
    normalize: function() {
      for (var t = 0; t < this.geometries.length; t++)
        this.geometries[t].normalize();
      ut.sort(this.geometries);
    },
    getCoordinate: function() {
      return this.isEmpty() ? null : this.geometries[0].getCoordinate();
    },
    getBoundaryDimension: function() {
      for (var t = lt.FALSE,
          e = 0; e < this.geometries.length; e++)
        t = Math.max(t, this.geometries[e].getBoundaryDimension());
      return t;
    },
    getDimension: function() {
      for (var t = lt.FALSE,
          e = 0; e < this.geometries.length; e++)
        t = Math.max(t, this.geometries[e].getDimension());
      return t;
    },
    getLength: function() {
      for (var t = 0,
          e = 0; e < this.geometries.length; e++)
        t += this.geometries[e].getLength();
      return t;
    },
    getNumPoints: function() {
      for (var t = 0,
          e = 0; e < this.geometries.length; e++)
        t += this.geometries[e].getNumPoints();
      return t;
    },
    getNumGeometries: function() {
      return this.geometries.length;
    },
    reverse: function() {
      for (var t = this.geometries.length,
          e = new Array(t).fill(null),
          n = 0; n < this.geometries.length; n++)
        e[n] = this.geometries[n].reverse();
      return this.getFactory().createGeometryCollection(e);
    },
    compareToSameClass: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new at(ut.asList(this.geometries)),
            n = new at(ut.asList(t.geometries));
        return this.compare(e, n);
      }
      if (2 === arguments.length) {
        for (var i = arguments[0],
            r = arguments[1],
            s = i,
            o = this.getNumGeometries(),
            a = s.getNumGeometries(),
            u = 0; o > u && a > u; ) {
          var l = this.getGeometryN(u),
              h = s.getGeometryN(u),
              c = l.compareToSameClass(h, r);
          if (0 !== c)
            return c;
          u++;
        }
        return o > u ? 1 : a > u ? -1 : 0;
      }
    },
    apply: function() {
      if (R(arguments[0], z))
        for (var t = arguments[0],
            e = 0; e < this.geometries.length; e++)
          this.geometries[e].apply(t);
      else if (R(arguments[0], ct)) {
        var n = arguments[0];
        if (0 === this.geometries.length)
          return null;
        for (var e = 0; e < this.geometries.length && (this.geometries[e].apply(n), !n.isDone()); e++)
          ;
        n.isGeometryChanged() && this.geometryChanged();
      } else if (R(arguments[0], ht)) {
        var i = arguments[0];
        i.filter(this);
        for (var e = 0; e < this.geometries.length; e++)
          this.geometries[e].apply(i);
      } else if (R(arguments[0], q)) {
        var r = arguments[0];
        r.filter(this);
        for (var e = 0; e < this.geometries.length; e++)
          this.geometries[e].apply(r);
      }
    },
    getBoundary: function() {
      return this.checkNotGeometryCollection(this), f.shouldNeverReachHere(), null;
    },
    clone: function() {
      var t = B.prototype.clone.call(this);
      t.geometries = new Array(this.geometries.length).fill(null);
      for (var e = 0; e < this.geometries.length; e++)
        t.geometries[e] = this.geometries[e].clone();
      return t;
    },
    getGeometryType: function() {
      return "GeometryCollection";
    },
    copy: function() {
      for (var t = new Array(this.geometries.length).fill(null),
          e = 0; e < t.length; e++)
        t[e] = this.geometries[e].copy();
      return new ft(t, this.factory);
    },
    isEmpty: function() {
      for (var t = 0; t < this.geometries.length; t++)
        if (!this.geometries[t].isEmpty())
          return !1;
      return !0;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ft;
    }
  }), ft.serialVersionUID = -0x4f07bcb1f857d800, h(gt, ft), e(gt.prototype, {
    getSortIndex: function() {
      return B.SORTINDEX_MULTILINESTRING;
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this.isEquivalentClass(t) ? ft.prototype.equalsExact.call(this, t, e) : !1;
      }
      return ft.prototype.equalsExact.apply(this, arguments);
    },
    getBoundaryDimension: function() {
      return this.isClosed() ? lt.FALSE : 0;
    },
    isClosed: function() {
      if (this.isEmpty())
        return !1;
      for (var t = 0; t < this.geometries.length; t++)
        if (!this.geometries[t].isClosed())
          return !1;
      return !0;
    },
    getDimension: function() {
      return 1;
    },
    reverse: function() {
      for (var t = this.geometries.length,
          e = new Array(t).fill(null),
          n = 0; n < this.geometries.length; n++)
        e[t - 1 - n] = this.geometries[n].reverse();
      return this.getFactory().createMultiLineString(e);
    },
    getBoundary: function() {
      return new dt(this).getBoundary();
    },
    getGeometryType: function() {
      return "MultiLineString";
    },
    copy: function() {
      for (var t = new Array(this.geometries.length).fill(null),
          e = 0; e < t.length; e++)
        t[e] = this.geometries[e].copy();
      return new gt(t, this.factory);
    },
    interfaces_: function() {
      return [st];
    },
    getClass: function() {
      return gt;
    }
  }), gt.serialVersionUID = 0x7155d2ab4afa8000, e(dt.prototype, {
    boundaryMultiLineString: function(t) {
      if (this.geom.isEmpty())
        return this.getEmptyMultiPoint();
      var e = this.computeBoundaryCoordinates(t);
      return 1 === e.length ? this.geomFact.createPoint(e[0]) : this.geomFact.createMultiPointFromCoords(e);
    },
    getBoundary: function() {
      return this.geom instanceof St ? this.boundaryLineString(this.geom) : this.geom instanceof gt ? this.boundaryMultiLineString(this.geom) : this.geom.getBoundary();
    },
    boundaryLineString: function(t) {
      if (this.geom.isEmpty())
        return this.getEmptyMultiPoint();
      if (t.isClosed()) {
        var e = this.bnRule.isInBoundary(2);
        return e ? t.getStartPoint() : this.geomFact.createMultiPoint();
      }
      return this.geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
    },
    getEmptyMultiPoint: function() {
      return this.geomFact.createMultiPoint();
    },
    computeBoundaryCoordinates: function(t) {
      var e = new I;
      this.endpointMap = new rt;
      for (var n = 0; n < t.getNumGeometries(); n++) {
        var i = t.getGeometryN(n);
        0 !== i.getNumPoints() && (this.addEndpoint(i.getCoordinateN(0)), this.addEndpoint(i.getCoordinateN(i.getNumPoints() - 1)));
      }
      for (var r = this.endpointMap.entrySet().iterator(); r.hasNext(); ) {
        var s = r.next(),
            o = s.getValue(),
            a = o.count;
        this.bnRule.isInBoundary(a) && e.add(s.getKey());
      }
      return H.toCoordinateArray(e);
    },
    addEndpoint: function(t) {
      var e = this.endpointMap.get(t);
      null === e && (e = new pt, this.endpointMap.put(t, e)), e.count++;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return dt;
    }
  }), dt.getBoundary = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new dt(t);
      return e.getBoundary();
    }
    if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          e = new dt(n, i);
      return e.getBoundary();
    }
  }, e(pt.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return pt;
    }
  }), e(Nt.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Nt;
    }
  }), Nt.chars = function(t, e) {
    for (var n = new Array(e).fill(null),
        i = 0; e > i; i++)
      n[i] = t;
    return new String(n);
  }, Nt.getStackTrace = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new xt,
          n = new vt(e);
      return t.printStackTrace(n), e.toString();
    }
    if (2 === arguments.length) {
      for (var i = arguments[0],
          r = arguments[1],
          s = "",
          o = new mt(Nt.getStackTrace(i)),
          a = new It(o),
          u = 0; r > u; u++)
        try {
          s += a.readLine() + Nt.NEWLINE;
        } catch (t) {
          if (!(t instanceof Et))
            throw t;
          f.shouldNeverReachHere();
        } finally {}
      return s;
    }
  }, Nt.split = function(t, e) {
    for (var n = e.length,
        i = new I,
        r = "" + t,
        s = r.indexOf(e); s >= 0; ) {
      var o = r.substring(0, s);
      i.add(o), r = r.substring(s + n), s = r.indexOf(e);
    }
    r.length > 0 && i.add(r);
    for (var a = new Array(i.size()).fill(null),
        u = 0; u < a.length; u++)
      a[u] = i.get(u);
    return a;
  }, Nt.toString = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return Nt.SIMPLE_ORDINATE_FORMAT.format(t);
    }
  }, Nt.spaces = function(t) {
    return Nt.chars(" ", t);
  }, Nt.NEWLINE = A.getProperty("line.separator"), Nt.SIMPLE_ORDINATE_FORMAT = new yt("0.#"), e(Ct.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ct;
    }
  }), Ct.copyCoord = function(t, e, n, i) {
    for (var r = Math.min(t.getDimension(), n.getDimension()),
        s = 0; r > s; s++)
      n.setOrdinate(i, s, t.getOrdinate(e, s));
  }, Ct.isRing = function(t) {
    var e = t.size();
    return 0 === e ? !0 : 3 >= e ? !1 : t.getOrdinate(0, D.X) === t.getOrdinate(e - 1, D.X) && t.getOrdinate(0, D.Y) === t.getOrdinate(e - 1, D.Y);
  }, Ct.isEqual = function(t, e) {
    var n = t.size(),
        i = e.size();
    if (n !== i)
      return !1;
    for (var s = Math.min(t.getDimension(), e.getDimension()),
        o = 0; n > o; o++)
      for (var a = 0; s > a; a++) {
        var u = t.getOrdinate(o, a),
            l = e.getOrdinate(o, a);
        if (!(t.getOrdinate(o, a) === e.getOrdinate(o, a) || r.isNaN(u) && r.isNaN(l)))
          return !1;
      }
    return !0;
  }, Ct.extend = function(t, e, n) {
    var i = t.create(n, e.getDimension()),
        r = e.size();
    if (Ct.copy(e, 0, i, 0, r), r > 0)
      for (var s = r; n > s; s++)
        Ct.copy(e, r - 1, i, s, 1);
    return i;
  }, Ct.reverse = function(t) {
    for (var e = t.size() - 1,
        n = Math.trunc(e / 2),
        i = 0; n >= i; i++)
      Ct.swap(t, i, e - i);
  }, Ct.swap = function(t, e, n) {
    if (e === n)
      return null;
    for (var i = 0; i < t.getDimension(); i++) {
      var r = t.getOrdinate(e, i);
      t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, r);
    }
  }, Ct.copy = function(t, e, n, i, r) {
    for (var s = 0; r > s; s++)
      Ct.copyCoord(t, e + s, n, i + s);
  }, Ct.toString = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = t.size();
      if (0 === e)
        return "()";
      var n = t.getDimension(),
          i = new P;
      i.append("(");
      for (var r = 0; e > r; r++) {
        r > 0 && i.append(" ");
        for (var s = 0; n > s; s++)
          s > 0 && i.append(","), i.append(Nt.toString(t.getOrdinate(r, s)));
      }
      return i.append(")"), i.toString();
    }
  }, Ct.ensureValidRing = function(t, e) {
    var n = e.size();
    if (0 === n)
      return e;
    if (3 >= n)
      return Ct.createClosedRing(t, e, 4);
    var i = e.getOrdinate(0, D.X) === e.getOrdinate(n - 1, D.X) && e.getOrdinate(0, D.Y) === e.getOrdinate(n - 1, D.Y);
    return i ? e : Ct.createClosedRing(t, e, n + 1);
  }, Ct.createClosedRing = function(t, e, n) {
    var i = t.create(n, e.getDimension()),
        r = e.size();
    Ct.copy(e, 0, i, 0, r);
    for (var s = r; n > s; s++)
      Ct.copy(e, 0, i, s, 1);
    return i;
  }, h(St, B), e(St.prototype, {
    computeEnvelopeInternal: function() {
      return this.isEmpty() ? new C : this.points.expandEnvelope(new C);
    },
    isRing: function() {
      return this.isClosed() && this.isSimple();
    },
    getSortIndex: function() {
      return B.SORTINDEX_LINESTRING;
    },
    getCoordinates: function() {
      return this.points.toCoordinateArray();
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        if (!this.isEquivalentClass(t))
          return !1;
        var n = t;
        if (this.points.size() !== n.points.size())
          return !1;
        for (var i = 0; i < this.points.size(); i++)
          if (!this.equal(this.points.getCoordinate(i), n.points.getCoordinate(i), e))
            return !1;
        return !0;
      }
      return B.prototype.equalsExact.apply(this, arguments);
    },
    normalize: function() {
      for (var t = 0; t < Math.trunc(this.points.size() / 2); t++) {
        var e = this.points.size() - 1 - t;
        if (!this.points.getCoordinate(t).equals(this.points.getCoordinate(e)))
          return this.points.getCoordinate(t).compareTo(this.points.getCoordinate(e)) > 0 && Ct.reverse(this.points), null;
      }
    },
    getCoordinate: function() {
      return this.isEmpty() ? null : this.points.getCoordinate(0);
    },
    getBoundaryDimension: function() {
      return this.isClosed() ? lt.FALSE : 0;
    },
    isClosed: function() {
      return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
    },
    getEndPoint: function() {
      return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
    },
    getDimension: function() {
      return 1;
    },
    getLength: function() {
      return he.computeLength(this.points);
    },
    getNumPoints: function() {
      return this.points.size();
    },
    reverse: function() {
      var t = this.points.copy();
      Ct.reverse(t);
      var e = this.getFactory().createLineString(t);
      return e;
    },
    compareToSameClass: function() {
      if (1 === arguments.length) {
        for (var t = arguments[0],
            e = t,
            n = 0,
            i = 0; n < this.points.size() && i < e.points.size(); ) {
          var r = this.points.getCoordinate(n).compareTo(e.points.getCoordinate(i));
          if (0 !== r)
            return r;
          n++, i++;
        }
        return n < this.points.size() ? 1 : i < e.points.size() ? -1 : 0;
      }
      if (2 === arguments.length) {
        var s = arguments[0],
            o = arguments[1],
            e = s;
        return o.compare(this.points, e.points);
      }
    },
    apply: function() {
      if (R(arguments[0], z))
        for (var t = arguments[0],
            e = 0; e < this.points.size(); e++)
          t.filter(this.points.getCoordinate(e));
      else if (R(arguments[0], ct)) {
        var n = arguments[0];
        if (0 === this.points.size())
          return null;
        for (var e = 0; e < this.points.size() && (n.filter(this.points, e), !n.isDone()); e++)
          ;
        n.isGeometryChanged() && this.geometryChanged();
      } else if (R(arguments[0], ht)) {
        var i = arguments[0];
        i.filter(this);
      } else if (R(arguments[0], q)) {
        var r = arguments[0];
        r.filter(this);
      }
    },
    getBoundary: function() {
      return new dt(this).getBoundary();
    },
    isEquivalentClass: function(t) {
      return t instanceof St;
    },
    clone: function() {
      var t = B.prototype.clone.call(this);
      return t.points = this.points.clone(), t;
    },
    getCoordinateN: function(t) {
      return this.points.getCoordinate(t);
    },
    getGeometryType: function() {
      return "LineString";
    },
    copy: function() {
      return new St(this.points.copy(), this.factory);
    },
    getCoordinateSequence: function() {
      return this.points;
    },
    isEmpty: function() {
      return 0 === this.points.size();
    },
    init: function(t) {
      if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size())
        throw new i("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");
      this.points = t;
    },
    isCoordinate: function(t) {
      for (var e = 0; e < this.points.size(); e++)
        if (this.points.getCoordinate(e).equals(t))
          return !0;
      return !1;
    },
    getStartPoint: function() {
      return this.isEmpty() ? null : this.getPointN(0);
    },
    getPointN: function(t) {
      return this.getFactory().createPoint(this.points.getCoordinate(t));
    },
    interfaces_: function() {
      return [st];
    },
    getClass: function() {
      return St;
    }
  }), St.serialVersionUID = 0x2b2b51ba435c8e00, e(wt.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return wt;
    }
  }), h(Lt, B), e(Lt.prototype, {
    computeEnvelopeInternal: function() {
      if (this.isEmpty())
        return new C;
      var t = new C;
      return t.expandToInclude(this.coordinates.getX(0), this.coordinates.getY(0)), t;
    },
    getSortIndex: function() {
      return B.SORTINDEX_POINT;
    },
    getCoordinates: function() {
      return this.isEmpty() ? [] : [this.getCoordinate()];
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this.isEquivalentClass(t) ? this.isEmpty() && t.isEmpty() ? !0 : this.isEmpty() !== t.isEmpty() ? !1 : this.equal(t.getCoordinate(), this.getCoordinate(), e) : !1;
      }
      return B.prototype.equalsExact.apply(this, arguments);
    },
    normalize: function() {},
    getCoordinate: function() {
      return 0 !== this.coordinates.size() ? this.coordinates.getCoordinate(0) : null;
    },
    getBoundaryDimension: function() {
      return lt.FALSE;
    },
    getDimension: function() {
      return 0;
    },
    getNumPoints: function() {
      return this.isEmpty() ? 0 : 1;
    },
    reverse: function() {
      return this.copy();
    },
    getX: function() {
      if (null === this.getCoordinate())
        throw new IllegalStateException("getX called on empty Point");
      return this.getCoordinate().x;
    },
    compareToSameClass: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = t;
        return this.getCoordinate().compareTo(e.getCoordinate());
      }
      if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            e = n;
        return i.compare(this.coordinates, e.coordinates);
      }
    },
    apply: function() {
      if (R(arguments[0], z)) {
        var t = arguments[0];
        if (this.isEmpty())
          return null;
        t.filter(this.getCoordinate());
      } else if (R(arguments[0], ct)) {
        var e = arguments[0];
        if (this.isEmpty())
          return null;
        e.filter(this.coordinates, 0), e.isGeometryChanged() && this.geometryChanged();
      } else if (R(arguments[0], ht)) {
        var n = arguments[0];
        n.filter(this);
      } else if (R(arguments[0], q)) {
        var i = arguments[0];
        i.filter(this);
      }
    },
    getBoundary: function() {
      return this.getFactory().createGeometryCollection(null);
    },
    clone: function() {
      var t = B.prototype.clone.call(this);
      return t.coordinates = this.coordinates.clone(), t;
    },
    getGeometryType: function() {
      return "Point";
    },
    copy: function() {
      return new Lt(this.coordinates.copy(), this.factory);
    },
    getCoordinateSequence: function() {
      return this.coordinates;
    },
    getY: function() {
      if (null === this.getCoordinate())
        throw new IllegalStateException("getY called on empty Point");
      return this.getCoordinate().y;
    },
    isEmpty: function() {
      return 0 === this.coordinates.size();
    },
    init: function(t) {
      null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), f.isTrue(t.size() <= 1), this.coordinates = t;
    },
    isSimple: function() {
      return !0;
    },
    interfaces_: function() {
      return [wt];
    },
    getClass: function() {
      return Lt;
    }
  }), Lt.serialVersionUID = 0x44077bad161cbc00, e(Rt.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Rt;
    }
  }), h(Tt, B), e(Tt.prototype, {
    computeEnvelopeInternal: function() {
      return this.shell.getEnvelopeInternal();
    },
    getSortIndex: function() {
      return B.SORTINDEX_POLYGON;
    },
    getCoordinates: function() {
      if (this.isEmpty())
        return [];
      for (var t = new Array(this.getNumPoints()).fill(null),
          e = -1,
          n = this.shell.getCoordinates(),
          i = 0; i < n.length; i++)
        e++, t[e] = n[i];
      for (var r = 0; r < this.holes.length; r++)
        for (var s = this.holes[r].getCoordinates(),
            o = 0; o < s.length; o++)
          e++, t[e] = s[o];
      return t;
    },
    getArea: function() {
      var t = 0;
      t += Math.abs(he.signedArea(this.shell.getCoordinateSequence()));
      for (var e = 0; e < this.holes.length; e++)
        t -= Math.abs(he.signedArea(this.holes[e].getCoordinateSequence()));
      return t;
    },
    isRectangle: function() {
      if (0 !== this.getNumInteriorRing())
        return !1;
      if (null === this.shell)
        return !1;
      if (5 !== this.shell.getNumPoints())
        return !1;
      for (var t = this.shell.getCoordinateSequence(),
          e = this.getEnvelopeInternal(),
          n = 0; 5 > n; n++) {
        var i = t.getX(n);
        if (i !== e.getMinX() && i !== e.getMaxX())
          return !1;
        var r = t.getY(n);
        if (r !== e.getMinY() && r !== e.getMaxY())
          return !1;
      }
      for (var s = t.getX(0),
          o = t.getY(0),
          n = 1; 4 >= n; n++) {
        var i = t.getX(n),
            r = t.getY(n),
            a = i !== s,
            u = r !== o;
        if (a === u)
          return !1;
        s = i, o = r;
      }
      return !0;
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        if (!this.isEquivalentClass(t))
          return !1;
        var n = t,
            i = this.shell,
            r = n.shell;
        if (!i.equalsExact(r, e))
          return !1;
        if (this.holes.length !== n.holes.length)
          return !1;
        for (var s = 0; s < this.holes.length; s++)
          if (!this.holes[s].equalsExact(n.holes[s], e))
            return !1;
        return !0;
      }
      return B.prototype.equalsExact.apply(this, arguments);
    },
    normalize: function() {
      if (0 === arguments.length) {
        this.normalize(this.shell, !0);
        for (var t = 0; t < this.holes.length; t++)
          this.normalize(this.holes[t], !1);
        ut.sort(this.holes);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        if (e.isEmpty())
          return null;
        var i = new Array(e.getCoordinates().length - 1).fill(null);
        A.arraycopy(e.getCoordinates(), 0, i, 0, i.length);
        var r = H.minCoordinate(e.getCoordinates());
        H.scroll(i, r), A.arraycopy(i, 0, e.getCoordinates(), 0, i.length), e.getCoordinates()[i.length] = i[0], he.isCCW(e.getCoordinates()) === n && H.reverse(e.getCoordinates());
      }
    },
    getCoordinate: function() {
      return this.shell.getCoordinate();
    },
    getNumInteriorRing: function() {
      return this.holes.length;
    },
    getBoundaryDimension: function() {
      return 1;
    },
    getDimension: function() {
      return 2;
    },
    getLength: function() {
      var t = 0;
      t += this.shell.getLength();
      for (var e = 0; e < this.holes.length; e++)
        t += this.holes[e].getLength();
      return t;
    },
    getNumPoints: function() {
      for (var t = this.shell.getNumPoints(),
          e = 0; e < this.holes.length; e++)
        t += this.holes[e].getNumPoints();
      return t;
    },
    reverse: function() {
      var t = this.copy();
      t.shell = this.shell.copy().reverse(), t.holes = new Array(this.holes.length).fill(null);
      for (var e = 0; e < this.holes.length; e++)
        t.holes[e] = this.holes[e].copy().reverse();
      return t;
    },
    convexHull: function() {
      return this.getExteriorRing().convexHull();
    },
    compareToSameClass: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = this.shell,
            n = t.shell;
        return e.compareToSameClass(n);
      }
      if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1],
            s = i,
            e = this.shell,
            n = s.shell,
            o = e.compareToSameClass(n, r);
        if (0 !== o)
          return o;
        for (var a = this.getNumInteriorRing(),
            u = s.getNumInteriorRing(),
            l = 0; a > l && u > l; ) {
          var h = this.getInteriorRingN(l),
              c = s.getInteriorRingN(l),
              f = h.compareToSameClass(c, r);
          if (0 !== f)
            return f;
          l++;
        }
        return a > l ? 1 : u > l ? -1 : 0;
      }
    },
    apply: function() {
      if (R(arguments[0], z)) {
        var t = arguments[0];
        this.shell.apply(t);
        for (var e = 0; e < this.holes.length; e++)
          this.holes[e].apply(t);
      } else if (R(arguments[0], ct)) {
        var n = arguments[0];
        if (this.shell.apply(n), !n.isDone())
          for (var e = 0; e < this.holes.length && (this.holes[e].apply(n), !n.isDone()); e++)
            ;
        n.isGeometryChanged() && this.geometryChanged();
      } else if (R(arguments[0], ht)) {
        var i = arguments[0];
        i.filter(this);
      } else if (R(arguments[0], q)) {
        var r = arguments[0];
        r.filter(this), this.shell.apply(r);
        for (var e = 0; e < this.holes.length; e++)
          this.holes[e].apply(r);
      }
    },
    getBoundary: function() {
      if (this.isEmpty())
        return this.getFactory().createMultiLineString();
      var t = new Array(this.holes.length + 1).fill(null);
      t[0] = this.shell;
      for (var e = 0; e < this.holes.length; e++)
        t[e + 1] = this.holes[e];
      return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t);
    },
    clone: function() {
      var t = B.prototype.clone.call(this);
      t.shell = this.shell.clone(), t.holes = new Array(this.holes.length).fill(null);
      for (var e = 0; e < this.holes.length; e++)
        t.holes[e] = this.holes[e].clone();
      return t;
    },
    getGeometryType: function() {
      return "Polygon";
    },
    copy: function() {
      for (var t = this.shell.copy(),
          e = new Array(this.holes.length).fill(null),
          n = 0; n < e.length; n++)
        e[n] = this.holes[n].copy();
      return new Tt(t, e, this.factory);
    },
    getExteriorRing: function() {
      return this.shell;
    },
    isEmpty: function() {
      return this.shell.isEmpty();
    },
    getInteriorRingN: function(t) {
      return this.holes[t];
    },
    interfaces_: function() {
      return [Rt];
    },
    getClass: function() {
      return Tt;
    }
  }), Tt.serialVersionUID = -0x307ffefd8dc97200, h(Pt, ft), e(Pt.prototype, {
    getSortIndex: function() {
      return B.SORTINDEX_MULTIPOINT;
    },
    isValid: function() {
      return !0;
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this.isEquivalentClass(t) ? ft.prototype.equalsExact.call(this, t, e) : !1;
      }
      return ft.prototype.equalsExact.apply(this, arguments);
    },
    getCoordinate: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.geometries[t].getCoordinate();
      }
      return ft.prototype.getCoordinate.apply(this, arguments);
    },
    getBoundaryDimension: function() {
      return lt.FALSE;
    },
    getDimension: function() {
      return 0;
    },
    getBoundary: function() {
      return this.getFactory().createGeometryCollection(null);
    },
    getGeometryType: function() {
      return "MultiPoint";
    },
    copy: function() {
      for (var t = new Array(this.geometries.length).fill(null),
          e = 0; e < t.length; e++)
        t[e] = this.geometries[e].copy();
      return new Pt(t, this.factory);
    },
    interfaces_: function() {
      return [wt];
    },
    getClass: function() {
      return Pt;
    }
  }), Pt.serialVersionUID = -0x6fb1ed4162e0fc00, h(bt, St), e(bt.prototype, {
    getSortIndex: function() {
      return B.SORTINDEX_LINEARRING;
    },
    getBoundaryDimension: function() {
      return lt.FALSE;
    },
    isClosed: function() {
      return this.isEmpty() ? !0 : St.prototype.isClosed.call(this);
    },
    reverse: function() {
      var t = this.points.copy();
      Ct.reverse(t);
      var e = this.getFactory().createLinearRing(t);
      return e;
    },
    validateConstruction: function() {
      if (!this.isEmpty() && !St.prototype.isClosed.call(this))
        throw new i("Points of LinearRing do not form a closed linestring");
      if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < bt.MINIMUM_VALID_SIZE)
        throw new i("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
    },
    getGeometryType: function() {
      return "LinearRing";
    },
    copy: function() {
      return new bt(this.points.copy(), this.factory);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return bt;
    }
  }), bt.MINIMUM_VALID_SIZE = 4, bt.serialVersionUID = -0x3b229e262367a600, h(Ot, ft), e(Ot.prototype, {
    getSortIndex: function() {
      return B.SORTINDEX_MULTIPOLYGON;
    },
    equalsExact: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this.isEquivalentClass(t) ? ft.prototype.equalsExact.call(this, t, e) : !1;
      }
      return ft.prototype.equalsExact.apply(this, arguments);
    },
    getBoundaryDimension: function() {
      return 1;
    },
    getDimension: function() {
      return 2;
    },
    reverse: function() {
      for (var t = this.geometries.length,
          e = new Array(t).fill(null),
          n = 0; n < this.geometries.length; n++)
        e[n] = this.geometries[n].reverse();
      return this.getFactory().createMultiPolygon(e);
    },
    getBoundary: function() {
      if (this.isEmpty())
        return this.getFactory().createMultiLineString();
      for (var t = new I,
          e = 0; e < this.geometries.length; e++)
        for (var n = this.geometries[e],
            i = n.getBoundary(),
            r = 0; r < i.getNumGeometries(); r++)
          t.add(i.getGeometryN(r));
      var s = new Array(t.size()).fill(null);
      return this.getFactory().createMultiLineString(t.toArray(s));
    },
    getGeometryType: function() {
      return "MultiPolygon";
    },
    copy: function() {
      for (var t = new Array(this.geometries.length).fill(null),
          e = 0; e < t.length; e++)
        t[e] = this.geometries[e].copy();
      return new Ot(t, this.factory);
    },
    interfaces_: function() {
      return [Rt];
    },
    getClass: function() {
      return Ot;
    }
  }), Ot.serialVersionUID = -0x7a5aa1369171980, e(_t.prototype, {
    setCopyUserData: function(t) {
      this.isUserDataCopied = t;
    },
    edit: function(t, e) {
      if (null === t)
        return null;
      var n = this.editInternal(t, e);
      return this.isUserDataCopied && n.setUserData(t.getUserData()), n;
    },
    editInternal: function(t, e) {
      return null === this.factory && (this.factory = t.getFactory()), t instanceof ft ? this.editGeometryCollection(t, e) : t instanceof Tt ? this.editPolygon(t, e) : t instanceof Lt ? e.edit(t, this.factory) : t instanceof St ? e.edit(t, this.factory) : (f.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
    },
    editGeometryCollection: function(t, e) {
      for (var n = e.edit(t, this.factory),
          i = new I,
          r = 0; r < n.getNumGeometries(); r++) {
        var s = this.edit(n.getGeometryN(r), e);
        null === s || s.isEmpty() || i.add(s);
      }
      return n.getClass() === Pt ? this.factory.createMultiPoint(i.toArray([])) : n.getClass() === gt ? this.factory.createMultiLineString(i.toArray([])) : n.getClass() === Ot ? this.factory.createMultiPolygon(i.toArray([])) : this.factory.createGeometryCollection(i.toArray([]));
    },
    editPolygon: function(t, e) {
      var n = e.edit(t, this.factory);
      if (null === n && (n = this.factory.createPolygon(null)), n.isEmpty())
        return n;
      var i = this.edit(n.getExteriorRing(), e);
      if (null === i || i.isEmpty())
        return this.factory.createPolygon();
      for (var r = new I,
          s = 0; s < n.getNumInteriorRing(); s++) {
        var o = this.edit(n.getInteriorRingN(s), e);
        null === o || o.isEmpty() || r.add(o);
      }
      return this.factory.createPolygon(i, r.toArray([]));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return _t;
    }
  }), _t.GeometryEditorOperation = Mt, e(Dt.prototype, {
    edit: function(t, e) {
      return t;
    },
    interfaces_: function() {
      return [Mt];
    },
    getClass: function() {
      return Dt;
    }
  }), e(At.prototype, {
    edit: function(t, e) {
      if (t instanceof bt)
        return e.createLinearRing(this.editCoordinates(t.getCoordinates(), t));
      if (t instanceof St)
        return e.createLineString(this.editCoordinates(t.getCoordinates(), t));
      if (t instanceof Lt) {
        var n = this.editCoordinates(t.getCoordinates(), t);
        return n.length > 0 ? e.createPoint(n[0]) : e.createPoint();
      }
      return t;
    },
    interfaces_: function() {
      return [Mt];
    },
    getClass: function() {
      return At;
    }
  }), e(Ft.prototype, {
    edit: function(t, e) {
      return t instanceof bt ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof St ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof Lt ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
    },
    interfaces_: function() {
      return [Mt];
    },
    getClass: function() {
      return Ft;
    }
  }), _t.NoOpGeometryOperation = Dt, _t.CoordinateOperation = At, _t.CoordinateSequenceOperation = Ft, e(Gt.prototype, {
    setOrdinate: function(t, e, n) {
      switch (e) {
        case D.X:
          this.coordinates[t].x = n;
          break;
        case D.Y:
          this.coordinates[t].y = n;
          break;
        case D.Z:
          this.coordinates[t].z = n;
          break;
        default:
          throw new i("invalid ordinateIndex");
      }
    },
    size: function() {
      return this.coordinates.length;
    },
    getOrdinate: function(t, e) {
      switch (e) {
        case D.X:
          return this.coordinates[t].x;
        case D.Y:
          return this.coordinates[t].y;
        case D.Z:
          return this.coordinates[t].z;
      }
      return r.NaN;
    },
    getCoordinate: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.coordinates[t];
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        n.x = this.coordinates[e].x, n.y = this.coordinates[e].y, n.z = this.coordinates[e].z;
      }
    },
    getCoordinateCopy: function(t) {
      return new g(this.coordinates[t]);
    },
    getDimension: function() {
      return this.dimension;
    },
    getX: function(t) {
      return this.coordinates[t].x;
    },
    clone: function() {
      for (var t = new Array(this.size()).fill(null),
          e = 0; e < this.coordinates.length; e++)
        t[e] = this.coordinates[e].clone();
      return new Gt(t, this.dimension);
    },
    expandEnvelope: function(t) {
      for (var e = 0; e < this.coordinates.length; e++)
        t.expandToInclude(this.coordinates[e]);
      return t;
    },
    copy: function() {
      for (var t = new Array(this.size()).fill(null),
          e = 0; e < this.coordinates.length; e++)
        t[e] = this.coordinates[e].copy();
      return new Gt(t, this.dimension);
    },
    toString: function() {
      if (this.coordinates.length > 0) {
        var t = new P(17 * this.coordinates.length);
        t.append("("), t.append(this.coordinates[0]);
        for (var e = 1; e < this.coordinates.length; e++)
          t.append(", "), t.append(this.coordinates[e]);
        return t.append(")"), t.toString();
      }
      return "()";
    },
    getY: function(t) {
      return this.coordinates[t].y;
    },
    toCoordinateArray: function() {
      return this.coordinates;
    },
    interfaces_: function() {
      return [D, u];
    },
    getClass: function() {
      return Gt;
    }
  }), Gt.serialVersionUID = -0xcb44a778db18e00, e(qt.prototype, {
    readResolve: function() {
      return qt.instance();
    },
    create: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return new Gt(t);
        }
        if (R(arguments[0], D)) {
          var e = arguments[0];
          return new Gt(e);
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        return i > 3 && (i = 3), 2 > i ? new Gt(n) : new Gt(n, i);
      }
    },
    interfaces_: function() {
      return [G, u];
    },
    getClass: function() {
      return qt;
    }
  }), qt.instance = function() {
    return qt.instanceObject;
  }, qt.serialVersionUID = -0x38e49fa6cf6f2e00, qt.instanceObject = new qt;
  var no,
      io = Object.defineProperty,
      ro = zt({
        delete: kt,
        has: Xt,
        get: Yt,
        set: Ht,
        keys: jt,
        values: Kt,
        entries: Zt,
        forEach: $t,
        clear: Wt
      }),
      so = "undefined" != typeof Map && Map.prototype.values ? Map : ro;
  te.prototype = new K, te.prototype.get = function(t) {
    return this.map_.get(t) || null;
  }, te.prototype.put = function(t, e) {
    return this.map_.set(t, e), e;
  }, te.prototype.values = function() {
    for (var t = new I,
        e = this.map_.values(),
        n = e.next(); !n.done; )
      t.add(n.value), n = e.next();
    return t;
  }, te.prototype.entrySet = function() {
    var t = new J;
    return this.map_.entries().forEach(function(e) {
      return t.add(e);
    }), t;
  }, te.prototype.size = function() {
    return this.map_.size();
  }, e(ee.prototype, {
    equals: function(t) {
      if (!(t instanceof ee))
        return !1;
      var e = t;
      return this.modelType === e.modelType && this.scale === e.scale;
    },
    compareTo: function(t) {
      var e = t,
          n = this.getMaximumSignificantDigits(),
          i = e.getMaximumSignificantDigits();
      return new b(n).compareTo(new b(i));
    },
    getScale: function() {
      return this.scale;
    },
    isFloating: function() {
      return this.modelType === ee.FLOATING || this.modelType === ee.FLOATING_SINGLE;
    },
    getType: function() {
      return this.modelType;
    },
    toString: function() {
      var t = "UNKNOWN";
      return this.modelType === ee.FLOATING ? t = "Floating" : this.modelType === ee.FLOATING_SINGLE ? t = "Floating-Single" : this.modelType === ee.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
    },
    makePrecise: function() {
      if ("number" == typeof arguments[0]) {
        var t = arguments[0];
        if (r.isNaN(t))
          return t;
        if (this.modelType === ee.FLOATING_SINGLE) {
          var e = t;
          return e;
        }
        return this.modelType === ee.FIXED ? Math.round(t * this.scale) / this.scale : t;
      }
      if (arguments[0] instanceof g) {
        var n = arguments[0];
        if (this.modelType === ee.FLOATING)
          return null;
        n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
      }
    },
    getMaximumSignificantDigits: function() {
      var t = 16;
      return this.modelType === ee.FLOATING ? t = 16 : this.modelType === ee.FLOATING_SINGLE ? t = 6 : this.modelType === ee.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
    },
    setScale: function(t) {
      this.scale = Math.abs(t);
    },
    interfaces_: function() {
      return [u, s];
    },
    getClass: function() {
      return ee;
    }
  }), ee.mostPrecise = function(t, e) {
    return t.compareTo(e) >= 0 ? t : e;
  }, e(ne.prototype, {
    readResolve: function() {
      return ne.nameToTypeMap.get(this.name);
    },
    toString: function() {
      return this.name;
    },
    interfaces_: function() {
      return [u];
    },
    getClass: function() {
      return ne;
    }
  }), ne.serialVersionUID = -552860263173159e4, ne.nameToTypeMap = new te, ee.Type = ne, ee.serialVersionUID = 0x6bee6404e9a25c00, ee.FIXED = new ne("FIXED"), ee.FLOATING = new ne("FLOATING"), ee.FLOATING_SINGLE = new ne("FLOATING SINGLE"), ee.maximumPreciseValue = 9007199254740992, e(ie.prototype, {
    toGeometry: function(t) {
      return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new g(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new g(t.getMinX(), t.getMinY()), new g(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new g(t.getMinX(), t.getMinY()), new g(t.getMinX(), t.getMaxY()), new g(t.getMaxX(), t.getMaxY()), new g(t.getMaxX(), t.getMinY()), new g(t.getMinX(), t.getMinY())]), null);
    },
    createLineString: function() {
      if (0 === arguments.length)
        return this.createLineString(this.getCoordinateSequenceFactory().create([]));
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return this.createLineString(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
        }
        if (R(arguments[0], D)) {
          var e = arguments[0];
          return new St(e, this);
        }
      }
    },
    createMultiLineString: function() {
      if (0 === arguments.length)
        return new gt(null, this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return new gt(t, this);
      }
    },
    buildGeometry: function(t) {
      for (var e = null,
          n = !1,
          i = !1,
          r = t.iterator(); r.hasNext(); ) {
        var s = r.next(),
            o = s.getClass();
        null === e && (e = o), o !== e && (n = !0), s.isGeometryCollectionOrDerived() && (i = !0);
      }
      if (null === e)
        return this.createGeometryCollection();
      if (n || i)
        return this.createGeometryCollection(ie.toGeometryArray(t));
      var a = t.iterator().next(),
          u = t.size() > 1;
      if (u) {
        if (a instanceof Tt)
          return this.createMultiPolygon(ie.toPolygonArray(t));
        if (a instanceof St)
          return this.createMultiLineString(ie.toLineStringArray(t));
        if (a instanceof Lt)
          return this.createMultiPoint(ie.toPointArray(t));
        f.shouldNeverReachHere("Unhandled class: " + a.getClass().getName());
      }
      return a;
    },
    createMultiPointFromCoords: function(t) {
      return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
    },
    createPoint: function() {
      if (0 === arguments.length)
        return this.createPoint(this.getCoordinateSequenceFactory().create([]));
      if (1 === arguments.length) {
        if (arguments[0] instanceof g) {
          var t = arguments[0];
          return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([t]) : null);
        }
        if (R(arguments[0], D)) {
          var e = arguments[0];
          return new Lt(e, this);
        }
      }
    },
    getCoordinateSequenceFactory: function() {
      return this.coordinateSequenceFactory;
    },
    createPolygon: function() {
      if (0 === arguments.length)
        return new Tt(null, null, this);
      if (1 === arguments.length) {
        if (R(arguments[0], D)) {
          var t = arguments[0];
          return this.createPolygon(this.createLinearRing(t));
        }
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return this.createPolygon(this.createLinearRing(e));
        }
        if (arguments[0] instanceof bt) {
          var n = arguments[0];
          return this.createPolygon(n, null);
        }
      } else if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1];
        return new Tt(i, r, this);
      }
    },
    getSRID: function() {
      return this.SRID;
    },
    createGeometryCollection: function() {
      if (0 === arguments.length)
        return new ft(null, this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return new ft(t, this);
      }
    },
    createGeometry: function(t) {
      var e = new _t(this);
      return e.edit(t, {edit: function() {
          if (2 === arguments.length) {
            var t = arguments[0];
            arguments[1];
            return this.coordinateSequenceFactory.create(t);
          }
        }});
    },
    getPrecisionModel: function() {
      return this.precisionModel;
    },
    createLinearRing: function() {
      if (0 === arguments.length)
        return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
        }
        if (R(arguments[0], D)) {
          var e = arguments[0];
          return new bt(e, this);
        }
      }
    },
    createMultiPolygon: function() {
      if (0 === arguments.length)
        return new Ot(null, this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return new Ot(t, this);
      }
    },
    createMultiPoint: function() {
      if (0 === arguments.length)
        return new Pt(null, this);
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return new Pt(t, this);
        }
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return this.createMultiPoint(null !== e ? this.getCoordinateSequenceFactory().create(e) : null);
        }
        if (R(arguments[0], D)) {
          var n = arguments[0];
          if (null === n)
            return this.createMultiPoint(new Array(0).fill(null));
          for (var i = new Array(n.size()).fill(null),
              r = 0; r < n.size(); r++) {
            var s = this.getCoordinateSequenceFactory().create(1, n.getDimension());
            Ct.copy(n, r, s, 0, 1), i[r] = this.createPoint(s);
          }
          return this.createMultiPoint(i);
        }
      }
    },
    interfaces_: function() {
      return [u];
    },
    getClass: function() {
      return ie;
    }
  }), ie.toMultiPolygonArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.toGeometryArray = function(t) {
    if (null === t)
      return null;
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.getDefaultCoordinateSequenceFactory = function() {
    return qt.instance();
  }, ie.toMultiLineStringArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.toLineStringArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.toMultiPointArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.toLinearRingArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.toPointArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.toPolygonArray = function(t) {
    var e = new Array(t.size()).fill(null);
    return t.toArray(e);
  }, ie.createPointFromInternalCoord = function(t, e) {
    return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
  }, ie.serialVersionUID = -0x5ea75f2051eeb400;
  var oo = {
    typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
    emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
    spaces: /\s+/,
    parenComma: /\)\s*,\s*\(/,
    doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
    trimParens: /^\s*\(?(.*?)\)?\s*$/
  };
  e(re.prototype, {
    read: function(t) {
      var e,
          n,
          i;
      t = t.replace(/[\n\r]/g, " ");
      var r = oo.typeStr.exec(t);
      if (-1 !== t.search("EMPTY") && (r = oo.emptyTypeStr.exec(t), r[2] = void 0), r && (n = r[1].toLowerCase(), i = r[2], uo[n] && (e = uo[n].apply(this, [i]))), void 0 === e)
        throw new Error("Could not parse WKT " + t);
      return e;
    },
    write: function(t) {
      return this.extractGeometry(t);
    },
    extractGeometry: function(t) {
      var e = t.getGeometryType().toLowerCase();
      if (!ao[e])
        return null;
      var n,
          i = e.toUpperCase();
      return n = t.isEmpty() ? i + " EMPTY" : i + "(" + ao[e].apply(this, [t]) + ")";
    }
  });
  var ao = {
    coordinate: function(t) {
      return t.x + " " + t.y;
    },
    point: function(t) {
      return ao.coordinate.call(this, t.coordinates.coordinates[0]);
    },
    multipoint: function(t) {
      for (var e = [],
          n = 0,
          i = t.geometries.length; i > n; ++n)
        e.push("(" + ao.point.apply(this, [t.geometries[n]]) + ")");
      return e.join(",");
    },
    linestring: function(t) {
      for (var e = [],
          n = 0,
          i = t.points.coordinates.length; i > n; ++n)
        e.push(ao.coordinate.apply(this, [t.points.coordinates[n]]));
      return e.join(",");
    },
    linearring: function(t) {
      for (var e = [],
          n = 0,
          i = t.points.coordinates.length; i > n; ++n)
        e.push(ao.coordinate.apply(this, [t.points.coordinates[n]]));
      return e.join(",");
    },
    multilinestring: function(t) {
      for (var e = [],
          n = 0,
          i = t.geometries.length; i > n; ++n)
        e.push("(" + ao.linestring.apply(this, [t.geometries[n]]) + ")");
      return e.join(",");
    },
    polygon: function(t) {
      var e = [];
      e.push("(" + ao.linestring.apply(this, [t.shell]) + ")");
      for (var n = 0,
          i = t.holes.length; i > n; ++n)
        e.push("(" + ao.linestring.apply(this, [t.holes[n]]) + ")");
      return e.join(",");
    },
    multipolygon: function(t) {
      for (var e = [],
          n = 0,
          i = t.geometries.length; i > n; ++n)
        e.push("(" + ao.polygon.apply(this, [t.geometries[n]]) + ")");
      return e.join(",");
    },
    geometrycollection: function(t) {
      for (var e = [],
          n = 0,
          i = t.geometries.length; i > n; ++n)
        e.push(this.extractGeometry(t.geometries[n]));
      return e.join(",");
    }
  },
      uo = {
        point: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createPoint();
          var e = t.trim().split(oo.spaces);
          return this.geometryFactory.createPoint(new g(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
        },
        multipoint: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createMultiPoint();
          for (var e,
              n = t.trim().split(","),
              i = [],
              r = 0,
              s = n.length; s > r; ++r)
            e = n[r].replace(oo.trimParens, "$1"), i.push(uo.point.apply(this, [e]));
          return this.geometryFactory.createMultiPoint(i);
        },
        linestring: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createLineString();
          for (var e,
              n = t.trim().split(","),
              i = [],
              r = 0,
              s = n.length; s > r; ++r)
            e = n[r].trim().split(oo.spaces), i.push(new g(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
          return this.geometryFactory.createLineString(i);
        },
        linearring: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createLinearRing();
          for (var e,
              n = t.trim().split(","),
              i = [],
              r = 0,
              s = n.length; s > r; ++r)
            e = n[r].trim().split(oo.spaces), i.push(new g(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
          return this.geometryFactory.createLinearRing(i);
        },
        multilinestring: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createMultiLineString();
          for (var e,
              n = t.trim().split(oo.parenComma),
              i = [],
              r = 0,
              s = n.length; s > r; ++r)
            e = n[r].replace(oo.trimParens, "$1"), i.push(uo.linestring.apply(this, [e]));
          return this.geometryFactory.createMultiLineString(i);
        },
        polygon: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createPolygon();
          for (var e,
              n,
              i,
              r,
              s = t.trim().split(oo.parenComma),
              o = [],
              a = 0,
              u = s.length; u > a; ++a)
            e = s[a].replace(oo.trimParens, "$1"), n = uo.linestring.apply(this, [e]), i = this.geometryFactory.createLinearRing(n.points), 0 === a ? r = i : o.push(i);
          return this.geometryFactory.createPolygon(r, o);
        },
        multipolygon: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createMultiPolygon();
          for (var e,
              n = t.trim().split(oo.doubleParenComma),
              i = [],
              r = 0,
              s = n.length; s > r; ++r)
            e = n[r].replace(oo.trimParens, "$1"), i.push(uo.polygon.apply(this, [e]));
          return this.geometryFactory.createMultiPolygon(i);
        },
        geometrycollection: function(t) {
          if (void 0 === t)
            return this.geometryFactory.createGeometryCollection();
          t = t.replace(/,\s*([A-Za-z])/g, "|$1");
          for (var e = t.trim().split("|"),
              n = [],
              i = 0,
              r = e.length; r > i; ++i)
            n.push(this.read(e[i]));
          return this.geometryFactory.createGeometryCollection(n);
        }
      };
  e(se.prototype, {write: function(t) {
      return this.parser.write(t);
    }}), e(se, {toLineString: function(t, e) {
      if (2 !== arguments.length)
        throw new Error("Not implemented");
      return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
    }}), e(oe.prototype, {
    getIndexAlongSegment: function(t, e) {
      return this.computeIntLineIndex(), this.intLineIndex[t][e];
    },
    getTopologySummary: function() {
      var t = new P;
      return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
    },
    computeIntersection: function(t, e, n, i) {
      this.inputLines[0][0] = t, this.inputLines[0][1] = e, this.inputLines[1][0] = n, this.inputLines[1][1] = i, this.result = this.computeIntersect(t, e, n, i);
    },
    getIntersectionNum: function() {
      return this.result;
    },
    computeIntLineIndex: function() {
      if (0 === arguments.length)
        null === this.intLineIndex && (this.intLineIndex = Array(2).fill().map(function() {
          return Array(2);
        }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
      else if (1 === arguments.length) {
        var t = arguments[0],
            e = this.getEdgeDistance(t, 0),
            n = this.getEdgeDistance(t, 1);
        e > n ? (this.intLineIndex[t][0] = 0, this.intLineIndex[t][1] = 1) : (this.intLineIndex[t][0] = 1, this.intLineIndex[t][1] = 0);
      }
    },
    isProper: function() {
      return this.hasIntersection() && this._isProper;
    },
    setPrecisionModel: function(t) {
      this.precisionModel = t;
    },
    isInteriorIntersection: function() {
      if (0 === arguments.length)
        return this.isInteriorIntersection(0) ? !0 : !!this.isInteriorIntersection(1);
      if (1 === arguments.length) {
        for (var t = arguments[0],
            e = 0; e < this.result; e++)
          if (!this.intPt[e].equals2D(this.inputLines[t][0]) && !this.intPt[e].equals2D(this.inputLines[t][1]))
            return !0;
        return !1;
      }
    },
    getIntersection: function(t) {
      return this.intPt[t];
    },
    isEndPoint: function() {
      return this.hasIntersection() && !this._isProper;
    },
    hasIntersection: function() {
      return this.result !== oe.NO_INTERSECTION;
    },
    getEdgeDistance: function(t, e) {
      var n = oe.computeEdgeDistance(this.intPt[e], this.inputLines[t][0], this.inputLines[t][1]);
      return n;
    },
    isCollinear: function() {
      return this.result === oe.COLLINEAR_INTERSECTION;
    },
    toString: function() {
      return se.toLineString(this.inputLines[0][0], this.inputLines[0][1]) + " - " + se.toLineString(this.inputLines[1][0], this.inputLines[1][1]) + this.getTopologySummary();
    },
    getEndpoint: function(t, e) {
      return this.inputLines[t][e];
    },
    isIntersection: function(t) {
      for (var e = 0; e < this.result; e++)
        if (this.intPt[e].equals2D(t))
          return !0;
      return !1;
    },
    getIntersectionAlongSegment: function(t, e) {
      return this.computeIntLineIndex(), this.intPt[this.intLineIndex[t][e]];
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return oe;
    }
  }), oe.computeEdgeDistance = function(t, e, n) {
    var i = Math.abs(n.x - e.x),
        r = Math.abs(n.y - e.y),
        s = -1;
    if (t.equals(e))
      s = 0;
    else if (t.equals(n))
      s = i > r ? i : r;
    else {
      var o = Math.abs(t.x - e.x),
          a = Math.abs(t.y - e.y);
      s = i > r ? o : a, 0 !== s || t.equals(e) || (s = Math.max(o, a));
    }
    return f.isTrue(!(0 === s && !t.equals(e)), "Bad distance calculation"), s;
  }, oe.nonRobustComputeEdgeDistance = function(t, e, n) {
    var i = t.x - e.x,
        r = t.y - e.y,
        s = Math.sqrt(i * i + r * r);
    return f.isTrue(!(0 === s && !t.equals(e)), "Invalid distance calculation"), s;
  }, oe.DONT_INTERSECT = 0, oe.DO_INTERSECT = 1, oe.COLLINEAR = 2, oe.NO_INTERSECTION = 0, oe.POINT_INTERSECTION = 1, oe.COLLINEAR_INTERSECTION = 2, h(ae, oe), e(ae.prototype, {
    isInSegmentEnvelopes: function(t) {
      var e = new C(this.inputLines[0][0], this.inputLines[0][1]),
          n = new C(this.inputLines[1][0], this.inputLines[1][1]);
      return e.contains(t) && n.contains(t);
    },
    computeIntersection: function() {
      if (3 !== arguments.length)
        return oe.prototype.computeIntersection.apply(this, arguments);
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
      return this._isProper = !1, C.intersects(e, n, t) && 0 === he.orientationIndex(e, n, t) && 0 === he.orientationIndex(n, e, t) ? (this._isProper = !0, (t.equals(e) || t.equals(n)) && (this._isProper = !1), this.result = oe.POINT_INTERSECTION, null) : void(this.result = oe.NO_INTERSECTION);
    },
    normalizeToMinimum: function(t, e, n, i, r) {
      r.x = this.smallestInAbsValue(t.x, e.x, n.x, i.x), r.y = this.smallestInAbsValue(t.y, e.y, n.y, i.y), t.x -= r.x, t.y -= r.y, e.x -= r.x, e.y -= r.y, n.x -= r.x, n.y -= r.y, i.x -= r.x, i.y -= r.y;
    },
    safeHCoordinateIntersection: function(t, e, n, i) {
      var r = null;
      try {
        r = F.intersection(t, e, n, i);
      } catch (s) {
        if (!(s instanceof w))
          throw s;
        r = ae.nearestEndpoint(t, e, n, i);
      } finally {}
      return r;
    },
    intersection: function(t, e, n, i) {
      var r = this.intersectionWithNormalization(t, e, n, i);
      return this.isInSegmentEnvelopes(r) || (r = new g(ae.nearestEndpoint(t, e, n, i))), null !== this.precisionModel && this.precisionModel.makePrecise(r), r;
    },
    smallestInAbsValue: function(t, e, n, i) {
      var r = t,
          s = Math.abs(r);
      return Math.abs(e) < s && (r = e, s = Math.abs(e)), Math.abs(n) < s && (r = n, s = Math.abs(n)), Math.abs(i) < s && (r = i), r;
    },
    checkDD: function(t, e, n, i, r) {
      var s = M.intersection(t, e, n, i),
          o = this.isInSegmentEnvelopes(s);
      A.out.println("DD in env = " + o + "  --------------------- " + s), r.distance(s) > 1e-4 && A.out.println("Distance = " + r.distance(s));
    },
    intersectionWithNormalization: function(t, e, n, i) {
      var r = new g(t),
          s = new g(e),
          o = new g(n),
          a = new g(i),
          u = new g;
      this.normalizeToEnvCentre(r, s, o, a, u);
      var l = this.safeHCoordinateIntersection(r, s, o, a);
      return l.x += u.x, l.y += u.y, l;
    },
    computeCollinearIntersection: function(t, e, n, i) {
      var r = C.intersects(t, e, n),
          s = C.intersects(t, e, i),
          o = C.intersects(n, i, t),
          a = C.intersects(n, i, e);
      return r && s ? (this.intPt[0] = n, this.intPt[1] = i, oe.COLLINEAR_INTERSECTION) : o && a ? (this.intPt[0] = t, this.intPt[1] = e, oe.COLLINEAR_INTERSECTION) : r && o ? (this.intPt[0] = n, this.intPt[1] = t, !n.equals(t) || s || a ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : r && a ? (this.intPt[0] = n, this.intPt[1] = e, !n.equals(e) || s || o ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : s && o ? (this.intPt[0] = i, this.intPt[1] = t, !i.equals(t) || r || a ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : s && a ? (this.intPt[0] = i, this.intPt[1] = e, !i.equals(e) || r || o ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : oe.NO_INTERSECTION;
    },
    normalizeToEnvCentre: function(t, e, n, i, r) {
      var s = t.x < e.x ? t.x : e.x,
          o = t.y < e.y ? t.y : e.y,
          a = t.x > e.x ? t.x : e.x,
          u = t.y > e.y ? t.y : e.y,
          l = n.x < i.x ? n.x : i.x,
          h = n.y < i.y ? n.y : i.y,
          c = n.x > i.x ? n.x : i.x,
          f = n.y > i.y ? n.y : i.y,
          g = s > l ? s : l,
          d = c > a ? a : c,
          p = o > h ? o : h,
          v = f > u ? u : f,
          m = (g + d) / 2,
          y = (p + v) / 2;
      r.x = m, r.y = y, t.x -= r.x, t.y -= r.y, e.x -= r.x, e.y -= r.y, n.x -= r.x, n.y -= r.y, i.x -= r.x, i.y -= r.y;
    },
    computeIntersect: function(t, e, n, i) {
      if (this._isProper = !1, !C.intersects(t, e, n, i))
        return oe.NO_INTERSECTION;
      var r = he.orientationIndex(t, e, n),
          s = he.orientationIndex(t, e, i);
      if (r > 0 && s > 0 || 0 > r && 0 > s)
        return oe.NO_INTERSECTION;
      var o = he.orientationIndex(n, i, t),
          a = he.orientationIndex(n, i, e);
      if (o > 0 && a > 0 || 0 > o && 0 > a)
        return oe.NO_INTERSECTION;
      var u = 0 === r && 0 === s && 0 === o && 0 === a;
      return u ? this.computeCollinearIntersection(t, e, n, i) : (0 === r || 0 === s || 0 === o || 0 === a ? (this._isProper = !1, t.equals2D(n) || t.equals2D(i) ? this.intPt[0] = t : e.equals2D(n) || e.equals2D(i) ? this.intPt[0] = e : 0 === r ? this.intPt[0] = new g(n) : 0 === s ? this.intPt[0] = new g(i) : 0 === o ? this.intPt[0] = new g(t) : 0 === a && (this.intPt[0] = new g(e))) : (this._isProper = !0, this.intPt[0] = this.intersection(t, e, n, i)), oe.POINT_INTERSECTION);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ae;
    }
  }), ae.nearestEndpoint = function(t, e, n, i) {
    var r = t,
        s = he.distancePointLine(t, n, i),
        o = he.distancePointLine(e, n, i);
    return s > o && (s = o, r = e), o = he.distancePointLine(n, t, e), s > o && (s = o, r = n), o = he.distancePointLine(i, t, e), s > o && (s = o, r = i), r;
  }, e(ue.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ue;
    }
  }), ue.orientationIndex = function(t, e, n) {
    var i = e.x - t.x,
        r = e.y - t.y,
        s = n.x - e.x,
        o = n.y - e.y;
    return ue.signOfDet2x2(i, r, s, o);
  }, ue.signOfDet2x2 = function(t, e, n, i) {
    var r = null,
        s = null,
        o = null,
        a = 0;
    if (r = 1, 0 === t || 0 === i)
      return 0 === e || 0 === n ? 0 : e > 0 ? n > 0 ? -r : r : n > 0 ? r : -r;
    if (0 === e || 0 === n)
      return i > 0 ? t > 0 ? r : -r : t > 0 ? -r : r;
    if (e > 0 ? i > 0 ? i >= e || (r = -r, s = t, t = n, n = s, s = e, e = i, i = s) : -i >= e ? (r = -r, n = -n, i = -i) : (s = t, t = -n, n = s, s = e, e = -i, i = s) : i > 0 ? i >= -e ? (r = -r, t = -t, e = -e) : (s = -t, t = n, n = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, n = -n, i = -i) : (r = -r, s = -t, t = -n, n = s, s = -e, e = -i, i = s), t > 0) {
      if (!(n > 0))
        return r;
      if (!(n >= t))
        return r;
    } else {
      if (n > 0)
        return -r;
      if (!(t >= n))
        return -r;
      r = -r, t = -t, n = -n;
    }
    for (; ; ) {
      if (a += 1, o = Math.floor(n / t), n -= o * t, i -= o * e, 0 > i)
        return -r;
      if (i > e)
        return r;
      if (t > n + n) {
        if (i + i > e)
          return r;
      } else {
        if (e > i + i)
          return -r;
        n = t - n, i = e - i, r = -r;
      }
      if (0 === i)
        return 0 === n ? 0 : -r;
      if (0 === n)
        return r;
      if (o = Math.floor(t / n), t -= o * n, e -= o * i, 0 > e)
        return r;
      if (e > i)
        return -r;
      if (n > t + t) {
        if (e + e > i)
          return -r;
      } else {
        if (i > e + e)
          return r;
        t = n - t, e = i - e, r = -r;
      }
      if (0 === e)
        return 0 === t ? 0 : r;
      if (0 === t)
        return -r;
    }
  }, e(le.prototype, {
    countSegment: function(t, e) {
      if (t.x < this.p.x && e.x < this.p.x)
        return null;
      if (this.p.x === e.x && this.p.y === e.y)
        return this.isPointOnSegment = !0, null;
      if (t.y === this.p.y && e.y === this.p.y) {
        var n = t.x,
            i = e.x;
        return n > i && (n = e.x, i = t.x), this.p.x >= n && this.p.x <= i && (this.isPointOnSegment = !0), null;
      }
      if (t.y > this.p.y && e.y <= this.p.y || e.y > this.p.y && t.y <= this.p.y) {
        var r = t.x - this.p.x,
            s = t.y - this.p.y,
            o = e.x - this.p.x,
            a = e.y - this.p.y,
            u = ue.signOfDet2x2(r, s, o, a);
        if (0 === u)
          return this.isPointOnSegment = !0, null;
        s > a && (u = -u), u > 0 && this.crossingCount++;
      }
    },
    isPointInPolygon: function() {
      return this.getLocation() !== L.EXTERIOR;
    },
    getLocation: function() {
      return this.isPointOnSegment ? L.BOUNDARY : this.crossingCount % 2 === 1 ? L.INTERIOR : L.EXTERIOR;
    },
    isOnSegment: function() {
      return this.isPointOnSegment;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return le;
    }
  }), le.locatePointInRing = function() {
    if (arguments[0] instanceof g && R(arguments[1], D)) {
      for (var t = arguments[0],
          e = arguments[1],
          n = new le(t),
          i = new g,
          r = new g,
          s = 1; s < e.size(); s++)
        if (e.getCoordinate(s, i), e.getCoordinate(s - 1, r), n.countSegment(i, r), n.isOnSegment())
          return n.getLocation();
      return n.getLocation();
    }
    if (arguments[0] instanceof g && arguments[1] instanceof Array) {
      for (var o = arguments[0],
          a = arguments[1],
          n = new le(o),
          s = 1; s < a.length; s++) {
        var i = a[s],
            r = a[s - 1];
        if (n.countSegment(i, r), n.isOnSegment())
          return n.getLocation();
      }
      return n.getLocation();
    }
  }, e(he.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return he;
    }
  }), he.orientationIndex = function(t, e, n) {
    return M.orientationIndex(t, e, n);
  }, he.signedArea = function() {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      if (t.length < 3)
        return 0;
      for (var e = 0,
          n = t[0].x,
          i = 1; i < t.length - 1; i++) {
        var r = t[i].x - n,
            s = t[i + 1].y,
            o = t[i - 1].y;
        e += r * (o - s);
      }
      return e / 2;
    }
    if (R(arguments[0], D)) {
      var a = arguments[0],
          u = a.size();
      if (3 > u)
        return 0;
      var l = new g,
          h = new g,
          c = new g;
      a.getCoordinate(0, h), a.getCoordinate(1, c);
      var n = h.x;
      c.x -= n;
      for (var e = 0,
          i = 1; u - 1 > i; i++)
        l.y = h.y, h.x = c.x, h.y = c.y, a.getCoordinate(i + 1, c), c.x -= n, e += h.x * (l.y - c.y);
      return e / 2;
    }
  }, he.distanceLineLine = function(t, e, n, i) {
    if (t.equals(e))
      return he.distancePointLine(t, n, i);
    if (n.equals(i))
      return he.distancePointLine(i, t, e);
    var r = !1;
    if (C.intersects(t, e, n, i)) {
      var s = (e.x - t.x) * (i.y - n.y) - (e.y - t.y) * (i.x - n.x);
      if (0 === s)
        r = !0;
      else {
        var o = (t.y - n.y) * (i.x - n.x) - (t.x - n.x) * (i.y - n.y),
            a = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y),
            u = a / s,
            l = o / s;
        (0 > l || l > 1 || 0 > u || u > 1) && (r = !0);
      }
    } else
      r = !0;
    return r ? T.min(he.distancePointLine(t, n, i), he.distancePointLine(e, n, i), he.distancePointLine(n, t, e), he.distancePointLine(i, t, e)) : 0;
  }, he.isPointInRing = function(t, e) {
    return he.locatePointInRing(t, e) !== L.EXTERIOR;
  }, he.computeLength = function(t) {
    var e = t.size();
    if (1 >= e)
      return 0;
    var n = 0,
        i = new g;
    t.getCoordinate(0, i);
    for (var r = i.x,
        s = i.y,
        o = 1; e > o; o++) {
      t.getCoordinate(o, i);
      var a = i.x,
          u = i.y,
          l = a - r,
          h = u - s;
      n += Math.sqrt(l * l + h * h), r = a, s = u;
    }
    return n;
  }, he.isCCW = function(t) {
    var e = t.length - 1;
    if (3 > e)
      throw new i("Ring has fewer than 4 points, so orientation cannot be determined");
    for (var n = t[0],
        r = 0,
        s = 1; e >= s; s++) {
      var o = t[s];
      o.y > n.y && (n = o, r = s);
    }
    var a = r;
    do
      a -= 1, 0 > a && (a = e);
 while (t[a].equals2D(n) && a !== r);
    var u = r;
    do
      u = (u + 1) % e;
 while (t[u].equals2D(n) && u !== r);
    var l = t[a],
        h = t[u];
    if (l.equals2D(n) || h.equals2D(n) || l.equals2D(h))
      return !1;
    var c = he.computeOrientation(l, n, h),
        f = !1;
    return f = 0 === c ? l.x > h.x : c > 0;
  }, he.locatePointInRing = function(t, e) {
    return le.locatePointInRing(t, e);
  }, he.distancePointLinePerpendicular = function(t, e, n) {
    var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
        r = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
    return Math.abs(r) * Math.sqrt(i);
  }, he.computeOrientation = function(t, e, n) {
    return he.orientationIndex(t, e, n);
  }, he.distancePointLine = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      if (0 === e.length)
        throw new i("Line array must contain at least one vertex");
      for (var n = t.distance(e[0]),
          r = 0; r < e.length - 1; r++) {
        var s = he.distancePointLine(t, e[r], e[r + 1]);
        n > s && (n = s);
      }
      return n;
    }
    if (3 === arguments.length) {
      var o = arguments[0],
          a = arguments[1],
          u = arguments[2];
      if (a.x === u.x && a.y === u.y)
        return o.distance(a);
      var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y),
          h = ((o.x - a.x) * (u.x - a.x) + (o.y - a.y) * (u.y - a.y)) / l;
      if (0 >= h)
        return o.distance(a);
      if (h >= 1)
        return o.distance(u);
      var c = ((a.y - o.y) * (u.x - a.x) - (a.x - o.x) * (u.y - a.y)) / l;
      return Math.abs(c) * Math.sqrt(l);
    }
  }, he.isOnLine = function(t, e) {
    for (var n = new ae,
        i = 1; i < e.length; i++) {
      var r = e[i - 1],
          s = e[i];
      if (n.computeIntersection(t, r, s), n.hasIntersection())
        return !0;
    }
    return !1;
  }, he.CLOCKWISE = -1, he.RIGHT = he.CLOCKWISE, he.COUNTERCLOCKWISE = 1, he.LEFT = he.COUNTERCLOCKWISE, he.COLLINEAR = 0, he.STRAIGHT = he.COLLINEAR, e(ce.prototype, {
    minX: function() {
      return Math.min(this.p0.x, this.p1.x);
    },
    orientationIndex: function() {
      if (arguments[0] instanceof ce) {
        var t = arguments[0],
            e = he.orientationIndex(this.p0, this.p1, t.p0),
            n = he.orientationIndex(this.p0, this.p1, t.p1);
        return e >= 0 && n >= 0 ? Math.max(e, n) : 0 >= e && 0 >= n ? Math.max(e, n) : 0;
      }
      if (arguments[0] instanceof g) {
        var i = arguments[0];
        return he.orientationIndex(this.p0, this.p1, i);
      }
    },
    toGeometry: function(t) {
      return t.createLineString([this.p0, this.p1]);
    },
    isVertical: function() {
      return this.p0.x === this.p1.x;
    },
    equals: function(t) {
      if (!(t instanceof ce))
        return !1;
      var e = t;
      return this.p0.equals(e.p0) && this.p1.equals(e.p1);
    },
    intersection: function(t) {
      var e = new ae;
      return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
    },
    project: function() {
      if (arguments[0] instanceof g) {
        var t = arguments[0];
        if (t.equals(this.p0) || t.equals(this.p1))
          return new g(t);
        var e = this.projectionFactor(t),
            n = new g;
        return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
      }
      if (arguments[0] instanceof ce) {
        var i = arguments[0],
            r = this.projectionFactor(i.p0),
            s = this.projectionFactor(i.p1);
        if (r >= 1 && s >= 1)
          return null;
        if (0 >= r && 0 >= s)
          return null;
        var o = this.project(i.p0);
        0 > r && (o = this.p0), r > 1 && (o = this.p1);
        var a = this.project(i.p1);
        return 0 > s && (a = this.p0), s > 1 && (a = this.p1), new ce(o, a);
      }
    },
    normalize: function() {
      this.p1.compareTo(this.p0) < 0 && this.reverse();
    },
    angle: function() {
      return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
    },
    getCoordinate: function(t) {
      return 0 === t ? this.p0 : this.p1;
    },
    distancePerpendicular: function(t) {
      return he.distancePointLinePerpendicular(t, this.p0, this.p1);
    },
    minY: function() {
      return Math.min(this.p0.y, this.p1.y);
    },
    midPoint: function() {
      return ce.midPoint(this.p0, this.p1);
    },
    projectionFactor: function(t) {
      if (t.equals(this.p0))
        return 0;
      if (t.equals(this.p1))
        return 1;
      var e = this.p1.x - this.p0.x,
          n = this.p1.y - this.p0.y,
          i = e * e + n * n;
      if (0 >= i)
        return r.NaN;
      var s = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / i;
      return s;
    },
    closestPoints: function(t) {
      var e = this.intersection(t);
      if (null !== e)
        return [e, e];
      var n = new Array(2).fill(null),
          i = r.MAX_VALUE,
          s = null,
          o = this.closestPoint(t.p0);
      i = o.distance(t.p0), n[0] = o, n[1] = t.p0;
      var a = this.closestPoint(t.p1);
      s = a.distance(t.p1), i > s && (i = s, n[0] = a, n[1] = t.p1);
      var u = t.closestPoint(this.p0);
      s = u.distance(this.p0), i > s && (i = s, n[0] = this.p0, n[1] = u);
      var l = t.closestPoint(this.p1);
      return s = l.distance(this.p1), i > s && (i = s, n[0] = this.p1, n[1] = l), n;
    },
    closestPoint: function(t) {
      var e = this.projectionFactor(t);
      if (e > 0 && 1 > e)
        return this.project(t);
      var n = this.p0.distance(t),
          i = this.p1.distance(t);
      return i > n ? this.p0 : this.p1;
    },
    maxX: function() {
      return Math.max(this.p0.x, this.p1.x);
    },
    getLength: function() {
      return this.p0.distance(this.p1);
    },
    compareTo: function(t) {
      var e = t,
          n = this.p0.compareTo(e.p0);
      return 0 !== n ? n : this.p1.compareTo(e.p1);
    },
    reverse: function() {
      var t = this.p0;
      this.p0 = this.p1, this.p1 = t;
    },
    equalsTopo: function(t) {
      return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0);
    },
    lineIntersection: function(t) {
      try {
        var e = F.intersection(this.p0, this.p1, t.p0, t.p1);
        return e;
      } catch (t) {
        if (!(t instanceof w))
          throw t;
      } finally {}
      return null;
    },
    maxY: function() {
      return Math.max(this.p0.y, this.p1.y);
    },
    pointAlongOffset: function(t, e) {
      var n = this.p0.x + t * (this.p1.x - this.p0.x),
          i = this.p0.y + t * (this.p1.y - this.p0.y),
          r = this.p1.x - this.p0.x,
          s = this.p1.y - this.p0.y,
          o = Math.sqrt(r * r + s * s),
          a = 0,
          u = 0;
      if (0 !== e) {
        if (0 >= o)
          throw new IllegalStateException("Cannot compute offset from zero-length line segment");
        a = e * r / o, u = e * s / o;
      }
      var l = n - u,
          h = i + a,
          c = new g(l, h);
      return c;
    },
    setCoordinates: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setCoordinates(t.p0, t.p1);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
      }
    },
    segmentFraction: function(t) {
      var e = this.projectionFactor(t);
      return 0 > e ? e = 0 : (e > 1 || r.isNaN(e)) && (e = 1), e;
    },
    toString: function() {
      return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
    },
    isHorizontal: function() {
      return this.p0.y === this.p1.y;
    },
    distance: function() {
      if (arguments[0] instanceof ce) {
        var t = arguments[0];
        return he.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
      }
      if (arguments[0] instanceof g) {
        var e = arguments[0];
        return he.distancePointLine(e, this.p0, this.p1);
      }
    },
    pointAlong: function(t) {
      var e = new g;
      return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
    },
    hashCode: function() {
      var t = java.lang.Double.doubleToLongBits(this.p0.x);
      t ^= 31 * java.lang.Double.doubleToLongBits(this.p0.y);
      var e = Math.trunc(t) ^ Math.trunc(t >> 32),
          n = java.lang.Double.doubleToLongBits(this.p1.x);
      n ^= 31 * java.lang.Double.doubleToLongBits(this.p1.y);
      var i = Math.trunc(n) ^ Math.trunc(n >> 32);
      return e ^ i;
    },
    interfaces_: function() {
      return [s, u];
    },
    getClass: function() {
      return ce;
    }
  }), ce.midPoint = function(t, e) {
    return new g((t.x + e.x) / 2, (t.y + e.y) / 2);
  }, ce.serialVersionUID = 0x2d2172135f411c00, e(fe.prototype, {
    isIntersects: function() {
      return !this.isDisjoint();
    },
    isCovers: function() {
      var t = fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) || fe.isTrue(this.matrix[L.INTERIOR][L.BOUNDARY]) || fe.isTrue(this.matrix[L.BOUNDARY][L.INTERIOR]) || fe.isTrue(this.matrix[L.BOUNDARY][L.BOUNDARY]);
      return t && this.matrix[L.EXTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.BOUNDARY] === lt.FALSE;
    },
    isCoveredBy: function() {
      var t = fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) || fe.isTrue(this.matrix[L.INTERIOR][L.BOUNDARY]) || fe.isTrue(this.matrix[L.BOUNDARY][L.INTERIOR]) || fe.isTrue(this.matrix[L.BOUNDARY][L.BOUNDARY]);
      return t && this.matrix[L.INTERIOR][L.EXTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.EXTERIOR] === lt.FALSE;
    },
    set: function() {
      if (1 === arguments.length)
        for (var t = arguments[0],
            e = 0; e < t.length; e++) {
          var n = Math.trunc(e / 3),
              i = e % 3;
          this.matrix[n][i] = lt.toDimensionValue(t.charAt(e));
        }
      else if (3 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];
        this.matrix[r][s] = o;
      }
    },
    isContains: function() {
      return fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && this.matrix[L.EXTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.BOUNDARY] === lt.FALSE;
    },
    setAtLeast: function() {
      if (1 === arguments.length)
        for (var t = arguments[0],
            e = 0; e < t.length; e++) {
          var n = Math.trunc(e / 3),
              i = e % 3;
          this.setAtLeast(n, i, lt.toDimensionValue(t.charAt(e)));
        }
      else if (3 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];
        this.matrix[r][s] < o && (this.matrix[r][s] = o);
      }
    },
    setAtLeastIfValid: function(t, e, n) {
      t >= 0 && e >= 0 && this.setAtLeast(t, e, n);
    },
    isWithin: function() {
      return fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && this.matrix[L.INTERIOR][L.EXTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.EXTERIOR] === lt.FALSE;
    },
    isTouches: function(t, e) {
      return t > e ? this.isTouches(e, t) : t === lt.A && e === lt.A || t === lt.L && e === lt.L || t === lt.L && e === lt.A || t === lt.P && e === lt.A || t === lt.P && e === lt.L ? this.matrix[L.INTERIOR][L.INTERIOR] === lt.FALSE && (fe.isTrue(this.matrix[L.INTERIOR][L.BOUNDARY]) || fe.isTrue(this.matrix[L.BOUNDARY][L.INTERIOR]) || fe.isTrue(this.matrix[L.BOUNDARY][L.BOUNDARY])) : !1;
    },
    isOverlaps: function(t, e) {
      return t === lt.P && e === lt.P || t === lt.A && e === lt.A ? fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && fe.isTrue(this.matrix[L.INTERIOR][L.EXTERIOR]) && fe.isTrue(this.matrix[L.EXTERIOR][L.INTERIOR]) : t === lt.L && e === lt.L ? 1 === this.matrix[L.INTERIOR][L.INTERIOR] && fe.isTrue(this.matrix[L.INTERIOR][L.EXTERIOR]) && fe.isTrue(this.matrix[L.EXTERIOR][L.INTERIOR]) : !1;
    },
    isEquals: function(t, e) {
      return t !== e ? !1 : fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && this.matrix[L.INTERIOR][L.EXTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.EXTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.BOUNDARY] === lt.FALSE;
    },
    toString: function() {
      for (var t = new P("123456789"),
          e = 0; 3 > e; e++)
        for (var n = 0; 3 > n; n++)
          t.setCharAt(3 * e + n, lt.toDimensionSymbol(this.matrix[e][n]));
      return t.toString();
    },
    setAll: function(t) {
      for (var e = 0; 3 > e; e++)
        for (var n = 0; 3 > n; n++)
          this.matrix[e][n] = t;
    },
    get: function(t, e) {
      return this.matrix[t][e];
    },
    transpose: function() {
      var t = this.matrix[1][0];
      return this.matrix[1][0] = this.matrix[0][1], this.matrix[0][1] = t, t = this.matrix[2][0], this.matrix[2][0] = this.matrix[0][2], this.matrix[0][2] = t, t = this.matrix[2][1], this.matrix[2][1] = this.matrix[1][2], this.matrix[1][2] = t, this;
    },
    matches: function(t) {
      if (9 !== t.length)
        throw new i("Should be length 9: " + t);
      for (var e = 0; 3 > e; e++)
        for (var n = 0; 3 > n; n++)
          if (!fe.matches(this.matrix[e][n], t.charAt(3 * e + n)))
            return !1;
      return !0;
    },
    add: function(t) {
      for (var e = 0; 3 > e; e++)
        for (var n = 0; 3 > n; n++)
          this.setAtLeast(e, n, t.get(e, n));
    },
    isDisjoint: function() {
      return this.matrix[L.INTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.INTERIOR][L.BOUNDARY] === lt.FALSE && this.matrix[L.BOUNDARY][L.INTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.BOUNDARY] === lt.FALSE;
    },
    isCrosses: function(t, e) {
      return t === lt.P && e === lt.L || t === lt.P && e === lt.A || t === lt.L && e === lt.A ? fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && fe.isTrue(this.matrix[L.INTERIOR][L.EXTERIOR]) : t === lt.L && e === lt.P || t === lt.A && e === lt.P || t === lt.A && e === lt.L ? fe.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && fe.isTrue(this.matrix[L.EXTERIOR][L.INTERIOR]) : t === lt.L && e === lt.L ? 0 === this.matrix[L.INTERIOR][L.INTERIOR] : !1;
    },
    interfaces_: function() {
      return [o];
    },
    getClass: function() {
      return fe;
    }
  }), fe.matches = function() {
    if (Number.isInteger(arguments[0]) && "string" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];
      return e === lt.SYM_DONTCARE ? !0 : e === lt.SYM_TRUE && (t >= 0 || t === lt.TRUE) ? !0 : e === lt.SYM_FALSE && t === lt.FALSE ? !0 : e === lt.SYM_P && t === lt.P ? !0 : e === lt.SYM_L && t === lt.L ? !0 : e === lt.SYM_A && t === lt.A;
    }
    if ("string" == typeof arguments[0] && "string" == typeof arguments[1]) {
      var n = arguments[0],
          i = arguments[1],
          r = new fe(n);
      return r.matches(i);
    }
  }, fe.isTrue = function(t) {
    return t >= 0 || t === lt.TRUE;
  };
  var lo = Object.freeze({
    Coordinate: g,
    CoordinateList: N,
    Envelope: C,
    LineSegment: ce,
    GeometryFactory: ie,
    Geometry: B,
    Point: Lt,
    LineString: St,
    LinearRing: bt,
    Polygon: Tt,
    GeometryCollection: ft,
    MultiPoint: Pt,
    MultiLineString: gt,
    MultiPolygon: Ot,
    Dimension: lt,
    IntersectionMatrix: fe
  });
  e(ge.prototype, {
    addPoint: function(t) {
      this.ptCount += 1, this.ptCentSum.x += t.x, this.ptCentSum.y += t.y;
    },
    setBasePoint: function(t) {
      null === this.areaBasePt && (this.areaBasePt = t);
    },
    addLineSegments: function(t) {
      for (var e = 0,
          n = 0; n < t.length - 1; n++) {
        var i = t[n].distance(t[n + 1]);
        if (0 !== i) {
          e += i;
          var r = (t[n].x + t[n + 1].x) / 2;
          this.lineCentSum.x += i * r;
          var s = (t[n].y + t[n + 1].y) / 2;
          this.lineCentSum.y += i * s;
        }
      }
      this.totalLength += e, 0 === e && t.length > 0 && this.addPoint(t[0]);
    },
    addHole: function(t) {
      for (var e = he.isCCW(t),
          n = 0; n < t.length - 1; n++)
        this.addTriangle(this.areaBasePt, t[n], t[n + 1], e);
      this.addLineSegments(t);
    },
    getCentroid: function() {
      var t = new g;
      if (Math.abs(this.areasum2) > 0)
        t.x = this.cg3.x / 3 / this.areasum2, t.y = this.cg3.y / 3 / this.areasum2;
      else if (this.totalLength > 0)
        t.x = this.lineCentSum.x / this.totalLength, t.y = this.lineCentSum.y / this.totalLength;
      else {
        if (!(this.ptCount > 0))
          return null;
        t.x = this.ptCentSum.x / this.ptCount, t.y = this.ptCentSum.y / this.ptCount;
      }
      return t;
    },
    addShell: function(t) {
      t.length > 0 && this.setBasePoint(t[0]);
      for (var e = !he.isCCW(t),
          n = 0; n < t.length - 1; n++)
        this.addTriangle(this.areaBasePt, t[n], t[n + 1], e);
      this.addLineSegments(t);
    },
    addTriangle: function(t, e, n, i) {
      var r = i ? 1 : -1;
      ge.centroid3(t, e, n, this.triangleCent3);
      var s = ge.area2(t, e, n);
      this.cg3.x += r * s * this.triangleCent3.x, this.cg3.y += r * s * this.triangleCent3.y, this.areasum2 += r * s;
    },
    add: function() {
      if (arguments[0] instanceof Tt) {
        var t = arguments[0];
        this.addShell(t.getExteriorRing().getCoordinates());
        for (var e = 0; e < t.getNumInteriorRing(); e++)
          this.addHole(t.getInteriorRingN(e).getCoordinates());
      } else if (arguments[0] instanceof B) {
        var n = arguments[0];
        if (n.isEmpty())
          return null;
        if (n instanceof Lt)
          this.addPoint(n.getCoordinate());
        else if (n instanceof St)
          this.addLineSegments(n.getCoordinates());
        else if (n instanceof Tt) {
          var i = n;
          this.add(i);
        } else if (n instanceof ft)
          for (var r = n,
              e = 0; e < r.getNumGeometries(); e++)
            this.add(r.getGeometryN(e));
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ge;
    }
  }), ge.area2 = function(t, e, n) {
    return (e.x - t.x) * (n.y - t.y) - (n.x - t.x) * (e.y - t.y);
  }, ge.centroid3 = function(t, e, n, i) {
    return i.x = t.x + e.x + n.x, i.y = t.y + e.y + n.y, null;
  }, ge.getCentroid = function(t) {
    var e = new ge(t);
    return e.getCentroid();
  }, de.prototype = new Error, de.prototype.name = "EmptyStackException", pe.prototype = new y, pe.prototype.add = function(t) {
    return this.array_.push(t), !0;
  }, pe.prototype.get = function(t) {
    if (0 > t || t >= this.size())
      throw new IndexOutOfBoundsException;
    return this.array_[t];
  }, pe.prototype.push = function(t) {
    return this.array_.push(t), t;
  }, pe.prototype.pop = function(t) {
    if (0 === this.array_.length)
      throw new de;
    return this.array_.pop();
  }, pe.prototype.peek = function() {
    if (0 === this.array_.length)
      throw new de;
    return this.array_[this.array_.length - 1];
  }, pe.prototype.empty = function() {
    return 0 === this.array_.length;
  }, pe.prototype.isEmpty = function() {
    return this.empty();
  }, pe.prototype.search = function(t) {
    return this.array_.indexOf(t);
  }, pe.prototype.size = function() {
    return this.array_.length;
  }, pe.prototype.toArray = function() {
    for (var t = [],
        e = 0,
        n = this.array_.length; n > e; e++)
      t.push(this.array_[e]);
    return t;
  }, e(ve.prototype, {
    filter: function(t) {
      this.treeSet.contains(t) || (this.list.add(t), this.treeSet.add(t));
    },
    getCoordinates: function() {
      var t = new Array(this.list.size()).fill(null);
      return this.list.toArray(t);
    },
    interfaces_: function() {
      return [z];
    },
    getClass: function() {
      return ve;
    }
  }), ve.filterCoordinates = function(t) {
    for (var e = new ve,
        n = 0; n < t.length; n++)
      e.filter(t[n]);
    return e.getCoordinates();
  }, e(me.prototype, {
    preSort: function(t) {
      for (var e = null,
          n = 1; n < t.length; n++)
        (t[n].y < t[0].y || t[n].y === t[0].y && t[n].x < t[0].x) && (e = t[0], t[0] = t[n], t[n] = e);
      return ut.sort(t, 1, t.length, new ye(t[0])), t;
    },
    computeOctRing: function(t) {
      var e = this.computeOctPts(t),
          n = new N;
      return n.add(e, !1), n.size() < 3 ? null : (n.closeRing(), n.toCoordinateArray());
    },
    lineOrPolygon: function(t) {
      if (t = this.cleanRing(t), 3 === t.length)
        return this.geomFactory.createLineString([t[0], t[1]]);
      var e = this.geomFactory.createLinearRing(t);
      return this.geomFactory.createPolygon(e, null);
    },
    cleanRing: function(t) {
      f.equals(t[0], t[t.length - 1]);
      for (var e = new I,
          n = null,
          i = 0; i <= t.length - 2; i++) {
        var r = t[i],
            s = t[i + 1];
        r.equals(s) || null !== n && this.isBetween(n, r, s) || (e.add(r), n = r);
      }
      e.add(t[t.length - 1]);
      var o = new Array(e.size()).fill(null);
      return e.toArray(o);
    },
    isBetween: function(t, e, n) {
      if (0 !== he.computeOrientation(t, e, n))
        return !1;
      if (t.x !== n.x) {
        if (t.x <= e.x && e.x <= n.x)
          return !0;
        if (n.x <= e.x && e.x <= t.x)
          return !0;
      }
      if (t.y !== n.y) {
        if (t.y <= e.y && e.y <= n.y)
          return !0;
        if (n.y <= e.y && e.y <= t.y)
          return !0;
      }
      return !1;
    },
    reduce: function(t) {
      var e = this.computeOctRing(t);
      if (null === e)
        return t;
      for (var n = new at,
          i = 0; i < e.length; i++)
        n.add(e[i]);
      for (var i = 0; i < t.length; i++)
        he.isPointInRing(t[i], e) || n.add(t[i]);
      var r = H.toCoordinateArray(n);
      return r.length < 3 ? this.padArray3(r) : r;
    },
    getConvexHull: function() {
      if (0 === this.inputPts.length)
        return this.geomFactory.createGeometryCollection(null);
      if (1 === this.inputPts.length)
        return this.geomFactory.createPoint(this.inputPts[0]);
      if (2 === this.inputPts.length)
        return this.geomFactory.createLineString(this.inputPts);
      var t = this.inputPts;
      this.inputPts.length > 50 && (t = this.reduce(this.inputPts));
      var e = this.preSort(t),
          n = this.grahamScan(e),
          i = this.toCoordinateArray(n);
      return this.lineOrPolygon(i);
    },
    padArray3: function(t) {
      for (var e = new Array(3).fill(null),
          n = 0; n < e.length; n++)
        n < t.length ? e[n] = t[n] : e[n] = t[0];
      return e;
    },
    computeOctPts: function(t) {
      for (var e = new Array(8).fill(null),
          n = 0; n < e.length; n++)
        e[n] = t[0];
      for (var i = 1; i < t.length; i++)
        t[i].x < e[0].x && (e[0] = t[i]), t[i].x - t[i].y < e[1].x - e[1].y && (e[1] = t[i]), t[i].y > e[2].y && (e[2] = t[i]), t[i].x + t[i].y > e[3].x + e[3].y && (e[3] = t[i]), t[i].x > e[4].x && (e[4] = t[i]), t[i].x - t[i].y > e[5].x - e[5].y && (e[5] = t[i]), t[i].y < e[6].y && (e[6] = t[i]), t[i].x + t[i].y < e[7].x + e[7].y && (e[7] = t[i]);
      return e;
    },
    toCoordinateArray: function(t) {
      for (var e = new Array(t.size()).fill(null),
          n = 0; n < t.size(); n++) {
        var i = t.get(n);
        e[n] = i;
      }
      return e;
    },
    grahamScan: function(t) {
      var e = null,
          n = new pe;
      e = n.push(t[0]), e = n.push(t[1]), e = n.push(t[2]);
      for (var i = 3; i < t.length; i++) {
        for (e = n.pop(); !n.empty() && he.computeOrientation(n.peek(), e, t[i]) > 0; )
          e = n.pop();
        e = n.push(e), e = n.push(t[i]);
      }
      return e = n.push(t[0]), n;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return me;
    }
  }), me.extractCoordinates = function(t) {
    var e = new ve;
    return t.apply(e), e.getCoordinates();
  }, e(ye.prototype, {
    compare: function(t, e) {
      var n = t,
          i = e;
      return ye.polarCompare(this.origin, n, i);
    },
    interfaces_: function() {
      return [a];
    },
    getClass: function() {
      return ye;
    }
  }), ye.polarCompare = function(t, e, n) {
    var i = e.x - t.x,
        r = e.y - t.y,
        s = n.x - t.x,
        o = n.y - t.y,
        a = he.computeOrientation(t, e, n);
    if (a === he.COUNTERCLOCKWISE)
      return 1;
    if (a === he.CLOCKWISE)
      return -1;
    var u = i * i + r * r,
        l = s * s + o * o;
    return l > u ? -1 : u > l ? 1 : 0;
  }, me.RadialComparator = ye, e(xe.prototype, {
    transformPoint: function(t, e) {
      return this.factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
    },
    transformPolygon: function(t, e) {
      var n = !0,
          i = this.transformLinearRing(t.getExteriorRing(), t);
      null !== i && i instanceof bt && !i.isEmpty() || (n = !1);
      for (var r = new I,
          s = 0; s < t.getNumInteriorRing(); s++) {
        var o = this.transformLinearRing(t.getInteriorRingN(s), t);
        null === o || o.isEmpty() || (o instanceof bt || (n = !1), r.add(o));
      }
      if (n)
        return this.factory.createPolygon(i, r.toArray([]));
      var a = new I;
      return null !== i && a.add(i), a.addAll(r), this.factory.buildGeometry(a);
    },
    createCoordinateSequence: function(t) {
      return this.factory.getCoordinateSequenceFactory().create(t);
    },
    getInputGeometry: function() {
      return this.inputGeom;
    },
    transformMultiLineString: function(t, e) {
      for (var n = new I,
          i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transformLineString(t.getGeometryN(i), t);
        null !== r && (r.isEmpty() || n.add(r));
      }
      return this.factory.buildGeometry(n);
    },
    transformCoordinates: function(t, e) {
      return this.copy(t);
    },
    transformLineString: function(t, e) {
      return this.factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
    },
    transformMultiPoint: function(t, e) {
      for (var n = new I,
          i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transformPoint(t.getGeometryN(i), t);
        null !== r && (r.isEmpty() || n.add(r));
      }
      return this.factory.buildGeometry(n);
    },
    transformMultiPolygon: function(t, e) {
      for (var n = new I,
          i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transformPolygon(t.getGeometryN(i), t);
        null !== r && (r.isEmpty() || n.add(r));
      }
      return this.factory.buildGeometry(n);
    },
    copy: function(t) {
      return t.copy();
    },
    transformGeometryCollection: function(t, e) {
      for (var n = new I,
          i = 0; i < t.getNumGeometries(); i++) {
        var r = this.transform(t.getGeometryN(i));
        null !== r && (this.pruneEmptyGeometry && r.isEmpty() || n.add(r));
      }
      return this.preserveGeometryCollectionType ? this.factory.createGeometryCollection(ie.toGeometryArray(n)) : this.factory.buildGeometry(n);
    },
    transform: function(t) {
      if (this.inputGeom = t, this.factory = t.getFactory(), t instanceof Lt)
        return this.transformPoint(t, null);
      if (t instanceof Pt)
        return this.transformMultiPoint(t, null);
      if (t instanceof bt)
        return this.transformLinearRing(t, null);
      if (t instanceof St)
        return this.transformLineString(t, null);
      if (t instanceof gt)
        return this.transformMultiLineString(t, null);
      if (t instanceof Tt)
        return this.transformPolygon(t, null);
      if (t instanceof Ot)
        return this.transformMultiPolygon(t, null);
      if (t instanceof ft)
        return this.transformGeometryCollection(t, null);
      throw new i("Unknown Geometry subtype: " + t.getClass().getName());
    },
    transformLinearRing: function(t, e) {
      var n = this.transformCoordinates(t.getCoordinateSequence(), t);
      if (null === n)
        return this.factory.createLinearRing(null);
      var i = n.size();
      return i > 0 && 4 > i && !this.preserveType ? this.factory.createLineString(n) : this.factory.createLinearRing(n);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return xe;
    }
  }), e(Ee.prototype, {
    snapVertices: function(t, e) {
      for (var n = this._isClosed ? t.size() - 1 : t.size(),
          i = 0; n > i; i++) {
        var r = t.get(i),
            s = this.findSnapForVertex(r, e);
        null !== s && (t.set(i, new g(s)), 0 === i && this._isClosed && t.set(t.size() - 1, new g(s)));
      }
    },
    findSnapForVertex: function(t, e) {
      for (var n = 0; n < e.length; n++) {
        if (t.equals2D(e[n]))
          return null;
        if (t.distance(e[n]) < this.snapTolerance)
          return e[n];
      }
      return null;
    },
    snapTo: function(t) {
      var e = new N(this.srcPts);
      this.snapVertices(e, t), this.snapSegments(e, t);
      var n = e.toCoordinateArray();
      return n;
    },
    snapSegments: function(t, e) {
      if (0 === e.length)
        return null;
      var n = e.length;
      e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);
      for (var i = 0; n > i; i++) {
        var r = e[i],
            s = this.findSegmentIndexToSnap(r, t);
        s >= 0 && t.add(s + 1, new g(r), !1);
      }
    },
    findSegmentIndexToSnap: function(t, e) {
      for (var n = r.MAX_VALUE,
          i = -1,
          s = 0; s < e.size() - 1; s++) {
        if (this.seg.p0 = e.get(s), this.seg.p1 = e.get(s + 1), this.seg.p0.equals2D(t) || this.seg.p1.equals2D(t)) {
          if (this.allowSnappingToSourceVertices)
            continue;
          return -1;
        }
        var o = this.seg.distance(t);
        o < this.snapTolerance && n > o && (n = o, i = s);
      }
      return i;
    },
    setAllowSnappingToSourceVertices: function(t) {
      this.allowSnappingToSourceVertices = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ee;
    }
  }), Ee.isClosed = function(t) {
    return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
  }, e(Ie.prototype, {
    snapTo: function(t, e) {
      var n = this.extractTargetCoordinates(t),
          i = new Ne(e, n);
      return i.transform(this.srcGeom);
    },
    snapToSelf: function(t, e) {
      var n = this.extractTargetCoordinates(this.srcGeom),
          i = new Ne(t, n, !0),
          r = i.transform(this.srcGeom),
          s = r;
      return e && R(s, Rt) && (s = r.buffer(0)), s;
    },
    computeSnapTolerance: function(t) {
      var e = this.computeMinimumSegmentLength(t),
          n = e / 10;
      return n;
    },
    extractTargetCoordinates: function(t) {
      for (var e = new at,
          n = t.getCoordinates(),
          i = 0; i < n.length; i++)
        e.add(n[i]);
      return e.toArray(new Array(0).fill(null));
    },
    computeMinimumSegmentLength: function(t) {
      for (var e = r.MAX_VALUE,
          n = 0; n < t.length - 1; n++) {
        var i = t[n].distance(t[n + 1]);
        e > i && (e = i);
      }
      return e;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ie;
    }
  }), Ie.snap = function(t, e, n) {
    var i = new Array(2).fill(null),
        r = new Ie(t);
    i[0] = r.snapTo(e, n);
    var s = new Ie(e);
    return i[1] = s.snapTo(i[0], n), i;
  }, Ie.computeOverlaySnapTolerance = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = Ie.computeSizeBasedSnapTolerance(t),
          n = t.getPrecisionModel();
      if (n.getType() === ee.FIXED) {
        var i = 1 / n.getScale() * 2 / 1.415;
        i > e && (e = i);
      }
      return e;
    }
    if (2 === arguments.length) {
      var r = arguments[0],
          s = arguments[1];
      return Math.min(Ie.computeOverlaySnapTolerance(r), Ie.computeOverlaySnapTolerance(s));
    }
  }, Ie.computeSizeBasedSnapTolerance = function(t) {
    var e = t.getEnvelopeInternal(),
        n = Math.min(e.getHeight(), e.getWidth()),
        i = n * Ie.SNAP_PRECISION_FACTOR;
    return i;
  }, Ie.snapToSelf = function(t, e, n) {
    var i = new Ie(t);
    return i.snapToSelf(e, n);
  }, Ie.SNAP_PRECISION_FACTOR = 1e-9, h(Ne, xe), e(Ne.prototype, {
    snapLine: function(t, e) {
      var n = new Ee(t, this.snapTolerance);
      return n.setAllowSnappingToSourceVertices(this.isSelfSnap), n.snapTo(e);
    },
    transformCoordinates: function(t, e) {
      var n = t.toCoordinateArray(),
          i = this.snapLine(n, this.snapPts);
      return this.factory.getCoordinateSequenceFactory().create(i);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ne;
    }
  }), e(Ce.prototype, {
    getCommon: function() {
      return r.longBitsToDouble(this.commonBits);
    },
    add: function(t) {
      var e = r.doubleToLongBits(t);
      if (this.isFirst)
        return this.commonBits = e, this.commonSignExp = Ce.signExpBits(this.commonBits), this.isFirst = !1, null;
      var n = Ce.signExpBits(e);
      return n !== this.commonSignExp ? (this.commonBits = 0, null) : (this.commonMantissaBitsCount = Ce.numCommonMostSigMantissaBits(this.commonBits, e), void(this.commonBits = Ce.zeroLowerBits(this.commonBits, 64 - (12 + this.commonMantissaBitsCount))));
    },
    toString: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = r.longBitsToDouble(t),
            n = Long.toBinaryString(t),
            i = "0000000000000000000000000000000000000000000000000000000000000000" + n,
            s = i.substring(i.length - 64),
            o = s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
        return o;
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ce;
    }
  }), Ce.getBit = function(t, e) {
    var n = 1 << e;
    return 0 !== (t & n) ? 1 : 0;
  }, Ce.signExpBits = function(t) {
    return t >> 52;
  }, Ce.zeroLowerBits = function(t, e) {
    var n = (1 << e) - 1,
        i = ~n,
        r = t & i;
    return r;
  }, Ce.numCommonMostSigMantissaBits = function(t, e) {
    for (var n = 0,
        i = 52; i >= 0; i--) {
      if (Ce.getBit(t, i) !== Ce.getBit(e, i))
        return n;
      n++;
    }
    return 52;
  }, e(Se.prototype, {
    addCommonBits: function(t) {
      var e = new Le(this.commonCoord);
      t.apply(e), t.geometryChanged();
    },
    removeCommonBits: function(t) {
      if (0 === this.commonCoord.x && 0 === this.commonCoord.y)
        return t;
      var e = new g(this.commonCoord);
      e.x = -e.x, e.y = -e.y;
      var n = new Le(e);
      return t.apply(n), t.geometryChanged(), t;
    },
    getCommonCoordinate: function() {
      return this.commonCoord;
    },
    add: function(t) {
      t.apply(this.ccFilter), this.commonCoord = this.ccFilter.getCommonCoordinate();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Se;
    }
  }), e(we.prototype, {
    filter: function(t) {
      this.commonBitsX.add(t.x), this.commonBitsY.add(t.y);
    },
    getCommonCoordinate: function() {
      return new g(this.commonBitsX.getCommon(), this.commonBitsY.getCommon());
    },
    interfaces_: function() {
      return [z];
    },
    getClass: function() {
      return we;
    }
  }), e(Le.prototype, {
    filter: function(t, e) {
      var n = t.getOrdinate(e, 0) + this.trans.x,
          i = t.getOrdinate(e, 1) + this.trans.y;
      t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, i);
    },
    isDone: function() {
      return !1;
    },
    isGeometryChanged: function() {
      return !0;
    },
    interfaces_: function() {
      return [ct];
    },
    getClass: function() {
      return Le;
    }
  }), Se.CommonCoordinateFilter = we, Se.Translater = Le, e(Re.prototype, {
    next: function() {
      if (this.atStart)
        return this.atStart = !1, Re.isAtomic(this.parent) && this.index++, this.parent;
      if (null !== this.subcollectionIterator) {
        if (this.subcollectionIterator.hasNext())
          return this.subcollectionIterator.next();
        this.subcollectionIterator = null;
      }
      if (this.index >= this.max)
        throw new x;
      var t = this.parent.getGeometryN(this.index++);
      return t instanceof ft ? (this.subcollectionIterator = new Re(t), this.subcollectionIterator.next()) : t;
    },
    remove: function() {
      throw new UnsupportedOperationException(this.getClass().getName());
    },
    hasNext: function() {
      if (this.atStart)
        return !0;
      if (null !== this.subcollectionIterator) {
        if (this.subcollectionIterator.hasNext())
          return !0;
        this.subcollectionIterator = null;
      }
      return !(this.index >= this.max);
    },
    interfaces_: function() {
      return [p];
    },
    getClass: function() {
      return Re;
    }
  }), Re.isAtomic = function(t) {
    return !(t instanceof ft);
  }, e(Te.prototype, {
    locateInternal: function() {
      if (arguments[0] instanceof g && arguments[1] instanceof Tt) {
        var t = arguments[0],
            e = arguments[1];
        if (e.isEmpty())
          return L.EXTERIOR;
        var n = e.getExteriorRing(),
            i = this.locateInPolygonRing(t, n);
        if (i === L.EXTERIOR)
          return L.EXTERIOR;
        if (i === L.BOUNDARY)
          return L.BOUNDARY;
        for (var r = 0; r < e.getNumInteriorRing(); r++) {
          var s = e.getInteriorRingN(r),
              o = this.locateInPolygonRing(t, s);
          if (o === L.INTERIOR)
            return L.EXTERIOR;
          if (o === L.BOUNDARY)
            return L.BOUNDARY;
        }
        return L.INTERIOR;
      }
      if (arguments[0] instanceof g && arguments[1] instanceof St) {
        var a = arguments[0],
            u = arguments[1];
        if (!u.getEnvelopeInternal().intersects(a))
          return L.EXTERIOR;
        var l = u.getCoordinates();
        return u.isClosed() || !a.equals(l[0]) && !a.equals(l[l.length - 1]) ? he.isOnLine(a, l) ? L.INTERIOR : L.EXTERIOR : L.BOUNDARY;
      }
      if (arguments[0] instanceof g && arguments[1] instanceof Lt) {
        var h = arguments[0],
            c = arguments[1],
            f = c.getCoordinate();
        return f.equals2D(h) ? L.INTERIOR : L.EXTERIOR;
      }
    },
    locateInPolygonRing: function(t, e) {
      return e.getEnvelopeInternal().intersects(t) ? he.locatePointInRing(t, e.getCoordinates()) : L.EXTERIOR;
    },
    intersects: function(t, e) {
      return this.locate(t, e) !== L.EXTERIOR;
    },
    updateLocationInfo: function(t) {
      t === L.INTERIOR && (this.isIn = !0), t === L.BOUNDARY && this.numBoundaries++;
    },
    computeLocation: function(t, e) {
      if (e instanceof Lt && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof St)
        this.updateLocationInfo(this.locateInternal(t, e));
      else if (e instanceof Tt)
        this.updateLocationInfo(this.locateInternal(t, e));
      else if (e instanceof gt)
        for (var n = e,
            i = 0; i < n.getNumGeometries(); i++) {
          var r = n.getGeometryN(i);
          this.updateLocationInfo(this.locateInternal(t, r));
        }
      else if (e instanceof Ot)
        for (var s = e,
            i = 0; i < s.getNumGeometries(); i++) {
          var o = s.getGeometryN(i);
          this.updateLocationInfo(this.locateInternal(t, o));
        }
      else if (e instanceof ft)
        for (var a = new Re(e); a.hasNext(); ) {
          var u = a.next();
          u !== e && this.computeLocation(t, u);
        }
    },
    locate: function(t, e) {
      return e.isEmpty() ? L.EXTERIOR : e instanceof St ? this.locateInternal(t, e) : e instanceof Tt ? this.locateInternal(t, e) : (this.isIn = !1, this.numBoundaries = 0, this.computeLocation(t, e), this.boundaryRule.isInBoundary(this.numBoundaries) ? L.BOUNDARY : this.numBoundaries > 0 || this.isIn ? L.INTERIOR : L.EXTERIOR);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Te;
    }
  }), e(Pe.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Pe;
    }
  }), Pe.octant = function() {
    if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];
      if (0 === t && 0 === e)
        throw new i("Cannot compute the octant for point ( " + t + ", " + e + " )");
      var n = Math.abs(t),
          r = Math.abs(e);
      return t >= 0 ? e >= 0 ? n >= r ? 0 : 1 : n >= r ? 7 : 6 : e >= 0 ? n >= r ? 3 : 2 : n >= r ? 4 : 5;
    }
    if (arguments[0] instanceof g && arguments[1] instanceof g) {
      var s = arguments[0],
          o = arguments[1],
          a = o.x - s.x,
          u = o.y - s.y;
      if (0 === a && 0 === u)
        throw new i("Cannot compute the octant for two identical points " + s);
      return Pe.octant(a, u);
    }
  }, e(be.prototype, {
    getCoordinates: function() {},
    size: function() {},
    getCoordinate: function(t) {},
    isClosed: function() {},
    setData: function(t) {},
    getData: function() {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return be;
    }
  }), e(Oe.prototype, {
    getCoordinates: function() {
      return this.pts;
    },
    size: function() {
      return this.pts.length;
    },
    getCoordinate: function(t) {
      return this.pts[t];
    },
    isClosed: function() {
      return this.pts[0].equals(this.pts[this.pts.length - 1]);
    },
    getSegmentOctant: function(t) {
      return t === this.pts.length - 1 ? -1 : Pe.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
    },
    setData: function(t) {
      this.data = t;
    },
    getData: function() {
      return this.data;
    },
    toString: function() {
      return se.toLineString(new Gt(this.pts));
    },
    interfaces_: function() {
      return [be];
    },
    getClass: function() {
      return Oe;
    }
  }), e(_e.prototype, {
    getBounds: function() {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return _e;
    }
  }), e(Me.prototype, {
    getItem: function() {
      return this.item;
    },
    getBounds: function() {
      return this.bounds;
    },
    interfaces_: function() {
      return [_e, u];
    },
    getClass: function() {
      return Me;
    }
  }), e(De.prototype, {
    poll: function() {
      if (this.isEmpty())
        return null;
      var t = this.items.get(1);
      return this.items.set(1, this.items.get(this._size)), this._size -= 1, this.reorder(1), t;
    },
    size: function() {
      return this._size;
    },
    reorder: function(t) {
      for (var e = null,
          n = this.items.get(t); 2 * t <= this._size && (e = 2 * t, e !== this._size && this.items.get(e + 1).compareTo(this.items.get(e)) < 0 && e++, this.items.get(e).compareTo(n) < 0); t = e)
        this.items.set(t, this.items.get(e));
      this.items.set(t, n);
    },
    clear: function() {
      this._size = 0, this.items.clear();
    },
    isEmpty: function() {
      return 0 === this._size;
    },
    add: function(t) {
      this.items.add(null), this._size += 1;
      var e = this._size;
      for (this.items.set(0, t); t.compareTo(this.items.get(Math.trunc(e / 2))) < 0; e /= 2)
        this.items.set(e, this.items.get(Math.trunc(e / 2)));
      this.items.set(e, t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return De;
    }
  }), e(Ae.prototype, {
    visitItem: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ae;
    }
  }), e(Fe.prototype, {
    insert: function(t, e) {},
    remove: function(t, e) {},
    query: function() {
      if (1 === arguments.length) {
        arguments[0];
      } else if (2 === arguments.length) {
        arguments[0], arguments[1];
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Fe;
    }
  }), e(Ge.prototype, {
    getLevel: function() {
      return this.level;
    },
    size: function() {
      return this.childBoundables.size();
    },
    getChildBoundables: function() {
      return this.childBoundables;
    },
    addChildBoundable: function(t) {
      f.isTrue(null === this.bounds), this.childBoundables.add(t);
    },
    isEmpty: function() {
      return this.childBoundables.isEmpty();
    },
    getBounds: function() {
      return null === this.bounds && (this.bounds = this.computeBounds()), this.bounds;
    },
    interfaces_: function() {
      return [_e, u];
    },
    getClass: function() {
      return Ge;
    }
  }), Ge.serialVersionUID = 0x5a1e55ec41369800;
  var ho = {
    reverseOrder: function() {
      return {compare: function(t, e) {
          return e.compareTo(t);
        }};
    },
    min: function(t) {
      return ho.sort(t), t.get(0);
    },
    sort: function(t, e) {
      var n = t.toArray();
      e ? ut.sort(n, e) : ut.sort(n);
      for (var i = t.iterator(),
          r = 0,
          s = n.length; s > r; r++)
        i.next(), i.set(n[r]);
    },
    singletonList: function(t) {
      var e = new I;
      return e.add(t), e;
    }
  };
  e(qe.prototype, {
    expandToQueue: function(t, e) {
      var n = qe.isComposite(this.boundable1),
          r = qe.isComposite(this.boundable2);
      if (n && r)
        return qe.area(this.boundable1) > qe.area(this.boundable2) ? (this.expand(this.boundable1, this.boundable2, t, e), null) : (this.expand(this.boundable2, this.boundable1, t, e), null);
      if (n)
        return this.expand(this.boundable1, this.boundable2, t, e), null;
      if (r)
        return this.expand(this.boundable2, this.boundable1, t, e), null;
      throw new i("neither boundable is composite");
    },
    isLeaves: function() {
      return !(qe.isComposite(this.boundable1) || qe.isComposite(this.boundable2));
    },
    compareTo: function(t) {
      var e = t;
      return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
    },
    expand: function(t, e, n, i) {
      for (var r = t.getChildBoundables(),
          s = r.iterator(); s.hasNext(); ) {
        var o = s.next(),
            a = new qe(o, e, this.itemDistance);
        a.getDistance() < i && n.add(a);
      }
    },
    getBoundable: function(t) {
      return 0 === t ? this.boundable1 : this.boundable2;
    },
    getDistance: function() {
      return this._distance;
    },
    distance: function() {
      return this.isLeaves() ? this.itemDistance.distance(this.boundable1, this.boundable2) : this.boundable1.getBounds().distance(this.boundable2.getBounds());
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return qe;
    }
  }), qe.area = function(t) {
    return t.getBounds().getArea();
  }, qe.isComposite = function(t) {
    return t instanceof Ge;
  }, e(Be.prototype, {
    getNodeCapacity: function() {
      return this.nodeCapacity;
    },
    lastNode: function(t) {
      return t.get(t.size() - 1);
    },
    size: function t() {
      if (0 === arguments.length)
        return this.isEmpty() ? 0 : (this.build(), this.size(this.root));
      if (1 === arguments.length) {
        for (var e = arguments[0],
            t = 0,
            n = e.getChildBoundables().iterator(); n.hasNext(); ) {
          var i = n.next();
          i instanceof Ge ? t += this.size(i) : i instanceof Me && (t += 1);
        }
        return t;
      }
    },
    removeItem: function(t, e) {
      for (var n = null,
          i = t.getChildBoundables().iterator(); i.hasNext(); ) {
        var r = i.next();
        r instanceof Me && r.getItem() === e && (n = r);
      }
      return null !== n ? (t.getChildBoundables().remove(n), !0) : !1;
    },
    itemsTree: function() {
      if (0 === arguments.length) {
        this.build();
        var t = this.itemsTree(this.root);
        return null === t ? new I : t;
      }
      if (1 === arguments.length) {
        for (var e = arguments[0],
            n = new I,
            i = e.getChildBoundables().iterator(); i.hasNext(); ) {
          var r = i.next();
          if (r instanceof Ge) {
            var s = this.itemsTree(r);
            null !== s && n.add(s);
          } else
            r instanceof Me ? n.add(r.getItem()) : f.shouldNeverReachHere();
        }
        return n.size() <= 0 ? null : n;
      }
    },
    insert: function(t, e) {
      f.isTrue(!this.built, "Cannot insert items into an STR packed R-tree after it has been built."), this.itemBoundables.add(new Me(t, e));
    },
    boundablesAtLevel: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new I;
        return this.boundablesAtLevel(t, this.root, e), e;
      }
      if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2];
        if (f.isTrue(n > -2), i.getLevel() === n)
          return r.add(i), null;
        for (var s = i.getChildBoundables().iterator(); s.hasNext(); ) {
          var o = s.next();
          o instanceof Ge ? this.boundablesAtLevel(n, o, r) : (f.isTrue(o instanceof Me), -1 === n && r.add(o));
        }
        return null;
      }
    },
    query: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.build();
        var e = new I;
        return this.isEmpty() ? e : (this.getIntersectsOp().intersects(this.root.getBounds(), t) && this.query(t, this.root, e), e);
      }
      if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        if (this.build(), this.isEmpty())
          return null;
        this.getIntersectsOp().intersects(this.root.getBounds(), n) && this.query(n, this.root, i);
      } else if (3 === arguments.length)
        if (R(arguments[2], Ae) && arguments[0] instanceof Object && arguments[1] instanceof Ge)
          for (var r = arguments[0],
              s = arguments[1],
              o = arguments[2],
              a = s.getChildBoundables(),
              u = 0; u < a.size(); u++) {
            var l = a.get(u);
            this.getIntersectsOp().intersects(l.getBounds(), r) && (l instanceof Ge ? this.query(r, l, o) : l instanceof Me ? o.visitItem(l.getItem()) : f.shouldNeverReachHere());
          }
        else if (R(arguments[2], y) && arguments[0] instanceof Object && arguments[1] instanceof Ge)
          for (var h = arguments[0],
              c = arguments[1],
              g = arguments[2],
              a = c.getChildBoundables(),
              u = 0; u < a.size(); u++) {
            var l = a.get(u);
            this.getIntersectsOp().intersects(l.getBounds(), h) && (l instanceof Ge ? this.query(h, l, g) : l instanceof Me ? g.add(l.getItem()) : f.shouldNeverReachHere());
          }
    },
    build: function() {
      return this.built ? null : (this.root = this.itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this.itemBoundables, -1), this.itemBoundables = null, void(this.built = !0));
    },
    getRoot: function() {
      return this.build(), this.root;
    },
    remove: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this.build(), this.getIntersectsOp().intersects(this.root.getBounds(), t) ? this.remove(t, this.root, e) : !1;
      }
      if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2],
            s = this.removeItem(i, r);
        if (s)
          return !0;
        for (var o = null,
            a = i.getChildBoundables().iterator(); a.hasNext(); ) {
          var u = a.next();
          if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof Ge && (s = this.remove(n, u, r))) {
            o = u;
            break;
          }
        }
        return null !== o && o.getChildBoundables().isEmpty() && i.getChildBoundables().remove(o), s;
      }
    },
    createHigherLevels: function(t, e) {
      f.isTrue(!t.isEmpty());
      var n = this.createParentBoundables(t, e + 1);
      return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1);
    },
    depth: function() {
      if (0 === arguments.length)
        return this.isEmpty() ? 0 : (this.build(), this.depth(this.root));
      if (1 === arguments.length) {
        for (var t = arguments[0],
            e = 0,
            n = t.getChildBoundables().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i instanceof Ge) {
            var r = this.depth(i);
            r > e && (e = r);
          }
        }
        return e + 1;
      }
    },
    createParentBoundables: function(t, e) {
      f.isTrue(!t.isEmpty());
      var n = new I;
      n.add(this.createNode(e));
      var i = new I(t);
      ho.sort(i, this.getComparator());
      for (var r = i.iterator(); r.hasNext(); ) {
        var s = r.next();
        this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(s);
      }
      return n;
    },
    isEmpty: function() {
      return this.built ? this.root.isEmpty() : this.itemBoundables.isEmpty();
    },
    interfaces_: function() {
      return [u];
    },
    getClass: function() {
      return Be;
    }
  }), Be.compareDoubles = function(t, e) {
    return t > e ? 1 : e > t ? -1 : 0;
  }, Be.IntersectsOp = ze, Be.serialVersionUID = -0x35ef64c82d4c5400, Be.DEFAULT_NODE_CAPACITY = 10, e(Ve.prototype, {
    distance: function(t, e) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ve;
    }
  }), h(ke, Be), e(ke.prototype, {
    createParentBoundablesFromVerticalSlices: function(t, e) {
      f.isTrue(t.length > 0);
      for (var n = new I,
          i = 0; i < t.length; i++)
        n.addAll(this.createParentBoundablesFromVerticalSlice(t[i], e));
      return n;
    },
    createNode: function(t) {
      return new Ye(t);
    },
    size: function() {
      return 0 === arguments.length ? Be.prototype.size.call(this) : Be.prototype.size.apply(this, arguments);
    },
    insert: function() {
      if (2 !== arguments.length)
        return Be.prototype.insert.apply(this, arguments);
      var t = arguments[0],
          e = arguments[1];
      return t.isNull() ? null : void Be.prototype.insert.call(this, t, e);
    },
    getIntersectsOp: function() {
      return ke.intersectsOp;
    },
    verticalSlices: function(t, e) {
      for (var n = Math.trunc(Math.ceil(t.size() / e)),
          i = new Array(e).fill(null),
          r = t.iterator(),
          s = 0; e > s; s++) {
        i[s] = new I;
        for (var o = 0; r.hasNext() && n > o; ) {
          var a = r.next();
          i[s].add(a), o++;
        }
      }
      return i;
    },
    query: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return Be.prototype.query.call(this, t);
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        Be.prototype.query.call(this, e, n);
      } else if (3 === arguments.length)
        if (R(arguments[2], Ae) && arguments[0] instanceof Object && arguments[1] instanceof Ge) {
          var i = arguments[0],
              r = arguments[1],
              s = arguments[2];
          Be.prototype.query.call(this, i, r, s);
        } else if (R(arguments[2], y) && arguments[0] instanceof Object && arguments[1] instanceof Ge) {
          var o = arguments[0],
              a = arguments[1],
              u = arguments[2];
          Be.prototype.query.call(this, o, a, u);
        }
    },
    getComparator: function() {
      return ke.yComparator;
    },
    createParentBoundablesFromVerticalSlice: function(t, e) {
      return Be.prototype.createParentBoundables.call(this, t, e);
    },
    remove: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return Be.prototype.remove.call(this, t, e);
      }
      return Be.prototype.remove.apply(this, arguments);
    },
    depth: function() {
      return 0 === arguments.length ? Be.prototype.depth.call(this) : Be.prototype.depth.apply(this, arguments);
    },
    createParentBoundables: function(t, e) {
      f.isTrue(!t.isEmpty());
      var n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
          i = new I(t);
      ho.sort(i, ke.xComparator);
      var r = this.verticalSlices(i, Math.trunc(Math.ceil(Math.sqrt(n))));
      return this.createParentBoundablesFromVerticalSlices(r, e);
    },
    nearestNeighbour: function() {
      if (1 === arguments.length) {
        if (R(arguments[0], Ve)) {
          var t = arguments[0],
              e = new qe(this.getRoot(), this.getRoot(), t);
          return this.nearestNeighbour(e);
        }
        if (arguments[0] instanceof qe) {
          var n = arguments[0];
          return this.nearestNeighbour(n, r.POSITIVE_INFINITY);
        }
      } else if (2 === arguments.length) {
        if (arguments[0] instanceof ke && R(arguments[1], Ve)) {
          var i = arguments[0],
              s = arguments[1],
              e = new qe(this.getRoot(), i.getRoot(), s);
          return this.nearestNeighbour(e);
        }
        if (arguments[0] instanceof qe && "number" == typeof arguments[1]) {
          var o = arguments[0],
              a = arguments[1],
              u = a,
              l = null,
              h = new De;
          for (h.add(o); !h.isEmpty() && u > 0; ) {
            var c = h.poll(),
                f = c.getDistance();
            if (f >= u)
              break;
            c.isLeaves() ? (u = f, l = c) : c.expandToQueue(h, u);
          }
          return [l.getBoundable(0).getItem(), l.getBoundable(1).getItem()];
        }
      } else if (3 === arguments.length) {
        var g = arguments[0],
            d = arguments[1],
            p = arguments[2],
            v = new Me(g, d),
            e = new qe(this.getRoot(), v, p);
        return this.nearestNeighbour(e)[0];
      }
    },
    interfaces_: function() {
      return [Fe, u];
    },
    getClass: function() {
      return ke;
    }
  }), ke.centreX = function(t) {
    return ke.avg(t.getMinX(), t.getMaxX());
  }, ke.avg = function(t, e) {
    return (t + e) / 2;
  }, ke.centreY = function(t) {
    return ke.avg(t.getMinY(), t.getMaxY());
  }, h(Ye, Ge), e(Ye.prototype, {
    computeBounds: function() {
      for (var t = null,
          e = this.getChildBoundables().iterator(); e.hasNext(); ) {
        var n = e.next();
        null === t ? t = new C(n.getBounds()) : t.expandToInclude(n.getBounds());
      }
      return t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ye;
    }
  }), ke.STRtreeNode = Ye, ke.serialVersionUID = 0x39920f7d5f261e0, ke.xComparator = {
    interfaces_: function() {
      return [a];
    },
    compare: function(t, e) {
      return Be.compareDoubles(ke.centreX(t.getBounds()), ke.centreX(e.getBounds()));
    }
  }, ke.yComparator = {
    interfaces_: function() {
      return [a];
    },
    compare: function(t, e) {
      return Be.compareDoubles(ke.centreY(t.getBounds()), ke.centreY(e.getBounds()));
    }
  }, ke.intersectsOp = {
    interfaces_: function() {
      return [IntersectsOp];
    },
    intersects: function(t, e) {
      return t.intersects(e);
    }
  }, ke.DEFAULT_NODE_CAPACITY = 10, e(Ue.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ue;
    }
  }), Ue.relativeSign = function(t, e) {
    return e > t ? -1 : t > e ? 1 : 0;
  }, Ue.compare = function(t, e, n) {
    if (e.equals2D(n))
      return 0;
    var i = Ue.relativeSign(e.x, n.x),
        r = Ue.relativeSign(e.y, n.y);
    switch (t) {
      case 0:
        return Ue.compareValue(i, r);
      case 1:
        return Ue.compareValue(r, i);
      case 2:
        return Ue.compareValue(r, -i);
      case 3:
        return Ue.compareValue(-i, r);
      case 4:
        return Ue.compareValue(-i, -r);
      case 5:
        return Ue.compareValue(-r, -i);
      case 6:
        return Ue.compareValue(-r, i);
      case 7:
        return Ue.compareValue(i, -r);
    }
    return f.shouldNeverReachHere("invalid octant value"), 0;
  }, Ue.compareValue = function(t, e) {
    return 0 > t ? -1 : t > 0 ? 1 : 0 > e ? -1 : e > 0 ? 1 : 0;
  }, e(Xe.prototype, {
    getCoordinate: function() {
      return this.coord;
    },
    print: function(t) {
      t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
    },
    compareTo: function(t) {
      var e = t;
      return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : Ue.compare(this.segmentOctant, this.coord, e.coord);
    },
    isEndPoint: function(t) {
      return 0 !== this.segmentIndex || this._isInterior ? this.segmentIndex === t : !0;
    },
    isInterior: function() {
      return this._isInterior;
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return Xe;
    }
  }), e(He.prototype, {
    getSplitCoordinates: function() {
      var t = new N;
      this.addEndpoints();
      for (var e = this.iterator(),
          n = e.next(); e.hasNext(); ) {
        var i = e.next();
        this.addEdgeCoordinates(n, i, t), n = i;
      }
      return t.toCoordinateArray();
    },
    addCollapsedNodes: function() {
      var t = new I;
      this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next().intValue();
        this.add(this.edge.getCoordinate(n), n);
      }
    },
    print: function(t) {
      t.println("Intersections:");
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.print(t);
      }
    },
    findCollapsesFromExistingVertices: function(t) {
      for (var e = 0; e < this.edge.size() - 2; e++) {
        var n = this.edge.getCoordinate(e),
            i = (this.edge.getCoordinate(e + 1), this.edge.getCoordinate(e + 2));
        n.equals2D(i) && t.add(new b(e + 1));
      }
    },
    addEdgeCoordinates: function(t, e, n) {
      var i = e.segmentIndex - t.segmentIndex + 2,
          r = this.edge.getCoordinate(e.segmentIndex),
          s = e.isInterior() || !e.coord.equals2D(r);
      s || i--;
      n.add(new g(t.coord), !1);
      for (var o = t.segmentIndex + 1; o <= e.segmentIndex; o++)
        n.add(this.edge.getCoordinate(o));
      s && n.add(new g(e.coord));
    },
    iterator: function() {
      return this.nodeMap.values().iterator();
    },
    addSplitEdges: function(t) {
      this.addEndpoints(), this.addCollapsedNodes();
      for (var e = this.iterator(),
          n = e.next(); e.hasNext(); ) {
        var i = e.next(),
            r = this.createSplitEdge(n, i);
        t.add(r), n = i;
      }
    },
    findCollapseIndex: function(t, e, n) {
      if (!t.coord.equals2D(e.coord))
        return !1;
      var i = e.segmentIndex - t.segmentIndex;
      return e.isInterior() || i--, 1 === i ? (n[0] = t.segmentIndex + 1, !0) : !1;
    },
    findCollapsesFromInsertedNodes: function(t) {
      for (var e = new Array(1).fill(null),
          n = this.iterator(),
          i = n.next(); n.hasNext(); ) {
        var r = n.next(),
            s = this.findCollapseIndex(i, r, e);
        s && t.add(new b(e[0])), i = r;
      }
    },
    getEdge: function() {
      return this.edge;
    },
    addEndpoints: function() {
      var t = this.edge.size() - 1;
      this.add(this.edge.getCoordinate(0), 0), this.add(this.edge.getCoordinate(t), t);
    },
    createSplitEdge: function(t, e) {
      var n = e.segmentIndex - t.segmentIndex + 2,
          i = this.edge.getCoordinate(e.segmentIndex),
          r = e.isInterior() || !e.coord.equals2D(i);
      r || n--;
      var s = new Array(n).fill(null),
          o = 0;
      s[o++] = new g(t.coord);
      for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
        s[o++] = this.edge.getCoordinate(a);
      return r && (s[o] = new g(e.coord)), new Ke(s, this.edge.getData());
    },
    add: function(t, e) {
      var n = new Xe(this.edge, t, e, this.edge.getSegmentOctant(e)),
          i = this.nodeMap.get(n);
      return null !== i ? (f.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this.nodeMap.put(n, n), n);
    },
    checkSplitEdgesCorrectness: function(t) {
      var e = this.edge.getCoordinates(),
          n = t.get(0),
          i = n.getCoordinate(0);
      if (!i.equals2D(e[0]))
        throw new l("bad split edge start point at " + i);
      var r = t.get(t.size() - 1),
          s = r.getCoordinates(),
          o = s[s.length - 1];
      if (!o.equals2D(e[e.length - 1]))
        throw new l("bad split edge end point at " + o);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return He;
    }
  }), e(We.prototype, {
    next: function() {
      return null === this.currNode ? (this.currNode = this.nextNode, this.currSegIndex = this.currNode.segmentIndex, this.readNextNode(), this.currNode) : null === this.nextNode ? null : this.nextNode.segmentIndex === this.currNode.segmentIndex ? (this.currNode = this.nextNode, this.currSegIndex = this.currNode.segmentIndex, this.readNextNode(), this.currNode) : (this.nextNode.segmentIndex > this.currNode.segmentIndex, null);
    },
    remove: function() {
      throw new UnsupportedOperationException(this.getClass().getName());
    },
    hasNext: function() {
      return null !== this.nextNode;
    },
    readNextNode: function() {
      this.nodeIt.hasNext() ? this.nextNode = this.nodeIt.next() : this.nextNode = null;
    },
    interfaces_: function() {
      return [p];
    },
    getClass: function() {
      return We;
    }
  }), e(je.prototype, {
    addIntersection: function(t, e) {},
    interfaces_: function() {
      return [be];
    },
    getClass: function() {
      return je;
    }
  }), e(Ke.prototype, {
    getCoordinates: function() {
      return this.pts;
    },
    size: function() {
      return this.pts.length;
    },
    getCoordinate: function(t) {
      return this.pts[t];
    },
    isClosed: function() {
      return this.pts[0].equals(this.pts[this.pts.length - 1]);
    },
    getSegmentOctant: function(t) {
      return t === this.pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
    },
    setData: function(t) {
      this.data = t;
    },
    safeOctant: function(t, e) {
      return t.equals2D(e) ? 0 : Pe.octant(t, e);
    },
    getData: function() {
      return this.data;
    },
    addIntersection: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        this.addIntersectionNode(t, e);
      } else if (4 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = (arguments[2], arguments[3]),
            s = new g(n.getIntersection(r));
        this.addIntersection(s, i);
      }
    },
    toString: function() {
      return se.toLineString(new Gt(this.pts));
    },
    getNodeList: function() {
      return this.nodeList;
    },
    addIntersectionNode: function(t, e) {
      var n = e,
          i = n + 1;
      if (i < this.pts.length) {
        var r = this.pts[i];
        t.equals2D(r) && (n = i);
      }
      var s = this.nodeList.add(t, n);
      return s;
    },
    addIntersections: function(t, e, n) {
      for (var i = 0; i < t.getIntersectionNum(); i++)
        this.addIntersection(t, e, n, i);
    },
    interfaces_: function() {
      return [je];
    },
    getClass: function() {
      return Ke;
    }
  }), Ke.getNodedSubstrings = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new I;
      return Ke.getNodedSubstrings(t, e), e;
    }
    if (2 === arguments.length)
      for (var n = arguments[0],
          i = arguments[1],
          r = n.iterator(); r.hasNext(); ) {
        var s = r.next();
        s.getNodeList().addSplitEdges(i);
      }
  }, e(Ze.prototype, {
    overlap: function() {
      if (2 === arguments.length) {
        arguments[0], arguments[1];
      } else if (4 === arguments.length) {
        var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            i = arguments[3];
        t.getLineSegment(e, this.overlapSeg1), n.getLineSegment(i, this.overlapSeg2), this.overlap(this.overlapSeg1, this.overlapSeg2);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ze;
    }
  }), e(Qe.prototype, {
    getLineSegment: function(t, e) {
      e.p0 = this.pts[t], e.p1 = this.pts[t + 1];
    },
    computeSelect: function(t, e, n, i) {
      var r = this.pts[e],
          s = this.pts[n];
      if (i.tempEnv1.init(r, s), n - e === 1)
        return i.select(this, e), null;
      if (!t.intersects(i.tempEnv1))
        return null;
      var o = Math.trunc((e + n) / 2);
      o > e && this.computeSelect(t, e, o, i), n > o && this.computeSelect(t, o, n, i);
    },
    getCoordinates: function() {
      for (var t = new Array(this.end - this.start + 1).fill(null),
          e = 0,
          n = this.start; n <= this.end; n++)
        t[e++] = this.pts[n];
      return t;
    },
    computeOverlaps: function(t, e) {
      this.computeOverlapsInternal(this.start, this.end, t, t.start, t.end, e);
    },
    setId: function(t) {
      this.id = t;
    },
    select: function(t, e) {
      this.computeSelect(t, this.start, this.end, e);
    },
    getEnvelope: function() {
      if (null === this.env) {
        var t = this.pts[this.start],
            e = this.pts[this.end];
        this.env = new C(t, e);
      }
      return this.env;
    },
    getEndIndex: function() {
      return this.end;
    },
    getStartIndex: function() {
      return this.start;
    },
    getContext: function() {
      return this.context;
    },
    getId: function() {
      return this.id;
    },
    computeOverlapsInternal: function(t, e, n, i, r, s) {
      var o = this.pts[t],
          a = this.pts[e],
          u = n.pts[i],
          l = n.pts[r];
      if (e - t === 1 && r - i === 1)
        return s.overlap(this, t, n, i), null;
      if (s.tempEnv1.init(o, a), s.tempEnv2.init(u, l), !s.tempEnv1.intersects(s.tempEnv2))
        return null;
      var h = Math.trunc((t + e) / 2),
          c = Math.trunc((i + r) / 2);
      h > t && (c > i && this.computeOverlapsInternal(t, h, n, i, c, s), r > c && this.computeOverlapsInternal(t, h, n, c, r, s)), e > h && (c > i && this.computeOverlapsInternal(h, e, n, i, c, s), r > c && this.computeOverlapsInternal(h, e, n, c, r, s));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Qe;
    }
  }), e(Je.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Je;
    }
  }), Je.isNorthern = function(t) {
    return t === Je.NE || t === Je.NW;
  }, Je.isOpposite = function(t, e) {
    if (t === e)
      return !1;
    var n = (t - e + 4) % 4;
    return 2 === n;
  }, Je.commonHalfPlane = function(t, e) {
    if (t === e)
      return t;
    var n = (t - e + 4) % 4;
    if (2 === n)
      return -1;
    var i = e > t ? t : e,
        r = t > e ? t : e;
    return 0 === i && 3 === r ? 3 : i;
  }, Je.isInHalfPlane = function(t, e) {
    return e === Je.SE ? t === Je.SE || t === Je.SW : t === e || t === e + 1;
  }, Je.quadrant = function() {
    if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var t = arguments[0],
          e = arguments[1];
      if (0 === t && 0 === e)
        throw new i("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
      return t >= 0 ? e >= 0 ? Je.NE : Je.SE : e >= 0 ? Je.NW : Je.SW;
    }
    if (arguments[0] instanceof g && arguments[1] instanceof g) {
      var n = arguments[0],
          r = arguments[1];
      if (r.x === n.x && r.y === n.y)
        throw new i("Cannot compute the quadrant for two identical points " + n);
      return r.x >= n.x ? r.y >= n.y ? Je.NE : Je.SE : r.y >= n.y ? Je.NW : Je.SW;
    }
  }, Je.NE = 0, Je.NW = 1, Je.SW = 2, Je.SE = 3, e($e.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return $e;
    }
  }), $e.getChainStartIndices = function(t) {
    var e = 0,
        n = new I;
    n.add(new b(e));
    do {
      var i = $e.findChainEnd(t, e);
      n.add(new b(i)), e = i;
    } while (e < t.length - 1);
    var r = $e.toIntArray(n);
    return r;
  }, $e.findChainEnd = function(t, e) {
    for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); )
      n++;
    if (n >= t.length - 1)
      return t.length - 1;
    for (var i = Je.quadrant(t[n], t[n + 1]),
        r = e + 1; r < t.length; ) {
      if (!t[r - 1].equals2D(t[r])) {
        var s = Je.quadrant(t[r - 1], t[r]);
        if (s !== i)
          break;
      }
      r++;
    }
    return r - 1;
  }, $e.getChains = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return $e.getChains(t, null);
    }
    if (2 === arguments.length) {
      for (var e = arguments[0],
          n = arguments[1],
          i = new I,
          r = $e.getChainStartIndices(e),
          s = 0; s < r.length - 1; s++) {
        var o = new Qe(e, r[s], r[s + 1], n);
        i.add(o);
      }
      return i;
    }
  }, $e.toIntArray = function(t) {
    for (var e = new Array(t.size()).fill(null),
        n = 0; n < e.length; n++)
      e[n] = t.get(n).intValue();
    return e;
  }, e(tn.prototype, {
    computeNodes: function(t) {},
    getNodedSubstrings: function() {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return tn;
    }
  }), e(en.prototype, {
    setSegmentIntersector: function(t) {
      this.segInt = t;
    },
    interfaces_: function() {
      return [tn];
    },
    getClass: function() {
      return en;
    }
  }), h(nn, en), e(nn.prototype, {
    getMonotoneChains: function() {
      return this.monoChains;
    },
    getNodedSubstrings: function() {
      return Ke.getNodedSubstrings(this.nodedSegStrings);
    },
    getIndex: function() {
      return this.index;
    },
    add: function(t) {
      for (var e = $e.getChains(t.getCoordinates(), t),
          n = e.iterator(); n.hasNext(); ) {
        var i = n.next();
        i.setId(this.idCounter++), this.index.insert(i.getEnvelope(), i), this.monoChains.add(i);
      }
    },
    computeNodes: function(t) {
      this.nodedSegStrings = t;
      for (var e = t.iterator(); e.hasNext(); )
        this.add(e.next());
      this.intersectChains();
    },
    intersectChains: function() {
      for (var t = new rn(this.segInt),
          e = this.monoChains.iterator(); e.hasNext(); )
        for (var n = e.next(),
            i = this.index.query(n.getEnvelope()),
            r = i.iterator(); r.hasNext(); ) {
          var s = r.next();
          if (s.getId() > n.getId() && (n.computeOverlaps(s, t), this.nOverlaps++), this.segInt.isDone())
            return null;
        }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return nn;
    }
  }), h(rn, Ze), e(rn.prototype, {
    overlap: function() {
      if (4 !== arguments.length)
        return Ze.prototype.overlap.apply(this, arguments);
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          i = arguments[3],
          r = t.getContext(),
          s = n.getContext();
      this.si.processIntersections(r, e, s, i);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return rn;
    }
  }), nn.SegmentOverlapAction = rn, h(sn, l), e(sn.prototype, {
    getCoordinate: function() {
      return this.pt;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return sn;
    }
  }), sn.msgWithCoord = function(t, e) {
    return null !== e ? t + " [ " + e + " ]" : t;
  }, e(on.prototype, {
    processIntersections: function(t, e, n, i) {},
    isDone: function() {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return on;
    }
  }), e(an.prototype, {
    getInteriorIntersection: function() {
      return this.interiorIntersection;
    },
    setCheckEndSegmentsOnly: function(t) {
      this.isCheckEndSegmentsOnly = t;
    },
    getIntersectionSegments: function() {
      return this.intSegments;
    },
    count: function() {
      return this.intersectionCount;
    },
    getIntersections: function() {
      return this.intersections;
    },
    setFindAllIntersections: function(t) {
      this.findAllIntersections = t;
    },
    setKeepIntersections: function(t) {
      this.keepIntersections = t;
    },
    processIntersections: function(t, e, n, i) {
      if (!this.findAllIntersections && this.hasIntersection())
        return null;
      if (t === n && e === i)
        return null;
      if (this.isCheckEndSegmentsOnly) {
        var r = this.isEndSegment(t, e) || this.isEndSegment(n, i);
        if (!r)
          return null;
      }
      var s = t.getCoordinates()[e],
          o = t.getCoordinates()[e + 1],
          a = n.getCoordinates()[i],
          u = n.getCoordinates()[i + 1];
      this.li.computeIntersection(s, o, a, u), this.li.hasIntersection() && this.li.isInteriorIntersection() && (this.intSegments = new Array(4).fill(null), this.intSegments[0] = s, this.intSegments[1] = o, this.intSegments[2] = a, this.intSegments[3] = u, this.interiorIntersection = this.li.getIntersection(0), this.keepIntersections && this.intersections.add(this.interiorIntersection), this.intersectionCount++);
    },
    isEndSegment: function(t, e) {
      return 0 === e ? !0 : e >= t.size() - 2;
    },
    hasIntersection: function() {
      return null !== this.interiorIntersection;
    },
    isDone: function() {
      return this.findAllIntersections ? !1 : null !== this.interiorIntersection;
    },
    interfaces_: function() {
      return [on];
    },
    getClass: function() {
      return an;
    }
  }), an.createAllIntersectionsFinder = function(t) {
    var e = new an(t);
    return e.setFindAllIntersections(!0), e;
  }, an.createAnyIntersectionFinder = function(t) {
    return new an(t);
  }, an.createIntersectionCounter = function(t) {
    var e = new an(t);
    return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
  }, e(un.prototype, {
    execute: function() {
      return null !== this.segInt ? null : void this.checkInteriorIntersections();
    },
    getIntersections: function() {
      return this.segInt.getIntersections();
    },
    isValid: function() {
      return this.execute(), this._isValid;
    },
    setFindAllIntersections: function(t) {
      this.findAllIntersections = t;
    },
    checkInteriorIntersections: function() {
      this._isValid = !0, this.segInt = new an(this.li), this.segInt.setFindAllIntersections(this.findAllIntersections);
      var t = new nn;
      return t.setSegmentIntersector(this.segInt), t.computeNodes(this.segStrings), this.segInt.hasIntersection() ? (this._isValid = !1, null) : void 0;
    },
    checkValid: function() {
      if (this.execute(), !this._isValid)
        throw new sn(this.getErrorMessage(), this.segInt.getInteriorIntersection());
    },
    getErrorMessage: function() {
      if (this._isValid)
        return "no intersections found";
      var t = this.segInt.getIntersectionSegments();
      return "found non-noded intersection between " + se.toLineString(t[0], t[1]) + " and " + se.toLineString(t[2], t[3]);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return un;
    }
  }), un.computeIntersections = function(t) {
    var e = new un(t);
    return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
  }, e(ln.prototype, {
    checkValid: function() {
      this.nv.checkValid();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ln;
    }
  }), ln.toSegmentStrings = function(t) {
    for (var e = new I,
        n = t.iterator(); n.hasNext(); ) {
      var i = n.next();
      e.add(new Oe(i.getCoordinates(), i));
    }
    return e;
  }, ln.checkValid = function(t) {
    var e = new ln(t);
    e.checkValid();
  }, e(hn.prototype, {
    map: function(t) {
      for (var e = new I,
          n = 0; n < t.getNumGeometries(); n++) {
        var i = this.mapOp.map(t.getGeometryN(n));
        i.isEmpty() || e.add(i);
      }
      return t.getFactory().createGeometryCollection(ie.toGeometryArray(e));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return hn;
    }
  }), hn.map = function(t, e) {
    var n = new hn(e);
    return n.map(t);
  }, e(cn.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return cn;
    }
  }), cn.opposite = function(t) {
    return t === cn.LEFT ? cn.RIGHT : t === cn.RIGHT ? cn.LEFT : t;
  }, cn.ON = 0, cn.LEFT = 1, cn.RIGHT = 2, e(fn.prototype, {
    setAllLocations: function(t) {
      for (var e = 0; e < this.location.length; e++)
        this.location[e] = t;
    },
    isNull: function() {
      for (var t = 0; t < this.location.length; t++)
        if (this.location[t] !== L.NONE)
          return !1;
      return !0;
    },
    setAllLocationsIfNull: function(t) {
      for (var e = 0; e < this.location.length; e++)
        this.location[e] === L.NONE && (this.location[e] = t);
    },
    isLine: function() {
      return 1 === this.location.length;
    },
    merge: function(t) {
      if (t.location.length > this.location.length) {
        var e = new Array(3).fill(null);
        e[cn.ON] = this.location[cn.ON], e[cn.LEFT] = L.NONE, e[cn.RIGHT] = L.NONE, this.location = e;
      }
      for (var n = 0; n < this.location.length; n++)
        this.location[n] === L.NONE && n < t.location.length && (this.location[n] = t.location[n]);
    },
    getLocations: function() {
      return this.location;
    },
    flip: function() {
      if (this.location.length <= 1)
        return null;
      var t = this.location[cn.LEFT];
      this.location[cn.LEFT] = this.location[cn.RIGHT], this.location[cn.RIGHT] = t;
    },
    toString: function() {
      var t = new P;
      return this.location.length > 1 && t.append(L.toLocationSymbol(this.location[cn.LEFT])), t.append(L.toLocationSymbol(this.location[cn.ON])), this.location.length > 1 && t.append(L.toLocationSymbol(this.location[cn.RIGHT])), t.toString();
    },
    setLocations: function(t, e, n) {
      this.location[cn.ON] = t, this.location[cn.LEFT] = e, this.location[cn.RIGHT] = n;
    },
    get: function(t) {
      return t < this.location.length ? this.location[t] : L.NONE;
    },
    isArea: function() {
      return this.location.length > 1;
    },
    isAnyNull: function() {
      for (var t = 0; t < this.location.length; t++)
        if (this.location[t] === L.NONE)
          return !0;
      return !1;
    },
    setLocation: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setLocation(cn.ON, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        this.location[e] = n;
      }
    },
    init: function(t) {
      this.location = new Array(t).fill(null), this.setAllLocations(L.NONE);
    },
    isEqualOnSide: function(t, e) {
      return this.location[e] === t.location[e];
    },
    allPositionsEqual: function(t) {
      for (var e = 0; e < this.location.length; e++)
        if (this.location[e] !== t)
          return !1;
      return !0;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return fn;
    }
  }), e(gn.prototype, {
    getGeometryCount: function() {
      var t = 0;
      return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
    },
    setAllLocations: function(t, e) {
      this.elt[t].setAllLocations(e);
    },
    isNull: function(t) {
      return this.elt[t].isNull();
    },
    setAllLocationsIfNull: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        this.elt[e].setAllLocationsIfNull(n);
      }
    },
    isLine: function(t) {
      return this.elt[t].isLine();
    },
    merge: function(t) {
      for (var e = 0; 2 > e; e++)
        null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new fn(t.elt[e]) : this.elt[e].merge(t.elt[e]);
    },
    flip: function() {
      this.elt[0].flip(), this.elt[1].flip();
    },
    getLocation: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.elt[t].get(cn.ON);
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        return this.elt[e].get(n);
      }
    },
    toString: function() {
      var t = new P;
      return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
    },
    isArea: function() {
      if (0 === arguments.length)
        return this.elt[0].isArea() || this.elt[1].isArea();
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.elt[t].isArea();
      }
    },
    isAnyNull: function(t) {
      return this.elt[t].isAnyNull();
    },
    setLocation: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        this.elt[t].setLocation(cn.ON, e);
      } else if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2];
        this.elt[n].setLocation(i, r);
      }
    },
    isEqualOnSide: function(t, e) {
      return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
    },
    allPositionsEqual: function(t, e) {
      return this.elt[t].allPositionsEqual(e);
    },
    toLine: function(t) {
      this.elt[t].isArea() && (this.elt[t] = new fn(this.elt[t].location[0]));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return gn;
    }
  }), gn.toLineLabel = function(t) {
    for (var e = new gn(L.NONE),
        n = 0; 2 > n; n++)
      e.setLocation(n, t.getLocation(n));
    return e;
  }, e(dn.prototype, {
    computeRing: function() {
      if (null !== this.ring)
        return null;
      for (var t = new Array(this.pts.size()).fill(null),
          e = 0; e < this.pts.size(); e++)
        t[e] = this.pts.get(e);
      this.ring = this.geometryFactory.createLinearRing(t), this._isHole = he.isCCW(this.ring.getCoordinates());
    },
    isIsolated: function() {
      return 1 === this.label.getGeometryCount();
    },
    computePoints: function(t) {
      this.startDe = t;
      var e = t,
          n = !0;
      do {
        if (null === e)
          throw new sn("Found null DirectedEdge");
        if (e.getEdgeRing() === this)
          throw new sn("Directed Edge visited twice during ring-building at " + e.getCoordinate());
        this.edges.add(e);
        var i = e.getLabel();
        f.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e);
      } while (e !== this.startDe);
    },
    getLinearRing: function() {
      return this.ring;
    },
    getCoordinate: function(t) {
      return this.pts.get(t);
    },
    computeMaxNodeDegree: function() {
      this.maxNodeDegree = 0;
      var t = this.startDe;
      do {
        var e = t.getNode(),
            n = e.getEdges().getOutgoingDegree(this);
        n > this.maxNodeDegree && (this.maxNodeDegree = n), t = this.getNext(t);
      } while (t !== this.startDe);
      this.maxNodeDegree *= 2;
    },
    addPoints: function(t, e, n) {
      var i = t.getCoordinates();
      if (e) {
        var r = 1;
        n && (r = 0);
        for (var s = r; s < i.length; s++)
          this.pts.add(i[s]);
      } else {
        var r = i.length - 2;
        n && (r = i.length - 1);
        for (var s = r; s >= 0; s--)
          this.pts.add(i[s]);
      }
    },
    isHole: function() {
      return this._isHole;
    },
    setInResult: function() {
      var t = this.startDe;
      do
        t.getEdge().setInResult(!0), t = t.getNext();
 while (t !== this.startDe);
    },
    containsPoint: function(t) {
      var e = this.getLinearRing(),
          n = e.getEnvelopeInternal();
      if (!n.contains(t))
        return !1;
      if (!he.isPointInRing(t, e.getCoordinates()))
        return !1;
      for (var i = this.holes.iterator(); i.hasNext(); ) {
        var r = i.next();
        if (r.containsPoint(t))
          return !1;
      }
      return !0;
    },
    addHole: function(t) {
      this.holes.add(t);
    },
    isShell: function() {
      return null === this.shell;
    },
    getLabel: function() {
      return this.label;
    },
    getEdges: function() {
      return this.edges;
    },
    getMaxNodeDegree: function() {
      return this.maxNodeDegree < 0 && this.computeMaxNodeDegree(), this.maxNodeDegree;
    },
    getShell: function() {
      return this.shell;
    },
    mergeLabel: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.mergeLabel(t, 0), this.mergeLabel(t, 1);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = e.getLocation(n, cn.RIGHT);
        if (i === L.NONE)
          return null;
        if (this.label.getLocation(n) === L.NONE)
          return this.label.setLocation(n, i), null;
      }
    },
    setShell: function(t) {
      this.shell = t, null !== t && t.addHole(this);
    },
    toPolygon: function(t) {
      for (var e = new Array(this.holes.size()).fill(null),
          n = 0; n < this.holes.size(); n++)
        e[n] = this.holes.get(n).getLinearRing();
      var i = t.createPolygon(this.getLinearRing(), e);
      return i;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return dn;
    }
  }), h(pn, dn), e(pn.prototype, {
    setEdgeRing: function(t, e) {
      t.setMinEdgeRing(e);
    },
    getNext: function(t) {
      return t.getNextMin();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return pn;
    }
  }), h(vn, dn), e(vn.prototype, {
    buildMinimalRings: function() {
      var t = new I,
          e = this.startDe;
      do {
        if (null === e.getMinEdgeRing()) {
          var n = new pn(e, this.geometryFactory);
          t.add(n);
        }
        e = e.getNext();
      } while (e !== this.startDe);
      return t;
    },
    setEdgeRing: function(t, e) {
      t.setEdgeRing(e);
    },
    linkDirectedEdgesForMinimalEdgeRings: function() {
      var t = this.startDe;
      do {
        var e = t.getNode();
        e.getEdges().linkMinimalDirectedEdges(this), t = t.getNext();
      } while (t !== this.startDe);
    },
    getNext: function(t) {
      return t.getNext();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return vn;
    }
  }), e(mn.prototype, {
    setVisited: function(t) {
      this._isVisited = t;
    },
    setInResult: function(t) {
      this._isInResult = t;
    },
    isCovered: function() {
      return this._isCovered;
    },
    isCoveredSet: function() {
      return this._isCoveredSet;
    },
    setLabel: function(t) {
      this.label = t;
    },
    getLabel: function() {
      return this.label;
    },
    setCovered: function(t) {
      this._isCovered = t, this._isCoveredSet = !0;
    },
    updateIM: function(t) {
      f.isTrue(this.label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
    },
    isInResult: function() {
      return this._isInResult;
    },
    isVisited: function() {
      return this._isVisited;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return mn;
    }
  }), h(yn, mn), e(yn.prototype, {
    isIncidentEdgeInResult: function() {
      for (var t = this.getEdges().getEdges().iterator(); t.hasNext(); ) {
        var e = t.next();
        if (e.getEdge().isInResult())
          return !0;
      }
      return !1;
    },
    isIsolated: function() {
      return 1 === this.label.getGeometryCount();
    },
    getCoordinate: function() {
      return this.coord;
    },
    print: function(t) {
      t.println("node " + this.coord + " lbl: " + this.label);
    },
    computeIM: function(t) {},
    computeMergedLocation: function(t, e) {
      var n = L.NONE;
      if (n = this.label.getLocation(e), !t.isNull(e)) {
        var i = t.getLocation(e);
        n !== L.BOUNDARY && (n = i);
      }
      return n;
    },
    setLabel: function() {
      if (2 !== arguments.length)
        return mn.prototype.setLabel.apply(this, arguments);
      var t = arguments[0],
          e = arguments[1];
      null === this.label ? this.label = new gn(t, e) : this.label.setLocation(t, e);
    },
    getEdges: function() {
      return this.edges;
    },
    mergeLabel: function() {
      if (arguments[0] instanceof yn) {
        var t = arguments[0];
        this.mergeLabel(t.label);
      } else if (arguments[0] instanceof gn)
        for (var e = arguments[0],
            n = 0; 2 > n; n++) {
          var i = this.computeMergedLocation(e, n),
              r = this.label.getLocation(n);
          r === L.NONE && this.label.setLocation(n, i);
        }
    },
    add: function(t) {
      this.edges.insert(t), t.setNode(this);
    },
    setLabelBoundary: function(t) {
      if (null === this.label)
        return null;
      var e = L.NONE;
      null !== this.label && (e = this.label.getLocation(t));
      var n = null;
      switch (e) {
        case L.BOUNDARY:
          n = L.INTERIOR;
          break;
        case L.INTERIOR:
          n = L.BOUNDARY;
          break;
        default:
          n = L.BOUNDARY;
      }
      this.label.setLocation(t, n);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return yn;
    }
  }), e(xn.prototype, {
    find: function(t) {
      return this.nodeMap.get(t);
    },
    addNode: function() {
      if (arguments[0] instanceof g) {
        var t = arguments[0],
            e = this.nodeMap.get(t);
        return null === e && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
      }
      if (arguments[0] instanceof yn) {
        var n = arguments[0],
            e = this.nodeMap.get(n.getCoordinate());
        return null === e ? (this.nodeMap.put(n.getCoordinate(), n), n) : (e.mergeLabel(n), e);
      }
    },
    print: function(t) {
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.print(t);
      }
    },
    iterator: function() {
      return this.nodeMap.values().iterator();
    },
    values: function() {
      return this.nodeMap.values();
    },
    getBoundaryNodes: function(t) {
      for (var e = new I,
          n = this.iterator(); n.hasNext(); ) {
        var i = n.next();
        i.getLabel().getLocation(t) === L.BOUNDARY && e.add(i);
      }
      return e;
    },
    add: function(t) {
      var e = t.getCoordinate(),
          n = this.addNode(e);
      n.add(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return xn;
    }
  }), e(En.prototype, {
    compareDirection: function(t) {
      return this.dx === t.dx && this.dy === t.dy ? 0 : this.quadrant > t.quadrant ? 1 : this.quadrant < t.quadrant ? -1 : he.computeOrientation(t.p0, t.p1, this.p1);
    },
    getDy: function() {
      return this.dy;
    },
    getCoordinate: function() {
      return this.p0;
    },
    setNode: function(t) {
      this.node = t;
    },
    print: function(t) {
      var e = Math.atan2(this.dy, this.dx),
          n = this.getClass().getName(),
          i = n.lastIndexOf("."),
          r = n.substring(i + 1);
      t.print("  " + r + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + e + "   " + this.label);
    },
    compareTo: function(t) {
      var e = t;
      return this.compareDirection(e);
    },
    getDirectedCoordinate: function() {
      return this.p1;
    },
    getDx: function() {
      return this.dx;
    },
    getLabel: function() {
      return this.label;
    },
    getEdge: function() {
      return this.edge;
    },
    getQuadrant: function() {
      return this.quadrant;
    },
    getNode: function() {
      return this.node;
    },
    toString: function() {
      var t = Math.atan2(this.dy, this.dx),
          e = this.getClass().getName(),
          n = e.lastIndexOf("."),
          i = e.substring(n + 1);
      return "  " + i + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + t + "   " + this.label;
    },
    computeLabel: function(t) {},
    init: function(t, e) {
      this.p0 = t, this.p1 = e, this.dx = e.x - t.x, this.dy = e.y - t.y, this.quadrant = Je.quadrant(this.dx, this.dy), f.isTrue(!(0 === this.dx && 0 === this.dy), "EdgeEnd with identical endpoints found");
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return En;
    }
  }), h(In, En), e(In.prototype, {
    getNextMin: function() {
      return this.nextMin;
    },
    getDepth: function(t) {
      return this.depth[t];
    },
    setVisited: function(t) {
      this._isVisited = t;
    },
    computeDirectedLabel: function() {
      this.label = new gn(this.edge.getLabel()), this._isForward || this.label.flip();
    },
    getNext: function() {
      return this.next;
    },
    setDepth: function(t, e) {
      if (-999 !== this.depth[t] && this.depth[t] !== e)
        throw new sn("assigned depths do not match", this.getCoordinate());
      this.depth[t] = e;
    },
    isInteriorAreaEdge: function t() {
      for (var t = !0,
          e = 0; 2 > e; e++)
        this.label.isArea(e) && this.label.getLocation(e, cn.LEFT) === L.INTERIOR && this.label.getLocation(e, cn.RIGHT) === L.INTERIOR || (t = !1);
      return t;
    },
    setNextMin: function(t) {
      this.nextMin = t;
    },
    print: function(t) {
      En.prototype.print.call(this, t), t.print(" " + this.depth[cn.LEFT] + "/" + this.depth[cn.RIGHT]), t.print(" (" + this.getDepthDelta() + ")"), this._isInResult && t.print(" inResult");
    },
    setMinEdgeRing: function(t) {
      this.minEdgeRing = t;
    },
    isLineEdge: function() {
      var t = this.label.isLine(0) || this.label.isLine(1),
          e = !this.label.isArea(0) || this.label.allPositionsEqual(0, L.EXTERIOR),
          n = !this.label.isArea(1) || this.label.allPositionsEqual(1, L.EXTERIOR);
      return t && e && n;
    },
    setEdgeRing: function(t) {
      this.edgeRing = t;
    },
    getMinEdgeRing: function() {
      return this.minEdgeRing;
    },
    getDepthDelta: function() {
      var t = this.edge.getDepthDelta();
      return this._isForward || (t = -t), t;
    },
    setInResult: function(t) {
      this._isInResult = t;
    },
    getSym: function() {
      return this.sym;
    },
    isForward: function() {
      return this._isForward;
    },
    getEdge: function() {
      return this.edge;
    },
    printEdge: function(t) {
      this.print(t), t.print(" "), this._isForward ? this.edge.print(t) : this.edge.printReverse(t);
    },
    setSym: function(t) {
      this.sym = t;
    },
    setVisitedEdge: function(t) {
      this.setVisited(t), this.sym.setVisited(t);
    },
    setEdgeDepths: function(t, e) {
      var n = this.getEdge().getDepthDelta();
      this._isForward || (n = -n);
      var i = 1;
      t === cn.LEFT && (i = -1);
      var r = cn.opposite(t),
          s = n * i,
          o = e + s;
      this.setDepth(t, e), this.setDepth(r, o);
    },
    getEdgeRing: function() {
      return this.edgeRing;
    },
    isInResult: function() {
      return this._isInResult;
    },
    setNext: function(t) {
      this.next = t;
    },
    isVisited: function() {
      return this._isVisited;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return In;
    }
  }), In.depthFactor = function(t, e) {
    return t === L.EXTERIOR && e === L.INTERIOR ? 1 : t === L.INTERIOR && e === L.EXTERIOR ? -1 : 0;
  }, e(Nn.prototype, {
    createNode: function(t) {
      return new yn(t, null);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Nn;
    }
  }), e(Cn.prototype, {
    printEdges: function(t) {
      t.println("Edges:");
      for (var e = 0; e < this.edges.size(); e++) {
        t.println("edge " + e + ":");
        var n = this.edges.get(e);
        n.print(t), n.eiList.print(t);
      }
    },
    find: function(t) {
      return this.nodes.find(t);
    },
    addNode: function() {
      if (arguments[0] instanceof yn) {
        var t = arguments[0];
        return this.nodes.addNode(t);
      }
      if (arguments[0] instanceof g) {
        var e = arguments[0];
        return this.nodes.addNode(e);
      }
    },
    getNodeIterator: function() {
      return this.nodes.iterator();
    },
    linkResultDirectedEdges: function() {
      for (var t = this.nodes.iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getEdges().linkResultDirectedEdges();
      }
    },
    debugPrintln: function(t) {
      A.out.println(t);
    },
    isBoundaryNode: function(t, e) {
      var n = this.nodes.find(e);
      if (null === n)
        return !1;
      var i = n.getLabel();
      return null !== i && i.getLocation(t) === L.BOUNDARY;
    },
    linkAllDirectedEdges: function() {
      for (var t = this.nodes.iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getEdges().linkAllDirectedEdges();
      }
    },
    matchInSameDirection: function(t, e, n, i) {
      return t.equals(n) ? he.computeOrientation(t, e, i) === he.COLLINEAR && Je.quadrant(t, e) === Je.quadrant(n, i) : !1;
    },
    getEdgeEnds: function() {
      return this.edgeEndList;
    },
    debugPrint: function(t) {
      A.out.print(t);
    },
    getEdgeIterator: function() {
      return this.edges.iterator();
    },
    findEdgeInSameDirection: function(t, e) {
      for (var n = 0; n < this.edges.size(); n++) {
        var i = this.edges.get(n),
            r = i.getCoordinates();
        if (this.matchInSameDirection(t, e, r[0], r[1]))
          return i;
        if (this.matchInSameDirection(t, e, r[r.length - 1], r[r.length - 2]))
          return i;
      }
      return null;
    },
    insertEdge: function(t) {
      this.edges.add(t);
    },
    findEdgeEnd: function(t) {
      for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
        var n = e.next();
        if (n.getEdge() === t)
          return n;
      }
      return null;
    },
    addEdges: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.edges.add(n);
        var i = new In(n, !0),
            r = new In(n, !1);
        i.setSym(r), r.setSym(i), this.add(i), this.add(r);
      }
    },
    add: function(t) {
      this.nodes.add(t), this.edgeEndList.add(t);
    },
    getNodes: function() {
      return this.nodes.values();
    },
    findEdge: function(t, e) {
      for (var n = 0; n < this.edges.size(); n++) {
        var i = this.edges.get(n),
            r = i.getCoordinates();
        if (t.equals(r[0]) && e.equals(r[1]))
          return i;
      }
      return null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Cn;
    }
  }), Cn.linkResultDirectedEdges = function(t) {
    for (var e = t.iterator(); e.hasNext(); ) {
      var n = e.next();
      n.getEdges().linkResultDirectedEdges();
    }
  }, e(Sn.prototype, {
    sortShellsAndHoles: function(t, e, n) {
      for (var i = t.iterator(); i.hasNext(); ) {
        var r = i.next();
        r.isHole() ? n.add(r) : e.add(r);
      }
    },
    computePolygons: function(t) {
      for (var e = new I,
          n = t.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.toPolygon(this.geometryFactory);
        e.add(r);
      }
      return e;
    },
    placeFreeHoles: function(t, e) {
      for (var n = e.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (null === i.getShell()) {
          var r = this.findEdgeRingContaining(i, t);
          if (null === r)
            throw new sn("unable to assign hole to a shell", i.getCoordinate(0));
          i.setShell(r);
        }
      }
    },
    buildMinimalEdgeRings: function(t, e, n) {
      for (var i = new I,
          r = t.iterator(); r.hasNext(); ) {
        var s = r.next();
        if (s.getMaxNodeDegree() > 2) {
          s.linkDirectedEdgesForMinimalEdgeRings();
          var o = s.buildMinimalRings(),
              a = this.findShell(o);
          null !== a ? (this.placePolygonHoles(a, o), e.add(a)) : n.addAll(o);
        } else
          i.add(s);
      }
      return i;
    },
    containsPoint: function(t) {
      for (var e = this.shellList.iterator(); e.hasNext(); ) {
        var n = e.next();
        if (n.containsPoint(t))
          return !0;
      }
      return !1;
    },
    buildMaximalEdgeRings: function(t) {
      for (var e = new I,
          n = t.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (i.isInResult() && i.getLabel().isArea() && null === i.getEdgeRing()) {
          var r = new vn(i, this.geometryFactory);
          e.add(r), r.setInResult();
        }
      }
      return e;
    },
    placePolygonHoles: function(t, e) {
      for (var n = e.iterator(); n.hasNext(); ) {
        var i = n.next();
        i.isHole() && i.setShell(t);
      }
    },
    getPolygons: function() {
      var t = this.computePolygons(this.shellList);
      return t;
    },
    findEdgeRingContaining: function(t, e) {
      for (var n = t.getLinearRing(),
          i = n.getEnvelopeInternal(),
          r = n.getCoordinateN(0),
          s = null,
          o = null,
          a = e.iterator(); a.hasNext(); ) {
        var u = a.next(),
            l = u.getLinearRing(),
            h = l.getEnvelopeInternal();
        null !== s && (o = s.getLinearRing().getEnvelopeInternal());
        var c = !1;
        h.contains(i) && he.isPointInRing(r, l.getCoordinates()) && (c = !0), c && (null === s || o.contains(h)) && (s = u);
      }
      return s;
    },
    findShell: function(t) {
      for (var e = 0,
          n = null,
          i = t.iterator(); i.hasNext(); ) {
        var r = i.next();
        r.isHole() || (n = r, e++);
      }
      return f.isTrue(1 >= e, "found two shells in MinimalEdgeRing list"), n;
    },
    add: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.add(t.getEdgeEnds(), t.getNodes());
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        Cn.linkResultDirectedEdges(n);
        var i = this.buildMaximalEdgeRings(e),
            r = new I,
            s = this.buildMinimalEdgeRings(i, this.shellList, r);
        this.sortShellsAndHoles(s, this.shellList, r), this.placeFreeHoles(this.shellList, r);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Sn;
    }
  }), e(wn.prototype, {
    collectLines: function(t) {
      for (var e = this.op.getGraph().getEdgeEnds().iterator(); e.hasNext(); ) {
        var n = e.next();
        this.collectLineEdge(n, t, this.lineEdgesList), this.collectBoundaryTouchEdge(n, t, this.lineEdgesList);
      }
    },
    labelIsolatedLine: function(t, e) {
      var n = this.ptLocator.locate(t.getCoordinate(), this.op.getArgGeometry(e));
      t.getLabel().setLocation(e, n);
    },
    build: function(t) {
      return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this.resultLineList;
    },
    collectLineEdge: function(t, e, n) {
      var i = t.getLabel(),
          r = t.getEdge();
      t.isLineEdge() && (t.isVisited() || !ii.isResultOfOp(i, e) || r.isCovered() || (n.add(r), t.setVisitedEdge(!0)));
    },
    findCoveredLineEdges: function() {
      for (var t = this.op.getGraph().getNodes().iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getEdges().findCoveredLineEdges();
      }
      for (var n = this.op.getGraph().getEdgeEnds().iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.getEdge();
        if (i.isLineEdge() && !r.isCoveredSet()) {
          var s = this.op.isCoveredByA(i.getCoordinate());
          r.setCovered(s);
        }
      }
    },
    labelIsolatedLines: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getLabel();
        n.isIsolated() && (i.isNull(0) ? this.labelIsolatedLine(n, 0) : this.labelIsolatedLine(n, 1));
      }
    },
    buildLines: function(t) {
      for (var e = this.lineEdgesList.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = (n.getLabel(), this.geometryFactory.createLineString(n.getCoordinates()));
        this.resultLineList.add(i), n.setInResult(!0);
      }
    },
    collectBoundaryTouchEdge: function(t, e, n) {
      var i = t.getLabel();
      return t.isLineEdge() ? null : t.isVisited() ? null : t.isInteriorAreaEdge() ? null : t.getEdge().isInResult() ? null : (f.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), void(ii.isResultOfOp(i, e) && e === ii.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0))));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return wn;
    }
  }), e(Ln.prototype, {
    filterCoveredNodeToPoint: function(t) {
      var e = t.getCoordinate();
      if (!this.op.isCoveredByLA(e)) {
        var n = this.geometryFactory.createPoint(e);
        this.resultPointList.add(n);
      }
    },
    extractNonCoveredResultNodes: function(t) {
      for (var e = this.op.getGraph().getNodes().iterator(); e.hasNext(); ) {
        var n = e.next();
        if (!(n.isInResult() || n.isIncidentEdgeInResult() || 0 !== n.getEdges().getDegree() && t !== ii.INTERSECTION)) {
          var i = n.getLabel();
          ii.isResultOfOp(i, t) && this.filterCoveredNodeToPoint(n);
        }
      }
    },
    build: function(t) {
      return this.extractNonCoveredResultNodes(t), this.resultPointList;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ln;
    }
  }), e(Rn.prototype, {
    locate: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Rn;
    }
  }), e(Tn.prototype, {
    locate: function(t) {
      return Tn.locate(t, this.geom);
    },
    interfaces_: function() {
      return [Rn];
    },
    getClass: function() {
      return Tn;
    }
  }), Tn.isPointInRing = function(t, e) {
    return e.getEnvelopeInternal().intersects(t) ? he.isPointInRing(t, e.getCoordinates()) : !1;
  }, Tn.containsPointInPolygon = function(t, e) {
    if (e.isEmpty())
      return !1;
    var n = e.getExteriorRing();
    if (!Tn.isPointInRing(t, n))
      return !1;
    for (var i = 0; i < e.getNumInteriorRing(); i++) {
      var r = e.getInteriorRingN(i);
      if (Tn.isPointInRing(t, r))
        return !1;
    }
    return !0;
  }, Tn.containsPoint = function(t, e) {
    if (e instanceof Tt)
      return Tn.containsPointInPolygon(t, e);
    if (e instanceof ft)
      for (var n = new Re(e); n.hasNext(); ) {
        var i = n.next();
        if (i !== e && Tn.containsPoint(t, i))
          return !0;
      }
    return !1;
  }, Tn.locate = function(t, e) {
    return e.isEmpty() ? L.EXTERIOR : Tn.containsPoint(t, e) ? L.INTERIOR : L.EXTERIOR;
  }, e(Pn.prototype, {
    getNextCW: function(t) {
      this.getEdges();
      var e = this.edgeList.indexOf(t),
          n = e - 1;
      return 0 === e && (n = this.edgeList.size() - 1), this.edgeList.get(n);
    },
    propagateSideLabels: function(t) {
      for (var e = L.NONE,
          n = this.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.getLabel();
        r.isArea(t) && r.getLocation(t, cn.LEFT) !== L.NONE && (e = r.getLocation(t, cn.LEFT));
      }
      if (e === L.NONE)
        return null;
      for (var s = e,
          n = this.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.getLabel();
        if (r.getLocation(t, cn.ON) === L.NONE && r.setLocation(t, cn.ON, s), r.isArea(t)) {
          var o = r.getLocation(t, cn.LEFT),
              a = r.getLocation(t, cn.RIGHT);
          if (a !== L.NONE) {
            if (a !== s)
              throw new sn("side location conflict", i.getCoordinate());
            o === L.NONE && f.shouldNeverReachHere("found single null side (at " + i.getCoordinate() + ")"), s = o;
          } else
            f.isTrue(r.getLocation(t, cn.LEFT) === L.NONE, "found single null side"), r.setLocation(t, cn.RIGHT, s), r.setLocation(t, cn.LEFT, s);
        }
      }
    },
    getCoordinate: function() {
      var t = this.iterator();
      if (!t.hasNext())
        return null;
      var e = t.next();
      return e.getCoordinate();
    },
    print: function(t) {
      A.out.println("EdgeEndStar:   " + this.getCoordinate());
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.print(t);
      }
    },
    isAreaLabelsConsistent: function(t) {
      return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
    },
    checkAreaLabelsConsistent: function(t) {
      var e = this.getEdges();
      if (e.size() <= 0)
        return !0;
      var n = e.size() - 1,
          i = e.get(n).getLabel(),
          r = i.getLocation(t, cn.LEFT);
      f.isTrue(r !== L.NONE, "Found unlabelled area edge");
      for (var s = r,
          o = this.iterator(); o.hasNext(); ) {
        var a = o.next(),
            u = a.getLabel();
        f.isTrue(u.isArea(t), "Found non-area edge");
        var l = u.getLocation(t, cn.LEFT),
            h = u.getLocation(t, cn.RIGHT);
        if (l === h)
          return !1;
        if (h !== s)
          return !1;
        s = l;
      }
      return !0;
    },
    findIndex: function(t) {
      this.iterator();
      for (var e = 0; e < this.edgeList.size(); e++) {
        var n = this.edgeList.get(e);
        if (n === t)
          return e;
      }
      return -1;
    },
    iterator: function() {
      return this.getEdges().iterator();
    },
    getEdges: function() {
      return null === this.edgeList && (this.edgeList = new I(this.edgeMap.values())), this.edgeList;
    },
    getLocation: function(t, e, n) {
      return this.ptInAreaLocation[t] === L.NONE && (this.ptInAreaLocation[t] = Tn.locate(e, n[t].getGeometry())), this.ptInAreaLocation[t];
    },
    toString: function() {
      var t = new P;
      t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        t.append(n), t.append("\n");
      }
      return t.toString();
    },
    computeEdgeEndLabels: function(t) {
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.computeLabel(t);
      }
    },
    computeLabelling: function(t) {
      this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
      for (var e = [!1, !1],
          n = this.iterator(); n.hasNext(); )
        for (var i = n.next(),
            r = i.getLabel(),
            s = 0; 2 > s; s++)
          r.isLine(s) && r.getLocation(s) === L.BOUNDARY && (e[s] = !0);
      for (var n = this.iterator(); n.hasNext(); )
        for (var i = n.next(),
            r = i.getLabel(),
            s = 0; 2 > s; s++)
          if (r.isAnyNull(s)) {
            var o = L.NONE;
            if (e[s])
              o = L.EXTERIOR;
            else {
              var a = i.getCoordinate();
              o = this.getLocation(s, a, t);
            }
            r.setAllLocationsIfNull(s, o);
          }
    },
    getDegree: function() {
      return this.edgeMap.size();
    },
    insertEdgeEnd: function(t, e) {
      this.edgeMap.put(t, e), this.edgeList = null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Pn;
    }
  }), h(bn, Pn), e(bn.prototype, {
    linkResultDirectedEdges: function() {
      this.getResultAreaEdges();
      for (var t = null,
          e = null,
          n = this.SCANNING_FOR_INCOMING,
          i = 0; i < this.resultAreaEdgeList.size(); i++) {
        var r = this.resultAreaEdgeList.get(i),
            s = r.getSym();
        if (r.getLabel().isArea())
          switch (null === t && r.isInResult() && (t = r), n) {
            case this.SCANNING_FOR_INCOMING:
              if (!s.isInResult())
                continue;
              e = s, n = this.LINKING_TO_OUTGOING;
              break;
            case this.LINKING_TO_OUTGOING:
              if (!r.isInResult())
                continue;
              e.setNext(r), n = this.SCANNING_FOR_INCOMING;
          }
      }
      if (n === this.LINKING_TO_OUTGOING) {
        if (null === t)
          throw new sn("no outgoing dirEdge found", this.getCoordinate());
        f.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t);
      }
    },
    insert: function(t) {
      var e = t;
      this.insertEdgeEnd(e, e);
    },
    getRightmostEdge: function() {
      var t = this.getEdges(),
          e = t.size();
      if (1 > e)
        return null;
      var n = t.get(0);
      if (1 === e)
        return n;
      var i = t.get(e - 1),
          r = n.getQuadrant(),
          s = i.getQuadrant();
      if (Je.isNorthern(r) && Je.isNorthern(s))
        return n;
      if (!Je.isNorthern(r) && !Je.isNorthern(s))
        return i;
      return 0 !== n.getDy() ? n : 0 !== i.getDy() ? i : (f.shouldNeverReachHere("found two horizontal edges incident on node"), null);
    },
    print: function(t) {
      A.out.println("DirectedEdgeStar: " + this.getCoordinate());
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        t.print("out "), n.print(t), t.println(), t.print("in "), n.getSym().print(t), t.println();
      }
    },
    getResultAreaEdges: function() {
      if (null !== this.resultAreaEdgeList)
        return this.resultAreaEdgeList;
      this.resultAreaEdgeList = new I;
      for (var t = this.iterator(); t.hasNext(); ) {
        var e = t.next();
        (e.isInResult() || e.getSym().isInResult()) && this.resultAreaEdgeList.add(e);
      }
      return this.resultAreaEdgeList;
    },
    updateLabelling: function(t) {
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getLabel();
        i.setAllLocationsIfNull(0, t.getLocation(0)), i.setAllLocationsIfNull(1, t.getLocation(1));
      }
    },
    linkAllDirectedEdges: function() {
      this.getEdges();
      for (var t = null,
          e = null,
          n = this.edgeList.size() - 1; n >= 0; n--) {
        var i = this.edgeList.get(n),
            r = i.getSym();
        null === e && (e = r), null !== t && r.setNext(t), t = i;
      }
      e.setNext(t);
    },
    computeDepths: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = this.findIndex(t),
            n = (t.getLabel(), t.getDepth(cn.LEFT)),
            i = t.getDepth(cn.RIGHT),
            r = this.computeDepths(e + 1, this.edgeList.size(), n),
            s = this.computeDepths(0, e, r);
        if (s !== i)
          throw new sn("depth mismatch at " + t.getCoordinate());
      } else if (3 === arguments.length) {
        for (var o = arguments[0],
            a = arguments[1],
            u = arguments[2],
            l = u,
            h = o; a > h; h++) {
          var c = this.edgeList.get(h);
          c.getLabel();
          c.setEdgeDepths(cn.RIGHT, l), l = c.getDepth(cn.LEFT);
        }
        return l;
      }
    },
    mergeSymLabels: function() {
      for (var t = this.iterator(); t.hasNext(); ) {
        var e = t.next(),
            n = e.getLabel();
        n.merge(e.getSym().getLabel());
      }
    },
    linkMinimalDirectedEdges: function(t) {
      for (var e = null,
          n = null,
          i = this.SCANNING_FOR_INCOMING,
          r = this.resultAreaEdgeList.size() - 1; r >= 0; r--) {
        var s = this.resultAreaEdgeList.get(r),
            o = s.getSym();
        switch (null === e && s.getEdgeRing() === t && (e = s), i) {
          case this.SCANNING_FOR_INCOMING:
            if (o.getEdgeRing() !== t)
              continue;
            n = o, i = this.LINKING_TO_OUTGOING;
            break;
          case this.LINKING_TO_OUTGOING:
            if (s.getEdgeRing() !== t)
              continue;
            n.setNextMin(s), i = this.SCANNING_FOR_INCOMING;
        }
      }
      i === this.LINKING_TO_OUTGOING && (f.isTrue(null !== e, "found null for first outgoing dirEdge"), f.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e));
    },
    getOutgoingDegree: function() {
      if (0 === arguments.length) {
        for (var t = 0,
            e = this.iterator(); e.hasNext(); ) {
          var n = e.next();
          n.isInResult() && t++;
        }
        return t;
      }
      if (1 === arguments.length) {
        for (var i = arguments[0],
            t = 0,
            e = this.iterator(); e.hasNext(); ) {
          var n = e.next();
          n.getEdgeRing() === i && t++;
        }
        return t;
      }
    },
    getLabel: function() {
      return this.label;
    },
    findCoveredLineEdges: function() {
      for (var t = L.NONE,
          e = this.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getSym();
        if (!n.isLineEdge()) {
          if (n.isInResult()) {
            t = L.INTERIOR;
            break;
          }
          if (i.isInResult()) {
            t = L.EXTERIOR;
            break;
          }
        }
      }
      if (t === L.NONE)
        return null;
      for (var r = t,
          e = this.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getSym();
        n.isLineEdge() ? n.getEdge().setCovered(r === L.INTERIOR) : (n.isInResult() && (r = L.EXTERIOR), i.isInResult() && (r = L.INTERIOR));
      }
    },
    computeLabelling: function(t) {
      Pn.prototype.computeLabelling.call(this, t), this.label = new gn(L.NONE);
      for (var e = this.iterator(); e.hasNext(); )
        for (var n = e.next(),
            i = n.getEdge(),
            r = i.getLabel(),
            s = 0; 2 > s; s++) {
          var o = r.getLocation(s);
          o !== L.INTERIOR && o !== L.BOUNDARY || this.label.setLocation(s, L.INTERIOR);
        }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return bn;
    }
  }), h(On, Nn), e(On.prototype, {
    createNode: function(t) {
      return new yn(t, new bn);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return On;
    }
  }), e(_n.prototype, {
    computeIntersections: function(t, e) {
      this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return _n;
    }
  }), e(Mn.prototype, {
    isDelete: function() {
      return this.eventType === Mn.DELETE;
    },
    setDeleteEventIndex: function(t) {
      this.deleteEventIndex = t;
    },
    getObject: function() {
      return this.obj;
    },
    compareTo: function(t) {
      var e = t;
      return this.xValue < e.xValue ? -1 : this.xValue > e.xValue ? 1 : this.eventType < e.eventType ? -1 : this.eventType > e.eventType ? 1 : 0;
    },
    getInsertEvent: function() {
      return this.insertEvent;
    },
    isInsert: function() {
      return this.eventType === Mn.INSERT;
    },
    isSameLabel: function(t) {
      return null === this.label ? !1 : this.label === t.label;
    },
    getDeleteEventIndex: function() {
      return this.deleteEventIndex;
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return Mn;
    }
  }), Mn.INSERT = 1, Mn.DELETE = 2, e(Dn.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Dn;
    }
  }), e(An.prototype, {
    isTrivialIntersection: function(t, e, n, i) {
      if (t === n && 1 === this.li.getIntersectionNum()) {
        if (An.isAdjacentSegments(e, i))
          return !0;
        if (t.isClosed()) {
          var r = t.getNumPoints() - 1;
          if (0 === e && i === r || 0 === i && e === r)
            return !0;
        }
      }
      return !1;
    },
    getProperIntersectionPoint: function() {
      return this.properIntersectionPoint;
    },
    setIsDoneIfProperInt: function(t) {
      this.isDoneWhenProperInt = t;
    },
    hasProperInteriorIntersection: function() {
      return this.hasProperInterior;
    },
    isBoundaryPointInternal: function(t, e) {
      for (var n = e.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.getCoordinate();
        if (t.isIntersection(r))
          return !0;
      }
      return !1;
    },
    hasProperIntersection: function() {
      return this.hasProper;
    },
    hasIntersection: function() {
      return this._hasIntersection;
    },
    isDone: function() {
      return this._isDone;
    },
    isBoundaryPoint: function(t, e) {
      return null === e ? !1 : this.isBoundaryPointInternal(t, e[0]) ? !0 : !!this.isBoundaryPointInternal(t, e[1]);
    },
    setBoundaryNodes: function(t, e) {
      this.bdyNodes = new Array(2).fill(null), this.bdyNodes[0] = t, this.bdyNodes[1] = e;
    },
    addIntersections: function(t, e, n, i) {
      if (t === n && e === i)
        return null;
      this.numTests++;
      var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];
      this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && (this.recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this.numIntersections++, this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, !this.includeProper && this.li.isProper() || (t.addIntersections(this.li, e, 0), n.addIntersections(this.li, i, 1)), this.li.isProper() && (this.properIntersectionPoint = this.li.getIntersection(0).copy(), this.hasProper = !0, this.isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this.li, this.bdyNodes) || (this.hasProperInterior = !0))));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return An;
    }
  }), An.isAdjacentSegments = function(t, e) {
    return 1 === Math.abs(t - e);
  }, h(Fn, Dn), e(Fn.prototype, {
    prepareEvents: function() {
      ho.sort(this.events);
      for (var t = 0; t < this.events.size(); t++) {
        var e = this.events.get(t);
        e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t);
      }
    },
    computeIntersections: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.nOverlaps = 0, this.prepareEvents();
        for (var e = 0; e < this.events.size(); e++) {
          var n = this.events.get(e);
          if (n.isInsert() && this.processOverlaps(e, n.getDeleteEventIndex(), n, t), t.isDone())
            break;
        }
      } else if (3 === arguments.length)
        if (arguments[2] instanceof An && R(arguments[0], y) && R(arguments[1], y)) {
          var i = arguments[0],
              r = arguments[1],
              s = arguments[2];
          this.addEdges(i, i), this.addEdges(r, r), this.computeIntersections(s);
        } else if ("boolean" == typeof arguments[2] && R(arguments[0], y) && arguments[1] instanceof An) {
          var o = arguments[0],
              a = arguments[1],
              u = arguments[2];
          u ? this.addEdges(o, null) : this.addEdges(o), this.computeIntersections(a);
        }
    },
    addEdge: function(t, e) {
      for (var n = t.getMonotoneChainEdge(),
          i = n.getStartIndexes(),
          r = 0; r < i.length - 1; r++) {
        var s = new _n(n, r),
            o = new Mn(e, n.getMinX(r), s);
        this.events.add(o), this.events.add(new Mn(n.getMaxX(r), o));
      }
    },
    processOverlaps: function(t, e, n, i) {
      for (var r = n.getObject(),
          s = t; e > s; s++) {
        var o = this.events.get(s);
        if (o.isInsert()) {
          var a = o.getObject();
          n.isSameLabel(o) || (r.computeIntersections(a, i), this.nOverlaps++);
        }
      }
    },
    addEdges: function() {
      if (1 === arguments.length)
        for (var t = arguments[0],
            e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.addEdge(n, n);
        }
      else if (2 === arguments.length)
        for (var i = arguments[0],
            r = arguments[1],
            e = i.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.addEdge(n, r);
        }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Fn;
    }
  }), e(Gn.prototype, {
    getMin: function() {
      return this.min;
    },
    intersects: function(t, e) {
      return !(this.min > e || this.max < t);
    },
    getMax: function() {
      return this.max;
    },
    toString: function() {
      return se.toLineString(new g(this.min, 0), new g(this.max, 0));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Gn;
    }
  }), e(qn.prototype, {
    compare: function(t, e) {
      var n = t,
          i = e,
          r = (n.min + n.max) / 2,
          s = (i.min + i.max) / 2;
      return s > r ? -1 : r > s ? 1 : 0;
    },
    interfaces_: function() {
      return [a];
    },
    getClass: function() {
      return qn;
    }
  }), Gn.NodeComparator = qn, h(Bn, Gn), e(Bn.prototype, {
    query: function(t, e, n) {
      return this.intersects(t, e) ? void n.visitItem(this.item) : null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Bn;
    }
  }), h(zn, Gn), e(zn.prototype, {
    buildExtent: function(t, e) {
      this.min = Math.min(t.min, e.min), this.max = Math.max(t.max, e.max);
    },
    query: function(t, e, n) {
      return this.intersects(t, e) ? (null !== this.node1 && this.node1.query(t, e, n), void(null !== this.node2 && this.node2.query(t, e, n))) : null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return zn;
    }
  }), e(Vn.prototype, {
    buildTree: function() {
      ho.sort(this.leaves, new IntervalRTreeNode.NodeComparator);
      for (var t = this.leaves,
          e = null,
          n = new I; ; ) {
        if (this.buildLevel(t, n), 1 === n.size())
          return n.get(0);
        e = t, t = n, n = e;
      }
    },
    insert: function(t, e, n) {
      if (null !== this.root)
        throw new IllegalStateException("Index cannot be added to once it has been queried");
      this.leaves.add(new Bn(t, e, n));
    },
    query: function(t, e, n) {
      this.init(), this.root.query(t, e, n);
    },
    buildRoot: function() {
      return null !== this.root ? null : void(this.root = this.buildTree());
    },
    printNode: function(t) {
      A.out.println(se.toLineString(new g(t.min, this.level), new g(t.max, this.level)));
    },
    init: function() {
      return null !== this.root ? null : void this.buildRoot();
    },
    buildLevel: function(t, e) {
      this.level++, e.clear();
      for (var n = 0; n < t.size(); n += 2) {
        var i = t.get(n),
            r = n + 1 < t.size() ? t.get(n) : null;
        if (null === r)
          e.add(i);
        else {
          var s = new zn(t.get(n), t.get(n + 1));
          e.add(s);
        }
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Vn;
    }
  }), e(kn.prototype, {
    filter: function(t) {
      if (this.isForcedToLineString && t instanceof bt) {
        var e = t.getFactory().createLineString(t.getCoordinateSequence());
        return this.lines.add(e), null;
      }
      t instanceof St && this.lines.add(t);
    },
    setForceToLineString: function(t) {
      this.isForcedToLineString = t;
    },
    interfaces_: function() {
      return [q];
    },
    getClass: function() {
      return kn;
    }
  }), kn.getGeometry = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return t.getFactory().buildGeometry(kn.getLines(t));
    }
    if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      return e.getFactory().buildGeometry(kn.getLines(e, n));
    }
  }, kn.getLines = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return kn.getLines(t, !1);
    }
    if (2 === arguments.length) {
      if (R(arguments[0], v) && R(arguments[1], v)) {
        for (var e = arguments[0],
            n = arguments[1],
            i = e.iterator(); i.hasNext(); ) {
          var r = i.next();
          kn.getLines(r, n);
        }
        return n;
      }
      if (arguments[0] instanceof B && "boolean" == typeof arguments[1]) {
        var s = arguments[0],
            o = arguments[1],
            a = new I;
        return s.apply(new kn(a, o)), a;
      }
      if (arguments[0] instanceof B && R(arguments[1], v)) {
        var u = arguments[0],
            l = arguments[1];
        return u instanceof St ? l.add(u) : u.apply(new kn(l)), l;
      }
    } else if (3 === arguments.length) {
      if ("boolean" == typeof arguments[2] && R(arguments[0], v) && R(arguments[1], v)) {
        for (var h = arguments[0],
            c = arguments[1],
            f = arguments[2],
            i = h.iterator(); i.hasNext(); ) {
          var r = i.next();
          kn.getLines(r, c, f);
        }
        return c;
      }
      if ("boolean" == typeof arguments[2] && arguments[0] instanceof B && R(arguments[1], v)) {
        var g = arguments[0],
            d = arguments[1],
            p = arguments[2];
        return g.apply(new kn(d, p)), d;
      }
    }
  }, e(Yn.prototype, {
    visitItem: function(t) {
      this.items.add(t);
    },
    getItems: function() {
      return this.items;
    },
    interfaces_: function() {
      return [Ae];
    },
    getClass: function() {
      return Yn;
    }
  }), e(Un.prototype, {
    locate: function(t) {
      var e = new le(t),
          n = new Xn(e);
      return this.index.query(t.y, t.y, n), e.getLocation();
    },
    interfaces_: function() {
      return [Rn];
    },
    getClass: function() {
      return Un;
    }
  }), e(Xn.prototype, {
    visitItem: function(t) {
      var e = t;
      this.counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
    },
    interfaces_: function() {
      return [Ae];
    },
    getClass: function() {
      return Xn;
    }
  }), e(Hn.prototype, {
    init: function(t) {
      for (var e = kn.getLines(t),
          n = e.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.getCoordinates();
        this.addLine(r);
      }
    },
    addLine: function(t) {
      for (var e = 1; e < t.length; e++) {
        var n = new ce(t[e - 1], t[e]),
            i = Math.min(n.p0.y, n.p1.y),
            r = Math.max(n.p0.y, n.p1.y);
        this.index.insert(i, r, n);
      }
    },
    query: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1],
            n = new Yn;
        return this.index.query(t, e, n), n.getItems();
      }
      if (3 === arguments.length) {
        var i = arguments[0],
            r = arguments[1],
            s = arguments[2];
        this.index.query(i, r, s);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Hn;
    }
  }), Un.SegmentVisitor = Xn, Un.IntervalIndexedGeometry = Hn, e(Wn.prototype, {
    getSegmentIndex: function() {
      return this.segmentIndex;
    },
    getCoordinate: function() {
      return this.coord;
    },
    print: function(t) {
      t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
    },
    compareTo: function(t) {
      var e = t;
      return this.compare(e.segmentIndex, e.dist);
    },
    isEndPoint: function(t) {
      return 0 === this.segmentIndex && 0 === this.dist ? !0 : this.segmentIndex === t;
    },
    toString: function() {
      return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
    },
    getDistance: function() {
      return this.dist;
    },
    compare: function(t, e) {
      return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return Wn;
    }
  }), e(jn.prototype, {
    print: function(t) {
      t.println("Intersections:");
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.print(t);
      }
    },
    iterator: function() {
      return this.nodeMap.values().iterator();
    },
    addSplitEdges: function(t) {
      this.addEndpoints();
      for (var e = this.iterator(),
          n = e.next(); e.hasNext(); ) {
        var i = e.next(),
            r = this.createSplitEdge(n, i);
        t.add(r), n = i;
      }
    },
    addEndpoints: function() {
      var t = this.edge.pts.length - 1;
      this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
    },
    createSplitEdge: function(t, e) {
      var n = e.segmentIndex - t.segmentIndex + 2,
          i = this.edge.pts[e.segmentIndex],
          r = e.dist > 0 || !e.coord.equals2D(i);
      r || n--;
      var s = new Array(n).fill(null),
          o = 0;
      s[o++] = new g(t.coord);
      for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
        s[o++] = this.edge.pts[a];
      return r && (s[o] = e.coord), new Jn(s, new gn(this.edge.label));
    },
    add: function(t, e, n) {
      var i = new Wn(t, e, n),
          r = this.nodeMap.get(i);
      return null !== r ? r : (this.nodeMap.put(i, i), i);
    },
    isIntersection: function(t) {
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        if (n.coord.equals(t))
          return !0;
      }
      return !1;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return jn;
    }
  }), e(Kn.prototype, {
    getChainStartIndices: function(t) {
      var e = 0,
          n = new I;
      n.add(new b(e));
      do {
        var i = this.findChainEnd(t, e);
        n.add(new b(i)), e = i;
      } while (e < t.length - 1);
      var r = Kn.toIntArray(n);
      return r;
    },
    findChainEnd: function(t, e) {
      for (var n = Je.quadrant(t[e], t[e + 1]),
          i = e + 1; i < t.length; ) {
        var r = Je.quadrant(t[i - 1], t[i]);
        if (r !== n)
          break;
        i++;
      }
      return i - 1;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Kn;
    }
  }), Kn.toIntArray = function(t) {
    for (var e = new Array(t.size()).fill(null),
        n = 0; n < e.length; n++)
      e[n] = t.get(n).intValue();
    return e;
  }, e(Zn.prototype, {
    getCoordinates: function() {
      return this.pts;
    },
    getMaxX: function(t) {
      var e = this.pts[this.startIndex[t]].x,
          n = this.pts[this.startIndex[t + 1]].x;
      return e > n ? e : n;
    },
    getMinX: function(t) {
      var e = this.pts[this.startIndex[t]].x,
          n = this.pts[this.startIndex[t + 1]].x;
      return n > e ? e : n;
    },
    computeIntersectsForChain: function() {
      if (4 === arguments.length) {
        var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            i = arguments[3];
        this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
      } else if (6 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2],
            a = arguments[3],
            u = arguments[4],
            l = arguments[5],
            h = this.pts[r],
            c = this.pts[s],
            f = o.pts[a],
            g = o.pts[u];
        if (s - r === 1 && u - a === 1)
          return l.addIntersections(this.e, r, o.e, a), null;
        if (this.env1.init(h, c), this.env2.init(f, g), !this.env1.intersects(this.env2))
          return null;
        var d = Math.trunc((r + s) / 2),
            p = Math.trunc((a + u) / 2);
        d > r && (p > a && this.computeIntersectsForChain(r, d, o, a, p, l), u > p && this.computeIntersectsForChain(r, d, o, p, u, l)), s > d && (p > a && this.computeIntersectsForChain(d, s, o, a, p, l), u > p && this.computeIntersectsForChain(d, s, o, p, u, l));
      }
    },
    getStartIndexes: function() {
      return this.startIndex;
    },
    computeIntersects: function(t, e) {
      for (var n = 0; n < this.startIndex.length - 1; n++)
        for (var i = 0; i < t.startIndex.length - 1; i++)
          this.computeIntersectsForChain(n, t, i, e);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Zn;
    }
  }), e(Qn.prototype, {
    getDepth: function(t, e) {
      return this.depth[t][e];
    },
    setDepth: function(t, e, n) {
      this.depth[t][e] = n;
    },
    isNull: function() {
      if (0 === arguments.length) {
        for (var t = 0; 2 > t; t++)
          for (var e = 0; 3 > e; e++)
            if (this.depth[t][e] !== Qn.NULL_VALUE)
              return !1;
        return !0;
      }
      if (1 === arguments.length) {
        var n = arguments[0];
        return this.depth[n][1] === Qn.NULL_VALUE;
      }
      if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1];
        return this.depth[i][r] === Qn.NULL_VALUE;
      }
    },
    normalize: function() {
      for (var t = 0; 2 > t; t++)
        if (!this.isNull(t)) {
          var e = this.depth[t][1];
          this.depth[t][2] < e && (e = this.depth[t][2]), 0 > e && (e = 0);
          for (var n = 1; 3 > n; n++) {
            var i = 0;
            this.depth[t][n] > e && (i = 1), this.depth[t][n] = i;
          }
        }
    },
    getDelta: function(t) {
      return this.depth[t][cn.RIGHT] - this.depth[t][cn.LEFT];
    },
    getLocation: function(t, e) {
      return this.depth[t][e] <= 0 ? L.EXTERIOR : L.INTERIOR;
    },
    toString: function() {
      return "A: " + this.depth[0][1] + "," + this.depth[0][2] + " B: " + this.depth[1][1] + "," + this.depth[1][2];
    },
    add: function() {
      if (1 === arguments.length)
        for (var t = arguments[0],
            e = 0; 2 > e; e++)
          for (var n = 1; 3 > n; n++) {
            var i = t.getLocation(e, n);
            i !== L.EXTERIOR && i !== L.INTERIOR || (this.isNull(e, n) ? this.depth[e][n] = Qn.depthAtLocation(i) : this.depth[e][n] += Qn.depthAtLocation(i));
          }
      else if (3 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];
        o === L.INTERIOR && this.depth[r][s]++;
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Qn;
    }
  }), Qn.depthAtLocation = function(t) {
    return t === L.EXTERIOR ? 0 : t === L.INTERIOR ? 1 : Qn.NULL_VALUE;
  }, Qn.NULL_VALUE = -1, h(Jn, mn), e(Jn.prototype, {
    getDepth: function() {
      return this.depth;
    },
    getCollapsedEdge: function() {
      var t = new Array(2).fill(null);
      t[0] = this.pts[0], t[1] = this.pts[1];
      var e = new Jn(t, gn.toLineLabel(this.label));
      return e;
    },
    isIsolated: function() {
      return this._isIsolated;
    },
    getCoordinates: function() {
      return this.pts;
    },
    setIsolated: function(t) {
      this._isIsolated = t;
    },
    setName: function(t) {
      this.name = t;
    },
    equals: function(t) {
      if (!(t instanceof Jn))
        return !1;
      var e = t;
      if (this.pts.length !== e.pts.length)
        return !1;
      for (var n = !0,
          i = !0,
          r = this.pts.length,
          s = 0; s < this.pts.length; s++)
        if (this.pts[s].equals2D(e.pts[s]) || (n = !1), this.pts[s].equals2D(e.pts[--r]) || (i = !1), !n && !i)
          return !1;
      return !0;
    },
    getCoordinate: function() {
      if (0 === arguments.length)
        return this.pts.length > 0 ? this.pts[0] : null;
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.pts[t];
      }
    },
    print: function(t) {
      t.print("edge " + this.name + ": "), t.print("LINESTRING (");
      for (var e = 0; e < this.pts.length; e++)
        e > 0 && t.print(","), t.print(this.pts[e].x + " " + this.pts[e].y);
      t.print(")  " + this.label + " " + this.depthDelta);
    },
    computeIM: function(t) {
      Jn.updateIM(this.label, t);
    },
    isCollapsed: function() {
      return this.label.isArea() ? 3 !== this.pts.length ? !1 : !!this.pts[0].equals(this.pts[2]) : !1;
    },
    isClosed: function() {
      return this.pts[0].equals(this.pts[this.pts.length - 1]);
    },
    getMaximumSegmentIndex: function() {
      return this.pts.length - 1;
    },
    getDepthDelta: function() {
      return this.depthDelta;
    },
    getNumPoints: function() {
      return this.pts.length;
    },
    printReverse: function(t) {
      t.print("edge " + this.name + ": ");
      for (var e = this.pts.length - 1; e >= 0; e--)
        t.print(this.pts[e] + " ");
      t.println("");
    },
    getMonotoneChainEdge: function() {
      return null === this.mce && (this.mce = new Zn(this)), this.mce;
    },
    getEnvelope: function() {
      if (null === this.env) {
        this.env = new C;
        for (var t = 0; t < this.pts.length; t++)
          this.env.expandToInclude(this.pts[t]);
      }
      return this.env;
    },
    addIntersection: function(t, e, n, i) {
      var r = new g(t.getIntersection(i)),
          s = e,
          o = t.getEdgeDistance(n, i),
          a = s + 1;
      if (a < this.pts.length) {
        var u = this.pts[a];
        r.equals2D(u) && (s = a, o = 0);
      }
      this.eiList.add(r, s, o);
    },
    toString: function() {
      var t = new P;
      t.append("edge " + this.name + ": "), t.append("LINESTRING (");
      for (var e = 0; e < this.pts.length; e++)
        e > 0 && t.append(","), t.append(this.pts[e].x + " " + this.pts[e].y);
      return t.append(")  " + this.label + " " + this.depthDelta), t.toString();
    },
    isPointwiseEqual: function(t) {
      if (this.pts.length !== t.pts.length)
        return !1;
      for (var e = 0; e < this.pts.length; e++)
        if (!this.pts[e].equals2D(t.pts[e]))
          return !1;
      return !0;
    },
    setDepthDelta: function(t) {
      this.depthDelta = t;
    },
    getEdgeIntersectionList: function() {
      return this.eiList;
    },
    addIntersections: function(t, e, n) {
      for (var i = 0; i < t.getIntersectionNum(); i++)
        this.addIntersection(t, e, n, i);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Jn;
    }
  }), Jn.updateIM = function() {
    if (2 !== arguments.length)
      return mn.prototype.updateIM.apply(this, arguments);
    var t = arguments[0],
        e = arguments[1];
    e.setAtLeastIfValid(t.getLocation(0, cn.ON), t.getLocation(1, cn.ON), 1), t.isArea() && (e.setAtLeastIfValid(t.getLocation(0, cn.LEFT), t.getLocation(1, cn.LEFT), 2), e.setAtLeastIfValid(t.getLocation(0, cn.RIGHT), t.getLocation(1, cn.RIGHT), 2));
  }, h($n, Cn), e($n.prototype, {
    insertBoundaryPoint: function(t, e) {
      var n = this.nodes.addNode(e),
          i = n.getLabel(),
          r = 1,
          s = L.NONE;
      s = i.getLocation(t, cn.ON), s === L.BOUNDARY && r++;
      var o = $n.determineBoundary(this.boundaryNodeRule, r);
      i.setLocation(t, o);
    },
    computeSelfNodes: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this.computeSelfNodes(t, e, !1);
      }
      if (3 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = arguments[2],
            s = new An(n, !0, !1);
        s.setIsDoneIfProperInt(r);
        var o = this.createEdgeSetIntersector(),
            a = this.parentGeom instanceof bt || this.parentGeom instanceof Tt || this.parentGeom instanceof Ot,
            u = i || !a;
        return o.computeIntersections(this.edges, s, u), this.addSelfIntersectionNodes(this.argIndex), s;
      }
    },
    computeSplitEdges: function(t) {
      for (var e = this.edges.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.eiList.addSplitEdges(t);
      }
    },
    computeEdgeIntersections: function(t, e, n) {
      var i = new An(e, n, !0);
      i.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes());
      var r = this.createEdgeSetIntersector();
      return r.computeIntersections(this.edges, t.edges, i), i;
    },
    getGeometry: function() {
      return this.parentGeom;
    },
    getBoundaryNodeRule: function() {
      return this.boundaryNodeRule;
    },
    hasTooFewPoints: function() {
      return this._hasTooFewPoints;
    },
    addPoint: function() {
      if (arguments[0] instanceof Lt) {
        var t = arguments[0],
            e = t.getCoordinate();
        this.insertPoint(this.argIndex, e, L.INTERIOR);
      } else if (arguments[0] instanceof g) {
        var n = arguments[0];
        this.insertPoint(this.argIndex, n, L.INTERIOR);
      }
    },
    addPolygon: function(t) {
      this.addPolygonRing(t.getExteriorRing(), L.EXTERIOR, L.INTERIOR);
      for (var e = 0; e < t.getNumInteriorRing(); e++) {
        var n = t.getInteriorRingN(e);
        this.addPolygonRing(n, L.INTERIOR, L.EXTERIOR);
      }
    },
    addEdge: function(t) {
      this.insertEdge(t);
      var e = t.getCoordinates();
      this.insertPoint(this.argIndex, e[0], L.BOUNDARY), this.insertPoint(this.argIndex, e[e.length - 1], L.BOUNDARY);
    },
    addLineString: function(t) {
      var e = H.removeRepeatedPoints(t.getCoordinates());
      if (e.length < 2)
        return this._hasTooFewPoints = !0, this.invalidPoint = e[0], null;
      var n = new Jn(e, new gn(this.argIndex, L.INTERIOR));
      this.lineEdgeMap.put(t, n), this.insertEdge(n), f.isTrue(e.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this.argIndex, e[0]), this.insertBoundaryPoint(this.argIndex, e[e.length - 1]);
    },
    getInvalidPoint: function() {
      return this.invalidPoint;
    },
    getBoundaryPoints: function() {
      for (var t = this.getBoundaryNodes(),
          e = new Array(t.size()).fill(null),
          n = 0,
          i = t.iterator(); i.hasNext(); ) {
        var r = i.next();
        e[n++] = r.getCoordinate().copy();
      }
      return e;
    },
    getBoundaryNodes: function() {
      return null === this.boundaryNodes && (this.boundaryNodes = this.nodes.getBoundaryNodes(this.argIndex)), this.boundaryNodes;
    },
    addSelfIntersectionNode: function(t, e, n) {
      return this.isBoundaryNode(t, e) ? null : void(n === L.BOUNDARY && this.useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n));
    },
    addPolygonRing: function(t, e, n) {
      if (t.isEmpty())
        return null;
      var i = H.removeRepeatedPoints(t.getCoordinates());
      if (i.length < 4)
        return this._hasTooFewPoints = !0, this.invalidPoint = i[0], null;
      var r = e,
          s = n;
      he.isCCW(i) && (r = n, s = e);
      var o = new Jn(i, new gn(this.argIndex, L.BOUNDARY, r, s));
      this.lineEdgeMap.put(t, o), this.insertEdge(o), this.insertPoint(this.argIndex, i[0], L.BOUNDARY);
    },
    insertPoint: function(t, e, n) {
      var i = this.nodes.addNode(e),
          r = i.getLabel();
      null === r ? i.label = new gn(t, n) : r.setLocation(t, n);
    },
    createEdgeSetIntersector: function() {
      return new Fn;
    },
    addSelfIntersectionNodes: function(t) {
      for (var e = this.edges.iterator(); e.hasNext(); )
        for (var n = e.next(),
            i = n.getLabel().getLocation(t),
            r = n.eiList.iterator(); r.hasNext(); ) {
          var s = r.next();
          this.addSelfIntersectionNode(t, s.coord, i);
        }
    },
    add: function() {
      if (1 !== arguments.length)
        return Cn.prototype.add.apply(this, arguments);
      var t = arguments[0];
      if (t.isEmpty())
        return null;
      if (t instanceof Ot && (this.useBoundaryDeterminationRule = !1), t instanceof Tt)
        this.addPolygon(t);
      else if (t instanceof St)
        this.addLineString(t);
      else if (t instanceof Lt)
        this.addPoint(t);
      else if (t instanceof Pt)
        this.addCollection(t);
      else if (t instanceof gt)
        this.addCollection(t);
      else if (t instanceof Ot)
        this.addCollection(t);
      else {
        if (!(t instanceof ft))
          throw new UnsupportedOperationException(t.getClass().getName());
        this.addCollection(t);
      }
    },
    addCollection: function(t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);
        this.add(n);
      }
    },
    locate: function(t) {
      return R(this.parentGeom, Rt) && this.parentGeom.getNumGeometries() > 50 ? (null === this.areaPtLocator && (this.areaPtLocator = new Un(this.parentGeom)), this.areaPtLocator.locate(t)) : this.ptLocator.locate(t, this.parentGeom);
    },
    findEdge: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.lineEdgeMap.get(t);
      }
      return Cn.prototype.findEdge.apply(this, arguments);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return $n;
    }
  }), $n.determineBoundary = function(t, e) {
    return t.isInBoundary(e) ? L.BOUNDARY : L.INTERIOR;
  }, e(ti.prototype, {
    getArgGeometry: function(t) {
      return this.arg[t].getGeometry();
    },
    setComputationPrecision: function(t) {
      this.resultPrecisionModel = t, this.li.setPrecisionModel(this.resultPrecisionModel);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ti;
    }
  }), e(ei.prototype, {
    compareTo: function(t) {
      var e = t,
          n = ei.compareOriented(this.pts, this._orientation, e.pts, e._orientation);
      return n;
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return ei;
    }
  }), ei.orientation = function(t) {
    return 1 === H.increasingDirection(t);
  }, ei.compareOriented = function(t, e, n, i) {
    for (var r = e ? 1 : -1,
        s = i ? 1 : -1,
        o = e ? t.length : -1,
        a = i ? n.length : -1,
        u = e ? 0 : t.length - 1,
        l = i ? 0 : n.length - 1; ; ) {
      var h = t[u].compareTo(n[l]);
      if (0 !== h)
        return h;
      u += r, l += s;
      var c = u === o,
          f = l === a;
      if (c && !f)
        return -1;
      if (!c && f)
        return 1;
      if (c && f)
        return 0;
    }
  }, e(ni.prototype, {
    print: function(t) {
      t.print("MULTILINESTRING ( ");
      for (var e = 0; e < this.edges.size(); e++) {
        var n = this.edges.get(e);
        e > 0 && t.print(","), t.print("(");
        for (var i = n.getCoordinates(),
            r = 0; r < i.length; r++)
          r > 0 && t.print(","), t.print(i[r].x + " " + i[r].y);
        t.println(")");
      }
      t.print(")  ");
    },
    addAll: function(t) {
      for (var e = t.iterator(); e.hasNext(); )
        this.add(e.next());
    },
    findEdgeIndex: function(t) {
      for (var e = 0; e < this.edges.size(); e++)
        if (this.edges.get(e).equals(t))
          return e;
      return -1;
    },
    iterator: function() {
      return this.edges.iterator();
    },
    getEdges: function() {
      return this.edges;
    },
    get: function(t) {
      return this.edges.get(t);
    },
    findEqualEdge: function(t) {
      var e = new ei(t.getCoordinates()),
          n = this.ocaMap.get(e);
      return n;
    },
    add: function(t) {
      this.edges.add(t);
      var e = new ei(t.getCoordinates());
      this.ocaMap.put(e, t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ni;
    }
  }), h(ii, ti), e(ii.prototype, {
    insertUniqueEdge: function(t) {
      var e = this.edgeList.findEqualEdge(t);
      if (null !== e) {
        var n = e.getLabel(),
            i = t.getLabel();
        e.isPointwiseEqual(t) || (i = new gn(t.getLabel()), i.flip());
        var r = e.getDepth();
        r.isNull() && r.add(n), r.add(i), n.merge(i);
      } else
        this.edgeList.add(t);
    },
    getGraph: function() {
      return this.graph;
    },
    cancelDuplicateResultEdges: function() {
      for (var t = this.graph.getEdgeEnds().iterator(); t.hasNext(); ) {
        var e = t.next(),
            n = e.getSym();
        e.isInResult() && n.isInResult() && (e.setInResult(!1), n.setInResult(!1));
      }
    },
    isCoveredByLA: function(t) {
      return this.isCovered(t, this.resultLineList) ? !0 : !!this.isCovered(t, this.resultPolyList);
    },
    computeGeometry: function(t, e, n, i) {
      var r = new I;
      return r.addAll(t), r.addAll(e), r.addAll(n), r.isEmpty() ? ii.createEmptyResult(i, this.arg[0].getGeometry(), this.arg[1].getGeometry(), this.geomFact) : this.geomFact.buildGeometry(r);
    },
    mergeSymLabels: function() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getEdges().mergeSymLabels();
      }
    },
    isCovered: function(t, e) {
      for (var n = e.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = this.ptLocator.locate(t, i);
        if (r !== L.EXTERIOR)
          return !0;
      }
      return !1;
    },
    replaceCollapsedEdges: function() {
      for (var t = new I,
          e = this.edgeList.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.isCollapsed() && (e.remove(), t.add(n.getCollapsedEdge()));
      }
      this.edgeList.addAll(t);
    },
    updateNodeLabelling: function() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext(); ) {
        var e = t.next(),
            n = e.getEdges().getLabel();
        e.getLabel().merge(n);
      }
    },
    getResultGeometry: function(t) {
      return this.computeOverlay(t), this.resultGeom;
    },
    insertUniqueEdges: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.insertUniqueEdge(n);
      }
    },
    computeOverlay: function(t) {
      this.copyPoints(0), this.copyPoints(1), this.arg[0].computeSelfNodes(this.li, !1), this.arg[1].computeSelfNodes(this.li, !1), this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !0);
      var e = new I;
      this.arg[0].computeSplitEdges(e), this.arg[1].computeSplitEdges(e);
      this.insertUniqueEdges(e), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), ln.checkValid(this.edgeList.getEdges()), this.graph.addEdges(this.edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(t), this.cancelDuplicateResultEdges();
      var n = new Sn(this.geomFact);
      n.add(this.graph), this.resultPolyList = n.getPolygons();
      var i = new wn(this, this.geomFact, this.ptLocator);
      this.resultLineList = i.build(t);
      var r = new Ln(this, this.geomFact, this.ptLocator);
      this.resultPointList = r.build(t), this.resultGeom = this.computeGeometry(this.resultPointList, this.resultLineList, this.resultPolyList, t);
    },
    labelIncompleteNode: function(t, e) {
      var n = this.ptLocator.locate(t.getCoordinate(), this.arg[e].getGeometry());
      t.getLabel().setLocation(e, n);
    },
    copyPoints: function(t) {
      for (var e = this.arg[t].getNodeIterator(); e.hasNext(); ) {
        var n = e.next(),
            i = this.graph.addNode(n.getCoordinate());
        i.setLabel(t, n.getLabel().getLocation(t));
      }
    },
    findResultAreaEdges: function(t) {
      for (var e = this.graph.getEdgeEnds().iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getLabel();
        i.isArea() && !n.isInteriorAreaEdge() && ii.isResultOfOp(i.getLocation(0, cn.RIGHT), i.getLocation(1, cn.RIGHT), t) && n.setInResult(!0);
      }
    },
    computeLabelsFromDepths: function() {
      for (var t = this.edgeList.iterator(); t.hasNext(); ) {
        var e = t.next(),
            n = e.getLabel(),
            i = e.getDepth();
        if (!i.isNull()) {
          i.normalize();
          for (var r = 0; 2 > r; r++)
            n.isNull(r) || !n.isArea() || i.isNull(r) || (0 === i.getDelta(r) ? n.toLine(r) : (f.isTrue(!i.isNull(r, cn.LEFT), "depth of LEFT side has not been initialized"), n.setLocation(r, cn.LEFT, i.getLocation(r, cn.LEFT)), f.isTrue(!i.isNull(r, cn.RIGHT), "depth of RIGHT side has not been initialized"), n.setLocation(r, cn.RIGHT, i.getLocation(r, cn.RIGHT))));
        }
      }
    },
    computeLabelling: function() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getEdges().computeLabelling(this.arg);
      }
      this.mergeSymLabels(), this.updateNodeLabelling();
    },
    labelIncompleteNodes: function() {
      for (var t = 0,
          e = this.graph.getNodes().iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getLabel();
        n.isIsolated() && (t++, i.isNull(0) ? this.labelIncompleteNode(n, 0) : this.labelIncompleteNode(n, 1)), n.getEdges().updateLabelling(i);
      }
    },
    isCoveredByA: function(t) {
      return !!this.isCovered(t, this.resultPolyList);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ii;
    }
  }), ii.overlayOp = function(t, e, n) {
    var i = new ii(t, e),
        r = i.getResultGeometry(n);
    return r;
  }, ii.intersection = function(t, e) {
    if (t.isEmpty() || e.isEmpty())
      return ii.createEmptyResult(ii.INTERSECTION, t, e, t.getFactory());
    if (t.isGeometryCollection()) {
      var n = e;
      return hn.map(t, {
        interfaces_: function() {
          return [MapOp];
        },
        map: function(t) {
          return t.intersection(n);
        }
      });
    }
    return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), si.overlayOp(t, e, ii.INTERSECTION);
  }, ii.symDifference = function(t, e) {
    if (t.isEmpty() || e.isEmpty()) {
      if (t.isEmpty() && e.isEmpty())
        return ii.createEmptyResult(ii.SYMDIFFERENCE, t, e, t.getFactory());
      if (t.isEmpty())
        return e.copy();
      if (e.isEmpty())
        return t.copy();
    }
    return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), si.overlayOp(t, e, ii.SYMDIFFERENCE);
  }, ii.resultDimension = function(t, e, n) {
    var i = e.getDimension(),
        r = n.getDimension(),
        s = -1;
    switch (t) {
      case ii.INTERSECTION:
        s = Math.min(i, r);
        break;
      case ii.UNION:
        s = Math.max(i, r);
        break;
      case ii.DIFFERENCE:
        s = i;
        break;
      case ii.SYMDIFFERENCE:
        s = Math.max(i, r);
    }
    return s;
  }, ii.createEmptyResult = function(t, e, n, i) {
    var r = null;
    switch (ii.resultDimension(t, e, n)) {
      case -1:
        r = i.createGeometryCollection(new Array(0).fill(null));
        break;
      case 0:
        r = i.createPoint();
        break;
      case 1:
        r = i.createLineString();
        break;
      case 2:
        r = i.createPolygon();
    }
    return r;
  }, ii.difference = function(t, e) {
    return t.isEmpty() ? ii.createEmptyResult(ii.DIFFERENCE, t, e, t.getFactory()) : e.isEmpty() ? t.copy() : (t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), si.overlayOp(t, e, ii.DIFFERENCE));
  }, ii.isResultOfOp = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = t.getLocation(0),
          i = t.getLocation(1);
      return ii.isResultOfOp(n, i, e);
    }
    if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2];
      switch (r === L.BOUNDARY && (r = L.INTERIOR), s === L.BOUNDARY && (s = L.INTERIOR), o) {
        case ii.INTERSECTION:
          return r === L.INTERIOR && s === L.INTERIOR;
        case ii.UNION:
          return r === L.INTERIOR || s === L.INTERIOR;
        case ii.DIFFERENCE:
          return r === L.INTERIOR && s !== L.INTERIOR;
        case ii.SYMDIFFERENCE:
          return r === L.INTERIOR && s !== L.INTERIOR || r !== L.INTERIOR && s === L.INTERIOR;
      }
      return !1;
    }
  }, ii.INTERSECTION = 1, ii.UNION = 2, ii.DIFFERENCE = 3, ii.SYMDIFFERENCE = 4, e(ri.prototype, {
    selfSnap: function(t) {
      var e = new Ie(t),
          n = e.snapTo(t, this.snapTolerance);
      return n;
    },
    removeCommonBits: function(t) {
      this.cbr = new Se, this.cbr.add(t[0]), this.cbr.add(t[1]);
      var e = new Array(2).fill(null);
      return e[0] = this.cbr.removeCommonBits(t[0].copy()), e[1] = this.cbr.removeCommonBits(t[1].copy()), e;
    },
    prepareResult: function(t) {
      return this.cbr.addCommonBits(t), t;
    },
    getResultGeometry: function(t) {
      var e = this.snap(this.geom),
          n = ii.overlayOp(e[0], e[1], t);
      return this.prepareResult(n);
    },
    checkValid: function(t) {
      t.isValid() || A.out.println("Snapped geometry is invalid");
    },
    computeSnapTolerance: function() {
      this.snapTolerance = Ie.computeOverlaySnapTolerance(this.geom[0], this.geom[1]);
    },
    snap: function(t) {
      var e = this.removeCommonBits(t),
          n = Ie.snap(e[0], e[1], this.snapTolerance);
      return n;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ri;
    }
  }), ri.overlayOp = function(t, e, n) {
    var i = new ri(t, e);
    return i.getResultGeometry(n);
  }, ri.union = function(t, e) {
    return ri.overlayOp(t, e, ii.UNION);
  }, ri.intersection = function(t, e) {
    return ri.overlayOp(t, e, ii.INTERSECTION);
  }, ri.symDifference = function(t, e) {
    return ri.overlayOp(t, e, ii.SYMDIFFERENCE);
  }, ri.difference = function(t, e) {
    return ri.overlayOp(t, e, ii.DIFFERENCE);
  }, e(si.prototype, {
    getResultGeometry: function(t) {
      var e = null,
          n = !1,
          i = null;
      try {
        e = ii.overlayOp(this.geom[0], this.geom[1], t);
        var r = !0;
        r && (n = !0);
      } catch (t) {
        if (!(t instanceof l))
          throw t;
        i = t;
      } finally {}
      if (!n)
        try {
          e = ri.overlayOp(this.geom[0], this.geom[1], t);
        } catch (t) {
          throw t instanceof l ? i : t;
        } finally {}
      return e;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return si;
    }
  }), si.overlayOp = function(t, e, n) {
    var i = new si(t, e);
    return i.getResultGeometry(n);
  }, si.union = function(t, e) {
    return si.overlayOp(t, e, ii.UNION);
  }, si.intersection = function(t, e) {
    return si.overlayOp(t, e, ii.INTERSECTION);
  }, si.symDifference = function(t, e) {
    return si.overlayOp(t, e, ii.SYMDIFFERENCE);
  }, si.difference = function(t, e) {
    return si.overlayOp(t, e, ii.DIFFERENCE);
  }, e(oi.prototype, {
    addPolygon: function(t) {
      if (t.isEmpty())
        return null;
      var e = null,
          n = 0,
          i = this.horizontalBisector(t);
      if (0 === i.getLength())
        n = 0, e = i.getCoordinate();
      else {
        var r = si.overlayOp(i, t, ii.INTERSECTION),
            s = this.widestGeometry(r);
        n = s.getEnvelopeInternal().getWidth(), e = oi.centre(s.getEnvelopeInternal());
      }
      (null === this.interiorPoint || n > this.maxWidth) && (this.interiorPoint = e, this.maxWidth = n);
    },
    getInteriorPoint: function() {
      return this.interiorPoint;
    },
    widestGeometry: function t() {
      if (arguments[0] instanceof ft) {
        var e = arguments[0];
        if (e.isEmpty())
          return e;
        for (var t = e.getGeometryN(0),
            n = 1; n < e.getNumGeometries(); n++)
          e.getGeometryN(n).getEnvelopeInternal().getWidth() > t.getEnvelopeInternal().getWidth() && (t = e.getGeometryN(n));
        return t;
      }
      if (arguments[0] instanceof B) {
        var i = arguments[0];
        return i instanceof ft ? this.widestGeometry(i) : i;
      }
    },
    horizontalBisector: function(t) {
      var e = t.getEnvelopeInternal(),
          n = ai.getBisectorY(t);
      return this.factory.createLineString([new g(e.getMinX(), n), new g(e.getMaxX(), n)]);
    },
    add: function(t) {
      if (t instanceof Tt)
        this.addPolygon(t);
      else if (t instanceof ft)
        for (var e = t,
            n = 0; n < e.getNumGeometries(); n++)
          this.add(e.getGeometryN(n));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return oi;
    }
  }), oi.centre = function(t) {
    return new g(oi.avg(t.getMinX(), t.getMaxX()), oi.avg(t.getMinY(), t.getMaxY()));
  }, oi.avg = function(t, e) {
    return (t + e) / 2;
  }, e(ai.prototype, {
    updateInterval: function(t) {
      t <= this.centreY ? t > this.loY && (this.loY = t) : t > this.centreY && t < this.hiY && (this.hiY = t);
    },
    getBisectorY: function() {
      this.process(this.poly.getExteriorRing());
      for (var t = 0; t < this.poly.getNumInteriorRing(); t++)
        this.process(this.poly.getInteriorRingN(t));
      var e = oi.avg(this.hiY, this.loY);
      return e;
    },
    process: function(t) {
      for (var e = t.getCoordinateSequence(),
          n = 0; n < e.size(); n++) {
        var i = e.getY(n);
        this.updateInterval(i);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ai;
    }
  }), ai.getBisectorY = function(t) {
    var e = new ai(t);
    return e.getBisectorY();
  }, oi.SafeBisectorFinder = ai, e(ui.prototype, {
    addEndpoints: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        if (t instanceof St)
          this.addEndpoints(t.getCoordinates());
        else if (t instanceof ft)
          for (var e = t,
              n = 0; n < e.getNumGeometries(); n++)
            this.addEndpoints(e.getGeometryN(n));
      } else if (arguments[0] instanceof Array) {
        var i = arguments[0];
        this.add(i[0]), this.add(i[i.length - 1]);
      }
    },
    getInteriorPoint: function() {
      return this.interiorPoint;
    },
    addInterior: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        if (t instanceof St)
          this.addInterior(t.getCoordinates());
        else if (t instanceof ft)
          for (var e = t,
              n = 0; n < e.getNumGeometries(); n++)
            this.addInterior(e.getGeometryN(n));
      } else if (arguments[0] instanceof Array)
        for (var i = arguments[0],
            n = 1; n < i.length - 1; n++)
          this.add(i[n]);
    },
    add: function(t) {
      var e = t.distance(this.centroid);
      e < this.minDistance && (this.interiorPoint = new g(t), this.minDistance = e);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ui;
    }
  }), e(li.prototype, {
    getInteriorPoint: function() {
      return this.interiorPoint;
    },
    add: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        if (t instanceof Lt)
          this.add(t.getCoordinate());
        else if (t instanceof ft)
          for (var e = t,
              n = 0; n < e.getNumGeometries(); n++)
            this.add(e.getGeometryN(n));
      } else if (arguments[0] instanceof g) {
        var i = arguments[0],
            r = i.distance(this.centroid);
        r < this.minDistance && (this.interiorPoint = new g(i), this.minDistance = r);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return li;
    }
  }), e(hi.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return hi;
    }
  }), hi.toDegrees = function(t) {
    return 180 * t / Math.PI;
  }, hi.normalize = function(t) {
    for (; t > Math.PI; )
      t -= hi.PI_TIMES_2;
    for (; t <= -Math.PI; )
      t += hi.PI_TIMES_2;
    return t;
  }, hi.angle = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return Math.atan2(t.y, t.x);
    }
    if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1],
          i = n.x - e.x,
          r = n.y - e.y;
      return Math.atan2(r, i);
    }
  }, hi.isAcute = function(t, e, n) {
    var i = t.x - e.x,
        r = t.y - e.y,
        s = n.x - e.x,
        o = n.y - e.y,
        a = i * s + r * o;
    return a > 0;
  }, hi.isObtuse = function(t, e, n) {
    var i = t.x - e.x,
        r = t.y - e.y,
        s = n.x - e.x,
        o = n.y - e.y,
        a = i * s + r * o;
    return 0 > a;
  }, hi.interiorAngle = function(t, e, n) {
    var i = hi.angle(e, t),
        r = hi.angle(e, n);
    return Math.abs(r - i);
  }, hi.normalizePositive = function(t) {
    if (0 > t) {
      for (; 0 > t; )
        t += hi.PI_TIMES_2;
      t >= hi.PI_TIMES_2 && (t = 0);
    } else {
      for (; t >= hi.PI_TIMES_2; )
        t -= hi.PI_TIMES_2;
      0 > t && (t = 0);
    }
    return t;
  }, hi.angleBetween = function(t, e, n) {
    var i = hi.angle(e, t),
        r = hi.angle(e, n);
    return hi.diff(i, r);
  }, hi.diff = function(t, e) {
    var n = null;
    return n = e > t ? e - t : t - e, n > Math.PI && (n = 2 * Math.PI - n), n;
  }, hi.toRadians = function(t) {
    return t * Math.PI / 180;
  }, hi.getTurn = function(t, e) {
    var n = Math.sin(e - t);
    return n > 0 ? hi.COUNTERCLOCKWISE : 0 > n ? hi.CLOCKWISE : hi.NONE;
  }, hi.angleBetweenOriented = function(t, e, n) {
    var i = hi.angle(e, t),
        r = hi.angle(e, n),
        s = r - i;
    return s <= -Math.PI ? s + hi.PI_TIMES_2 : s > Math.PI ? s - hi.PI_TIMES_2 : s;
  }, hi.PI_TIMES_2 = 2 * Math.PI, hi.PI_OVER_2 = Math.PI / 2, hi.PI_OVER_4 = Math.PI / 4, hi.COUNTERCLOCKWISE = he.COUNTERCLOCKWISE, hi.CLOCKWISE = he.CLOCKWISE, hi.NONE = he.COLLINEAR, e(ci.prototype, {
    area: function() {
      return ci.area(this.p0, this.p1, this.p2);
    },
    signedArea: function() {
      return ci.signedArea(this.p0, this.p1, this.p2);
    },
    interpolateZ: function(t) {
      if (null === t)
        throw new i("Supplied point is null.");
      return ci.interpolateZ(t, this.p0, this.p1, this.p2);
    },
    longestSideLength: function() {
      return ci.longestSideLength(this.p0, this.p1, this.p2);
    },
    isAcute: function() {
      return ci.isAcute(this.p0, this.p1, this.p2);
    },
    circumcentre: function() {
      return ci.circumcentre(this.p0, this.p1, this.p2);
    },
    area3D: function() {
      return ci.area3D(this.p0, this.p1, this.p2);
    },
    centroid: function() {
      return ci.centroid(this.p0, this.p1, this.p2);
    },
    inCentre: function() {
      return ci.inCentre(this.p0, this.p1, this.p2);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ci;
    }
  }), ci.area = function(t, e, n) {
    return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
  }, ci.signedArea = function(t, e, n) {
    return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
  }, ci.det = function(t, e, n, i) {
    return t * i - e * n;
  }, ci.interpolateZ = function(t, e, n, i) {
    var r = e.x,
        s = e.y,
        o = n.x - r,
        a = i.x - r,
        u = n.y - s,
        l = i.y - s,
        h = o * l - a * u,
        c = t.x - r,
        f = t.y - s,
        g = (l * c - a * f) / h,
        d = (-u * c + o * f) / h,
        p = e.z + g * (n.z - e.z) + d * (i.z - e.z);
    return p;
  }, ci.longestSideLength = function(t, e, n) {
    var i = t.distance(e),
        r = e.distance(n),
        s = n.distance(t),
        o = i;
    return r > o && (o = r), s > o && (o = s), o;
  }, ci.isAcute = function(t, e, n) {
    return hi.isAcute(t, e, n) && hi.isAcute(e, n, t) ? !!hi.isAcute(n, t, e) : !1;
  }, ci.circumcentre = function(t, e, n) {
    var i = n.x,
        r = n.y,
        s = t.x - i,
        o = t.y - r,
        a = e.x - i,
        u = e.y - r,
        l = 2 * ci.det(s, o, a, u),
        h = ci.det(o, s * s + o * o, u, a * a + u * u),
        c = ci.det(s, s * s + o * o, a, a * a + u * u),
        f = i - h / l,
        d = r + c / l;
    return new g(f, d);
  }, ci.perpendicularBisector = function(t, e) {
    var n = e.x - t.x,
        i = e.y - t.y,
        r = new F(t.x + n / 2, t.y + i / 2, 1),
        s = new F(t.x - i + n / 2, t.y + n + i / 2, 1);
    return new F(r, s);
  }, ci.angleBisector = function(t, e, n) {
    var i = e.distance(t),
        r = e.distance(n),
        s = i / (i + r),
        o = n.x - t.x,
        a = n.y - t.y,
        u = new g(t.x + s * o, t.y + s * a);
    return u;
  }, ci.area3D = function(t, e, n) {
    var i = e.x - t.x,
        r = e.y - t.y,
        s = e.z - t.z,
        o = n.x - t.x,
        a = n.y - t.y,
        u = n.z - t.z,
        l = r * u - s * a,
        h = s * o - i * u,
        c = i * a - r * o,
        f = l * l + h * h + c * c,
        g = Math.sqrt(f) / 2;
    return g;
  }, ci.centroid = function(t, e, n) {
    var i = (t.x + e.x + n.x) / 3,
        r = (t.y + e.y + n.y) / 3;
    return new g(i, r);
  }, ci.inCentre = function(t, e, n) {
    var i = e.distance(n),
        r = t.distance(n),
        s = t.distance(e),
        o = i + r + s,
        a = (i * t.x + r * e.x + s * n.x) / o,
        u = (i * t.y + r * e.y + s * n.y) / o;
    return new g(a, u);
  }, e(fi.prototype, {
    getRadius: function() {
      return this.compute(), this.radius;
    },
    getDiameter: function() {
      switch (this.compute(), this.extremalPts.length) {
        case 0:
          return this.input.getFactory().createLineString();
        case 1:
          return this.input.getFactory().createPoint(this.centre);
      }
      var t = this.extremalPts[0],
          e = this.extremalPts[1];
      return this.input.getFactory().createLineString([t, e]);
    },
    getExtremalPoints: function() {
      return this.compute(), this.extremalPts;
    },
    computeCirclePoints: function() {
      if (this.input.isEmpty())
        return this.extremalPts = new Array(0).fill(null), null;
      if (1 === this.input.getNumPoints()) {
        var t = this.input.getCoordinates();
        return this.extremalPts = [new g(t[0])], null;
      }
      var e = this.input.convexHull(),
          n = e.getCoordinates(),
          t = n;
      if (n[0].equals2D(n[n.length - 1]) && (t = new Array(n.length - 1).fill(null), H.copyDeep(n, 0, t, 0, n.length - 1)), t.length <= 2)
        return this.extremalPts = H.copyDeep(t), null;
      for (var i = fi.lowestPoint(t),
          r = fi.pointWitMinAngleWithX(t, i),
          s = 0; s < t.length; s++) {
        var o = fi.pointWithMinAngleWithSegment(t, i, r);
        if (hi.isObtuse(i, o, r))
          return this.extremalPts = [new g(i), new g(r)], null;
        if (hi.isObtuse(o, i, r))
          i = o;
        else {
          if (!hi.isObtuse(o, r, i))
            return this.extremalPts = [new g(i), new g(r), new g(o)], null;
          r = o;
        }
      }
      f.shouldNeverReachHere("Logic failure in Minimum Bounding Circle algorithm!");
    },
    compute: function() {
      return null !== this.extremalPts ? null : (this.computeCirclePoints(), this.computeCentre(), void(null !== this.centre && (this.radius = this.centre.distance(this.extremalPts[0]))));
    },
    getFarthestPoints: function() {
      switch (this.compute(), this.extremalPts.length) {
        case 0:
          return this.input.getFactory().createLineString();
        case 1:
          return this.input.getFactory().createPoint(this.centre);
      }
      var t = this.extremalPts[0],
          e = this.extremalPts[this.extremalPts.length - 1];
      return this.input.getFactory().createLineString([t, e]);
    },
    getCircle: function() {
      if (this.compute(), null === this.centre)
        return this.input.getFactory().createPolygon();
      var t = this.input.getFactory().createPoint(this.centre);
      return 0 === this.radius ? t : t.buffer(this.radius);
    },
    getCentre: function() {
      return this.compute(), this.centre;
    },
    computeCentre: function() {
      switch (this.extremalPts.length) {
        case 0:
          this.centre = null;
          break;
        case 1:
          this.centre = this.extremalPts[0];
          break;
        case 2:
          this.centre = new g((this.extremalPts[0].x + this.extremalPts[1].x) / 2, (this.extremalPts[0].y + this.extremalPts[1].y) / 2);
          break;
        case 3:
          this.centre = ci.circumcentre(this.extremalPts[0], this.extremalPts[1], this.extremalPts[2]);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return fi;
    }
  }), fi.pointWitMinAngleWithX = function(t, e) {
    for (var n = r.MAX_VALUE,
        i = null,
        s = 0; s < t.length; s++) {
      var o = t[s];
      if (o !== e) {
        var a = o.x - e.x,
            u = o.y - e.y;
        0 > u && (u = -u);
        var l = Math.sqrt(a * a + u * u),
            h = u / l;
        n > h && (n = h, i = o);
      }
    }
    return i;
  }, fi.lowestPoint = function(t) {
    for (var e = t[0],
        n = 1; n < t.length; n++)
      t[n].y < e.y && (e = t[n]);
    return e;
  }, fi.pointWithMinAngleWithSegment = function(t, e, n) {
    for (var i = r.MAX_VALUE,
        s = null,
        o = 0; o < t.length; o++) {
      var a = t[o];
      if (a !== e && a !== n) {
        var u = hi.angleBetween(e, a, n);
        i > u && (i = u, s = a);
      }
    }
    return s;
  }, e(gi.prototype, {
    getWidthCoordinate: function() {
      return this.computeMinimumDiameter(), this.minWidthPt;
    },
    getSupportingSegment: function() {
      return this.computeMinimumDiameter(), this.inputGeom.getFactory().createLineString([this.minBaseSeg.p0, this.minBaseSeg.p1]);
    },
    getDiameter: function() {
      if (this.computeMinimumDiameter(), null === this.minWidthPt)
        return this.inputGeom.getFactory().createLineString(null);
      var t = this.minBaseSeg.project(this.minWidthPt);
      return this.inputGeom.getFactory().createLineString([t, this.minWidthPt]);
    },
    computeWidthConvex: function(t) {
      t instanceof Tt ? this.convexHullPts = t.getExteriorRing().getCoordinates() : this.convexHullPts = t.getCoordinates(), 0 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = null, this.minBaseSeg = null) : 1 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = this.convexHullPts[0], this.minBaseSeg.p0 = this.convexHullPts[0], this.minBaseSeg.p1 = this.convexHullPts[0]) : 2 === this.convexHullPts.length || 3 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = this.convexHullPts[0], this.minBaseSeg.p0 = this.convexHullPts[0], this.minBaseSeg.p1 = this.convexHullPts[1]) : this.computeConvexRingMinDiameter(this.convexHullPts);
    },
    computeConvexRingMinDiameter: function(t) {
      this.minWidth = r.MAX_VALUE;
      for (var e = 1,
          n = new ce,
          i = 0; i < t.length - 1; i++)
        n.p0 = t[i], n.p1 = t[i + 1], e = this.findMaxPerpDistance(t, n, e);
    },
    computeMinimumDiameter: function() {
      if (null !== this.minWidthPt)
        return null;
      if (this.isConvex)
        this.computeWidthConvex(this.inputGeom);
      else {
        var t = new me(this.inputGeom).getConvexHull();
        this.computeWidthConvex(t);
      }
    },
    getLength: function() {
      return this.computeMinimumDiameter(), this.minWidth;
    },
    findMaxPerpDistance: function(t, e, n) {
      for (var i = e.distancePerpendicular(t[n]),
          r = i,
          s = n,
          o = s; r >= i; )
        i = r, s = o, o = gi.nextIndex(t, s), r = e.distancePerpendicular(t[o]);
      return i < this.minWidth && (this.minPtIndex = s, this.minWidth = i, this.minWidthPt = t[this.minPtIndex], this.minBaseSeg = new ce(e)), s;
    },
    getMinimumRectangle: function() {
      if (this.computeMinimumDiameter(), 0 === this.minWidth)
        return this.minBaseSeg.p0.equals2D(this.minBaseSeg.p1) ? this.inputGeom.getFactory().createPoint(this.minBaseSeg.p0) : this.minBaseSeg.toGeometry(this.inputGeom.getFactory());
      for (var t = this.minBaseSeg.p1.x - this.minBaseSeg.p0.x,
          e = this.minBaseSeg.p1.y - this.minBaseSeg.p0.y,
          n = r.MAX_VALUE,
          i = -r.MAX_VALUE,
          s = r.MAX_VALUE,
          o = -r.MAX_VALUE,
          a = 0; a < this.convexHullPts.length; a++) {
        var u = gi.computeC(t, e, this.convexHullPts[a]);
        u > i && (i = u), n > u && (n = u);
        var l = gi.computeC(-e, t, this.convexHullPts[a]);
        l > o && (o = l), s > l && (s = l);
      }
      var h = gi.computeSegmentForLine(-t, -e, o),
          c = gi.computeSegmentForLine(-t, -e, s),
          f = gi.computeSegmentForLine(-e, t, i),
          g = gi.computeSegmentForLine(-e, t, n),
          d = f.lineIntersection(h),
          p = g.lineIntersection(h),
          v = g.lineIntersection(c),
          m = f.lineIntersection(c),
          y = this.inputGeom.getFactory().createLinearRing([d, p, v, m, d]);
      return this.inputGeom.getFactory().createPolygon(y, null);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return gi;
    }
  }), gi.nextIndex = function(t, e) {
    return e++, e >= t.length && (e = 0), e;
  }, gi.computeC = function(t, e, n) {
    return t * n.y - e * n.x;
  }, gi.getMinimumDiameter = function(t) {
    return new gi(t).getDiameter();
  }, gi.getMinimumRectangle = function(t) {
    return new gi(t).getMinimumRectangle();
  }, gi.computeSegmentForLine = function(t, e, n) {
    var i = null,
        r = null;
    return Math.abs(e) > Math.abs(t) ? (i = new g(0, n / e), r = new g(1, n / e - t / e)) : (i = new g(n / t, 0), r = new g(n / t - e / t, 1)), new ce(i, r);
  };
  var co = Object.freeze({
    Centroid: ge,
    CGAlgorithms: he,
    ConvexHull: me,
    InteriorPointArea: oi,
    InteriorPointLine: ui,
    InteriorPointPoint: li,
    RobustLineIntersector: ae,
    MinimumBoundingCircle: fi,
    MinimumDiameter: gi
  });
  e(di.prototype, {
    getResultGeometry: function() {
      return new pi(this.distanceTolerance).transform(this.inputGeom);
    },
    setDistanceTolerance: function(t) {
      if (0 >= t)
        throw new i("Tolerance must be positive");
      this.distanceTolerance = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return di;
    }
  }), di.densifyPoints = function(t, e, n) {
    for (var i = new ce,
        r = new N,
        s = 0; s < t.length - 1; s++) {
      i.p0 = t[s], i.p1 = t[s + 1], r.add(i.p0, !1);
      var o = i.getLength(),
          a = Math.trunc(o / e) + 1;
      if (a > 1)
        for (var u = o / a,
            l = 1; a > l; l++) {
          var h = l * u / o,
              c = i.pointAlong(h);
          n.makePrecise(c), r.add(c, !1);
        }
    }
    return r.add(t[t.length - 1], !1), r.toCoordinateArray();
  }, di.densify = function(t, e) {
    var n = new di(t);
    return n.setDistanceTolerance(e), n.getResultGeometry();
  }, h(pi, xe), e(pi.prototype, {
    transformMultiPolygon: function(t, e) {
      var n = xe.prototype.transformMultiPolygon.call(this, t, e);
      return this.createValidArea(n);
    },
    transformPolygon: function(t, e) {
      var n = xe.prototype.transformPolygon.call(this, t, e);
      return e instanceof Ot ? n : this.createValidArea(n);
    },
    transformCoordinates: function(t, e) {
      var n = t.toCoordinateArray(),
          i = di.densifyPoints(n, this.distanceTolerance, e.getPrecisionModel());
      return e instanceof St && 1 === i.length && (i = new Array(0).fill(null)), this.factory.getCoordinateSequenceFactory().create(i);
    },
    createValidArea: function(t) {
      return t.buffer(0);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return pi;
    }
  }), di.DensifyTransformer = pi;
  var fo = Object.freeze({Densifier: di});
  e(vi.prototype, {
    find: function(t) {
      var e = this;
      do {
        if (null === e)
          return null;
        if (e.dest().equals2D(t))
          return e;
        e = e.oNext();
      } while (e !== this);
      return null;
    },
    dest: function() {
      return this._sym._orig;
    },
    oNext: function() {
      return this._sym._next;
    },
    insert: function(t) {
      if (this.oNext() === this)
        return this.insertAfter(t), null;
      var e = this.compareTo(t),
          n = this;
      do {
        var i = n.oNext(),
            r = i.compareTo(t);
        if (r !== e || i === this)
          return n.insertAfter(t), null;
        n = i;
      } while (n !== this);
      f.shouldNeverReachHere();
    },
    insertAfter: function(t) {
      f.equals(this._orig, t.orig());
      var e = this.oNext();
      this._sym.setNext(t), t.sym().setNext(e);
    },
    degree: function t() {
      var t = 0,
          e = this;
      do
        t++, e = e.oNext();
 while (e !== this);
      return t;
    },
    equals: function() {
      if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        return this._orig.equals2D(t) && this._sym._orig.equals(e);
      }
    },
    deltaY: function() {
      return this._sym._orig.y - this._orig.y;
    },
    sym: function() {
      return this._sym;
    },
    prev: function() {
      return this._sym.next()._sym;
    },
    compareAngularDirection: function(t) {
      var e = this.deltaX(),
          n = this.deltaY(),
          i = t.deltaX(),
          r = t.deltaY();
      if (e === i && n === r)
        return 0;
      var s = Je.quadrant(e, n),
          o = Je.quadrant(i, r);
      return s > o ? 1 : o > s ? -1 : he.computeOrientation(t._orig, t.dest(), this.dest());
    },
    prevNode: function() {
      for (var t = this; 2 === t.degree(); )
        if (t = t.prev(), t === this)
          return null;
      return t;
    },
    compareTo: function(t) {
      var e = t,
          n = this.compareAngularDirection(e);
      return n;
    },
    next: function() {
      return this._next;
    },
    setSym: function(t) {
      this._sym = t;
    },
    orig: function() {
      return this._orig;
    },
    toString: function() {
      return "HE(" + this._orig.x + " " + this._orig.y + ", " + this._sym._orig.x + " " + this._sym._orig.y + ")";
    },
    setNext: function(t) {
      this._next = t;
    },
    init: function(t) {
      this.setSym(t), t.setSym(this), this.setNext(t), t.setNext(this);
    },
    deltaX: function() {
      return this._sym._orig.x - this._orig.x;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return vi;
    }
  }), vi.init = function(t, e) {
    if (null !== t._sym || null !== e._sym || null !== t._next || null !== e._next)
      throw new IllegalStateException("Edges are already initialized");
    return t.init(e), t;
  }, vi.create = function(t, e) {
    var n = new vi(t),
        i = new vi(e);
    return n.init(i), n;
  }, h(mi, vi), e(mi.prototype, {
    mark: function() {
      this._isMarked = !0;
    },
    setMark: function(t) {
      this._isMarked = t;
    },
    isMarked: function() {
      return this._isMarked;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return mi;
    }
  }), mi.setMarkBoth = function(t, e) {
    t.setMark(e), t.sym().setMark(e);
  }, mi.isMarked = function(t) {
    return t.isMarked();
  }, mi.setMark = function(t, e) {
    t.setMark(e);
  }, mi.markBoth = function(t) {
    t.mark(), t.sym().mark();
  }, mi.mark = function(t) {
    t.mark();
  }, e(yi.prototype, {
    insert: function(t, e, n) {
      var i = this.create(t, e);
      null !== n ? n.insert(i) : this.vertexMap.put(t, i);
      var r = this.vertexMap.get(e);
      return null !== r ? r.insert(i.sym()) : this.vertexMap.put(e, i.sym()), i;
    },
    create: function(t, e) {
      var n = this.createEdge(t),
          i = this.createEdge(e);
      return vi.init(n, i), n;
    },
    createEdge: function(t) {
      return new vi(t);
    },
    addEdge: function(t, e) {
      if (!yi.isValidEdge(t, e))
        return null;
      var n = this.vertexMap.get(t),
          i = null;
      if (null !== n && (i = n.find(e)), null !== i)
        return i;
      var r = this.insert(t, e, n);
      return r;
    },
    getVertexEdges: function() {
      return this.vertexMap.values();
    },
    findEdge: function(t, e) {
      var n = this.vertexMap.get(t);
      return null === n ? null : n.find(e);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return yi;
    }
  }), yi.isValidEdge = function(t, e) {
    var n = e.compareTo(t);
    return 0 !== n;
  }, h(xi, mi), e(xi.prototype, {
    setStart: function() {
      this._isStart = !0;
    },
    isStart: function() {
      return this._isStart;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return xi;
    }
  }), h(Ei, yi), e(Ei.prototype, {
    createEdge: function(t) {
      return new xi(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ei;
    }
  }), e(Ii.prototype, {
    addLine: function(t) {
      this.lines.add(this.factory.createLineString(t.toCoordinateArray()));
    },
    updateRingStartEdge: function(t) {
      return t.isStart() || (t = t.sym(), t.isStart()) ? null === this.ringStartEdge ? (this.ringStartEdge = t, null) : void(t.orig().compareTo(this.ringStartEdge.orig()) < 0 && (this.ringStartEdge = t)) : null;
    },
    getResult: function() {
      return null === this.result && this.computeResult(), this.result;
    },
    process: function(t) {
      var e = t.prevNode();
      null === e && (e = t), this.stackEdges(e), this.buildLines();
    },
    buildRing: function(t) {
      var e = new N,
          n = t;
      for (e.add(n.orig().copy(), !1); 2 === n.sym().degree(); ) {
        var i = n.next();
        if (i === t)
          break;
        e.add(i.orig().copy(), !1), n = i;
      }
      e.add(n.dest().copy(), !1), this.addLine(e);
    },
    buildLine: function(t) {
      var e = new N,
          n = t;
      for (this.ringStartEdge = null, mi.markBoth(n), e.add(n.orig().copy(), !1); 2 === n.sym().degree(); ) {
        this.updateRingStartEdge(n);
        var i = n.next();
        if (i === t)
          return this.buildRing(this.ringStartEdge), null;
        e.add(i.orig().copy(), !1), n = i, mi.markBoth(n);
      }
      e.add(n.dest().copy(), !1), this.stackEdges(n.sym()), this.addLine(e);
    },
    stackEdges: function(t) {
      var e = t;
      do
        mi.isMarked(e) || this.nodeEdgeStack.add(e), e = e.oNext();
 while (e !== t);
    },
    computeResult: function() {
      for (var t = this.graph.getVertexEdges(),
          e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        mi.isMarked(n) || this.process(n);
      }
      this.result = this.factory.buildGeometry(this.lines);
    },
    buildLines: function() {
      for (; !this.nodeEdgeStack.empty(); ) {
        var t = this.nodeEdgeStack.pop();
        mi.isMarked(t) || this.buildLine(t);
      }
    },
    add: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        t.apply({
          interfaces_: function() {
            return [q];
          },
          filter: function(t) {
            t instanceof St && this.add(t);
          }
        });
      } else if (R(arguments[0], v))
        for (var e = arguments[0],
            n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.add(i);
        }
      else if (arguments[0] instanceof St) {
        var r = arguments[0];
        null === this.factory && (this.factory = r.getFactory());
        for (var s = r.getCoordinateSequence(),
            o = !1,
            n = 1; n < s.size(); n++) {
          var a = this.graph.addEdge(s.getCoordinate(n - 1), s.getCoordinate(n));
          null !== a && (o || (a.setStart(), o = !0));
        }
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ii;
    }
  }), Ii.dissolve = function(t) {
    var e = new Ii;
    return e.add(t), e.getResult();
  };
  var go = Object.freeze({LineDissolver: Ii});
  e(Ni.prototype, {
    hasChildren: function() {
      for (var t = 0; 4 > t; t++)
        if (null !== this.subnode[t])
          return !0;
      return !1;
    },
    isPrunable: function() {
      return !(this.hasChildren() || this.hasItems());
    },
    addAllItems: function(t) {
      t.addAll(this.items);
      for (var e = 0; 4 > e; e++)
        null !== this.subnode[e] && this.subnode[e].addAllItems(t);
      return t;
    },
    getNodeCount: function() {
      for (var t = 0,
          e = 0; 4 > e; e++)
        null !== this.subnode[e] && (t += this.subnode[e].size());
      return t + 1;
    },
    size: function() {
      for (var t = 0,
          e = 0; 4 > e; e++)
        null !== this.subnode[e] && (t += this.subnode[e].size());
      return t + this.items.size();
    },
    addAllItemsFromOverlapping: function(t, e) {
      if (!this.isSearchMatch(t))
        return null;
      e.addAll(this.items);
      for (var n = 0; 4 > n; n++)
        null !== this.subnode[n] && this.subnode[n].addAllItemsFromOverlapping(t, e);
    },
    visitItems: function(t, e) {
      for (var n = this.items.iterator(); n.hasNext(); )
        e.visitItem(n.next());
    },
    hasItems: function() {
      return !this.items.isEmpty();
    },
    remove: function(t, e) {
      if (!this.isSearchMatch(t))
        return !1;
      for (var n = !1,
          i = 0; 4 > i; i++)
        if (null !== this.subnode[i] && (n = this.subnode[i].remove(t, e))) {
          this.subnode[i].isPrunable() && (this.subnode[i] = null);
          break;
        }
      return n ? n : n = this.items.remove(e);
    },
    visit: function(t, e) {
      if (!this.isSearchMatch(t))
        return null;
      this.visitItems(t, e);
      for (var n = 0; 4 > n; n++)
        null !== this.subnode[n] && this.subnode[n].visit(t, e);
    },
    getItems: function() {
      return this.items;
    },
    depth: function() {
      for (var t = 0,
          e = 0; 4 > e; e++)
        if (null !== this.subnode[e]) {
          var n = this.subnode[e].depth();
          n > t && (t = n);
        }
      return t + 1;
    },
    isEmpty: function t() {
      var t = !0;
      this.items.isEmpty() || (t = !1);
      for (var e = 0; 4 > e; e++)
        null !== this.subnode[e] && (this.subnode[e].isEmpty() || (t = !1));
      return t;
    },
    add: function(t) {
      this.items.add(t);
    },
    interfaces_: function() {
      return [u];
    },
    getClass: function() {
      return Ni;
    }
  }), Ni.getSubnodeIndex = function(t, e, n) {
    var i = -1;
    return t.getMinX() >= e && (t.getMinY() >= n && (i = 3), t.getMaxY() <= n && (i = 1)), t.getMaxX() <= e && (t.getMinY() >= n && (i = 2), t.getMaxY() <= n && (i = 0)), i;
  }, Ci.exponent = function(t) {
    return Si(64, t) - 1023;
  }, Ci.powerOf2 = function(t) {
    return Math.pow(2, t);
  }, e(wi.prototype, {
    getLevel: function() {
      return this.level;
    },
    computeKey: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        for (this.level = wi.computeQuadLevel(t), this.env = new C, this.computeKey(this.level, t); !this.env.contains(t); )
          this.level += 1, this.computeKey(this.level, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = Ci.powerOf2(e);
        this.pt.x = Math.floor(n.getMinX() / i) * i, this.pt.y = Math.floor(n.getMinY() / i) * i, this.env.init(this.pt.x, this.pt.x + i, this.pt.y, this.pt.y + i);
      }
    },
    getEnvelope: function() {
      return this.env;
    },
    getCentre: function() {
      return new g((this.env.getMinX() + this.env.getMaxX()) / 2, (this.env.getMinY() + this.env.getMaxY()) / 2);
    },
    getPoint: function() {
      return this.pt;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return wi;
    }
  }), wi.computeQuadLevel = function(t) {
    var e = t.getWidth(),
        n = t.getHeight(),
        i = e > n ? e : n,
        r = Ci.exponent(i) + 1;
    return r;
  }, h(Li, Ni), e(Li.prototype, {
    find: function(t) {
      var e = Ni.getSubnodeIndex(t, this.centrex, this.centrey);
      if (-1 === e)
        return this;
      if (null !== this.subnode[e]) {
        var n = this.subnode[e];
        return n.find(t);
      }
      return this;
    },
    isSearchMatch: function(t) {
      return this.env.intersects(t);
    },
    getSubnode: function(t) {
      return null === this.subnode[t] && (this.subnode[t] = this.createSubnode(t)), this.subnode[t];
    },
    getEnvelope: function() {
      return this.env;
    },
    getNode: function(t) {
      var e = Ni.getSubnodeIndex(t, this.centrex, this.centrey);
      if (-1 !== e) {
        var n = this.getSubnode(e);
        return n.getNode(t);
      }
      return this;
    },
    createSubnode: function(t) {
      var e = 0,
          n = 0,
          i = 0,
          r = 0;
      switch (t) {
        case 0:
          e = this.env.getMinX(), n = this.centrex, i = this.env.getMinY(), r = this.centrey;
          break;
        case 1:
          e = this.centrex, n = this.env.getMaxX(), i = this.env.getMinY(), r = this.centrey;
          break;
        case 2:
          e = this.env.getMinX(), n = this.centrex, i = this.centrey, r = this.env.getMaxY();
          break;
        case 3:
          e = this.centrex, n = this.env.getMaxX(), i = this.centrey, r = this.env.getMaxY();
      }
      var s = new C(e, n, i, r),
          o = new Li(s, this.level - 1);
      return o;
    },
    insertNode: function(t) {
      f.isTrue(null === this.env || this.env.contains(t.env));
      var e = Ni.getSubnodeIndex(t.env, this.centrex, this.centrey);
      if (t.level === this.level - 1)
        this.subnode[e] = t;
      else {
        var n = this.createSubnode(e);
        n.insertNode(t), this.subnode[e] = n;
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Li;
    }
  }), Li.createNode = function(t) {
    var e = new wi(t),
        n = new Li(e.getEnvelope(), e.getLevel());
    return n;
  }, Li.createExpanded = function(t, e) {
    var n = new C(e);
    null !== t && n.expandToInclude(t.env);
    var i = Li.createNode(n);
    return null !== t && i.insertNode(t), i;
  }, e(Ri.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ri;
    }
  }), Ri.isZeroWidth = function(t, e) {
    var n = e - t;
    if (0 === n)
      return !0;
    var i = Math.max(Math.abs(t), Math.abs(e)),
        r = n / i,
        s = Ci.exponent(r);
    return s <= Ri.MIN_BINARY_EXPONENT;
  }, Ri.MIN_BINARY_EXPONENT = -50, h(Ti, Ni), e(Ti.prototype, {
    insert: function(t, e) {
      var n = Ni.getSubnodeIndex(t, Ti.origin.x, Ti.origin.y);
      if (-1 === n)
        return this.add(e), null;
      var i = this.subnode[n];
      if (null === i || !i.getEnvelope().contains(t)) {
        var r = Li.createExpanded(i, t);
        this.subnode[n] = r;
      }
      this.insertContained(this.subnode[n], t, e);
    },
    isSearchMatch: function(t) {
      return !0;
    },
    insertContained: function(t, e, n) {
      f.isTrue(t.getEnvelope().contains(e));
      var i = Ri.isZeroWidth(e.getMinX(), e.getMaxX()),
          r = Ri.isZeroWidth(e.getMinY(), e.getMaxY()),
          s = null;
      s = i || r ? t.find(e) : t.getNode(e), s.add(n);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ti;
    }
  }), Ti.origin = new g(0, 0), e(Pi.prototype, {
    size: function() {
      return null !== this.root ? this.root.size() : 0;
    },
    insert: function(t, e) {
      this.collectStats(t);
      var n = Pi.ensureExtent(t, this.minExtent);
      this.root.insert(n, e);
    },
    query: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = new Yn;
        return this.query(t, e), e.getItems();
      }
      if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        this.root.visit(n, i);
      }
    },
    queryAll: function() {
      var t = new I;
      return this.root.addAllItems(t), t;
    },
    remove: function(t, e) {
      var n = Pi.ensureExtent(t, this.minExtent);
      return this.root.remove(n, e);
    },
    collectStats: function(t) {
      var e = t.getWidth();
      e < this.minExtent && e > 0 && (this.minExtent = e);
      var n = t.getHeight();
      n < this.minExtent && n > 0 && (this.minExtent = n);
    },
    depth: function() {
      return null !== this.root ? this.root.depth() : 0;
    },
    isEmpty: function() {
      return null === this.root;
    },
    interfaces_: function() {
      return [Fe, u];
    },
    getClass: function() {
      return Pi;
    }
  }), Pi.ensureExtent = function(t, e) {
    var n = t.getMinX(),
        i = t.getMaxX(),
        r = t.getMinY(),
        s = t.getMaxY();
    return n !== i && r !== s ? t : (n === i && (n -= e / 2, i = n + e / 2), r === s && (r -= e / 2, s = r + e / 2), new C(n, i, r, s));
  }, Pi.serialVersionUID = -0x678b60c967a25400;
  var po = Object.freeze({Quadtree: Pi}),
      vo = Object.freeze({STRtree: ke}),
      mo = Object.freeze({
        quadtree: po,
        strtree: vo
      }),
      yo = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"];
  e(bi.prototype, {
    read: function(t) {
      var e = void 0;
      e = "string" == typeof t ? JSON.parse(t) : t;
      var n = e.type;
      if (!xo[n])
        throw new Error("Unknown GeoJSON type: " + e.type);
      return -1 !== yo.indexOf(n) ? xo[n].apply(this, [e.coordinates]) : "GeometryCollection" === n ? xo[n].apply(this, [e.geometries]) : xo[n].apply(this, [e]);
    },
    write: function(t) {
      var e = t.getGeometryType();
      if (!Eo[e])
        throw new Error("Geometry is not supported");
      return Eo[e].apply(this, [t]);
    }
  });
  var xo = {
    Feature: function(t) {
      var e = {};
      for (var n in t)
        e[n] = t[n];
      if (t.geometry) {
        var i = t.geometry.type;
        if (!xo[i])
          throw new Error("Unknown GeoJSON type: " + t.type);
        e.geometry = this.read(t.geometry);
      }
      return t.bbox && (e.bbox = xo.bbox.apply(this, [t.bbox])), e;
    },
    FeatureCollection: function(t) {
      var e = {};
      if (t.features) {
        e.features = [];
        for (var n = 0; n < t.features.length; ++n)
          e.features.push(this.read(t.features[n]));
      }
      return t.bbox && (e.bbox = this.parse.bbox.apply(this, [t.bbox])), e;
    },
    coordinates: function t(e) {
      for (var t = [],
          n = 0; n < e.length; ++n) {
        var i = e[n];
        t.push(new g(i[0], i[1]));
      }
      return t;
    },
    bbox: function(t) {
      return this.geometryFactory.createLinearRing([new g(t[0], t[1]), new g(t[2], t[1]), new g(t[2], t[3]), new g(t[0], t[3]), new g(t[0], t[1])]);
    },
    Point: function(t) {
      var e = new g(t[0], t[1]);
      return this.geometryFactory.createPoint(e);
    },
    MultiPoint: function(t) {
      for (var e = [],
          n = 0; n < t.length; ++n)
        e.push(xo.Point.apply(this, [t[n]]));
      return this.geometryFactory.createMultiPoint(e);
    },
    LineString: function(t) {
      var e = xo.coordinates.apply(this, [t]);
      return this.geometryFactory.createLineString(e);
    },
    MultiLineString: function(t) {
      for (var e = [],
          n = 0; n < t.length; ++n)
        e.push(xo.LineString.apply(this, [t[n]]));
      return this.geometryFactory.createMultiLineString(e);
    },
    Polygon: function(t) {
      for (var e = xo.coordinates.apply(this, [t[0]]),
          n = this.geometryFactory.createLinearRing(e),
          i = [],
          r = 1; r < t.length; ++r) {
        var s = t[r],
            o = xo.coordinates.apply(this, [s]),
            a = this.geometryFactory.createLinearRing(o);
        i.push(a);
      }
      return this.geometryFactory.createPolygon(n, i);
    },
    MultiPolygon: function(t) {
      for (var e = [],
          n = 0; n < t.length; ++n) {
        var i = t[n];
        e.push(xo.Polygon.apply(this, [i]));
      }
      return this.geometryFactory.createMultiPolygon(e);
    },
    GeometryCollection: function(t) {
      for (var e = [],
          n = 0; n < t.length; ++n) {
        var i = t[n];
        e.push(this.read(i));
      }
      return this.geometryFactory.createGeometryCollection(e);
    }
  },
      Eo = {
        coordinate: function(t) {
          return [t.x, t.y];
        },
        Point: function(t) {
          var e = Eo.coordinate.apply(this, [t.getCoordinate()]);
          return {
            type: "Point",
            coordinates: e
          };
        },
        MultiPoint: function(t) {
          for (var e = [],
              n = 0; n < t.geometries.length; ++n) {
            var i = t.geometries[n],
                r = Eo.Point.apply(this, [i]);
            e.push(r.coordinates);
          }
          return {
            type: "MultiPoint",
            coordinates: e
          };
        },
        LineString: function(t) {
          for (var e = [],
              n = t.getCoordinates(),
              i = 0; i < n.length; ++i) {
            var r = n[i];
            e.push(Eo.coordinate.apply(this, [r]));
          }
          return {
            type: "LineString",
            coordinates: e
          };
        },
        MultiLineString: function(t) {
          for (var e = [],
              n = 0; n < t.geometries.length; ++n) {
            var i = t.geometries[n],
                r = Eo.LineString.apply(this, [i]);
            e.push(r.coordinates);
          }
          return {
            type: "MultiLineString",
            coordinates: e
          };
        },
        Polygon: function(t) {
          var e = [],
              n = Eo.LineString.apply(this, [t.shell]);
          e.push(n.coordinates);
          for (var i = 0; i < t.holes.length; ++i) {
            var r = t.holes[i],
                s = Eo.LineString.apply(this, [r]);
            e.push(s.coordinates);
          }
          return {
            type: "Polygon",
            coordinates: e
          };
        },
        MultiPolygon: function(t) {
          for (var e = [],
              n = 0; n < t.geometries.length; ++n) {
            var i = t.geometries[n],
                r = Eo.Polygon.apply(this, [i]);
            e.push(r.coordinates);
          }
          return {
            type: "MultiPolygon",
            coordinates: e
          };
        },
        GeometryCollection: function(t) {
          for (var e = [],
              n = 0; n < t.geometries.length; ++n) {
            var i = t.geometries[n],
                r = i.getGeometryType();
            e.push(Eo[r].apply(this, [i]));
          }
          return {
            type: "GeometryCollection",
            geometries: e
          };
        }
      };
  e(Oi.prototype, {
    read: function(t) {
      var e = this.parser.read(t);
      return this.precisionModel.getType() === ee.FIXED && this.reducePrecision(e), e;
    },
    reducePrecision: function(t) {
      var e,
          n;
      if (t.coordinate)
        this.precisionModel.makePrecise(t.coordinate);
      else if (t.points)
        for (e = 0, n = t.points.length; n > e; e++)
          this.precisionModel.makePrecise(t.points[e]);
      else if (t.geometries)
        for (e = 0, n = t.geometries.length; n > e; e++)
          this.reducePrecision(t.geometries[e]);
    }
  }), e(_i.prototype, {write: function(t) {
      return this.parser.write(t);
    }}), e(Mi.prototype, {
    read: function(t) {
      var e = this.parser.read(t);
      return this.precisionModel.getType() === ee.FIXED && this.reducePrecision(e), e;
    },
    reducePrecision: function(t) {
      if (t.coordinate)
        this.precisionModel.makePrecise(t.coordinate);
      else if (t.points)
        for (var e = 0,
            n = t.points.coordinates.length; n > e; e++)
          this.precisionModel.makePrecise(t.points.coordinates[e]);
      else if (t.geometries)
        for (var i = 0,
            r = t.geometries.length; r > i; i++)
          this.reducePrecision(t.geometries[i]);
    }
  }), e(Ai.prototype, {
    read: function(t) {
      return t instanceof ol.geom.Point ? this.convertFromPoint(t) : t instanceof ol.geom.LineString ? this.convertFromLineString(t) : t instanceof ol.geom.LinearRing ? this.convertFromLinearRing(t) : t instanceof ol.geom.Polygon ? this.convertFromPolygon(t) : t instanceof ol.geom.MultiPoint ? this.convertFromMultiPoint(t) : t instanceof ol.geom.MultiLineString ? this.convertFromMultiLineString(t) : t instanceof ol.geom.MultiPolygon ? this.convertFromMultiPolygon(t) : t instanceof ol.geom.GeometryCollection ? this.convertFromCollection(t) : void 0;
    },
    convertFromPoint: function(t) {
      var e = t.getCoordinates();
      return this.geometryFactory.createPoint(new g(e[0], e[1]));
    },
    convertFromLineString: function(t) {
      return this.geometryFactory.createLineString(t.getCoordinates().map(function(t) {
        return new g(t[0], t[1]);
      }));
    },
    convertFromLinearRing: function(t) {
      return this.geometryFactory.createLinearRing(t.getCoordinates().map(function(t) {
        return new g(t[0], t[1]);
      }));
    },
    convertFromPolygon: function(t) {
      for (var e = t.getLinearRings(),
          n = null,
          i = [],
          r = 0; r < e.length; r++) {
        var s = this.convertFromLinearRing(e[r]);
        0 === r ? n = s : i.push(s);
      }
      return this.geometryFactory.createPolygon(n, i);
    },
    convertFromMultiPoint: function(t) {
      var e = t.getPoints().map(function(t) {
        return this.convertFromPoint(t);
      }, this);
      return this.geometryFactory.createMultiPoint(e);
    },
    convertFromMultiLineString: function(t) {
      var e = t.getLineStrings().map(function(t) {
        return this.convertFromLineString(t);
      }, this);
      return this.geometryFactory.createMultiLineString(e);
    },
    convertFromMultiPolygon: function(t) {
      var e = t.getPolygons().map(function(t) {
        return this.convertFromPolygon(t);
      }, this);
      return this.geometryFactory.createMultiPolygon(e);
    },
    convertFromCollection: function(t) {
      var e = t.getGeometries().map(function(t) {
        return this.read(t);
      }, this);
      return this.geometryFactory.createGeometryCollection(e);
    },
    write: function(t) {
      return "Point" === t.getGeometryType() ? this.convertToPoint(t.getCoordinate()) : "LineString" === t.getGeometryType() ? this.convertToLineString(t) : "LinearRing" === t.getGeometryType() ? this.convertToLinearRing(t) : "Polygon" === t.getGeometryType() ? this.convertToPolygon(t) : "MultiPoint" === t.getGeometryType() ? this.convertToMultiPoint(t) : "MultiLineString" === t.getGeometryType() ? this.convertToMultiLineString(t) : "MultiPolygon" === t.getGeometryType() ? this.convertToMultiPolygon(t) : "GeometryCollection" === t.getGeometryType() ? this.convertToCollection(t) : void 0;
    },
    convertToPoint: function(t) {
      return new ol.geom.Point([t.x, t.y]);
    },
    convertToLineString: function(t) {
      var e = t.points.coordinates.map(Di);
      return new ol.geom.LineString(e);
    },
    convertToLinearRing: function(t) {
      var e = t.points.coordinates.map(Di);
      return new ol.geom.LinearRing(e);
    },
    convertToPolygon: function(t) {
      for (var e = [t.shell.points.coordinates.map(Di)],
          n = 0; n < t.holes.length; n++)
        e.push(t.holes[n].points.coordinates.map(Di));
      return new ol.geom.Polygon(e);
    },
    convertToMultiPoint: function(t) {
      return new ol.geom.MultiPoint(t.getCoordinates().map(Di));
    },
    convertToMultiLineString: function(t) {
      for (var e = [],
          n = 0; n < t.geometries.length; n++)
        e.push(this.convertToLineString(t.geometries[n]).getCoordinates());
      return new ol.geom.MultiLineString(e);
    },
    convertToMultiPolygon: function(t) {
      for (var e = [],
          n = 0; n < t.geometries.length; n++)
        e.push(this.convertToPolygon(t.geometries[n]).getCoordinates());
      return new ol.geom.MultiPolygon(e);
    },
    convertToCollection: function(t) {
      for (var e = [],
          n = 0; n < t.geometries.length; n++) {
        var i = t.geometries[n];
        e.push(this.write(i));
      }
      return new ol.geom.GeometryCollection(e);
    }
  });
  var Io = Object.freeze({
    GeoJSONReader: Oi,
    GeoJSONWriter: _i,
    OL3Parser: Ai,
    WKTReader: Mi,
    WKTWriter: se
  });
  e(Fi.prototype, {
    rescale: function() {
      if (R(arguments[0], v))
        for (var t = arguments[0],
            e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.rescale(n.getCoordinates());
        }
      else if (arguments[0] instanceof Array) {
        var i = arguments[0],
            r = null,
            s = null;
        2 === i.length && (r = new g(i[0]), s = new g(i[1]));
        for (var e = 0; e < i.length; e++)
          i[e].x = i[e].x / this.scaleFactor + this.offsetX, i[e].y = i[e].y / this.scaleFactor + this.offsetY;
        2 === i.length && i[0].equals2D(i[1]) && A.out.println(i);
      }
    },
    scale: function() {
      if (R(arguments[0], v)) {
        for (var t = arguments[0],
            e = new I,
            n = t.iterator(); n.hasNext(); ) {
          var i = n.next();
          e.add(new Ke(this.scale(i.getCoordinates()), i.getData()));
        }
        return e;
      }
      if (arguments[0] instanceof Array) {
        for (var r = arguments[0],
            s = new Array(r.length).fill(null),
            n = 0; n < r.length; n++)
          s[n] = new g(Math.round((r[n].x - this.offsetX) * this.scaleFactor), Math.round((r[n].y - this.offsetY) * this.scaleFactor), r[n].z);
        var o = H.removeRepeatedPoints(s);
        return o;
      }
    },
    isIntegerPrecision: function() {
      return 1 === this.scaleFactor;
    },
    getNodedSubstrings: function() {
      var t = this.noder.getNodedSubstrings();
      return this.isScaled && this.rescale(t), t;
    },
    computeNodes: function(t) {
      var e = t;
      this.isScaled && (e = this.scale(t)), this.noder.computeNodes(e);
    },
    interfaces_: function() {
      return [tn];
    },
    getClass: function() {
      return Fi;
    }
  });
  var No = Object.freeze({
    MCIndexNoder: nn,
    ScaledNoder: Fi,
    SegmentString: be
  });
  e(Gi.prototype, {
    isSimpleMultiPoint: function(t) {
      if (t.isEmpty())
        return !0;
      for (var e = new at,
          n = 0; n < t.getNumGeometries(); n++) {
        var i = t.getGeometryN(n),
            r = i.getCoordinate();
        if (e.contains(r))
          return this.nonSimpleLocation = r, !1;
        e.add(r);
      }
      return !0;
    },
    isSimplePolygonal: function(t) {
      for (var e = kn.getLines(t),
          n = e.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (!this.isSimpleLinearGeometry(i))
          return !1;
      }
      return !0;
    },
    hasClosedEndpointIntersection: function(t) {
      for (var e = new rt,
          n = t.getEdgeIterator(); n.hasNext(); ) {
        var i = n.next(),
            r = (i.getMaximumSegmentIndex(), i.isClosed()),
            s = i.getCoordinate(0);
        this.addEndpoint(e, s, r);
        var o = i.getCoordinate(i.getNumPoints() - 1);
        this.addEndpoint(e, o, r);
      }
      for (var n = e.values().iterator(); n.hasNext(); ) {
        var a = n.next();
        if (a.isClosed && 2 !== a.degree)
          return this.nonSimpleLocation = a.getCoordinate(), !0;
      }
      return !1;
    },
    getNonSimpleLocation: function() {
      return this.nonSimpleLocation;
    },
    isSimpleLinearGeometry: function(t) {
      if (t.isEmpty())
        return !0;
      var e = new $n(0, t),
          n = new ae,
          i = e.computeSelfNodes(n, !0);
      return i.hasIntersection() ? i.hasProperIntersection() ? (this.nonSimpleLocation = i.getProperIntersectionPoint(), !1) : this.hasNonEndpointIntersection(e) ? !1 : !this.isClosedEndpointsInInterior || !this.hasClosedEndpointIntersection(e) : !0;
    },
    hasNonEndpointIntersection: function(t) {
      for (var e = t.getEdgeIterator(); e.hasNext(); )
        for (var n = e.next(),
            i = n.getMaximumSegmentIndex(),
            r = n.getEdgeIntersectionList().iterator(); r.hasNext(); ) {
          var s = r.next();
          if (!s.isEndPoint(i))
            return this.nonSimpleLocation = s.getCoordinate(), !0;
        }
      return !1;
    },
    addEndpoint: function(t, e, n) {
      var i = t.get(e);
      null === i && (i = new qi(e), t.put(e, i)), i.addEndpoint(n);
    },
    computeSimple: function(t) {
      return this.nonSimpleLocation = null, t.isEmpty() ? !0 : t instanceof St ? this.isSimpleLinearGeometry(t) : t instanceof gt ? this.isSimpleLinearGeometry(t) : t instanceof Pt ? this.isSimpleMultiPoint(t) : R(t, Rt) ? this.isSimplePolygonal(t) : t instanceof ft ? this.isSimpleGeometryCollection(t) : !0;
    },
    isSimple: function() {
      return this.nonSimpleLocation = null, this.computeSimple(this.inputGeom);
    },
    isSimpleGeometryCollection: function(t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);
        if (!this.computeSimple(n))
          return !1;
      }
      return !0;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Gi;
    }
  }), e(qi.prototype, {
    addEndpoint: function(t) {
      this.degree++, this.isClosed |= t;
    },
    getCoordinate: function() {
      return this.pt;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return qi;
    }
  }), Gi.EndpointInfo = qi, e(Bi.prototype, {
    getEndCapStyle: function() {
      return this.endCapStyle;
    },
    isSingleSided: function() {
      return this._isSingleSided;
    },
    setQuadrantSegments: function(t) {
      this.quadrantSegments = t, 0 === this.quadrantSegments && (this.joinStyle = Bi.JOIN_BEVEL), this.quadrantSegments < 0 && (this.joinStyle = Bi.JOIN_MITRE, this.mitreLimit = Math.abs(this.quadrantSegments)), 0 >= t && (this.quadrantSegments = 1), this.joinStyle !== Bi.JOIN_ROUND && (this.quadrantSegments = Bi.DEFAULT_QUADRANT_SEGMENTS);
    },
    getJoinStyle: function() {
      return this.joinStyle;
    },
    setJoinStyle: function(t) {
      this.joinStyle = t;
    },
    setSimplifyFactor: function(t) {
      this.simplifyFactor = 0 > t ? 0 : t;
    },
    getSimplifyFactor: function() {
      return this.simplifyFactor;
    },
    getQuadrantSegments: function() {
      return this.quadrantSegments;
    },
    setEndCapStyle: function(t) {
      this.endCapStyle = t;
    },
    getMitreLimit: function() {
      return this.mitreLimit;
    },
    setMitreLimit: function(t) {
      this.mitreLimit = t;
    },
    setSingleSided: function(t) {
      this._isSingleSided = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Bi;
    }
  }), Bi.bufferDistanceError = function(t) {
    var e = Math.PI / 2 / t;
    return 1 - Math.cos(e / 2);
  }, Bi.CAP_ROUND = 1, Bi.CAP_FLAT = 2, Bi.CAP_SQUARE = 3, Bi.JOIN_ROUND = 1, Bi.JOIN_MITRE = 2, Bi.JOIN_BEVEL = 3, Bi.DEFAULT_QUADRANT_SEGMENTS = 8, Bi.DEFAULT_MITRE_LIMIT = 5, Bi.DEFAULT_SIMPLIFY_FACTOR = .01, e(zi.prototype, {
    getCoordinate: function() {
      return this.minCoord;
    },
    getRightmostSide: function(t, e) {
      var n = this.getRightmostSideOfSegment(t, e);
      return 0 > n && (n = this.getRightmostSideOfSegment(t, e - 1)), 0 > n && (this.minCoord = null, this.checkForRightmostCoordinate(t)), n;
    },
    findRightmostEdgeAtVertex: function() {
      var t = this.minDe.getEdge().getCoordinates();
      f.isTrue(this.minIndex > 0 && this.minIndex < t.length, "rightmost point expected to be interior vertex of edge");
      var e = t[this.minIndex - 1],
          n = t[this.minIndex + 1],
          i = he.computeOrientation(this.minCoord, n, e),
          r = !1;
      e.y < this.minCoord.y && n.y < this.minCoord.y && i === he.COUNTERCLOCKWISE ? r = !0 : e.y > this.minCoord.y && n.y > this.minCoord.y && i === he.CLOCKWISE && (r = !0), r && (this.minIndex = this.minIndex - 1);
    },
    getRightmostSideOfSegment: function(t, e) {
      var n = t.getEdge(),
          i = n.getCoordinates();
      if (0 > e || e + 1 >= i.length)
        return -1;
      if (i[e].y === i[e + 1].y)
        return -1;
      var r = cn.LEFT;
      return i[e].y < i[e + 1].y && (r = cn.RIGHT), r;
    },
    getEdge: function() {
      return this.orientedDe;
    },
    checkForRightmostCoordinate: function(t) {
      for (var e = t.getEdge().getCoordinates(),
          n = 0; n < e.length - 1; n++)
        (null === this.minCoord || e[n].x > this.minCoord.x) && (this.minDe = t, this.minIndex = n, this.minCoord = e[n]);
    },
    findRightmostEdgeAtNode: function() {
      var t = this.minDe.getNode(),
          e = t.getEdges();
      this.minDe = e.getRightmostEdge(), this.minDe.isForward() || (this.minDe = this.minDe.getSym(), this.minIndex = this.minDe.getEdge().getCoordinates().length - 1);
    },
    findEdge: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.isForward() && this.checkForRightmostCoordinate(n);
      }
      f.isTrue(0 !== this.minIndex || this.minCoord.equals(this.minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this.minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this.orientedDe = this.minDe;
      var i = this.getRightmostSide(this.minDe, this.minIndex);
      i === cn.LEFT && (this.orientedDe = this.minDe.getSym());
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return zi;
    }
  }), Vi.prototype.addLast = function(t) {
    this.array_.push(t);
  }, Vi.prototype.removeFirst = function() {
    return this.array_.shift();
  }, Vi.prototype.isEmpty = function() {
    return 0 === this.array_.length;
  }, e(ki.prototype, {
    clearVisitedEdges: function() {
      for (var t = this.dirEdgeList.iterator(); t.hasNext(); ) {
        var e = t.next();
        e.setVisited(!1);
      }
    },
    getRightmostCoordinate: function() {
      return this.rightMostCoord;
    },
    computeNodeDepth: function(t) {
      for (var e = null,
          n = t.getEdges().iterator(); n.hasNext(); ) {
        var i = n.next();
        if (i.isVisited() || i.getSym().isVisited()) {
          e = i;
          break;
        }
      }
      if (null === e)
        throw new sn("unable to find edge to compute depths at " + t.getCoordinate());
      t.getEdges().computeDepths(e);
      for (var n = t.getEdges().iterator(); n.hasNext(); ) {
        var i = n.next();
        i.setVisited(!0), this.copySymDepths(i);
      }
    },
    computeDepth: function(t) {
      this.clearVisitedEdges();
      var e = this.finder.getEdge();
      e.getNode(), e.getLabel();
      e.setEdgeDepths(cn.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
    },
    create: function(t) {
      this.addReachable(t), this.finder.findEdge(this.dirEdgeList), this.rightMostCoord = this.finder.getCoordinate();
    },
    findResultEdges: function() {
      for (var t = this.dirEdgeList.iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getDepth(cn.RIGHT) >= 1 && e.getDepth(cn.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
      }
    },
    computeDepths: function(t) {
      var e = new J,
          n = new Vi,
          i = t.getNode();
      for (n.addLast(i), e.add(i), t.setVisited(!0); !n.isEmpty(); ) {
        var r = n.removeFirst();
        e.add(r), this.computeNodeDepth(r);
        for (var s = r.getEdges().iterator(); s.hasNext(); ) {
          var o = s.next(),
              a = o.getSym();
          if (!a.isVisited()) {
            var u = a.getNode();
            e.contains(u) || (n.addLast(u), e.add(u));
          }
        }
      }
    },
    compareTo: function(t) {
      var e = t;
      return this.rightMostCoord.x < e.rightMostCoord.x ? -1 : this.rightMostCoord.x > e.rightMostCoord.x ? 1 : 0;
    },
    getEnvelope: function() {
      if (null === this.env) {
        for (var t = new C,
            e = this.dirEdgeList.iterator(); e.hasNext(); )
          for (var n = e.next(),
              i = n.getEdge().getCoordinates(),
              r = 0; r < i.length - 1; r++)
            t.expandToInclude(i[r]);
        this.env = t;
      }
      return this.env;
    },
    addReachable: function(t) {
      var e = new pe;
      for (e.add(t); !e.empty(); ) {
        var n = e.pop();
        this.add(n, e);
      }
    },
    copySymDepths: function(t) {
      var e = t.getSym();
      e.setDepth(cn.LEFT, t.getDepth(cn.RIGHT)), e.setDepth(cn.RIGHT, t.getDepth(cn.LEFT));
    },
    add: function(t, e) {
      t.setVisited(!0), this.nodes.add(t);
      for (var n = t.getEdges().iterator(); n.hasNext(); ) {
        var i = n.next();
        this.dirEdgeList.add(i);
        var r = i.getSym(),
            s = r.getNode();
        s.isVisited() || e.push(s);
      }
    },
    getNodes: function() {
      return this.nodes;
    },
    getDirectedEdges: function() {
      return this.dirEdgeList;
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return ki;
    }
  }), e(Yi.prototype, {
    isDeletable: function(t, e, n, i) {
      var r = this.inputLine[t],
          s = this.inputLine[e],
          o = this.inputLine[n];
      return this.isConcave(r, s, o) && this.isShallow(r, s, o, i) ? this.isShallowSampled(r, s, t, n, i) : !1;
    },
    deleteShallowConcavities: function() {
      for (var t = 1,
          e = (this.inputLine.length - 1, this.findNextNonDeletedIndex(t)),
          n = this.findNextNonDeletedIndex(e),
          i = !1; n < this.inputLine.length; ) {
        var r = !1;
        this.isDeletable(t, e, n, this.distanceTol) && (this.isDeleted[e] = Yi.DELETE, r = !0, i = !0), t = r ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e);
      }
      return i;
    },
    isShallowConcavity: function(t, e, n, i) {
      var r = he.computeOrientation(t, e, n),
          s = r === this.angleOrientation;
      if (!s)
        return !1;
      var o = he.distancePointLine(e, t, n);
      return i > o;
    },
    isShallowSampled: function(t, e, n, i, r) {
      var s = Math.trunc((i - n) / Yi.NUM_PTS_TO_CHECK);
      0 >= s && (s = 1);
      for (var o = n; i > o; o += s)
        if (!this.isShallow(t, e, this.inputLine[o], r))
          return !1;
      return !0;
    },
    isConcave: function t(e, n, i) {
      var r = he.computeOrientation(e, n, i),
          t = r === this.angleOrientation;
      return t;
    },
    simplify: function(t) {
      this.distanceTol = Math.abs(t), 0 > t && (this.angleOrientation = he.CLOCKWISE), this.isDeleted = new Array(this.inputLine.length).fill(null);
      var e = !1;
      do
        e = this.deleteShallowConcavities();
 while (e);
      return this.collapseLine();
    },
    findNextNonDeletedIndex: function(t) {
      for (var e = t + 1; e < this.inputLine.length && this.isDeleted[e] === Yi.DELETE; )
        e++;
      return e;
    },
    isShallow: function(t, e, n, i) {
      var r = he.distancePointLine(e, t, n);
      return i > r;
    },
    collapseLine: function() {
      for (var t = new N,
          e = 0; e < this.inputLine.length; e++)
        this.isDeleted[e] !== Yi.DELETE && t.add(this.inputLine[e]);
      return t.toCoordinateArray();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Yi;
    }
  }), Yi.simplify = function(t, e) {
    var n = new Yi(t);
    return n.simplify(e);
  }, Yi.INIT = 0, Yi.DELETE = 1, Yi.KEEP = 1, Yi.NUM_PTS_TO_CHECK = 10, e(Ui.prototype, {
    getCoordinates: function() {
      var t = this.ptList.toArray(Ui.COORDINATE_ARRAY_TYPE);
      return t;
    },
    setPrecisionModel: function(t) {
      this.precisionModel = t;
    },
    addPt: function(t) {
      var e = new g(t);
      return this.precisionModel.makePrecise(e), this.isRedundant(e) ? null : void this.ptList.add(e);
    },
    reverse: function() {},
    addPts: function(t, e) {
      if (e)
        for (var n = 0; n < t.length; n++)
          this.addPt(t[n]);
      else
        for (var n = t.length - 1; n >= 0; n--)
          this.addPt(t[n]);
    },
    isRedundant: function(t) {
      if (this.ptList.size() < 1)
        return !1;
      var e = this.ptList.get(this.ptList.size() - 1),
          n = t.distance(e);
      return n < this.minimimVertexDistance;
    },
    toString: function() {
      var t = new ie,
          e = t.createLineString(this.getCoordinates());
      return e.toString();
    },
    closeRing: function() {
      if (this.ptList.size() < 1)
        return null;
      var t = new g(this.ptList.get(0)),
          e = this.ptList.get(this.ptList.size() - 1),
          n = null;
      return this.ptList.size() >= 2 && (n = this.ptList.get(this.ptList.size() - 2)), t.equals(e) ? null : void this.ptList.add(t);
    },
    setMinimumVertexDistance: function(t) {
      this.minimimVertexDistance = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ui;
    }
  }), Ui.COORDINATE_ARRAY_TYPE = new Array(0).fill(null), e(Xi.prototype, {
    addNextSegment: function(t, e) {
      if (this.s0 = this.s1, this.s1 = this.s2, this.s2 = t, this.seg0.setCoordinates(this.s0, this.s1), this.computeOffsetSegment(this.seg0, this.side, this.distance, this.offset0), this.seg1.setCoordinates(this.s1, this.s2), this.computeOffsetSegment(this.seg1, this.side, this.distance, this.offset1), this.s1.equals(this.s2))
        return null;
      var n = he.computeOrientation(this.s0, this.s1, this.s2),
          i = n === he.CLOCKWISE && this.side === cn.LEFT || n === he.COUNTERCLOCKWISE && this.side === cn.RIGHT;
      0 === n ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
    },
    addLineEndCap: function(t, e) {
      var n = new ce(t, e),
          i = new ce;
      this.computeOffsetSegment(n, cn.LEFT, this.distance, i);
      var r = new ce;
      this.computeOffsetSegment(n, cn.RIGHT, this.distance, r);
      var s = e.x - t.x,
          o = e.y - t.y,
          a = Math.atan2(o, s);
      switch (this.bufParams.getEndCapStyle()) {
        case Bi.CAP_ROUND:
          this.segList.addPt(i.p1), this.addFilletArc(e, a + Math.PI / 2, a - Math.PI / 2, he.CLOCKWISE, this.distance), this.segList.addPt(r.p1);
          break;
        case Bi.CAP_FLAT:
          this.segList.addPt(i.p1), this.segList.addPt(r.p1);
          break;
        case Bi.CAP_SQUARE:
          var u = new g;
          u.x = Math.abs(this.distance) * Math.cos(a), u.y = Math.abs(this.distance) * Math.sin(a);
          var l = new g(i.p1.x + u.x, i.p1.y + u.y),
              h = new g(r.p1.x + u.x, r.p1.y + u.y);
          this.segList.addPt(l), this.segList.addPt(h);
      }
    },
    getCoordinates: function() {
      var t = this.segList.getCoordinates();
      return t;
    },
    addMitreJoin: function(t, e, n, i) {
      var r = !0,
          s = null;
      try {
        s = F.intersection(e.p0, e.p1, n.p0, n.p1);
        var o = 0 >= i ? 1 : s.distance(t) / Math.abs(i);
        o > this.bufParams.getMitreLimit() && (r = !1);
      } catch (t) {
        if (!(t instanceof w))
          throw t;
        s = new g(0, 0), r = !1;
      } finally {}
      r ? this.segList.addPt(s) : this.addLimitedMitreJoin(e, n, i, this.bufParams.getMitreLimit());
    },
    addFilletCorner: function(t, e, n, i, r) {
      var s = e.x - t.x,
          o = e.y - t.y,
          a = Math.atan2(o, s),
          u = n.x - t.x,
          l = n.y - t.y,
          h = Math.atan2(l, u);
      i === he.CLOCKWISE ? h >= a && (a += 2 * Math.PI) : a >= h && (a -= 2 * Math.PI), this.segList.addPt(e), this.addFilletArc(t, a, h, i, r), this.segList.addPt(n);
    },
    addOutsideTurn: function(t, e) {
      return this.offset0.p1.distance(this.offset1.p0) < this.distance * Xi.OFFSET_SEGMENT_SEPARATION_FACTOR ? (this.segList.addPt(this.offset0.p1), null) : void(this.bufParams.getJoinStyle() === Bi.JOIN_MITRE ? this.addMitreJoin(this.s1, this.offset0, this.offset1, this.distance) : this.bufParams.getJoinStyle() === Bi.JOIN_BEVEL ? this.addBevelJoin(this.offset0, this.offset1) : (e && this.segList.addPt(this.offset0.p1), this.addFilletCorner(this.s1, this.offset0.p1, this.offset1.p0, t, this.distance), this.segList.addPt(this.offset1.p0)));
    },
    createSquare: function(t) {
      this.segList.addPt(new g(t.x + this.distance, t.y + this.distance)), this.segList.addPt(new g(t.x + this.distance, t.y - this.distance)), this.segList.addPt(new g(t.x - this.distance, t.y - this.distance)), this.segList.addPt(new g(t.x - this.distance, t.y + this.distance)), this.segList.closeRing();
    },
    addSegments: function(t, e) {
      this.segList.addPts(t, e);
    },
    addFirstSegment: function() {
      this.segList.addPt(this.offset1.p0);
    },
    addLastSegment: function() {
      this.segList.addPt(this.offset1.p1);
    },
    initSideSegments: function(t, e, n) {
      this.s1 = t, this.s2 = e, this.side = n, this.seg1.setCoordinates(t, e), this.computeOffsetSegment(this.seg1, n, this.distance, this.offset1);
    },
    addLimitedMitreJoin: function(t, e, n, i) {
      var r = this.seg0.p1,
          s = hi.angle(r, this.seg0.p0),
          o = (hi.angle(r, this.seg1.p1), hi.angleBetweenOriented(this.seg0.p0, r, this.seg1.p1)),
          a = o / 2,
          u = hi.normalize(s + a),
          l = hi.normalize(u + Math.PI),
          h = i * n,
          c = h * Math.abs(Math.sin(a)),
          f = n - c,
          d = r.x + h * Math.cos(l),
          p = r.y + h * Math.sin(l),
          v = new g(d, p),
          m = new ce(r, v),
          y = m.pointAlongOffset(1, f),
          x = m.pointAlongOffset(1, -f);
      this.side === cn.LEFT ? (this.segList.addPt(y), this.segList.addPt(x)) : (this.segList.addPt(x), this.segList.addPt(y));
    },
    computeOffsetSegment: function(t, e, n, i) {
      var r = e === cn.LEFT ? 1 : -1,
          s = t.p1.x - t.p0.x,
          o = t.p1.y - t.p0.y,
          a = Math.sqrt(s * s + o * o),
          u = r * n * s / a,
          l = r * n * o / a;
      i.p0.x = t.p0.x - l, i.p0.y = t.p0.y + u, i.p1.x = t.p1.x - l, i.p1.y = t.p1.y + u;
    },
    addFilletArc: function(t, e, n, i, r) {
      var s = i === he.CLOCKWISE ? -1 : 1,
          o = Math.abs(e - n),
          a = Math.trunc(o / this.filletAngleQuantum + .5);
      if (1 > a)
        return null;
      var u = null,
          l = null;
      u = 0, l = o / a;
      for (var h = u,
          c = new g; o > h; ) {
        var f = e + s * h;
        c.x = t.x + r * Math.cos(f), c.y = t.y + r * Math.sin(f), this.segList.addPt(c), h += l;
      }
    },
    addInsideTurn: function(t, e) {
      if (this.li.computeIntersection(this.offset0.p0, this.offset0.p1, this.offset1.p0, this.offset1.p1), this.li.hasIntersection())
        this.segList.addPt(this.li.getIntersection(0));
      else if (this._hasNarrowConcaveAngle = !0, this.offset0.p1.distance(this.offset1.p0) < this.distance * Xi.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
        this.segList.addPt(this.offset0.p1);
      else {
        if (this.segList.addPt(this.offset0.p1), this.closingSegLengthFactor > 0) {
          var n = new g((this.closingSegLengthFactor * this.offset0.p1.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset0.p1.y + this.s1.y) / (this.closingSegLengthFactor + 1));
          this.segList.addPt(n);
          var i = new g((this.closingSegLengthFactor * this.offset1.p0.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset1.p0.y + this.s1.y) / (this.closingSegLengthFactor + 1));
          this.segList.addPt(i);
        } else
          this.segList.addPt(this.s1);
        this.segList.addPt(this.offset1.p0);
      }
    },
    createCircle: function(t) {
      var e = new g(t.x + this.distance, t.y);
      this.segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this.distance), this.segList.closeRing();
    },
    addBevelJoin: function(t, e) {
      this.segList.addPt(t.p1), this.segList.addPt(e.p0);
    },
    init: function(t) {
      this.distance = t, this.maxCurveSegmentError = t * (1 - Math.cos(this.filletAngleQuantum / 2)), this.segList = new Ui, this.segList.setPrecisionModel(this.precisionModel), this.segList.setMinimumVertexDistance(t * Xi.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
    },
    addCollinear: function(t) {
      this.li.computeIntersection(this.s0, this.s1, this.s1, this.s2);
      var e = this.li.getIntersectionNum();
      e >= 2 && (this.bufParams.getJoinStyle() === Bi.JOIN_BEVEL || this.bufParams.getJoinStyle() === Bi.JOIN_MITRE ? (t && this.segList.addPt(this.offset0.p1), this.segList.addPt(this.offset1.p0)) : this.addFilletCorner(this.s1, this.offset0.p1, this.offset1.p0, he.CLOCKWISE, this.distance));
    },
    closeRing: function() {
      this.segList.closeRing();
    },
    hasNarrowConcaveAngle: function() {
      return this._hasNarrowConcaveAngle;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Xi;
    }
  }), Xi.OFFSET_SEGMENT_SEPARATION_FACTOR = .001, Xi.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = .001, Xi.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Xi.MAX_CLOSING_SEG_LEN_FACTOR = 80, e(Hi.prototype, {
    getOffsetCurve: function(t, e) {
      if (this.distance = e, 0 === e)
        return null;
      var n = 0 > e,
          i = Math.abs(e),
          r = this.getSegGen(i);
      t.length <= 1 ? this.computePointCurve(t[0], r) : this.computeOffsetCurve(t, n, r);
      var s = r.getCoordinates();
      return n && H.reverse(s), s;
    },
    computeSingleSidedBufferCurve: function(t, e, n) {
      var i = this.simplifyTolerance(this.distance);
      if (e) {
        n.addSegments(t, !0);
        var r = Yi.simplify(t, -i),
            s = r.length - 1;
        n.initSideSegments(r[s], r[s - 1], cn.LEFT), n.addFirstSegment();
        for (var o = s - 2; o >= 0; o--)
          n.addNextSegment(r[o], !0);
      } else {
        n.addSegments(t, !1);
        var a = Yi.simplify(t, i),
            u = a.length - 1;
        n.initSideSegments(a[0], a[1], cn.LEFT), n.addFirstSegment();
        for (var o = 2; u >= o; o++)
          n.addNextSegment(a[o], !0);
      }
      n.addLastSegment(), n.closeRing();
    },
    computeRingBufferCurve: function(t, e, n) {
      var i = this.simplifyTolerance(this.distance);
      e === cn.RIGHT && (i = -i);
      var r = Yi.simplify(t, i),
          s = r.length - 1;
      n.initSideSegments(r[s - 1], r[0], e);
      for (var o = 1; s >= o; o++) {
        var a = 1 !== o;
        n.addNextSegment(r[o], a);
      }
      n.closeRing();
    },
    computeLineBufferCurve: function(t, e) {
      var n = this.simplifyTolerance(this.distance),
          i = Yi.simplify(t, n),
          r = i.length - 1;
      e.initSideSegments(i[0], i[1], cn.LEFT);
      for (var s = 2; r >= s; s++)
        e.addNextSegment(i[s], !0);
      e.addLastSegment(), e.addLineEndCap(i[r - 1], i[r]);
      var o = Yi.simplify(t, -n),
          a = o.length - 1;
      e.initSideSegments(o[a], o[a - 1], cn.LEFT);
      for (var s = a - 2; s >= 0; s--)
        e.addNextSegment(o[s], !0);
      e.addLastSegment(), e.addLineEndCap(o[1], o[0]), e.closeRing();
    },
    computePointCurve: function(t, e) {
      switch (this.bufParams.getEndCapStyle()) {
        case Bi.CAP_ROUND:
          e.createCircle(t);
          break;
        case Bi.CAP_SQUARE:
          e.createSquare(t);
      }
    },
    getLineCurve: function(t, e) {
      if (this.distance = e, 0 > e && !this.bufParams.isSingleSided())
        return null;
      if (0 === e)
        return null;
      var n = Math.abs(e),
          i = this.getSegGen(n);
      if (t.length <= 1)
        this.computePointCurve(t[0], i);
      else if (this.bufParams.isSingleSided()) {
        var r = 0 > e;
        this.computeSingleSidedBufferCurve(t, r, i);
      } else
        this.computeLineBufferCurve(t, i);
      var s = i.getCoordinates();
      return s;
    },
    getBufferParameters: function() {
      return this.bufParams;
    },
    simplifyTolerance: function(t) {
      return t * this.bufParams.getSimplifyFactor();
    },
    getRingCurve: function(t, e, n) {
      if (this.distance = n, t.length <= 2)
        return this.getLineCurve(t, n);
      if (0 === n)
        return Hi.copyCoordinates(t);
      var i = this.getSegGen(n);
      return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
    },
    computeOffsetCurve: function(t, e, n) {
      var i = this.simplifyTolerance(this.distance);
      if (e) {
        var r = Yi.simplify(t, -i),
            s = r.length - 1;
        n.initSideSegments(r[s], r[s - 1], cn.LEFT), n.addFirstSegment();
        for (var o = s - 2; o >= 0; o--)
          n.addNextSegment(r[o], !0);
      } else {
        var a = Yi.simplify(t, i),
            u = a.length - 1;
        n.initSideSegments(a[0], a[1], cn.LEFT), n.addFirstSegment();
        for (var o = 2; u >= o; o++)
          n.addNextSegment(a[o], !0);
      }
      n.addLastSegment();
    },
    getSegGen: function(t) {
      return new Xi(this.precisionModel, this.bufParams, t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Hi;
    }
  }), Hi.copyCoordinates = function(t) {
    for (var e = new Array(t.length).fill(null),
        n = 0; n < e.length; n++)
      e[n] = new g(t[n]);
    return e;
  }, e(Wi.prototype, {
    findStabbedSegments: function() {
      if (1 === arguments.length) {
        for (var t = arguments[0],
            e = new I,
            n = this.subgraphs.iterator(); n.hasNext(); ) {
          var i = n.next(),
              r = i.getEnvelope();
          t.y < r.getMinY() || t.y > r.getMaxY() || this.findStabbedSegments(t, i.getDirectedEdges(), e);
        }
        return e;
      }
      if (3 === arguments.length)
        if (R(arguments[2], y) && arguments[0] instanceof g && arguments[1] instanceof In)
          for (var s = arguments[0],
              o = arguments[1],
              a = arguments[2],
              u = o.getEdge().getCoordinates(),
              n = 0; n < u.length - 1; n++) {
            this.seg.p0 = u[n], this.seg.p1 = u[n + 1], this.seg.p0.y > this.seg.p1.y && this.seg.reverse();
            var l = Math.max(this.seg.p0.x, this.seg.p1.x);
            if (!(l < s.x || this.seg.isHorizontal() || s.y < this.seg.p0.y || s.y > this.seg.p1.y || he.computeOrientation(this.seg.p0, this.seg.p1, s) === he.RIGHT)) {
              var h = o.getDepth(cn.LEFT);
              this.seg.p0.equals(u[n]) || (h = o.getDepth(cn.RIGHT));
              var c = new ji(this.seg, h);
              a.add(c);
            }
          }
        else if (R(arguments[2], y) && arguments[0] instanceof g && R(arguments[1], y))
          for (var f = arguments[0],
              d = arguments[1],
              p = arguments[2],
              n = d.iterator(); n.hasNext(); ) {
            var v = n.next();
            v.isForward() && this.findStabbedSegments(f, v, p);
          }
    },
    getDepth: function(t) {
      var e = this.findStabbedSegments(t);
      if (0 === e.size())
        return 0;
      var n = ho.min(e);
      return n.leftDepth;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Wi;
    }
  }), e(ji.prototype, {
    compareTo: function(t) {
      var e = t;
      if (this.upwardSeg.minX() >= e.upwardSeg.maxX())
        return 1;
      if (this.upwardSeg.maxX() <= e.upwardSeg.minX())
        return -1;
      var n = this.upwardSeg.orientationIndex(e.upwardSeg);
      return 0 !== n ? n : (n = -1 * e.upwardSeg.orientationIndex(this.upwardSeg), 0 !== n ? n : this.upwardSeg.compareTo(e.upwardSeg));
    },
    compareX: function(t, e) {
      var n = t.p0.compareTo(e.p0);
      return 0 !== n ? n : t.p1.compareTo(e.p1);
    },
    toString: function() {
      return this.upwardSeg.toString();
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return ji;
    }
  }), Wi.DepthSegment = ji, e(Ki.prototype, {
    addPoint: function(t) {
      if (this.distance <= 0)
        return null;
      var e = t.getCoordinates(),
          n = this.curveBuilder.getLineCurve(e, this.distance);
      this.addCurve(n, L.EXTERIOR, L.INTERIOR);
    },
    addPolygon: function(t) {
      var e = this.distance,
          n = cn.LEFT;
      this.distance < 0 && (e = -this.distance, n = cn.RIGHT);
      var i = t.getExteriorRing(),
          r = H.removeRepeatedPoints(i.getCoordinates());
      if (this.distance < 0 && this.isErodedCompletely(i, this.distance))
        return null;
      if (this.distance <= 0 && r.length < 3)
        return null;
      this.addPolygonRing(r, e, n, L.EXTERIOR, L.INTERIOR);
      for (var s = 0; s < t.getNumInteriorRing(); s++) {
        var o = t.getInteriorRingN(s),
            a = H.removeRepeatedPoints(o.getCoordinates());
        this.distance > 0 && this.isErodedCompletely(o, -this.distance) || this.addPolygonRing(a, e, cn.opposite(n), L.INTERIOR, L.EXTERIOR);
      }
    },
    isTriangleErodedCompletely: function(t, e) {
      var n = new ci(t[0], t[1], t[2]),
          i = n.inCentre(),
          r = he.distancePointLine(i, n.p0, n.p1);
      return r < Math.abs(e);
    },
    addLineString: function(t) {
      if (this.distance <= 0 && !this.curveBuilder.getBufferParameters().isSingleSided())
        return null;
      var e = H.removeRepeatedPoints(t.getCoordinates()),
          n = this.curveBuilder.getLineCurve(e, this.distance);
      this.addCurve(n, L.EXTERIOR, L.INTERIOR);
    },
    addCurve: function(t, e, n) {
      if (null === t || t.length < 2)
        return null;
      var i = new Ke(t, new gn(0, L.BOUNDARY, e, n));
      this.curveList.add(i);
    },
    getCurves: function() {
      return this.add(this.inputGeom), this.curveList;
    },
    addPolygonRing: function(t, e, n, i, r) {
      if (0 === e && t.length < bt.MINIMUM_VALID_SIZE)
        return null;
      var s = i,
          o = r;
      t.length >= bt.MINIMUM_VALID_SIZE && he.isCCW(t) && (s = r, o = i, n = cn.opposite(n));
      var a = this.curveBuilder.getRingCurve(t, n, e);
      this.addCurve(a, s, o);
    },
    add: function(t) {
      if (t.isEmpty())
        return null;
      if (t instanceof Tt)
        this.addPolygon(t);
      else if (t instanceof St)
        this.addLineString(t);
      else if (t instanceof Lt)
        this.addPoint(t);
      else if (t instanceof Pt)
        this.addCollection(t);
      else if (t instanceof gt)
        this.addCollection(t);
      else if (t instanceof Ot)
        this.addCollection(t);
      else {
        if (!(t instanceof ft))
          throw new UnsupportedOperationException(t.getClass().getName());
        this.addCollection(t);
      }
    },
    isErodedCompletely: function(t, e) {
      var n = t.getCoordinates();
      if (n.length < 4)
        return 0 > e;
      if (4 === n.length)
        return this.isTriangleErodedCompletely(n, e);
      var i = t.getEnvelopeInternal(),
          r = Math.min(i.getHeight(), i.getWidth());
      return 0 > e && 2 * Math.abs(e) > r;
    },
    addCollection: function(t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);
        this.add(n);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ki;
    }
  }), e(Zi.prototype, {
    isTrivialIntersection: function(t, e, n, i) {
      if (t === n && 1 === this.li.getIntersectionNum()) {
        if (Zi.isAdjacentSegments(e, i))
          return !0;
        if (t.isClosed()) {
          var r = t.size() - 1;
          if (0 === e && i === r || 0 === i && e === r)
            return !0;
        }
      }
      return !1;
    },
    getProperIntersectionPoint: function() {
      return this.properIntersectionPoint;
    },
    hasProperInteriorIntersection: function() {
      return this.hasProperInterior;
    },
    getLineIntersector: function() {
      return this.li;
    },
    hasProperIntersection: function() {
      return this.hasProper;
    },
    processIntersections: function(t, e, n, i) {
      if (t === n && e === i)
        return null;
      this.numTests++;
      var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];
      this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && (this.numIntersections++, this.li.isInteriorIntersection() && (this.numInteriorIntersections++, this.hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this.li, e, 0), n.addIntersections(this.li, i, 1), this.li.isProper() && (this.numProperIntersections++, this.hasProper = !0, this.hasProperInterior = !0)));
    },
    hasIntersection: function() {
      return this._hasIntersection;
    },
    isDone: function() {
      return !1;
    },
    hasInteriorIntersection: function() {
      return this.hasInterior;
    },
    interfaces_: function() {
      return [on];
    },
    getClass: function() {
      return Zi;
    }
  }), Zi.isAdjacentSegments = function(t, e) {
    return 1 === Math.abs(t - e);
  }, e(Qi.prototype, {
    setWorkingPrecisionModel: function(t) {
      this.workingPrecisionModel = t;
    },
    insertUniqueEdge: function(t) {
      var e = this.edgeList.findEqualEdge(t);
      if (null !== e) {
        var n = e.getLabel(),
            i = t.getLabel();
        e.isPointwiseEqual(t) || (i = new gn(t.getLabel()), i.flip()), n.merge(i);
        var r = Qi.depthDelta(i),
            s = e.getDepthDelta(),
            o = s + r;
        e.setDepthDelta(o);
      } else
        this.edgeList.add(t), t.setDepthDelta(Qi.depthDelta(t.getLabel()));
    },
    buildSubgraphs: function(t, e) {
      for (var n = new I,
          i = t.iterator(); i.hasNext(); ) {
        var r = i.next(),
            s = r.getRightmostCoordinate(),
            o = new Wi(n),
            a = o.getDepth(s);
        r.computeDepth(a), r.findResultEdges(), n.add(r), e.add(r.getDirectedEdges(), r.getNodes());
      }
    },
    createSubgraphs: function(t) {
      for (var e = new I,
          n = t.getNodes().iterator(); n.hasNext(); ) {
        var i = n.next();
        if (!i.isVisited()) {
          var r = new ki;
          r.create(i), e.add(r);
        }
      }
      return ho.sort(e, ho.reverseOrder()), e;
    },
    createEmptyResultGeometry: function() {
      var t = this.geomFact.createPolygon();
      return t;
    },
    getNoder: function(t) {
      if (null !== this.workingNoder)
        return this.workingNoder;
      var e = new nn,
          n = new ae;
      return n.setPrecisionModel(t), e.setSegmentIntersector(new Zi(n)), e;
    },
    buffer: function(t, e) {
      var n = this.workingPrecisionModel;
      null === n && (n = t.getPrecisionModel()), this.geomFact = t.getFactory();
      var i = new Hi(n, this.bufParams),
          r = new Ki(t, e, i),
          s = r.getCurves();
      if (s.size() <= 0)
        return this.createEmptyResultGeometry();
      this.computeNodedEdges(s, n), this.graph = new Cn(new On), this.graph.addEdges(this.edgeList.getEdges());
      var o = this.createSubgraphs(this.graph),
          a = new Sn(this.geomFact);
      this.buildSubgraphs(o, a);
      var u = a.getPolygons();
      if (u.size() <= 0)
        return this.createEmptyResultGeometry();
      var l = this.geomFact.buildGeometry(u);
      return l;
    },
    computeNodedEdges: function(t, e) {
      var n = this.getNoder(e);
      n.computeNodes(t);
      for (var i = n.getNodedSubstrings(),
          r = i.iterator(); r.hasNext(); ) {
        var s = r.next(),
            o = s.getCoordinates();
        if (2 !== o.length || !o[0].equals2D(o[1])) {
          var a = s.getData(),
              u = new Jn(s.getCoordinates(), new gn(a));
          this.insertUniqueEdge(u);
        }
      }
    },
    setNoder: function(t) {
      this.workingNoder = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Qi;
    }
  }), Qi.depthDelta = function(t) {
    var e = t.getLocation(0, cn.LEFT),
        n = t.getLocation(0, cn.RIGHT);
    return e === L.INTERIOR && n === L.EXTERIOR ? 1 : e === L.EXTERIOR && n === L.INTERIOR ? -1 : 0;
  }, Qi.convertSegStrings = function(t) {
    for (var e = new ie,
        n = new I; t.hasNext(); ) {
      var i = t.next(),
          r = e.createLineString(i.getCoordinates());
      n.add(r);
    }
    return e.buildGeometry(n);
  }, e(Ji.prototype, {
    checkEndPtVertexIntersections: function() {
      if (0 === arguments.length)
        for (var t = this.segStrings.iterator(); t.hasNext(); ) {
          var e = t.next(),
              n = e.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this.segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this.segStrings);
        }
      else if (2 === arguments.length)
        for (var i = arguments[0],
            r = arguments[1],
            t = r.iterator(); t.hasNext(); )
          for (var e = t.next(),
              n = e.getCoordinates(),
              s = 1; s < n.length - 1; s++)
            if (n[s].equals(i))
              throw new l("found endpt/interior pt intersection at index " + s + " :pt " + i);
    },
    checkInteriorIntersections: function() {
      if (0 === arguments.length)
        for (var t = this.segStrings.iterator(); t.hasNext(); )
          for (var e = t.next(),
              n = this.segStrings.iterator(); n.hasNext(); ) {
            var i = n.next();
            this.checkInteriorIntersections(e, i);
          }
      else if (2 === arguments.length)
        for (var r = arguments[0],
            s = arguments[1],
            o = r.getCoordinates(),
            a = s.getCoordinates(),
            u = 0; u < o.length - 1; u++)
          for (var h = 0; h < a.length - 1; h++)
            this.checkInteriorIntersections(r, u, s, h);
      else if (4 === arguments.length) {
        var c = arguments[0],
            f = arguments[1],
            g = arguments[2],
            d = arguments[3];
        if (c === g && f === d)
          return null;
        var p = c.getCoordinates()[f],
            v = c.getCoordinates()[f + 1],
            m = g.getCoordinates()[d],
            y = g.getCoordinates()[d + 1];
        if (this.li.computeIntersection(p, v, m, y), this.li.hasIntersection() && (this.li.isProper() || this.hasInteriorIntersection(this.li, p, v) || this.hasInteriorIntersection(this.li, m, y)))
          throw new l("found non-noded intersection at " + p + "-" + v + " and " + m + "-" + y);
      }
    },
    checkValid: function() {
      this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
    },
    checkCollapses: function() {
      if (0 === arguments.length)
        for (var t = this.segStrings.iterator(); t.hasNext(); ) {
          var e = t.next();
          this.checkCollapses(e);
        }
      else if (1 === arguments.length)
        for (var n = arguments[0],
            i = n.getCoordinates(),
            t = 0; t < i.length - 2; t++)
          this.checkCollapse(i[t], i[t + 1], i[t + 2]);
    },
    hasInteriorIntersection: function(t, e, n) {
      for (var i = 0; i < t.getIntersectionNum(); i++) {
        var r = t.getIntersection(i);
        if (!r.equals(e) && !r.equals(n))
          return !0;
      }
      return !1;
    },
    checkCollapse: function(t, e, n) {
      if (t.equals(n))
        throw new l("found non-noded collapse at " + Ji.fact.createLineString([t, e, n]));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ji;
    }
  }), Ji.fact = new ie, e($i.prototype, {
    intersectsScaled: function(t, e) {
      var n = Math.min(t.x, e.x),
          i = Math.max(t.x, e.x),
          r = Math.min(t.y, e.y),
          s = Math.max(t.y, e.y),
          o = this.maxx < n || this.minx > i || this.maxy < r || this.miny > s;
      if (o)
        return !1;
      var a = this.intersectsToleranceSquare(t, e);
      return f.isTrue(!(o && a), "Found bad envelope test"), a;
    },
    initCorners: function(t) {
      var e = .5;
      this.minx = t.x - e, this.maxx = t.x + e, this.miny = t.y - e, this.maxy = t.y + e, this.corner[0] = new g(this.maxx, this.maxy), this.corner[1] = new g(this.minx, this.maxy), this.corner[2] = new g(this.minx, this.miny), this.corner[3] = new g(this.maxx, this.miny);
    },
    intersects: function(t, e) {
      return 1 === this.scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this.p0Scaled), this.copyScaled(e, this.p1Scaled), this.intersectsScaled(this.p0Scaled, this.p1Scaled));
    },
    scale: function(t) {
      return Math.round(t * this.scaleFactor);
    },
    getCoordinate: function() {
      return this.originalPt;
    },
    copyScaled: function(t, e) {
      e.x = this.scale(t.x), e.y = this.scale(t.y);
    },
    getSafeEnvelope: function() {
      if (null === this.safeEnv) {
        var t = $i.SAFE_ENV_EXPANSION_FACTOR / this.scaleFactor;
        this.safeEnv = new C(this.originalPt.x - t, this.originalPt.x + t, this.originalPt.y - t, this.originalPt.y + t);
      }
      return this.safeEnv;
    },
    intersectsPixelClosure: function(t, e) {
      return this.li.computeIntersection(t, e, this.corner[0], this.corner[1]), this.li.hasIntersection() ? !0 : (this.li.computeIntersection(t, e, this.corner[1], this.corner[2]), this.li.hasIntersection() ? !0 : (this.li.computeIntersection(t, e, this.corner[2], this.corner[3]), this.li.hasIntersection() ? !0 : (this.li.computeIntersection(t, e, this.corner[3], this.corner[0]), !!this.li.hasIntersection())));
    },
    intersectsToleranceSquare: function(t, e) {
      var n = !1,
          i = !1;
      return this.li.computeIntersection(t, e, this.corner[0], this.corner[1]), this.li.isProper() ? !0 : (this.li.computeIntersection(t, e, this.corner[1], this.corner[2]), this.li.isProper() ? !0 : (this.li.hasIntersection() && (n = !0), this.li.computeIntersection(t, e, this.corner[2], this.corner[3]), this.li.isProper() ? !0 : (this.li.hasIntersection() && (i = !0), this.li.computeIntersection(t, e, this.corner[3], this.corner[0]), this.li.isProper() ? !0 : n && i ? !0 : t.equals(this.pt) ? !0 : !!e.equals(this.pt))));
    },
    addSnappedNode: function(t, e) {
      var n = t.getCoordinate(e),
          i = t.getCoordinate(e + 1);
      return this.intersects(n, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return $i;
    }
  }), $i.SAFE_ENV_EXPANSION_FACTOR = .75, e(tr.prototype, {
    select: function() {
      if (1 === arguments.length) {
        arguments[0];
      } else if (2 === arguments.length) {
        var t = arguments[0],
            e = arguments[1];
        t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return tr;
    }
  }), e(er.prototype, {
    snap: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.snap(t, null, -1);
      }
      if (3 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = arguments[2],
            r = e.getSafeEnvelope(),
            s = new nr(e, n, i);
        return this.index.query(r, {
          interfaces_: function() {
            return [Ae];
          },
          visitItem: function(t) {
            var e = t;
            e.select(r, s);
          }
        }), s.isNodeAdded();
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return er;
    }
  }), h(nr, tr), e(nr.prototype, {
    isNodeAdded: function() {
      return this._isNodeAdded;
    },
    select: function() {
      if (2 !== arguments.length)
        return tr.prototype.select.apply(this, arguments);
      var t = arguments[0],
          e = arguments[1],
          n = t.getContext();
      return null !== this.parentEdge && n === this.parentEdge && e === this.hotPixelVertexIndex ? null : void(this._isNodeAdded = this.hotPixel.addSnappedNode(n, e));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return nr;
    }
  }), er.HotPixelSnapAction = nr, e(ir.prototype, {
    processIntersections: function(t, e, n, i) {
      if (t === n && e === i)
        return null;
      var r = t.getCoordinates()[e],
          s = t.getCoordinates()[e + 1],
          o = n.getCoordinates()[i],
          a = n.getCoordinates()[i + 1];
      if (this.li.computeIntersection(r, s, o, a), this.li.hasIntersection() && this.li.isInteriorIntersection()) {
        for (var u = 0; u < this.li.getIntersectionNum(); u++)
          this.interiorIntersections.add(this.li.getIntersection(u));
        t.addIntersections(this.li, e, 0), n.addIntersections(this.li, i, 1);
      }
    },
    isDone: function() {
      return !1;
    },
    getInteriorIntersections: function() {
      return this.interiorIntersections;
    },
    interfaces_: function() {
      return [on];
    },
    getClass: function() {
      return ir;
    }
  }), e(rr.prototype, {
    checkCorrectness: function(t) {
      var e = Ke.getNodedSubstrings(t),
          n = new Ji(e);
      try {
        n.checkValid();
      } catch (t) {
        if (!(t instanceof S))
          throw t;
        t.printStackTrace();
      } finally {}
    },
    getNodedSubstrings: function() {
      return Ke.getNodedSubstrings(this.nodedSegStrings);
    },
    snapRound: function(t, e) {
      var n = this.findInteriorIntersections(t, e);
      this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
    },
    findInteriorIntersections: function(t, e) {
      var n = new ir(e);
      return this.noder.setSegmentIntersector(n), this.noder.computeNodes(t), n.getInteriorIntersections();
    },
    computeVertexSnaps: function() {
      if (R(arguments[0], v))
        for (var t = arguments[0],
            e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.computeVertexSnaps(n);
        }
      else if (arguments[0] instanceof Ke)
        for (var i = arguments[0],
            r = i.getCoordinates(),
            s = 0; s < r.length; s++) {
          var o = new $i(r[s], this.scaleFactor, this.li),
              a = this.pointSnapper.snap(o, i, s);
          a && i.addIntersection(r[s], s);
        }
    },
    computeNodes: function(t) {
      this.nodedSegStrings = t, this.noder = new nn, this.pointSnapper = new er(this.noder.getIndex()), this.snapRound(t, this.li);
    },
    computeIntersectionSnaps: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = new $i(n, this.scaleFactor, this.li);
        this.pointSnapper.snap(i);
      }
    },
    interfaces_: function() {
      return [tn];
    },
    getClass: function() {
      return rr;
    }
  }), e(sr.prototype, {
    bufferFixedPrecision: function(t) {
      var e = new Fi(new rr(new ee(1)), t.getScale()),
          n = new Qi(this.bufParams);
      n.setWorkingPrecisionModel(t), n.setNoder(e), this.resultGeometry = n.buffer(this.argGeom, this.distance);
    },
    bufferReducedPrecision: function() {
      if (0 === arguments.length) {
        for (var t = sr.MAX_PRECISION_DIGITS; t >= 0; t--) {
          try {
            this.bufferReducedPrecision(t);
          } catch (t) {
            if (!(t instanceof sn))
              throw t;
            this.saveException = t;
          } finally {}
          if (null !== this.resultGeometry)
            return null;
        }
        throw this.saveException;
      }
      if (1 === arguments.length) {
        var e = arguments[0],
            n = sr.precisionScaleFactor(this.argGeom, this.distance, e),
            i = new ee(n);
        this.bufferFixedPrecision(i);
      }
    },
    computeGeometry: function() {
      if (this.bufferOriginalPrecision(), null !== this.resultGeometry)
        return null;
      var t = this.argGeom.getFactory().getPrecisionModel();
      t.getType() === ee.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
    },
    setQuadrantSegments: function(t) {
      this.bufParams.setQuadrantSegments(t);
    },
    bufferOriginalPrecision: function() {
      try {
        var t = new Qi(this.bufParams);
        this.resultGeometry = t.buffer(this.argGeom, this.distance);
      } catch (t) {
        if (!(t instanceof l))
          throw t;
        this.saveException = t;
      } finally {}
    },
    getResultGeometry: function(t) {
      return this.distance = t, this.computeGeometry(), this.resultGeometry;
    },
    setEndCapStyle: function(t) {
      this.bufParams.setEndCapStyle(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return sr;
    }
  }), sr.bufferOp = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = new sr(t),
          i = n.getResultGeometry(e);
      return i;
    }
    if (3 === arguments.length) {
      if (Number.isInteger(arguments[2]) && arguments[0] instanceof B && "number" == typeof arguments[1]) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2],
            a = new sr(r);
        a.setQuadrantSegments(o);
        var i = a.getResultGeometry(s);
        return i;
      }
      if (arguments[2] instanceof Bi && arguments[0] instanceof B && "number" == typeof arguments[1]) {
        var u = arguments[0],
            l = arguments[1],
            h = arguments[2],
            a = new sr(u, h),
            i = a.getResultGeometry(l);
        return i;
      }
    } else if (4 === arguments.length) {
      var c = arguments[0],
          f = arguments[1],
          g = arguments[2],
          d = arguments[3],
          a = new sr(c);
      a.setQuadrantSegments(g), a.setEndCapStyle(d);
      var i = a.getResultGeometry(f);
      return i;
    }
  }, sr.precisionScaleFactor = function(t, e, n) {
    var i = t.getEnvelopeInternal(),
        r = T.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())),
        s = e > 0 ? e : 0,
        o = r + 2 * s,
        a = Math.trunc(Math.log(o) / Math.log(10) + 1),
        u = n - a,
        l = Math.pow(10, u);
    return l;
  }, sr.CAP_ROUND = Bi.CAP_ROUND, sr.CAP_BUTT = Bi.CAP_FLAT, sr.CAP_FLAT = Bi.CAP_FLAT, sr.CAP_SQUARE = Bi.CAP_SQUARE, sr.MAX_PRECISION_DIGITS = 12;
  var Co = Object.freeze({
    BufferOp: sr,
    BufferParameters: Bi
  });
  e(or.prototype, {
    filter: function(t) {
      t instanceof Tt && this.comps.add(t);
    },
    interfaces_: function() {
      return [ht];
    },
    getClass: function() {
      return or;
    }
  }), or.getPolygons = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return or.getPolygons(t, new I);
    }
    if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      return e instanceof Tt ? n.add(e) : e instanceof ft && e.apply(new or(n)), n;
    }
  }, e(ar.prototype, {
    isInsideArea: function() {
      return this.segIndex === ar.INSIDE_AREA;
    },
    getCoordinate: function() {
      return this.pt;
    },
    getGeometryComponent: function() {
      return this.component;
    },
    getSegmentIndex: function() {
      return this.segIndex;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ar;
    }
  }), ar.INSIDE_AREA = -1, e(ur.prototype, {
    filter: function(t) {
      t instanceof Lt && this.pts.add(t);
    },
    interfaces_: function() {
      return [ht];
    },
    getClass: function() {
      return ur;
    }
  }), ur.getPoints = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return t instanceof Lt ? ho.singletonList(t) : ur.getPoints(t, new I);
    }
    if (2 === arguments.length) {
      var e = arguments[0],
          n = arguments[1];
      return e instanceof Lt ? n.add(e) : e instanceof ft && e.apply(new ur(n)), n;
    }
  }, e(lr.prototype, {
    filter: function(t) {
      (t instanceof Lt || t instanceof St || t instanceof Tt) && this.locations.add(new ar(t, 0, t.getCoordinate()));
    },
    interfaces_: function() {
      return [ht];
    },
    getClass: function() {
      return lr;
    }
  }), lr.getLocations = function(t) {
    var e = new I;
    return t.apply(new lr(e)), e;
  }, e(hr.prototype, {
    computeContainmentDistance: function() {
      if (0 === arguments.length) {
        var t = new Array(2).fill(null);
        if (this.computeContainmentDistance(0, t), this.minDistance <= this.terminateDistance)
          return null;
        this.computeContainmentDistance(1, t);
      } else if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = 1 - e,
            r = or.getPolygons(this.geom[e]);
        if (r.size() > 0) {
          var s = lr.getLocations(this.geom[i]);
          if (this.computeContainmentDistance(s, r, n), this.minDistance <= this.terminateDistance)
            return this.minDistanceLocation[i] = n[0], this.minDistanceLocation[e] = n[1], null;
        }
      } else if (3 === arguments.length)
        if (arguments[2] instanceof Array && R(arguments[0], y) && R(arguments[1], y)) {
          for (var o = arguments[0],
              a = arguments[1],
              u = arguments[2],
              l = 0; l < o.size(); l++)
            for (var h = o.get(l),
                c = 0; c < a.size(); c++)
              if (this.computeContainmentDistance(h, a.get(c), u), this.minDistance <= this.terminateDistance)
                return null;
        } else if (arguments[2] instanceof Array && arguments[0] instanceof ar && arguments[1] instanceof Tt) {
          var f = arguments[0],
              g = arguments[1],
              d = arguments[2],
              p = f.getCoordinate();
          if (L.EXTERIOR !== this.ptLocator.locate(p, g))
            return this.minDistance = 0, d[0] = f, d[1] = new ar(g, p), null;
        }
    },
    computeMinDistanceLinesPoints: function(t, e, n) {
      for (var i = 0; i < t.size(); i++)
        for (var r = t.get(i),
            s = 0; s < e.size(); s++) {
          var o = e.get(s);
          if (this.computeMinDistance(r, o, n), this.minDistance <= this.terminateDistance)
            return null;
        }
    },
    computeFacetDistance: function() {
      var t = new Array(2).fill(null),
          e = kn.getLines(this.geom[0]),
          n = kn.getLines(this.geom[1]),
          i = ur.getPoints(this.geom[0]),
          r = ur.getPoints(this.geom[1]);
      return this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, r, t), this.updateMinDistance(t, !1), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, i, t), this.updateMinDistance(t, !0), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistancePoints(i, r, t), void this.updateMinDistance(t, !1))));
    },
    nearestLocations: function() {
      return this.computeMinDistance(), this.minDistanceLocation;
    },
    updateMinDistance: function(t, e) {
      return null === t[0] ? null : void(e ? (this.minDistanceLocation[0] = t[1], this.minDistanceLocation[1] = t[0]) : (this.minDistanceLocation[0] = t[0], this.minDistanceLocation[1] = t[1]));
    },
    nearestPoints: function() {
      this.computeMinDistance();
      var t = [this.minDistanceLocation[0].getCoordinate(), this.minDistanceLocation[1].getCoordinate()];
      return t;
    },
    computeMinDistance: function() {
      if (0 === arguments.length) {
        if (null !== this.minDistanceLocation)
          return null;
        if (this.minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this.minDistance <= this.terminateDistance)
          return null;
        this.computeFacetDistance();
      } else if (3 === arguments.length)
        if (arguments[2] instanceof Array && arguments[0] instanceof St && arguments[1] instanceof Lt) {
          var t = arguments[0],
              e = arguments[1],
              n = arguments[2];
          if (t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > this.minDistance)
            return null;
          for (var i = t.getCoordinates(),
              r = e.getCoordinate(),
              s = 0; s < i.length - 1; s++) {
            var o = he.distancePointLine(r, i[s], i[s + 1]);
            if (o < this.minDistance) {
              this.minDistance = o;
              var a = new ce(i[s], i[s + 1]),
                  u = a.closestPoint(r);
              n[0] = new ar(t, s, u), n[1] = new ar(e, 0, r);
            }
            if (this.minDistance <= this.terminateDistance)
              return null;
          }
        } else if (arguments[2] instanceof Array && arguments[0] instanceof St && arguments[1] instanceof St) {
          var l = arguments[0],
              h = arguments[1],
              c = arguments[2];
          if (l.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this.minDistance)
            return null;
          for (var i = l.getCoordinates(),
              f = h.getCoordinates(),
              s = 0; s < i.length - 1; s++)
            for (var g = 0; g < f.length - 1; g++) {
              var o = he.distanceLineLine(i[s], i[s + 1], f[g], f[g + 1]);
              if (o < this.minDistance) {
                this.minDistance = o;
                var d = new ce(i[s], i[s + 1]),
                    p = new ce(f[g], f[g + 1]),
                    v = d.closestPoints(p);
                c[0] = new ar(l, s, v[0]), c[1] = new ar(h, g, v[1]);
              }
              if (this.minDistance <= this.terminateDistance)
                return null;
            }
        }
    },
    computeMinDistancePoints: function(t, e, n) {
      for (var i = 0; i < t.size(); i++)
        for (var r = t.get(i),
            s = 0; s < e.size(); s++) {
          var o = e.get(s),
              a = r.getCoordinate().distance(o.getCoordinate());
          if (a < this.minDistance && (this.minDistance = a, n[0] = new ar(r, 0, r.getCoordinate()), n[1] = new ar(o, 0, o.getCoordinate())), this.minDistance <= this.terminateDistance)
            return null;
        }
    },
    distance: function() {
      if (null === this.geom[0] || null === this.geom[1])
        throw new i("null geometries are not supported");
      return this.geom[0].isEmpty() || this.geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this.minDistance);
    },
    computeMinDistanceLines: function(t, e, n) {
      for (var i = 0; i < t.size(); i++)
        for (var r = t.get(i),
            s = 0; s < e.size(); s++) {
          var o = e.get(s);
          if (this.computeMinDistance(r, o, n), this.minDistance <= this.terminateDistance)
            return null;
        }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return hr;
    }
  }), hr.distance = function(t, e) {
    var n = new hr(t, e);
    return n.distance();
  }, hr.isWithinDistance = function(t, e, n) {
    var i = new hr(t, e, n);
    return i.distance() <= n;
  }, hr.nearestPoints = function(t, e) {
    var n = new hr(t, e);
    return n.nearestPoints();
  };
  var So = Object.freeze({DistanceOp: hr});
  e(cr.prototype, {
    getCoordinates: function() {
      if (null === this.coordinates) {
        for (var t = 0,
            e = 0,
            n = new N,
            i = this.directedEdges.iterator(); i.hasNext(); ) {
          var r = i.next();
          r.getEdgeDirection() ? t++ : e++, n.add(r.getEdge().getLine().getCoordinates(), !1, r.getEdgeDirection());
        }
        this.coordinates = n.toCoordinateArray(), e > t && H.reverse(this.coordinates);
      }
      return this.coordinates;
    },
    toLineString: function() {
      return this.factory.createLineString(this.getCoordinates());
    },
    add: function(t) {
      this.directedEdges.add(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return cr;
    }
  }), e(fr.prototype, {
    setVisited: function(t) {
      this._isVisited = t;
    },
    isMarked: function() {
      return this._isMarked;
    },
    setData: function(t) {
      this.data = t;
    },
    getData: function() {
      return this.data;
    },
    setMarked: function(t) {
      this._isMarked = t;
    },
    getContext: function() {
      return this.data;
    },
    isVisited: function() {
      return this._isVisited;
    },
    setContext: function(t) {
      this.data = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return fr;
    }
  }), fr.getComponentWithVisitedState = function(t, e) {
    for (; t.hasNext(); ) {
      var n = t.next();
      if (n.isVisited() === e)
        return n;
    }
    return null;
  }, fr.setVisited = function(t, e) {
    for (; t.hasNext(); ) {
      var n = t.next();
      n.setVisited(e);
    }
  }, fr.setMarked = function(t, e) {
    for (; t.hasNext(); ) {
      var n = t.next();
      n.setMarked(e);
    }
  }, h(gr, fr), e(gr.prototype, {
    isRemoved: function() {
      return null === this.parentEdge;
    },
    compareDirection: function(t) {
      return this.quadrant > t.quadrant ? 1 : this.quadrant < t.quadrant ? -1 : he.computeOrientation(t.p0, t.p1, this.p1);
    },
    getCoordinate: function() {
      return this.from.getCoordinate();
    },
    print: function(t) {
      var e = this.getClass().getName(),
          n = e.lastIndexOf("."),
          i = e.substring(n + 1);
      t.print("  " + i + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + this.angle);
    },
    getDirectionPt: function() {
      return this.p1;
    },
    getAngle: function() {
      return this.angle;
    },
    compareTo: function(t) {
      var e = t;
      return this.compareDirection(e);
    },
    getFromNode: function() {
      return this.from;
    },
    getSym: function() {
      return this.sym;
    },
    setEdge: function(t) {
      this.parentEdge = t;
    },
    remove: function() {
      this.sym = null, this.parentEdge = null;
    },
    getEdge: function() {
      return this.parentEdge;
    },
    getQuadrant: function() {
      return this.quadrant;
    },
    setSym: function(t) {
      this.sym = t;
    },
    getToNode: function() {
      return this.to;
    },
    getEdgeDirection: function() {
      return this.edgeDirection;
    },
    interfaces_: function() {
      return [s];
    },
    getClass: function() {
      return gr;
    }
  }), gr.toEdges = function(t) {
    for (var e = new I,
        n = t.iterator(); n.hasNext(); )
      e.add(n.next().parentEdge);
    return e;
  }, h(dr, gr), e(dr.prototype, {
    getNext: function() {
      return 2 !== this.getToNode().getDegree() ? null : this.getToNode().getOutEdges().getEdges().get(0) === this.getSym() ? this.getToNode().getOutEdges().getEdges().get(1) : (f.isTrue(this.getToNode().getOutEdges().getEdges().get(1) === this.getSym()), this.getToNode().getOutEdges().getEdges().get(0));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return dr;
    }
  }), h(pr, fr), e(pr.prototype, {
    isRemoved: function() {
      return null === this.dirEdge;
    },
    setDirectedEdges: function(t, e) {
      this.dirEdge = [t, e], t.setEdge(this), e.setEdge(this), t.setSym(e), e.setSym(t), t.getFromNode().addOutEdge(t), e.getFromNode().addOutEdge(e);
    },
    getDirEdge: function() {
      if (Number.isInteger(arguments[0])) {
        var t = arguments[0];
        return this.dirEdge[t];
      }
      if (arguments[0] instanceof mr) {
        var e = arguments[0];
        return this.dirEdge[0].getFromNode() === e ? this.dirEdge[0] : this.dirEdge[1].getFromNode() === e ? this.dirEdge[1] : null;
      }
    },
    remove: function() {
      this.dirEdge = null;
    },
    getOppositeNode: function(t) {
      return this.dirEdge[0].getFromNode() === t ? this.dirEdge[0].getToNode() : this.dirEdge[1].getFromNode() === t ? this.dirEdge[1].getToNode() : null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return pr;
    }
  }), e(vr.prototype, {
    getNextEdge: function(t) {
      var e = this.getIndex(t);
      return this.outEdges.get(this.getIndex(e + 1));
    },
    getCoordinate: function() {
      var t = this.iterator();
      if (!t.hasNext())
        return null;
      var e = t.next();
      return e.getCoordinate();
    },
    iterator: function() {
      return this.sortEdges(), this.outEdges.iterator();
    },
    sortEdges: function() {
      this.sorted || (ho.sort(this.outEdges), this.sorted = !0);
    },
    remove: function(t) {
      this.outEdges.remove(t);
    },
    getEdges: function() {
      return this.sortEdges(), this.outEdges;
    },
    getNextCWEdge: function(t) {
      var e = this.getIndex(t);
      return this.outEdges.get(this.getIndex(e - 1));
    },
    getIndex: function() {
      if (arguments[0] instanceof pr) {
        var t = arguments[0];
        this.sortEdges();
        for (var e = 0; e < this.outEdges.size(); e++) {
          var n = this.outEdges.get(e);
          if (n.getEdge() === t)
            return e;
        }
        return -1;
      }
      if (arguments[0] instanceof gr) {
        var i = arguments[0];
        this.sortEdges();
        for (var e = 0; e < this.outEdges.size(); e++) {
          var n = this.outEdges.get(e);
          if (n === i)
            return e;
        }
        return -1;
      }
      if (Number.isInteger(arguments[0])) {
        var r = arguments[0],
            s = r % this.outEdges.size();
        return 0 > s && (s += this.outEdges.size()), s;
      }
    },
    add: function(t) {
      this.outEdges.add(t), this.sorted = !1;
    },
    getDegree: function() {
      return this.outEdges.size();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return vr;
    }
  }), h(mr, fr), e(mr.prototype, {
    isRemoved: function() {
      return null === this.pt;
    },
    addOutEdge: function(t) {
      this.deStar.add(t);
    },
    getCoordinate: function() {
      return this.pt;
    },
    getOutEdges: function() {
      return this.deStar;
    },
    remove: function() {
      if (0 === arguments.length)
        this.pt = null;
      else if (1 === arguments.length) {
        var t = arguments[0];
        this.deStar.remove(t);
      }
    },
    getIndex: function(t) {
      return this.deStar.getIndex(t);
    },
    getDegree: function() {
      return this.deStar.getDegree();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return mr;
    }
  }), mr.getEdgesBetween = function(t, e) {
    var n = gr.toEdges(t.getOutEdges().getEdges()),
        i = new J(n),
        r = gr.toEdges(e.getOutEdges().getEdges());
    return i.retainAll(r), i;
  }, h(yr, pr), e(yr.prototype, {
    getLine: function() {
      return this.line;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return yr;
    }
  }), e(xr.prototype, {
    find: function(t) {
      return this.nodeMap.get(t);
    },
    iterator: function() {
      return this.nodeMap.values().iterator();
    },
    remove: function(t) {
      return this.nodeMap.remove(t);
    },
    values: function() {
      return this.nodeMap.values();
    },
    add: function(t) {
      return this.nodeMap.put(t.getCoordinate(), t), t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return xr;
    }
  }), e(Er.prototype, {
    findNodesOfDegree: function(t) {
      for (var e = new I,
          n = this.nodeIterator(); n.hasNext(); ) {
        var i = n.next();
        i.getDegree() === t && e.add(i);
      }
      return e;
    },
    dirEdgeIterator: function() {
      return this.dirEdges.iterator();
    },
    edgeIterator: function() {
      return this.edges.iterator();
    },
    remove: function() {
      if (arguments[0] instanceof pr) {
        var t = arguments[0];
        this.remove(t.getDirEdge(0)), this.remove(t.getDirEdge(1)), this.edges.remove(t), t.remove();
      } else if (arguments[0] instanceof gr) {
        var e = arguments[0],
            n = e.getSym();
        null !== n && n.setSym(null), e.getFromNode().remove(e), e.remove(), this.dirEdges.remove(e);
      } else if (arguments[0] instanceof mr) {
        for (var i = arguments[0],
            r = i.getOutEdges().getEdges(),
            s = r.iterator(); s.hasNext(); ) {
          var o = s.next(),
              n = o.getSym();
          null !== n && this.remove(n), this.dirEdges.remove(o);
          var a = o.getEdge();
          null !== a && this.edges.remove(a);
        }
        this.nodeMap.remove(i.getCoordinate()), i.remove();
      }
    },
    findNode: function(t) {
      return this.nodeMap.find(t);
    },
    getEdges: function() {
      return this.edges;
    },
    nodeIterator: function() {
      return this.nodeMap.iterator();
    },
    contains: function() {
      if (arguments[0] instanceof pr) {
        var t = arguments[0];
        return this.edges.contains(t);
      }
      if (arguments[0] instanceof gr) {
        var e = arguments[0];
        return this.dirEdges.contains(e);
      }
    },
    add: function() {
      if (arguments[0] instanceof mr) {
        var t = arguments[0];
        this.nodeMap.add(t);
      } else if (arguments[0] instanceof pr) {
        var e = arguments[0];
        this.edges.add(e), this.add(e.getDirEdge(0)), this.add(e.getDirEdge(1));
      } else if (arguments[0] instanceof gr) {
        var n = arguments[0];
        this.dirEdges.add(n);
      }
    },
    getNodes: function() {
      return this.nodeMap.values();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Er;
    }
  }), h(Ir, Er), e(Ir.prototype, {
    addEdge: function(t) {
      if (t.isEmpty())
        return null;
      var e = H.removeRepeatedPoints(t.getCoordinates());
      if (e.length <= 1)
        return null;
      var n = e[0],
          i = e[e.length - 1],
          r = this.getNode(n),
          s = this.getNode(i),
          o = new dr(r, s, e[1], !0),
          a = new dr(s, r, e[e.length - 2], !1),
          u = new yr(t);
      u.setDirectedEdges(o, a), this.add(u);
    },
    getNode: function(t) {
      var e = this.findNode(t);
      return null === e && (e = new mr(t), this.add(e)), e;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ir;
    }
  }), e(Nr.prototype, {
    buildEdgeStringsForUnprocessedNodes: function() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext(); ) {
        var e = t.next();
        e.isMarked() || (f.isTrue(2 === e.getDegree()), this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
      }
    },
    buildEdgeStringsForNonDegree2Nodes: function() {
      for (var t = this.graph.getNodes().iterator(); t.hasNext(); ) {
        var e = t.next();
        2 !== e.getDegree() && (this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
      }
    },
    buildEdgeStringsForObviousStartNodes: function() {
      this.buildEdgeStringsForNonDegree2Nodes();
    },
    getMergedLineStrings: function() {
      return this.merge(), this.mergedLineStrings;
    },
    buildEdgeStringsStartingAt: function(t) {
      for (var e = t.getOutEdges().iterator(); e.hasNext(); ) {
        var n = e.next();
        n.getEdge().isMarked() || this.edgeStrings.add(this.buildEdgeStringStartingWith(n));
      }
    },
    merge: function() {
      if (null !== this.mergedLineStrings)
        return null;
      fr.setMarked(this.graph.nodeIterator(), !1), fr.setMarked(this.graph.edgeIterator(), !1), this.edgeStrings = new I, this.buildEdgeStringsForObviousStartNodes(), this.buildEdgeStringsForIsolatedLoops(), this.mergedLineStrings = new I;
      for (var t = this.edgeStrings.iterator(); t.hasNext(); ) {
        var e = t.next();
        this.mergedLineStrings.add(e.toLineString());
      }
    },
    buildEdgeStringStartingWith: function(t) {
      var e = new cr(this.factory),
          n = t;
      do
        e.add(n), n.getEdge().setMarked(!0), n = n.getNext();
 while (null !== n && n !== t);
      return e;
    },
    add: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        t.apply({
          interfaces_: function() {
            return [q];
          },
          filter: function(t) {
            t instanceof St && this.add(t);
          }
        });
      } else if (R(arguments[0], v)) {
        var e = arguments[0];
        this.mergedLineStrings = null;
        for (var n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.add(i);
        }
      } else if (arguments[0] instanceof St) {
        var r = arguments[0];
        null === this.factory && (this.factory = r.getFactory()), this.graph.addEdge(r);
      }
    },
    buildEdgeStringsForIsolatedLoops: function() {
      this.buildEdgeStringsForUnprocessedNodes();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Nr;
    }
  });
  var wo = Object.freeze({LineMerger: Nr}),
      Lo = Object.freeze({OverlayOp: ii});
  h(Cr, gr), e(Cr.prototype, {
    getNext: function() {
      return this.next;
    },
    isInRing: function() {
      return null !== this.edgeRing;
    },
    setRing: function(t) {
      this.edgeRing = t;
    },
    setLabel: function(t) {
      this.label = t;
    },
    getLabel: function() {
      return this.label;
    },
    setNext: function(t) {
      this.next = t;
    },
    getRing: function() {
      return this.edgeRing;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Cr;
    }
  }), h(Sr, pr), e(Sr.prototype, {
    getLine: function() {
      return this.line;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Sr;
    }
  }), e(wr.prototype, {
    isIncluded: function() {
      return this._isIncluded;
    },
    getCoordinates: function() {
      if (null === this.ringPts) {
        for (var t = new N,
            e = this.deList.iterator(); e.hasNext(); ) {
          var n = e.next(),
              i = n.getEdge();
          wr.addEdge(i.getLine().getCoordinates(), n.getEdgeDirection(), t);
        }
        this.ringPts = t.toCoordinateArray();
      }
      return this.ringPts;
    },
    isIncludedSet: function() {
      return this._isIncludedSet;
    },
    isValid: function() {
      return this.getCoordinates(), this.ringPts.length <= 3 ? !1 : (this.getRing(), this.ring.isValid());
    },
    build: function(t) {
      var e = t;
      do
        this.add(e), e.setRing(this), e = e.getNext(), f.isTrue(null !== e, "found null DE in ring"), f.isTrue(e === t || !e.isInRing(), "found DE already in ring");
 while (e !== t);
    },
    isOuterHole: function() {
      return this._isHole ? !this.hasShell() : !1;
    },
    getPolygon: function() {
      var t = null;
      if (null !== this.holes) {
        t = new Array(this.holes.size()).fill(null);
        for (var e = 0; e < this.holes.size(); e++)
          t[e] = this.holes.get(e);
      }
      var n = this.factory.createPolygon(this.ring, t);
      return n;
    },
    isHole: function() {
      return this._isHole;
    },
    isProcessed: function() {
      return this._isProcessed;
    },
    addHole: function() {
      if (arguments[0] instanceof bt) {
        var t = arguments[0];
        null === this.holes && (this.holes = new I), this.holes.add(t);
      } else if (arguments[0] instanceof wr) {
        var e = arguments[0];
        e.setShell(this);
        var n = e.getRing();
        null === this.holes && (this.holes = new I), this.holes.add(n);
      }
    },
    setIncluded: function(t) {
      this._isIncluded = t, this._isIncludedSet = !0;
    },
    getOuterHole: function() {
      if (this.isHole())
        return null;
      for (var t = 0; t < this.deList.size(); t++) {
        var e = this.deList.get(t),
            n = e.getSym().getRing();
        if (n.isOuterHole())
          return n;
      }
      return null;
    },
    computeHole: function() {
      var t = this.getRing();
      this._isHole = he.isCCW(t.getCoordinates());
    },
    hasShell: function() {
      return null !== this.shell;
    },
    isOuterShell: function() {
      return null !== this.getOuterHole();
    },
    getLineString: function() {
      return this.getCoordinates(), this.factory.createLineString(this.ringPts);
    },
    toString: function() {
      return se.toLineString(new Gt(this.getCoordinates()));
    },
    getShell: function() {
      return this.isHole() ? this.shell : this;
    },
    add: function(t) {
      this.deList.add(t);
    },
    getRing: function() {
      if (null !== this.ring)
        return this.ring;
      this.getCoordinates(), this.ringPts.length < 3 && A.out.println(this.ringPts);
      try {
        this.ring = this.factory.createLinearRing(this.ringPts);
      } catch (t) {
        if (!(t instanceof S))
          throw t;
        A.out.println(this.ringPts);
      } finally {}
      return this.ring;
    },
    updateIncluded: function() {
      if (this.isHole())
        return null;
      for (var t = 0; t < this.deList.size(); t++) {
        var e = this.deList.get(t),
            n = e.getSym().getRing().getShell();
        if (null !== n && n.isIncludedSet())
          return this.setIncluded(!n.isIncluded()), null;
      }
    },
    setShell: function(t) {
      this.shell = t;
    },
    setProcessed: function(t) {
      this._isProcessed = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return wr;
    }
  }), wr.findDirEdgesInRing = function(t) {
    var e = t,
        n = new I;
    do
      n.add(e), e = e.getNext(), f.isTrue(null !== e, "found null DE in ring"), f.isTrue(e === t || !e.isInRing(), "found DE already in ring");
 while (e !== t);
    return n;
  }, wr.addEdge = function(t, e, n) {
    if (e)
      for (var i = 0; i < t.length; i++)
        n.add(t[i], !1);
    else
      for (var i = t.length - 1; i >= 0; i--)
        n.add(t[i], !1);
  }, wr.findEdgeRingContaining = function(t, e) {
    for (var n = t.getRing(),
        i = n.getEnvelopeInternal(),
        r = n.getCoordinateN(0),
        s = null,
        o = null,
        a = e.iterator(); a.hasNext(); ) {
      var u = a.next(),
          l = u.getRing(),
          h = l.getEnvelopeInternal();
      if (!h.equals(i) && h.contains(i)) {
        r = H.ptNotInList(n.getCoordinates(), l.getCoordinates());
        var c = !1;
        he.isPointInRing(r, l.getCoordinates()) && (c = !0), c && (null === s || o.contains(h)) && (s = u, o = s.getRing().getEnvelopeInternal());
      }
    }
    return s;
  }, e(Lr.prototype, {
    compare: function(t, e) {
      var n = t,
          i = e;
      return n.getRing().getEnvelope().compareTo(i.getRing().getEnvelope());
    },
    interfaces_: function() {
      return [a];
    },
    getClass: function() {
      return Lr;
    }
  }), wr.EnvelopeComparator = Lr, h(Rr, Er), e(Rr.prototype, {
    findEdgeRing: function(t) {
      var e = new wr(this.factory);
      return e.build(t), e;
    },
    computeDepthParity: function() {
      if (0 === arguments.length)
        for (; ; ) {
          var t = null;
          if (null === t)
            return null;
          this.computeDepthParity(t);
        }
      else if (1 === arguments.length) {
        arguments[0];
      }
    },
    computeNextCWEdges: function() {
      for (var t = this.nodeIterator(); t.hasNext(); ) {
        var e = t.next();
        Rr.computeNextCWEdges(e);
      }
    },
    addEdge: function(t) {
      if (t.isEmpty())
        return null;
      var e = H.removeRepeatedPoints(t.getCoordinates());
      if (e.length < 2)
        return null;
      var n = e[0],
          i = e[e.length - 1],
          r = this.getNode(n),
          s = this.getNode(i),
          o = new Cr(r, s, e[1], !0),
          a = new Cr(s, r, e[e.length - 2], !1),
          u = new Sr(t);
      u.setDirectedEdges(o, a), this.add(u);
    },
    deleteCutEdges: function() {
      this.computeNextCWEdges(), Rr.findLabeledEdgeRings(this.dirEdges);
      for (var t = new I,
          e = this.dirEdges.iterator(); e.hasNext(); ) {
        var n = e.next();
        if (!n.isMarked()) {
          var i = n.getSym();
          if (n.getLabel() === i.getLabel()) {
            n.setMarked(!0), i.setMarked(!0);
            var r = n.getEdge();
            t.add(r.getLine());
          }
        }
      }
      return t;
    },
    getEdgeRings: function() {
      this.computeNextCWEdges(), Rr.label(this.dirEdges, -1);
      var t = Rr.findLabeledEdgeRings(this.dirEdges);
      this.convertMaximalToMinimalEdgeRings(t);
      for (var e = new I,
          n = this.dirEdges.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (!i.isMarked() && !i.isInRing()) {
          var r = this.findEdgeRing(i);
          e.add(r);
        }
      }
      return e;
    },
    getNode: function(t) {
      var e = this.findNode(t);
      return null === e && (e = new mr(t), this.add(e)), e;
    },
    convertMaximalToMinimalEdgeRings: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next(),
            i = n.getLabel(),
            r = Rr.findIntersectionNodes(n, i);
        if (null !== r)
          for (var s = r.iterator(); s.hasNext(); ) {
            var o = s.next();
            Rr.computeNextCCWEdges(o, i);
          }
      }
    },
    deleteDangles: function() {
      for (var t = this.findNodesOfDegree(1),
          e = new J,
          n = new pe,
          i = t.iterator(); i.hasNext(); )
        n.push(i.next());
      for (; !n.isEmpty(); ) {
        var r = n.pop();
        Rr.deleteAllEdges(r);
        for (var s = r.getOutEdges().getEdges(),
            i = s.iterator(); i.hasNext(); ) {
          var o = i.next();
          o.setMarked(!0);
          var a = o.getSym();
          null !== a && a.setMarked(!0);
          var u = o.getEdge();
          e.add(u.getLine());
          var l = o.getToNode();
          1 === Rr.getDegreeNonDeleted(l) && n.push(l);
        }
      }
      return e;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Rr;
    }
  }), Rr.findLabeledEdgeRings = function(t) {
    for (var e = new I,
        n = 1,
        i = t.iterator(); i.hasNext(); ) {
      var r = i.next();
      if (!(r.isMarked() || r.getLabel() >= 0)) {
        e.add(r);
        var s = wr.findDirEdgesInRing(r);
        Rr.label(s, n), n++;
      }
    }
    return e;
  }, Rr.getDegreeNonDeleted = function(t) {
    for (var e = t.getOutEdges().getEdges(),
        n = 0,
        i = e.iterator(); i.hasNext(); ) {
      var r = i.next();
      r.isMarked() || n++;
    }
    return n;
  }, Rr.deleteAllEdges = function(t) {
    for (var e = t.getOutEdges().getEdges(),
        n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      i.setMarked(!0);
      var r = i.getSym();
      null !== r && r.setMarked(!0);
    }
  }, Rr.label = function(t, e) {
    for (var n = t.iterator(); n.hasNext(); ) {
      var i = n.next();
      i.setLabel(e);
    }
  }, Rr.computeNextCWEdges = function(t) {
    for (var e = t.getOutEdges(),
        n = null,
        i = null,
        r = e.getEdges().iterator(); r.hasNext(); ) {
      var s = r.next();
      if (!s.isMarked()) {
        if (null === n && (n = s), null !== i) {
          var o = i.getSym();
          o.setNext(s);
        }
        i = s;
      }
    }
    if (null !== i) {
      var o = i.getSym();
      o.setNext(n);
    }
  }, Rr.computeNextCCWEdges = function(t, e) {
    for (var n = t.getOutEdges(),
        i = null,
        r = null,
        s = n.getEdges(),
        o = s.size() - 1; o >= 0; o--) {
      var a = s.get(o),
          u = a.getSym(),
          l = null;
      a.getLabel() === e && (l = a);
      var h = null;
      u.getLabel() === e && (h = u), null === l && null === h || (null !== h && (r = h), null !== l && (null !== r && (r.setNext(l), r = null), null === i && (i = l)));
    }
    null !== r && (f.isTrue(null !== i), r.setNext(i));
  }, Rr.getDegree = function(t, e) {
    for (var n = t.getOutEdges().getEdges(),
        i = 0,
        r = n.iterator(); r.hasNext(); ) {
      var s = r.next();
      s.getLabel() === e && i++;
    }
    return i;
  }, Rr.findIntersectionNodes = function(t, e) {
    var n = t,
        i = null;
    do {
      var r = n.getFromNode();
      Rr.getDegree(r, e) > 1 && (null === i && (i = new I), i.add(r)), n = n.getNext(), f.isTrue(null !== n, "found null DE in ring"), f.isTrue(n === t || !n.isInRing(), "found DE already in ring");
    } while (n !== t);
    return i;
  }, e(Tr.prototype, {
    getGeometry: function() {
      return null === this.geomFactory && (this.geomFactory = new ie), this.polygonize(), this.extractOnlyPolygonal ? this.geomFactory.buildGeometry(this.polyList) : this.geomFactory.createGeometryCollection(ie.toGeometryArray(this.polyList));
    },
    getInvalidRingLines: function() {
      return this.polygonize(), this.invalidRingLines;
    },
    findValidRings: function(t, e, n) {
      for (var i = t.iterator(); i.hasNext(); ) {
        var r = i.next();
        r.isValid() ? e.add(r) : n.add(r.getLineString());
      }
    },
    polygonize: function() {
      if (null !== this.polyList)
        return null;
      if (this.polyList = new I, null === this.graph)
        return null;
      this.dangles = this.graph.deleteDangles(), this.cutEdges = this.graph.deleteCutEdges();
      var t = this.graph.getEdgeRings(),
          e = new I;
      this.invalidRingLines = new I, this.isCheckingRingsValid ? this.findValidRings(t, e, this.invalidRingLines) : e = t, this.findShellsAndHoles(e), Tr.assignHolesToShells(this.holeList, this.shellList), ho.sort(this.shellList, new wr.EnvelopeComparator);
      var n = !0;
      this.extractOnlyPolygonal && (Tr.findDisjointShells(this.shellList), n = !1), this.polyList = Tr.extractPolygons(this.shellList, n);
    },
    getDangles: function() {
      return this.polygonize(), this.dangles;
    },
    getCutEdges: function() {
      return this.polygonize(), this.cutEdges;
    },
    getPolygons: function() {
      return this.polygonize(), this.polyList;
    },
    add: function() {
      if (R(arguments[0], v))
        for (var t = arguments[0],
            e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.add(n);
        }
      else if (arguments[0] instanceof St) {
        var i = arguments[0];
        this.geomFactory = i.getFactory(), null === this.graph && (this.graph = new Rr(this.geomFactory)), this.graph.addEdge(i);
      } else if (arguments[0] instanceof B) {
        var r = arguments[0];
        r.apply(this.lineStringAdder);
      }
    },
    setCheckRingsValid: function(t) {
      this.isCheckingRingsValid = t;
    },
    findShellsAndHoles: function(t) {
      this.holeList = new I, this.shellList = new I;
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.computeHole(), n.isHole() ? this.holeList.add(n) : this.shellList.add(n);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Tr;
    }
  }), Tr.findOuterShells = function(t) {
    for (var e = t.iterator(); e.hasNext(); ) {
      var n = e.next(),
          i = n.getOuterHole();
      null === i || i.isProcessed() || (n.setIncluded(!0), i.setProcessed(!0));
    }
  }, Tr.extractPolygons = function(t, e) {
    for (var n = new I,
        i = t.iterator(); i.hasNext(); ) {
      var r = i.next();
      (e || r.isIncluded()) && n.add(r.getPolygon());
    }
    return n;
  }, Tr.assignHolesToShells = function(t, e) {
    for (var n = t.iterator(); n.hasNext(); ) {
      var i = n.next();
      Tr.assignHoleToShell(i, e);
    }
  }, Tr.assignHoleToShell = function(t, e) {
    var n = wr.findEdgeRingContaining(t, e);
    null !== n && n.addHole(t);
  }, Tr.findDisjointShells = function(t) {
    Tr.findOuterShells(t);
    var e = null;
    do {
      e = !1;
      for (var n = t.iterator(); n.hasNext(); ) {
        var i = n.next();
        i.isIncludedSet() || (i.updateIncluded(), i.isIncludedSet() || (e = !0));
      }
    } while (e);
  }, e(Pr.prototype, {
    filter: function(t) {
      t instanceof St && this.p.add(t);
    },
    interfaces_: function() {
      return [q];
    },
    getClass: function() {
      return Pr;
    }
  }), Tr.LineStringAdder = Pr;
  var Ro = Object.freeze({Polygonizer: Tr});
  e(br.prototype, {
    createEdgeEndForNext: function(t, e, n, i) {
      var r = n.segmentIndex + 1;
      if (r >= t.getNumPoints() && null === i)
        return null;
      var s = t.getCoordinate(r);
      null !== i && i.segmentIndex === n.segmentIndex && (s = i.coord);
      var o = new En(t, n.coord, s, new gn(t.getLabel()));
      e.add(o);
    },
    createEdgeEndForPrev: function(t, e, n, i) {
      var r = n.segmentIndex;
      if (0 === n.dist) {
        if (0 === r)
          return null;
        r--;
      }
      var s = t.getCoordinate(r);
      null !== i && i.segmentIndex >= r && (s = i.coord);
      var o = new gn(t.getLabel());
      o.flip();
      var a = new En(t, n.coord, s, o);
      e.add(a);
    },
    computeEdgeEnds: function() {
      if (1 === arguments.length) {
        for (var t = arguments[0],
            e = new I,
            n = t; n.hasNext(); ) {
          var i = n.next();
          this.computeEdgeEnds(i, e);
        }
        return e;
      }
      if (2 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            o = r.getEdgeIntersectionList();
        o.addEndpoints();
        var a = o.iterator(),
            u = null,
            l = null;
        if (!a.hasNext())
          return null;
        var h = a.next();
        do
          u = l, l = h, h = null, a.hasNext() && (h = a.next()), null !== l && (this.createEdgeEndForPrev(r, s, l, u), this.createEdgeEndForNext(r, s, l, h));
 while (null !== l);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return br;
    }
  }), h(Or, En), e(Or.prototype, {
    insert: function(t) {
      this.edgeEnds.add(t);
    },
    print: function(t) {
      t.println("EdgeEndBundle--> Label: " + this.label);
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.print(t), t.println();
      }
    },
    iterator: function() {
      return this.edgeEnds.iterator();
    },
    getEdgeEnds: function() {
      return this.edgeEnds;
    },
    computeLabelOn: function(t, e) {
      for (var n = 0,
          i = !1,
          r = this.iterator(); r.hasNext(); ) {
        var s = r.next(),
            o = s.getLabel().getLocation(t);
        o === L.BOUNDARY && n++, o === L.INTERIOR && (i = !0);
      }
      var o = L.NONE;
      i && (o = L.INTERIOR), n > 0 && (o = $n.determineBoundary(e, n)), this.label.setLocation(t, o);
    },
    computeLabelSide: function(t, e) {
      for (var n = this.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (i.getLabel().isArea()) {
          var r = i.getLabel().getLocation(t, e);
          if (r === L.INTERIOR)
            return this.label.setLocation(t, e, L.INTERIOR), null;
          r === L.EXTERIOR && this.label.setLocation(t, e, L.EXTERIOR);
        }
      }
    },
    getLabel: function() {
      return this.label;
    },
    computeLabelSides: function(t) {
      this.computeLabelSide(t, cn.LEFT), this.computeLabelSide(t, cn.RIGHT);
    },
    updateIM: function(t) {
      Jn.updateIM(this.label, t);
    },
    computeLabel: function(t) {
      for (var e = !1,
          n = this.iterator(); n.hasNext(); ) {
        var i = n.next();
        i.getLabel().isArea() && (e = !0);
      }
      e ? this.label = new gn(L.NONE, L.NONE, L.NONE) : this.label = new gn(L.NONE);
      for (var r = 0; 2 > r; r++)
        this.computeLabelOn(r, t), e && this.computeLabelSides(r);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Or;
    }
  }), h(_r, Pn), e(_r.prototype, {
    updateIM: function(t) {
      for (var e = this.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.updateIM(t);
      }
    },
    insert: function(t) {
      var e = this.edgeMap.get(t);
      null === e ? (e = new Or(t), this.insertEdgeEnd(t, e)) : e.insert(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return _r;
    }
  }), h(Mr, yn), e(Mr.prototype, {
    updateIMFromEdges: function(t) {
      this.edges.updateIM(t);
    },
    computeIM: function(t) {
      t.setAtLeastIfValid(this.label.getLocation(0), this.label.getLocation(1), 0);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Mr;
    }
  }), h(Dr, Nn), e(Dr.prototype, {
    createNode: function(t) {
      return new Mr(t, new _r);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Dr;
    }
  }), e(Ar.prototype, {
    insertEdgeEnds: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.nodes.add(n);
      }
    },
    computeProperIntersectionIM: function(t, e) {
      var n = this.arg[0].getGeometry().getDimension(),
          i = this.arg[1].getGeometry().getDimension(),
          r = t.hasProperIntersection(),
          s = t.hasProperInteriorIntersection();
      2 === n && 2 === i ? r && e.setAtLeast("212101212") : 2 === n && 1 === i ? (r && e.setAtLeast("FFF0FFFF2"), s && e.setAtLeast("1FFFFF1FF")) : 1 === n && 2 === i ? (r && e.setAtLeast("F0FFFFFF2"), s && e.setAtLeast("1F1FFFFFF")) : 1 === n && 1 === i && s && e.setAtLeast("0FFFFFFFF");
    },
    labelIsolatedEdges: function(t, e) {
      for (var n = this.arg[t].getEdgeIterator(); n.hasNext(); ) {
        var i = n.next();
        i.isIsolated() && (this.labelIsolatedEdge(i, e, this.arg[e].getGeometry()), this.isolatedEdges.add(i));
      }
    },
    labelIsolatedEdge: function(t, e, n) {
      if (n.getDimension() > 0) {
        var i = this.ptLocator.locate(t.getCoordinate(), n);
        t.getLabel().setAllLocations(e, i);
      } else
        t.getLabel().setAllLocations(e, L.EXTERIOR);
    },
    computeIM: function() {
      var t = new fe;
      if (t.set(L.EXTERIOR, L.EXTERIOR, 2), !this.arg[0].getGeometry().getEnvelopeInternal().intersects(this.arg[1].getGeometry().getEnvelopeInternal()))
        return this.computeDisjointIM(t), t;
      this.arg[0].computeSelfNodes(this.li, !1), this.arg[1].computeSelfNodes(this.li, !1);
      var e = this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !1);
      this.computeIntersectionNodes(0), this.computeIntersectionNodes(1), this.copyNodesAndLabels(0), this.copyNodesAndLabels(1), this.labelIsolatedNodes(), this.computeProperIntersectionIM(e, t);
      var n = new br,
          i = n.computeEdgeEnds(this.arg[0].getEdgeIterator());
      this.insertEdgeEnds(i);
      var r = n.computeEdgeEnds(this.arg[1].getEdgeIterator());
      return this.insertEdgeEnds(r), this.labelNodeEdges(), this.labelIsolatedEdges(0, 1), this.labelIsolatedEdges(1, 0), this.updateIM(t), t;
    },
    labelNodeEdges: function() {
      for (var t = this.nodes.iterator(); t.hasNext(); ) {
        var e = t.next();
        e.getEdges().computeLabelling(this.arg);
      }
    },
    copyNodesAndLabels: function(t) {
      for (var e = this.arg[t].getNodeIterator(); e.hasNext(); ) {
        var n = e.next(),
            i = this.nodes.addNode(n.getCoordinate());
        i.setLabel(t, n.getLabel().getLocation(t));
      }
    },
    labelIntersectionNodes: function(t) {
      for (var e = this.arg[t].getEdgeIterator(); e.hasNext(); )
        for (var n = e.next(),
            i = n.getLabel().getLocation(t),
            r = n.getEdgeIntersectionList().iterator(); r.hasNext(); ) {
          var s = r.next(),
              o = this.nodes.find(s.coord);
          o.getLabel().isNull(t) && (i === L.BOUNDARY ? o.setLabelBoundary(t) : o.setLabel(t, L.INTERIOR));
        }
    },
    labelIsolatedNode: function(t, e) {
      var n = this.ptLocator.locate(t.getCoordinate(), this.arg[e].getGeometry());
      t.getLabel().setAllLocations(e, n);
    },
    computeIntersectionNodes: function(t) {
      for (var e = this.arg[t].getEdgeIterator(); e.hasNext(); )
        for (var n = e.next(),
            i = n.getLabel().getLocation(t),
            r = n.getEdgeIntersectionList().iterator(); r.hasNext(); ) {
          var s = r.next(),
              o = this.nodes.addNode(s.coord);
          i === L.BOUNDARY ? o.setLabelBoundary(t) : o.getLabel().isNull(t) && o.setLabel(t, L.INTERIOR);
        }
    },
    labelIsolatedNodes: function() {
      for (var t = this.nodes.iterator(); t.hasNext(); ) {
        var e = t.next(),
            n = e.getLabel();
        f.isTrue(n.getGeometryCount() > 0, "node with empty label found"), e.isIsolated() && (n.isNull(0) ? this.labelIsolatedNode(e, 0) : this.labelIsolatedNode(e, 1));
      }
    },
    updateIM: function(t) {
      for (var e = this.isolatedEdges.iterator(); e.hasNext(); ) {
        var n = e.next();
        n.updateIM(t);
      }
      for (var i = this.nodes.iterator(); i.hasNext(); ) {
        var r = i.next();
        r.updateIM(t), r.updateIMFromEdges(t);
      }
    },
    computeDisjointIM: function(t) {
      var e = this.arg[0].getGeometry();
      e.isEmpty() || (t.set(L.INTERIOR, L.EXTERIOR, e.getDimension()), t.set(L.BOUNDARY, L.EXTERIOR, e.getBoundaryDimension()));
      var n = this.arg[1].getGeometry();
      n.isEmpty() || (t.set(L.EXTERIOR, L.INTERIOR, n.getDimension()), t.set(L.EXTERIOR, L.BOUNDARY, n.getBoundaryDimension()));
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ar;
    }
  }), e(Fr.prototype, {
    isContainedInBoundary: function(t) {
      if (t instanceof Tt)
        return !1;
      if (t instanceof Lt)
        return this.isPointContainedInBoundary(t);
      if (t instanceof St)
        return this.isLineStringContainedInBoundary(t);
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);
        if (!this.isContainedInBoundary(n))
          return !1;
      }
      return !0;
    },
    isLineSegmentContainedInBoundary: function(t, e) {
      if (t.equals(e))
        return this.isPointContainedInBoundary(t);
      if (t.x === e.x) {
        if (t.x === this.rectEnv.getMinX() || t.x === this.rectEnv.getMaxX())
          return !0;
      } else if (t.y === e.y && (t.y === this.rectEnv.getMinY() || t.y === this.rectEnv.getMaxY()))
        return !0;
      return !1;
    },
    isLineStringContainedInBoundary: function(t) {
      for (var e = t.getCoordinateSequence(),
          n = new g,
          i = new g,
          r = 0; r < e.size() - 1; r++)
        if (e.getCoordinate(r, n), e.getCoordinate(r + 1, i), !this.isLineSegmentContainedInBoundary(n, i))
          return !1;
      return !0;
    },
    isPointContainedInBoundary: function() {
      if (arguments[0] instanceof Lt) {
        var t = arguments[0];
        return this.isPointContainedInBoundary(t.getCoordinate());
      }
      if (arguments[0] instanceof g) {
        var e = arguments[0];
        return e.x === this.rectEnv.getMinX() || e.x === this.rectEnv.getMaxX() || e.y === this.rectEnv.getMinY() || e.y === this.rectEnv.getMaxY();
      }
    },
    contains: function(t) {
      return this.rectEnv.contains(t.getEnvelopeInternal()) ? !this.isContainedInBoundary(t) : !1;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Fr;
    }
  }), Fr.contains = function(t, e) {
    var n = new Fr(t);
    return n.contains(e);
  }, e(Gr.prototype, {
    intersects: function(t, e) {
      var n = new C(t, e);
      if (!this.rectEnv.intersects(n))
        return !1;
      if (this.rectEnv.intersects(t))
        return !0;
      if (this.rectEnv.intersects(e))
        return !0;
      if (t.compareTo(e) > 0) {
        var i = t;
        t = e, e = i;
      }
      var r = !1;
      return e.y > t.y && (r = !0), r ? this.li.computeIntersection(t, e, this.diagDown0, this.diagDown1) : this.li.computeIntersection(t, e, this.diagUp0, this.diagUp1), !!this.li.hasIntersection();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Gr;
    }
  }), e(qr.prototype, {
    applyTo: function(t) {
      for (var e = 0; e < t.getNumGeometries() && !this._isDone; e++) {
        var n = t.getGeometryN(e);
        if (n instanceof ft)
          this.applyTo(n);
        else if (this.visit(n), this.isDone())
          return this._isDone = !0, null;
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return qr;
    }
  }), e(Br.prototype, {
    intersects: function(t) {
      if (!this.rectEnv.intersects(t.getEnvelopeInternal()))
        return !1;
      var e = new zr(this.rectEnv);
      if (e.applyTo(t), e.intersects())
        return !0;
      var n = new Vr(this.rectangle);
      if (n.applyTo(t), n.containsPoint())
        return !0;
      var i = new kr(this.rectangle);
      return i.applyTo(t), !!i.intersects();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Br;
    }
  }), Br.intersects = function(t, e) {
    var n = new Br(t);
    return n.intersects(e);
  }, h(zr, qr), e(zr.prototype, {
    isDone: function() {
      return this._intersects === !0;
    },
    visit: function(t) {
      var e = t.getEnvelopeInternal();
      return this.rectEnv.intersects(e) ? this.rectEnv.contains(e) ? (this._intersects = !0, null) : e.getMinX() >= this.rectEnv.getMinX() && e.getMaxX() <= this.rectEnv.getMaxX() ? (this._intersects = !0, null) : e.getMinY() >= this.rectEnv.getMinY() && e.getMaxY() <= this.rectEnv.getMaxY() ? (this._intersects = !0, null) : void 0 : null;
    },
    intersects: function() {
      return this._intersects;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return zr;
    }
  }), h(Vr, qr), e(Vr.prototype, {
    isDone: function() {
      return this._containsPoint === !0;
    },
    visit: function(t) {
      if (!(t instanceof Tt))
        return null;
      var e = t.getEnvelopeInternal();
      if (!this.rectEnv.intersects(e))
        return null;
      for (var n = new g,
          i = 0; 4 > i; i++)
        if (this.rectSeq.getCoordinate(i, n), e.contains(n) && Tn.containsPointInPolygon(n, t))
          return this._containsPoint = !0, null;
    },
    containsPoint: function() {
      return this._containsPoint;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Vr;
    }
  }), h(kr, qr), e(kr.prototype, {
    intersects: function() {
      return this.hasIntersection;
    },
    isDone: function() {
      return this.hasIntersection === !0;
    },
    visit: function(t) {
      var e = t.getEnvelopeInternal();
      if (!this.rectEnv.intersects(e))
        return null;
      var n = kn.getLines(t);
      this.checkIntersectionWithLineStrings(n);
    },
    checkIntersectionWithLineStrings: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        if (this.checkIntersectionWithSegments(n), this.hasIntersection)
          return null;
      }
    },
    checkIntersectionWithSegments: function(t) {
      for (var e = t.getCoordinateSequence(),
          n = 1; n < e.size(); n++)
        if (e.getCoordinate(n - 1, this.p0), e.getCoordinate(n, this.p1), this.rectIntersector.intersects(this.p0, this.p1))
          return this.hasIntersection = !0, null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return kr;
    }
  }), h(Yr, ti), e(Yr.prototype, {
    getIntersectionMatrix: function() {
      return this._relate.computeIM();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Yr;
    }
  }), Yr.covers = function(t, e) {
    return t.getEnvelopeInternal().covers(e.getEnvelopeInternal()) ? t.isRectangle() ? !0 : Yr.relate(t, e).isCovers() : !1;
  }, Yr.intersects = function(t, e) {
    return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? t.isRectangle() ? Br.intersects(t, e) : e.isRectangle() ? Br.intersects(e, t) : Yr.relate(t, e).isIntersects() : !1;
  }, Yr.touches = function(t, e) {
    return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? Yr.relate(t, e).isTouches(t.getDimension(), e.getDimension()) : !1;
  }, Yr.within = function(t, e) {
    return e.contains(t);
  }, Yr.coveredBy = function(t, e) {
    return Yr.covers(e, t);
  }, Yr.relate = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = new Yr(t, e),
          i = n.getIntersectionMatrix();
      return i;
    }
    if (3 === arguments.length) {
      if ("string" == typeof arguments[2] && arguments[0] instanceof B && arguments[1] instanceof B) {
        var r = arguments[0],
            s = arguments[1],
            o = arguments[2];
        return Yr.relateWithCheck(r, s).matches(o);
      }
      if (R(arguments[2], V) && arguments[0] instanceof B && arguments[1] instanceof B) {
        var a = arguments[0],
            u = arguments[1],
            l = arguments[2],
            n = new Yr(a, u, l),
            i = n.getIntersectionMatrix();
        return i;
      }
    }
  }, Yr.overlaps = function(t, e) {
    return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? Yr.relate(t, e).isOverlaps(t.getDimension(), e.getDimension()) : !1;
  }, Yr.disjoint = function(t, e) {
    return !t.intersects(e);
  }, Yr.relateWithCheck = function(t, e) {
    return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), Yr.relate(t, e);
  }, Yr.crosses = function(t, e) {
    return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? Yr.relate(t, e).isCrosses(t.getDimension(), e.getDimension()) : !1;
  }, Yr.contains = function(t, e) {
    return t.getEnvelopeInternal().contains(e.getEnvelopeInternal()) ? t.isRectangle() ? Fr.contains(t, e) : Yr.relate(t, e).isContains() : !1;
  };
  var To = Object.freeze({RelateOp: Yr});
  e(Ur.prototype, {
    extractElements: function(t, e) {
      if (null === t)
        return null;
      for (var n = 0; n < t.getNumGeometries(); n++) {
        var i = t.getGeometryN(n);
        this.skipEmpty && i.isEmpty() || e.add(i);
      }
    },
    combine: function() {
      for (var t = new I,
          e = this.inputGeoms.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.extractElements(n, t);
      }
      return 0 === t.size() ? null !== this.geomFactory ? this.geomFactory.createGeometryCollection(null) : null : this.geomFactory.buildGeometry(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ur;
    }
  }), Ur.combine = function() {
    if (1 === arguments.length) {
      var t = arguments[0],
          e = new Ur(t);
      return e.combine();
    }
    if (2 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          e = new Ur(Ur.createList(n, i));
      return e.combine();
    }
    if (3 === arguments.length) {
      var r = arguments[0],
          s = arguments[1],
          o = arguments[2],
          e = new Ur(Ur.createList(r, s, o));
      return e.combine();
    }
  }, Ur.extractFactory = function(t) {
    return t.isEmpty() ? null : t.iterator().next().getFactory();
  }, Ur.createList = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = new I;
      return n.add(t), n.add(e), n;
    }
    if (3 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          s = arguments[2],
          n = new I;
      return n.add(i), n.add(r), n.add(s), n;
    }
  }, e(Xr.prototype, {
    union: function() {
      for (var t = new Te,
          e = new at,
          n = 0; n < this.pointGeom.getNumGeometries(); n++) {
        var i = this.pointGeom.getGeometryN(n),
            r = i.getCoordinate(),
            s = t.locate(r, this.otherGeom);
        s === L.EXTERIOR && e.add(r);
      }
      if (0 === e.size())
        return this.otherGeom;
      var o = null,
          a = H.toCoordinateArray(e);
      return o = 1 === a.length ? this.geomFact.createPoint(a[0]) : this.geomFact.createMultiPointFromCoords(a), Ur.combine(o, this.otherGeom);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Xr;
    }
  }), Xr.union = function(t, e) {
    var n = new Xr(t, e);
    return n.union();
  }, e(Hr.prototype, {
    filter: function(t) {
      -1 !== this.sortIndex && t.getSortIndex() !== this.sortIndex || this.comps.add(t);
    },
    interfaces_: function() {
      return [ht];
    },
    getClass: function() {
      return Hr;
    }
  }), Hr.extract = function() {
    if (2 === arguments.length) {
      var t = arguments[0],
          e = arguments[1];
      return Hr.extract(t, e, new I);
    }
    if (3 === arguments.length) {
      var n = arguments[0],
          i = arguments[1],
          r = arguments[2];
      return n.getSortIndex() === i ? r.add(n) : n instanceof ft && n.apply(new Hr(i, r)), r;
    }
  }, e(Wr.prototype, {
    reduceToGeometries: function(t) {
      for (var e = new I,
          n = t.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = null;
        R(i, y) ? r = this.unionTree(i) : i instanceof B && (r = i), e.add(r);
      }
      return e;
    },
    extractByEnvelope: function(t, e, n) {
      for (var i = new I,
          r = 0; r < e.getNumGeometries(); r++) {
        var s = e.getGeometryN(r);
        s.getEnvelopeInternal().intersects(t) ? i.add(s) : n.add(s);
      }
      return this.geomFactory.buildGeometry(i);
    },
    unionOptimized: function(t, e) {
      var n = t.getEnvelopeInternal(),
          i = e.getEnvelopeInternal();
      if (!n.intersects(i)) {
        var r = Ur.combine(t, e);
        return r;
      }
      if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
        return this.unionActual(t, e);
      var s = n.intersection(i);
      return this.unionUsingEnvelopeIntersection(t, e, s);
    },
    union: function() {
      if (null === this.inputPolys)
        throw new IllegalStateException("union() method cannot be called twice");
      if (this.inputPolys.isEmpty())
        return null;
      this.geomFactory = this.inputPolys.iterator().next().getFactory();
      for (var t = new ke(Wr.STRTREE_NODE_CAPACITY),
          e = this.inputPolys.iterator(); e.hasNext(); ) {
        var n = e.next();
        t.insert(n.getEnvelopeInternal(), n);
      }
      this.inputPolys = null;
      var i = t.itemsTree(),
          r = this.unionTree(i);
      return r;
    },
    binaryUnion: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.binaryUnion(t, 0, t.size());
      }
      if (3 === arguments.length) {
        var e = arguments[0],
            n = arguments[1],
            i = arguments[2];
        if (1 >= i - n) {
          var r = Wr.getGeometry(e, n);
          return this.unionSafe(r, null);
        }
        if (i - n === 2)
          return this.unionSafe(Wr.getGeometry(e, n), Wr.getGeometry(e, n + 1));
        var s = Math.trunc((i + n) / 2),
            r = this.binaryUnion(e, n, s),
            o = this.binaryUnion(e, s, i);
        return this.unionSafe(r, o);
      }
    },
    repeatedUnion: function(t) {
      for (var e = null,
          n = t.iterator(); n.hasNext(); ) {
        var i = n.next();
        e = null === e ? i.copy() : e.union(i);
      }
      return e;
    },
    unionSafe: function(t, e) {
      return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e);
    },
    unionActual: function(t, e) {
      return Wr.restrictToPolygons(t.union(e));
    },
    unionTree: function(t) {
      var e = this.reduceToGeometries(t),
          n = this.binaryUnion(e);
      return n;
    },
    unionUsingEnvelopeIntersection: function(t, e, n) {
      var i = new I,
          r = this.extractByEnvelope(n, t, i),
          s = this.extractByEnvelope(n, e, i),
          o = this.unionActual(r, s);
      i.add(o);
      var a = Ur.combine(i);
      return a;
    },
    bufferUnion: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = t.get(0).getFactory(),
            n = e.buildGeometry(t),
            i = n.buffer(0);
        return i;
      }
      if (2 === arguments.length) {
        var r = arguments[0],
            s = arguments[1],
            e = r.getFactory(),
            n = e.createGeometryCollection([r, s]),
            i = n.buffer(0);
        return i;
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Wr;
    }
  }), Wr.restrictToPolygons = function(t) {
    if (R(t, Rt))
      return t;
    var e = or.getPolygons(t);
    return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon(ie.toPolygonArray(e));
  }, Wr.getGeometry = function(t, e) {
    return e >= t.size() ? null : t.get(e);
  }, Wr.union = function(t) {
    var e = new Wr(t);
    return e.union();
  }, Wr.STRTREE_NODE_CAPACITY = 4, e(jr.prototype, {
    unionNoOpt: function(t) {
      var e = this.geomFact.createPoint();
      return si.overlayOp(t, e, ii.UNION);
    },
    unionWithNull: function(t, e) {
      return null === t && null === e ? null : null === e ? t : null === t ? e : t.union(e);
    },
    extract: function() {
      if (R(arguments[0], v))
        for (var t = arguments[0],
            e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.extract(n);
        }
      else if (arguments[0] instanceof B) {
        var i = arguments[0];
        null === this.geomFact && (this.geomFact = i.getFactory()), Hr.extract(i, B.SORTINDEX_POLYGON, this.polygons), Hr.extract(i, B.SORTINDEX_LINESTRING, this.lines), Hr.extract(i, B.SORTINDEX_POINT, this.points);
      }
    },
    union: function t() {
      if (null === this.geomFact)
        return null;
      var e = null;
      if (this.points.size() > 0) {
        var n = this.geomFact.buildGeometry(this.points);
        e = this.unionNoOpt(n);
      }
      var i = null;
      if (this.lines.size() > 0) {
        var r = this.geomFact.buildGeometry(this.lines);
        i = this.unionNoOpt(r);
      }
      var s = null;
      this.polygons.size() > 0 && (s = Wr.union(this.polygons));
      var o = this.unionWithNull(i, s),
          t = null;
      return t = null === e ? o : null === o ? e : Xr.union(e, o), null === t ? this.geomFact.createGeometryCollection() : t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return jr;
    }
  }), jr.union = function() {
    if (1 === arguments.length) {
      if (R(arguments[0], v)) {
        var t = arguments[0],
            e = new jr(t);
        return e.union();
      }
      if (arguments[0] instanceof B) {
        var n = arguments[0],
            e = new jr(n);
        return e.union();
      }
    } else if (2 === arguments.length) {
      var i = arguments[0],
          r = arguments[1],
          e = new jr(i, r);
      return e.union();
    }
  };
  var Po = Object.freeze({UnaryUnionOp: jr});
  e(Kr.prototype, {
    visitInteriorRing: function(t, e) {
      var n = t.getCoordinates(),
          i = n[0],
          r = Kr.findDifferentPoint(n, i),
          s = e.findEdgeInSameDirection(i, r),
          o = e.findEdgeEnd(s),
          a = null;
      o.getLabel().getLocation(0, cn.RIGHT) === L.INTERIOR ? a = o : o.getSym().getLabel().getLocation(0, cn.RIGHT) === L.INTERIOR && (a = o.getSym()), f.isTrue(null !== a, "unable to find dirEdge with Interior on RHS"), this.visitLinkedDirectedEdges(a);
    },
    visitShellInteriors: function(t, e) {
      if (t instanceof Tt) {
        var n = t;
        this.visitInteriorRing(n.getExteriorRing(), e);
      }
      if (t instanceof Ot)
        for (var i = t,
            r = 0; r < i.getNumGeometries(); r++) {
          var n = i.getGeometryN(r);
          this.visitInteriorRing(n.getExteriorRing(), e);
        }
    },
    getCoordinate: function() {
      return this.disconnectedRingcoord;
    },
    setInteriorEdgesInResult: function(t) {
      for (var e = t.getEdgeEnds().iterator(); e.hasNext(); ) {
        var n = e.next();
        n.getLabel().getLocation(0, cn.RIGHT) === L.INTERIOR && n.setInResult(!0);
      }
    },
    visitLinkedDirectedEdges: function(t) {
      var e = t,
          n = t;
      do
        f.isTrue(null !== n, "found null Directed Edge"), n.setVisited(!0), n = n.getNext();
 while (n !== e);
    },
    buildEdgeRings: function(t) {
      for (var e = new I,
          n = t.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (i.isInResult() && null === i.getEdgeRing()) {
          var r = new vn(i, this.geometryFactory);
          r.linkDirectedEdgesForMinimalEdgeRings();
          var s = r.buildMinimalRings();
          e.addAll(s);
        }
      }
      return e;
    },
    hasUnvisitedShellEdge: function(t) {
      for (var e = 0; e < t.size(); e++) {
        var n = t.get(e);
        if (!n.isHole()) {
          var i = n.getEdges(),
              r = i.get(0);
          if (r.getLabel().getLocation(0, cn.RIGHT) === L.INTERIOR)
            for (var s = 0; s < i.size(); s++)
              if (r = i.get(s), !r.isVisited())
                return this.disconnectedRingcoord = r.getCoordinate(), !0;
        }
      }
      return !1;
    },
    isInteriorsConnected: function() {
      var t = new I;
      this.geomGraph.computeSplitEdges(t);
      var e = new Cn(new On);
      e.addEdges(t), this.setInteriorEdgesInResult(e), e.linkResultDirectedEdges();
      var n = this.buildEdgeRings(e.getEdgeEnds());
      return this.visitShellInteriors(this.geomGraph.getGeometry(), e), !this.hasUnvisitedShellEdge(n);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Kr;
    }
  }), Kr.findDifferentPoint = function(t, e) {
    for (var n = 0; n < t.length; n++)
      if (!t[n].equals(e))
        return t[n];
    return null;
  }, e(Zr.prototype, {
    hasChildren: function() {
      for (var t = 0; 2 > t; t++)
        if (null !== this.subnode[t])
          return !0;
      return !1;
    },
    isPrunable: function() {
      return !(this.hasChildren() || this.hasItems());
    },
    addAllItems: function(t) {
      t.addAll(this.items);
      for (var e = 0; 2 > e; e++)
        null !== this.subnode[e] && this.subnode[e].addAllItems(t);
      return t;
    },
    size: function() {
      for (var t = 0,
          e = 0; 2 > e; e++)
        null !== this.subnode[e] && (t += this.subnode[e].size());
      return t + this.items.size();
    },
    addAllItemsFromOverlapping: function(t, e) {
      return null === t || this.isSearchMatch(t) ? (e.addAll(this.items), null !== this.subnode[0] && this.subnode[0].addAllItemsFromOverlapping(t, e), void(null !== this.subnode[1] && this.subnode[1].addAllItemsFromOverlapping(t, e))) : null;
    },
    hasItems: function() {
      return !this.items.isEmpty();
    },
    remove: function(t, e) {
      if (!this.isSearchMatch(t))
        return !1;
      for (var n = !1,
          i = 0; 2 > i; i++)
        if (null !== this.subnode[i] && (n = this.subnode[i].remove(t, e))) {
          this.subnode[i].isPrunable() && (this.subnode[i] = null);
          break;
        }
      return n ? n : n = this.items.remove(e);
    },
    getItems: function() {
      return this.items;
    },
    depth: function() {
      for (var t = 0,
          e = 0; 2 > e; e++)
        if (null !== this.subnode[e]) {
          var n = this.subnode[e].depth();
          n > t && (t = n);
        }
      return t + 1;
    },
    nodeSize: function() {
      for (var t = 0,
          e = 0; 2 > e; e++)
        null !== this.subnode[e] && (t += this.subnode[e].nodeSize());
      return t + 1;
    },
    add: function(t) {
      this.items.add(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Zr;
    }
  }), Zr.getSubnodeIndex = function(t, e) {
    var n = -1;
    return t.min >= e && (n = 1), t.max <= e && (n = 0), n;
  }, e(Qr.prototype, {
    expandToInclude: function(t) {
      t.max > this.max && (this.max = t.max), t.min < this.min && (this.min = t.min);
    },
    getWidth: function() {
      return this.max - this.min;
    },
    overlaps: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.overlaps(t.min, t.max);
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        return !(this.min > n || this.max < e);
      }
    },
    getMin: function() {
      return this.min;
    },
    toString: function() {
      return "[" + this.min + ", " + this.max + "]";
    },
    contains: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Qr) {
          var t = arguments[0];
          return this.contains(t.min, t.max);
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return e >= this.min && e <= this.max;
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1];
        return n >= this.min && i <= this.max;
      }
    },
    init: function(t, e) {
      this.min = t, this.max = e, t > e && (this.min = e, this.max = t);
    },
    getMax: function() {
      return this.max;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Qr;
    }
  }), e(Jr.prototype, {
    getInterval: function() {
      return this.interval;
    },
    getLevel: function() {
      return this.level;
    },
    computeKey: function(t) {
      for (this.level = Jr.computeLevel(t), this.interval = new Qr, this.computeInterval(this.level, t); !this.interval.contains(t); )
        this.level += 1, this.computeInterval(this.level, t);
    },
    computeInterval: function(t, e) {
      var n = Ci.powerOf2(t);
      this.pt = Math.floor(e.getMin() / n) * n, this.interval.init(this.pt, this.pt + n);
    },
    getPoint: function() {
      return this.pt;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Jr;
    }
  }), Jr.computeLevel = function(t) {
    var e = t.getWidth(),
        n = Ci.exponent(e) + 1;
    return n;
  }, h($r, Zr), e($r.prototype, {
    getInterval: function() {
      return this.interval;
    },
    find: function(t) {
      var e = Zr.getSubnodeIndex(t, this.centre);
      if (-1 === e)
        return this;
      if (null !== this.subnode[e]) {
        var n = this.subnode[e];
        return n.find(t);
      }
      return this;
    },
    insert: function(t) {
      f.isTrue(null === this.interval || this.interval.contains(t.interval));
      var e = Zr.getSubnodeIndex(t.interval, this.centre);
      if (t.level === this.level - 1)
        this.subnode[e] = t;
      else {
        var n = this.createSubnode(e);
        n.insert(t), this.subnode[e] = n;
      }
    },
    isSearchMatch: function(t) {
      return t.overlaps(this.interval);
    },
    getSubnode: function(t) {
      return null === this.subnode[t] && (this.subnode[t] = this.createSubnode(t)), this.subnode[t];
    },
    getNode: function(t) {
      var e = Zr.getSubnodeIndex(t, this.centre);
      if (-1 !== e) {
        var n = this.getSubnode(e);
        return n.getNode(t);
      }
      return this;
    },
    createSubnode: function(t) {
      var e = 0,
          n = 0;
      switch (t) {
        case 0:
          e = this.interval.getMin(), n = this.centre;
          break;
        case 1:
          e = this.centre, n = this.interval.getMax();
      }
      var i = new Qr(e, n),
          r = new $r(i, this.level - 1);
      return r;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return $r;
    }
  }), $r.createNode = function(t) {
    var e = new Jr(t),
        n = new $r(e.getInterval(), e.getLevel());
    return n;
  }, $r.createExpanded = function(t, e) {
    var n = new Qr(e);
    null !== t && n.expandToInclude(t.interval);
    var i = $r.createNode(n);
    return null !== t && i.insert(t), i;
  }, h(ts, Zr), e(ts.prototype, {
    insert: function(t, e) {
      var n = Zr.getSubnodeIndex(t, ts.origin);
      if (-1 === n)
        return this.add(e), null;
      var i = this.subnode[n];
      if (null === i || !i.getInterval().contains(t)) {
        var r = $r.createExpanded(i, t);
        this.subnode[n] = r;
      }
      this.insertContained(this.subnode[n], t, e);
    },
    isSearchMatch: function(t) {
      return !0;
    },
    insertContained: function(t, e, n) {
      f.isTrue(t.getInterval().contains(e));
      var i = Ri.isZeroWidth(e.getMin(), e.getMax()),
          r = null;
      r = i ? t.find(e) : t.getNode(e), r.add(n);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ts;
    }
  }), ts.origin = 0, e(es.prototype, {
    size: function() {
      return null !== this.root ? this.root.size() : 0;
    },
    insert: function(t, e) {
      this.collectStats(t);
      var n = es.ensureExtent(t, this.minExtent);
      this.root.insert(n, e);
    },
    query: function() {
      if (1 === arguments.length) {
        if ("number" == typeof arguments[0]) {
          var t = arguments[0];
          return this.query(new Qr(t, t));
        }
        if (arguments[0] instanceof Qr) {
          var e = arguments[0],
              n = new I;
          return this.query(e, n), n;
        }
      } else if (2 === arguments.length) {
        var i = arguments[0],
            r = arguments[1];
        this.root.addAllItemsFromOverlapping(i, r);
      }
    },
    iterator: function() {
      var t = new I;
      return this.root.addAllItems(t), t.iterator();
    },
    remove: function(t, e) {
      var n = es.ensureExtent(t, this.minExtent);
      return this.root.remove(n, e);
    },
    collectStats: function(t) {
      var e = t.getWidth();
      e < this.minExtent && e > 0 && (this.minExtent = e);
    },
    depth: function() {
      return null !== this.root ? this.root.depth() : 0;
    },
    nodeSize: function() {
      return null !== this.root ? this.root.nodeSize() : 0;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return es;
    }
  }), es.ensureExtent = function(t, e) {
    var n = t.getMin(),
        i = t.getMax();
    return n !== i ? t : (n === i && (n -= e / 2, i = n + e / 2), new Qr(n, i));
  }, e(ns.prototype, {
    isInside: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ns;
    }
  }), e(is.prototype, {
    testLineSegment: function(t, e) {
      var n = null,
          i = null,
          r = null,
          s = null,
          o = null,
          a = e.p0,
          u = e.p1;
      i = a.x - t.x, r = a.y - t.y, s = u.x - t.x, o = u.y - t.y, (r > 0 && 0 >= o || o > 0 && 0 >= r) && (n = ue.signOfDet2x2(i, r, s, o) / (o - r), n > 0 && this.crossings++);
    },
    buildIndex: function() {
      this.tree = new es;
      for (var t = H.removeRepeatedPoints(this.ring.getCoordinates()),
          e = $e.getChains(t),
          n = 0; n < e.size(); n++) {
        var i = e.get(n),
            r = i.getEnvelope();
        this.interval.min = r.getMinY(), this.interval.max = r.getMaxY(), this.tree.insert(this.interval, i);
      }
    },
    testMonotoneChain: function(t, e, n) {
      n.select(t, e);
    },
    isInside: function(t) {
      this.crossings = 0;
      var e = new C(r.NEGATIVE_INFINITY, r.POSITIVE_INFINITY, t.y, t.y);
      this.interval.min = t.y, this.interval.max = t.y;
      for (var n = this.tree.query(this.interval),
          i = new rs(this, t),
          s = n.iterator(); s.hasNext(); ) {
        var o = s.next();
        this.testMonotoneChain(e, i, o);
      }
      return this.crossings % 2 === 1;
    },
    interfaces_: function() {
      return [ns];
    },
    getClass: function() {
      return is;
    }
  }), h(rs, tr), e(rs.prototype, {
    select: function() {
      if (1 !== arguments.length)
        return tr.prototype.select.apply(this, arguments);
      var t = arguments[0];
      this.mcp.testLineSegment(this.p, t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return rs;
    }
  }), is.MCSelecter = rs, e(ss.prototype, {
    insertEdgeEnds: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.nodes.add(n);
      }
    },
    getNodeIterator: function() {
      return this.nodes.iterator();
    },
    copyNodesAndLabels: function(t, e) {
      for (var n = t.getNodeIterator(); n.hasNext(); ) {
        var i = n.next(),
            r = this.nodes.addNode(i.getCoordinate());
        r.setLabel(e, i.getLabel().getLocation(e));
      }
    },
    build: function(t) {
      this.computeIntersectionNodes(t, 0), this.copyNodesAndLabels(t, 0);
      var e = new br,
          n = e.computeEdgeEnds(t.getEdgeIterator());
      this.insertEdgeEnds(n);
    },
    computeIntersectionNodes: function(t, e) {
      for (var n = t.getEdgeIterator(); n.hasNext(); )
        for (var i = n.next(),
            r = i.getLabel().getLocation(e),
            s = i.getEdgeIntersectionList().iterator(); s.hasNext(); ) {
          var o = s.next(),
              a = this.nodes.addNode(o.coord);
          r === L.BOUNDARY ? a.setLabelBoundary(e) : a.getLabel().isNull(e) && a.setLabel(e, L.INTERIOR);
        }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ss;
    }
  }), e(os.prototype, {
    isNodeEdgeAreaLabelsConsistent: function() {
      for (var t = this.nodeGraph.getNodeIterator(); t.hasNext(); ) {
        var e = t.next();
        if (!e.getEdges().isAreaLabelsConsistent(this.geomGraph))
          return this.invalidPoint = e.getCoordinate().copy(), !1;
      }
      return !0;
    },
    getInvalidPoint: function() {
      return this.invalidPoint;
    },
    hasDuplicateRings: function() {
      for (var t = this.nodeGraph.getNodeIterator(); t.hasNext(); )
        for (var e = t.next(),
            n = e.getEdges().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.getEdgeEnds().size() > 1)
            return this.invalidPoint = i.getEdge().getCoordinate(0), !0;
        }
      return !1;
    },
    isNodeConsistentArea: function() {
      var t = this.geomGraph.computeSelfNodes(this.li, !0, !0);
      return t.hasProperIntersection() ? (this.invalidPoint = t.getProperIntersectionPoint(), !1) : (this.nodeGraph.build(this.geomGraph), this.isNodeEdgeAreaLabelsConsistent());
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return os;
    }
  }), e(as.prototype, {
    buildIndex: function() {
      this.index = new ke;
      for (var t = 0; t < this.rings.size(); t++) {
        var e = this.rings.get(t),
            n = e.getEnvelopeInternal();
        this.index.insert(n, e);
      }
    },
    getNestedPoint: function() {
      return this.nestedPt;
    },
    isNonNested: function() {
      this.buildIndex();
      for (var t = 0; t < this.rings.size(); t++)
        for (var e = this.rings.get(t),
            n = e.getCoordinates(),
            i = this.index.query(e.getEnvelopeInternal()),
            r = 0; r < i.size(); r++) {
          var s = i.get(r),
              o = s.getCoordinates();
          if (e !== s && e.getEnvelopeInternal().intersects(s.getEnvelopeInternal())) {
            var a = ls.findPtNotNode(n, s, this.graph);
            if (null !== a) {
              var u = he.isPointInRing(a, o);
              if (u)
                return this.nestedPt = a, !1;
            }
          }
        }
      return !0;
    },
    add: function(t) {
      this.rings.add(t), this.totalEnv.expandToInclude(t.getEnvelopeInternal());
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return as;
    }
  }), e(us.prototype, {
    getErrorType: function() {
      return this.errorType;
    },
    getMessage: function() {
      return us.errMsg[this.errorType];
    },
    getCoordinate: function() {
      return this.pt;
    },
    toString: function() {
      var t = "";
      return null !== this.pt && (t = " at or near point " + this.pt), this.getMessage() + t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return us;
    }
  }), us.ERROR = 0, us.REPEATED_POINT = 1, us.HOLE_OUTSIDE_SHELL = 2, us.NESTED_HOLES = 3, us.DISCONNECTED_INTERIOR = 4, us.SELF_INTERSECTION = 5, us.RING_SELF_INTERSECTION = 6, us.NESTED_SHELLS = 7, us.DUPLICATE_RINGS = 8, us.TOO_FEW_POINTS = 9, us.INVALID_COORDINATE = 10, us.RING_NOT_CLOSED = 11, us.errMsg = ["Topology Validation Error", "Repeated Point", "Hole lies outside shell", "Holes are nested", "Interior is disconnected", "Self-intersection", "Ring Self-intersection", "Nested shells", "Duplicate Rings", "Too few distinct points in geometry component", "Invalid Coordinate", "Ring is not closed"], e(ls.prototype, {
    checkInvalidCoordinates: function() {
      if (arguments[0] instanceof Array) {
        for (var t = arguments[0],
            e = 0; e < t.length; e++)
          if (!ls.isValid(t[e]))
            return this.validErr = new us(us.INVALID_COORDINATE, t[e]), null;
      } else if (arguments[0] instanceof Tt) {
        var n = arguments[0];
        if (this.checkInvalidCoordinates(n.getExteriorRing().getCoordinates()), null !== this.validErr)
          return null;
        for (var e = 0; e < n.getNumInteriorRing(); e++)
          if (this.checkInvalidCoordinates(n.getInteriorRingN(e).getCoordinates()), null !== this.validErr)
            return null;
      }
    },
    checkHolesNotNested: function(t, e) {
      for (var n = new as(e),
          i = 0; i < t.getNumInteriorRing(); i++) {
        var r = t.getInteriorRingN(i);
        n.add(r);
      }
      var s = n.isNonNested();
      s || (this.validErr = new us(us.NESTED_HOLES, n.getNestedPoint()));
    },
    checkConsistentArea: function(t) {
      var e = new os(t),
          n = e.isNodeConsistentArea();
      return n ? void(e.hasDuplicateRings() && (this.validErr = new us(us.DUPLICATE_RINGS, e.getInvalidPoint()))) : (this.validErr = new us(us.SELF_INTERSECTION, e.getInvalidPoint()), null);
    },
    isValid: function() {
      return this.checkValid(this.parentGeometry), null === this.validErr;
    },
    checkShellInsideHole: function(t, e, n) {
      var i = t.getCoordinates(),
          r = e.getCoordinates(),
          s = ls.findPtNotNode(i, e, n);
      if (null !== s) {
        var o = he.isPointInRing(s, r);
        if (!o)
          return s;
      }
      var a = ls.findPtNotNode(r, t, n);
      if (null !== a) {
        var u = he.isPointInRing(a, i);
        return u ? a : null;
      }
      return f.shouldNeverReachHere("points in shell and hole appear to be equal"), null;
    },
    checkNoSelfIntersectingRings: function(t) {
      for (var e = t.getEdgeIterator(); e.hasNext(); ) {
        var n = e.next();
        if (this.checkNoSelfIntersectingRing(n.getEdgeIntersectionList()), null !== this.validErr)
          return null;
      }
    },
    checkConnectedInteriors: function(t) {
      var e = new Kr(t);
      e.isInteriorsConnected() || (this.validErr = new us(us.DISCONNECTED_INTERIOR, e.getCoordinate()));
    },
    checkNoSelfIntersectingRing: function(t) {
      for (var e = new at,
          n = !0,
          i = t.iterator(); i.hasNext(); ) {
        var r = i.next();
        if (n)
          n = !1;
        else {
          if (e.contains(r.coord))
            return this.validErr = new us(us.RING_SELF_INTERSECTION, r.coord), null;
          e.add(r.coord);
        }
      }
    },
    checkHolesInShell: function(t, e) {
      for (var n = t.getExteriorRing(),
          i = new is(n),
          r = 0; r < t.getNumInteriorRing(); r++) {
        var s = t.getInteriorRingN(r),
            o = ls.findPtNotNode(s.getCoordinates(), n, e);
        if (null === o)
          return null;
        var a = !i.isInside(o);
        if (a)
          return this.validErr = new us(us.HOLE_OUTSIDE_SHELL, o), null;
      }
    },
    checkTooFewPoints: function(t) {
      return t.hasTooFewPoints() ? (this.validErr = new us(us.TOO_FEW_POINTS, t.getInvalidPoint()), null) : void 0;
    },
    getValidationError: function() {
      return this.checkValid(this.parentGeometry), this.validErr;
    },
    checkValid: function() {
      if (arguments[0] instanceof Lt) {
        var t = arguments[0];
        this.checkInvalidCoordinates(t.getCoordinates());
      } else if (arguments[0] instanceof Pt) {
        var e = arguments[0];
        this.checkInvalidCoordinates(e.getCoordinates());
      } else if (arguments[0] instanceof bt) {
        var n = arguments[0];
        if (this.checkInvalidCoordinates(n.getCoordinates()), null !== this.validErr)
          return null;
        if (this.checkClosedRing(n), null !== this.validErr)
          return null;
        var i = new $n(0, n);
        if (this.checkTooFewPoints(i), null !== this.validErr)
          return null;
        var r = new ae;
        i.computeSelfNodes(r, !0, !0), this.checkNoSelfIntersectingRings(i);
      } else if (arguments[0] instanceof St) {
        var s = arguments[0];
        if (this.checkInvalidCoordinates(s.getCoordinates()), null !== this.validErr)
          return null;
        var i = new $n(0, s);
        this.checkTooFewPoints(i);
      } else if (arguments[0] instanceof Tt) {
        var o = arguments[0];
        if (this.checkInvalidCoordinates(o), null !== this.validErr)
          return null;
        if (this.checkClosedRings(o), null !== this.validErr)
          return null;
        var i = new $n(0, o);
        if (this.checkTooFewPoints(i), null !== this.validErr)
          return null;
        if (this.checkConsistentArea(i), null !== this.validErr)
          return null;
        if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(i), null !== this.validErr))
          return null;
        if (this.checkHolesInShell(o, i), null !== this.validErr)
          return null;
        if (this.checkHolesNotNested(o, i), null !== this.validErr)
          return null;
        this.checkConnectedInteriors(i);
      } else if (arguments[0] instanceof Ot) {
        for (var a = arguments[0],
            u = 0; u < a.getNumGeometries(); u++) {
          var l = a.getGeometryN(u);
          if (this.checkInvalidCoordinates(l), null !== this.validErr)
            return null;
          if (this.checkClosedRings(l), null !== this.validErr)
            return null;
        }
        var i = new $n(0, a);
        if (this.checkTooFewPoints(i), null !== this.validErr)
          return null;
        if (this.checkConsistentArea(i), null !== this.validErr)
          return null;
        if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(i), null !== this.validErr))
          return null;
        for (var u = 0; u < a.getNumGeometries(); u++) {
          var l = a.getGeometryN(u);
          if (this.checkHolesInShell(l, i), null !== this.validErr)
            return null;
        }
        for (var u = 0; u < a.getNumGeometries(); u++) {
          var l = a.getGeometryN(u);
          if (this.checkHolesNotNested(l, i), null !== this.validErr)
            return null;
        }
        if (this.checkShellsNotNested(a, i), null !== this.validErr)
          return null;
        this.checkConnectedInteriors(i);
      } else if (arguments[0] instanceof ft)
        for (var h = arguments[0],
            u = 0; u < h.getNumGeometries(); u++) {
          var c = h.getGeometryN(u);
          if (this.checkValid(c), null !== this.validErr)
            return null;
        }
      else if (arguments[0] instanceof B) {
        var f = arguments[0];
        if (this.validErr = null, f.isEmpty())
          return null;
        if (f instanceof Lt)
          this.checkValid(f);
        else if (f instanceof Pt)
          this.checkValid(f);
        else if (f instanceof bt)
          this.checkValid(f);
        else if (f instanceof St)
          this.checkValid(f);
        else if (f instanceof Tt)
          this.checkValid(f);
        else if (f instanceof Ot)
          this.checkValid(f);
        else {
          if (!(f instanceof ft))
            throw new UnsupportedOperationException(f.getClass().getName());
          this.checkValid(f);
        }
      }
    },
    setSelfTouchingRingFormingHoleValid: function(t) {
      this.isSelfTouchingRingFormingHoleValid = t;
    },
    checkShellNotNested: function(t, e, n) {
      var i = t.getCoordinates(),
          r = e.getExteriorRing(),
          s = r.getCoordinates(),
          o = ls.findPtNotNode(i, r, n);
      if (null === o)
        return null;
      var a = he.isPointInRing(o, s);
      if (!a)
        return null;
      if (e.getNumInteriorRing() <= 0)
        return this.validErr = new us(us.NESTED_SHELLS, o), null;
      for (var u = null,
          l = 0; l < e.getNumInteriorRing(); l++) {
        var h = e.getInteriorRingN(l);
        if (u = this.checkShellInsideHole(t, h, n), null === u)
          return null;
      }
      this.validErr = new us(us.NESTED_SHELLS, u);
    },
    checkClosedRings: function(t) {
      if (this.checkClosedRing(t.getExteriorRing()), null !== this.validErr)
        return null;
      for (var e = 0; e < t.getNumInteriorRing(); e++)
        if (this.checkClosedRing(t.getInteriorRingN(e)), null !== this.validErr)
          return null;
    },
    checkClosedRing: function(t) {
      if (!t.isClosed()) {
        var e = null;
        t.getNumPoints() >= 1 && (e = t.getCoordinateN(0)), this.validErr = new us(us.RING_NOT_CLOSED, e);
      }
    },
    checkShellsNotNested: function(t, e) {
      for (var n = 0; n < t.getNumGeometries(); n++)
        for (var i = t.getGeometryN(n),
            r = i.getExteriorRing(),
            s = 0; s < t.getNumGeometries(); s++)
          if (n !== s) {
            var o = t.getGeometryN(s);
            if (this.checkShellNotNested(r, o, e), null !== this.validErr)
              return null;
          }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ls;
    }
  }), ls.findPtNotNode = function(t, e, n) {
    for (var i = n.findEdge(e),
        r = i.getEdgeIntersectionList(),
        s = 0; s < t.length; s++) {
      var o = t[s];
      if (!r.isIntersection(o))
        return o;
    }
    return null;
  }, ls.isValid = function() {
    if (arguments[0] instanceof B) {
      var t = arguments[0],
          e = new ls(t);
      return e.isValid();
    }
    if (arguments[0] instanceof g) {
      var n = arguments[0];
      return r.isNaN(n.x) ? !1 : r.isInfinite(n.x) ? !1 : r.isNaN(n.y) ? !1 : !r.isInfinite(n.y);
    }
  };
  var bo = Object.freeze({IsValidOp: ls}),
      Oo = Object.freeze({
        BoundaryOp: dt,
        IsSimpleOp: Gi,
        buffer: Co,
        distance: So,
        linemerge: wo,
        overlay: Lo,
        polygonize: Ro,
        relate: To,
        union: Po,
        valid: bo
      });
  h(hs, _t.CoordinateOperation), e(hs.prototype, {
    editCoordinates: function(t, e) {
      if (0 === t.length)
        return null;
      for (var n = new Array(t.length).fill(null),
          i = 0; i < t.length; i++) {
        var r = new g(t[i]);
        this.targetPM.makePrecise(r), n[i] = r;
      }
      var s = new N(n, !1),
          o = s.toCoordinateArray(),
          a = 0;
      e instanceof St && (a = 2), e instanceof bt && (a = 4);
      var u = n;
      return this.removeCollapsed && (u = null), o.length < a ? u : o;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return hs;
    }
  }), e(cs.prototype, {
    fixPolygonalTopology: function(t) {
      var e = t;
      this.changePrecisionModel || (e = this.changePM(t, this.targetPM));
      var n = e.buffer(0),
          i = n;
      return this.changePrecisionModel || (i = t.getFactory().createGeometry(n)), i;
    },
    reducePointwise: function(t) {
      var e = null;
      if (this.changePrecisionModel) {
        var n = this.createFactory(t.getFactory(), this.targetPM);
        e = new _t(n);
      } else
        e = new _t;
      var i = this.removeCollapsed;
      t.getDimension() >= 2 && (i = !0);
      var r = e.edit(t, new hs(this.targetPM, i));
      return r;
    },
    changePM: function(t, e) {
      var n = this.createEditor(t.getFactory(), e);
      return n.edit(t, new _t.NoOpGeometryOperation);
    },
    setRemoveCollapsedComponents: function(t) {
      this.removeCollapsed = t;
    },
    createFactory: function(t, e) {
      var n = new ie(e, t.getSRID(), t.getCoordinateSequenceFactory());
      return n;
    },
    setChangePrecisionModel: function(t) {
      this.changePrecisionModel = t;
    },
    reduce: function(t) {
      var e = this.reducePointwise(t);
      return this.isPointwise ? e : R(e, Rt) ? e.isValid() ? e : this.fixPolygonalTopology(e) : e;
    },
    setPointwise: function(t) {
      this.isPointwise = t;
    },
    createEditor: function(t, e) {
      if (t.getPrecisionModel() === e)
        return new _t;
      var n = this.createFactory(t, e),
          i = new _t(n);
      return i;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return cs;
    }
  }), cs.reduce = function(t, e) {
    var n = new cs(e);
    return n.reduce(t);
  }, cs.reducePointwise = function(t, e) {
    var n = new cs(e);
    return n.setPointwise(!0), n.reduce(t);
  };
  var _o = Object.freeze({GeometryPrecisionReducer: cs});
  e(fs.prototype, {
    simplifySection: function(t, e) {
      if (t + 1 === e)
        return null;
      this.seg.p0 = this.pts[t], this.seg.p1 = this.pts[e];
      for (var n = -1,
          i = t,
          r = t + 1; e > r; r++) {
        var s = this.seg.distance(this.pts[r]);
        s > n && (n = s, i = r);
      }
      if (n <= this.distanceTolerance)
        for (var r = t + 1; e > r; r++)
          this.usePt[r] = !1;
      else
        this.simplifySection(t, i), this.simplifySection(i, e);
    },
    setDistanceTolerance: function(t) {
      this.distanceTolerance = t;
    },
    simplify: function() {
      this.usePt = new Array(this.pts.length).fill(null);
      for (var t = 0; t < this.pts.length; t++)
        this.usePt[t] = !0;
      this.simplifySection(0, this.pts.length - 1);
      for (var e = new N,
          t = 0; t < this.pts.length; t++)
        this.usePt[t] && e.add(new g(this.pts[t]));
      return e.toCoordinateArray();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return fs;
    }
  }), fs.simplify = function(t, e) {
    var n = new fs(t);
    return n.setDistanceTolerance(e), n.simplify();
  }, e(gs.prototype, {
    setEnsureValid: function(t) {
      this.isEnsureValidTopology = t;
    },
    getResultGeometry: function() {
      return this.inputGeom.isEmpty() ? this.inputGeom.copy() : new ds(this.isEnsureValidTopology, this.distanceTolerance).transform(this.inputGeom);
    },
    setDistanceTolerance: function(t) {
      if (0 > t)
        throw new i("Tolerance must be non-negative");
      this.distanceTolerance = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return gs;
    }
  }), gs.simplify = function(t, e) {
    var n = new gs(t);
    return n.setDistanceTolerance(e), n.getResultGeometry();
  }, h(ds, xe), e(ds.prototype, {
    transformPolygon: function(t, e) {
      if (t.isEmpty())
        return null;
      var n = xe.prototype.transformPolygon.call(this, t, e);
      return e instanceof Ot ? n : this.createValidArea(n);
    },
    createValidArea: function(t) {
      return this.isEnsureValidTopology ? t.buffer(0) : t;
    },
    transformCoordinates: function(t, e) {
      var n = t.toCoordinateArray(),
          i = null;
      return i = 0 === n.length ? new Array(0).fill(null) : fs.simplify(n, this.distanceTolerance), this.factory.getCoordinateSequenceFactory().create(i);
    },
    transformMultiPolygon: function(t, e) {
      var n = xe.prototype.transformMultiPolygon.call(this, t, e);
      return this.createValidArea(n);
    },
    transformLinearRing: function(t, e) {
      var n = e instanceof Tt,
          i = xe.prototype.transformLinearRing.call(this, t, e);
      return !n || i instanceof bt ? i : null;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ds;
    }
  }), gs.DPTransformer = ds, h(ps, ce), e(ps.prototype, {
    getIndex: function() {
      return this.index;
    },
    getParent: function() {
      return this.parent;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ps;
    }
  }), e(vs.prototype, {
    addToResult: function(t) {
      this.resultSegs.add(t);
    },
    asLineString: function() {
      return this.parentLine.getFactory().createLineString(vs.extractCoordinates(this.resultSegs));
    },
    getResultSize: function() {
      var t = this.resultSegs.size();
      return 0 === t ? 0 : t + 1;
    },
    getParent: function() {
      return this.parentLine;
    },
    getSegment: function(t) {
      return this.segs[t];
    },
    getParentCoordinates: function() {
      return this.parentLine.getCoordinates();
    },
    getMinimumSize: function() {
      return this.minimumSize;
    },
    asLinearRing: function() {
      return this.parentLine.getFactory().createLinearRing(vs.extractCoordinates(this.resultSegs));
    },
    getSegments: function() {
      return this.segs;
    },
    init: function() {
      var t = this.parentLine.getCoordinates();
      this.segs = new Array(t.length - 1).fill(null);
      for (var e = 0; e < t.length - 1; e++) {
        var n = new ps(t[e], t[e + 1], this.parentLine, e);
        this.segs[e] = n;
      }
    },
    getResultCoordinates: function() {
      return vs.extractCoordinates(this.resultSegs);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return vs;
    }
  }), vs.extractCoordinates = function(t) {
    for (var e = new Array(t.size() + 1).fill(null),
        n = null,
        i = 0; i < t.size(); i++)
      n = t.get(i), e[i] = n.p0;
    return e[e.length - 1] = n.p1, e;
  }, e(ms.prototype, {
    remove: function(t) {
      this.index.remove(new C(t.p0, t.p1), t);
    },
    add: function() {
      if (arguments[0] instanceof vs)
        for (var t = arguments[0],
            e = t.getSegments(),
            n = 0; n < e.length; n++) {
          var i = e[n];
          this.add(i);
        }
      else if (arguments[0] instanceof ce) {
        var r = arguments[0];
        this.index.insert(new C(r.p0, r.p1), r);
      }
    },
    query: function(t) {
      var e = new C(t.p0, t.p1),
          n = new ys(t);
      this.index.query(e, n);
      var i = n.getItems();
      return i;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ms;
    }
  }), e(ys.prototype, {
    visitItem: function(t) {
      var e = t;
      C.intersects(e.p0, e.p1, this.querySeg.p0, this.querySeg.p1) && this.items.add(t);
    },
    getItems: function() {
      return this.items;
    },
    interfaces_: function() {
      return [Ae];
    },
    getClass: function() {
      return ys;
    }
  }), e(xs.prototype, {
    flatten: function(t, e) {
      var n = this.linePts[t],
          i = this.linePts[e],
          r = new ce(n, i);
      return this.remove(this.line, t, e), this.outputIndex.add(r), r;
    },
    hasBadIntersection: function(t, e, n) {
      return this.hasBadOutputIntersection(n) ? !0 : !!this.hasBadInputIntersection(t, e, n);
    },
    setDistanceTolerance: function(t) {
      this.distanceTolerance = t;
    },
    simplifySection: function(t, e, n) {
      n += 1;
      var i = new Array(2).fill(null);
      if (t + 1 === e) {
        var r = this.line.getSegment(t);
        return this.line.addToResult(r), null;
      }
      var s = !0;
      if (this.line.getResultSize() < this.line.getMinimumSize()) {
        var o = n + 1;
        o < this.line.getMinimumSize() && (s = !1);
      }
      var a = new Array(1).fill(null),
          u = this.findFurthestPoint(this.linePts, t, e, a);
      a[0] > this.distanceTolerance && (s = !1);
      var l = new ce;
      if (l.p0 = this.linePts[t], l.p1 = this.linePts[e], i[0] = t, i[1] = e, this.hasBadIntersection(this.line, i, l) && (s = !1), s) {
        var r = this.flatten(t, e);
        return this.line.addToResult(r), null;
      }
      this.simplifySection(t, u, n), this.simplifySection(u, e, n);
    },
    hasBadOutputIntersection: function(t) {
      for (var e = this.outputIndex.query(t),
          n = e.iterator(); n.hasNext(); ) {
        var i = n.next();
        if (this.hasInteriorIntersection(i, t))
          return !0;
      }
      return !1;
    },
    findFurthestPoint: function(t, e, n, i) {
      var r = new ce;
      r.p0 = t[e], r.p1 = t[n];
      for (var s = -1,
          o = e,
          a = e + 1; n > a; a++) {
        var u = t[a],
            l = r.distance(u);
        l > s && (s = l, o = a);
      }
      return i[0] = s, o;
    },
    simplify: function(t) {
      this.line = t, this.linePts = t.getParentCoordinates(), this.simplifySection(0, this.linePts.length - 1, 0);
    },
    remove: function(t, e, n) {
      for (var i = e; n > i; i++) {
        var r = t.getSegment(i);
        this.inputIndex.remove(r);
      }
    },
    hasInteriorIntersection: function(t, e) {
      return this.li.computeIntersection(t.p0, t.p1, e.p0, e.p1), this.li.isInteriorIntersection();
    },
    hasBadInputIntersection: function(t, e, n) {
      for (var i = this.inputIndex.query(n),
          r = i.iterator(); r.hasNext(); ) {
        var s = r.next();
        if (this.hasInteriorIntersection(s, n)) {
          if (xs.isInLineSection(t, e, s))
            continue;
          return !0;
        }
      }
      return !1;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return xs;
    }
  }), xs.isInLineSection = function(t, e, n) {
    if (n.getParent() !== t.getParent())
      return !1;
    var i = n.getIndex();
    return i >= e[0] && i < e[1];
  }, e(Es.prototype, {
    setDistanceTolerance: function(t) {
      this.distanceTolerance = t;
    },
    simplify: function(t) {
      for (var e = t.iterator(); e.hasNext(); )
        this.inputIndex.add(e.next());
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = new xs(this.inputIndex, this.outputIndex);
        n.setDistanceTolerance(this.distanceTolerance), n.simplify(e.next());
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Es;
    }
  }), e(Is.prototype, {
    getResultGeometry: function() {
      if (this.inputGeom.isEmpty())
        return this.inputGeom.copy();
      this.linestringMap = new te, this.inputGeom.apply(new Cs(this)), this.lineSimplifier.simplify(this.linestringMap.values());
      var t = new Ns(this.linestringMap).transform(this.inputGeom);
      return t;
    },
    setDistanceTolerance: function(t) {
      if (0 > t)
        throw new i("Tolerance must be non-negative");
      this.lineSimplifier.setDistanceTolerance(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Is;
    }
  }), Is.simplify = function(t, e) {
    var n = new Is(t);
    return n.setDistanceTolerance(e), n.getResultGeometry();
  }, h(Ns, xe), e(Ns.prototype, {
    transformCoordinates: function(t, e) {
      if (0 === t.size())
        return null;
      if (e instanceof St) {
        var n = this.linestringMap.get(e);
        return this.createCoordinateSequence(n.getResultCoordinates());
      }
      return xe.prototype.transformCoordinates.call(this, t, e);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ns;
    }
  }), e(Cs.prototype, {
    filter: function(t) {
      if (t instanceof St) {
        var e = t;
        if (e.isEmpty())
          return null;
        var n = e.isClosed() ? 4 : 2,
            i = new vs(e, n);
        this.tps.linestringMap.put(e, i);
      }
    },
    interfaces_: function() {
      return [q];
    },
    getClass: function() {
      return Cs;
    }
  }), Is.LineStringTransformer = Ns, Is.LineStringMapBuilderFilter = Cs;
  var Mo = Object.freeze({
    DouglasPeuckerSimplifier: gs,
    TopologyPreservingSimplifier: Is
  });
  e(Ss.prototype, {
    splitAt: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = this.minimumLen / this.segLen;
        if (t.distance(this.seg.p0) < this.minimumLen)
          return this.splitPt = this.seg.pointAlong(e), null;
        if (t.distance(this.seg.p1) < this.minimumLen)
          return this.splitPt = Ss.pointAlongReverse(this.seg, e), null;
        this.splitPt = t;
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = this.getConstrainedLength(n),
            s = r / this.segLen;
        i.equals2D(this.seg.p0) ? this.splitPt = this.seg.pointAlong(s) : this.splitPt = Ss.pointAlongReverse(this.seg, s);
      }
    },
    setMinimumLength: function(t) {
      this.minimumLen = t;
    },
    getConstrainedLength: function(t) {
      return t < this.minimumLen ? this.minimumLen : t;
    },
    getSplitPoint: function() {
      return this.splitPt;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ss;
    }
  }), Ss.pointAlongReverse = function(t, e) {
    var n = new g;
    return n.x = t.p1.x - e * (t.p1.x - t.p0.x), n.y = t.p1.y - e * (t.p1.y - t.p0.y), n;
  }, e(ws.prototype, {
    findSplitPoint: function(t, e) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ws;
    }
  }), e(Ls.prototype, {
    findSplitPoint: function(t, e) {
      var n = t.getLineSegment(),
          i = n.getLength(),
          r = i / 2,
          s = new Ss(n),
          o = Ls.projectedSplitPoint(t, e),
          a = 2 * o.distance(e) * .8,
          u = a;
      return u > r && (u = r), s.setMinimumLength(u), s.splitAt(o), s.getSplitPoint();
    },
    interfaces_: function() {
      return [ws];
    },
    getClass: function() {
      return Ls;
    }
  }), Ls.projectedSplitPoint = function(t, e) {
    var n = t.getLineSegment(),
        i = n.project(e);
    return i;
  }, e(Rs.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Rs;
    }
  }), Rs.triArea = function(t, e, n) {
    return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
  }, Rs.isInCircleDDNormalized = function(t, e, n, i) {
    var r = _.valueOf(t.x).selfSubtract(i.x),
        s = _.valueOf(t.y).selfSubtract(i.y),
        o = _.valueOf(e.x).selfSubtract(i.x),
        a = _.valueOf(e.y).selfSubtract(i.y),
        u = _.valueOf(n.x).selfSubtract(i.x),
        l = _.valueOf(n.y).selfSubtract(i.y),
        h = r.multiply(a).selfSubtract(o.multiply(s)),
        c = o.multiply(l).selfSubtract(u.multiply(a)),
        f = u.multiply(s).selfSubtract(r.multiply(l)),
        g = r.multiply(r).selfAdd(s.multiply(s)),
        d = o.multiply(o).selfAdd(a.multiply(a)),
        p = u.multiply(u).selfAdd(l.multiply(l)),
        v = g.selfMultiply(c).selfAdd(d.selfMultiply(f)).selfAdd(p.selfMultiply(h)),
        m = v.doubleValue() > 0;
    return m;
  }, Rs.checkRobustInCircle = function(t, e, n, i) {
    var r = Rs.isInCircleNonRobust(t, e, n, i),
        s = Rs.isInCircleDDSlow(t, e, n, i),
        o = Rs.isInCircleCC(t, e, n, i),
        a = ci.circumcentre(t, e, n);
    A.out.println("p radius diff a = " + Math.abs(i.distance(a) - t.distance(a)) / t.distance(a)), r === s && r === o || (A.out.println("inCircle robustness failure (double result = " + r + ", DD result = " + s + ", CC result = " + o + ")"), A.out.println(se.toLineString(new Gt([t, e, n, i]))), A.out.println("Circumcentre = " + se.toPoint(a) + " radius = " + t.distance(a)), A.out.println("p radius diff a = " + Math.abs(i.distance(a) / t.distance(a) - 1)), A.out.println("p radius diff b = " + Math.abs(i.distance(a) / e.distance(a) - 1)), A.out.println("p radius diff c = " + Math.abs(i.distance(a) / n.distance(a) - 1)), A.out.println());
  }, Rs.isInCircleDDFast = function(t, e, n, i) {
    var r = _.sqr(t.x).selfAdd(_.sqr(t.y)).selfMultiply(Rs.triAreaDDFast(e, n, i)),
        s = _.sqr(e.x).selfAdd(_.sqr(e.y)).selfMultiply(Rs.triAreaDDFast(t, n, i)),
        o = _.sqr(n.x).selfAdd(_.sqr(n.y)).selfMultiply(Rs.triAreaDDFast(t, e, i)),
        a = _.sqr(i.x).selfAdd(_.sqr(i.y)).selfMultiply(Rs.triAreaDDFast(t, e, n)),
        u = r.selfSubtract(s).selfAdd(o).selfSubtract(a),
        l = u.doubleValue() > 0;
    return l;
  }, Rs.isInCircleCC = function(t, e, n, i) {
    var r = ci.circumcentre(t, e, n),
        s = t.distance(r),
        o = i.distance(r) - s;
    return 0 >= o;
  }, Rs.isInCircleNormalized = function(t, e, n, i) {
    var r = t.x - i.x,
        s = t.y - i.y,
        o = e.x - i.x,
        a = e.y - i.y,
        u = n.x - i.x,
        l = n.y - i.y,
        h = r * a - o * s,
        c = o * l - u * a,
        f = u * s - r * l,
        g = r * r + s * s,
        d = o * o + a * a,
        p = u * u + l * l,
        v = g * c + d * f + p * h;
    return v > 0;
  }, Rs.isInCircleDDSlow = function(t, e, n, i) {
    var r = _.valueOf(i.x),
        s = _.valueOf(i.y),
        o = _.valueOf(t.x),
        a = _.valueOf(t.y),
        u = _.valueOf(e.x),
        l = _.valueOf(e.y),
        h = _.valueOf(n.x),
        c = _.valueOf(n.y),
        f = o.multiply(o).add(a.multiply(a)).multiply(Rs.triAreaDDSlow(u, l, h, c, r, s)),
        g = u.multiply(u).add(l.multiply(l)).multiply(Rs.triAreaDDSlow(o, a, h, c, r, s)),
        d = h.multiply(h).add(c.multiply(c)).multiply(Rs.triAreaDDSlow(o, a, u, l, r, s)),
        p = r.multiply(r).add(s.multiply(s)).multiply(Rs.triAreaDDSlow(o, a, u, l, h, c)),
        v = f.subtract(g).add(d).subtract(p),
        m = v.doubleValue() > 0;
    return m;
  }, Rs.isInCircleNonRobust = function(t, e, n, i) {
    var r = (t.x * t.x + t.y * t.y) * Rs.triArea(e, n, i) - (e.x * e.x + e.y * e.y) * Rs.triArea(t, n, i) + (n.x * n.x + n.y * n.y) * Rs.triArea(t, e, i) - (i.x * i.x + i.y * i.y) * Rs.triArea(t, e, n) > 0;
    return r;
  }, Rs.isInCircleRobust = function(t, e, n, i) {
    return Rs.isInCircleNormalized(t, e, n, i);
  }, Rs.triAreaDDSlow = function(t, e, n, i, r, s) {
    return n.subtract(t).multiply(s.subtract(e)).subtract(i.subtract(e).multiply(r.subtract(t)));
  }, Rs.triAreaDDFast = function(t, e, n) {
    var i = _.valueOf(e.x).selfSubtract(t.x).selfMultiply(_.valueOf(n.y).selfSubtract(t.y)),
        r = _.valueOf(e.y).selfSubtract(t.y).selfMultiply(_.valueOf(n.x).selfSubtract(t.x));
    return i.selfSubtract(r);
  }, e(Ts.prototype, {
    circleCenter: function(t, e) {
      var n = new Ts(this.getX(), this.getY()),
          i = this.bisector(n, t),
          r = this.bisector(t, e),
          s = new F(i, r),
          o = null;
      try {
        o = new Ts(s.getX(), s.getY());
      } catch (i) {
        if (!(i instanceof w))
          throw i;
        A.err.println("a: " + n + "  b: " + t + "  c: " + e), A.err.println(i);
      } finally {}
      return o;
    },
    dot: function(t) {
      return this.p.x * t.getX() + this.p.y * t.getY();
    },
    magn: function() {
      return Math.sqrt(this.p.x * this.p.x + this.p.y * this.p.y);
    },
    getZ: function() {
      return this.p.z;
    },
    bisector: function(t, e) {
      var n = e.getX() - t.getX(),
          i = e.getY() - t.getY(),
          r = new F(t.getX() + n / 2, t.getY() + i / 2, 1),
          s = new F(t.getX() - i + n / 2, t.getY() + n + i / 2, 1);
      return new F(r, s);
    },
    equals: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.p.x === t.getX() && this.p.y === t.getY();
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        return this.p.distance(e.getCoordinate()) < n;
      }
    },
    getCoordinate: function() {
      return this.p;
    },
    isInCircle: function(t, e, n) {
      return Rs.isInCircleRobust(t.p, e.p, n.p, this.p);
    },
    interpolateZValue: function(t, e, n) {
      var i = t.getX(),
          r = t.getY(),
          s = e.getX() - i,
          o = n.getX() - i,
          a = e.getY() - r,
          u = n.getY() - r,
          l = s * u - o * a,
          h = this.getX() - i,
          c = this.getY() - r,
          f = (u * h - o * c) / l,
          g = (-a * h + s * c) / l,
          d = t.getZ() + f * (e.getZ() - t.getZ()) + g * (n.getZ() - t.getZ());
      return d;
    },
    midPoint: function(t) {
      var e = (this.p.x + t.getX()) / 2,
          n = (this.p.y + t.getY()) / 2,
          i = (this.p.z + t.getZ()) / 2;
      return new Ts(e, n, i);
    },
    rightOf: function(t) {
      return this.isCCW(t.dest(), t.orig());
    },
    isCCW: function(t, e) {
      return (t.p.x - this.p.x) * (e.p.y - this.p.y) - (t.p.y - this.p.y) * (e.p.x - this.p.x) > 0;
    },
    getX: function() {
      return this.p.x;
    },
    crossProduct: function(t) {
      return this.p.x * t.getY() - this.p.y * t.getX();
    },
    setZ: function(t) {
      this.p.z = t;
    },
    times: function(t) {
      return new Ts(t * this.p.x, t * this.p.y);
    },
    cross: function() {
      return new Ts(this.p.y, -this.p.x);
    },
    leftOf: function(t) {
      return this.isCCW(t.orig(), t.dest());
    },
    toString: function() {
      return "POINT (" + this.p.x + " " + this.p.y + ")";
    },
    sub: function(t) {
      return new Ts(this.p.x - t.getX(), this.p.y - t.getY());
    },
    getY: function() {
      return this.p.y;
    },
    classify: function(t, e) {
      var n = this,
          i = e.sub(t),
          r = n.sub(t),
          s = i.crossProduct(r);
      return s > 0 ? Ts.LEFT : 0 > s ? Ts.RIGHT : i.getX() * r.getX() < 0 || i.getY() * r.getY() < 0 ? Ts.BEHIND : i.magn() < r.magn() ? Ts.BEYOND : t.equals(n) ? Ts.ORIGIN : e.equals(n) ? Ts.DESTINATION : Ts.BETWEEN;
    },
    sum: function(t) {
      return new Ts(this.p.x + t.getX(), this.p.y + t.getY());
    },
    distance: function(t, e) {
      return Math.sqrt(Math.pow(e.getX() - t.getX(), 2) + Math.pow(e.getY() - t.getY(), 2));
    },
    circumRadiusRatio: function(t, e) {
      var n = this.circleCenter(t, e),
          i = this.distance(n, t),
          r = this.distance(this, t),
          s = this.distance(t, e);
      return r > s && (r = s), s = this.distance(e, this), r > s && (r = s), i / r;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ts;
    }
  }), Ts.interpolateZ = function() {
    if (3 === arguments.length) {
      var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          i = e.distance(n),
          r = t.distance(e),
          s = n.z - e.z,
          o = e.z + s * (r / i);
      return o;
    }
    if (4 === arguments.length) {
      var a = arguments[0],
          u = arguments[1],
          l = arguments[2],
          h = arguments[3],
          c = u.x,
          f = u.y,
          g = l.x - c,
          d = h.x - c,
          p = l.y - f,
          v = h.y - f,
          m = g * v - d * p,
          y = a.x - c,
          x = a.y - f,
          E = (v * y - d * x) / m,
          I = (-p * y + g * x) / m,
          N = u.z + E * (l.z - u.z) + I * (h.z - u.z);
      return N;
    }
  }, Ts.LEFT = 0, Ts.RIGHT = 1, Ts.BEYOND = 2, Ts.BEHIND = 3, Ts.BETWEEN = 4, Ts.ORIGIN = 5, Ts.DESTINATION = 6, h(Ps, Ts), e(Ps.prototype, {
    getConstraint: function() {
      return this.constraint;
    },
    setOnConstraint: function(t) {
      this._isOnConstraint = t;
    },
    merge: function(t) {
      t._isOnConstraint && (this._isOnConstraint = !0, this.constraint = t.constraint);
    },
    isOnConstraint: function() {
      return this._isOnConstraint;
    },
    setConstraint: function(t) {
      this._isOnConstraint = !0, this.constraint = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ps;
    }
  }), e(bs.prototype, {
    equalsNonOriented: function(t) {
      return this.equalsOriented(t) ? !0 : !!this.equalsOriented(t.sym());
    },
    toLineSegment: function() {
      return new ce(this.vertex.getCoordinate(), this.dest().getCoordinate());
    },
    dest: function() {
      return this.sym().orig();
    },
    oNext: function() {
      return this.next;
    },
    equalsOriented: function(t) {
      return !(!this.orig().getCoordinate().equals2D(t.orig().getCoordinate()) || !this.dest().getCoordinate().equals2D(t.dest().getCoordinate()));
    },
    dNext: function() {
      return this.sym().oNext().sym();
    },
    lPrev: function() {
      return this.next.sym();
    },
    rPrev: function() {
      return this.sym().oNext();
    },
    rot: function() {
      return this._rot;
    },
    oPrev: function() {
      return this._rot.next._rot;
    },
    sym: function() {
      return this._rot._rot;
    },
    setOrig: function(t) {
      this.vertex = t;
    },
    lNext: function() {
      return this.invRot().oNext().rot();
    },
    getLength: function() {
      return this.orig().getCoordinate().distance(this.dest().getCoordinate());
    },
    invRot: function() {
      return this._rot.sym();
    },
    setDest: function(t) {
      this.sym().setOrig(t);
    },
    setData: function(t) {
      this.data = t;
    },
    getData: function() {
      return this.data;
    },
    delete: function() {
      this._rot = null;
    },
    orig: function() {
      return this.vertex;
    },
    rNext: function() {
      return this._rot.next.invRot();
    },
    toString: function() {
      var t = this.vertex.getCoordinate(),
          e = this.dest().getCoordinate();
      return se.toLineString(t, e);
    },
    isLive: function() {
      return null !== this._rot;
    },
    getPrimary: function() {
      return this.orig().getCoordinate().compareTo(this.dest().getCoordinate()) <= 0 ? this : this.sym();
    },
    dPrev: function() {
      return this.invRot().oNext().invRot();
    },
    setNext: function(t) {
      this.next = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return bs;
    }
  }), bs.makeEdge = function(t, e) {
    var n = new bs,
        i = new bs,
        r = new bs,
        s = new bs;
    n._rot = i, i._rot = r, r._rot = s, s._rot = n, n.setNext(n), i.setNext(s), r.setNext(r), s.setNext(i);
    var o = n;
    return o.setOrig(t), o.setDest(e), o;
  }, bs.swap = function(t) {
    var e = t.oPrev(),
        n = t.sym().oPrev();
    bs.splice(t, e), bs.splice(t.sym(), n), bs.splice(t, e.lNext()), bs.splice(t.sym(), n.lNext()), t.setOrig(e.dest()), t.setDest(n.dest());
  }, bs.splice = function(t, e) {
    var n = t.oNext().rot(),
        i = e.oNext().rot(),
        r = e.oNext(),
        s = t.oNext(),
        o = i.oNext(),
        a = n.oNext();
    t.setNext(r), e.setNext(s), n.setNext(o), i.setNext(a);
  }, bs.connect = function(t, e) {
    var n = bs.makeEdge(t.dest(), e.orig());
    return bs.splice(n, t.lNext()), bs.splice(n.sym(), e), n;
  }, e(Os.prototype, {
    insertSite: function(t) {
      var e = this.subdiv.locate(t);
      if (this.subdiv.isVertexOfEdge(e, t))
        return e;
      this.subdiv.isOnEdge(e, t.getCoordinate()) && (e = e.oPrev(), this.subdiv.delete(e.oNext()));
      var n = this.subdiv.makeEdge(e.orig(), t);
      bs.splice(n, e);
      var i = n;
      do
        n = this.subdiv.connect(e, n.sym()), e = n.oPrev();
 while (e.lNext() !== i);
      for (; ; ) {
        var r = e.oPrev();
        if (r.dest().rightOf(e) && t.isInCircle(e.orig(), r.dest(), e.dest()))
          bs.swap(e), e = e.oPrev();
        else {
          if (e.oNext() === i)
            return n;
          e = e.oNext().lPrev();
        }
      }
    },
    insertSites: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.insertSite(n);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Os;
    }
  }), e(_s.prototype, {
    locate: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return _s;
    }
  }), e(Ms.prototype, {
    init: function() {
      this.lastEdge = this.findEdge();
    },
    locate: function(t) {
      this.lastEdge.isLive() || this.init();
      var e = this.subdiv.locateFromEdge(t, this.lastEdge);
      return this.lastEdge = e, e;
    },
    findEdge: function() {
      var t = this.subdiv.getEdges();
      return t.iterator().next();
    },
    interfaces_: function() {
      return [_s];
    },
    getClass: function() {
      return Ms;
    }
  }), h(Ds, l), e(Ds.prototype, {
    getSegment: function() {
      return this.seg;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ds;
    }
  }), Ds.msgWithSpatial = function(t, e) {
    return null !== e ? t + " [ " + e + " ]" : t;
  }, e(As.prototype, {
    visit: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return As;
    }
  }), e(Fs.prototype, {
    getTriangleVertices: function(t) {
      var e = new Bs;
      return this.visitTriangles(e, t), e.getTriangleVertices();
    },
    isFrameVertex: function(t) {
      return t.equals(this.frameVertex[0]) ? !0 : t.equals(this.frameVertex[1]) ? !0 : !!t.equals(this.frameVertex[2]);
    },
    isVertexOfEdge: function(t, e) {
      return !(!e.equals(t.orig(), this.tolerance) && !e.equals(t.dest(), this.tolerance));
    },
    connect: function(t, e) {
      var n = bs.connect(t, e);
      return this.quadEdges.add(n), n;
    },
    getVoronoiCellPolygon: function(t, e) {
      var n = new I,
          i = t;
      do {
        var r = t.rot().orig().getCoordinate();
        n.add(r), t = t.oPrev();
      } while (t !== i);
      var s = new N;
      s.addAll(n, !1), s.closeRing(), s.size() < 4 && (A.out.println(s), s.add(s.get(s.size() - 1), !0));
      var o = s.toCoordinateArray(),
          a = e.createPolygon(e.createLinearRing(o), null),
          u = i.orig();
      return a.setUserData(u.getCoordinate()), a;
    },
    setLocator: function(t) {
      this.locator = t;
    },
    initSubdiv: function() {
      var t = this.makeEdge(this.frameVertex[0], this.frameVertex[1]),
          e = this.makeEdge(this.frameVertex[1], this.frameVertex[2]);
      bs.splice(t.sym(), e);
      var n = this.makeEdge(this.frameVertex[2], this.frameVertex[0]);
      return bs.splice(e.sym(), n), bs.splice(n.sym(), t), t;
    },
    isFrameBorderEdge: function(t) {
      var e = new Array(3).fill(null);
      Fs.getTriangleEdges(t, e);
      var n = new Array(3).fill(null);
      Fs.getTriangleEdges(t.sym(), n);
      var i = t.lNext().dest();
      if (this.isFrameVertex(i))
        return !0;
      var r = t.sym().lNext().dest();
      return !!this.isFrameVertex(r);
    },
    makeEdge: function(t, e) {
      var n = bs.makeEdge(t, e);
      return this.quadEdges.add(n), n;
    },
    visitTriangles: function(t, e) {
      this.visitedKey++;
      var n = new pe;
      n.push(this.startingEdge);
      for (var i = new J; !n.empty(); ) {
        var r = n.pop();
        if (!i.contains(r)) {
          var s = this.fetchTriangleToVisit(r, n, e, i);
          null !== s && t.visit(s);
        }
      }
    },
    isFrameEdge: function(t) {
      return !(!this.isFrameVertex(t.orig()) && !this.isFrameVertex(t.dest()));
    },
    isOnEdge: function(t, e) {
      this.seg.setCoordinates(t.orig().getCoordinate(), t.dest().getCoordinate());
      var n = this.seg.distance(e);
      return n < this.edgeCoincidenceTolerance;
    },
    getEnvelope: function() {
      return new C(this.frameEnv);
    },
    createFrame: function(t) {
      var e = t.getWidth(),
          n = t.getHeight(),
          i = 0;
      i = e > n ? 10 * e : 10 * n, this.frameVertex[0] = new Ts((t.getMaxX() + t.getMinX()) / 2, t.getMaxY() + i), this.frameVertex[1] = new Ts(t.getMinX() - i, t.getMinY() - i), this.frameVertex[2] = new Ts(t.getMaxX() + i, t.getMinY() - i), this.frameEnv = new C(this.frameVertex[0].getCoordinate(), this.frameVertex[1].getCoordinate()), this.frameEnv.expandToInclude(this.frameVertex[2].getCoordinate());
    },
    getTriangleCoordinates: function(t) {
      var e = new zs;
      return this.visitTriangles(e, t), e.getTriangles();
    },
    getVertices: function(t) {
      for (var e = new J,
          n = this.quadEdges.iterator(); n.hasNext(); ) {
        var i = n.next(),
            r = i.orig();
        !t && this.isFrameVertex(r) || e.add(r);
        var s = i.dest();
        !t && this.isFrameVertex(s) || e.add(s);
      }
      return e;
    },
    fetchTriangleToVisit: function(t, e, n, i) {
      var r = t,
          s = 0,
          o = !1;
      do {
        this.triEdges[s] = r, this.isFrameEdge(r) && (o = !0);
        var a = r.sym();
        i.contains(a) || e.push(a), i.add(r), s++, r = r.lNext();
      } while (r !== t);
      return o && !n ? null : this.triEdges;
    },
    getEdges: function() {
      if (0 === arguments.length)
        return this.quadEdges;
      if (1 === arguments.length) {
        for (var t = arguments[0],
            e = this.getPrimaryEdges(!1),
            n = new Array(e.size()).fill(null),
            i = 0,
            r = e.iterator(); r.hasNext(); ) {
          var s = r.next();
          n[i++] = t.createLineString([s.orig().getCoordinate(), s.dest().getCoordinate()]);
        }
        return t.createMultiLineString(n);
      }
    },
    getVertexUniqueEdges: function(t) {
      for (var e = new I,
          n = new J,
          i = this.quadEdges.iterator(); i.hasNext(); ) {
        var r = i.next(),
            s = r.orig();
        n.contains(s) || (n.add(s), !t && this.isFrameVertex(s) || e.add(r));
        var o = r.sym(),
            a = o.orig();
        n.contains(a) || (n.add(a), !t && this.isFrameVertex(a) || e.add(o));
      }
      return e;
    },
    getTriangleEdges: function(t) {
      var e = new qs;
      return this.visitTriangles(e, t), e.getTriangleEdges();
    },
    getPrimaryEdges: function(t) {
      this.visitedKey++;
      var e = new I,
          n = new pe;
      n.push(this.startingEdge);
      for (var i = new J; !n.empty(); ) {
        var r = n.pop();
        if (!i.contains(r)) {
          var s = r.getPrimary();
          !t && this.isFrameEdge(s) || e.add(s), n.push(r.oNext()), n.push(r.sym().oNext()), i.add(r), i.add(r.sym());
        }
      }
      return e;
    },
    delete: function(t) {
      bs.splice(t, t.oPrev()), bs.splice(t.sym(), t.sym().oPrev());
      var e = t.sym(),
          n = t.rot(),
          i = t.rot().sym();
      this.quadEdges.remove(t), this.quadEdges.remove(e), this.quadEdges.remove(n), this.quadEdges.remove(i), t.delete(), e.delete(), n.delete(), i.delete();
    },
    locateFromEdge: function(t, e) {
      for (var n = 0,
          i = this.quadEdges.size(),
          r = e; ; ) {
        if (n++, n > i)
          throw new Ds(r.toLineSegment());
        if (t.equals(r.orig()) || t.equals(r.dest()))
          break;
        if (t.rightOf(r))
          r = r.sym();
        else if (t.rightOf(r.oNext())) {
          if (t.rightOf(r.dPrev()))
            break;
          r = r.dPrev();
        } else
          r = r.oNext();
      }
      return r;
    },
    getTolerance: function() {
      return this.tolerance;
    },
    getVoronoiCellPolygons: function(t) {
      this.visitTriangles(new Gs, !0);
      for (var e = new I,
          n = this.getVertexUniqueEdges(!1),
          i = n.iterator(); i.hasNext(); ) {
        var r = i.next();
        e.add(this.getVoronoiCellPolygon(r, t));
      }
      return e;
    },
    getVoronoiDiagram: function(t) {
      var e = this.getVoronoiCellPolygons(t);
      return t.createGeometryCollection(ie.toGeometryArray(e));
    },
    getTriangles: function(t) {
      for (var e = this.getTriangleCoordinates(!1),
          n = new Array(e.size()).fill(null),
          i = 0,
          r = e.iterator(); r.hasNext(); ) {
        var s = r.next();
        n[i++] = t.createPolygon(t.createLinearRing(s), null);
      }
      return t.createGeometryCollection(n);
    },
    insertSite: function(t) {
      var e = this.locate(t);
      if (t.equals(e.orig(), this.tolerance) || t.equals(e.dest(), this.tolerance))
        return e;
      var n = this.makeEdge(e.orig(), t);
      bs.splice(n, e);
      var i = n;
      do
        n = this.connect(e, n.sym()), e = n.oPrev();
 while (e.lNext() !== i);
      return i;
    },
    locate: function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Ts) {
          var t = arguments[0];
          return this.locator.locate(t);
        }
        if (arguments[0] instanceof g) {
          var e = arguments[0];
          return this.locator.locate(new Ts(e));
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            r = this.locator.locate(new Ts(n));
        if (null === r)
          return null;
        var s = r;
        r.dest().getCoordinate().equals2D(n) && (s = r.sym());
        var o = s;
        do {
          if (o.dest().getCoordinate().equals2D(i))
            return o;
          o = o.oNext();
        } while (o !== s);
        return null;
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Fs;
    }
  }), Fs.getTriangleEdges = function(t, e) {
    if (e[0] = t, e[1] = e[0].lNext(), e[2] = e[1].lNext(), e[2].lNext() !== e[0])
      throw new i("Edges do not form a triangle");
  }, e(Gs.prototype, {
    visit: function(t) {
      for (var e = t[0].orig().getCoordinate(),
          n = t[1].orig().getCoordinate(),
          i = t[2].orig().getCoordinate(),
          r = ci.circumcentre(e, n, i),
          s = new Ts(r),
          o = 0; 3 > o; o++)
        t[o].rot().setOrig(s);
    },
    interfaces_: function() {
      return [As];
    },
    getClass: function() {
      return Gs;
    }
  }), e(qs.prototype, {
    getTriangleEdges: function() {
      return this.triList;
    },
    visit: function(t) {
      this.triList.add(t.clone());
    },
    interfaces_: function() {
      return [As];
    },
    getClass: function() {
      return qs;
    }
  }), e(Bs.prototype, {
    visit: function(t) {
      this.triList.add([t[0].orig(), t[1].orig(), t[2].orig()]);
    },
    getTriangleVertices: function() {
      return this.triList;
    },
    interfaces_: function() {
      return [As];
    },
    getClass: function() {
      return Bs;
    }
  }), e(zs.prototype, {
    checkTriangleSize: function(t) {
      var e = "";
      t.length >= 2 ? e = se.toLineString(t[0], t[1]) : t.length >= 1 && (e = se.toPoint(t[0]));
    },
    visit: function(t) {
      this.coordList.clear();
      for (var e = 0; 3 > e; e++) {
        var n = t[e].orig();
        this.coordList.add(n.getCoordinate());
      }
      if (this.coordList.size() > 0) {
        this.coordList.closeRing();
        var i = this.coordList.toCoordinateArray();
        if (4 !== i.length)
          return null;
        this.triCoords.add(i);
      }
    },
    getTriangles: function() {
      return this.triCoords;
    },
    interfaces_: function() {
      return [As];
    },
    getClass: function() {
      return zs;
    }
  }), Fs.TriangleCircumcentreVisitor = Gs, Fs.TriangleEdgesListVisitor = qs, Fs.TriangleVertexListVisitor = Bs, Fs.TriangleCoordinatesVisitor = zs, Fs.EDGE_COINCIDENCE_TOL_FACTOR = 1e3, e(Vs.prototype, {
    getLineSegment: function() {
      return this.ls;
    },
    getEndZ: function() {
      var t = this.ls.getCoordinate(1);
      return t.z;
    },
    getStartZ: function() {
      var t = this.ls.getCoordinate(0);
      return t.z;
    },
    intersection: function(t) {
      return this.ls.intersection(t.getLineSegment());
    },
    getStart: function() {
      return this.ls.getCoordinate(0);
    },
    getEnd: function() {
      return this.ls.getCoordinate(1);
    },
    getEndY: function() {
      var t = this.ls.getCoordinate(1);
      return t.y;
    },
    getStartX: function() {
      var t = this.ls.getCoordinate(0);
      return t.x;
    },
    equalsTopo: function(t) {
      return this.ls.equalsTopo(t.getLineSegment());
    },
    getStartY: function() {
      var t = this.ls.getCoordinate(0);
      return t.y;
    },
    setData: function(t) {
      this.data = t;
    },
    getData: function() {
      return this.data;
    },
    getEndX: function() {
      var t = this.ls.getCoordinate(1);
      return t.x;
    },
    toString: function() {
      return this.ls.toString();
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Vs;
    }
  }), e(ks.prototype, {
    visit: function(t) {},
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return ks;
    }
  }), e(Ys.prototype, {
    isRepeated: function() {
      return this.count > 1;
    },
    getRight: function() {
      return this.right;
    },
    getCoordinate: function() {
      return this.p;
    },
    setLeft: function(t) {
      this.left = t;
    },
    getX: function() {
      return this.p.x;
    },
    getData: function() {
      return this.data;
    },
    getCount: function() {
      return this.count;
    },
    getLeft: function() {
      return this.left;
    },
    getY: function() {
      return this.p.y;
    },
    increment: function() {
      this.count = this.count + 1;
    },
    setRight: function(t) {
      this.right = t;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ys;
    }
  }), e(Us.prototype, {
    insert: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.insert(t, null);
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        if (null === this.root)
          return this.root = new Ys(e, n), this.root;
        if (this.tolerance > 0) {
          var i = this.findBestMatchNode(e);
          if (null !== i)
            return i.increment(), i;
        }
        return this.insertExact(e, n);
      }
    },
    query: function() {
      var t = arguments,
          e = this;
      if (1 === arguments.length) {
        var n = arguments[0],
            i = new I;
        return this.query(n, i), i;
      }
      if (2 === arguments.length)
        if (arguments[0] instanceof C && R(arguments[1], y))
          !function() {
            var n = t[0],
                i = t[1];
            e.queryNode(e.root, n, !0, {
              interfaces_: function() {
                return [ks];
              },
              visit: function(t) {
                i.add(t);
              }
            });
          }();
        else if (arguments[0] instanceof C && R(arguments[1], ks)) {
          var r = arguments[0],
              s = arguments[1];
          this.queryNode(this.root, r, !0, s);
        }
    },
    queryNode: function(t, e, n, i) {
      if (null === t)
        return null;
      var r = null,
          s = null,
          o = null;
      n ? (r = e.getMinX(), s = e.getMaxX(), o = t.getX()) : (r = e.getMinY(), s = e.getMaxY(), o = t.getY());
      var a = o > r,
          u = s >= o;
      a && this.queryNode(t.getLeft(), e, !n, i), e.contains(t.getCoordinate()) && i.visit(t), u && this.queryNode(t.getRight(), e, !n, i);
    },
    findBestMatchNode: function(t) {
      var e = new Xs(t, this.tolerance);
      return this.query(e.queryEnvelope(), e), e.getNode();
    },
    isEmpty: function() {
      return null === this.root;
    },
    insertExact: function(t, e) {
      for (var n = this.root,
          i = this.root,
          r = !0,
          s = !0; null !== n; ) {
        if (null !== n) {
          var o = t.distance(n.getCoordinate()) <= this.tolerance;
          if (o)
            return n.increment(), n;
        }
        s = r ? t.x < n.getX() : t.y < n.getY(), i = n, n = s ? n.getLeft() : n.getRight(), r = !r;
      }
      this.numberOfNodes = this.numberOfNodes + 1;
      var a = new Ys(t, e);
      return s ? i.setLeft(a) : i.setRight(a), a;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Us;
    }
  }), Us.toCoordinates = function() {
    if (1 === arguments.length) {
      var t = arguments[0];
      return Us.toCoordinates(t, !1);
    }
    if (2 === arguments.length) {
      for (var e = arguments[0],
          n = arguments[1],
          i = new N,
          r = e.iterator(); r.hasNext(); )
        for (var s = r.next(),
            o = n ? s.getCount() : 1,
            a = 0; o > a; a++)
          i.add(s.getCoordinate(), !0);
      return i.toCoordinateArray();
    }
  }, e(Xs.prototype, {
    visit: function(t) {
      var e = this.p.distance(t.getCoordinate()),
          n = e <= this.tolerance;
      if (!n)
        return null;
      var i = !1;
      (null === this.matchNode || e < this.matchDist || null !== this.matchNode && e === this.matchDist && t.getCoordinate().compareTo(this.matchNode.getCoordinate()) < 1) && (i = !0), i && (this.matchNode = t, this.matchDist = e);
    },
    queryEnvelope: function() {
      var t = new C(this.p);
      return t.expandBy(this.tolerance), t;
    },
    getNode: function() {
      return this.matchNode;
    },
    interfaces_: function() {
      return [ks];
    },
    getClass: function() {
      return Xs;
    }
  }), Us.BestMatchVisitor = Xs, e(Hs.prototype, {
    getInitialVertices: function() {
      return this.initialVertices;
    },
    getKDT: function() {
      return this.kdt;
    },
    enforceConstraints: function() {
      this.addConstraintVertices();
      var t = 0,
          e = 0;
      do
        e = this.enforceGabriel(this.segments), t++;
 while (e > 0 && t < Hs.MAX_SPLIT_ITER);
    },
    insertSites: function(t) {
      for (var e = t.iterator(); e.hasNext(); ) {
        var n = e.next();
        this.insertSite(n);
      }
    },
    getVertexFactory: function() {
      return this.vertexFactory;
    },
    getPointArray: function() {
      for (var t = new Array(this.initialVertices.size() + this.segVertices.size()).fill(null),
          e = 0,
          n = this.initialVertices.iterator(); n.hasNext(); ) {
        var i = n.next();
        t[e++] = i.getCoordinate();
      }
      for (var r = this.segVertices.iterator(); r.hasNext(); ) {
        var i = r.next();
        t[e++] = i.getCoordinate();
      }
      return t;
    },
    setConstraints: function(t, e) {
      this.segments = t, this.segVertices = e;
    },
    computeConvexHull: function() {
      var t = new ie,
          e = this.getPointArray(),
          n = new me(e, t);
      this.convexHull = n.getConvexHull();
    },
    addConstraintVertices: function() {
      this.computeConvexHull(), this.insertSites(this.segVertices);
    },
    findNonGabrielPoint: function(t) {
      var e = t.getStart(),
          n = t.getEnd(),
          i = new g((e.x + n.x) / 2, (e.y + n.y) / 2),
          s = e.distance(i),
          o = new C(i);
      o.expandBy(s);
      for (var a = this.kdt.query(o),
          u = null,
          l = r.MAX_VALUE,
          h = a.iterator(); h.hasNext(); ) {
        var c = h.next(),
            f = c.getCoordinate();
        if (!f.equals2D(e) && !f.equals2D(n)) {
          var d = i.distance(f);
          if (s > d) {
            var p = d;
            (null === u || l > p) && (u = f, l = p);
          }
        }
      }
      return u;
    },
    getConstraintSegments: function() {
      return this.segments;
    },
    setSplitPointFinder: function(t) {
      this.splitFinder = t;
    },
    getConvexHull: function() {
      return this.convexHull;
    },
    getTolerance: function() {
      return this.tolerance;
    },
    enforceGabriel: function(t) {
      for (var e = new I,
          n = 0,
          i = new I,
          r = t.iterator(); r.hasNext(); ) {
        var s = r.next(),
            o = this.findNonGabrielPoint(s);
        if (null !== o) {
          this.splitPt = this.splitFinder.findSplitPoint(s, o);
          var a = this.createVertex(this.splitPt, s),
              u = (this.insertSite(a), new Vs(s.getStartX(), s.getStartY(), s.getStartZ(), a.getX(), a.getY(), a.getZ(), s.getData())),
              l = new Vs(a.getX(), a.getY(), a.getZ(), s.getEndX(), s.getEndY(), s.getEndZ(), s.getData());
          e.add(u), e.add(l), i.add(s), n += 1;
        }
      }
      return t.removeAll(i), t.addAll(e), n;
    },
    createVertex: function() {
      if (1 === arguments.length) {
        var t = arguments[0],
            e = null;
        return e = null !== this.vertexFactory ? this.vertexFactory.createVertex(t, null) : new Ps(t);
      }
      if (2 === arguments.length) {
        var n = arguments[0],
            i = arguments[1],
            e = null;
        return e = null !== this.vertexFactory ? this.vertexFactory.createVertex(n, i) : new Ps(n), e.setOnConstraint(!0), e;
      }
    },
    getSubdivision: function() {
      return this.subdiv;
    },
    computeBoundingBox: function() {
      var t = Hs.computeVertexEnvelope(this.initialVertices),
          e = Hs.computeVertexEnvelope(this.segVertices),
          n = new C(t);
      n.expandToInclude(e);
      var i = .2 * n.getWidth(),
          r = .2 * n.getHeight(),
          s = Math.max(i, r);
      this.computeAreaEnv = new C(n), this.computeAreaEnv.expandBy(s);
    },
    setVertexFactory: function(t) {
      this.vertexFactory = t;
    },
    formInitialDelaunay: function() {
      this.computeBoundingBox(), this.subdiv = new Fs(this.computeAreaEnv, this.tolerance), this.subdiv.setLocator(new Ms(this.subdiv)), this.incDel = new Os(this.subdiv), this.insertSites(this.initialVertices);
    },
    insertSite: function() {
      if (arguments[0] instanceof Ps) {
        var t = arguments[0],
            e = this.kdt.insert(t.getCoordinate(), t);
        if (e.isRepeated()) {
          var n = e.getData();
          return n.merge(t), n;
        }
        return this.incDel.insertSite(t), t;
      }
      if (arguments[0] instanceof g) {
        var i = arguments[0];
        this.insertSite(this.createVertex(i));
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Hs;
    }
  }), Hs.computeVertexEnvelope = function(t) {
    for (var e = new C,
        n = t.iterator(); n.hasNext(); ) {
      var i = n.next();
      e.expandToInclude(i.getCoordinate());
    }
    return e;
  }, Hs.MAX_SPLIT_ITER = 99, e(Ws.prototype, {
    create: function() {
      if (null !== this.subdiv)
        return null;
      var t = Ws.envelope(this.siteCoords),
          e = Ws.toVertices(this.siteCoords);
      this.subdiv = new Fs(t, this.tolerance);
      var n = new Os(this.subdiv);
      n.insertSites(e);
    },
    setTolerance: function(t) {
      this.tolerance = t;
    },
    setSites: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        this.siteCoords = Ws.extractUniqueCoordinates(t);
      } else if (R(arguments[0], v)) {
        var e = arguments[0];
        this.siteCoords = Ws.unique(H.toCoordinateArray(e));
      }
    },
    getEdges: function(t) {
      return this.create(), this.subdiv.getEdges(t);
    },
    getSubdivision: function() {
      return this.create(), this.subdiv;
    },
    getTriangles: function(t) {
      return this.create(), this.subdiv.getTriangles(t);
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ws;
    }
  }), Ws.extractUniqueCoordinates = function(t) {
    if (null === t)
      return new N;
    var e = t.getCoordinates();
    return Ws.unique(e);
  }, Ws.envelope = function(t) {
    for (var e = new C,
        n = t.iterator(); n.hasNext(); ) {
      var i = n.next();
      e.expandToInclude(i);
    }
    return e;
  }, Ws.unique = function(t) {
    var e = H.copyDeep(t);
    ut.sort(e);
    var n = new N(e, !1);
    return n;
  }, Ws.toVertices = function(t) {
    for (var e = new I,
        n = t.iterator(); n.hasNext(); ) {
      var i = n.next();
      e.add(new Ts(i));
    }
    return e;
  }, e(js.prototype, {
    createSiteVertices: function(t) {
      for (var e = new I,
          n = t.iterator(); n.hasNext(); ) {
        var i = n.next();
        this.constraintVertexMap.containsKey(i) || e.add(new Ps(i));
      }
      return e;
    },
    create: function() {
      if (null !== this.subdiv)
        return null;
      var t = Ws.envelope(this.siteCoords),
          e = new I;
      null !== this.constraintLines && (t.expandToInclude(this.constraintLines.getEnvelopeInternal()), this.createVertices(this.constraintLines), e = js.createConstraintSegments(this.constraintLines));
      var n = this.createSiteVertices(this.siteCoords),
          i = new Hs(n, this.tolerance);
      i.setConstraints(e, new I(this.constraintVertexMap.values())), i.formInitialDelaunay(), i.enforceConstraints(), this.subdiv = i.getSubdivision();
    },
    setTolerance: function(t) {
      this.tolerance = t;
    },
    setConstraints: function(t) {
      this.constraintLines = t;
    },
    setSites: function(t) {
      this.siteCoords = Ws.extractUniqueCoordinates(t);
    },
    getEdges: function(t) {
      return this.create(), this.subdiv.getEdges(t);
    },
    getSubdivision: function() {
      return this.create(), this.subdiv;
    },
    getTriangles: function(t) {
      return this.create(), this.subdiv.getTriangles(t);
    },
    createVertices: function(t) {
      for (var e = t.getCoordinates(),
          n = 0; n < e.length; n++) {
        var i = new Ps(e[n]);
        this.constraintVertexMap.put(e[n], i);
      }
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return js;
    }
  }), js.createConstraintSegments = function() {
    if (1 === arguments.length) {
      for (var t = arguments[0],
          e = kn.getLines(t),
          n = new I,
          i = e.iterator(); i.hasNext(); ) {
        var r = i.next();
        js.createConstraintSegments(r, n);
      }
      return n;
    }
    if (2 === arguments.length)
      for (var s = arguments[0],
          o = arguments[1],
          a = s.getCoordinates(),
          i = 1; i < a.length; i++)
        o.add(new Vs(a[i - 1], a[i]));
  }, e(Ks.prototype, {
    create: function() {
      if (null !== this.subdiv)
        return null;
      var t = Ws.envelope(this.siteCoords);
      this.diagramEnv = t;
      var e = Math.max(this.diagramEnv.getWidth(), this.diagramEnv.getHeight());
      this.diagramEnv.expandBy(e), null !== this.clipEnv && this.diagramEnv.expandToInclude(this.clipEnv);
      var n = Ws.toVertices(this.siteCoords);
      this.subdiv = new Fs(t, this.tolerance);
      var i = new Os(this.subdiv);
      i.insertSites(n);
    },
    getDiagram: function(t) {
      this.create();
      var e = this.subdiv.getVoronoiDiagram(t);
      return Ks.clipGeometryCollection(e, this.diagramEnv);
    },
    setTolerance: function(t) {
      this.tolerance = t;
    },
    setSites: function() {
      if (arguments[0] instanceof B) {
        var t = arguments[0];
        this.siteCoords = Ws.extractUniqueCoordinates(t);
      } else if (R(arguments[0], v)) {
        var e = arguments[0];
        this.siteCoords = Ws.unique(H.toCoordinateArray(e));
      }
    },
    setClipEnvelope: function(t) {
      this.clipEnv = t;
    },
    getSubdivision: function() {
      return this.create(), this.subdiv;
    },
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Ks;
    }
  }), Ks.clipGeometryCollection = function(t, e) {
    for (var n = t.getFactory().toGeometry(e),
        i = new I,
        r = 0; r < t.getNumGeometries(); r++) {
      var s = t.getGeometryN(r),
          o = null;
      e.contains(s.getEnvelopeInternal()) ? o = s : e.intersects(s.getEnvelopeInternal()) && (o = n.intersection(s), o.setUserData(s.getUserData())), null === o || o.isEmpty() || i.add(o);
    }
    return t.getFactory().createGeometryCollection(ie.toGeometryArray(i));
  };
  var Do = Object.freeze({
    ConformingDelaunayTriangulationBuilder: js,
    DelaunayTriangulationBuilder: Ws,
    VoronoiDiagramBuilder: Ks
  });
  e(Zs.prototype, {
    interfaces_: function() {
      return [];
    },
    getClass: function() {
      return Zs;
    }
  }), Zs.union = function(t, e) {
    if (t.isEmpty() || e.isEmpty()) {
      if (t.isEmpty() && e.isEmpty())
        return ii.createEmptyResult(ii.UNION, t, e, t.getFactory());
      if (t.isEmpty())
        return e.copy();
      if (e.isEmpty())
        return t.copy();
    }
    return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), si.overlayOp(t, e, ii.UNION);
  }, e(B.prototype, {
    equalsTopo: function(t) {
      return this.getEnvelopeInternal().equals(t.getEnvelopeInternal()) ? Yr.relate(this, t).isEquals(this.getDimension(), t.getDimension()) : !1;
    },
    union: function() {
      if (0 === arguments.length)
        return jr.union(this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return Zs.union(this, t);
      }
    },
    isValid: function() {
      return ls.isValid(this);
    },
    intersection: function(t) {
      if (this.isEmpty() || t.isEmpty())
        return ii.createEmptyResult(ii.INTERSECTION, this, t, this.factory);
      if (this.isGeometryCollection()) {
        var e = t;
        return hn.map(this, {
          interfaces_: function() {
            return [MapOp];
          },
          map: function(t) {
            return t.intersection(e);
          }
        });
      }
      return this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), si.overlayOp(this, t, ii.INTERSECTION);
    },
    covers: function(t) {
      return Yr.covers(this, t);
    },
    coveredBy: function(t) {
      return Yr.coveredBy(this, t);
    },
    touches: function(t) {
      return Yr.touches(this, t);
    },
    intersects: function(t) {
      return Yr.intersects(this, t);
    },
    within: function(t) {
      return Yr.within(this, t);
    },
    overlaps: function(t) {
      return Yr.overlaps(this, t);
    },
    disjoint: function(t) {
      return Yr.disjoint(this, t);
    },
    crosses: function(t) {
      return Yr.crosses(this, t);
    },
    buffer: function() {
      if (1 === arguments.length) {
        var t = arguments[0];
        return sr.bufferOp(this, t);
      }
      if (2 === arguments.length) {
        var e = arguments[0],
            n = arguments[1];
        return sr.bufferOp(this, e, n);
      }
      if (3 === arguments.length) {
        var i = arguments[0],
            r = arguments[1],
            s = arguments[2];
        return sr.bufferOp(this, i, r, s);
      }
    },
    convexHull: function() {
      return new me(this).getConvexHull();
    },
    relate: function() {
      for (var t = arguments.length,
          e = Array(t),
          n = 0; t > n; n++)
        e[n] = arguments[n];
      return Yr.relate.apply(Yr, [this].concat(e));
    },
    getCentroid: function() {
      if (this.isEmpty())
        return this.factory.createPoint();
      var t = ge.getCentroid(this);
      return this.createPointFromInternalCoord(t, this);
    },
    getInteriorPoint: function() {
      if (this.isEmpty())
        return this.factory.createPoint();
      var t = null,
          e = this.getDimension();
      if (0 === e) {
        var n = new li(this);
        t = n.getInteriorPoint();
      } else if (1 === e) {
        var n = new ui(this);
        t = n.getInteriorPoint();
      } else {
        var n = new oi(this);
        t = n.getInteriorPoint();
      }
      return this.createPointFromInternalCoord(t, this);
    },
    symDifference: function(t) {
      if (this.isEmpty() || t.isEmpty()) {
        if (this.isEmpty() && t.isEmpty())
          return ii.createEmptyResult(ii.SYMDIFFERENCE, this, t, this.factory);
        if (this.isEmpty())
          return t.copy();
        if (t.isEmpty())
          return this.copy();
      }
      return this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), si.overlayOp(this, t, ii.SYMDIFFERENCE);
    },
    createPointFromInternalCoord: function(t, e) {
      return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
    },
    toText: function() {
      var t = new se;
      return t.write(this);
    },
    toString: function() {
      this.toText();
    },
    contains: function(t) {
      return Yr.contains(this, t);
    },
    difference: function(t) {
      return this.isEmpty() ? ii.createEmptyResult(ii.DIFFERENCE, this, t, this.factory) : t.isEmpty() ? this.copy() : (this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), si.overlayOp(this, t, ii.DIFFERENCE));
    },
    isSimple: function() {
      var t = new Gi(this);
      return t.isSimple();
    },
    isWithinDistance: function(t, e) {
      var n = this.getEnvelopeInternal().distance(t.getEnvelopeInternal());
      return n > e ? !1 : hr.isWithinDistance(this, t, e);
    },
    distance: function(t) {
      return hr.distance(this, t);
    },
    isEquivalentClass: function(t) {
      return this.getClass() === t.getClass();
    }
  });
  var Ao = "1.1.2 (248dab8)";
  t.version = Ao, t.algorithm = co, t.densify = fo, t.dissolve = go, t.geom = lo, t.index = mo, t.io = Io, t.noding = No, t.operation = Oo, t.precision = _o, t.simplify = Mo, t.triangulate = Do;
});

})();
$__System.registerDynamic('f', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = normalize;

    var types = {
        Point: 'geometry',
        MultiPoint: 'geometry',
        LineString: 'geometry',
        MultiLineString: 'geometry',
        Polygon: 'geometry',
        MultiPolygon: 'geometry',
        GeometryCollection: 'geometry',
        Feature: 'feature',
        FeatureCollection: 'featurecollection'
    };

    /**
     * Normalize a GeoJSON feature into a FeatureCollection.
     *
     * @param {object} gj geojson data
     * @returns {object} normalized geojson data
     */
    function normalize(gj) {
        if (!gj || !gj.type) return null;
        var type = types[gj.type];
        if (!type) return null;

        if (type === 'geometry') {
            return {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: gj
                }]
            };
        } else if (type === 'feature') {
            return {
                type: 'FeatureCollection',
                features: [gj]
            };
        } else if (type === 'featurecollection') {
            return gj;
        }
    }
    return module.exports;
});
$__System.registerDynamic('10', ['6', '8', 'f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // http://stackoverflow.com/questions/839899/how-do-i-calculate-a-point-on-a-circles-circumference
    // radians = degrees * (pi/180)
    // https://github.com/bjornharrtell/jsts/blob/master/examples/buffer.html

    var helpers = $__require('6');
    var featureCollection = helpers.featureCollection;
    var jsts = $__require('8');
    var normalize = $__require('f');

    /**
     * Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.
     *
     * @name buffer
     * @param {(Feature|FeatureCollection)} feature input to be buffered
     * @param {number} distance distance to draw the buffer
     * @param {string} unit any of the options supported by turf units
     * @return {FeatureCollection<Polygon>|FeatureCollection<MultiPolygon>|Polygon|MultiPolygon} buffered features
     *
     * @example
     * var pt = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-90.548630, 14.616599]
     *   }
     * };
     * var unit = 'miles';
     *
     * var buffered = turf.buffer(pt, 500, unit);
     * var result = turf.featurecollection([buffered, pt]);
     *
     * //=result
     */

    module.exports = function (feature, radius, units) {

        var degrees = helpers.distanceToDegrees(radius, units);
        var fc = normalize(feature);
        var buffered = normalize(featureCollection(fc.features.map(function (f) {
            return bufferOp(f, degrees);
        })));

        if (buffered.features.length > 1) return buffered;else if (buffered.features.length === 1) return buffered.features[0];
    };

    function bufferOp(feature, radius) {
        var reader = new jsts.io.GeoJSONReader();
        var geom = reader.read(feature.geometry);
        var buffered = geom.buffer(radius);
        var writer = new jsts.io.GeoJSONWriter();
        buffered = writer.write(buffered);

        return {
            type: 'Feature',
            geometry: buffered,
            properties: {}
        };
    }
    return module.exports;
});
$__System.registerDynamic('11', ['12'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var invariant = $__require('12');

    // http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
    // modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
    // which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    /**
     * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point resides inside the polygon. The polygon can
     * be convex or concave. The function accounts for holes.
     *
     * @name inside
     * @param {Feature<Point>} point input point
     * @param {Feature<(Polygon|MultiPolygon)>} polygon input polygon or multipolygon
     * @return {Boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
     * @example
     * var pt1 = {
     *   "type": "Feature",
     *   "properties": {
     *     "marker-color": "#f00"
     *   },
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-111.467285, 40.75766]
     *   }
     * };
     * var pt2 = {
     *   "type": "Feature",
     *   "properties": {
     *     "marker-color": "#0f0"
     *   },
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-111.873779, 40.647303]
     *   }
     * };
     * var poly = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[
     *       [-112.074279, 40.52215],
     *       [-112.074279, 40.853293],
     *       [-111.610107, 40.853293],
     *       [-111.610107, 40.52215],
     *       [-112.074279, 40.52215]
     *     ]]
     *   }
     * };
     *
     * var features = {
     *   "type": "FeatureCollection",
     *   "features": [pt1, pt2, poly]
     * };
     *
     * //=features
     *
     * var isInside1 = turf.inside(pt1, poly);
     * //=isInside1
     *
     * var isInside2 = turf.inside(pt2, poly);
     * //=isInside2
     */
    module.exports = function input(point, polygon) {
        var pt = invariant.getCoord(point);
        var polys = polygon.geometry.coordinates;
        // normalize to multipolygon
        if (polygon.geometry.type === 'Polygon') polys = [polys];

        for (var i = 0, insidePoly = false; i < polys.length && !insidePoly; i++) {
            // check if it is in the outer ring first
            if (inRing(pt, polys[i][0])) {
                var inHole = false;
                var k = 1;
                // check for the point in any of the holes
                while (k < polys[i].length && !inHole) {
                    if (inRing(pt, polys[i][k])) {
                        inHole = true;
                    }
                    k++;
                }
                if (!inHole) insidePoly = true;
            }
        }
        return insidePoly;
    };

    // pt is [x,y] and ring is [[x,y], [x,y],..]
    function inRing(pt, ring) {
        var isInside = false;
        for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
            var xi = ring[i][0],
                yi = ring[i][1];
            var xj = ring[j][0],
                yj = ring[j][1];
            var intersect = yi > pt[1] !== yj > pt[1] && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi;
            if (intersect) isInside = !isInside;
        }
        return isInside;
    }
    return module.exports;
});
$__System.registerDynamic('c', ['12', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var getCoord = $__require('12').getCoord;
  var radiansToDistance = $__require('6').radiansToDistance;
  //http://en.wikipedia.org/wiki/Haversine_formula
  //http://www.movable-type.co.uk/scripts/latlong.html

  /**
   * Calculates the distance between two {@link Point|points} in degrees, radians,
   * miles, or kilometers. This uses the
   * [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula)
   * to account for global curvature.
   *
   * @name distance
   * @param {Feature<Point>} from origin point
   * @param {Feature<Point>} to destination point
   * @param {String} [units=kilometers] can be degrees, radians, miles, or kilometers
   * @return {Number} distance between the two points
   * @example
   * var from = {
   *   "type": "Feature",
   *   "properties": {},
   *   "geometry": {
   *     "type": "Point",
   *     "coordinates": [-75.343, 39.984]
   *   }
   * };
   * var to = {
   *   "type": "Feature",
   *   "properties": {},
   *   "geometry": {
   *     "type": "Point",
   *     "coordinates": [-75.534, 39.123]
   *   }
   * };
   * var units = "miles";
   *
   * var points = {
   *   "type": "FeatureCollection",
   *   "features": [from, to]
   * };
   *
   * //=points
   *
   * var distance = turf.distance(from, to, units);
   *
   * //=distance
   */
  module.exports = function (from, to, units) {
    var degrees2radians = Math.PI / 180;
    var coordinates1 = getCoord(from);
    var coordinates2 = getCoord(to);
    var dLat = degrees2radians * (coordinates2[1] - coordinates1[1]);
    var dLon = degrees2radians * (coordinates2[0] - coordinates1[0]);
    var lat1 = degrees2radians * coordinates1[1];
    var lat2 = degrees2radians * coordinates2[1];

    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);

    return radiansToDistance(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), units);
  };
  return module.exports;
});
$__System.registerDynamic('d', ['12'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var getCoord = $__require('12').getCoord;
    //http://en.wikipedia.org/wiki/Haversine_formula
    //http://www.movable-type.co.uk/scripts/latlong.html

    /**
     * Takes two {@link Point|points} and finds the geographic bearing between them.
     *
     * @name bearing
     * @param {Feature<Point>} start starting Point
     * @param {Feature<Point>} end ending Point
     * @returns {Number} bearing in decimal degrees
     * @example
     * var point1 = {
     *   "type": "Feature",
     *   "properties": {
     *     "marker-color": '#f00'
     *   },
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-75.343, 39.984]
     *   }
     * };
     * var point2 = {
     *   "type": "Feature",
     *   "properties": {
     *     "marker-color": '#0f0'
     *   },
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-75.534, 39.123]
     *   }
     * };
     *
     * var points = {
     *   "type": "FeatureCollection",
     *   "features": [point1, point2]
     * };
     *
     * //=points
     *
     * var bearing = turf.bearing(point1, point2);
     *
     * //=bearing
     */
    module.exports = function (start, end) {
        var degrees2radians = Math.PI / 180;
        var radians2degrees = 180 / Math.PI;
        var coordinates1 = getCoord(start);
        var coordinates2 = getCoord(end);

        var lon1 = degrees2radians * coordinates1[0];
        var lon2 = degrees2radians * coordinates2[0];
        var lat1 = degrees2radians * coordinates1[1];
        var lat2 = degrees2radians * coordinates2[1];
        var a = Math.sin(lon2 - lon1) * Math.cos(lat2);
        var b = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

        var bearing = radians2degrees * Math.atan2(a, b);

        return bearing;
    };
    return module.exports;
});
$__System.registerDynamic('12', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /**
     * Unwrap a coordinate from a Feature with a Point geometry, a Point
     * geometry, or a single coordinate.
     *
     * @param {*} obj any value
     * @returns {Array<number>} a coordinate
     */
    function getCoord(obj) {
        if (Array.isArray(obj) && typeof obj[0] === 'number' && typeof obj[1] === 'number') {
            return obj;
        } else if (obj) {
            if (obj.type === 'Feature' && obj.geometry && obj.geometry.type === 'Point' && Array.isArray(obj.geometry.coordinates)) {
                return obj.geometry.coordinates;
            } else if (obj.type === 'Point' && Array.isArray(obj.coordinates)) {
                return obj.coordinates;
            }
        }
        throw new Error('A coordinate, feature, or point geometry is required');
    }

    /**
     * Enforce expectations about types of GeoJSON objects for Turf.
     *
     * @alias geojsonType
     * @param {GeoJSON} value any GeoJSON object
     * @param {string} type expected GeoJSON type
     * @param {string} name name of calling function
     * @throws {Error} if value is not the expected type.
     */
    function geojsonType(value, type, name) {
        if (!type || !name) throw new Error('type and name required');

        if (!value || value.type !== type) {
            throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + value.type);
        }
    }

    /**
     * Enforce expectations about types of {@link Feature} inputs for Turf.
     * Internally this uses {@link geojsonType} to judge geometry types.
     *
     * @alias featureOf
     * @param {Feature} feature a feature with an expected geometry type
     * @param {string} type expected GeoJSON type
     * @param {string} name name of calling function
     * @throws {Error} error if value is not the expected type.
     */
    function featureOf(feature, type, name) {
        if (!name) throw new Error('.featureOf() requires a name');
        if (!feature || feature.type !== 'Feature' || !feature.geometry) {
            throw new Error('Invalid input to ' + name + ', Feature with geometry required');
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type);
        }
    }

    /**
     * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
     * Internally this uses {@link geojsonType} to judge geometry types.
     *
     * @alias collectionOf
     * @param {FeatureCollection} featurecollection a featurecollection for which features will be judged
     * @param {string} type expected GeoJSON type
     * @param {string} name name of calling function
     * @throws {Error} if value is not the expected type.
     */
    function collectionOf(featurecollection, type, name) {
        if (!name) throw new Error('.collectionOf() requires a name');
        if (!featurecollection || featurecollection.type !== 'FeatureCollection') {
            throw new Error('Invalid input to ' + name + ', FeatureCollection required');
        }
        for (var i = 0; i < featurecollection.features.length; i++) {
            var feature = featurecollection.features[i];
            if (!feature || feature.type !== 'Feature' || !feature.geometry) {
                throw new Error('Invalid input to ' + name + ', Feature with geometry required');
            }
            if (!feature.geometry || feature.geometry.type !== type) {
                throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type);
            }
        }
    }

    module.exports.geojsonType = geojsonType;
    module.exports.collectionOf = collectionOf;
    module.exports.featureOf = featureOf;
    module.exports.getCoord = getCoord;
    return module.exports;
});
$__System.registerDynamic('6', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /**
     * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
     *
     * @name feature
     * @param {Geometry} geometry input geometry
     * @param {Object} properties properties
     * @returns {FeatureCollection} a FeatureCollection of input features
     * @example
     * var geometry = {
     *      "type": "Point",
     *      "coordinates": [
     *        67.5,
     *        32.84267363195431
     *      ]
     *    }
     *
     * var feature = turf.feature(geometry);
     *
     * //=feature
     */
    function feature(geometry, properties) {
        return {
            type: 'Feature',
            properties: properties || {},
            geometry: geometry
        };
    }

    module.exports.feature = feature;

    /**
     * Takes coordinates and properties (optional) and returns a new {@link Point} feature.
     *
     * @name point
     * @param {number[]} coordinates longitude, latitude position (each in decimal degrees)
     * @param {Object=} properties an Object that is used as the {@link Feature}'s
     * properties
     * @returns {Feature<Point>} a Point feature
     * @example
     * var pt1 = turf.point([-75.343, 39.984]);
     *
     * //=pt1
     */
    module.exports.point = function (coordinates, properties) {
        if (!Array.isArray(coordinates)) throw new Error('Coordinates must be an array');
        if (coordinates.length < 2) throw new Error('Coordinates must be at least 2 numbers long');
        return feature({
            type: 'Point',
            coordinates: coordinates.slice()
        }, properties);
    };

    /**
     * Takes an array of LinearRings and optionally an {@link Object} with properties and returns a {@link Polygon} feature.
     *
     * @name polygon
     * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
     * @param {Object=} properties a properties object
     * @returns {Feature<Polygon>} a Polygon feature
     * @throws {Error} throw an error if a LinearRing of the polygon has too few positions
     * or if a LinearRing of the Polygon does not have matching Positions at the
     * beginning & end.
     * @example
     * var polygon = turf.polygon([[
     *  [-2.275543, 53.464547],
     *  [-2.275543, 53.489271],
     *  [-2.215118, 53.489271],
     *  [-2.215118, 53.464547],
     *  [-2.275543, 53.464547]
     * ]], { name: 'poly1', population: 400});
     *
     * //=polygon
     */
    module.exports.polygon = function (coordinates, properties) {

        if (!coordinates) throw new Error('No coordinates passed');

        for (var i = 0; i < coordinates.length; i++) {
            var ring = coordinates[i];
            if (ring.length < 4) {
                throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
            }
            for (var j = 0; j < ring[ring.length - 1].length; j++) {
                if (ring[ring.length - 1][j] !== ring[0][j]) {
                    throw new Error('First and last Position are not equivalent.');
                }
            }
        }

        return feature({
            type: 'Polygon',
            coordinates: coordinates
        }, properties);
    };

    /**
     * Creates a {@link LineString} based on a
     * coordinate array. Properties can be added optionally.
     *
     * @name lineString
     * @param {Array<Array<number>>} coordinates an array of Positions
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<LineString>} a LineString feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var linestring1 = turf.lineString([
     *	[-21.964416, 64.148203],
     *	[-21.956176, 64.141316],
     *	[-21.93901, 64.135924],
     *	[-21.927337, 64.136673]
     * ]);
     * var linestring2 = turf.lineString([
     *	[-21.929054, 64.127985],
     *	[-21.912918, 64.134726],
     *	[-21.916007, 64.141016],
     * 	[-21.930084, 64.14446]
     * ], {name: 'line 1', distance: 145});
     *
     * //=linestring1
     *
     * //=linestring2
     */
    module.exports.lineString = function (coordinates, properties) {
        if (!coordinates) {
            throw new Error('No coordinates passed');
        }
        return feature({
            type: 'LineString',
            coordinates: coordinates
        }, properties);
    };

    /**
     * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
     *
     * @name featureCollection
     * @param {Feature[]} features input features
     * @returns {FeatureCollection} a FeatureCollection of input features
     * @example
     * var features = [
     *  turf.point([-75.343, 39.984], {name: 'Location A'}),
     *  turf.point([-75.833, 39.284], {name: 'Location B'}),
     *  turf.point([-75.534, 39.123], {name: 'Location C'})
     * ];
     *
     * var fc = turf.featureCollection(features);
     *
     * //=fc
     */
    module.exports.featureCollection = function (features) {
        return {
            type: 'FeatureCollection',
            features: features
        };
    };

    /**
     * Creates a {@link Feature<MultiLineString>} based on a
     * coordinate array. Properties can be added optionally.
     *
     * @name multiLineString
     * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<MultiLineString>} a MultiLineString feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
     *
     * //=multiLine
     *
     */
    module.exports.multiLineString = function (coordinates, properties) {
        if (!coordinates) {
            throw new Error('No coordinates passed');
        }
        return feature({
            type: 'MultiLineString',
            coordinates: coordinates
        }, properties);
    };

    /**
     * Creates a {@link Feature<MultiPoint>} based on a
     * coordinate array. Properties can be added optionally.
     *
     * @name multiPoint
     * @param {Array<Array<number>>} coordinates an array of Positions
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<MultiPoint>} a MultiPoint feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var multiPt = turf.multiPoint([[0,0],[10,10]]);
     *
     * //=multiPt
     *
     */
    module.exports.multiPoint = function (coordinates, properties) {
        if (!coordinates) {
            throw new Error('No coordinates passed');
        }
        return feature({
            type: 'MultiPoint',
            coordinates: coordinates
        }, properties);
    };

    /**
     * Creates a {@link Feature<MultiPolygon>} based on a
     * coordinate array. Properties can be added optionally.
     *
     * @name multiPolygon
     * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<MultiPolygon>} a multipolygon feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]);
     *
     * //=multiPoly
     *
     */
    module.exports.multiPolygon = function (coordinates, properties) {
        if (!coordinates) {
            throw new Error('No coordinates passed');
        }
        return feature({
            type: 'MultiPolygon',
            coordinates: coordinates
        }, properties);
    };

    /**
     * Creates a {@link Feature<GeometryCollection>} based on a
     * coordinate array. Properties can be added optionally.
     *
     * @name geometryCollection
     * @param {Array<{Geometry}>} geometries an array of GeoJSON Geometries
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<GeometryCollection>} a geometrycollection feature
     * @example
     * var pt = {
     *     "type": "Point",
     *       "coordinates": [100, 0]
     *     };
     * var line = {
     *     "type": "LineString",
     *     "coordinates": [ [101, 0], [102, 1] ]
     *   };
     * var collection = turf.geometrycollection([[0,0],[10,10]]);
     *
     * //=collection
     */
    module.exports.geometryCollection = function (geometries, properties) {
        return feature({
            type: 'GeometryCollection',
            geometries: geometries
        }, properties);
    };

    var factors = {
        miles: 3960,
        nauticalmiles: 3441.145,
        degrees: 57.2957795,
        radians: 1,
        inches: 250905600,
        yards: 6969600,
        meters: 6373000,
        metres: 6373000,
        kilometers: 6373,
        kilometres: 6373
    };

    /*
     * Convert a distance measurement from radians to a more friendly unit.
     *
     * @name radiansToDistance
     * @param {number} distance in radians across the sphere
     * @param {string=kilometers} units: one of miles, nauticalmiles, degrees, radians,
     * inches, yards, metres, meters, kilometres, kilometers.
     * @returns {number} distance
     */
    module.exports.radiansToDistance = function (radians, units) {
        var factor = factors[units || 'kilometers'];
        if (factor === undefined) {
            throw new Error('Invalid unit');
        }
        return radians * factor;
    };

    /*
     * Convert a distance measurement from a real-world unit into radians
     *
     * @name distanceToRadians
     * @param {number} distance in real units
     * @param {string=kilometers} units: one of miles, nauticalmiles, degrees, radians,
     * inches, yards, metres, meters, kilometres, kilometers.
     * @returns {number} radians
     */
    module.exports.distanceToRadians = function (distance, units) {
        var factor = factors[units || 'kilometers'];
        if (factor === undefined) {
            throw new Error('Invalid unit');
        }
        return distance / factor;
    };

    /*
     * Convert a distance measurement from a real-world unit into degrees
     *
     * @name distanceToRadians
     * @param {number} distance in real units
     * @param {string=kilometers} units: one of miles, nauticalmiles, degrees, radians,
     * inches, yards, metres, meters, kilometres, kilometers.
     * @returns {number} degrees
     */
    module.exports.distanceToDegrees = function (distance, units) {
        var factor = factors[units || 'kilometers'];
        if (factor === undefined) {
            throw new Error('Invalid unit');
        }
        return distance / factor * 57.2958;
    };
    return module.exports;
});
$__System.registerDynamic('e', ['12', '6'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    //http://en.wikipedia.org/wiki/Haversine_formula
    //http://www.movable-type.co.uk/scripts/latlong.html
    var getCoord = $__require('12').getCoord;
    var helpers = $__require('6');
    var point = helpers.point;
    var distanceToRadians = helpers.distanceToRadians;

    /**
     * Takes a {@link Point} and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees. This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
     *
     * @name destination
     * @param {Feature<Point>} from starting point
     * @param {number} distance distance from the starting point
     * @param {number} bearing ranging from -180 to 180
     * @param {String} [units=kilometers] miles, kilometers, degrees, or radians
     * @returns {Feature<Point>} destination point
     * @example
     * var point = {
     *   "type": "Feature",
     *   "properties": {
     *     "marker-color": "#0f0"
     *   },
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-75.343, 39.984]
     *   }
     * };
     * var distance = 50;
     * var bearing = 90;
     * var units = 'miles';
     *
     * var destination = turf.destination(point, distance, bearing, units);
     * destination.properties['marker-color'] = '#f00';
     *
     * var result = {
     *   "type": "FeatureCollection",
     *   "features": [point, destination]
     * };
     *
     * //=result
     */
    module.exports = function (from, distance, bearing, units) {
        var degrees2radians = Math.PI / 180;
        var radians2degrees = 180 / Math.PI;
        var coordinates1 = getCoord(from);
        var longitude1 = degrees2radians * coordinates1[0];
        var latitude1 = degrees2radians * coordinates1[1];
        var bearing_rad = degrees2radians * bearing;

        var radians = distanceToRadians(distance, units);

        var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) + Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearing_rad));
        var longitude2 = longitude1 + Math.atan2(Math.sin(bearing_rad) * Math.sin(radians) * Math.cos(latitude1), Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));

        return point([radians2degrees * longitude2, radians2degrees * latitude2]);
    };
    return module.exports;
});
$__System.registerDynamic('13', ['c', '6', 'd', 'e'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var distance = $__require('c');
    var point = $__require('6').point;
    var bearing = $__require('d');
    var destination = $__require('e');

    /**
     * Takes a {@link Point} and a {@link LineString} and calculates the closest Point on the LineString.
     *
     * @name pointOnLine
     * @param {Feature<LineString>} line line to snap to
     * @param {Feature<Point>} point point to snap from
     * @return {Feature<Point>} closest point on the `line` to `point`
     * @example
     * var line = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "LineString",
     *     "coordinates": [
     *       [-77.031669, 38.878605],
     *       [-77.029609, 38.881946],
     *       [-77.020339, 38.884084],
     *       [-77.025661, 38.885821],
     *       [-77.021884, 38.889563],
     *       [-77.019824, 38.892368]
     *     ]
     *   }
     * };
     * var pt = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-77.037076, 38.884017]
     *   }
     * };
     *
     * var snapped = turf.pointOnLine(line, pt);
     * snapped.properties['marker-color'] = '#00f'
     *
     * var result = {
     *   "type": "FeatureCollection",
     *   "features": [line, pt, snapped]
     * };
     *
     * //=result
     */

    module.exports = function (line, pt) {
        var coords;
        if (line.type === 'Feature') {
            coords = line.geometry.coordinates;
        } else if (line.type === 'LineString') {
            coords = line.coordinates;
        } else {
            throw new Error('input must be a LineString Feature or Geometry');
        }

        return pointOnLine(pt, coords);
    };

    function pointOnLine(pt, coords) {
        var units = 'miles';
        var closestPt = point([Infinity, Infinity], {
            dist: Infinity
        });
        for (var i = 0; i < coords.length - 1; i++) {
            var start = point(coords[i]);
            var stop = point(coords[i + 1]);
            //start
            start.properties.dist = distance(pt, start, units);
            //stop
            stop.properties.dist = distance(pt, stop, units);
            //perpendicular
            var heightDistance = Math.max(start.properties.dist, stop.properties.dist);
            var direction = bearing(start, stop);
            var perpendicularPt1 = destination(pt, heightDistance, direction + 90, units);
            var perpendicularPt2 = destination(pt, heightDistance, direction - 90, units);
            var intersect = lineIntersects(perpendicularPt1.geometry.coordinates[0], perpendicularPt1.geometry.coordinates[1], perpendicularPt2.geometry.coordinates[0], perpendicularPt2.geometry.coordinates[1], start.geometry.coordinates[0], start.geometry.coordinates[1], stop.geometry.coordinates[0], stop.geometry.coordinates[1]);
            var intersectPt;
            if (intersect) {
                intersectPt = point(intersect);
                intersectPt.properties.dist = distance(pt, intersectPt, units);
            }

            if (start.properties.dist < closestPt.properties.dist) {
                closestPt = start;
                closestPt.properties.index = i;
            }
            if (stop.properties.dist < closestPt.properties.dist) {
                closestPt = stop;
                closestPt.properties.index = i;
            }
            if (intersectPt && intersectPt.properties.dist < closestPt.properties.dist) {
                closestPt = intersectPt;
                closestPt.properties.index = i;
            }
        }

        return closestPt;
    }

    // modified from http://jsfiddle.net/justin_c_rounds/Gd2S2/light/
    function lineIntersects(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
        // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
        var denominator, a, b, numerator1, numerator2;
        var result = {
            x: null,
            y: null,
            onLine1: false,
            onLine2: false
        };
        denominator = (line2EndY - line2StartY) * (line1EndX - line1StartX) - (line2EndX - line2StartX) * (line1EndY - line1StartY);
        if (denominator === 0) {
            if (result.x !== null && result.y !== null) {
                return result;
            } else {
                return false;
            }
        }
        a = line1StartY - line2StartY;
        b = line1StartX - line2StartX;
        numerator1 = (line2EndX - line2StartX) * a - (line2EndY - line2StartY) * b;
        numerator2 = (line1EndX - line1StartX) * a - (line1EndY - line1StartY) * b;
        a = numerator1 / denominator;
        b = numerator2 / denominator;

        // if we cast these lines infinitely in both directions, they intersect here:
        result.x = line1StartX + a * (line1EndX - line1StartX);
        result.y = line1StartY + a * (line1EndY - line1StartY);

        // if line1 is a segment and line2 is infinite, they intersect if:
        if (a > 0 && a < 1) {
            result.onLine1 = true;
        }
        // if line2 is a segment and line1 is infinite, they intersect if:
        if (b > 0 && b < 1) {
            result.onLine2 = true;
        }
        // if line1 and line2 are segments, they intersect if both of the above are true
        if (result.onLine1 && result.onLine2) {
            return [result.x, result.y];
        } else {
            return false;
        }
    }
    return module.exports;
});
$__System.registerDynamic('14', ['6', '13'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var linestring = $__require('6').lineString;
    var pointOnLine = $__require('13');

    /**
     * Takes a {@link LineString|line}, a start {@link Point}, and a stop point
     * and returns a subsection of the line in-between those points.
     * The start & stop points don't need to fall exactly on the line.
     *
     * This can be useful for extracting only the part of a route between waypoints.
     *
     * @name lineSlice
     * @param {Feature<Point>} point1 starting point
     * @param {Feature<Point>} point2 stopping point
     * @param {Feature<LineString>|LineString} line line to slice
     * @return {Feature<LineString>} sliced line
     * @example
     * var line = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "LineString",
     *     "coordinates": [
     *       [-77.031669, 38.878605],
     *       [-77.029609, 38.881946],
     *       [-77.020339, 38.884084],
     *       [-77.025661, 38.885821],
     *       [-77.021884, 38.889563],
     *       [-77.019824, 38.892368]
     *     ]
     *   }
     * };
     * var start = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-77.029609, 38.881946]
     *   }
     * };
     * var stop = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [-77.021884, 38.889563]
     *   }
     * };
     *
     * var sliced = turf.lineSlice(start, stop, line);
     *
     * //=line
     *
     * //=sliced
     */

    module.exports = function lineSlice(startPt, stopPt, line) {
        var coords;
        if (line.type === 'Feature') {
            coords = line.geometry.coordinates;
        } else if (line.type === 'LineString') {
            coords = line.coordinates;
        } else {
            throw new Error('input must be a LineString Feature or Geometry');
        }

        var startVertex = pointOnLine(line, startPt);
        var stopVertex = pointOnLine(line, stopPt);
        var ends;
        if (startVertex.properties.index <= stopVertex.properties.index) {
            ends = [startVertex, stopVertex];
        } else {
            ends = [stopVertex, startVertex];
        }
        var clipLine = linestring([ends[0].geometry.coordinates], {});
        for (var i = ends[0].properties.index + 1; i < ends[1].properties.index + 1; i++) {
            clipLine.geometry.coordinates.push(coords[i]);
        }
        clipLine.geometry.coordinates.push(ends[1].geometry.coordinates);
        return clipLine;
    };
    return module.exports;
});
$__System.registerDynamic('15', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Takes coordinates and properties (optional) and returns a new {@link Point} feature.
   *
   * @module turf/point
   * @category helper
   * @param {number} longitude position west to east in decimal degrees
   * @param {number} latitude position south to north in decimal degrees
   * @param {Object} properties an Object that is used as the {@link Feature}'s
   * properties
   * @return {Point} a Point feature
   * @example
   * var pt1 = turf.point([-75.343, 39.984]);
   *
   * //=pt1
   */
  var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
  module.exports = function (coordinates, properties) {
    if (!isArray(coordinates)) throw new Error('Coordinates must be an array');
    if (coordinates.length < 2) throw new Error('Coordinates must be at least 2 numbers long');
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: coordinates
      },
      properties: properties || {}
    };
  };
  return module.exports;
});
$__System.registerDynamic("16", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}
   *
   * @module turf/featurecollection
   * @category helper
   * @param {Feature} features input Features
   * @returns {FeatureCollection} a FeatureCollection of input features
   * @example
   * var features = [
   *  turf.point([-75.343, 39.984], {name: 'Location A'}),
   *  turf.point([-75.833, 39.284], {name: 'Location B'}),
   *  turf.point([-75.534, 39.123], {name: 'Location C'})
   * ];
   *
   * var fc = turf.featurecollection(features);
   *
   * //=fc
   */
  module.exports = function (features) {
    return {
      type: "FeatureCollection",
      features: features
    };
  };
  return module.exports;
});
$__System.register('1', ['2', '3', '5', '7', '10', '11', '14', '15', '16', '17', 'a', 'b'], function (_export, _context) {
    "use strict";

    var gmaps, turf_linestring, turf_polygon, turf_centroid, turf_union, turf_simplify, turf_along, turf_buffer, turf_inside, turf_line_slice, turf_point, turf_featurecollection, beginsWith, endsWith, Wkt, arrayProto, splice, freeGlobal, freeSelf, root, Symbol, objectProto$1, hasOwnProperty$1, nativeObjectToString, symToStringTag$1, objectProto$2, nativeObjectToString$1, nullTag, undefinedTag, symToStringTag, asyncTag, funcTag, genTag, proxyTag, coreJsData, maskSrcKey, funcProto$1, funcToString$1, reRegExpChar, reIsHostCtor, funcProto, objectProto, funcToString, hasOwnProperty, reIsNative, Map, nativeCreate, HASH_UNDEFINED, objectProto$3, hasOwnProperty$2, objectProto$4, hasOwnProperty$3, HASH_UNDEFINED$1, LARGE_ARRAY_SIZE, HASH_UNDEFINED$2, UNORDERED_COMPARE_FLAG$1, PARTIAL_COMPARE_FLAG$2, Uint8Array, UNORDERED_COMPARE_FLAG$2, PARTIAL_COMPARE_FLAG$3, boolTag, dateTag, errorTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf, argsTag$1, objectProto$8, hasOwnProperty$7, propertyIsEnumerable, isArguments, isArray, freeExports, freeModule, moduleExports, Buffer, nativeIsBuffer, isBuffer, MAX_SAFE_INTEGER, reIsUint, MAX_SAFE_INTEGER$1, argsTag$2, arrayTag$1, boolTag$1, dateTag$1, errorTag$1, funcTag$1, mapTag$1, numberTag$1, objectTag$1, regexpTag$1, setTag$1, stringTag$1, weakMapTag, arrayBufferTag$1, dataViewTag$1, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags, freeExports$1, freeModule$1, moduleExports$1, freeProcess, nodeUtil, nodeIsTypedArray, isTypedArray, objectProto$7, hasOwnProperty$6, objectProto$10, nativeKeys, objectProto$9, hasOwnProperty$8, PARTIAL_COMPARE_FLAG$4, objectProto$6, hasOwnProperty$5, DataView, Promise, Set, WeakMap, mapTag$2, objectTag$2, promiseTag, setTag$2, weakMapTag$1, dataViewTag$2, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, getTag$1, PARTIAL_COMPARE_FLAG$1, argsTag, arrayTag, objectTag, objectProto$5, hasOwnProperty$4, UNORDERED_COMPARE_FLAG, PARTIAL_COMPARE_FLAG, FUNC_ERROR_TEXT, MAX_MEMOIZE_SIZE, symbolTag$1, INFINITY, symbolProto$1, symbolToString, reLeadingDot, rePropName, reEscapeChar, stringToPath, reIsDeepProp, reIsPlainProp, INFINITY$1, UNORDERED_COMPARE_FLAG$3, PARTIAL_COMPARE_FLAG$5, baseFor, baseEach, stringTag$2, asciiSize, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange, rsZWJ, reHasUnicode, rsAstralRange$1, rsComboMarksRange$1, rsComboSymbolsRange$1, rsVarRange$1, rsAstral, rsCombo, rsFitz, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsZWJ$1, reOptMod, rsOptVar, rsOptJoin, rsSeq, rsSymbol, reUnicode, mapTag$3, setTag$3, debug$1, warn, polygonToFeaturePolygon, arrayToFeaturePoints, centroid, verticesInPolygon, defaults, getColor, getColor1, parseHalf, darken, parseHex, parseHSL, parseRGB, rgbToHSL, hslToRGB, toDecColor, createTextMarker, createTransparentMarkerIcon, getHexColor, ButtonFactory$1, ig_turfhelper;


    function Wicket() {
        return new Wkt.Wkt();
    }

    function WKT2Object(WKT) {
        var wkt = new Wkt.Wkt();
        try {
            wkt.read(WKT);
        } catch (e) {
            console.zlog('Imposible leer geometría', WKT);
            return false;
        }
        try {
            var obj = wkt.toObject({
                reverseInnerPolygons: true
            }); // Make an object
            obj.wkt = wkt;
            return obj;
        } catch (e) {
            console.warn('Imposible exportar geometría', WKT);
            return false;
        }
    }

    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);

        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
        return value === other || value !== value && other !== other;
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
            if (eq(array[length][0], key)) {
                return length;
            }
        }
        return -1;
    }

    /** Used for built-in method references. */


    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);

        if (index < 0) {
            return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
            data.pop();
        } else {
            splice.call(data, index, 1);
        }
        --this.size;
        return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);

        return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
        var data = this.__data__,
            index = assocIndexOf(data, key);

        if (index < 0) {
            ++this.size;
            data.push([key, value]);
        } else {
            data[index][1] = value;
        }
        return this;
    }

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add methods to `ListCache`.


    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
        var data = this.__data__,
            result = data['delete'](key);

        this.size = data.size;
        return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
        return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
        return this.__data__.has(key);
    }

    /** Detect free variable `global` from Node.js. */


    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
        var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
            tag = value[symToStringTag$1];

        try {
            value[symToStringTag$1] = undefined;
            var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);
        if (unmasked) {
            if (isOwn) {
                value[symToStringTag$1] = tag;
            } else {
                delete value[symToStringTag$1];
            }
        }
        return result;
    }

    /** Used for built-in method references. */


    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
        return nativeObjectToString$1.call(value);
    }

    /** `Object#toString` result references. */


    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
        if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
        }
        value = Object(value);
        return symToStringTag && symToStringTag in value ? getRawTag(value) : objectToString(value);
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }

    /** `Object#toString` result references. */


    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
        if (!isObject(value)) {
            return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /** Used to detect overreaching core-js shims. */


    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
    }

    /** Used for built-in method references. */


    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
        if (func != null) {
            try {
                return funcToString$1.call(func);
            } catch (e) {}
            try {
                return func + '';
            } catch (e) {}
        }
        return '';
    }

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */


    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
            return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
    }

    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
        return object == null ? undefined : object[key];
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
    }

    /* Built-in method references that are verified to be native. */


    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    }

    /** Used to stand-in for `undefined` hash values. */


    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
    }

    /** Used for built-in method references. */


    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
    }

    /** Used to stand-in for `undefined` hash values. */


    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
        return this;
    }

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add methods to `Hash`.


    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
        };
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
        var type = typeof value;
        return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
        return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
        return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
        var data = getMapData(this, key),
            size = data.size;

        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
    }

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add methods to `MapCache`.


    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
            }
            data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
    }

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
    }

    // Add methods to `Stack`.


    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED$2);
        return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
        return this.__data__.has(value);
    }

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
        var index = -1,
            length = values == null ? 0 : values.length;

        this.__data__ = new MapCache();
        while (++index < length) {
            this.add(values[index]);
        }
    }

    // Add methods to `SetCache`.


    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;

        while (++index < length) {
            if (predicate(array[index], index, array)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
        return cache.has(key);
    }

    /** Used to compose bitmasks for comparison styles. */


    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG$2,
            arrLength = array.length,
            othLength = other.length;

        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(array);
        if (stacked && stack.get(other)) {
            return stacked == other;
        }
        var index = -1,
            result = true,
            seen = bitmask & UNORDERED_COMPARE_FLAG$1 ? new SetCache() : undefined;

        stack.set(array, other);
        stack.set(other, array);

        // Ignore non-index properties.
        while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];

            if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
                if (compared) {
                    continue;
                }
                result = false;
                break;
            }
            // Recursively compare arrays (susceptible to call stack limits).
            if (seen) {
                if (!arraySome(other, function (othValue, othIndex) {
                    if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                        return seen.push(othIndex);
                    }
                })) {
                    result = false;
                    break;
                }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                result = false;
                break;
            }
        }
        stack['delete'](array);
        stack['delete'](other);
        return result;
    }

    /** Built-in value references. */


    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
        var index = -1,
            result = Array(map.size);

        map.forEach(function (value, key) {
            result[++index] = [key, value];
        });
        return result;
    }

    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
        var index = -1,
            result = Array(set.size);

        set.forEach(function (value) {
            result[++index] = value;
        });
        return result;
    }

    /** Used to compose bitmasks for comparison styles. */


    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
        switch (tag) {
            case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                    return false;
                }
                object = object.buffer;
                other = other.buffer;

            case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                    return false;
                }
                return true;

            case boolTag:
            case dateTag:
            case numberTag:
                // Coerce booleans to `1` or `0` and dates to milliseconds.
                // Invalid dates are coerced to `NaN`.
                return eq(+object, +other);

            case errorTag:
                return object.name == other.name && object.message == other.message;

            case regexpTag:
            case stringTag:
                // Coerce regexes to strings and treat strings, primitives and objects,
                // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                // for more details.
                return object == other + '';

            case mapTag:
                var convert = mapToArray;

            case setTag:
                var isPartial = bitmask & PARTIAL_COMPARE_FLAG$3;
                convert || (convert = setToArray);

                if (object.size != other.size && !isPartial) {
                    return false;
                }
                // Assume cyclic values are equal.
                var stacked = stack.get(object);
                if (stacked) {
                    return stacked == other;
                }
                bitmask |= UNORDERED_COMPARE_FLAG$2;

                // Recursively compare objects (susceptible to call stack limits).
                stack.set(object, other);
                var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
                stack['delete'](object);
                return result;

            case symbolTag:
                if (symbolValueOf) {
                    return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
        }
        return false;
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);

        while (++index < n) {
            result[index] = iteratee(index);
        }
        return result;
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
        return value != null && typeof value == 'object';
    }

    /** `Object#toString` result references. */


    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag$1;
    }

    /** Used for built-in method references. */


    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
        return false;
    }

    /** Detect free variable `exports`. */


    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }

    /** Used as references for various `Number` constants. */


    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
    }

    /** `Object#toString` result references. */


    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
        return function (value) {
            return func(value);
        };
    }

    /** Detect free variable `exports`. */


    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;

        for (var key in value) {
            if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (
            // Safari 9 has enumerable `arguments.length` in strict mode.
            key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == 'offset' || key == 'parent') ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
            // Skip index properties.
            isIndex(key, length)))) {
                result.push(key);
            }
        }
        return result;
    }

    /** Used for built-in method references. */


    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$10;

        return value === proto;
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
        return function (arg) {
            return func(transform(arg));
        };
    }

    /* Built-in method references for those with the same name as other `lodash` methods. */


    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
        if (!isPrototype(object)) {
            return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
            if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
                result.push(key);
            }
        }
        return result;
    }

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /** Used to compose bitmasks for comparison styles. */


    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG$4,
            objProps = keys(object),
            objLength = objProps.length,
            othProps = keys(other),
            othLength = othProps.length;

        if (objLength != othLength && !isPartial) {
            return false;
        }
        var index = objLength;
        while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty$5.call(other, key))) {
                return false;
            }
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked && stack.get(other)) {
            return stacked == other;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);

        var skipCtor = isPartial;
        while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];

            if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            // Recursively compare objects (susceptible to call stack limits).
            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
                result = false;
                break;
            }
            skipCtor || (skipCtor = key == 'constructor');
        }
        if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;

            // Non `Object` object instances with different constructors are not equal.
            if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                result = false;
            }
        }
        stack['delete'](object);
        stack['delete'](other);
        return result;
    }

    /* Built-in method references that are verified to be native. */


    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = arrayTag,
            othTag = arrayTag;

        if (!objIsArr) {
            objTag = getTag$1(object);
            objTag = objTag == argsTag ? objectTag : objTag;
        }
        if (!othIsArr) {
            othTag = getTag$1(other);
            othTag = othTag == argsTag ? objectTag : othTag;
        }
        var objIsObj = objTag == objectTag,
            othIsObj = othTag == objectTag,
            isSameTag = objTag == othTag;

        if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
                return false;
            }
            objIsArr = true;
            objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
        }
        if (!(bitmask & PARTIAL_COMPARE_FLAG$1)) {
            var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty$4.call(other, '__wrapped__');

            if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object,
                    othUnwrapped = othIsWrapped ? other.value() : other;

                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
            }
        }
        if (!isSameTag) {
            return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {boolean} [bitmask] The bitmask of comparison flags.
     *  The bitmask may be composed of the following flags:
     *     1 - Unordered comparison
     *     2 - Partial comparison
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, bitmask, stack) {
        if (value === other) {
            return true;
        }
        if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }

    /** Used to compose bitmasks for comparison styles. */


    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length,
            length = index,
            noCustomizer = !customizer;

        if (object == null) {
            return !length;
        }
        object = Object(object);
        while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
            }
        }
        while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];

            if (noCustomizer && data[2]) {
                if (objValue === undefined && !(key in object)) {
                    return false;
                }
            } else {
                var stack = new Stack();
                if (customizer) {
                    var result = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
        return value === value && !isObject(value);
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
        var result = keys(object),
            length = result.length;

        while (length--) {
            var key = result[length],
                value = object[key];

            result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
        return function (object) {
            if (object == null) {
                return false;
            }
            return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
        };
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function (object) {
            return object === source || baseIsMatch(object, source, matchData);
        };
    }

    /** Error message constants. */


    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
        if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function memoized() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
                return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
    }

    // Expose `MapCache`.


    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
        var result = memoize(func, function (key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
            }
            return key;
        });

        var cache = result.cache;
        return result;
    }

    /** `Object#toString` result references. */


    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
        return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
    }

    /** Used as references for various `Number` constants. */


    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
            return value;
        }
        if (isArray(value)) {
            // Recursively convert values (susceptible to call stack limits).
            return arrayMap(value, baseToString) + '';
        }
        if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
        }
        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
        return value == null ? '' : baseToString(value);
    }

    /** Used to match property names within property paths. */


    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value) {
        return isArray(value) ? value : stringToPath(value);
    }

    /** Used to match property names within property paths. */


    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
        if (isArray(value)) {
            return false;
        }
        var type = typeof value;
        if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }

    /** Used as references for various `Number` constants. */


    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
        if (typeof value == 'string' || isSymbol(value)) {
            return value;
        }
        var result = value + '';
        return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
        path = isKey(path, object) ? [path] : castPath(path);

        var index = 0,
            length = path.length;

        while (object != null && index < length) {
            object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined;
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, path);
        return result === undefined ? defaultValue : result;
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
        return object != null && key in Object(object);
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
        path = isKey(path, object) ? [path] : castPath(path);

        var index = -1,
            length = path.length,
            result = false;

        while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
                break;
            }
            object = object[key];
        }
        if (result || ++index != length) {
            return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
    }

    /** Used to compose bitmasks for comparison styles. */


    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
        }
        return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG$3 | PARTIAL_COMPARE_FLAG$5);
        };
    }

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
        return value;
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
        return function (object) {
            return object == null ? undefined : object[key];
        };
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
        return function (object) {
            return baseGet(object, path);
        };
    }

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
        // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
        // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
        if (typeof value == 'function') {
            return value;
        }
        if (value == null) {
            return identity;
        }
        if (typeof value == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
        return function (object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;

            while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) {
                    break;
                }
            }
            return object;
        };
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */


    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
        return function (collection, iteratee) {
            if (collection == null) {
                return collection;
            }
            if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);

            while (fromRight ? index-- : ++index < length) {
                if (iteratee(iterable[index], index, iterable) === false) {
                    break;
                }
            }
            return collection;
        };
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */


    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
        var index = -1,
            result = isArrayLike(collection) ? Array(collection.length) : [];

        baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection);
        });
        return result;
    }

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, baseIteratee(iteratee, 3));
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length;

        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
        return typeof value == 'function' ? value : identity;
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
    }

    function toLatLng$1(point) {
        if (point.lat) {
            return point;
        } else {
            return {
                lat: point[1],
                lng: point[0]
            };
        }
    }

    /**
     * Transforma un array de LatLng en un array de coordenadas [lng,lat]
     * @param {Array.<Array.<Number>>} arrayLatLng [description]
     * @return {Array.<external:google.maps.LatLng>} array de posiciones {@link external:google.maps.LatLng}
     */
    function toLatLngs(coordinates) {
        return map(coordinates, toLatLng$1);
    }

    function toCoord(LatLng) {
        if (gmaps && gmaps.LatLng && LatLng instanceof gmaps.LatLng) {
            return [LatLng.lng(), LatLng.lat()];
        } else if (LatLng.lat && LatLng.lng) {
            return [LatLng.lng, LatLng.lat];
        } else {
            return LatLng;
        }
    }
    /**
     * Transforma un array de LatLng en un array de coordenadas [lng,lat]
     * @param {Array.<external:google.maps.LatLng>} arrayLatLng Array de posiciones {@link external:google.maps.LatLng}
     * @return {Array.<Array.<Number>>} [description]
     */
    function toCoords(arrayLatLng, closeRing) {
        var ring = map(arrayLatLng, toCoord);
        if (closeRing === true) {
            ring.push(ring[0]);
        }
        return ring;
    }

    function latlngToPoint(latLng) {
        var coords = toCoord(latLng),
            feature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: coords
            }
        };

        return feature;
    }

    /** `Object#toString` result references. */


    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
        return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag$2;
    }

    /**
     * Gets the size of an ASCII `string`.
     *
     * @private
     * @param {string} string The string inspect.
     * @returns {number} Returns the string size.
     */


    /**
     * Checks if `string` contains Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a symbol is found, else `false`.
     */
    function hasUnicode(string) {
        return reHasUnicode.test(string);
    }

    /** Used to compose unicode character classes. */


    /**
     * Gets the size of a Unicode `string`.
     *
     * @private
     * @param {string} string The string inspect.
     * @returns {number} Returns the string size.
     */
    function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
            ++result;
        }
        return result;
    }

    /**
     * Gets the number of symbols in `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the string size.
     */
    function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }

    /** `Object#toString` result references. */


    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
        if (collection == null) {
            return 0;
        }
        if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag$1(collection);
        if (tag == mapTag$3 || tag == setTag$3) {
            return collection.size;
        }
        return baseKeys(collection).length;
    }

    /**
     * The base implementation of `_.sum` and `_.sumBy` without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function baseSum(array, iteratee) {
        var result,
            index = -1,
            length = array.length;

        while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined) {
                result = result === undefined ? current : result + current;
            }
        }
        return result;
    }

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array == null ? 0 : array.length;

        if (initAccum && length) {
            accumulator = array[++index];
        }
        while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
    }

    /**
     * The base implementation of `_.reduce` and `_.reduceRight`, without support
     * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initAccum Specify using the first or last element of
     *  `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function (value, index, collection) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
    }

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce,
            initAccum = arguments.length < 3;

        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * Transforma un array de geometrías WKT en un FeatureCollection
     * @param  {Array<String>} wktArray Array de string WKT
     * @return {Object}          FeatureCollection
     */
    function wktArrayToFeatureCollection(wktArray) {
        var FeatureCollection = {
            "type": "FeatureCollection"
        };

        FeatureCollection.features = map(wktArray, function (WKTString) {
            var geoJsonPolygon = Wicket().read(WKTString).toJson();
            return {
                type: "Feature",
                geometry: geoJsonPolygon
            };
        });
        return FeatureCollection;
    }

    /**
     * representGeometry: Obtiene distintas representaciones de acuerdo con lo obtenido en globalvars.globalmap.multipolygon
     * @param  {InstaMap}   mapInstance instancia de {@link InstaMap}
     * @param  {Function} callback    [description]
     * @return {object}               [description]
     */
    function representGeometry(mapInstance, callback) {
        var resultado = {};
        /**
         * geometryMultipolygon: Obtiene las geometrias de los poligonos seleccionados
         * @return {array} Array de Geometria/s
         */
        var geometryMultipolygon = function geometryMultipolygon(map$$1) {
            // reads the multipolygon array (where we store objects on shift+click)
            var multipolygon = map$$1.multipolygon;
            var geometry = [];

            if (size(multipolygon) === 0) {
                if (map$$1.contextMenu.Polygons && map$$1.contextMenu.Polygons.jqMenu.data('geometry')) {
                    geometry.push(map$$1.contextMenu.Polygons.jqMenu.data('geometry'));
                }
            } else {
                forEach(multipolygon, function (obj) {
                    geometry.push(obj.geometry);
                });
            }
            return geometry;
        },
            WKTmerged,
            arraygeometry = geometryMultipolygon(mapInstance);

        if (arraygeometry.length === 0) {

            resultado = {
                arraygeometry: arraygeometry
            };
        } else if (arraygeometry.length === 1) {

            resultado = {
                arraygeometry: arraygeometry,
                wkt: arraygeometry[0]
            };
        } else {
            var FC = wktArrayToFeatureCollection(arraygeometry),
                geom_zero = FC.features.pop();

            var theUnion = reduce(FC.features, function (acumulado, feature, index) {
                acumulado = turf_union(acumulado, feature);
                return acumulado;
            }, geom_zero);

            WKTmerged = Wicket().fromJson(theUnion.geometry).toString();

            resultado = {
                arraygeometry: arraygeometry,
                wkt: WKTmerged
            };
        }

        if (callback) {
            callback(resultado);
        }

        return resultado;
    }

    /**
     * Convierte un polígono en un geojson Feature.<Polygon>
     * @param  {external:google.maps.Polygon} polygon un {@link external:google.maps.Polygon} a convertir
     * @return {Feature.<Polygon>} Feature resultante
     */


    /**
     * Simplifica una geometría usando Douglas Peucker
     * @param  {Feature.<Polygon|MultiPolygon>} geometry    polígono o multipolígono geoJson
     * @param  {number} tolerance   [description]
     * @param  {boolean} highQuality [description]
     * @return {object}             [description]
     */
    function simplifyGeometry(geometry, tolerance, highQuality) {
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

        debug$1('simplifyGeometry before', geometry, verticesInPolygon(geometry));
        var simplifiedFeature = turf_simplify(Feature, tolerance, highQuality);

        if (simplifiedFeature && simplifiedFeature.geometry) {
            //debug('Simplified Feature', Feature, 'simplifiedgeom', simplifiedgeom);
            return simplifiedFeature.geometry;
        } else {
            warn('Cannot simplify  Feature', Feature);
            return geometry;
        }
    }

    /**
     * Simplifica un conjunto de coordenadas
     * @param  {Array} coordArray [description]
     * @param  {Number} tolerance   [description]
     * @param  {Boolean} highQuality [description]
     * @return {Array}  Array de coordenadas [lng,lat]
     */
    function simplifyPointArray(coordArray, tolerance, highQuality) {
        tolerance = tolerance || 0.00001;
        highQuality = highQuality || false;
        var Feature = turf_linestring(toCoords(coordArray));

        var simplifiedgeom = turf_simplify(Feature, tolerance, highQuality);

        //debug('simplifyPointArray', 'geometry is', Feature.geometry, 'simplifiedgeom is', simplifiedgeom);

        return simplifiedgeom.geometry.coordinates;
    }

    /**
     * Simplifica un geoson Feature
     * @param  {Feature.<Polygon|MultiPolygon>} Feature     [description]
     * @param  {Number} tolerance   [description]
     * @param  {Boolean} highQuality [description]
     * @return {Feature}             [description]
     */
    function simplifyFeature(Feature, tolerance, highQuality) {
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
    }

    function along(arrayLatLng, distance) {

        if (arrayLatLng instanceof gmaps.Polyline) {
            arrayLatLng = arrayLatLng.getPath();
        }
        var arrayCoords = toCoords(arrayLatLng);
        var LineString = turf_linestring(arrayCoords);

        return turf_along(LineString, distance, 'kilometers');
    }

    /**
     * Superpone dos Feature.<Polygon>
     * @param  {Feature.<Polygon>} poly1 [description]
     * @param  {Feature.<Polygon>} poly2 [description]
     * @return {Feature.<Polygon>}       [description]
     */
    function union(poly1, poly2) {
        var FeatureUnion = turf_union(poly1, poly2);
        return FeatureUnion;
    }

    /**
     * Convierte un path de google LatLng en un Feature.<Polygon>
     * @param  {gmaps.Polygon|Array.<external:google.maps.LatLng>|Feature.Polygon} arrayLatLng [description]
     * @param  {Number} distance    [description]
     * @param  {String} units       [description]
     * @return {Feature.<Polygon>}             [description]
     */
    function createbuffer(arrayLatLng, distance, units, comment) {
        units = units || 'meters';
        var polygonFeature, ring;

        if (arrayLatLng.type === 'Feature') {
            polygonFeature = arrayLatLng;
            ring = polygonFeature.geometry.coordinates[0];
        } else {

            if (arrayLatLng instanceof gmaps.Polygon) {
                arrayLatLng = arrayLatLng.getPath().getArray();
            }
            ring = toCoords(arrayLatLng, true);
            polygonFeature = turf_polygon([ring]);
        }

        if (ring.length <= 3) {
            return polygonFeature;
        } else {
            try {
                var buffered = turf_buffer(polygonFeature, distance, units);

                //debug('buffer ' + comment, 'buffered', buffered);
                if (buffered.type === 'Feature') {
                    return buffered;
                }

                return buffered.features[0];
            } catch (e) {
                warn('Exception buffer', e);
                return polygonFeature;
            }
        }

        //debug('after buffer ' + comment, buffered, 'will return', buffered.features[0]);
    }

    /**
     * Filtra un array determinando si los puntos están dentro de un Polígono GeoJSON
     * @param {Array<SimpleFeature>} sourceArray array de SimpleFeature
     * @param {geojson.Polygon|geojson.Multipolygon} geojsonPolygon  [description]
     * @return {Array<SimpleFeature>} filteredArray el array de SimpleFeature que cae dentro de geojsonPolygon
     */
    function pointInPolygon(sourceArray, geojsonPolygon) {
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
            forEach(sourceArray, function (item) {

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
    }

    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];

        while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
                result[resIndex++] = value;
            }
        }
        return result;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
        var result = [];
        baseEach(collection, function (value, index, collection) {
            if (predicate(value, index, collection)) {
                result.push(value);
            }
        });
        return result;
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, baseIteratee(predicate, 3));
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
        var index = -1,
            length = array.length;

        while (++index < length) {
            var value = array[index],
                current = iteratee(value);

            if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current,
                    result = value;
            }
        }
        return result;
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
        return value > other;
    }

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
        return value < other;
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are **not** supported.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
        return baseIsEqual(value, other);
    }

    function diffCoords(coord1, coord2) {
        var vector = [Math.abs(coord1[0] - coord2[0]), Math.abs(coord1[1] - coord2[1])];
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    }

    /**
     * Determina si dos lineas se intersectan
     * @param  {Number} line1StartX [description]
     * @param  {Number} line1StartY [description]
     * @param  {Number} line1EndX   [description]
     * @param  {Number} line1EndY   [description]
     * @param  {Number} line2StartX [description]
     * @param  {Number} line2StartY [description]
     * @param  {Number} line2EndX   [description]
     * @param  {Number} line2EndY   [description]
     * @return {Array}             [description]
     */
    function lineIntersects(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
        // if the lines intersect, the result contains the x and y of the intersection
        // (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
        var denominator,
            a,
            b,
            numerator1,
            numerator2,
            result = {
            x: null,
            y: null,
            onLine1: false,
            onLine2: false
        };
        denominator = (line2EndY - line2StartY) * (line1EndX - line1StartX) - (line2EndX - line2StartX) * (line1EndY - line1StartY);
        if (denominator === 0) {
            if (result.x !== null && result.y !== null) {
                return result;
            } else {
                return false;
            }
        }
        a = line1StartY - line2StartY;
        b = line1StartX - line2StartX;
        numerator1 = (line2EndX - line2StartX) * a - (line2EndY - line2StartY) * b;
        numerator2 = (line1EndX - line1StartX) * a - (line1EndY - line1StartY) * b;
        a = numerator1 / denominator;
        b = numerator2 / denominator;

        // if we cast these lines infinitely in both directions, they intersect here:
        result.x = line1StartX + a * (line1EndX - line1StartX);
        result.y = line1StartY + a * (line1EndY - line1StartY);

        // if line1 is a segment and line2 is infinite, they intersect if:
        if (a >= 0 && a <= 1) {
            result.onLine1 = true;
        }
        // if line2 is a segment and line1 is infinite, they intersect if:
        if (b >= 0 && b <= 1) {
            result.onLine2 = true;
        }
        // if line1 and line2 are segments, they intersect if both of the above are true
        if (result.onLine1 && result.onLine2) {
            return [result.x, result.y];
        } else {
            return false;
        }
    }

    function traverseRings(ring1, ring2) {
        var results = {
            intersections: turf_featurecollection([]),
            fixed: null
        };
        var samering = false,
            consecutive = false;
        if (isEqual(ring1, ring2)) {
            samering = true;
        }
        for (var i = 0; i < ring1.length - 1; i++) {
            var startK = samering ? i : 0;
            for (var k = startK; k < ring2.length - 1; k++) {
                // don't check adjacent sides of a given ring, since of course they intersect in a vertex.
                if (ring1 === ring2 && (Math.abs(i - k) === 1 || Math.abs(i - k) === ring1.length - 2)) {
                    continue;
                }

                var intersection = lineIntersects(ring1[i][0], ring1[i][1], ring1[i + 1][0], ring1[i + 1][1], ring2[k][0], ring2[k][1], ring2[k + 1][0], ring2[k + 1][1]);

                // si son lineas consecutivas no quiero detectar el límite entre ambas
                if ((diffCoords(intersection, ring1[0]) < 0.000005 || diffCoords(intersection, ring1[ring1.length - 1]) < 0.000005) && (diffCoords(intersection, ring2[0]) < 0.000005 || diffCoords(intersection, ring2[ring2.length - 1]) < 0.000005)) {
                    continue;
                }
                if (intersection) {
                    //debug('intersection at',
                    // intersection,
                    //diffCoords(intersection, ring2[0]),
                    //diffCoords(intersection, ring1[ring1.length - 1]));
                    var FeatureIntersection = turf_point([intersection[0], intersection[1]]);
                    FeatureIntersection.properties = {
                        position1: i,
                        position2: k
                    };
                    results.intersections.features.push(FeatureIntersection);
                }
            }
        }
        return results;
    }

    /**
     * Encuentra los puntos en donde dos polilíneas se cruzan
     * @param  {Array.<external:google.maps.LatLng>} arrayLatLng1 array de posiciones {@link external:google.maps.LatLng}
     * @param  {Array.<external:google.maps.LatLng>} arrayLatLng2 array de posiciones {@link external:google.maps.LatLng}
     * @return {Array}             [description]
     */
    function trimPaths(arrayLatLng1, arrayLatLng2, debugflag) {

        var ring1 = toCoords(arrayLatLng1); // googleGeom1.geometry.coordinates;
        var ring2 = toCoords(arrayLatLng2); // googleGeom2.geometry.coordinates;

        var kinks = traverseRings(ring1, ring2);

        if (kinks.intersections.features.length > 0) {

            var minRing1 = min(kinks.intersections.features, function (kink) {
                return kink.properties.position1;
            });

            var firstIntersection = max(filter(kinks.intersections.features, function (kink) {
                return kink.properties.position1 === minRing1.properties.position1;
            }), function (kink) {
                return kink.properties.position2;
            });

            var intersectLatLng = toLatLng$1(firstIntersection.geometry.coordinates);

            var line1 = turf_linestring(ring1);
            var line2 = turf_linestring(ring2);
            var line1Start = turf_point(ring1[0]);
            var line2End = turf_point(ring2.slice(-1)[0]);
            var sliced1 = firstIntersection.properties.position1 === 0 ? line1 : turf_line_slice(line1Start, firstIntersection, line1);
            var sliced2 = firstIntersection.properties.position2 >= ring2.length - 1 ? line2 : turf_line_slice(firstIntersection, line2End, line2);
            return [toLatLngs(sliced1.geometry.coordinates), toLatLngs(sliced2.geometry.coordinates), intersectLatLng];
        }
        return [];
    }

    function drawFeature(Feature, strokeColor, numerateMarkers) {

        strokeColor = strokeColor || '#FF0000';
        if (Feature instanceof gmaps.Polygon) {
            Feature = polygonToFeaturePolygon(Feature);
        }
        if (numerateMarkers) {
            Feature.geometry.coordinates[0].forEach(function (punto, index) {

                var marker = new gmaps.Marker({
                    map: globalvars.globalmap,
                    position: toLatLng(punto),
                    icon: ButtonFactory.autoIcon({
                        label: 'v' + index,
                        color: strokeColor
                    })
                });
            });
        }
        var GPolygon = Wicket().fromJson(Feature).toObject();
        debug$1('GPolygon', GPolygon);
        if (isArray(GPolygon)) {
            var Polygon;
            forEach(GPolygon, function (iPolygon, index) {
                var hue = parseInt(360 * index / GPolygon.length, 10);
                strokeColor = "hsl(" + hue + ", 40%, 45%)";
                iPolygon.set('fillColor', 'transparent');
                iPolygon.set('strokeColor', strokeColor);
                iPolygon.setMap(globalvars.globalmap);
                Polygon = iPolygon;
            });
            return Polygon;
        } else {

            GPolygon.set('fillColor', strokeColor);
            GPolygon.set('strokeColor', strokeColor);
            GPolygon.setMap(globalvars.globalmap);
            return GPolygon;
        }
    }

    function compact(array) {
        var index = -1,
            length = array ? array.length : 0,
            resIndex = 0,
            result = [];

        while (++index < length) {
            var value = array[index];
            if (value) {
                result[resIndex++] = value;
            }
        }
        return result;
    }

    function parseColorString(somecolor, opacity) {
        var parsedcolor = {
            original: somecolor
        },
            hsl,
            rgb;

        opacity = opacity || 1;

        if (somecolor.indexOf('hsl') !== -1) {
            hsl = parseHSL(somecolor, opacity);
            rgb = hslToRGB(hsl.h, hsl.s, hsl.l, hsl.a);
        } else {
            if (somecolor.indexOf('rgb') !== -1) {
                rgb = parseRGB(somecolor, opacity);
            } else {
                rgb = parseHex(somecolor, opacity);
            }
            hsl = rgbToHSL(rgb.r, rgb.g, rgb.b, rgb.a);
        }

        parsedcolor.hsl = {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l,
            a: hsl.a
        };
        parsedcolor.rgb = {
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            a: rgb.a
        };

        parsedcolor.fillColor = rgb.fillColor;
        parsedcolor.strokeColor = rgb.strokeColor;
        parsedcolor.hex = ['#', rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)].join('');
        return parsedcolor;
    }

    /**
     * Encuentra los puntos en donde dos polilíneas se cruzan
     * @param  {Array.<external:google.maps.LatLng>} arrayLatLng1 array de posiciones {@link external:google.maps.LatLng}
     * @param  {Array.<external:google.maps.LatLng>} arrayLatLng2 array de posiciones {@link external:google.maps.LatLng}
     * @return {Array}             [description]
     */
    function cleanFeaturePolygon(FeaturePolygon, pass) {

        pass = pass || 0;

        var color = 'hsl(' + pass * 30 + ',50%,50%)';

        var kinks = traverseRings(FeaturePolygon.geometry.coordinates[0], FeaturePolygon.geometry.coordinates[0]);

        if (kinks.intersections.features[0]) {
            var thekink = kinks.intersections.features[0];

            var marker = new gmaps.Marker({
                map: globalvars.globalmap,
                position: toLatLng$1(thekink.geometry.coordinates),
                icon: ButtonFactory$1.autoIcon({
                    label: 'i' + pass,
                    color: color
                })

            });

            var kprops = thekink.properties;

            if (Math.abs(kprops.position2 - kprops.position2) >= 5) {
                FeaturePolygon.geometry.coordinates[0] = FeaturePolygon.geometry.coordinates[0].slice(kprops.position1, kprops.position2);
                debug('cleanFeaturePolygon ', kprops.position1, kprops.position2, FeaturePolygon.geometry.coordinates[0]);
            } else {
                var auxPath = FeaturePolygon.geometry.coordinates[0].slice(0, kprops.position1);
                auxPath.push(thekink.geometry.coordinates);
                debug('cleanFeaturePolygon ', kprops.position1, kprops.position2, auxPath, FeaturePolygon.geometry.coordinates[0]);
                FeaturePolygon.geometry.coordinates[0] = auxPath.concat(FeaturePolygon.geometry.coordinates[0].slice(kprops.position2));
                //FeaturePolygon.geometry.coordinates[0][kprops.position1 + 1] = thekink.geometry.coordinates;
                //FeaturePolygon.geometry.coordinates[0][kprops.position2] = thekink.geometry.coordinates;
            }

            //this.drawFeature(FeaturePolygon, color);
            pass = pass + 1;
            return cleanFeaturePolygon(FeaturePolygon, pass);
        } else {
            drawFeature(FeaturePolygon, color, true);
            return FeaturePolygon;
        }
    }

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

    return {
        setters: [function (_) {
            turf_linestring = _.default;
        }, function (_2) {
            turf_polygon = _2.default;
        }, function (_3) {
            turf_centroid = _3.default;
        }, function (_4) {
            turf_union = _4.default;
        }, function (_5) {
            turf_buffer = _5.default;
        }, function (_6) {
            turf_inside = _6.default;
        }, function (_7) {
            turf_line_slice = _7.default;
        }, function (_8) {
            turf_point = _8.default;
        }, function (_9) {
            turf_featurecollection = _9.default;
        }, function (_10) {
            gmaps = _10.default;
        }, function (_a) {
            turf_simplify = _a.default;
        }, function (_b) {
            turf_along = _b.default;
        }],
        execute: function () {
            _export('Wkt', Wkt = function Wkt(obj) {
                if (obj instanceof Wkt) return obj;
                if (!(this instanceof Wkt)) return new Wkt(obj);
                this._wrapped = obj;
            });

            /**
             * Returns true if the substring is found at the beginning of the string.
             * @param   str {String}    The String to search
             * @param   sub {String}    The substring of interest
             * @return      {Boolean}
             * @private
             */
            beginsWith = function beginsWith(str, sub) {
                return str.substring(0, sub.length) === sub;
            };

            /**
             * Returns true if the substring is found at the end of the string.
             * @param   str {String}    The String to search
             * @param   sub {String}    The substring of interest
             * @return      {Boolean}
             * @private
             */
            endsWith = function endsWith(str, sub) {
                return str.substring(str.length - sub.length) === sub;
            };

            /**
             * The default delimiter for separating components of atomic geometry (coordinates)
             * @ignore
             */
            Wkt.delimiter = ' ';

            /**
             * Determines whether or not the passed Object is an Array.
             * @param   obj {Object}    The Object in question
             * @return      {Boolean}
             * @member Wkt.isArray
             * @method
             */
            Wkt.isArray = function (obj) {
                return !!(obj && obj.constructor === Array);
            };

            /**
             * Removes given character String(s) from a String.
             * @param   str {String}    The String to search
             * @param   sub {String}    The String character(s) to trim
             * @return      {String}    The trimmed string
             * @member Wkt.trim
             * @method
             */
            Wkt.trim = function (str, sub) {
                sub = sub || ' '; // Defaults to trimming spaces
                // Trim beginning spaces
                while (beginsWith(str, sub)) {
                    str = str.substring(1);
                }
                // Trim ending spaces
                while (endsWith(str, sub)) {
                    str = str.substring(0, str.length - 1);
                }
                return str;
            };

            /**
             * An object for reading WKT strings and writing geographic features
             * @constructor this.Wkt.Wkt
             * @param   initializer {String}    An optional WKT string for immediate read
             * @property            {Array}     components      - Holder for atomic geometry objects (internal representation of geometric components)
             * @property            {String}    delimiter       - The default delimiter for separating components of atomic geometry (coordinates)
             * @property            {Object}    regExes         - Some regular expressions copied from OpenLayers.Format.WKT.js
             * @property            {String}    type            - The Well-Known Text name (e.g. 'point') of the geometry
             * @property            {Boolean}   wrapVerticies   - True to wrap vertices in MULTIPOINT geometries; If true: MULTIPOINT((30 10),(10 30),(40 40)); If false: MULTIPOINT(30 10,10 30,40 40)
             * @return              {this.Wkt.Wkt}
             * @memberof Wkt
             */
            Wkt.Wkt = function (initializer) {

                /**
                 * The default delimiter between X and Y coordinates.
                 * @ignore
                 */
                this.delimiter = Wkt.delimiter || ' ';

                /**
                 * Configuration parameter for controlling how Wicket seralizes
                 * MULTIPOINT strings. Examples; both are valid WKT:
                 * If true: MULTIPOINT((30 10),(10 30),(40 40))
                 * If false: MULTIPOINT(30 10,10 30,40 40)
                 * @ignore
                 */
                this.wrapVertices = true;

                /**
                 * Some regular expressions copied from OpenLayers.Format.WKT.js
                 * @ignore
                 */
                this.regExes = {
                    'typeStr': /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
                    'spaces': /\s+|\+/, // Matches the '+' or the empty space
                    'numeric': /-*\d+(\.*\d+)?/,
                    'comma': /\s*,\s*/,
                    'parenComma': /\)\s*,\s*\(/,
                    'coord': /-*\d+\.*\d+ -*\d+\.*\d+/, // e.g. "24 -14"
                    'doubleParenComma': /\)\s*\)\s*,\s*\(\s*\(/,
                    'trimParens': /^\s*\(?(.*?)\)?\s*$/,
                    'ogcTypes': /^(multi)?(point|line|polygon|box)?(string)?$/i, // Captures e.g. "Multi","Line","String"
                    'crudeJson': /^{.*"(type|coordinates|geometries|features)":.*}$/ // Attempts to recognize JSON strings
                };

                /**
                 * The internal representation of geometry--the "components" of geometry.
                 * @ignore
                 */
                this.components = undefined;

                // An initial WKT string may be provided
                if (initializer && typeof initializer === 'string') {
                    this.read(initializer);
                } else if (initializer && typeof initializer !== undefined) {
                    this.fromObject(initializer);
                }
            };

            /**
             * Returns true if the internal geometry is a collection of geometries.
             * @return  {Boolean}   Returns true when it is a collection
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.isCollection = function () {
                switch (this.type.slice(0, 5)) {
                    case 'multi':
                        // Trivial; any multi-geometry is a collection
                        return true;
                    case 'polyg':
                        // Polygons with holes are "collections" of rings
                        return true;
                    default:
                        // Any other geometry is not a collection
                        return false;
                }
            };

            /**
             * Compares two x,y coordinates for equality.
             * @param   a   {Object}    An object with x and y properties
             * @param   b   {Object}    An object with x and y properties
             * @return      {Boolean}
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.sameCoords = function (a, b) {
                return a.x === b.x && a.y === b.y;
            };

            /**
             * Sets internal geometry (components) from framework geometry (e.g.
             * Google Polygon objects or google.maps.Polygon).
             * @param   obj {Object}    The framework-dependent geometry representation
             * @return      {this.Wkt.Wkt}   The object itself
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.fromObject = function (obj) {
                var result;

                if (obj.hasOwnProperty('type') && obj.hasOwnProperty('coordinates')) {
                    result = this.fromJson(obj);
                } else {
                    result = this.deconstruct.call(this, obj);
                }

                this.components = result.components;
                this.isRectangle = result.isRectangle || false;
                this.type = result.type;
                return this;
            };

            /**
             * Creates external geometry objects based on a plug-in framework's
             * construction methods and available geometry classes.
             * @param   config  {Object}    An optional framework-dependent properties specification
             * @return          {Object}    The framework-dependent geometry representation
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.toObject = function (config) {
                var obj = this.construct[this.type].call(this, config);
                // Don't assign the "properties" property to an Array
                if (typeof obj === 'object' && !Wkt.isArray(obj)) {
                    obj.properties = this.properties;
                }
                return obj;
            };

            /**
             * Returns the WKT string representation; the same as the write() method.
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.toString = function (config) {
                return this.write();
            };

            /**
             * Parses a JSON representation as an Object.
             * @param	obj	{Object}	An Object with the GeoJSON schema
             * @return	{this.Wkt.Wkt}	The object itself
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.fromJson = function (obj) {
                var i, j, k, coords, iring, oring;

                this.type = obj.type.toLowerCase();
                this.components = [];
                if (obj.hasOwnProperty('geometry')) {
                    //Feature
                    this.fromJson(obj.geometry);
                    this.properties = obj.properties;
                    return this;
                }
                coords = obj.coordinates;

                if (!Wkt.isArray(coords[0])) {
                    // Point
                    this.components.push({
                        x: coords[0],
                        y: coords[1]
                    });
                } else {

                    for (i in coords) {
                        if (coords.hasOwnProperty(i)) {

                            if (!Wkt.isArray(coords[i][0])) {
                                // LineString

                                if (this.type === 'multipoint') {
                                    // MultiPoint
                                    this.components.push([{
                                        x: coords[i][0],
                                        y: coords[i][1]
                                    }]);
                                } else {
                                    this.components.push({
                                        x: coords[i][0],
                                        y: coords[i][1]
                                    });
                                }
                            } else {

                                oring = [];
                                for (j in coords[i]) {
                                    if (coords[i].hasOwnProperty(j)) {

                                        if (!Wkt.isArray(coords[i][j][0])) {
                                            oring.push({
                                                x: coords[i][j][0],
                                                y: coords[i][j][1]
                                            });
                                        } else {

                                            iring = [];
                                            for (k in coords[i][j]) {
                                                if (coords[i][j].hasOwnProperty(k)) {

                                                    iring.push({
                                                        x: coords[i][j][k][0],
                                                        y: coords[i][j][k][1]
                                                    });
                                                }
                                            }

                                            oring.push(iring);
                                        }
                                    }
                                }

                                this.components.push(oring);
                            }
                        }
                    }
                }

                return this;
            };

            /**
             * Creates a JSON representation, with the GeoJSON schema, of the geometry.
             * @return    {Object}    The corresponding GeoJSON representation
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.toJson = function () {
                var cs, json, i, j, k, ring, rings;

                cs = this.components;
                json = {
                    coordinates: [],
                    type: function () {
                        var i, type, s;

                        type = this.regExes.ogcTypes.exec(this.type).slice(1);
                        s = [];

                        for (i in type) {
                            if (type.hasOwnProperty(i)) {
                                if (type[i] !== undefined) {
                                    s.push(type[i].toLowerCase().slice(0, 1).toUpperCase() + type[i].toLowerCase().slice(1));
                                }
                            }
                        }

                        return s;
                    }.call(this).join('')
                };

                // Wkt BOX type gets a special bbox property in GeoJSON
                if (this.type.toLowerCase() === 'box') {
                    json.type = 'Polygon';
                    json.bbox = [];

                    for (i in cs) {
                        if (cs.hasOwnProperty(i)) {
                            json.bbox = json.bbox.concat([cs[i].x, cs[i].y]);
                        }
                    }

                    json.coordinates = [[[cs[0].x, cs[0].y], [cs[0].x, cs[1].y], [cs[1].x, cs[1].y], [cs[1].x, cs[0].y], [cs[0].x, cs[0].y]]];

                    return json;
                }

                // For the coordinates of most simple features
                for (i in cs) {
                    if (cs.hasOwnProperty(i)) {

                        // For those nested structures
                        if (Wkt.isArray(cs[i])) {
                            rings = [];

                            for (j in cs[i]) {
                                if (cs[i].hasOwnProperty(j)) {

                                    if (Wkt.isArray(cs[i][j])) {
                                        // MULTIPOLYGONS
                                        ring = [];

                                        for (k in cs[i][j]) {
                                            if (cs[i][j].hasOwnProperty(k)) {
                                                ring.push([cs[i][j][k].x, cs[i][j][k].y]);
                                            }
                                        }

                                        rings.push(ring);
                                    } else {
                                        // POLYGONS and MULTILINESTRINGS

                                        if (cs[i].length > 1) {
                                            rings.push([cs[i][j].x, cs[i][j].y]);
                                        } else {
                                            // MULTIPOINTS
                                            rings = rings.concat([cs[i][j].x, cs[i][j].y]);
                                        }
                                    }
                                }
                            }

                            json.coordinates.push(rings);
                        } else {
                            if (cs.length > 1) {
                                // For LINESTRING type
                                json.coordinates.push([cs[i].x, cs[i].y]);
                            } else {
                                // For POINT type
                                json.coordinates = json.coordinates.concat([cs[i].x, cs[i].y]);
                            }
                        }
                    }
                }

                return json;
            };

            /**
             * Absorbs the geometry of another this.Wkt.Wkt instance, merging it with its own,
             * creating a collection (MULTI-geometry) based on their types, which must agree.
             * For example, creates a MULTIPOLYGON from a POLYGON type merged with another
             * POLYGON type, or adds a POLYGON instance to a MULTIPOLYGON instance.
             * @param   wkt {String}    A Wkt.Wkt object
             * @return	{this.Wkt.Wkt}	The object itself
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.merge = function (wkt) {
                var prefix = this.type.slice(0, 5);

                if (this.type !== wkt.type) {
                    if (this.type.slice(5, this.type.length) !== wkt.type) {
                        throw TypeError('The input geometry types must agree or the calling this.Wkt.Wkt instance must be a multigeometry of the other');
                    }
                }

                switch (prefix) {

                    case 'point':
                        this.components = [this.components.concat(wkt.components)];
                        break;

                    case 'multi':
                        this.components = this.components.concat(wkt.type.slice(0, 5) === 'multi' ? wkt.components : [wkt.components]);
                        break;

                    default:
                        this.components = [this.components, wkt.components];
                        break;

                }

                if (prefix !== 'multi') {
                    this.type = 'multi' + this.type;
                }
                return this;
            };

            /**
             * Reads a WKT string, validating and incorporating it.
             * @param   str {String}    A WKT or GeoJSON string
             * @return	{this.Wkt.Wkt}	The object itself
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.read = function (str) {
                var matches;
                matches = this.regExes.typeStr.exec(str);
                if (matches) {
                    this.type = matches[1].toLowerCase();
                    this.base = matches[2];
                    if (this.ingest[this.type]) {
                        this.components = this.ingest[this.type].apply(this, [this.base]);
                    }
                } else {
                    if (this.regExes.crudeJson.test(str)) {
                        if (typeof JSON === 'object' && typeof JSON.parse === 'function') {
                            this.fromJson(JSON.parse(str));
                        } else {
                            console.log('JSON.parse() is not available; cannot parse GeoJSON strings');
                            throw {
                                name: 'JSONError',
                                message: 'JSON.parse() is not available; cannot parse GeoJSON strings'
                            };
                        }
                    } else {
                        console.log('Invalid WKT string provided to read()');
                        throw {
                            name: 'WKTError',
                            message: 'Invalid WKT string provided to read()'
                        };
                    }
                }

                return this;
            }; // eo readWkt

            /**
             * Writes a WKT string.
             * @param   components  {Array}     An Array of internal geometry objects
             * @return              {String}    The corresponding WKT representation
             * @memberof this.Wkt.Wkt
             * @method
             */
            Wkt.Wkt.prototype.write = function (components) {
                var i, pieces, data;

                components = components || this.components;

                pieces = [];

                pieces.push(this.type.toUpperCase() + '(');

                for (i = 0; i < components.length; i += 1) {
                    if (this.isCollection() && i > 0) {
                        pieces.push(',');
                    }

                    // There should be an extract function for the named type
                    if (!this.extract[this.type]) {
                        return null;
                    }

                    data = this.extract[this.type].apply(this, [components[i]]);
                    if (this.isCollection() && this.type !== 'multipoint') {
                        pieces.push('(' + data + ')');
                    } else {
                        pieces.push(data);

                        // If not at the end of the components, add a comma
                        if (i !== components.length - 1 && this.type !== 'multipoint') {
                            pieces.push(',');
                        }
                    }
                }

                pieces.push(')');

                return pieces.join('');
            };

            /**
             * This object contains functions as property names that extract WKT
             * strings from the internal representation.
             * @memberof this.Wkt.Wkt
             * @namespace this.Wkt.Wkt.extract
             * @instance
             */
            Wkt.Wkt.prototype.extract = {
                /**
                 * Return a WKT string representing atomic (point) geometry
                 * @param   point   {Object}    An object with x and y properties
                 * @return          {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                point: function point(_point) {
                    return String(_point.x) + this.delimiter + String(_point.y);
                },

                /**
                 * Return a WKT string representing multiple atoms (points)
                 * @param   multipoint  {Array}     Multiple x-and-y objects
                 * @return              {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                multipoint: function multipoint(_multipoint) {
                    var i,
                        parts = [],
                        s;

                    for (i = 0; i < _multipoint.length; i += 1) {
                        s = this.extract.point.apply(this, [_multipoint[i]]);

                        if (this.wrapVertices) {
                            s = '(' + s + ')';
                        }

                        parts.push(s);
                    }

                    return parts.join(',');
                },

                /**
                 * Return a WKT string representing a chain (linestring) of atoms
                 * @param   linestring  {Array}     Multiple x-and-y objects
                 * @return              {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                linestring: function linestring(_linestring) {
                    // Extraction of linestrings is the same as for points
                    return this.extract.point.apply(this, [_linestring]);
                },

                /**
                 * Return a WKT string representing multiple chains (multilinestring) of atoms
                 * @param   multilinestring {Array}     Multiple of multiple x-and-y objects
                 * @return                  {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                multilinestring: function multilinestring(_multilinestring) {
                    var i,
                        parts = [];

                    if (_multilinestring.length) {
                        for (i = 0; i < _multilinestring.length; i += 1) {
                            parts.push(this.extract.linestring.apply(this, [_multilinestring[i]]));
                        }
                    } else {
                        parts.push(this.extract.point.apply(this, [_multilinestring]));
                    }

                    return parts.join(',');
                },

                /**
                 * Return a WKT string representing multiple atoms in closed series (polygon)
                 * @param   polygon {Array}     Collection of ordered x-and-y objects
                 * @return          {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                polygon: function polygon(_polygon) {
                    // Extraction of polygons is the same as for multilinestrings
                    return this.extract.multilinestring.apply(this, [_polygon]);
                },

                /**
                 * Return a WKT string representing multiple closed series (multipolygons) of multiple atoms
                 * @param   multipolygon    {Array}     Collection of ordered x-and-y objects
                 * @return                  {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                multipolygon: function multipolygon(_multipolygon) {
                    var i,
                        parts = [];
                    for (i = 0; i < _multipolygon.length; i += 1) {
                        parts.push('(' + this.extract.polygon.apply(this, [_multipolygon[i]]) + ')');
                    }
                    return parts.join(',');
                },

                /**
                 * Return a WKT string representing a 2DBox
                 * @param   multipolygon    {Array}     Collection of ordered x-and-y objects
                 * @return                  {String}    The WKT representation
                 * @memberof this.Wkt.Wkt.extract
                 * @instance
                 */
                box: function box(_box) {
                    return this.extract.linestring.apply(this, [_box]);
                },

                geometrycollection: function geometrycollection(str) {
                    console.log('The geometrycollection WKT type is not yet supported.');
                }
            };

            /**
             * This object contains functions as property names that ingest WKT
             * strings into the internal representation.
             * @memberof this.Wkt.Wkt
             * @namespace this.Wkt.Wkt.ingest
             * @instance
             */
            Wkt.Wkt.prototype.ingest = {

                /**
                 * Return point feature given a point WKT fragment.
                 * @param   str {String}    A WKT fragment representing the point
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                point: function point(str) {
                    var coords = Wkt.trim(str).split(this.regExes.spaces);
                    // In case a parenthetical group of coordinates is passed...
                    return [{ // ...Search for numeric substrings
                        x: parseFloat(this.regExes.numeric.exec(coords[0])[0]),
                        y: parseFloat(this.regExes.numeric.exec(coords[1])[0])
                    }];
                },

                /**
                 * Return a multipoint feature given a multipoint WKT fragment.
                 * @param   str {String}    A WKT fragment representing the multipoint
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                multipoint: function multipoint(str) {
                    var i, components, points;
                    components = [];
                    points = Wkt.trim(str).split(this.regExes.comma);
                    for (i = 0; i < points.length; i += 1) {
                        components.push(this.ingest.point.apply(this, [points[i]]));
                    }
                    return components;
                },

                /**
                 * Return a linestring feature given a linestring WKT fragment.
                 * @param   str {String}    A WKT fragment representing the linestring
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                linestring: function linestring(str) {
                    var i, multipoints, components;

                    // In our x-and-y representation of components, parsing
                    //  multipoints is the same as parsing linestrings
                    multipoints = this.ingest.multipoint.apply(this, [str]);

                    // However, the points need to be joined
                    components = [];
                    for (i = 0; i < multipoints.length; i += 1) {
                        components = components.concat(multipoints[i]);
                    }
                    return components;
                },

                /**
                 * Return a multilinestring feature given a multilinestring WKT fragment.
                 * @param   str {String}    A WKT fragment representing the multilinestring
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                multilinestring: function multilinestring(str) {
                    var i, components, line, lines;
                    components = [];

                    lines = Wkt.trim(str).split(this.regExes.doubleParenComma);
                    if (lines.length === 1) {
                        // If that didn't work...
                        lines = Wkt.trim(str).split(this.regExes.parenComma);
                    }

                    for (i = 0; i < lines.length; i += 1) {
                        line = lines[i].replace(this.regExes.trimParens, '$1');
                        components.push(this.ingest.linestring.apply(this, [line]));
                    }

                    return components;
                },

                /**
                 * Return a polygon feature given a polygon WKT fragment.
                 * @param   str {String}    A WKT fragment representing the polygon
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                polygon: function polygon(str) {
                    var i, j, components, subcomponents, ring, rings;
                    rings = Wkt.trim(str).split(this.regExes.parenComma);
                    components = []; // Holds one or more rings
                    for (i = 0; i < rings.length; i += 1) {
                        ring = rings[i].replace(this.regExes.trimParens, '$1').split(this.regExes.comma);
                        subcomponents = []; // Holds the outer ring and any inner rings (holes)
                        for (j = 0; j < ring.length; j += 1) {
                            // Split on the empty space or '+' character (between coordinates)
                            var split = ring[j].split(this.regExes.spaces);
                            if (split.length > 2) {
                                //remove the elements which are blanks
                                split = split.filter(function (n) {
                                    return n != "";
                                });
                            }
                            if (split.length === 2) {
                                var x_cord = split[0];
                                var y_cord = split[1];

                                //now push
                                subcomponents.push({
                                    x: parseFloat(x_cord),
                                    y: parseFloat(y_cord)
                                });
                            }
                        }
                        components.push(subcomponents);
                    }
                    return components;
                },

                /**
                 * Return box vertices (which would become the Rectangle bounds) given a Box WKT fragment.
                 * @param   str {String}    A WKT fragment representing the box
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                box: function box(str) {
                    var i, multipoints, components;

                    // In our x-and-y representation of components, parsing
                    //  multipoints is the same as parsing linestrings
                    multipoints = this.ingest.multipoint.apply(this, [str]);

                    // However, the points need to be joined
                    components = [];
                    for (i = 0; i < multipoints.length; i += 1) {
                        components = components.concat(multipoints[i]);
                    }

                    return components;
                },

                /**
                 * Return a multipolygon feature given a multipolygon WKT fragment.
                 * @param   str {String}    A WKT fragment representing the multipolygon
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                multipolygon: function multipolygon(str) {
                    var i, components, polygon, polygons;
                    components = [];
                    polygons = Wkt.trim(str).split(this.regExes.doubleParenComma);
                    for (i = 0; i < polygons.length; i += 1) {
                        polygon = polygons[i].replace(this.regExes.trimParens, '$1');
                        components.push(this.ingest.polygon.apply(this, [polygon]));
                    }
                    return components;
                },

                /**
                 * Return an array of features given a geometrycollection WKT fragment.
                 * @param   str {String}    A WKT fragment representing the geometry collection
                 * @memberof this.Wkt.Wkt.ingest
                 * @instance
                 */
                geometrycollection: function geometrycollection(str) {
                    console.log('The geometrycollection WKT type is not yet supported.');
                }

            }; // eo ingest

            /**
             * @augments Wkt.Wkt
             * A framework-dependent flag, set for each Wkt.Wkt() instance, that indicates
             * whether or not a closed polygon geometry should be interpreted as a rectangle.
             */
            Wkt.Wkt.prototype.isRectangle = false;

            /**
             * @augments Wkt.Wkt
             * An object of framework-dependent construction methods used to generate
             * objects belonging to the various geometry classes of the framework.
             */
            Wkt.Wkt.prototype.construct = {
                /**
                 * Creates the framework's equivalent point geometry object.
                 * @param   config      {Object}    An optional properties hash the object should use
                 * @param   component   {Object}    An optional component to build from
                 * @return              {gmaps.Marker}
                 */
                point: function point(config, component) {
                    var c = component || this.components;

                    config = config || {
                        optimized: true
                    };

                    config.position = new gmaps.LatLng(c[0].y, c[0].x);

                    return new gmaps.Marker(config);
                },

                /**
                 * Creates the framework's equivalent multipoint geometry object.
                 * @param   config  {Object}    An optional properties hash the object should use
                 * @return          {Array}     Array containing multiple gmaps.Marker
                 */
                multipoint: function multipoint(config) {
                    var i, c, arr;

                    c = this.components;

                    config = config || {};

                    arr = [];

                    for (i = 0; i < c.length; i += 1) {
                        arr.push(this.construct.point(config, c[i]));
                    }

                    return arr;
                },

                /**
                 * Creates the framework's equivalent linestring geometry object.
                 * @param   config      {Object}    An optional properties hash the object should use
                 * @param   component   {Object}    An optional component to build from
                 * @return              {gmaps.Polyline}
                 */
                linestring: function linestring(config, component) {
                    var i, c;

                    c = component || this.components;

                    config = config || {
                        editable: false
                    };

                    config.path = [];

                    for (i = 0; i < c.length; i += 1) {
                        config.path.push(new gmaps.LatLng(c[i].y, c[i].x));
                    }

                    return new gmaps.Polyline(config);
                },

                /**
                 * Creates the framework's equivalent multilinestring geometry object.
                 * @param   config  {Object}    An optional properties hash the object should use
                 * @return          {Array}     Array containing multiple gmaps.Polyline instances
                 */
                multilinestring: function multilinestring(config) {
                    var i, c, arr;

                    c = this.components;

                    config = config || {
                        editable: false
                    };

                    config.path = [];

                    arr = [];

                    for (i = 0; i < c.length; i += 1) {
                        arr.push(this.construct.linestring(config, c[i]));
                    }

                    return arr;
                },

                /**
                 * Creates the framework's equivalent Box or Rectangle geometry object.
                 * @param   config      {Object}    An optional properties hash the object should use
                 * @param   component   {Object}    An optional component to build from
                 * @return              {gmaps.Rectangle}
                 */
                box: function box(config, component) {
                    var c = component || this.components;

                    config = config || {};

                    config.bounds = new gmaps.LatLngBounds(new gmaps.LatLng(c[0].y, c[0].x), new gmaps.LatLng(c[1].y, c[1].x));

                    return new gmaps.Rectangle(config);
                },

                /**
                 * Creates the framework's equivalent polygon geometry object.
                 * @param   config      {Object}    An optional properties hash the object should use
                 * @param   component   {Object}    An optional component to build from
                 * @return              {gmaps.Polygon}
                 */
                polygon: function polygon(config, component) {
                    var j, k, c, rings, verts;

                    c = component || this.components;

                    config = config || {
                        editable: false // Editable geometry off by default
                    };

                    config.paths = [];

                    rings = [];
                    for (j = 0; j < c.length; j += 1) {
                        // For each ring...

                        verts = [];
                        // NOTE: We iterate to one (1) less than the Array length to skip the last vertex
                        for (k = 0; k < c[j].length - 1; k += 1) {
                            // For each vertex...
                            verts.push(new gmaps.LatLng(c[j][k].y, c[j][k].x));
                        } // eo for each vertex

                        if (j !== 0) {
                            // Reverse the order of coordinates in inner rings
                            if (config.reverseInnerPolygons === null || config.reverseInnerPolygons) {
                                verts.reverse();
                            }
                        }

                        rings.push(verts);
                    } // eo for each ring

                    config.paths = config.paths.concat(rings);

                    if (this.isRectangle) {
                        return function () {
                            var bounds, v;

                            bounds = new gmaps.LatLngBounds();

                            for (v in rings[0]) {
                                // Ought to be only 1 ring in a Rectangle
                                if (rings[0].hasOwnProperty(v)) {
                                    bounds.extend(rings[0][v]);
                                }
                            }

                            return new gmaps.Rectangle({
                                bounds: bounds
                            });
                        }();
                    } else {
                        return new gmaps.Polygon(config);
                    }
                },

                /**
                 * Creates the framework's equivalent multipolygon geometry object.
                 * @param   config  {Object}    An optional properties hash the object should use
                 * @return          {Array}     Array containing multiple gmaps.Polygon
                 */
                multipolygon: function multipolygon(config) {
                    var i, c, arr;

                    c = this.components;

                    config = config || {
                        editable: false
                    };

                    config.path = [];

                    arr = [];

                    for (i = 0; i < c.length; i += 1) {
                        arr.push(this.construct.polygon(config, c[i]));
                    }

                    return arr;
                }

            };

            /**
             * @augments Wkt.Wkt
             * A framework-dependent deconstruction method used to generate internal
             * geometric representations from instances of framework geometry. This method
             * uses object detection to attempt to classify members of framework geometry
             * classes into the standard WKT types.
             * @param obj       {Object}    An instance of one of the framework's geometry classes
             * @param multiFlag {Boolean} If true, then the deconstructor will be forced to return a MultiGeometry (multipoint, multilinestring or multipolygon)
             * @return          {Object}    A hash of the 'type' and 'components' thus derived, plus the WKT string of the feature.
             */
            Wkt.Wkt.prototype.deconstruct = function (obj, multiFlag) {
                var features, i, j, verts, rings, sign, tmp, response, lat, lng, vertex, ring;
                var polygons, polygon, k, linestring, linestrings;
                // Shortcut to signed area function (determines clockwise vs counter-clock)
                if (gmaps.geometry) {
                    sign = gmaps.geometry.spherical.computeSignedArea;
                }

                // gmaps.LatLng //////////////////////////////////////////////////////
                if (obj.constructor === gmaps.LatLng) {

                    response = {
                        type: 'point',
                        components: [{
                            x: obj.lng(),
                            y: obj.lat()
                        }]
                    };
                    return response;
                }

                // gmaps.Point //////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Point) {
                    response = {
                        type: 'point',
                        components: [{
                            x: obj.x,
                            y: obj.y
                        }]
                    };
                    return response;
                }

                // gmaps.Marker //////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Marker) {
                    response = {
                        type: 'point',
                        components: [{
                            x: obj.getPosition().lng(),
                            y: obj.getPosition().lat()
                        }]
                    };
                    return response;
                }

                // gmaps.Polyline ////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Polyline) {

                    verts = [];
                    for (i = 0; i < obj.getPath().length; i += 1) {
                        tmp = obj.getPath().getAt(i);
                        verts.push({
                            x: tmp.lng(),
                            y: tmp.lat()
                        });
                    }
                    response = {
                        type: 'linestring',
                        components: verts
                    };
                    return response;
                }

                // gmaps.Polygon /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Polygon) {

                    rings = [];

                    if (multiFlag === undefined) {
                        multiFlag = function () {
                            var areas, l;

                            l = obj.getPaths().length;
                            if (l <= 1) {
                                // Trivial; this is a single polygon
                                return false;
                            }

                            if (l === 2) {
                                // If clockwise*clockwise or counter*counter, i.e.
                                //  (-1)*(-1) or (1)*(1), then result would be positive
                                if (sign(obj.getPaths().getAt(0)) * sign(obj.getPaths().getAt(1)) < 0) {
                                    return false; // Most likely single polygon with 1 hole
                                }

                                return true;
                            }

                            // Must be longer than 3 polygons at this point...
                            areas = obj.getPaths().getArray().map(function (k) {
                                return sign(k) / Math.abs(sign(k)); // Unit normalization (outputs 1 or -1)
                            });

                            // If two clockwise or two counter-clockwise rings are found
                            //  (at different indices)...
                            if (areas.indexOf(areas[0]) !== areas.lastIndexOf(areas[0])) {
                                multiFlag = true; // Flag for holes in one or more polygons
                                return true;
                            }

                            return false;
                        }();
                    }

                    for (i = 0; i < obj.getPaths().length; i += 1) {
                        // For each polygon (ring)...
                        tmp = obj.getPaths().getAt(i);
                        verts = [];
                        for (j = 0; j < obj.getPaths().getAt(i).length; j += 1) {
                            // For each vertex...
                            verts.push({
                                x: tmp.getAt(j).lng(),
                                y: tmp.getAt(j).lat()
                            });
                        }

                        if (!tmp.getAt(tmp.length - 1).equals(tmp.getAt(0))) {
                            if (i % 2 !== 0) {
                                // In inner rings, coordinates are reversed...
                                verts.unshift({ // Add the first coordinate again for closure
                                    x: tmp.getAt(tmp.length - 1).lng(),
                                    y: tmp.getAt(tmp.length - 1).lat()
                                });
                            } else {
                                verts.push({ // Add the first coordinate again for closure
                                    x: tmp.getAt(0).lng(),
                                    y: tmp.getAt(0).lat()
                                });
                            }
                        }

                        if (obj.getPaths().length > 1 && i > 0) {
                            // If this and the last ring have the same signs...
                            if (sign(obj.getPaths().getAt(i)) > 0 && sign(obj.getPaths().getAt(i - 1)) > 0 || sign(obj.getPaths().getAt(i)) < 0 && sign(obj.getPaths().getAt(i - 1)) < 0 && !multiFlag) {
                                // ...They must both be inner rings (or both be outer rings, in a multipolygon)
                                verts = [verts]; // Wrap multipolygons once more (collection)
                            }
                        }

                        //TODO This makes mistakes when a second polygon has holes; it sees them all as individual polygons
                        if (i % 2 !== 0) {
                            // In inner rings, coordinates are reversed...
                            verts.reverse();
                        }
                        rings.push(verts);
                    }

                    response = {
                        type: multiFlag ? 'multipolygon' : 'polygon',
                        components: rings
                    };
                    return response;
                }

                // gmaps.Circle //////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Circle) {
                    var point = obj.getCenter();
                    var radius = obj.getRadius();
                    verts = [];
                    var d2r = Math.PI / 180; // degrees to radians
                    var r2d = 180 / Math.PI; // radians to degrees
                    radius = radius / 1609; // meters to miles
                    var earthsradius = 3963; // 3963 is the radius of the earth in miles
                    var num_seg = 32; // number of segments used to approximate a circle
                    var rlat = radius / earthsradius * r2d;
                    var rlng = rlat / Math.cos(point.lat() * d2r);

                    for (var n = 0; n <= num_seg; n++) {
                        var theta = Math.PI * (n / (num_seg / 2));
                        lng = point.lng() + rlng * Math.cos(theta); // center a + radius x * cos(theta)
                        lat = point.lat() + rlat * Math.sin(theta); // center b + radius y * sin(theta)
                        verts.push({
                            x: lng,
                            y: lat
                        });
                    }

                    response = {
                        type: 'polygon',
                        components: [verts]
                    };

                    return response;
                }

                // gmaps.LatLngBounds ///////////////////////////////////////////////////
                if (obj.constructor === gmaps.LatLngBounds) {

                    tmp = obj;
                    verts = [];
                    verts.push({ // NW corner
                        x: tmp.getSouthWest().lng(),
                        y: tmp.getNorthEast().lat()
                    });

                    verts.push({ // NE corner
                        x: tmp.getNorthEast().lng(),
                        y: tmp.getNorthEast().lat()
                    });

                    verts.push({ // SE corner
                        x: tmp.getNorthEast().lng(),
                        y: tmp.getSouthWest().lat()
                    });

                    verts.push({ // SW corner
                        x: tmp.getSouthWest().lng(),
                        y: tmp.getSouthWest().lat()
                    });

                    verts.push({ // NW corner (again, for closure)
                        x: tmp.getSouthWest().lng(),
                        y: tmp.getNorthEast().lat()
                    });

                    response = {
                        type: 'polygon',
                        isRectangle: true,
                        components: [verts]
                    };

                    return response;
                }

                // gmaps.Rectangle ///////////////////////////////////////////////////
                if (obj.constructor === gmaps.Rectangle) {

                    tmp = obj.getBounds();
                    verts = [];
                    verts.push({ // NW corner
                        x: tmp.getSouthWest().lng(),
                        y: tmp.getNorthEast().lat()
                    });

                    verts.push({ // NE corner
                        x: tmp.getNorthEast().lng(),
                        y: tmp.getNorthEast().lat()
                    });

                    verts.push({ // SE corner
                        x: tmp.getNorthEast().lng(),
                        y: tmp.getSouthWest().lat()
                    });

                    verts.push({ // SW corner
                        x: tmp.getSouthWest().lng(),
                        y: tmp.getSouthWest().lat()
                    });

                    verts.push({ // NW corner (again, for closure)
                        x: tmp.getSouthWest().lng(),
                        y: tmp.getNorthEast().lat()
                    });

                    response = {
                        type: 'polygon',
                        isRectangle: true,
                        components: [verts]
                    };

                    return response;
                }

                // gmaps.Data Geometry Types /////////////////////////////////////////////////////

                // gmaps.Data.Feature /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.Feature) {
                    return this.deconstruct.call(this, obj.getGeometry());
                }

                // gmaps.Data.Point /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.Point) {
                    //console.zlog('It is a gmaps.Data.Point');
                    response = {
                        type: 'point',
                        components: [{
                            x: obj.get().lng(),
                            y: obj.get().lat()
                        }]
                    };
                    return response;
                }

                // gmaps.Data.LineString /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.LineString) {
                    verts = [];
                    //console.zlog('It is a gmaps.Data.LineString');
                    for (i = 0; i < obj.getLength(); i += 1) {
                        vertex = obj.getAt(i);
                        verts.push({
                            x: vertex.lng(),
                            y: vertex.lat()
                        });
                    }
                    response = {
                        type: 'linestring',
                        components: verts
                    };
                    return response;
                }

                // gmaps.Data.Polygon /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.Polygon) {
                    rings = [];
                    //console.zlog('It is a gmaps.Data.Polygon');
                    for (i = 0; i < obj.getLength(); i += 1) {
                        // For each ring...
                        ring = obj.getAt(i);
                        verts = [];
                        for (j = 0; j < ring.getLength(); j += 1) {
                            // For each vertex...
                            vertex = ring.getAt(j);
                            verts.push({
                                x: vertex.lng(),
                                y: vertex.lat()
                            });
                        }
                        verts.push({
                            x: ring.getAt(0).lng(),
                            y: ring.getAt(0).lat()
                        });

                        rings.push(verts);
                    }
                    response = {
                        type: 'polygon',
                        components: rings
                    };

                    return response;
                }

                // gmaps.Data.MultiPoint /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.MultiPoint) {
                    verts = [];
                    for (i = 0; i < obj.getLength(); i += 1) {
                        vertex = obj.getAt(i);
                        verts.push([{
                            x: vertex.lng(),
                            y: vertex.lat()
                        }]);
                    }
                    response = {
                        type: 'multipoint',
                        components: verts
                    };
                    return response;
                }

                // gmaps.Data.MultiLineString /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.MultiLineString) {
                    linestrings = [];
                    for (i = 0; i < obj.getLength(); i += 1) {
                        verts = [];
                        linestring = obj.getAt(i);
                        for (j = 0; j < linestring.getLength(); j += 1) {
                            vertex = linestring.getAt(j);
                            verts.push({
                                x: vertex.lng(),
                                y: vertex.lat()
                            });
                        }
                        linestrings.push(verts);
                    }
                    response = {
                        type: 'multilinestring',
                        components: linestrings
                    };
                    return response;
                }

                // gmaps.Data.MultiPolygon /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.MultiPolygon) {

                    polygons = [];

                    //console.zlog('It is a gmaps.Data.MultiPolygon');
                    for (k = 0; k < obj.getLength(); k += 1) {
                        // For each multipolygon
                        polygon = obj.getAt(k);
                        rings = [];
                        for (i = 0; i < polygon.getLength(); i += 1) {
                            // For each ring...
                            ring = polygon.getAt(i);
                            verts = [];
                            for (j = 0; j < ring.getLength(); j += 1) {
                                // For each vertex...
                                vertex = ring.getAt(j);
                                verts.push({
                                    x: vertex.lng(),
                                    y: vertex.lat()
                                });
                            }
                            verts.push({
                                x: ring.getAt(0).lng(),
                                y: ring.getAt(0).lat()
                            });

                            rings.push(verts);
                        }
                        polygons.push(rings);
                    }

                    response = {
                        type: 'multipolygon',
                        components: polygons
                    };
                    return response;
                }

                // gmaps.Data.GeometryCollection /////////////////////////////////////////////////////
                if (obj.constructor === gmaps.Data.GeometryCollection) {

                    var objects = [];
                    for (k = 0; k < obj.getLength(); k += 1) {
                        // For each multipolygon
                        var object = obj.getAt(k);
                        objects.push(this.deconstruct.call(this, object));
                    }
                    //console.zlog('It is a gmaps.Data.GeometryCollection', objects);
                    response = {
                        type: 'geometrycollection',
                        components: objects
                    };
                    return response;
                }

                // Array ///////////////////////////////////////////////////////////////////
                if (Wkt.isArray(obj)) {
                    features = [];

                    for (i = 0; i < obj.length; i += 1) {
                        features.push(this.deconstruct.call(this, obj[i], true));
                    }

                    response = {

                        type: function () {
                            var k,
                                type = obj[0].constructor;

                            for (k = 0; k < obj.length; k += 1) {
                                // Check that all items have the same constructor as the first item
                                if (obj[k].constructor !== type) {
                                    // If they don't, type is heterogeneous geometry collection
                                    return 'geometrycollection';
                                }
                            }

                            switch (type) {
                                case gmaps.Marker:
                                    return 'multipoint';
                                case gmaps.Polyline:
                                    return 'multilinestring';
                                case gmaps.Polygon:
                                    return 'multipolygon';
                                default:
                                    return 'geometrycollection';
                            }
                        }(),
                        components: function () {
                            // Pluck the components from each Wkt
                            var i, comps;

                            comps = [];
                            for (i = 0; i < features.length; i += 1) {
                                if (features[i].components) {
                                    comps.push(features[i].components);
                                }
                            }

                            return {
                                comps: comps
                            };
                        }()

                    };
                    response.components = response.components.comps;
                    return response;
                }

                console.zlog('The passed object does not have any recognizable properties.');
            };arrayProto = Array.prototype;
            splice = arrayProto.splice;
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype['delete'] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
            freeSelf = typeof self == 'object' && self && self.Object === Object && self;
            root = freeGlobal || freeSelf || Function('return this')();
            Symbol = root.Symbol;
            objectProto$1 = Object.prototype;
            hasOwnProperty$1 = objectProto$1.hasOwnProperty;
            nativeObjectToString = objectProto$1.toString;
            symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;
            objectProto$2 = Object.prototype;
            nativeObjectToString$1 = objectProto$2.toString;
            nullTag = '[object Null]';
            undefinedTag = '[object Undefined]';
            symToStringTag = Symbol ? Symbol.toStringTag : undefined;
            asyncTag = '[object AsyncFunction]';
            funcTag = '[object Function]';
            genTag = '[object GeneratorFunction]';
            proxyTag = '[object Proxy]';
            coreJsData = root['__core-js_shared__'];

            maskSrcKey = function () {
                var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
                return uid ? 'Symbol(src)_1.' + uid : '';
            }();

            funcProto$1 = Function.prototype;
            funcToString$1 = funcProto$1.toString;
            reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
            reIsHostCtor = /^\[object .+?Constructor\]$/;
            funcProto = Function.prototype;
            objectProto = Object.prototype;
            funcToString = funcProto.toString;
            hasOwnProperty = objectProto.hasOwnProperty;
            reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
            Map = getNative(root, 'Map');
            nativeCreate = getNative(Object, 'create');
            HASH_UNDEFINED = '__lodash_hash_undefined__';
            objectProto$3 = Object.prototype;
            hasOwnProperty$2 = objectProto$3.hasOwnProperty;
            objectProto$4 = Object.prototype;
            hasOwnProperty$3 = objectProto$4.hasOwnProperty;
            HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
            Hash.prototype.clear = hashClear;
            Hash.prototype['delete'] = hashDelete;
            Hash.prototype.get = hashGet;
            Hash.prototype.has = hashHas;
            Hash.prototype.set = hashSet;MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype['delete'] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;

            /** Used as the size to enable large array optimizations. */
            LARGE_ARRAY_SIZE = 200;
            Stack.prototype.clear = stackClear;
            Stack.prototype['delete'] = stackDelete;
            Stack.prototype.get = stackGet;
            Stack.prototype.has = stackHas;
            Stack.prototype.set = stackSet;

            /** Used to stand-in for `undefined` hash values. */
            HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
            SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
            SetCache.prototype.has = setCacheHas;UNORDERED_COMPARE_FLAG$1 = 1;
            PARTIAL_COMPARE_FLAG$2 = 2;
            Uint8Array = root.Uint8Array;
            UNORDERED_COMPARE_FLAG$2 = 1;
            PARTIAL_COMPARE_FLAG$3 = 2;
            boolTag = '[object Boolean]';
            dateTag = '[object Date]';
            errorTag = '[object Error]';
            mapTag = '[object Map]';
            numberTag = '[object Number]';
            regexpTag = '[object RegExp]';
            setTag = '[object Set]';
            stringTag = '[object String]';
            symbolTag = '[object Symbol]';
            arrayBufferTag = '[object ArrayBuffer]';
            dataViewTag = '[object DataView]';
            symbolProto = Symbol ? Symbol.prototype : undefined;
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
            argsTag$1 = '[object Arguments]';
            objectProto$8 = Object.prototype;
            hasOwnProperty$7 = objectProto$8.hasOwnProperty;
            propertyIsEnumerable = objectProto$8.propertyIsEnumerable;
            isArguments = baseIsArguments(function () {
                return arguments;
            }()) ? baseIsArguments : function (value) {
                return isObjectLike(value) && hasOwnProperty$7.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
            };
            isArray = Array.isArray;
            freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
            freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
            moduleExports = freeModule && freeModule.exports === freeExports;
            Buffer = moduleExports ? root.Buffer : undefined;
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
            isBuffer = nativeIsBuffer || stubFalse;
            MAX_SAFE_INTEGER = 9007199254740991;
            reIsUint = /^(?:0|[1-9]\d*)$/;
            MAX_SAFE_INTEGER$1 = 9007199254740991;
            argsTag$2 = '[object Arguments]';
            arrayTag$1 = '[object Array]';
            boolTag$1 = '[object Boolean]';
            dateTag$1 = '[object Date]';
            errorTag$1 = '[object Error]';
            funcTag$1 = '[object Function]';
            mapTag$1 = '[object Map]';
            numberTag$1 = '[object Number]';
            objectTag$1 = '[object Object]';
            regexpTag$1 = '[object RegExp]';
            setTag$1 = '[object Set]';
            stringTag$1 = '[object String]';
            weakMapTag = '[object WeakMap]';
            arrayBufferTag$1 = '[object ArrayBuffer]';
            dataViewTag$1 = '[object DataView]';
            float32Tag = '[object Float32Array]';
            float64Tag = '[object Float64Array]';
            int8Tag = '[object Int8Array]';
            int16Tag = '[object Int16Array]';
            int32Tag = '[object Int32Array]';
            uint8Tag = '[object Uint8Array]';
            uint8ClampedTag = '[object Uint8ClampedArray]';
            uint16Tag = '[object Uint16Array]';
            uint32Tag = '[object Uint32Array]';
            typedArrayTags = {};

            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
            typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
            freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
            moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
            freeProcess = moduleExports$1 && freeGlobal.process;

            nodeUtil = function () {
                try {
                    return freeProcess && freeProcess.binding('util');
                } catch (e) {}
            }();

            nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
            isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
            objectProto$7 = Object.prototype;
            hasOwnProperty$6 = objectProto$7.hasOwnProperty;
            objectProto$10 = Object.prototype;
            nativeKeys = overArg(Object.keys, Object);
            objectProto$9 = Object.prototype;
            hasOwnProperty$8 = objectProto$9.hasOwnProperty;
            PARTIAL_COMPARE_FLAG$4 = 2;
            objectProto$6 = Object.prototype;
            hasOwnProperty$5 = objectProto$6.hasOwnProperty;
            DataView = getNative(root, 'DataView');
            Promise = getNative(root, 'Promise');
            Set = getNative(root, 'Set');
            WeakMap = getNative(root, 'WeakMap');
            mapTag$2 = '[object Map]';
            objectTag$2 = '[object Object]';
            promiseTag = '[object Promise]';
            setTag$2 = '[object Set]';
            weakMapTag$1 = '[object WeakMap]';
            dataViewTag$2 = '[object DataView]';
            dataViewCtorString = toSource(DataView);
            mapCtorString = toSource(Map);
            promiseCtorString = toSource(Promise);
            setCtorString = toSource(Set);
            weakMapCtorString = toSource(WeakMap);
            getTag = baseGetTag;


            // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
            if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag(new Map()) != mapTag$2 || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$2 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
                getTag = function getTag(value) {
                    var result = baseGetTag(value),
                        Ctor = result == objectTag$2 ? value.constructor : undefined,
                        ctorString = Ctor ? toSource(Ctor) : '';

                    if (ctorString) {
                        switch (ctorString) {
                            case dataViewCtorString:
                                return dataViewTag$2;
                            case mapCtorString:
                                return mapTag$2;
                            case promiseCtorString:
                                return promiseTag;
                            case setCtorString:
                                return setTag$2;
                            case weakMapCtorString:
                                return weakMapTag$1;
                        }
                    }
                    return result;
                };
            }

            getTag$1 = getTag;
            PARTIAL_COMPARE_FLAG$1 = 2;
            argsTag = '[object Arguments]';
            arrayTag = '[object Array]';
            objectTag = '[object Object]';
            objectProto$5 = Object.prototype;
            hasOwnProperty$4 = objectProto$5.hasOwnProperty;
            UNORDERED_COMPARE_FLAG = 1;
            PARTIAL_COMPARE_FLAG = 2;
            FUNC_ERROR_TEXT = 'Expected a function';
            memoize.Cache = MapCache;

            /** Used as the maximum memoize cache size. */
            MAX_MEMOIZE_SIZE = 500;
            symbolTag$1 = '[object Symbol]';
            INFINITY = 1 / 0;
            symbolProto$1 = Symbol ? Symbol.prototype : undefined;
            symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;
            reLeadingDot = /^\./;
            rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
            reEscapeChar = /\\(\\)?/g;
            stringToPath = memoizeCapped(function (string) {
                string = toString(string);

                var result = [];
                if (reLeadingDot.test(string)) {
                    result.push('');
                }
                string.replace(rePropName, function (match, number, quote, string) {
                    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
                });
                return result;
            });
            reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
            reIsPlainProp = /^\w*$/;
            INFINITY$1 = 1 / 0;
            UNORDERED_COMPARE_FLAG$3 = 1;
            PARTIAL_COMPARE_FLAG$5 = 2;
            baseFor = createBaseFor();
            baseEach = createBaseEach(baseForOwn);
            stringTag$2 = '[object String]';
            asciiSize = baseProperty('length');
            rsAstralRange = '\\ud800-\\udfff';
            rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
            rsComboSymbolsRange = '\\u20d0-\\u20f0';
            rsVarRange = '\\ufe0e\\ufe0f';
            rsZWJ = '\\u200d';
            reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
            rsAstralRange$1 = '\\ud800-\\udfff';
            rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
            rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
            rsVarRange$1 = '\\ufe0e\\ufe0f';
            rsAstral = '[' + rsAstralRange$1 + ']';
            rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
            rsFitz = '\\ud83c[\\udffb-\\udfff]';
            rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
            rsNonAstral = '[^' + rsAstralRange$1 + ']';
            rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
            rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
            rsZWJ$1 = '\\u200d';
            reOptMod = rsModifier + '?';
            rsOptVar = '[' + rsVarRange$1 + ']?';
            rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
            rsSeq = rsOptVar + reOptMod + rsOptJoin;
            rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
            reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
            mapTag$3 = '[object Map]';
            setTag$3 = '[object Set]';
            debug$1 = console.debug.bind(console, '%c turfHelper' + ':', "color:#00CC00;font-weight:bold;");
            warn = console.debug.bind(console, '%c turfHelper' + ':', "color:orange;font-weight:bold;");

            _export('polygonToFeaturePolygon', polygonToFeaturePolygon = function polygonToFeaturePolygon(polygon) {

                var vertices = toCoords(polygon.getPath().getArray());

                vertices.push(vertices[0]);
                return turf_polygon([vertices]);
            });

            _export('arrayToFeaturePoints', arrayToFeaturePoints = function arrayToFeaturePoints(latLngArray) {

                var FeatureCollection = {
                    "type": "FeatureCollection",
                    "features": []
                };
                var features = map(latLngArray, function (latLng) {
                    return {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [latLng.lng(), latLng.lat()]
                        }
                    };
                });

                FeatureCollection.features = features;
                return FeatureCollection;
            });

            _export('centroid', centroid = function centroid(FeatureCollection) {
                return turf_centroid(FeatureCollection);
            });

            _export('verticesInPolygon', verticesInPolygon = function verticesInPolygon(polygon) {
                return sum(map(polygon.coordinates, function (ring) {
                    return ring.length;
                }));
            });

            defaults = {
                h: 1,
                s: 78, // constant saturation
                l: 63, // constant luminance
                a: 1
            };

            getColor = function getColor(val, range) {
                defaults.h = Math.floor(360 / range * val);
                return "hsla(" + defaults.h + "," + defaults.s + "%," + defaults.l + "%," + defaults.a + ")";
            };

            getColor1 = function getColor1() {
                return "hsla(" + defaults.h + "," + defaults.s + "%," + (defaults.l - 30) + "%," + defaults.a + ")";
            };

            parseHalf = function parseHalf(foo) {
                return parseInt(foo / 2, 10);
            };

            darken = function darken(stringcolor, factor) {
                var darkercolor = {};
                if (!factor) {
                    factor = 1;
                }
                if (stringcolor.fillColor.indexOf('rgb') !== -1) {
                    darkercolor.r = factor * parseHalf(stringcolor.r);
                    darkercolor.g = factor * parseHalf(stringcolor.g);
                    darkercolor.b = factor * parseHalf(stringcolor.b);
                    darkercolor.fillColor = 'rgba(' + darkercolor.r + ',' + darkercolor.g + ',' + darkercolor.b + ',0.99)';
                } else if (stringcolor.fillColor.indexOf('hsl') !== -1) {
                    darkercolor.h = stringcolor.h;
                    darkercolor.s = stringcolor.s;
                    darkercolor.l = factor * stringcolor.l - 30;
                    darkercolor.fillColor = 'hsl(' + darkercolor.h + ',' + darkercolor.s + '%,' + darkercolor.l + '%)';
                }

                return darkercolor;
            };

            parseHex = function parseHex(hexstring, opacity) {
                var hexcolor = {
                    hex: hexstring
                };

                hexstring = hexstring.replace('#', '');
                if (hexstring.length === 3) {
                    hexstring = hexstring[0] + hexstring[0] + hexstring[1] + hexstring[1] + hexstring[2] + hexstring[2];
                }
                if (isNaN(parseFloat(opacity, 10))) {
                    opacity = 1;
                }

                hexcolor.r = parseInt(hexstring.substring(0, 2), 16);
                hexcolor.g = parseInt(hexstring.substring(2, 4), 16);
                hexcolor.b = parseInt(hexstring.substring(4, 6), 16);
                hexcolor.a = opacity;
                hexcolor.fillColor = 'rgba(' + hexcolor.r + ',' + hexcolor.g + ',' + hexcolor.b + ',' + hexcolor.a + ')';
                hexcolor.strokeColor = ['rgba(' + parseHalf(hexcolor.r), parseHalf(hexcolor.g), parseHalf(hexcolor.b), hexcolor.a + ')'].join(',');
                hexcolor.rgb = hexcolor.fillColor;
                return hexcolor;
            };

            parseHSL = function parseHSL(hslstring, opacity) {
                var hslcolor = {},
                    hslparts = compact(hslstring.split(/hsla?\(|\,|\)|\%/));

                if (hslparts[3] === undefined) {
                    hslparts[3] = 1;
                }
                if (isNaN(parseFloat(opacity, 10))) {
                    opacity = 1;
                }

                hslcolor.h = parseFloat(hslparts[0], 10);
                hslcolor.s = parseFloat(hslparts[1], 10);
                hslcolor.l = parseFloat(hslparts[2], 10);
                hslcolor.a = parseFloat(opacity * hslparts[3], 10);

                hslcolor.fillColor = 'hsla(' + hslcolor.h + ',' + hslcolor.s + '%,' + hslcolor.l + '%,' + hslcolor.a + ')';
                hslcolor.strokeColor = 'hsla(' + hslcolor.h + ',' + hslcolor.s + '%,' + parseInt(hslcolor.l / 2, 10) + '%,' + hslcolor.a + ')';
                hslcolor.hsl = hslcolor.fillColor;
                return hslcolor;
            };

            parseRGB = function parseRGB(rgbstring, opacity) {
                var rgbcolor = {},
                    rgbparts = compact(rgbstring.split(/rgba?\(|\,|\)/));

                if (rgbparts[3] === undefined) {
                    rgbparts[3] = 1;
                }

                if (isNaN(parseFloat(opacity, 10))) {
                    opacity = 1;
                }

                rgbcolor.r = parseInt(rgbparts[0], 10) % 256;
                rgbcolor.g = parseInt(rgbparts[1], 10) % 256;
                rgbcolor.b = parseInt(rgbparts[2], 10) % 256;
                rgbcolor.a = parseFloat(opacity * rgbparts[3], 10);
                rgbcolor.fillColor = 'rgba(' + rgbcolor.r + ',' + rgbcolor.g + ',' + rgbcolor.b + ',' + rgbcolor.a + ')';
                rgbcolor.strokeColor = 'rgba(' + rgbcolor.r / 2 + ',' + rgbcolor.g / 2 + ',' + rgbcolor.b / 2 + ',' + rgbcolor.a + ')';
                rgbcolor.rgb = rgbcolor.fillColor;
                return rgbcolor;
            };

            rgbToHSL = function rgbToHSL(r, g, b, a) {
                r = r % 256 / 255;
                g = g % 256 / 255;
                b = b % 256 / 255;
                if (a === undefined) {
                    a = 1;
                }
                var max = Math.max(r, g, b),
                    min = Math.min(r, g, b);
                var h,
                    s,
                    l = (max + min) / 2;

                if (max === min) {
                    h = s = 0; // achromatic
                } else {
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                        default:
                            h = 0;
                            break;
                    }

                    h /= 6;
                }
                var hsl = {
                    h: Math.round(360 * h),
                    s: Math.round(100 * s),
                    l: Math.round(100 * l),
                    a: Math.round(100 * a) / 100
                };

                hsl.fillColor = 'hsla(' + hsl.h + ',' + hsl.s + '%,' + hsl.l + '%,' + hsl.a + ')';

                return hsl;
            };

            hslToRGB = function hslToRGB(h, s, l, a) {
                var r, g, b;

                h = parseFloat(h, 10) / 360;
                s = parseFloat(s, 10) / 100;
                l = parseFloat(l, 10) / 100;
                if (a === undefined) {
                    a = 1;
                }
                if (s === 0) {
                    r = g = b = l; // achromatic
                } else {
                    var hue2rgb = function hue2rgb(p, q, t) {
                        if (t < 0) {
                            t += 1;
                        }
                        if (t > 1) {
                            t -= 1;
                        }
                        if (t < 1 / 6) {
                            return p + (q - p) * 6 * t;
                        }
                        if (t < 1 / 2) {
                            return q;
                        }
                        if (t < 2 / 3) {
                            return p + (q - p) * (2 / 3 - t) * 6;
                        }
                        return p;
                    };

                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1 / 3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1 / 3);
                }

                if (a === undefined) {
                    a = 1;
                }

                var rgb = {
                    r: Math.round(r * 255),
                    g: Math.round(g * 255),
                    b: Math.round(b * 255),
                    a: parseFloat(a, 10)
                };

                rgb.fillColor = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';

                return rgb;
            };

            toDecColor = function toDecColor(stringcolor) {
                var parsedcolor = {};
                if (!stringcolor) {
                    parsedcolor.fillColor = 'rgba(100,250,50,0.99)';
                } else if (stringcolor.indexOf('rgb') !== -1) {
                    parsedcolor = parseRGB(stringcolor);
                } else if (stringcolor.indexOf('hsl') !== -1) {
                    parsedcolor = parseHSL(stringcolor);
                } else {
                    parsedcolor = parseHex(stringcolor);
                }

                return parsedcolor;
            };

            createTextMarker = function createTextMarker(theoptions) {

                var generateCanvas = function generateCanvas(options) {
                    var canvas = document.createElement("canvas");
                    var ancho = 30,
                        alto = 40;
                    canvas.width = ancho + 18;
                    canvas.height = alto;
                    var x = canvas.width / 2,
                        y = canvas.height - 2,
                        radius = ancho / 2,
                        angulo = 0.6;

                    var font = "'" + options.font + "'" || 'Arial';
                    var fontsize = options.fontsize || 11;

                    var context = canvas.getContext("2d");

                    context.clearRect(0, 0, canvas.width, canvas.height);

                    var radius0 = 2 * radius,
                        cx = x + 0.95 * radius0,
                        cy = y + 0.45 * radius0;

                    var grad = context.createLinearGradient(0, 0, 0, canvas.height),
                        color0,
                        color1;
                    if (options.index !== undefined && options.count > 0) {
                        color0 = getColor(options.index, options.count);
                        color1 = getColor1();
                    } else {
                        var deccolor = toDecColor(options.color);
                        color0 = deccolor.fillColor;
                        color1 = darken(deccolor).fillColor;
                    }

                    grad.addColorStop(0, color0);
                    grad.addColorStop(1, color1);

                    context.fillStyle = grad;
                    context.strokeStyle = 'rgba(200,200,200,0.7)';

                    context.beginPath();

                    //arco izquierdo
                    context.arc(cx - 1, cy, radius0, 9 * Math.PI / 8, -6 * Math.PI / 8, false);

                    // arco superior
                    context.arc(x, (y - 7) / 2, radius, angulo, Math.PI - angulo, true);

                    //arco derecho
                    context.arc(2 * x - cx + 1, cy, radius0, -0.95 * Math.PI / 3, -Math.PI / 8, false);
                    context.fill();
                    context.stroke();

                    context.beginPath();
                    context.arc(x, 0.40 * y, 2 * radius / 3, 0, 2 * Math.PI, false);
                    context.fillStyle = 'white';
                    context.fill();

                    context.beginPath();

                    // Render Label
                    //context.font = "11pt Arial";
                    context.font = fontsize + "pt " + font;
                    context.textBaseline = "top";

                    var textWidth = context.measureText(options.label);

                    if (textWidth.width > ancho || String(options.label).length > 3) {
                        context.rect(x - 2 - textWidth.width / 2, y - 30, x - 2 + textWidth.width / 2, y - 23);
                        context.fillStyle = '#F7F0F0';
                        context.fill();
                        context.stroke();
                    }

                    context.fillStyle = "black";
                    context.strokeStyle = "black";
                    // centre the text.
                    context.fillText(options.label, 1 + Math.floor(canvas.width / 2 - textWidth.width / 2), 8);

                    return canvas;
                };
                theoptions.scale = theoptions.scale || 0.75;
                var markerCanvas = generateCanvas(theoptions);

                var iconObj = {
                    url: markerCanvas.toDataURL()
                };
                if (window.google && window.google.maps) {
                    Object.assign(iconObj, {
                        size: new google.maps.Size(48, 40),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(24 * theoptions.scale, 40 * theoptions.scale),
                        scaledSize: new google.maps.Size(48 * theoptions.scale, 40 * theoptions.scale)
                    });
                }

                return iconObj;
            };

            createTransparentMarkerIcon = function createTransparentMarkerIcon(theoptions) {

                var generateTransparentCanvas = function generateTransparentCanvas(options) {
                    var canvas = options.canvas || document.createElement("canvas"),
                        context = canvas.getContext("2d"),
                        font = options.font || 'fontello',
                        fontsize = options.fontsize || 30,
                        color0,
                        color1;

                    canvas.width = 54;
                    canvas.height = 48;
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    /*context.rect(1, 1, canvas.width - 2, canvas.height - 2);
                    context.lineWidth = 1;
                    context.strokeStyle = 'black';
                    context.stroke();*/

                    if (options.index !== undefined && options.count > 0) {
                        color0 = getColor(options.index, options.count);
                        color1 = getColor1();
                    } else {
                        var deccolor = toDecColor(options.color);
                        color0 = deccolor.fillColor;
                        color1 = darken(deccolor).fillColor;
                    }

                    context.beginPath();

                    context.font = 'normal normal normal ' + fontsize + 'px ' + font;

                    context.textBaseline = "top";
                    var textWidth = context.measureText(options.unicodelabel),
                        text_x = Math.floor(canvas.width / 2 - textWidth.width / 2);

                    if (options.shadow) {
                        var grad = context.createLinearGradient(text_x, 0, canvas.width, canvas.height);

                        grad.addColorStop(0, '#FFFFFF');
                        grad.addColorStop(1, color0);

                        //console.debug('applying shadow');
                        context.shadowOffsetX = -2;
                        context.shadowOffsetY = -2;
                        context.shadowBlur = 0;

                        context.fillStyle = '#FFFFFF';
                        context.shadowColor = '#666666';

                        context.fillText(options.unicodelabel, text_x - 4, 0);
                        context.fillText(options.unicodelabel, text_x, 3);
                        context.fillStyle = grad;
                        context.fillText(options.unicodelabel, text_x + 4, 6);

                        context.strokeStyle = '#FFFFFF';
                        context.strokeText(options.unicodelabel, text_x + 4, 6);
                    } else {

                        context.shadowOffsetX = 2;
                        context.shadowOffsetY = 2;
                        context.shadowBlur = 0;
                        context.shadowColor = '#FFFFFF';
                        context.fillStyle = color0;
                        context.fillText(options.unicodelabel, text_x + 1, 0);

                        context.shadowOffsetX = 2;
                        context.shadowOffsetY = 2;
                        context.shadowBlur = 1;
                        context.shadowColor = '#FFFFFF';
                        context.strokeStyle = color1;
                        context.strokeText(options.unicodelabel, text_x + 1, 0);
                    }

                    canvas.fillColor = color0;

                    return canvas;
                };

                theoptions.scale = theoptions.scale || 1;
                theoptions.fontsize = theoptions.fontsize || 30;

                var markerCanvas = generateTransparentCanvas(theoptions);

                var scale = theoptions.scale;
                if (theoptions.shadow) {
                    scale = 0.9 * scale;
                }
                var iconObj = {
                    canvas: markerCanvas,
                    url: markerCanvas.toDataURL(),
                    fillColor: markerCanvas.fillColor
                };

                Object.assign(iconObj, theoptions);

                if (window.google && window.google.maps) {
                    Object.assign(iconObj, {
                        size: new google.maps.Size(54 * scale, 48 * scale),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(27 * scale, 24 * scale),
                        scaledSize: new google.maps.Size(54 * scale, 48 * scale)
                    });
                }
                //console.debug('createTransparentMarkerIcon', iconObj);

                return iconObj;
            };

            getHexColor = function getHexColor(color) {
                var hexcolor = color;
                if (color.indexOf('rgb') !== -1) {
                    var rgbArr = color.split(/[\(,\)]/ig);
                    hexcolor = [(1 * rgbArr[1]).toString(16), (1 * rgbArr[2]).toString(16), (1 * rgbArr[3]).toString(16)].join('');
                } else if (color.indexOf('#') !== -1) {
                    hexcolor = color.replace(/#/g, '');
                }
                return hexcolor;
            };

            ButtonFactory$1 = {
                parseColorString: parseColorString,
                autoIcon: function autoIcon(options) {
                    options.font = options.font || 'Arial';
                    options.color = options.color || '#FF0000';
                    options.hexcolor = getHexColor(options.color);

                    // En frontdev el icono debe aparecer solo, sin envoltorio
                    options.transparent_background = true;
                    if (options.font === 'fontawesome-webfont' || options.font === 'fontello' || options.font === 'Material Icons' || options.font === 'Material-Design-Icons') {

                        // Fontello obligatorio
                        options.font = 'fontello';

                        options.label = (options.label || 'e836').slice(-4);

                        options.unicodelabel = String.fromCharCode('0x' + options.label);
                        options.scale = options.scale || 1;

                        return createTransparentMarkerIcon(options);
                    } else {
                        options.scale = options.scale || 0.75;
                        options.label = String(options.label || 'A');
                        // This is text I should print literally
                        return createTextMarker(options);
                    }
                }
            };
            ig_turfhelper = {
                Wkt: Wkt,
                Wicket: Wicket,
                WKT2Object: WKT2Object,
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
                toLatLng: toLatLng$1,
                toLatLngs: toLatLngs,
                trimPaths: trimPaths,
                union: union,
                verticesInPolygon: verticesInPolygon
            };

            _export('Wkt', Wkt);

            _export('Wicket', Wicket);

            _export('WKT2Object', WKT2Object);

            _export('along', along);

            _export('arrayToFeaturePoints', arrayToFeaturePoints);

            _export('createbuffer', createbuffer);

            _export('centroid', centroid);

            _export('cleanFeaturePolygon', cleanFeaturePolygon);

            _export('latlngToPoint', latlngToPoint);

            _export('pointInPolygon', pointInPolygon);

            _export('polygonToFeaturePolygon', polygonToFeaturePolygon);

            _export('representGeometry', representGeometry);

            _export('simplifyFeature', simplifyFeature);

            _export('simplifyGeometry', simplifyGeometry);

            _export('simplifyPointArray', simplifyPointArray);

            _export('toCoord', toCoord);

            _export('toCoords', toCoords);

            _export('toLatLng', toLatLng$1);

            _export('toLatLngs', toLatLngs);

            _export('trimPaths', trimPaths);

            _export('union', union);

            _export('verticesInPolygon', verticesInPolygon);

            _export('default', ig_turfhelper);
        }
    };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["gmaps"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("gmaps"));
  else
    turfHelper = factory(gmaps);
});