/*global define*/

define([
    'underscore',
    'backbone',
    'models/Content'
], function (_, Backbone, ContentModel) {
    'use strict';

    var ContentCollection = Backbone.Collection.extend({
        model: ContentModel,
        url : "service/"
    });

    return ContentCollection;
});
