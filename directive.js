/**
 * Created by andre on 15/05/2017.
 */

/*
Le tre modalità di mapping dello scope:

1)uguale	    =	    associa le variabili di scope di direttiva a un attributo

2)chiocciola	@	    usare le stringhe per indicare la variabile giusta da considerare nel binding

3)e commerciale	&	    permette di valutare espressioni ed eseguire funzioni nel contesto dello scope del controller
*/

angular.module("myApp")
    .directive("titolo", function() {
        return {
            restrict: "EAC",
            template: "<h1>Questo essere direttiva esempio Stupida</h1>",
            link: function(scope, element, attributes) {
                element.prepend("<p>Seleziona una città</p>");
            }
        };
    });

 // con  la propriet à link possiamo definire delle funzioni all'interno della Direttiva

/*La funzione di link preveda tre parametri:

   - lo scope della direttiva;
   - l’elemento del DOM a cui è associata la direttiva;
   - l’elenco degli attributi associati ad essa.


Ex:
link: function(scope, element, attributes) {
    var firstElement = {};
    firstElement[scope.cityDisplayProperty] = "Seleziona una città";

    if (scope.cityList.length > 0) {
        scope.cityList.splice(0, 0, firstElement);
        scope.selectedItem = firstElement;
    }
}

*/