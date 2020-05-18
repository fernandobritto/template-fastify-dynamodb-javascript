let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/assets/src/css/font-awesome.min.css',
    'resources/assets/src/css/simple-line-icons.min.css',
    'resources/assets/src/css/style.css'
], 'public/css/src.css')
    .scripts([
        'resources/assets/src/js/jquery.min.js',
        'resources/assets/src/js/popper.min.js',
        'resources/assets/src/js/bootstrap.min.js',
        'resources/assets/src/js/Chart.min.js',
        'resources/assets/src/js/pace.min.js',
        'resources/assets/src/js/template.js'
    ], 'public/js/src.js')
    .js(['resources/assets/js/app.js'], 'public/js/app.js');
