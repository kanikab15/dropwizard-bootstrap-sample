/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ContentModel = Backbone.Model.extend({
        content: "blah",
        id: 1,
        title: "santosh",
        create_date: "2014-02-25",
        update_date: "2014-02-25"
    });

    return ContentModel;
});
