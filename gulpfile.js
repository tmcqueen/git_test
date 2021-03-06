var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.styles([
        'css/main.css',
        'libs/bootstrap/dist/css/bootstrap.css',
        'libs/bootstrap/dist/css/bootstrap-theme.css',
        'libs/font-awesome/css/font-awesome.css',
    ], 'public/css/app.css', 'resources/assets');

    mix.scripts([
        'libs/jquery/dist/jquery.js',
        'libs/vue/dist/vue.js',
        'libs/bootstrap/dist/js/bootstrap.js',
    ], 'public/js/app.js', 'resources/assets');

    mix.copy('resources/assets/libs/bootstrap/dist/fonts', 'public/fonts');
    mix.copy('resources/assets/libs/font-awesome/fonts', 'public/fonts');
});
