const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.ts/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts"],
    },
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "dist"),
    },
};
