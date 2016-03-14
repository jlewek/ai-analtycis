angular.module('ai').controller('MainCtrl',function($scope,MouseDetection){
    $scope.test=MouseDetection.test+' Hello';
});