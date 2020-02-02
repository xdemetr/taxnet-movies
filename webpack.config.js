const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const vars = {
    css: 'css',
    js: 'js',
    img: 'img',
    imgPublic: '../img',
    fonts: 'fonts'
  };

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ]
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      }),
      new CleanWebpackPlugin(),
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: `${vars.css}/app-[hash:8].css`
        })
      )
    }

    return plugins;
  };

  return {

    entry: "./src/index.js",

    mode: isProd ? 'production' : isDev && 'development',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? `${vars.js}/main-[hash:8].js` : undefined
    },

    module: {
      rules: [

        // JS
        {
          test: /\.(js|jsx)$/,
          resolve: { extensions: [".js", ".jsx"] },
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        },

        // Styles
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },

        {
          test: /\.(s[ca]ss|)$/,
          use: [...getStyleLoaders(), "sass-loader"]
        },

        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
        },

        // Images
        {
          test: /\.(svg|jpeg|jpg|png|gif|ico)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: 'img/',
                //publicPath: '../img',
                name: '[name]-[sha1:hash:4].[ext]',
                //useRelativePaths: true
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 70
                }
              }
            }
          ]
        },

        //  Fonts
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
                publicPath: '../fonts/',
                useRelativePaths: true
              }
            }
          ]
        }
      ]
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
      port: 9000,
      progress: true
    }
  }
};
