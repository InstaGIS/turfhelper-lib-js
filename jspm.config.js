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
            "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
            "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
            "util": "github:jspm/nodelibs-util@0.2.0-alpha",
            "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
            "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
            "path": "github:jspm/nodelibs-path@0.2.0-alpha",
            "events": "github:jspm/nodelibs-events@0.2.0-alpha",
            "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
            "underscore": "npm:underscore@1.8.3",
            "turf-buffer": "npm:turf-buffer@3.0.12",
            "turf-featurecollection": "npm:turf-featurecollection@1.0.1",
            "turf-centroid": "npm:turf-centroid@3.0.12",
            "turf-along": "npm:turf-along@3.0.12",
            "turf-linestring": "npm:turf-linestring@1.0.2",
            "turf-inside": "npm:turf-inside@3.0.12",
            "turf-line-slice": "npm:turf-line-slice@3.0.12",
            "turf-polygon": "npm:turf-polygon@1.0.3",
            "turf-point": "npm:turf-point@2.0.1",
            "turf-simplify": "npm:turf-simplify@3.0.12",
            "turf-union": "npm:turf-union@3.0.12",
            "turf-merge": "npm:turf-merge@1.0.2",
            "gmap": "npm:amd-googlemaps-loader@1.6.4",
            "process": "github:jspm/nodelibs-process@0.2.0-alpha"
        },
        "packages": {
            "github:jspm/nodelibs-buffer@0.2.0-alpha": {
                "map": {
                    "buffer-browserify": "npm:buffer@4.7.1"
                }
            },
            "npm:buffer@4.7.1": {
                "map": {
                    "ieee754": "npm:ieee754@1.1.6",
                    "isarray": "npm:isarray@1.0.0",
                    "base64-js": "npm:base64-js@1.1.2"
                }
            },
            "github:jspm/nodelibs-stream@0.2.0-alpha": {
                "map": {
                    "stream-browserify": "npm:stream-browserify@2.0.1"
                }
            },
            "npm:stream-browserify@2.0.1": {
                "map": {
                    "readable-stream": "npm:readable-stream@2.1.4",
                    "inherits": "npm:inherits@2.0.1"
                }
            },
            "npm:readable-stream@2.1.4": {
                "map": {
                    "core-util-is": "npm:core-util-is@1.0.2",
                    "inherits": "npm:inherits@2.0.1",
                    "isarray": "npm:isarray@1.0.0",
                    "string_decoder": "npm:string_decoder@0.10.31",
                    "process-nextick-args": "npm:process-nextick-args@1.0.7",
                    "buffer-shims": "npm:buffer-shims@1.0.0",
                    "util-deprecate": "npm:util-deprecate@1.0.2"
                }
            },
            "npm:turf-merge@1.0.2": {
                "map": {
                    "turf-union": "npm:turf-union@1.0.2",
                    "clone": "npm:clone@0.2.0"
                }
            },
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
            "npm:turf-union@1.0.2": {
                "map": {
                    "jsts": "npm:jsts@0.15.0"
                }
            },
            "npm:turf-point@2.0.1": {
                "map": {
                    "minimist": "npm:minimist@1.2.0"
                }
            },
            "npm:turf-combine@3.0.12": {
                "map": {
                    "turf-meta": "npm:turf-meta@3.0.12"
                }
            },
            "npm:jsts@0.15.0": {
                "map": {
                    "javascript.util": "npm:javascript.util@0.12.12"
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
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
    },
    packages: {}
});
