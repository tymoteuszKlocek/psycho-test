function addAnswer(answerProcessor) {
    "use strict";

    var resultX = resultX || 0;
    var resultY = resultY || 0;

    var add = function(ans) {
        if (ans==="x") {
            resultX++;
        }
        if (ans==="y") {
            resultY++;
        }
        if(ans==="xy") {
            resultX++;
            resultY++;
        }
    };
    var show = function() {
        answerProcessor.countPoints(resultX,resultY);
        console.log("x- " + resultX + " y- " + resultY);
    };

    return {
        add: add,
        show: show
    };
}

angular.module("myApp").factory("addAnswer", ['answerProcessor', addAnswer]);