/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/ContentCollection'
], function ($, _, Backbone, JST, contentCollection) {
    'use strict';

    var ContentView = Backbone.View.extend({
       model: contentCollection,
       template: JST['app/scripts/templates/ContentView.ejs'],
       initialize:  function () {
           this.listenTo(this.model, 'reset', this.render)
       },
       render:function () {
           $(this.el).html(this.template({content:this.model}));
           return this;
       }
    });

    return ContentView;
});
