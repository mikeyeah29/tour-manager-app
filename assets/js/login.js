(function(){
	app.loadPage('loggedOut', 'gigs.php', function(){

		var loginForm = new AjaxForm({
			id: 'loginForm',
			callback: function(error, data){
				console.log(data);
				auth.login(data.access_token, 'gigs.php');
			}
		});

	});
})();