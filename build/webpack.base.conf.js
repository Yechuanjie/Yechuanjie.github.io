var path = require('path');
var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';
var webpack = require('webpack');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: utils.entries(),
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production' ?
			config.build.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': resolve('src')
		}
	},
	module: {
		rules: [{
				test: /\.(js)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: resolve('src'),
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: resolve('src')
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]'),
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
				}
			},
			{
				test: /\.html$/,
				loader: "html-withimg-loader",
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
			// Promise: 'es6-promise'
		})
	]
}
