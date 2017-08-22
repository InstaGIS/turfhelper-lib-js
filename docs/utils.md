## Functions

<dl>
<dt><a href="#wktArrayToFeatureCollection">wktArrayToFeatureCollection(wktArray)</a> ⇒ <code>Object</code></dt>
<dd><p>Transforma un array de geometrías WKT en un FeatureCollection</p>
</dd>
<dt><a href="#representGeometry">representGeometry(parentObj, callback)</a> ⇒ <code>object</code></dt>
<dd><p>representGeometry: Obtiene distintas representaciones de acuerdo con lo obtenido en globalvars.globalmap.multipolygon</p>
</dd>
<dt><a href="#arrayToFeaturePolygon">arrayToFeaturePolygon(LatLngArray)</a> ⇒ <code>Feature.&lt;Polygon&gt;</code></dt>
<dd><p>Transforma un array de gmaps.LatLng en un Feature.Polygon</p>
</dd>
<dt><a href="#polygonToFeaturePolygon">polygonToFeaturePolygon(polygon)</a> ⇒ <code>Feature.&lt;Polygon&gt;</code></dt>
<dd><p>Convierte un polígono en un geojson Feature.<Polygon></p>
</dd>
<dt><a href="#arrayToFeaturePoints">arrayToFeaturePoints(latLngArray)</a> ⇒ <code>FeatureCollection</code></dt>
<dd><p>Transforma un array de gmaps.LatLng en un featurecollection geoJson
donde cada Feature es un punto del array de entrada</p>
</dd>
<dt><a href="#polygonToFeaturePolygonCollection">polygonToFeaturePolygonCollection(polygon)</a> ⇒ <code>FeatureCollection.&lt;Point&gt;</code></dt>
<dd><p>Convierte un gmaps.Polygon en un FeatureCollection de puntos</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_google.maps">google.maps</a></dt>
<dd><p>The Google Maps Namespace</p>
</dd>
</dl>

<a name="wktArrayToFeatureCollection"></a>

## wktArrayToFeatureCollection(wktArray) ⇒ <code>Object</code>
Transforma un array de geometrías WKT en un FeatureCollection

**Kind**: global function  
**Returns**: <code>Object</code> - FeatureCollection  

| Param | Type | Description |
| --- | --- | --- |
| wktArray | <code>Array.&lt;String&gt;</code> | Array de string WKT |

<a name="representGeometry"></a>

## representGeometry(parentObj, callback) ⇒ <code>object</code>
representGeometry: Obtiene distintas representaciones de acuerdo con lo obtenido en globalvars.globalmap.multipolygon

**Kind**: global function  
**Returns**: <code>object</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| parentObj | <code>Object</code> | object with a key named multipolygon and other calles contextMenu |
| callback | <code>function</code> | [description] |

<a name="representGeometry..geometryMultipolygon"></a>

### representGeometry~geometryMultipolygon(multipolygon) ⇒ <code>array</code>
geometryMultipolygon: Obtiene las geometrias de los poligonos seleccionados

**Kind**: inner method of [<code>representGeometry</code>](#representGeometry)  
**Returns**: <code>array</code> - Array de Geometria/s  

| Param | Type | Description |
| --- | --- | --- |
| multipolygon | <code>Object</code> | object where each value is a google.maps.Polygon |

<a name="arrayToFeaturePolygon"></a>

## arrayToFeaturePolygon(LatLngArray) ⇒ <code>Feature.&lt;Polygon&gt;</code>
Transforma un array de gmaps.LatLng en un Feature.Polygon

**Kind**: global function  
**Returns**: <code>Feature.&lt;Polygon&gt;</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| LatLngArray | <code>Array.&lt;external:google.maps.LatLng&gt;</code> | [description] |

<a name="polygonToFeaturePolygon"></a>

## polygonToFeaturePolygon(polygon) ⇒ <code>Feature.&lt;Polygon&gt;</code>
Convierte un polígono en un geojson Feature.<Polygon>

**Kind**: global function  
**Returns**: <code>Feature.&lt;Polygon&gt;</code> - Feature resultante  

| Param | Type | Description |
| --- | --- | --- |
| polygon | <code>external:google.maps.Polygon</code> | un [external:google.maps.Polygon](external:google.maps.Polygon) a convertir |

<a name="arrayToFeaturePoints"></a>

## arrayToFeaturePoints(latLngArray) ⇒ <code>FeatureCollection</code>
Transforma un array de gmaps.LatLng en un featurecollection geoJson
donde cada Feature es un punto del array de entrada

**Kind**: global function  
**Returns**: <code>FeatureCollection</code> - geojson FeatureCollection  

| Param | Type | Description |
| --- | --- | --- |
| latLngArray | <code>Array.&lt;external:google.maps.LatLng&gt;</code> | array de posiciones [external:google.maps.LatLng](external:google.maps.LatLng) |

<a name="polygonToFeaturePolygonCollection"></a>

## polygonToFeaturePolygonCollection(polygon) ⇒ <code>FeatureCollection.&lt;Point&gt;</code>
Convierte un gmaps.Polygon en un FeatureCollection de puntos

**Kind**: global function  
**Returns**: <code>FeatureCollection.&lt;Point&gt;</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| polygon | <code>external:google.maps.Polygon</code> | [description] |

<a name="external_google.maps"></a>

## google.maps
The Google Maps Namespace

**Kind**: global external  
**See**: [Google Maps API](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/)  
