const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: "./src/index.js",
    background: "./src/background/background.js",
    contentScript: "./src/contentScript/content.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // This regex matches both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
     
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        type: "assets/resource",
        use: "assets/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/extension/"),
          to: path.resolve("build"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup"]),
    // new HtmlPlugin({
    //   title: "React Boilerplate",
    //   filename: "popup.html",
    //   chunks: ["popup"],
    // }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
  },
  optimization: {
    splitChunks: {
      //include all types of chunks
      chunks: "all",
    },
    
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "React Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
