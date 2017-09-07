(function (QUnit) {

    QUnit.module("turfHelpers Entities");

    QUnit.test('turfHelpers.along should be of type function', function (assert) {
        assert.equal(typeof turfHelper.along, 'function', 'turfHelpers.along should be of type function');
    });
    QUnit.test('turfHelpers.arrayToFeaturePoints should be of type function', function (assert) {
        assert.equal(typeof turfHelper.arrayToFeaturePoints, 'function', 'turfHelpers.arrayToFeaturePoints should be of type function');
    });

    QUnit.test('turfHelpers.centroid should be of type function', function (assert) {
        assert.equal(typeof turfHelper.centroid, 'function', 'turfHelpers.centroid should be of type function');
    });

    QUnit.test('turfHelpers.pointInPolygon should be of type function', function (assert) {
        assert.equal(typeof turfHelper.pointInPolygon, 'function', 'turfHelpers.pointInPolygon should be of type function');
    });


    QUnit.test('turfHelpers.toLatLngs should be of type function', function (assert) {
        assert.equal(typeof turfHelper.toLatLngs, 'function', 'turfHelpers.toLatLngs should be of type function');
    });

    QUnit.test('turfHelpers.union should be of type function', function (assert) {
        assert.equal(typeof turfHelper.union, 'function', 'turfHelpers.union should be of type function');
    });


    QUnit.test('google.maps should be of type object', function (assert) {
        assert.equal(typeof google.maps, 'object', 'google.maps should be of type object');
    });
})(QUnit);
