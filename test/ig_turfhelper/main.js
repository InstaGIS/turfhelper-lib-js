(function(QUnit) {

    QUnit.module("turfHelpers Entities");

    QUnit.test('turfHelpers.along should be if type function', function(assert) {
        assert.equal(typeof turfHelper.along, 'function', 'turfHelpers.along should be if type function');
    });
    QUnit.test('turfHelpers.arrayToFeaturePoints should be if type function', function(assert) {
        assert.equal(typeof turfHelper.arrayToFeaturePoints, 'function', 'turfHelpers.arrayToFeaturePoints should be if type function');
    });
    QUnit.test('turfHelpers.createbuffer should be if type function', function(assert) {
        assert.equal(typeof turfHelper.createbuffer, 'function', 'turfHelpers.createbuffer should be if type function');
    });
    QUnit.test('turfHelpers.centroid should be if type function', function(assert) {
        assert.equal(typeof turfHelper.centroid, 'function', 'turfHelpers.centroid should be if type function');
    });
    QUnit.test('turfHelpers.cleanFeaturePolygon should be if type function', function(assert) {
        assert.equal(typeof turfHelper.cleanFeaturePolygon, 'function', 'turfHelpers.cleanFeaturePolygon should be if type function');
    });
    QUnit.test('turfHelpers.latlngToPoint should be if type function', function(assert) {
        assert.equal(typeof turfHelper.latlngToPoint, 'function', 'turfHelpers.latlngToPoint should be if type function');
    });
    QUnit.test('turfHelpers.pointInPolygon should be if type function', function(assert) {
        assert.equal(typeof turfHelper.pointInPolygon, 'function', 'turfHelpers.pointInPolygon should be if type function');
    });
    QUnit.test('turfHelpers.polygonToFeaturePolygon should be if type function', function(assert) {
        assert.equal(typeof turfHelper.polygonToFeaturePolygon, 'function', 'turfHelpers.polygonToFeaturePolygon should be if type function');
    });
    QUnit.test('turfHelpers.representGeometry should be if type function', function(assert) {
        assert.equal(typeof turfHelper.representGeometry, 'function', 'turfHelpers.representGeometry should be if type function');
    });
    QUnit.test('turfHelpers.simplifyFeature should be if type function', function(assert) {
        assert.equal(typeof turfHelper.simplifyFeature, 'function', 'turfHelpers.simplifyFeature should be if type function');
    });
    QUnit.test('turfHelpers.simplifyGeometry should be if type function', function(assert) {
        assert.equal(typeof turfHelper.simplifyGeometry, 'function', 'turfHelpers.simplifyGeometry should be if type function');
    });
    QUnit.test('turfHelpers.simplifyPointArray should be if type function', function(assert) {
        assert.equal(typeof turfHelper.simplifyPointArray, 'function', 'turfHelpers.simplifyPointArray should be if type function');
    });
    QUnit.test('turfHelpers.toCoord should be if type function', function(assert) {
        assert.equal(typeof turfHelper.toCoord, 'function', 'turfHelpers.toCoord should be if type function');
    });
    QUnit.test('turfHelpers.toCoords should be if type function', function(assert) {
        assert.equal(typeof turfHelper.toCoords, 'function', 'turfHelpers.toCoords should be if type function');
    });
    QUnit.test('turfHelpers.toLatLng should be if type function', function(assert) {
        assert.equal(typeof turfHelper.toLatLng, 'function', 'turfHelpers.toLatLng should be if type function');
    });
    QUnit.test('turfHelpers.toLatLngs should be if type function', function(assert) {
        assert.equal(typeof turfHelper.toLatLngs, 'function', 'turfHelpers.toLatLngs should be if type function');
    });
    QUnit.test('turfHelpers.trimPaths should be if type function', function(assert) {
        assert.equal(typeof turfHelper.trimPaths, 'function', 'turfHelpers.trimPaths should be if type function');
    });
    QUnit.test('turfHelpers.union should be if type function', function(assert) {
        assert.equal(typeof turfHelper.union, 'function', 'turfHelpers.union should be if type function');
    });
    QUnit.test('turfHelpers.verticesInPolygon should be if type function', function(assert) {
        assert.equal(typeof turfHelper.verticesInPolygon, 'function', 'turfHelpers.verticesInPolygon should be if type function');
    });

})(QUnit);
