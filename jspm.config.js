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
            "turf-buffer": "npm:turf-buffer@3.0.12",
            "turf-centroid": "npm:turf-centroid@3.0.12",
            "turf-along": "npm:turf-along@3.0.12",
            "turf-inside": "npm:turf-inside@3.0.12",
            "turf-line-slice": "npm:turf-line-slice@3.0.12",
            "turf-polygon": "npm:turf-polygon@1.0.3",
            "turf-simplify": "npm:turf-simplify@3.0.12",
            "turf-union": "npm:turf-union@3.0.12",
            "lodash-es": "npm:lodash-es@4.17.4",
            "turf-linestring": "npm:turf-linestring@1.0.2",
            "turf-point": "npm:turf-point@2.0.1",
            "process": "npm:jspm-nodelibs-process@0.2.1",
            "turf-featurecollection": "npm:turf-featurecollection@1.0.1"
        },
        "packages": {
            "npm:turf-line-slice@3.0.12": {
                "map": {
                    "turf-bearing": "npm:turf-bearing@3.0.12",
                    "turf-destination": "npm:turf-destination@3.0.12",
                    "turf-distance": "npm:turf-distance@3.0.12",
                    "turf-helpers": "npm:turf-helpers@3.0.12",
                    "turf-point-on-line": "npm:turf-point-on-line@3.0.12"
                }
            },
            "npm:turf-along@3.0.12": {
                "map": {
                    "turf-bearing": "npm:turf-bearing@3.0.12",
                    "turf-destination": "npm:turf-destination@3.0.12",
                    "turf-distance": "npm:turf-distance@3.0.12",
                    "turf-helpers": "npm:turf-helpers@3.0.12"
                }
            },
            "npm:turf-buffer@3.0.12": {
                "map": {
                    "turf-helpers": "npm:turf-helpers@3.0.12",
                    "jsts": "npm:jsts@1.1.2",
                    "turf-combine": "npm:turf-combine@3.0.12",
                    "geojson-normalize": "npm:geojson-normalize@0.0.0"
                }
            },
            "npm:turf-centroid@3.0.12": {
                "map": {
                    "turf-helpers": "npm:turf-helpers@3.0.12",
                    "turf-meta": "npm:turf-meta@3.0.12"
                }
            },
            "npm:turf-destination@3.0.12": {
                "map": {
                    "turf-helpers": "npm:turf-helpers@3.0.12",
                    "turf-invariant": "npm:turf-invariant@3.0.12"
                }
            },
            "npm:turf-inside@3.0.12": {
                "map": {
                    "turf-invariant": "npm:turf-invariant@3.0.12"
                }
            },
            "npm:turf-distance@3.0.12": {
                "map": {
                    "turf-invariant": "npm:turf-invariant@3.0.12",
                    "turf-helpers": "npm:turf-helpers@3.0.12"
                }
            },
            "npm:turf-bearing@3.0.12": {
                "map": {
                    "turf-invariant": "npm:turf-invariant@3.0.12"
                }
            },
            "npm:turf-point-on-line@3.0.12": {
                "map": {
                    "turf-bearing": "npm:turf-bearing@3.0.12",
                    "turf-destination": "npm:turf-destination@3.0.12",
                    "turf-distance": "npm:turf-distance@3.0.12",
                    "turf-helpers": "npm:turf-helpers@3.0.12"
                }
            },
            "npm:turf-simplify@3.0.12": {
                "map": {
                    "simplify-js": "npm:simplify-js@1.2.1"
                }
            },
            "npm:turf-union@3.0.12": {
                "map": {
                    "jsts": "npm:jsts@1.1.2"
                }
            },
            "npm:turf-combine@3.0.12": {
                "map": {
                    "turf-meta": "npm:turf-meta@3.0.12"
                }
            },
            "npm:turf-point@2.0.1": {
                "map": {
                    "minimist": "npm:minimist@1.2.0"
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
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "json": "github:systemjs/plugin-json@0.3.0",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
        "gmap": "npm:amd-googlemaps-loader@1.8.6",
        "text": "github:systemjs/plugin-text@0.0.7"
    },
    packages: {}
});
