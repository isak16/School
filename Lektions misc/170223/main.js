/**
 * Created by isak16 on 2017-02-20.
 */
var app = angular.module('app', []);

app.controller('TestController', function($filter, $scope) {

    $scope.date = $filter('date')(new Date(), 'yyyy:MM:dd');

});

