'use strict';

var movie_app = angular.module('movieApp', []);

movie_app.controller('MovieCtrl', [
             '$scope', 
    function ($scope) {
        this.movie = {
            title: "Back to the future",
            director: "Robert Zemeckis"
        }
    }]
);