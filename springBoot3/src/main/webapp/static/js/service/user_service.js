'use strict';

angular.module('myApp').factory(
		'UserService',
		[
				'$http',
				'$q',
				function($http, $q) {

					var factory = {
						fetchAllUsers : fetchAllUsers,
						createUser : createUser,
						updateUser : updateUser,
						deleteUser : deleteUser
					};

					return factory;

					function fetchAllUsers() {

						var url = "/SpringBoot/user";

						return $http.get(url).then(function(response) {
							return response.data;
						});

					}

					function createUser(user) {
						var deferred = $q.defer();
						$http.post('/SpringBoot/user/', user).then(
								function(response) {
									deferred.resolve(response.data);
								}, function(errResponse) {
									console.error('Error while creating User');
									deferred.reject(errResponse);
								});
						return deferred.promise;
					}


					function updateUser(user, id) {
						var url = "/SpringBoot/user/"+id;
						return $http.put(url,user).then(function(response) {
							return response.data;
						});
					}

					function deleteUser(id) {
						var url = "/SpringBoot/user/" + id;

						return $http.post(url).then(function(response) {
							return response.data;
						});
					}


				} ]);
