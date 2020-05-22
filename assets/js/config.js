var config = (function(){

	var keys = {
		BASE_URL: 'http://localhost:8888/tourmanager-app/',
		API_URL: 'http://localhost:8888/gdates/public/api/'
	};

	function config(key){
		if(keys.hasOwnProperty(key)){
		    return keys[key];
		}
		return null;
	}

	return config;

})();