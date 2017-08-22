## Members

<dl>
<dt><a href="#kinks">kinks</a> ⇒ <code>FeatureCollection.&lt;Point&gt;</code></dt>
<dd><p>Takes a <a href="LineString">linestring</a>, <a href="MultiLineString">multi-linestring</a>, <a href="MultiPolygon">multi-polygon</a>, or <a href="Polygon">polygon</a> and returns <a href="Point">points</a> at all self-intersections.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#polylineToFeatureLinestring">polylineToFeatureLinestring(polyline)</a> ⇒ <code>Feature.Polyline</code></dt>
<dd><p>[polylineToFeatureLinestring description]</p>
</dd>
<dt><a href="#trimPaths">trimPaths(arrayLatLng1, arrayLatLng2)</a> ⇒ <code>Array</code></dt>
<dd><p>Encuentra los puntos en donde dos polilíneas se cruzan</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_google.maps">google.maps</a></dt>
<dd><p>The Google Maps Namespace</p>
</dd>
</dl>

<a name="kinks"></a>

## kinks ⇒ <code>FeatureCollection.&lt;Point&gt;</code>
Takes a [linestring](LineString), [multi-linestring](MultiLineString), [multi-polygon](MultiPolygon), or [polygon](Polygon) and returns [points](Point) at all self-intersections.

**Kind**: global variable  
**Returns**: <code>FeatureCollection.&lt;Point&gt;</code> - self-intersections  

| Param | Type | Description |
| --- | --- | --- |
| featureIn | <code>Feature.&lt;(LineString\|MultiLineString\|MultiPolygon\|Polygon)&gt;</code> | input feature |

**Example**  
```js
var poly = turf.polygon([[
  [-12.034835, 8.901183],
  [-12.060413, 8.899826],
  [-12.03638, 8.873199],
  [-12.059383, 8.871418],
  [-12.034835, 8.901183]
]]);

var kinks = turf.kinks(poly);

//addToMap
var addToMap = [poly, kinks]
```
<a name="polylineToFeatureLinestring"></a>

## polylineToFeatureLinestring(polyline) ⇒ <code>Feature.Polyline</code>
[polylineToFeatureLinestring description]

**Kind**: global function  
**Returns**: <code>Feature.Polyline</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| polyline | <code>Array.&lt;external:google.maps.LatLng&gt;</code> | [description] |

<a name="trimPaths"></a>

## trimPaths(arrayLatLng1, arrayLatLng2) ⇒ <code>Array</code>
Encuentra los puntos en donde dos polilíneas se cruzan

**Kind**: global function  
**Returns**: <code>Array</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| arrayLatLng1 | <code>Array.&lt;external:google.maps.LatLng&gt;</code> | array de posiciones [external:google.maps.LatLng](external:google.maps.LatLng) |
| arrayLatLng2 | <code>Array.&lt;external:google.maps.LatLng&gt;</code> | array de posiciones [external:google.maps.LatLng](external:google.maps.LatLng) |

<a name="external_google.maps"></a>

## google.maps
The Google Maps Namespace

**Kind**: global external  
**See**: [Google Maps API](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/)  
