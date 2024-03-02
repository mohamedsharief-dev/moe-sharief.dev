// webpack.config.js
const path = require('path');

module.exports = {
    // Entry point of your application
    entry: '/src/index.js',

    // The output where the bundled JavaScript will be saved
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // Development server configuration
    devServer: {
        static: './dist',
    },

    // Set up loaders to handle different file types
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // Loaders for other file types can be added here (CSS, HTML, etc.)
        ],
    },
};

