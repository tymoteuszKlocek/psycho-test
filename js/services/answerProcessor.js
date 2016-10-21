function answerProcessor($q) {
    "use strict";

    var res = res || 0;
    function countPoints(x,y) {

        if( x <= 5 && y <= 5 && x >= 0 && y >= 0) {
            res = 1;
        }
        if( x > 5 && y <= 5) {
            res = 2;
        }
        if( x <= 5 && y > 5 && x >= 0 ) {
            res = 3;
        }
        if( x > 5 && y > 5) {
            res = 4;
        }
        if (x === 0 && y === 0) {
            res = 0;
        }
    }

    function check() {
        var defer = $q.defer();
        if (res === 0) {
            defer.resolve(0);
        }
        if (res === 1) {
            defer.resolve(1);
        }
        if (res === 2) {
            defer.resolve(2);
        }
        if (res === 3) {
            defer.resolve(3);
        }
        if (res === 4) {
            defer.resolve(4);
        }
        else {
            defer.reject("błędne dane w showTuth()");
        }
        return defer.promise;
    }
    

    return{
        countPoints: countPoints,
        check: check
    };
}

angular.module('myApp').factory("answerProcessor", ['$q', answerProcessor]);