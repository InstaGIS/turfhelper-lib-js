SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "gmaps": "https://maps.googleapis.com/maps/api/js",
        "turfhelper-lib-js/": "src/"
    },
    browserConfig: {
        "baseURL": "/"
    },
    meta: {
        "https://maps.googleapis.com/maps/api/*": {
            "build": false,
            "parameters": {
                "v": "3.exp",
                "libraries": "visualization,places,drawing,geometry",
                "key": "AIzaSyCIa4v2dHNb4jMpdLaMCHy8vZZCj8HYv40"
            },
            "loader": "gmap"
        }
    },
    devConfig: {
        "map": {
            "lodash-es": "npm:lodash-es@4.17.4",
            "@turf/kinks": "npm:@turf/kinks@4.6.0",
            "@turf/buffer": "npm:@turf/buffer@4.6.1",
            "@turf/simplify": "npm:@turf/simplify@4.6.0",
            "@turf/along": "npm:@turf/along@4.6.0",
            "@turf/inside": "npm:@turf/inside@4.6.0",
            "@turf/union": "npm:@turf/union@4.6.0",
            "@turf/centroid": "npm:@turf/centroid@4.6.1",
            "@turf/helpers": "npm:@turf/helpers@4.6.0",
            "@turf/line-slice": "npm:@turf/line-slice@4.6.0",
            "@turf/concave": "npm:@turf/concave@4.6.0"
        },
        "packages": {
            "npm:@turf/kinks@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0"
                }
            },
            "npm:@turf/buffer@4.6.1": {
                "map": {
                    "jsts": "npm:jsts@1.3.0",
                    "@turf/meta": "npm:@turf/meta@4.6.0",
                    "@turf/center": "npm:@turf/center@4.6.1",
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "d3-geo": "npm:d3-geo@1.6.4"
                }
            },
            "npm:@turf/center@4.6.1": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/bbox": "npm:@turf/bbox@4.6.0"
                }
            },
            "npm:d3-geo@1.6.4": {
                "map": {
                    "d3-array": "npm:d3-array@1.2.0"
                }
            },
            "npm:@turf/bbox@4.6.0": {
                "map": {
                    "@turf/meta": "npm:@turf/meta@4.6.0"
                }
            },
            "npm:@turf/simplify@4.6.0": {
                "map": {
                    "simplify-js": "npm:simplify-js@1.2.1"
                }
            },
            "npm:@turf/along@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/bearing": "npm:@turf/bearing@4.6.0",
                    "@turf/destination": "npm:@turf/destination@4.6.0",
                    "@turf/distance": "npm:@turf/distance@4.6.0"
                }
            },
            "npm:@turf/destination@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/invariant": "npm:@turf/invariant@4.6.0"
                }
            },
            "npm:@turf/distance@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/invariant": "npm:@turf/invariant@4.6.0"
                }
            },
            "npm:@turf/bearing@4.6.0": {
                "map": {
                    "@turf/invariant": "npm:@turf/invariant@4.6.0"
                }
            },
            "npm:@turf/union@4.6.0": {
                "map": {
                    "jsts": "npm:jsts@1.3.0"
                }
            },
            "npm:@turf/centroid@4.6.1": {
                "map": {
                    "@turf/meta": "npm:@turf/meta@4.6.0",
                    "@turf/helpers": "npm:@turf/helpers@4.6.0"
                }
            },
            "npm:@turf/line-slice@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/point-on-line": "npm:@turf/point-on-line@4.6.0"
                }
            },
            "npm:@turf/point-on-line@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/distance": "npm:@turf/distance@4.6.0",
                    "@turf/line-intersect": "npm:@turf/line-intersect@4.6.0",
                    "@turf/invariant": "npm:@turf/invariant@4.6.0",
                    "@turf/bearing": "npm:@turf/bearing@4.6.0",
                    "@turf/meta": "npm:@turf/meta@4.6.0",
                    "@turf/destination": "npm:@turf/destination@4.6.0"
                }
            },
            "npm:@turf/line-intersect@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/invariant": "npm:@turf/invariant@4.6.0",
                    "@turf/meta": "npm:@turf/meta@4.6.0",
                    "geojson-rbush": "npm:geojson-rbush@1.1.1",
                    "@turf/line-segment": "npm:@turf/line-segment@4.6.0"
                }
            },
            "npm:geojson-rbush@1.1.1": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@3.13.0",
                    "@turf/meta": "npm:@turf/meta@3.14.0",
                    "rbush": "npm:rbush@2.0.1",
                    "@turf/bbox-polygon": "npm:@turf/bbox-polygon@4.6.0",
                    "@turf/bbox": "npm:@turf/bbox@3.14.0"
                }
            },
            "npm:@turf/line-segment@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0",
                    "@turf/invariant": "npm:@turf/invariant@4.6.0",
                    "@turf/meta": "npm:@turf/meta@4.6.0"
                }
            },
            "npm:@turf/bbox-polygon@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0"
                }
            },
            "npm:@turf/bbox@3.14.0": {
                "map": {
                    "@turf/meta": "npm:@turf/meta@3.14.0"
                }
            },
            "npm:@turf/concave@4.6.0": {
                "map": {
                    "@turf/tin": "npm:@turf/tin@4.6.0",
                    "@turf/distance": "npm:@turf/distance@4.6.0",
                    "@turf/union": "npm:@turf/union@4.6.0"
                }
            },
            "npm:@turf/tin@4.6.0": {
                "map": {
                    "@turf/helpers": "npm:@turf/helpers@4.6.0"
                }
            }
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "turfhelper-lib-js": {
            "main": "dist/index.js",
            "format": "amd",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "@turf/truncate": "npm:@turf/truncate@4.6.0",
        "@turf/unkink-polygon": "npm:@turf/unkink-polygon@4.6.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
        "gmap": "npm:amd-googlemaps-loader@1.8.6"
    },
    packages: {
        "npm:@turf/truncate@4.6.0": {
            "map": {
                "@turf/meta": "npm:@turf/meta@4.6.0"
            }
        },
        "npm:@turf/inside@4.6.0": {
            "map": {
                "@turf/invariant": "npm:@turf/invariant@4.6.0"
            }
        },
        "npm:rbush@2.0.1": {
            "map": {
                "quickselect": "npm:quickselect@1.0.0"
            }
        },
        "npm:@turf/unkink-polygon@4.6.0": {
            "map": {
                "@turf/flatten": "npm:@turf/flatten@4.6.0",
                "simplepolygon": "npm:simplepolygon@1.2.0",
                "@turf/helpers": "npm:@turf/helpers@4.6.0",
                "@turf/meta": "npm:@turf/meta@4.6.0"
            }
        },
        "npm:@turf/flatten@4.6.0": {
            "map": {
                "@turf/helpers": "npm:@turf/helpers@4.6.0",
                "@turf/meta": "npm:@turf/meta@4.6.0"
            }
        },
        "npm:simplepolygon@1.2.0": {
            "map": {
                "@turf/helpers": "npm:@turf/helpers@3.13.0",
                "geojson-polygon-self-intersections": "npm:geojson-polygon-self-intersections@1.1.2",
                "rbush": "npm:rbush@2.0.1",
                "@turf/inside": "npm:@turf/inside@4.6.0",
                "debug": "npm:debug@2.6.8",
                "@turf/within": "npm:@turf/within@3.14.0",
                "@turf/area": "npm:@turf/area@3.14.0"
            }
        },
        "npm:geojson-polygon-self-intersections@1.1.2": {
            "map": {
                "rbush": "npm:rbush@2.0.1"
            }
        },
        "npm:@turf/within@3.14.0": {
            "map": {
                "@turf/inside": "npm:@turf/inside@3.14.0",
                "@turf/helpers": "npm:@turf/helpers@3.13.0"
            }
        },
        "npm:@turf/area@3.14.0": {
            "map": {
                "@turf/meta": "npm:@turf/meta@3.14.0",
                "@mapbox/geojson-area": "npm:@mapbox/geojson-area@0.2.2"
            }
        },
        "npm:@turf/inside@3.14.0": {
            "map": {
                "@turf/invariant": "npm:@turf/invariant@3.13.0"
            }
        },
        "npm:debug@2.6.8": {
            "map": {
                "ms": "npm:ms@2.0.0"
            }
        },
        "npm:@mapbox/geojson-area@0.2.2": {
            "map": {
                "wgs84": "npm:wgs84@0.0.0"
            }
        }
    }
});
