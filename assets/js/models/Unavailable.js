var Unavailable = (function(){

	return {
		all: function(callback){
			$.ajax({
				url: config('API_URL') + 'unavailable',
				method: 'GET',
				headers: {
					"Authorization": auth.getToken()
				},
				success: function(data){
					callback(false, data.dates);
				},
				error: function(a){
					var errorObj = new ErrorObj(a.responseJSON);
					callback(errorObj);
				}
			});
		},
		destroy: function(id, callback){
			$.ajax({
				url: config('API_URL') + 'unavailable/' + id,
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