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
            "gmap": "npm:amd-googlemaps-loader@1.8.6",
            "lodash-es": "npm:lodash-es@4.17.4",
            "turf-linestring": "npm:turf-linestring@1.0.2",
            "turf-point": "npm:turf-point@2.0.1",
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
        "assert": "npm:jspm-nodelibs-assert@0.2.0",
        "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
        "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
        "constants": "npm:jspm-nodelibs-constants@0.2.0",
        "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
        "events": "npm:jspm-nodelibs-events@0.2.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.0",
        "os": "npm:jspm-nodelibs-os@0.2.0",
        "path": "npm:jspm-nodelibs-path@0.2.1",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.20",
        "process": "npm:jspm-nodelibs-process@0.2.0",
        "stream": "npm:jspm-nodelibs-stream@0.2.0",
        "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
        "util": "npm:jspm-nodelibs-util@0.2.1",
        "vm": "npm:jspm-nodelibs-vm@0.2.0"
    },
    packages: {
        "npm:stream-browserify@2.0.1": {
            "map": {
                "readable-stream": "npm:readable-stream@2.2.2",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "create-hmac": "npm:create-hmac@1.1.4",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3",
                "pbkdf2": "npm:pbkdf2@3.0.9",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.3",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.8"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "inherits": "npm:inherits@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "elliptic": "npm:elliptic@6.3.3",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "miller-rabin": "npm:miller-rabin@4.0.0"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "elliptic": "npm:elliptic@6.3.3"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "pbkdf2": "npm:pbkdf2@3.0.9",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "asn1.js": "npm:asn1.js@4.9.1"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.3",
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.3",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.3",
                "inherits": "npm:inherits@2.0.3",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.7"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:jspm-nodelibs-crypto@0.2.0": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:jspm-nodelibs-os@0.2.0": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "npm:jspm-nodelibs-string_decoder@0.2.0": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.0": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:buffer@4.9.1": {
            "map": {
                "ieee754": "npm:ieee754@1.1.8",
                "base64-js": "npm:base64-js@1.2.0",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:pbkdf2@3.0.9": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:cipher-base@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:jspm-nodelibs-buffer@0.2.1": {
            "map": {
                "buffer": "npm:buffer@4.9.1"
            }
        },
        "npm:readable-stream@2.2.2": {
            "map": {
                "isarray": "npm:isarray@1.0.0",
                "string_decoder": "npm:string_decoder@0.10.31",
                "inherits": "npm:inherits@2.0.3",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "core-util-is": "npm:core-util-is@1.0.2",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:sha.js@2.4.8": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:asn1.js@4.9.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:elliptic@6.3.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.7",
                "hash.js": "npm:hash.js@1.0.3"
            }
        }
    }
});
