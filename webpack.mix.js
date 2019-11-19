let mix = require('webpack-mix').mix;

mix.sass('src/scss/application.scss', 'dist')
    .js('src/js/application.js', 'dist')
    .browserSync('127.0.0.1:8080');