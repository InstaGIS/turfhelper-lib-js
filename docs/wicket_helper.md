<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## endsWith

**Meta**

-   **license**: Copyright (C) 2012 K. Arthur Endsley (kaendsle@mtu.edu)
     Michigan Tech Research Institute (MTRI)
     3600 Green Court, Suite 100, Ann Arbor, MI, 48105

     This program is free software: you can redistribute it and/or modify
     it under the terms of the GNU General Public License as published by
     the Free Software Foundation, either version 3 of the License, or
     (at your option) any later version.

     This program is distributed in the hope that it will be useful,
     but WITHOUT ANY WARRANTY; without even the implied warranty of
     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     GNU General Public License for more details.

     You should have received a copy of the GNU General Public License
     along with this program.  If not, see &lt;http&#x3A;//www.gnu.org/licenses/>.

## Wkt.isArray

Determines whether or not the passed Object is an Array.

**Parameters**

-   `obj`  {Object}    The Object in question

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Wkt.trim

Removes given character String(s) from a String.

**Parameters**

-   `str`  {String}    The String to search
-   `sub`  {String}    The String character(s) to trim

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The trimmed string

## Wkt.Wkt

An object for reading WKT strings and writing geographic features

**Parameters**

-   `initializer`  {String}    An optional WKT string for immediate read

**Properties**

-   `components` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Holder for atomic geometry objects (internal representation of geometric components)
-   `delimiter` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The default delimiter for separating components of atomic geometry (coordinates)
-   `regExes` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Some regular expressions copied from OpenLayers.Format.WKT.js
-   `type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The Well-Known Text name (e.g. 'point') of the geometry
-   `wrapVerticies` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True to wrap vertices in MULTIPOINT geometries; If true: MULTIPOINT((30 10),(10 30),(40 40)); If false: MULTIPOINT(30 10,10 30,40 40)

Returns **[Wkt.Wkt](#wktwkt)** 

## Wkt.Wkt.extract

This object contains functions as property names that extract WKT
strings from the internal representation.

## Wkt.Wkt.ingest

This object contains functions as property names that ingest WKT
strings into the internal representation.

## isRectangle

## construct

## deconstruct

**Parameters**

-   `obj`  {Object}    An instance of one of the framework's geometry classes
-   `multiFlag`  {Boolean} If true, then the deconstructor will be forced to return a MultiGeometry (multipoint, multilinestring or multipolygon)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A hash of the 'type' and 'components' thus derived, plus the WKT string of the feature.

## isCollection

Returns true if the internal geometry is a collection of geometries.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns true when it is a collection

## sameCoords

Compares two x,y coordinates for equality.

**Parameters**

-   `a`  {Object}    An object with x and y properties
-   `b`  {Object}    An object with x and y properties

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## fromObject

Sets internal geometry (components) from framework geometry (e.g.
Google Polygon objects or google.maps.Polygon).

**Parameters**

-   `obj`  {Object}    The framework-dependent geometry representation

Returns **[Wkt.Wkt](#wktwkt)** The object itself

## toObject

Creates external geometry objects based on a plug-in framework's
construction methods and available geometry classes.

**Parameters**

-   `config`  {Object}    An optional framework-dependent properties specification

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The framework-dependent geometry representation

## toString

Returns the WKT string representation; the same as the write() method.

**Parameters**

-   `config`  

## fromJson

Parses a JSON representation as an Object.

**Parameters**

-   `obj`  {Object}    An Object with the GeoJSON schema

Returns **[Wkt.Wkt](#wktwkt)** The object itself

## toJson

Creates a JSON representation, with the GeoJSON schema, of the geometry.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The corresponding GeoJSON representation

## merge

Absorbs the geometry of another Wkt.Wkt instance, merging it with its own,
creating a collection (MULTI-geometry) based on their types, which must agree.
For example, creates a MULTIPOLYGON from a POLYGON type merged with another
POLYGON type, or adds a POLYGON instance to a MULTIPOLYGON instance.

**Parameters**

-   `wkt`  {String}    A Wkt.Wkt object

Returns **[Wkt.Wkt](#wktwkt)** The object itself

## read

Reads a WKT string, validating and incorporating it.

**Parameters**

-   `str`  {String}    A WKT or GeoJSON string

Returns **[Wkt.Wkt](#wktwkt)** The object itself

## write

Writes a WKT string.

**Parameters**

-   `components`  {Array}     An Array of internal geometry objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The corresponding WKT representation

## point

Return a WKT string representing atomic (point) geometry

**Parameters**

-   `point`  {Object}    An object with x and y properties

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## multipoint

Return a WKT string representing multiple atoms (points)

**Parameters**

-   `multipoint`  {Array}     Multiple x-and-y objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## linestring

Return a WKT string representing a chain (linestring) of atoms

**Parameters**

-   `linestring`  {Array}     Multiple x-and-y objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## multilinestring

Return a WKT string representing multiple chains (multilinestring) of atoms

**Parameters**

-   `multilinestring`  {Array}     Multiple of multiple x-and-y objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## polygon

Return a WKT string representing multiple atoms in closed series (polygon)

**Parameters**

-   `polygon`  {Array}     Collection of ordered x-and-y objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## multipolygon

Return a WKT string representing multiple closed series (multipolygons) of multiple atoms

**Parameters**

-   `multipolygon`  {Array}     Collection of ordered x-and-y objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## box

Return a WKT string representing a 2DBox

**Parameters**

-   `box`  
-   `multipolygon`  {Array}     Collection of ordered x-and-y objects

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The WKT representation

## point

Return point feature given a point WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the point

## multipoint

Return a multipoint feature given a multipoint WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the multipoint

## linestring

Return a linestring feature given a linestring WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the linestring

## multilinestring

Return a multilinestring feature given a multilinestring WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the multilinestring

## polygon

Return a polygon feature given a polygon WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the polygon

## box

Return box vertices (which would become the Rectangle bounds) given a Box WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the box

## multipolygon

Return a multipolygon feature given a multipolygon WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the multipolygon

## geometrycollection

Return an array of features given a geometrycollection WKT fragment.

**Parameters**

-   `str`  {String}    A WKT fragment representing the geometry collection

## point

Creates the framework's equivalent point geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use
-   `component`  {Object}    An optional component to build from

Returns **[google.maps.Marker](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Marker.md)** 

## multipoint

Creates the framework's equivalent multipoint geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array containing multiple google.maps.Marker

## linestring

Creates the framework's equivalent linestring geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use
-   `component`  {Object}    An optional component to build from

Returns **[google.maps.Polyline](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polyline.md)** 

## multilinestring

Creates the framework's equivalent multilinestring geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array containing multiple google.maps.Polyline instances

## box

Creates the framework's equivalent Box or Rectangle geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use
-   `component`  {Object}    An optional component to build from

Returns **[google.maps.Rectangle](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Rectangle.md)** 

## polygon

Creates the framework's equivalent polygon geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use
-   `component`  {Object}    An optional component to build from

Returns **[google.maps.Polygon](https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polygon.md)** 

## multipolygon

Creates the framework's equivalent multipolygon geometry object.

**Parameters**

-   `config`  {Object}    An optional properties hash the object should use

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array containing multiple google.maps.Polygon
