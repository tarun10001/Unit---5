const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"),  //Folders 
        filename: "bundle.js"              // filename
    },
    mode: "development",
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
    ],
    }
};