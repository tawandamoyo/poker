const path = require("path");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader"}
            }
        ]
    },
    devServer: {
        port: 4000,
        static: [
            {
                directory: path.resolve(__dirname, "dist")
            }
        ],
        hot: true,
        open: true,
        liveReload: true,
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
    
}