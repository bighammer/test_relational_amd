

var TestView = Backbone.View.extend({
    tagName: "ul",
    className:"test",
    render: function(){
        this.$el.html("<li>1</li><li>1</li><li>1</li><li>1</li>");
        $("#main").append(this.el);
        console.log("render invoked.%s ", this.el);
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
view.render();
console.log(view.el);
