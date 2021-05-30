// webpack.config.js

'use strict';

const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    entry: './app.js',
    

    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },

    module: {
        // plugins: [
        //     new webpack.NormalModuleReplacementPlugin(
        //         /frame_icon\.png/,
        //         '/images/frame_icon.png'
        //     )],
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                use: [ 'raw-loader' ]
            },
            
            // {
            //     test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,

            //     use: [ 'raw-loader' ]
            // },
            {
                test: /\.css$/i,

                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: styles.getPostCssConfig( {
                            themeImporter: {
                                themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                            },
                            minify: true
                        } )
                    }
                ]
            }
        ]
    },

    // Useful for debugging.
    devtool: 'source-map',

    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false }
};