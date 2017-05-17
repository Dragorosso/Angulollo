myApp.controller('numerettoController', function($scope,$routeParams, passameLo) {
    console.log("ciaooo");
    console.log($routeParams.id);

    $scope.students = passameLo;

    $scope.getNumber = function(num) {
        console.log("mammeta");
        return new Array(num);
    };

    $scope.getStudente = function() {
        console.log( $scope.students);
        return $scope.students[$routeParams.id];
    };

});


