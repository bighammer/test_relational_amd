require.config({

    paths : {

        js                    : 'js',
        jquery                : 'js/jquery-1.8.3',
        underscore            : 'js/underscore',
        backbone              : 'js/backbone',
        'backbone-relational' : 'js/backbone-relational',
        'child':'child'
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

//var APP = {};




define(['backbone', 'child', 'backbone-relational'], function (Backbone, Child) {

    //Backbone.Relational.store.addModelScope(APP);

    var Parent = Backbone.RelationalModel.extend({
        relations : [
            {
                key          : 'child',
                type         : Backbone.HasOne,
                relatedModel : Child
            }
        ]

    });

    var test = new Parent();

});