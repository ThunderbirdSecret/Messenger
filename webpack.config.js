// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    // entry: './src/index.ts',
    entry: {
        path: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: [ 'style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.hbs$/i,
                loader: 'handlebars-loader',
                exclude: ['/node_modules/'],
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.js',
            utils: path.resolve(__dirname, "./src/utils"),
            components: path.resolve(__dirname, "./src/components"), 
            pages: path.resolve(__dirname, "./src/pages"), 
            asserts: path.resolve(__dirname, "./src/asserts"), 
            styles: path.resolve(__dirname, "./src/styles"), 
            helpers: path.resolve(__dirname, "./src/helpers"), 
            services: path.resolve(__dirname, "./src/services"), 
            api: path.resolve(__dirname, "./src/api"), 
            constants: path.resolve(__dirname, "./src/constants")
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
