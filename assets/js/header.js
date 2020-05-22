(function(){

	var logoutBtn = $('.btn-loutout');

	logoutBtn.on('click', function(){
		console.log('logging out...');
		auth.logout();
	});

})();