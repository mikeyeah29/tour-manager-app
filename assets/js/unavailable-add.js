(function(){

	app.loadPage('loggedIn', '', function(){

		var messageBox = new MessageBox($('#message-box-container'));

		var addUnavailabeForm = new AjaxForm({
			id: 'addUnavailabeForm',
			token: auth.getToken(),
			callback: function(error, data){
			
				if(error){
					messageBox.show('error', error.getMessages());
				}else{
					messageBox.show('success', [data.message]);
					router.redirect('unavailable.php');
				}

			}
		});

	});

})();