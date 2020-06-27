(function(){

	app.loadPage('loggedOut', '/gigs.php', function(){

		var messageBox = new MessageBox($('#message-box-container'));

		var loginForm = new AjaxForm({
			id: 'loginForm',
			callback: function(error, data){

				console.log('the error: ', error, data);

				if(error){
					messageBox.show('error', error.getMessages());
				}else{
					auth.login(data.access_token, '/gigs.php');
				}

			}
		});

	});
})();