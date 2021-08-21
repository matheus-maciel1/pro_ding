angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('sonClick', function () {    
    return {
        restrict: 'A',
        link: function(scope,element,attrs){
            element.bind('click',function(){       
                scope.$eval(attrs.sonClick);
            })
        }
    };
})
;