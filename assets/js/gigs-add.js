(function(){

	app.loadPage('loggedIn', '', function(){

		var messageBox = new MessageBox($('#message-box-container'));

		var addGigForm = new AjaxForm({
			id: 'addGigForm',
			token: auth.getToken(),
			callback: function(error, data){
			
				if(error){
					messageBox.show('error', error.getMessages());
				}else{
					messageBox.show('success', [data.message]);
					router.redirect('gigs.php');
				}

			}
		});

	});

})();