module.exports = function (grunt) {

    grunt.initConfig({
        jsdoc2md: {

            separateOutputFilePerInput: {
                files: [{
                    src: 'src/components/along.js',
                    dest: 'docs/along.md'
                }, {
                    src: 'src/components/buffer.js',
                    dest: 'docs/buffer.md'
                }, {
                    src: 'src/components/coords_to_latlng.js',
                    dest: 'docs/coords_to_latlng.md'
                }, {
                    src: 'src/components/point_in_polygon.js',
                    dest: 'docs/point_in_polygon.md'
                }, {
                    src: 'src/components/simplify_things.js',
                    dest: 'docs/simplify_things.md'
                }, {
                    src: 'src/components/traverse.js',
                    dest: 'docs/traverse.md'
                }, {
                    src: 'src/components/trimpaths.js',
                    dest: 'docs/trimpaths.md'
                }, {
                    src: 'src/components/union.js',
                    dest: 'docs/union.md'
                }, {
                    src: 'src/components/utils.js',
                    dest: 'docs/utils.md'
                }, {
                    src: 'src/components/wicket_helper.js',
                    dest: 'docs/wicket_helper.md'
                }]
            }

        },
        karma: {
            unit: {
                options: {
                    basePath: './',
                    plugins: [
                        'karma-qunit',
                        'karma-phantomjs-launcher',
                        'karma-mocha-reporter'
                    ],
                    frameworks: ['qunit'],

                    reporters: ['mocha'],

                    port: 9877,
                    colors: true,
                    logLevel: 'INFO',
                    autoWatch: false,
                    browsers: ['PhantomJS'],
                    singleRun: true,

                    // list of files / patterns to load in the browser
                    files: [
                        'test/vendor/object-assign-polyfill.js',
                        'test/vendor/prototype-bind-polyfill.js',
                        'test/vendor/bluebird.js',
                        'test/vendor/gmaps.js',
                        'test/vendor/underscore.js',
                        'test/vendor/underscore.js',
                        'test/vendor/jquery.js',
                        'dist/ig_turfhelper.js',
                        'test/ig_turfhelper/setup/*.js',
                        'test/ig_turfhelper/*.js',
                        'https://maps.googleapis.com/maps/api/js?callback=__google_maps_callback__&v=3.exp&libraries=visualization,places,drawing,geometry&key=AIzaSyCsQ6i68i9hQ90ic34cSdnROS_WcMCVksM'
                    ]
                }

            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc-to-markdown')
    grunt.loadNpmTasks('grunt-karma');

};
