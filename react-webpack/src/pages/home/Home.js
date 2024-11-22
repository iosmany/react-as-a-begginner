import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <>
         <div className="p-5 mb-4 bg-body-tertiary rounded-3">
             <h1>React Webpack</h1>
             <p>React, Redux and React Router for ultra-responsive web apps.</p>
             <Link to="about" className="btn btn-primary btn-lg">
             Learn more
             </Link>
         </div>

         <div className="card">
             <pre>
              <code>
              {`const path = require("path");
              const HtmlWebpackPlugin = require("html-webpack-plugin");

              const webpack = require("webpack");

              process.env.NODE_ENV = "development";

              module.exports = {
              mode: "development",
              target: "web",
              devtool: "cheap-module-source-map",
              entry: "./src/index",
              output: {
                  path: path.resolve(__dirname, "build"),
                  publicPath: "/",
                  filename: "bundle.js"
              },
              stats: "minimal",
              devServer: {
                  historyApiFallback: true,
                  headers: { "Access-Control-Allow-Origin": "*" }
              },
              plugins: [

                  //defining a plugin for mocking api
                  new webpack.DefinePlugin({
                  "process.env.API_URL": JSON.stringify("http://localhost:3001")
                  }),

                  //common plugin for html
                  new HtmlWebpackPlugin({
                  template: "src/index.html",
                  favicon: "src/favicon.ico"
                  })
              ],
              module: {
                  rules: [
                  {
                   test: /\\.(js|jsx)$/,
                   exclude: /node_modules/,
                   use: ["babel-loader", "eslint-loader"]
                  },
                  {
                   test: /(\\.css)$/,
                   use: ["style-loader", "css-loader"]
                  }
                  ]
                  }
              };`}
              </code>    
             </pre>    
         </div>
        </>
        )
}

export default Home;