(function(){

	var state = {
		unavailableDates: []
	};

	app.loadPage('loggedIn', '/', function(){

		// init components
		var headings = [
			{ display: 'Date', property: 'date' },
			{ display: 'Reason', property: 'reason' }
		];
		var table = new Table($('.unavailableDates'), headings, []);
		var messageBox = new MessageBox($('#message-box-container'));
		var confirm = new ConfirmPopUp($('#areyousure'), 'Are you sure you want to delete this date?');
		confirm.render();

		function loadDates(){
			// start
			Unavailable.all(function(error, dates){

				if(error){
					messageBox.show('error', error.getMessages());
				}

				state.unavailableDates = dates;
				table.update(state.unavailableDates);

			});
		}

		/* EVENTS */

		// delete
		$('.unavailableDates').on('click', '.btn-delete', function(){
			var id = $(this).data('id');
			confirm.open(function(){
				Unavailable.destroy(id, function(error, message){
					if(error){
						messageBox.show('error', error.getMessages());
					}else{
						loadDates();
						confirm.close();
						messageBox.show('success', message);
					}
				});
			});
		});

		// start
		loadDates();

	});
	
})();