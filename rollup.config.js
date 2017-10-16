import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';

export default {

	input: "src/ig_turfhelper.js",
	extend: true,

	plugins: [
		commonjs(),
		alias({
			'lodash-es': 'node_modules/lodash-es'
		}),
		resolve(),
		babel()
	],
	output: [{
			file: "dist/ig_turfhelper.js",
			format: "umd",
			name: 'turfHelper',
			exports: 'named'
		},
		/*{
		file: "dist/ig_reportfactory.es6.js",
		format: "es"
	}*/
	],
	external: ['underscore', 'jquery', 'backbone', 'gmaps', 'ig_helper'],
	globals: {
		underscore: '_',
		jquery: '$',
		backbone: 'Backbone',
		gmaps: 'gmaps',
		ig_helper: 'IGProviders'
	}

};
