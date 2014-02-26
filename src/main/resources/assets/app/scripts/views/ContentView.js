/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/ContentView.ejs',
    'collections/ContentCollection'
], function ($, _, Backbone, JST, contentCollection) {
    'use strict';

    var ContentView = Backbone.View.extend({
       model: new contentCollection(),
       template: _.template(JST),
       el: "#posts",
       initialize:  function () {
           this.listenTo(this.model, 'reset', this.render);
           this.model.fetch({async:false}); //Fetch the model the first time, that should make it render.
       },
       render:function () {
           $(this.el).html(this.template({content:this.model}));
           return this;
       }
    });
    return ContentView;
});
