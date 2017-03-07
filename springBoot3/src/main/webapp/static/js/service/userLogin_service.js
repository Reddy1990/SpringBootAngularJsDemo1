'use strict';

angular.module('myAppLogin').factory('UserLoginService',
		[ '$http', '$q', function($http, $q) {

			var factory = {
				checkUserLogin : checkUserLogin
			};

			return factory;

			function checkUserLogin(loginname,password) {

				var url = "/SpringBootLogin/user/" + loginname+"/"+password;
				var deferred = $q.defer();
				$http.get(url).then(
						function(response) {
							deferred.resolve(response.data);
						}, function(errResponse) {
							console.error('Error while creating User');
							deferred.reject(errResponse);
						});
				return deferred.promise;

			}

		} ]);
