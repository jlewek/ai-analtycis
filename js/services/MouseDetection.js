angular.module('ai').service('MouseDetection', function($log) {

    this.logPosition=function($event){
        var log =   'clientX: '+$event.clientX+' clientY: ' +$event.clientY +
                    ' | offsetX: '+$event.offsetX+' offsetY: ' + $event.offsetY +
                    ' | pageX: '+$event.pageX+' pageY: ' + $event.pageY;
        $log.log(log);
    };

    this.saveMovement=function($event){

    };
});