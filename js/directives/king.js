"use strict";

function king() {
	return {
		restrict: "E",
		template: '<div class="modal-header">'+
		            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		              '<span aria-hidden="true">&times;</span></button>' + 
		            '<h4 class="modal-title">Twój profil to: King</h4>' + 
		          '</div>' + 
		          '<div class="modal-body">'+
      				 '<p>Mocne strony: Nie boisz się włądzy i odpoweidzialności, jesteś odważny i silny!</p>'+
       				 '<p>Słabe strony: Jak się nie nauczysz słuchać i wczuwać w sytuację innych, to będziesz drugim Hitlerem (a może już jesteś?). </p>'+
       				 '<p>Opis: Jeseś prawdziwym wodzem. Wojowniczy, uparty i nieulękniony - wow! kto to Cię zrobił? Rządź, króluj, po to się urodziłeś. Tylko wcześniej musisz znaleźć sobie poddanych - na końcu i oni, i Ty będziecie szczęśliwi. No i pamiętaj o Hitlerze, nie zrób najbliższym drugiego Auschwitz. </p>'+
        			 '<p>Droga do szczęścia: Podbijaj i rządź!</p>'+  
		          '</div>' + 
		          '<div class="modal-footer">' +
		            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + 
		          '</div>',
	}
}

angular.module("myApp").directive("king", [king]);