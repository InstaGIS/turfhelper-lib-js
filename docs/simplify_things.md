## Functions

<dl>
<dt><a href="#simplifyGeometry">simplifyGeometry(geometry, tolerance, highQuality)</a> ⇒ <code>object</code></dt>
<dd><p>Simplifica una geometría usando Douglas Peucker</p>
</dd>
<dt><a href="#simplifyPointArray">simplifyPointArray(coordArray, tolerance, highQuality)</a> ⇒ <code>Array</code></dt>
<dd><p>Simplifica un conjunto de coordenadas</p>
</dd>
<dt><a href="#simplifyFeature">simplifyFeature(Feature, tolerance, highQuality)</a> ⇒ <code>Feature</code></dt>
<dd><p>Simplifica un geoson Feature</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_google.maps">google.maps</a></dt>
<dd><p>The Google Maps Namespace</p>
</dd>
</dl>

<a name="simplifyGeometry"></a>

## simplifyGeometry(geometry, tolerance, highQuality) ⇒ <code>object</code>
Simplifica una geometría usando Douglas Peucker

**Kind**: global function  
**Returns**: <code>object</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| geometry | <code>Feature.&lt;(Polygon\|MultiPolygon)&gt;</code> | polígono o multipolígono geoJson |
| tolerance | <code>number</code> | [description] |
| highQuality | <code>boolean</code> | [description] |

<a name="simplifyPointArray"></a>

## simplifyPointArray(coordArray, tolerance, highQuality) ⇒ <code>Array</code>
Simplifica un conjunto de coordenadas

**Kind**: global function  
**Returns**: <code>Array</code> - Array de coordenadas [lng,lat]  

| Param | Type | Description |
| --- | --- | --- |
| coordArray | <code>Array</code> | [description] |
| tolerance | <code>Number</code> | [description] |
| highQuality | <code>Boolean</code> | [description] |

<a name="simplifyFeature"></a>

## simplifyFeature(Feature, tolerance, highQuality) ⇒ <code>Feature</code>
Simplifica un geoson Feature

**Kind**: global function  
**Returns**: <code>Feature</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| Feature | <code>Feature.&lt;(Polygon\|MultiPolygon)&gt;</code> | [description] |
| tolerance | <code>Number</code> | [description] |
| highQuality | <code>Boolean</code> | [description] |

<a name="external_google.maps"></a>

## google.maps
The Google Maps Namespace

**Kind**: global external  
**See**: [Google Maps API](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/)  
