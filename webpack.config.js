/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const { CKEditorTranslationsPlugin } = require( '@ckeditor/ckeditor5-dev-translations' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve( __dirname, 'src', 'ckeditor.js' ),

	output: {
		// The name under which the editor will be exported.
		library: 'ClassicEditor',

		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	plugins: [
		new CKEditorTranslationsPlugin( {
			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
			language: 'sv',
			additionalLanguages: 'all'
		} ),
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	module: {
		rules: [
			{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: [ 'raw-loader' ]
			},
			{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: styles.getPostCssConfig( {
								themeImporter: {
									themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
								},
								minify: true
							} )
						}
					},
				]
			}
		]
	}
};
