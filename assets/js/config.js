var config = (function(){

	// var keys = {
	// 	BASE_URL: 'http://localhost:8888/tourmanager-app/',
	// 	API_URL: 'http://localhost:8888/gdates/public/api/'
	// };

	var keys = {
		BASE_URL: 'http://localhost:8888/tourmanager-app/',
		API_URL: 'http://gdates.rwdstaging.co.uk/api/'
	};

	function config(key){
		if(keys.hasOwnProperty(key)){
		    return keys[key];
		}
		return null;
	}

	return config;

})();