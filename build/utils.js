var path = require('path')
var config = require('../config')
var glob = require('glob')
var HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function(_path) {
	var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
		config.build.assetsSubDirectory :
		config.dev.assetsSubDirectory
	return path.posix.join(assetsSubDirectory, _path)
}
// 页面模板
var PAGE_PATH = path.resolve(__dirname, '../src/js')
var HTML_PATH = path.resolve(__dirname, '../src')
var merge = require('webpack-merge')

//多入口配置
exports.entries = function() {
	var entryFiles = glob.sync(PAGE_PATH + '/*.js')  //同步匹配文件
	var map = {}
	entryFiles.forEach((filePath) => {
		var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
		map[filename] = filePath
	})
	return map
}
//多页面输出配置
exports.htmlPlugin = function() {
	let entryHtml = glob.sync(HTML_PATH + '/*.html')
	let arr = []
	entryHtml.forEach((filePath) => {
		let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
		let conf = {
			// 模板来源
			template: filePath,
			// 文件名称
			filename: filename + '.html',
			// 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
			chunks: ['manifest', 'vendor', filename],
			
			inject: true
		}
		if (process.env.NODE_ENV === 'production') {
			conf = merge(conf, {
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
				},
				chunksSortMode: 'dependency'
			})
		}
		arr.push(new HtmlWebpackPlugin(conf))
	})
	return arr
}