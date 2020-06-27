var config = (function(){

	// var keys = {
	// 	BASE_URL: 'http://localhost:8888/tourmanager-app/',
	// 	API_URL: 'http://localhost:8888/gdates/public/api/'
	// };

	var keys = {
		BASE_URL: 'http://localhost:8888/greenroom-app',
		API_URL: 'https://api.greenroomapp.co/api'
	};

	function config(key){
		if(keys.hasOwnProperty(key)){
		    return keys[key];
		}
		return null;
	}

	return config;

})();