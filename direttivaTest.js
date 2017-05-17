myApp.directive("studente",function($routeParams) {
        return {
            restrict: "E",
            templateUrl: "templateStudente.html",
            controller: "numerettoController",
            link: function(scope, element, attributes) {
               // metti i dati in una card bella personalizzata per l'id utente in ingresso
                switch(scope.students[$routeParams.id].id) {
                    case '3' :  document.getElementById("asd").src = "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/14390767_10210710599189130_8782268017385361105_n.jpg?oh=d7471bdb05efe5b3becea170d5409df5&oe=59B0824B";
                        console.log($routeParams.id+"sei in switch");
                        break;
                    case'2' :  document.getElementById("asd").src = "https://scontent-mxp1-1.xx.fbcdn.net/v/t31.0-8/14138656_10209369394764336_220307164159369215_o.jpg?oh=0fc1a4454feb76e7d0e596b19cf65183&oe=59B26190";
                        console.log($routeParams.id+"sei in switch");
                        break;
                    case '1' :  document.getElementById("asd").src = "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/14390767_10210710599189130_8782268017385361105_n.jpg?oh=d7471bdb05efe5b3becea170d5409df5&oe=59B0824B";
                        console.log($routeParams.id+"sei in switch");
                        break;
                }

            }
        };
    });
