

var TestView = Backbone.View.extend({
    tagName: "ul",
    className:"test",
    render: function(){
        this.$el.html("<li>1</li><li>1</li><li>1</li><li>1</li>");
        $("#main").append(this.el);
        console.log("render invoked. %s ", this.$el.html());
        return this;
    }
//    ,
//
//    initialize: function(){
//        console.log("init invoked.");
//        this.render();
//    }
});

var view = new TestView();
console.log(view.render().el);
