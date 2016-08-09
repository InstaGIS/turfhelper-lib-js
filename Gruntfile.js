module.exports = function (grunt) {

    grunt.config('karma', {
        options: {
            basePath: '',
            frameworks: ['qunit'],

            reporters: ['progress'],

            port: 9877,
            colors: true,
            logLevel: 'INFO',
            autoWatch: false,
            browsers: ['PhantomJS'],
            singleRun: true

        },

        ig_turfhelper: {
            options: {

                // list of files / patterns to load in the browser
                files: [
                    'test/vendor/object-assign-polyfill.js',
                    'test/vendor/prototype-bind-polyfill.js',
                    'test/vendor/bluebird.js',
                    'test/vendor/gmaps.js',
                    'test/vendor/underscore.js',
                    'test/vendor/jquery.js',
                    'dist/index.js',
                    'test/ig_turfhelper/setup/*.js',
                    'test/ig_turfhelper/*.js',
                    'https://maps.googleapis.com/maps/api/js?callback=__google_maps_callback__&v=3.exp&libraries=visualization,places,drawing,geometry&key=AIzaSyCIa4v2dHNb4jMpdLaMCHy8vZZCj8HYv40'
                ]

            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

};
