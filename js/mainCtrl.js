function MainController(addAnswer, changeButton, answerProcessor, changeImg) {
    "use strict";

    var vm = this;
    vm.pressedButton = pressedButton;
    vm.pressedImg = pressedImg;
    vm.seeTruth = seeTruth;

    function pressedButton(answer, button1, button2) {
        changeButton.change(button1, button2);
        addAnswer.add(answer);
    };

    function pressedImg(answer) {
        addAnswer.add(answer);
        changeImg.hideImg();
    };

    function seeTruth(){
        addAnswer.show();
        answerProcessor.check().then(function(res){
            vm.king = (res === 2) ;
            vm.lider = (res === 4);
            vm.soul = (res === 3);
            vm.inteligent = (res === 1);
            vm.empty = (res === 0);
        })
        .catch(function(err){
            console.log(err);
        });
    }; 
}

angular.module("myApp").controller("MainController", ['addAnswer','changeButton', 'answerProcessor', 'changeImg',  MainController]);