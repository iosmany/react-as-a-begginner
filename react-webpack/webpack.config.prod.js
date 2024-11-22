const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

const webpack = require("webpack");

process.env.NODE_ENV = "production";
module.exports = {
    mode: "production", // Sets the mode to production, enabling optimizations for a smaller output.
    target: "web", // Specifies that the target environment is a web browser.
    devtool: "source-map", // Generates source maps for debugging.
    entry: "./src/index", // Entry point for the application.
    output: {
      path: path.resolve(__dirname, "build"), // Output directory for the bundled files.
      publicPath: "/", // Public URL of the output directory when referenced in a browser.
      filename: "bundle.js" // Name of the output bundle file.
    },
    stats: "minimal", // Reduces the output of build information to minimal.
    plugins: [
      new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }), // Generates a static HTML file with bundle analysis.
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css" // Extracts CSS into separate files with content hashes for cache busting.
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), // Defines environment variables for use in the application.
        "process.env.API_URL": JSON.stringify("http://localhost:3001") // Defines the API URL environment variable.
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html", // Template HTML file to use.
        favicon: "src/favicon.ico", 
        minify: {
          removeComments: true, // Minifies the HTML by removing comments.
          collapseWhitespace: true, // Minifies the HTML by collapsing whitespace.
          removeRedundantAttributes: true, // Removes redundant attributes from HTML tags.
          useShortDoctype: true, // Uses a short doctype.
          removeEmptyAttributes: true, // Removes empty attributes from HTML tags.
          removeStyleLinkTypeAttributes: true, // Removes type attributes from style and link tags.
          keepClosingSlash: true, // Keeps the closing slash on self-closing tags.
          minifyJS: true, // Minifies JavaScript within the HTML.
          minifyCSS: true, // Minifies CSS within the HTML.
          minifyURLs: true // Minifies URLs within the HTML.
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Matches JavaScript and JSX files.
          exclude: /node_modules/, // Excludes the node_modules directory.
          use: ["babel-loader", "eslint-loader"] // Uses Babel and ESLint loaders for transpiling and linting.
        },
        {
          test: /(\.css)$/, // Matches CSS files.
          use: [
            MiniCssExtractPlugin.loader, // Extracts CSS into separate files.
            {
              loader: "css-loader",
              options: {
                sourceMap: true // Enables source maps for CSS.
              }
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [() => [require("cssnano")]] // Uses cssnano for CSS minification.
                },
                sourceMap: true // Enables source maps for PostCSS.
              }
            }
          ]
        }
      ]
    }
  }