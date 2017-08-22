## Objects

<dl>
<dt><a href="#Wkt">Wkt</a> : <code>object</code></dt>
<dd><p>The Wkt namespace.</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_google.maps">google.maps</a></dt>
<dd><p>The Google Maps Namespace</p>
</dd>
</dl>

<a name="Wkt"></a>

## Wkt : <code>object</code>
The Wkt namespace.

**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| delimiter | <code>String</code> | The default delimiter for separating components of atomic geometry (coordinates) |


* [Wkt](#Wkt) : <code>object</code>
    * [.Wkt](#Wkt.Wkt)
        * [new Wkt(initializer)](#new_Wkt.Wkt_new)
        * _instance_
            * [.isRectangle](#Wkt.Wkt+isRectangle) ⇐ [<code>Wkt</code>](#Wkt.Wkt)
            * [.construct](#Wkt.Wkt+construct) ⇐ [<code>Wkt</code>](#Wkt.Wkt)
                * [.point(config, component)](#Wkt.Wkt+construct.point) ⇒ <code>external:google.maps.Marker</code>
                * [.multipoint(config)](#Wkt.Wkt+construct.multipoint) ⇒ <code>Array</code>
                * [.linestring(config, component)](#Wkt.Wkt+construct.linestring) ⇒ <code>gmaps.Polyline</code>
                * [.multilinestring(config)](#Wkt.Wkt+construct.multilinestring) ⇒ <code>Array</code>
                * [.box(config, component)](#Wkt.Wkt+construct.box) ⇒ <code>gmaps.Rectangle</code>
                * [.polygon(config, component)](#Wkt.Wkt+construct.polygon) ⇒ <code>gmaps.Polygon</code>
                * [.multipolygon(config)](#Wkt.Wkt+construct.multipolygon) ⇒ <code>Array</code>
            * [.isCollection()](#Wkt.Wkt+isCollection) ⇒ <code>Boolean</code>
            * [.sameCoords(a, b)](#Wkt.Wkt+sameCoords) ⇒ <code>Boolean</code>
            * [.fromObject(obj)](#Wkt.Wkt+fromObject) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
            * [.toObject(config)](#Wkt.Wkt+toObject) ⇒ <code>Object</code>
            * [.toString()](#Wkt.Wkt+toString)
            * [.fromJson(obj)](#Wkt.Wkt+fromJson) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
            * [.toJson()](#Wkt.Wkt+toJson) ⇒ <code>Object</code>
            * [.merge(wkt)](#Wkt.Wkt+merge) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
            * [.read(str)](#Wkt.Wkt+read) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
            * [.write(components)](#Wkt.Wkt+write) ⇒ <code>String</code>
            * [.deconstruct(obj, multiFlag)](#Wkt.Wkt+deconstruct) ⇒ <code>Object</code>
        * _static_
            * [.extract](#Wkt.Wkt.extract) : <code>object</code>
                * [.point(point)](#Wkt.Wkt.extract+point) ⇒ <code>String</code>
                * [.multipoint(multipoint)](#Wkt.Wkt.extract+multipoint) ⇒ <code>String</code>
                * [.linestring(linestring)](#Wkt.Wkt.extract+linestring) ⇒ <code>String</code>
                * [.multilinestring(multilinestring)](#Wkt.Wkt.extract+multilinestring) ⇒ <code>String</code>
                * [.polygon(polygon)](#Wkt.Wkt.extract+polygon) ⇒ <code>String</code>
                * [.multipolygon(multipolygon)](#Wkt.Wkt.extract+multipolygon) ⇒ <code>String</code>
                * [.box(multipolygon)](#Wkt.Wkt.extract+box) ⇒ <code>String</code>
            * [.ingest](#Wkt.Wkt.ingest) : <code>object</code>
                * [.point(str)](#Wkt.Wkt.ingest+point)
                * [.multipoint(str)](#Wkt.Wkt.ingest+multipoint)
                * [.linestring(str)](#Wkt.Wkt.ingest+linestring)
                * [.multilinestring(str)](#Wkt.Wkt.ingest+multilinestring)
                * [.polygon(str)](#Wkt.Wkt.ingest+polygon)
                * [.box(str)](#Wkt.Wkt.ingest+box)
                * [.multipolygon(str)](#Wkt.Wkt.ingest+multipolygon)
                * [.geometrycollection(str)](#Wkt.Wkt.ingest+geometrycollection)
    * [.isArray(obj)](#Wkt.isArray) ⇒ <code>Boolean</code>
    * [.trim(str, sub)](#Wkt.trim) ⇒ <code>String</code>

<a name="Wkt.Wkt"></a>

### Wkt.Wkt
**Kind**: static class of [<code>Wkt</code>](#Wkt)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| components | <code>Array</code> | Holder for atomic geometry objects (internal representation of geometric components) |
| delimiter | <code>String</code> | The default delimiter for separating components of atomic geometry (coordinates) |
| regExes | <code>Object</code> | Some regular expressions copied from OpenLayers.Format.WKT.js |
| type | <code>String</code> | The Well-Known Text name (e.g. 'point') of the geometry |
| wrapVerticies | <code>Boolean</code> | True to wrap vertices in MULTIPOINT geometries; If true: MULTIPOINT((30 10),(10 30),(40 40)); If false: MULTIPOINT(30 10,10 30,40 40) |


* [.Wkt](#Wkt.Wkt)
    * [new Wkt(initializer)](#new_Wkt.Wkt_new)
    * _instance_
        * [.isRectangle](#Wkt.Wkt+isRectangle) ⇐ [<code>Wkt</code>](#Wkt.Wkt)
        * [.construct](#Wkt.Wkt+construct) ⇐ [<code>Wkt</code>](#Wkt.Wkt)
            * [.point(config, component)](#Wkt.Wkt+construct.point) ⇒ <code>external:google.maps.Marker</code>
            * [.multipoint(config)](#Wkt.Wkt+construct.multipoint) ⇒ <code>Array</code>
            * [.linestring(config, component)](#Wkt.Wkt+construct.linestring) ⇒ <code>gmaps.Polyline</code>
            * [.multilinestring(config)](#Wkt.Wkt+construct.multilinestring) ⇒ <code>Array</code>
            * [.box(config, component)](#Wkt.Wkt+construct.box) ⇒ <code>gmaps.Rectangle</code>
            * [.polygon(config, component)](#Wkt.Wkt+construct.polygon) ⇒ <code>gmaps.Polygon</code>
            * [.multipolygon(config)](#Wkt.Wkt+construct.multipolygon) ⇒ <code>Array</code>
        * [.isCollection()](#Wkt.Wkt+isCollection) ⇒ <code>Boolean</code>
        * [.sameCoords(a, b)](#Wkt.Wkt+sameCoords) ⇒ <code>Boolean</code>
        * [.fromObject(obj)](#Wkt.Wkt+fromObject) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
        * [.toObject(config)](#Wkt.Wkt+toObject) ⇒ <code>Object</code>
        * [.toString()](#Wkt.Wkt+toString)
        * [.fromJson(obj)](#Wkt.Wkt+fromJson) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
        * [.toJson()](#Wkt.Wkt+toJson) ⇒ <code>Object</code>
        * [.merge(wkt)](#Wkt.Wkt+merge) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
        * [.read(str)](#Wkt.Wkt+read) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
        * [.write(components)](#Wkt.Wkt+write) ⇒ <code>String</code>
        * [.deconstruct(obj, multiFlag)](#Wkt.Wkt+deconstruct) ⇒ <code>Object</code>
    * _static_
        * [.extract](#Wkt.Wkt.extract) : <code>object</code>
            * [.point(point)](#Wkt.Wkt.extract+point) ⇒ <code>String</code>
            * [.multipoint(multipoint)](#Wkt.Wkt.extract+multipoint) ⇒ <code>String</code>
            * [.linestring(linestring)](#Wkt.Wkt.extract+linestring) ⇒ <code>String</code>
            * [.multilinestring(multilinestring)](#Wkt.Wkt.extract+multilinestring) ⇒ <code>String</code>
            * [.polygon(polygon)](#Wkt.Wkt.extract+polygon) ⇒ <code>String</code>
            * [.multipolygon(multipolygon)](#Wkt.Wkt.extract+multipolygon) ⇒ <code>String</code>
            * [.box(multipolygon)](#Wkt.Wkt.extract+box) ⇒ <code>String</code>
        * [.ingest](#Wkt.Wkt.ingest) : <code>object</code>
            * [.point(str)](#Wkt.Wkt.ingest+point)
            * [.multipoint(str)](#Wkt.Wkt.ingest+multipoint)
            * [.linestring(str)](#Wkt.Wkt.ingest+linestring)
            * [.multilinestring(str)](#Wkt.Wkt.ingest+multilinestring)
            * [.polygon(str)](#Wkt.Wkt.ingest+polygon)
            * [.box(str)](#Wkt.Wkt.ingest+box)
            * [.multipolygon(str)](#Wkt.Wkt.ingest+multipolygon)
            * [.geometrycollection(str)](#Wkt.Wkt.ingest+geometrycollection)

<a name="new_Wkt.Wkt_new"></a>

#### new Wkt(initializer)
An object for reading WKT strings and writing geographic features


| Param | Type | Description |
| --- | --- | --- |
| initializer | <code>String</code> | An optional WKT string for immediate read |

<a name="Wkt.Wkt+isRectangle"></a>

#### wkt.isRectangle ⇐ [<code>Wkt</code>](#Wkt.Wkt)
**Kind**: instance property of [<code>Wkt</code>](#Wkt.Wkt)  
**Extends**: [<code>Wkt</code>](#Wkt.Wkt)  
<a name="Wkt.Wkt+construct"></a>

#### wkt.construct ⇐ [<code>Wkt</code>](#Wkt.Wkt)
**Kind**: instance property of [<code>Wkt</code>](#Wkt.Wkt)  
**Extends**: [<code>Wkt</code>](#Wkt.Wkt)  

* [.construct](#Wkt.Wkt+construct) ⇐ [<code>Wkt</code>](#Wkt.Wkt)
    * [.point(config, component)](#Wkt.Wkt+construct.point) ⇒ <code>external:google.maps.Marker</code>
    * [.multipoint(config)](#Wkt.Wkt+construct.multipoint) ⇒ <code>Array</code>
    * [.linestring(config, component)](#Wkt.Wkt+construct.linestring) ⇒ <code>gmaps.Polyline</code>
    * [.multilinestring(config)](#Wkt.Wkt+construct.multilinestring) ⇒ <code>Array</code>
    * [.box(config, component)](#Wkt.Wkt+construct.box) ⇒ <code>gmaps.Rectangle</code>
    * [.polygon(config, component)](#Wkt.Wkt+construct.polygon) ⇒ <code>gmaps.Polygon</code>
    * [.multipolygon(config)](#Wkt.Wkt+construct.multipolygon) ⇒ <code>Array</code>

<a name="Wkt.Wkt+construct.point"></a>

##### construct.point(config, component) ⇒ <code>external:google.maps.Marker</code>
Creates the framework's equivalent point geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |
| component | <code>Object</code> | An optional component to build from |

<a name="Wkt.Wkt+construct.multipoint"></a>

##### construct.multipoint(config) ⇒ <code>Array</code>
Creates the framework's equivalent multipoint geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  
**Returns**: <code>Array</code> - Array containing multiple gmaps.Marker  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |

<a name="Wkt.Wkt+construct.linestring"></a>

##### construct.linestring(config, component) ⇒ <code>gmaps.Polyline</code>
Creates the framework's equivalent linestring geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |
| component | <code>Object</code> | An optional component to build from |

<a name="Wkt.Wkt+construct.multilinestring"></a>

##### construct.multilinestring(config) ⇒ <code>Array</code>
Creates the framework's equivalent multilinestring geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  
**Returns**: <code>Array</code> - Array containing multiple gmaps.Polyline instances  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |

<a name="Wkt.Wkt+construct.box"></a>

##### construct.box(config, component) ⇒ <code>gmaps.Rectangle</code>
Creates the framework's equivalent Box or Rectangle geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |
| component | <code>Object</code> | An optional component to build from |

<a name="Wkt.Wkt+construct.polygon"></a>

##### construct.polygon(config, component) ⇒ <code>gmaps.Polygon</code>
Creates the framework's equivalent polygon geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |
| component | <code>Object</code> | An optional component to build from |

<a name="Wkt.Wkt+construct.multipolygon"></a>

##### construct.multipolygon(config) ⇒ <code>Array</code>
Creates the framework's equivalent multipolygon geometry object.

**Kind**: static method of [<code>construct</code>](#Wkt.Wkt+construct)  
**Returns**: <code>Array</code> - Array containing multiple gmaps.Polygon  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional properties hash the object should use |

<a name="Wkt.Wkt+isCollection"></a>

#### wkt.isCollection() ⇒ <code>Boolean</code>
Returns true if the internal geometry is a collection of geometries.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: <code>Boolean</code> - Returns true when it is a collection  
<a name="Wkt.Wkt+sameCoords"></a>

#### wkt.sameCoords(a, b) ⇒ <code>Boolean</code>
Compares two x,y coordinates for equality.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | An object with x and y properties |
| b | <code>Object</code> | An object with x and y properties |

<a name="Wkt.Wkt+fromObject"></a>

#### wkt.fromObject(obj) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
Sets internal geometry (components) from framework geometry (e.g.
Google Polygon objects or google.maps.Polygon).

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: [<code>Wkt</code>](#Wkt.Wkt) - The object itself  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The framework-dependent geometry representation |

<a name="Wkt.Wkt+toObject"></a>

#### wkt.toObject(config) ⇒ <code>Object</code>
Creates external geometry objects based on a plug-in framework's
construction methods and available geometry classes.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: <code>Object</code> - The framework-dependent geometry representation  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | An optional framework-dependent properties specification |

<a name="Wkt.Wkt+toString"></a>

#### wkt.toString()
Returns the WKT string representation; the same as the write() method.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
<a name="Wkt.Wkt+fromJson"></a>

#### wkt.fromJson(obj) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
Parses a JSON representation as an Object.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: [<code>Wkt</code>](#Wkt.Wkt) - The object itself  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | An Object with the GeoJSON schema |

<a name="Wkt.Wkt+toJson"></a>

#### wkt.toJson() ⇒ <code>Object</code>
Creates a JSON representation, with the GeoJSON schema, of the geometry.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: <code>Object</code> - The corresponding GeoJSON representation  
<a name="Wkt.Wkt+merge"></a>

#### wkt.merge(wkt) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
Absorbs the geometry of another Wkt.Wkt instance, merging it with its own,
creating a collection (MULTI-geometry) based on their types, which must agree.
For example, creates a MULTIPOLYGON from a POLYGON type merged with another
POLYGON type, or adds a POLYGON instance to a MULTIPOLYGON instance.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: [<code>Wkt</code>](#Wkt.Wkt) - The object itself  

| Param | Type | Description |
| --- | --- | --- |
| wkt | <code>String</code> | A Wkt.Wkt object |

<a name="Wkt.Wkt+read"></a>

#### wkt.read(str) ⇒ [<code>Wkt</code>](#Wkt.Wkt)
Reads a WKT string, validating and incorporating it.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: [<code>Wkt</code>](#Wkt.Wkt) - The object itself  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT or GeoJSON string |

<a name="Wkt.Wkt+write"></a>

#### wkt.write(components) ⇒ <code>String</code>
Writes a WKT string.

**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: <code>String</code> - The corresponding WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array</code> | An Array of internal geometry objects |

<a name="Wkt.Wkt+deconstruct"></a>

#### wkt.deconstruct(obj, multiFlag) ⇒ <code>Object</code>
**Kind**: instance method of [<code>Wkt</code>](#Wkt.Wkt)  
**Extends**: [<code>Wkt</code>](#Wkt.Wkt)  
**Returns**: <code>Object</code> - A hash of the 'type' and 'components' thus derived, plus the WKT string of the feature.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | An instance of one of the framework's geometry classes |
| multiFlag | <code>Boolean</code> | If true, then the deconstructor will be forced to return a MultiGeometry (multipoint, multilinestring or multipolygon) |

<a name="Wkt.Wkt.extract"></a>

#### Wkt.extract : <code>object</code>
This object contains functions as property names that extract WKT
strings from the internal representation.

**Kind**: static namespace of [<code>Wkt</code>](#Wkt.Wkt)  

* [.extract](#Wkt.Wkt.extract) : <code>object</code>
    * [.point(point)](#Wkt.Wkt.extract+point) ⇒ <code>String</code>
    * [.multipoint(multipoint)](#Wkt.Wkt.extract+multipoint) ⇒ <code>String</code>
    * [.linestring(linestring)](#Wkt.Wkt.extract+linestring) ⇒ <code>String</code>
    * [.multilinestring(multilinestring)](#Wkt.Wkt.extract+multilinestring) ⇒ <code>String</code>
    * [.polygon(polygon)](#Wkt.Wkt.extract+polygon) ⇒ <code>String</code>
    * [.multipolygon(multipolygon)](#Wkt.Wkt.extract+multipolygon) ⇒ <code>String</code>
    * [.box(multipolygon)](#Wkt.Wkt.extract+box) ⇒ <code>String</code>

<a name="Wkt.Wkt.extract+point"></a>

##### extract.point(point) ⇒ <code>String</code>
Return a WKT string representing atomic (point) geometry

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>Object</code> | An object with x and y properties |

<a name="Wkt.Wkt.extract+multipoint"></a>

##### extract.multipoint(multipoint) ⇒ <code>String</code>
Return a WKT string representing multiple atoms (points)

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| multipoint | <code>Array</code> | Multiple x-and-y objects |

<a name="Wkt.Wkt.extract+linestring"></a>

##### extract.linestring(linestring) ⇒ <code>String</code>
Return a WKT string representing a chain (linestring) of atoms

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| linestring | <code>Array</code> | Multiple x-and-y objects |

<a name="Wkt.Wkt.extract+multilinestring"></a>

##### extract.multilinestring(multilinestring) ⇒ <code>String</code>
Return a WKT string representing multiple chains (multilinestring) of atoms

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| multilinestring | <code>Array</code> | Multiple of multiple x-and-y objects |

<a name="Wkt.Wkt.extract+polygon"></a>

##### extract.polygon(polygon) ⇒ <code>String</code>
Return a WKT string representing multiple atoms in closed series (polygon)

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| polygon | <code>Array</code> | Collection of ordered x-and-y objects |

<a name="Wkt.Wkt.extract+multipolygon"></a>

##### extract.multipolygon(multipolygon) ⇒ <code>String</code>
Return a WKT string representing multiple closed series (multipolygons) of multiple atoms

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| multipolygon | <code>Array</code> | Collection of ordered x-and-y objects |

<a name="Wkt.Wkt.extract+box"></a>

##### extract.box(multipolygon) ⇒ <code>String</code>
Return a WKT string representing a 2DBox

**Kind**: instance method of [<code>extract</code>](#Wkt.Wkt.extract)  
**Returns**: <code>String</code> - The WKT representation  

| Param | Type | Description |
| --- | --- | --- |
| multipolygon | <code>Array</code> | Collection of ordered x-and-y objects |

<a name="Wkt.Wkt.ingest"></a>

#### Wkt.ingest : <code>object</code>
This object contains functions as property names that ingest WKT
strings into the internal representation.

**Kind**: static namespace of [<code>Wkt</code>](#Wkt.Wkt)  

* [.ingest](#Wkt.Wkt.ingest) : <code>object</code>
    * [.point(str)](#Wkt.Wkt.ingest+point)
    * [.multipoint(str)](#Wkt.Wkt.ingest+multipoint)
    * [.linestring(str)](#Wkt.Wkt.ingest+linestring)
    * [.multilinestring(str)](#Wkt.Wkt.ingest+multilinestring)
    * [.polygon(str)](#Wkt.Wkt.ingest+polygon)
    * [.box(str)](#Wkt.Wkt.ingest+box)
    * [.multipolygon(str)](#Wkt.Wkt.ingest+multipolygon)
    * [.geometrycollection(str)](#Wkt.Wkt.ingest+geometrycollection)

<a name="Wkt.Wkt.ingest+point"></a>

##### ingest.point(str)
Return point feature given a point WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the point |

<a name="Wkt.Wkt.ingest+multipoint"></a>

##### ingest.multipoint(str)
Return a multipoint feature given a multipoint WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the multipoint |

<a name="Wkt.Wkt.ingest+linestring"></a>

##### ingest.linestring(str)
Return a linestring feature given a linestring WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the linestring |

<a name="Wkt.Wkt.ingest+multilinestring"></a>

##### ingest.multilinestring(str)
Return a multilinestring feature given a multilinestring WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the multilinestring |

<a name="Wkt.Wkt.ingest+polygon"></a>

##### ingest.polygon(str)
Return a polygon feature given a polygon WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the polygon |

<a name="Wkt.Wkt.ingest+box"></a>

##### ingest.box(str)
Return box vertices (which would become the Rectangle bounds) given a Box WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the box |

<a name="Wkt.Wkt.ingest+multipolygon"></a>

##### ingest.multipolygon(str)
Return a multipolygon feature given a multipolygon WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the multipolygon |

<a name="Wkt.Wkt.ingest+geometrycollection"></a>

##### ingest.geometrycollection(str)
Return an array of features given a geometrycollection WKT fragment.

**Kind**: instance method of [<code>ingest</code>](#Wkt.Wkt.ingest)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A WKT fragment representing the geometry collection |

<a name="Wkt.isArray"></a>

### Wkt.isArray(obj) ⇒ <code>Boolean</code>
Determines whether or not the passed Object is an Array.

**Kind**: static method of [<code>Wkt</code>](#Wkt)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The Object in question |

<a name="Wkt.trim"></a>

### Wkt.trim(str, sub) ⇒ <code>String</code>
Removes given character String(s) from a String.

**Kind**: static method of [<code>Wkt</code>](#Wkt)  
**Returns**: <code>String</code> - The trimmed string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The String to search |
| sub | <code>String</code> | The String character(s) to trim |

<a name="external_google.maps"></a>

## google.maps
The Google Maps Namespace

**Kind**: global external  
**See**: [Google Maps API](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/)  
