function changeButton() {
	"use strict";

	function change(input1, input2) {
            var button = document.querySelectorAll(".btn");
            button[input1].disabled = true;
            button[input2].disabled = true;
        }

	return {
		change: change
	};
}

angular.module('myApp').factory('changeButton', [changeButton]);
