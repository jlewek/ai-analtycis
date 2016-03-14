angular.module('ai').controller('MainCtrl',function($scope,$timeout,MouseDetection){
    $scope.mouseMovement='[]';

    var highPos={
        "x":0,
        "y":0
    };

    $scope.onMouseMove=function($event){
        var objectToPush=new Object();
        var myObject=JSON.parse($scope.mouseMovement);

        MouseDetection.logPosition($event);

        objectToPush={
          "x":$event.pageX,
          "y":$event.pageY
        };

        if($event.pageX>highPos.x){highPos.x=$event.pageX;}
        if($event.pageY>highPos.y){highPos.y=$event.pageY;}

        myObject.push(objectToPush);

        $scope.mouseMovement=JSON.stringify(myObject);
    };
});