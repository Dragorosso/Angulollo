 angular.module('andlollo',[])
     .directive('wjValidationError', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctl) {
            scope.$watch(attrs['wjValidationError'], function (errorMsg) {
                elm[0].setCustomValidity(errorMsg);
                ctl.$setValidity('wjValidationError', errorMsg ? false : true);
                console.log('elm'+elm);
                console.log('scope'+scope);
                console.log('attrs'+attrs);
                console.log('ctl'+ctl);
            });
        }
    };
});