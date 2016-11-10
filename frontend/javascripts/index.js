requirejs.config({
    baseUrl:'./public/js',
    shim: {
        "bootstrap": {"deps" : ['jquery']}
    }
});

define(["jquery", "domReady"], function ($){
    "use strict";

});
