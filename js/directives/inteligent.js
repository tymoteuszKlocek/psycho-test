"use strict";

function inteligent() {
	return {
		restrict: "EA",
		template: '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
        '<span aria-hidden="true">&times;</span></button>'+
        '<h4 class="modal-title">Twój profil to: Intellectualist</h4>'+
      '</div>'+
      '<div class="modal-body">'+
        '<p>Mocne strony: potężny intelekt, nonkomformizm, umiłowanie prawdy i wolności</p>'+
        '<p>Słabe strony: masz problemy z emaptią i skłoności socjopatyczne, możesz zwariować (np. paranoja), ranisz uczucia innych i masz to w dupie </p>'+
        '<p>Opis: Jesteś geniuszem, który tak dużo może wnieść w rozwój naszej kultury. Okaż nam swoją wielkość i podziel się swoimi przemyśleniami. Pchnij do przodu sprawy nad którymi męczą sie prostaczki, rozjaśniej ich mroki ukałdając im w głowach to co trudne. Tylko nie gardź innymi, bo to oznaka słabości i małości.</p>'+
        '<p>Droga do szczęścia: Odnajdź prawdę i broń jej przed kłamcami.</p>'+
      '</div>'+
      '<div class="modal-footer">'+
       '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
      '</div>'
	}
}

angular.module("myApp").directive("inteligent", [inteligent]);