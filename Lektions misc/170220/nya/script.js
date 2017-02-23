/**
 * Created by isak16 on 2017-02-20.
 */
var app = angular.module('app', []);

app.controller('TestController', function($scope) {
    $scope.arr = [];
    $scope.personArr = [];
  //  $scope.personObj = {};


    $scope.addToArr = function(keyEvent, from) {
        if(keyEvent.which !== 13) return;

        if ($scope.x && from === 'moms'){
            $scope.arr.push(0.2*$scope.x);
            $scope.x = "";
        }
        if ($scope.personObj.name && from === 'persons'){
            $scope.personArr.push($scope.personObj);
            $scope.personObj = {};

        }
    };

    $scope.remove = function (index) {
        $scope.arr.splice(index, 1);

    };

    $scope.$watch('arr', function (newVal) {
        $scope.totalValue = calcValueFromArr(newVal);
    }, true);





});


function calcValueFromArr(arr){
    var tempVar = 0;
    for(var i = 0; i < arr.length; i++){
        tempVar += arr[i];
    }
    return tempVar;
}