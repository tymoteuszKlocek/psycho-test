"use strict";

function soul() {
	return {
		restrict: "E",
		template: '<div class="modal-header">'+
		            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + 
		            '<h4 class="modal-title">Twój profil to: Soul</h4>'+
      				'</div>'+
      				'<div class="modal-body">'+
      				 '<p>Mocne strony: miłość do ludzi, empatia i umiejętność porozumienia się z ludźmi złamanymi na duchu</p>'+
       				 '<p>Słabe strony: ludzie moga Cię wyssać i wypluć, zdominować i wykorzystć, możesz się wypalić... biedaku. </p>'+
       				 '<p>Opis: W gruncie rzeczy jesteś najbardziej lubianym człowiekiem w towarzystwie, ludzie za Tobą tęsknią, gdy Cię nie ma. Zmieniasz nastrój nawet zatwardziałego betonu kiedy się pojawiasz. Jesteś jak oliwa tam gdzie panuje konflikt i zbyt duże tarcia. Nie zmarnuj swojego daru, nieś światu pokój i radość (wiem, że to wcale nie oznacza, że Ty je czujesz, pewnie już masz początki depresji).</p>'+
        			 '<p>Droga do szczęścia: Odnajdź Miłość i służ jej.</p>'+ 
		          '</div>' + 
		          '<div class="modal-footer">' +
		            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + 
		          '</div>',
	}
}

angular.module("myApp").directive("soul", [soul]);