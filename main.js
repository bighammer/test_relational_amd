require.config({

    paths : {

        js                    : 'js',
        jquery                : 'js/jquery-1.8.3',
        underscore            : 'js/underscore',
        backbone              : 'js/backbone',
        'backbone-relational' : 'js/backbone-relational'
    },

    shim : {
        underscore : {
            exports : '_'
        },
        backbone   : {
            deps    : ['underscore', 'jquery'],
            exports : 'Backbone'
        },

        'backbone-relational' : {
            deps: ['backbone']
        }
    }

});

var APP = {};


define(['backbone', 'backbone-relational'], function (Backbone) {

    Backbone.Relational.store.addModelScope(APP);
    APP.Child = Backbone.RelationalModel.extend();
    APP.Parent = Backbone.RelationalModel.extend({
        relations : [
            {
                key          : 'child',
                type         : Backbone.HasOne,
                relatedModel : 'Child'
            }
        ]

    });

    var test = new APP.Parent();

});