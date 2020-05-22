var Gig = (function(){

	return {
		all: function(callback){
			$.ajax({
				url: config('API_URL') + 'gigs',
				method: 'GET',
				headers: {
					"Authorization": auth.getToken()
				},
				success: function(data){
					callback(false, data.gigs);
				},
				error: function(a){
					var errorObj = new ErrorObj(a.responseJSON);
					callback(errorObj);
				}
			});
		},
		destroy: function(id, callback){
			$.ajax({
				url: config('API_URL') + 'gigs/' + id,
				method: 'DELETE',
				headers: {
					"Authorization": auth.getToken()
				},
				success: function(data){
					callback(false, data.message);
				},
				error: function(a){
					var errorObj = new ErrorObj(a.responseJSON);
					callback(errorObj);
				}
			});
		}
	};

})();