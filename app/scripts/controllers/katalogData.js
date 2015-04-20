'use strict';

shopngApp.factory('katalogService', function($resource) {

    return $resource('https://localhost:8443/shop/rest/katalog', {bezeichnung:'@bezeichnung'}, {
      query: {method:'GET', params:{bezeichnung:'Tisch'}, isArray:true},
      search: {method:'GET', params:{bezeichnung:'@bezeichnung'}, isArray:true}
    });	



//	return {

//		getItems: function() {
//			var deferred = $q.defer();
//			$resource('https://localhost:8443/shop/rest/katalog', {bezeichnung:'@bezeichnung'})
//				.get({bezeichnung:'Tisch'},
//					function(item) {
//						deferred.resolve(item);
//					},
//					function(response) {
//						deferred.reject(response);
//					}
//				);
//			return deferred.promise;
//		}


//	};
});