var myApp, MyRouter;

requirejs.config({

    baseUrl: "js/lib",

    paths: {
        views: "../app/views"
    }

});

MyRouter = Backbone.Router.extend({
  routes: {
    "parent": "viewParent",
    "child": "viewChild"
  }
});

myApp = new MyRouter();
Backbone.history.start();
