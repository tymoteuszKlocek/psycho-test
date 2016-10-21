"use strict";

function changeImg() {

	function hideImg() {
            var imgs = document.querySelectorAll(".img");
            var good = document.querySelector(".good");
            var choose = document.querySelector(".choose");

            good.style.display = "block";
            choose.style.display = "none";

            for(var i=0; i<imgs.length; i++) {
                imgs[i].style.display = "none";
            }
        }

	return {
		hideImg: hideImg
	};
}

angular.module('myApp').factory('changeImg', [changeImg]);
