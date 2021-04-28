/*
ProvidePlugin
	Cargar automáticamente los módulos en lugar de tener que importo requireen todas partes.
SourceMapDevToolPlugin
	Este complemento permite un control más detallado de la generación de mapas de origen. También se habilita automáticamente mediante ciertos ajustes de la devtoolopción de configuración.
 */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development', //development  or 'production'
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name][hash:6].js',
	},
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		compress: true,
		port: 9000,
	},
	plugins: [
		new CleanWebpackPlugin({}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
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
			filename: 'css/[name][hash:6].css',
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
				test: /\.(sa|sc|c)ss$/,
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
				test: /\.(svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash:6].[ext]',
						outputPath: 'img',
						publicPath: 'img',
						emitFile: true,
						esModule: false,
					},
				},
			},
			{
				test: /\.(jpg|png|jpeg|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash:6].[ext]',
							outputPath: 'img',
							publicPath: 'img',
							emitFile: true,
							esModule: false,
						},
					},
					{
						loader: 'webp-loader',
						options: {
							quality: 13,
						},
					},
				],
			},
		],
	},
};
