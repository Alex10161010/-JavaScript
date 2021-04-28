const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const rutaMain = './src/contactos/js/app.js';
const rutaHtml = './src/contactos/index.html';
module.exports = {
	mode: 'development', //production, development
	entry: rutaMain,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name][hash:4].js',
	},
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		compress: true,
		port: 9000,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: rutaHtml,
			filename: 'index.html',
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name][hash:4].css',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new webpack.SourceMapDevToolPlugin({}),
	],
	devtool: false,
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										esmodules: true,
									},
								},
							],
						],
					},
				},
			},
			{
				test: /\.(svg|gif|jpg|png|jpeg|ico)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img',
						publicPath: 'img',
						emitFile: true,
						esModule: false,
					},
				},
			},
		],
	},
};
