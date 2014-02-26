/*global define*/

define([
    'jquery',
    'backbone',
    'views/ContentView'
], function ($, Backbone, view) {
    'use strict';

    var ApprouterRouter = Backbone.Router.extend({
        routes: {
            '':'list'
        },

        list: function() {
            new view().render();
        }

    });

    return ApprouterRouter;
});
