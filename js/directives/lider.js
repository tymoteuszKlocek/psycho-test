"use strict";

function lider() {
	return {
		restrict: "E",
		template: '<div class="modal-header">'+
		            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + 
		            '<h4 class="modal-title">Twój profil to: Leader</h4>' + 
		          '</div>' + 
		          '<div class="modal-body">'+
      				 '<p>Mocne strony: potrafisz zrozumieć drugiego, potrafisz też nim kierować dla wspólnego dobra. No brawo!</p>'+
       				 '<p>Słabe strony: Możesz się zmienić w manipulującego, żądnego afektów maniaka. Skupiasz się za dużo na sobie.</p>'+
       				 '<p>Opis: Jesteś lubianym człowiekiem, nie boisz się konfrontacji i odpoweidzialności, szukasz prawdy i miłości. No prawie ideał, tylko ciągle wpatrzony w siebie (a nie w prawdę, czy miłość). Ludzie Cie potrzebują, pomóż im - wyznacz kierunki dla ich myśli i serc. Nie bądź naiwny, nie daj się wykorzystać. I nie zmuszaj innych do niczego mały Hitlerku!</p>'+
        			 '<p>Droga do szczęścia: Odnajdź ludzi i służ im.</p>'+  
		          '</div>' + 
		          '<div class="modal-footer">' +
		            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + 
		          '</div>',
	}
}

angular.module("myApp").directive("lider", [lider]);