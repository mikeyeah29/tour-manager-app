(function(){

	// var logoutBtn = $('.btn-loutout');

	// logoutBtn.on('click', function(){
	// 	console.log('logging out...');
	// 	auth.logout();
	// });

	var links = [
		{ name: 'Sign up', href: config('BASE_URL') + '/signup.php', permissions: 'loggedOut' },
		{ name: 'Login', href: config('BASE_URL') + '/', permissions: 'loggedOut' },
		{ name: 'Gigs', href: config('BASE_URL') + '/gigs.php', permissions: 'loggedIn' },
		{ name: 'Logout', href: config('BASE_URL') + '/logout.php', permissions: 'loggedIn' }
	];

	auth.isLoggedIn(function(loggedIn){
		var permissions = ( loggedIn ? 'loggedIn' : 'loggedOut' );
		var menu = new Menu($('#main-nav'), links, permissions);
		menu.render();
	});

})();