(function(){

	// data

	var state = {
		gigs: []
	};

	app.loadPage('loggedIn', '/', function(){

		// init components
		var headings = [
			{ display: 'Venue', property: 'venue' },
			{ display: 'Date', property: 'date' }
		];
		var table = new Table($('.gigs'), headings, []);
		var messageBox = new MessageBox($('#message-box-container'));
		var confirm = new ConfirmPopUp($('#areyousure'), 'Are you sure you want to delete this gig?');
		confirm.render();

		function loadGigs(){
			// start
			Gig.all(function(error, gigs){

				if(error){
					messageBox.show('error', error.getMessages());
				}

				state.gigs = gigs;
				table.update(state.gigs);

			});
		}

		/* EVENTS */

		// delete
		$('.gigs').on('click', '.btn-delete', function(){
			var id = $(this).data('id');
			confirm.open(function(){
				Gig.destroy(id, function(error, message){
					if(error){
						messageBox.show('error', error.getMessages());
					}else{
						loadGigs();
						confirm.close();
						messageBox.show('success', message);
					}
				});
			});
		});

		// start
		loadGigs();

	});
})();