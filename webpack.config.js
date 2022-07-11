module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        loader: "babel-loader"
      }
    ]    
  }
}