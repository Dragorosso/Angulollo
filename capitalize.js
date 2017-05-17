/**
 * Created by andre on 13/05/2017.
 */
//esempio Filtro

myApp.filter("capitalize",
        function(){
            return function(text,param2) {
                var result = text;
                if (text && isNaN(text)) {

                    result = text.charAt(0).toUpperCase() + text.substr(1)+"~"+param2;
                }
                return result;
            }
        });

