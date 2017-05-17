myApp.controller('firstController', function($scope,$location,passameLo) {

    $scope.students = passameLo;
    $scope.numeretto=0;
    $scope.goNumeretto= function(param) {

        // $location.path('/about').search({param1:$scope.student.firstName,param2:$scope.student.lastName,param3:$scope.student.numeretto});

        $location.path('/about/'+param);
    }
});



/*
//esempio controller
myApp.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.citta = {codice: "RM", nome: "Roma", regione: "Lazio"};

    //esempio funzione definita nel controller
    $scope.somma = function(x, y, event) {
        $scope.risultato = x + y;
        console.log("È stato cliccato alla posizione " + event.clientX + ", " + event.clientY);
    };

});
*/






/*





// Esempio Servizi:i servizi vengono utilizzati per condividere dati tra i controller
// Una volta implementati bisogna poi fare injection dei servizi ad un controller,

angular.module("myApp")
    .controller("myController",
        function($scope, somma1, somma2) {
            $scope.x = somma1.somma(1,2);
            $scope.y = somma2(1,2)
        });

//implementazione con .service => Angular ci fornisce un’istanza della funzione associata al servizio.
angular.module("myApp")
    .service("somma1", function() {
        this.somma = function(a,b) { return a + b};
    });

//implementazione con .factory =>  Angular ci fornisce il valore restituito dall’esecuzione della funzione associata.
angular.module("myApp")
    .factory("somma2", function() {
        return function(a, b) { return a + b;}
    });


//Esempio servizio tra due controller
angular.module("myApp")
    .controller("cittaController", function($scope, elencoCitta) {
        $scope.aggiungiCitta = function() {
            elencoCitta.aggiungi({nome: $scope.nome, regione: $scope.regione});
        };
    });

angular.module("myApp")
    .controller("elencoController", function($scope, elencoCitta) {
        $scope.elencoCitta = elencoCitta.elenco;
    });


angular.module("myApp")
    .service("elencoCitta", function() {
        this.elenco  = [
            {nome: "Roma", regione: "Lazio"},
            {nome: "Latina", regione: "Lazio"},
            {nome: "Milano", regione: "Lombardia"},
            {nome: "Napoli", regione: "Campania"},
            {nome: "Como", regione: "Lombardia"},
            {nome:"Palermo", regione: "Sicilia"},
            {nome: "Caserta", regione: "Campania"},
            {nome: "Avellino", regione: "Campania"},
            {nome:"Trapani", regione: "Sicilia"},
            {nome:"Agrigento", regione: "Sicilia"}
        ];

        this.aggiungi = function(citta) {
            this.elenco.push(citta);
        };
    });

//Esempio controller con chiamata http con metodo get
/!*angular.module("myApp")
    .controller("elencoController", function($scope, $http) {
        $http.get("/elencoCitta")
            .success(function(data) {
                $scope.elencoCitta = data;
            })
            .error(function() {
                alert("Si è verificato un errore!");
            });
    });*!/

//Esempio controller con chiamata http con metodo post

/!*
angular.module("myApp")
    .controller("cittaController", function($scope, $http) {
        $scope.aggiungiCitta = function() {
            $http.post("/elencoCitta", {nome: $scope.nome, regione: $scope.regione})
                .success(function() {
                    alert("Città aggiunta correttamente!");
                })
                .error(function() {
                    alert("Si è verificato un errore!");
                });
        };
    });

*!/


*/
