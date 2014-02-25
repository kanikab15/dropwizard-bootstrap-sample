/*global define*/

define([
    'underscore',
    'backbone',
    'models/ContentCollection'
], function (_, Backbone, ContentcollectionModel) {
    'use strict';

    var ContentcollectionCollection = Backbone.Collection.extend({
        model: ContentcollectionModel,
        url : "service/"
    });

    return ContentcollectionCollection;
});
