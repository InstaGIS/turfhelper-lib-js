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
            "turf-centroid": "npm:turf-centroid@1.1.3",
            "turf-union": "npm:turf-union@1.0.2",
            "turf-inside": "npm:turf-inside@1.1.4",
            "turf-along": "npm:turf-along@1.0.2",
            "turf-merge": "npm:turf-merge@1.0.2",
            "turf-featurecollection": "npm:turf-featurecollection@1.0.1",
            "turf-linestring": "npm:turf-linestring@1.0.2",
            "turf-buffer": "npm:turf-buffer@1.1.0",
            "turf-simplify": "npm:turf-simplify@1.0.3",
            "turf-point": "npm:turf-point@2.0.1",
            "turf-polygon": "npm:turf-polygon@1.0.3",
            "turf-line-slice": "npm:turf-line-slice@1.3.4",
            "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
            "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
            "util": "github:jspm/nodelibs-util@0.2.0-alpha",
            "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
            "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
            "path": "github:jspm/nodelibs-path@0.2.0-alpha",
            "events": "github:jspm/nodelibs-events@0.2.0-alpha",
            "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
            "underscore": "npm:underscore@1.8.3"
        },
        "packages": {
            "npm:turf-merge@1.0.2": {
                "map": {
                    "turf-union": "npm:turf-union@1.0.2",
                    "clone": "npm:clone@0.2.0"
                }
            },
            "npm:turf-buffer@1.1.0": {
                "map": {
                    "turf-polygon": "npm:turf-polygon@1.0.3",
                    "turf-featurecollection": "npm:turf-featurecollection@1.0.1",
                    "turf-combine": "npm:turf-combine@1.1.0",
                    "jsts": "npm:jsts@0.15.0",
                    "geojson-normalize": "npm:geojson-normalize@0.0.0"
                }
            },
            "npm:turf-along@1.0.2": {
                "map": {
                    "turf-point": "npm:turf-point@2.0.1",
                    "turf-destination": "npm:turf-destination@1.2.1",
                    "turf-distance": "npm:turf-distance@1.1.0",
                    "turf-bearing": "npm:turf-bearing@1.0.2"
                }
            },
            "npm:turf-centroid@1.1.3": {
                "map": {
                    "turf-point": "npm:turf-point@2.0.1",
                    "geojson-fixtures": "npm:geojson-fixtures@0.5.0",
                    "turf-meta": "npm:turf-meta@1.0.2"
                }
            },
            "npm:turf-line-slice@1.3.4": {
                "map": {
                    "turf-linestring": "npm:turf-linestring@1.0.2",
                    "turf-point": "npm:turf-point@2.0.1",
                    "turf-destination": "npm:turf-destination@1.2.1",
                    "turf-distance": "npm:turf-distance@1.1.0",
                    "turf-bearing": "npm:turf-bearing@1.0.2"
                }
            },
            "npm:turf-point@2.0.1": {
                "map": {
                    "minimist": "npm:minimist@1.2.0"
                }
            },
            "npm:turf-inside@1.1.4": {
                "map": {
                    "minimist": "npm:minimist@1.2.0"
                }
            },
            "npm:turf-simplify@1.0.3": {
                "map": {
                    "simplify-js": "npm:simplify-js@1.2.1"
                }
            },
            "npm:turf-union@1.0.2": {
                "map": {
                    "jsts": "npm:jsts@0.15.0"
                }
            },
            "npm:turf-destination@1.2.1": {
                "map": {
                    "turf-point": "npm:turf-point@2.0.1"
                }
            },
            "npm:turf-distance@1.1.0": {
                "map": {
                    "turf-invariant": "npm:turf-invariant@1.0.3"
                }
            },
            "npm:jsts@0.15.0": {
                "map": {
                    "javascript.util": "npm:javascript.util@0.12.12"
                }
            },
            "npm:geojson-fixtures@0.5.0": {
                "map": {
                    "geojsonhint": "npm:geojsonhint@1.2.1"
                }
            },
            "npm:geojsonhint@1.2.1": {
                "map": {
                    "minimist": "npm:minimist@1.1.1",
                    "chalk": "npm:chalk@1.1.3",
                    "jsonlint-lines": "npm:jsonlint-lines@1.7.1",
                    "concat-stream": "npm:concat-stream@1.4.10",
                    "text-table": "npm:text-table@0.2.0"
                }
            },
            "github:jspm/nodelibs-buffer@0.2.0-alpha": {
                "map": {
                    "buffer-browserify": "npm:buffer@4.7.1"
                }
            },
            "npm:chalk@1.1.3": {
                "map": {
                    "supports-color": "npm:supports-color@2.0.0",
                    "strip-ansi": "npm:strip-ansi@3.0.1",
                    "has-ansi": "npm:has-ansi@2.0.0",
                    "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                    "ansi-styles": "npm:ansi-styles@2.2.1"
                }
            },
            "npm:concat-stream@1.4.10": {
                "map": {
                    "typedarray": "npm:typedarray@0.0.6",
                    "inherits": "npm:inherits@2.0.1",
                    "readable-stream": "npm:readable-stream@1.1.14"
                }
            },
            "npm:jsonlint-lines@1.7.1": {
                "map": {
                    "nomnom": "npm:nomnom@1.8.1",
                    "JSV": "npm:JSV@4.0.2"
                }
            },
            "npm:readable-stream@1.1.14": {
                "map": {
                    "inherits": "npm:inherits@2.0.1",
                    "isarray": "npm:isarray@0.0.1",
                    "string_decoder": "npm:string_decoder@0.10.31",
                    "core-util-is": "npm:core-util-is@1.0.2",
                    "stream-browserify": "npm:stream-browserify@1.0.0"
                }
            },
            "npm:nomnom@1.8.1": {
                "map": {
                    "chalk": "npm:chalk@0.4.0",
                    "underscore": "npm:underscore@1.6.0"
                }
            },
            "npm:buffer@4.7.1": {
                "map": {
                    "ieee754": "npm:ieee754@1.1.6",
                    "isarray": "npm:isarray@1.0.0",
                    "base64-js": "npm:base64-js@1.1.2"
                }
            },
            "npm:chalk@0.4.0": {
                "map": {
                    "ansi-styles": "npm:ansi-styles@1.0.0",
                    "strip-ansi": "npm:strip-ansi@0.1.1",
                    "has-color": "npm:has-color@0.1.7"
                }
            },
            "npm:strip-ansi@3.0.1": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.0.0"
                }
            },
            "npm:has-ansi@2.0.0": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.0.0"
                }
            },
            "npm:stream-browserify@1.0.0": {
                "map": {
                    "inherits": "npm:inherits@2.0.1",
                    "readable-stream": "npm:readable-stream@1.1.14"
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
        "gmap": "npm:amd-googlemaps-loader@1.6.4",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.13",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha"
    },
    packages: {}
});
