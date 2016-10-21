"use strict";

function empty() {
	return {
		restrict: "E",
		template: '<div class="modal-header">'+
		            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		              '<span aria-hidden="true">&times;</span></button>' + 
		            '<h4 class="modal-title">Twój profil to: brak </h4>' + 
		          '</div>' + 
		          '<div class="modal-body">'+
      				 '<p>Wypełnij test! UWAGA ! Jeśli juz to zrobiłeś to Twój wynik jest tak nieprawdopodobny, że serwer się zawiesił (tak to zinterpretujmy).</p>'+ 
		          '</div>' + 
		          '<div class="modal-footer">' +
		            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + 
		          '</div>',
	}
}

angular.module("myApp").directive("empty", [empty]);