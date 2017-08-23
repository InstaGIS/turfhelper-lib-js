(function (QUnit) {

    QUnit.module("turfHelpers Kinks");

    var hourglass_in = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-50, 5],
                    [-40, -10],
                    [-50, -10],
                    [-40, 5],
                    [-50, 5]
                ]
            ]
        }
    };

    var hourglass_out = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-45, -2.5]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-45, -2.5]
                }
            }
        ]
    };
    var multipolygon_in = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [-49.43847656249999, -8.798225459016345],
                        [-39.7705078125, -8.798225459016345],
                        [-39.7705078125, 0.4833927027896987],
                        [-49.43847656249999, 0.4833927027896987],
                        [-49.43847656249999, -8.798225459016345]
                    ]
                ],
                [
                    [
                        [-45, -13.795406203132826],
                        [-35.2001953125, -13.795406203132826],
                        [-35.2001953125, -4.083452772038619],
                        [-45, -4.083452772038619],
                        [-45, -13.795406203132826]
                    ]
                ]
            ]
        }
    };

    var multipolygon_out = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-45, -8.798225459016345]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-39.7705078125, -4.08345277203862]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-39.7705078125, -4.083452772038619]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-45, -8.798225459016345]
                }
            }
        ]
    };


    QUnit.test('turfHelpers.kinks should be of type function', function (assert) {
        assert.equal(typeof turfHelper.kinks, 'function', 'turfHelpers.kinks should be of type function');
    });

    QUnit.test('turfHelpers.kinks finds kinks correctly on a multipolygon', function (assert) {
        var result = turfHelper.kinks(multipolygon_in);
        assert.deepEqual(result, multipolygon_out, 'finds kinks correctly on a multipolygon');
    });

    QUnit.test('turfHelpers.kinks finds kinks correctly on a polygon with one self intersection', function (assert) {
        var result = turfHelper.kinks(hourglass_in);
        assert.deepEqual(result, hourglass_out, 'finds kinks correctly on polygon with one self intersection');
    });
})(QUnit);
