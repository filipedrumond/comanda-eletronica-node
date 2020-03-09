const mix = require('laravel-mix');

mix.autoload({jquery: ['$', 'window.jQuery']});

mix.copy('src/assets', 'html/assets');
mix.copy('db/img', 'html/assets/img');


mix.js('src/main.js', 'html/build/js')
    .sass('src/main.scss', 'html/build/css');