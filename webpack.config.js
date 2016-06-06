var browserSync=require('browser-sync-webpack-plugin');
var path=require('path')
module.exports =
    {
        context:path.resolve(__dirname,'app'),
        entry: './index.js',
        output:
        {
            fileaname: './bundle.js',
            path:path.resolve(__dirname,'dist'),
            publicPath:'/asset/'
        },
        
          devtool: 'source-map',
        plugins:
        [
            new browserSync({
                host: 'localhost',
                port: 3200,
                proxy: 'http://localhost:' + 3100,
                // ui: false,
                // online: false,
                // notify: true
            })
        ]
    }