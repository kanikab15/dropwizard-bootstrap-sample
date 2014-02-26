/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        router: 'routes/AppRouter',
        models: 'models',
        views: 'views',
        templates: 'templates'
    }
});

require([
    'backbone','bootstrap', 'router'
], function (Backbone, b, AppRouter) {
    var app = new AppRouter();
    Backbone.history.start();
});
