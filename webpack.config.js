const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = [
    {
        entry: {
            client: "./src/client/index.js"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                // {
                //     test: /\.css$/i,
                //     use: ['style-loader', 'css-loader'],
                // },
                // {
                //     test: /\.s[ac]ss$/i,
                //     use: [
                //         "style-loader",
                //         "css-loader",
                //         "sass-loader",
                //     ],
                // },
                {
                    test: /\.css$/,
                    use: [
                        'isomorphic-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                }
            ]
        }
    },
    {
        target: "node",
        entry: {
            server: "./src/server.js"
        },
        resolve: {
            fallback: {
                fs: false,
            }
        },
        output: {
            path: path.resolve(__dirname),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },  {
                    test: /\.css$/,
                    use: [
                        'isomorphic-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                }

            ]
        }
    }
]