const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  {VueLoaderPlugin, default: loader} = require('vue-loader');
const {ElementPlusResolver}=require('unplugin-vue-components/resolvers')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Options } = require('element-plus');
const config = {
  entry: path.resolve(__dirname, './src/main.js'),
  mode:"development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js',
    clean:true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude:/node_modules/,
        include:path.join(__dirname,'src')
        },
        {
          test:/\.(js|jsx)$/,
          exclude:/node_modules/,
          use:{
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env','@babel/preset-react']
            }
          }
        },
      {
        test: /\.css|sass|scss$/,
        use: [
          'style-loader',
          //MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          // 'postcss-loader'
        ]
      }, 
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.join(__dirname,"./index.html"),
      filename:"index.html"
    }),
    new webpack.DefinePlugin({
      '__VUE_OPTIONS_API__':true,
      '__VUE_PROD_DEVTOOLS__':false,
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__':false
    }),
    new VueLoaderPlugin(),
    require('unplugin-auto-import/webpack').default({ 
      imports:['vue','vue-router']
    }),
    // require('unplugin-vue-components/webpack').default({ resolvers:[
    //   ElementPlusResolver()
    // ] }),
    new MiniCssExtractPlugin({
      filename:"[name].css",
      chunkFilename:'[id].css'
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.css',
      'jsx'
    ]
  },
  devServer:{
    static: {directory: path.join(__dirname, 'dist')},
    client:{
        progress:true,
    },
    open:['./index.html'],
    compress: true,
    port: 8000,
},
};

module.exports = config;