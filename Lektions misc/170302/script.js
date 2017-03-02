/**
 * Created by isak16 on 2017-03-02
 */
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider.when('/first',{
        controller: 'TestController',
        templateUrl: 'html/partial.html'
    });
});

app.controller('TestController', function($scope) {

});


