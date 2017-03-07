'use strict';

angular.module('myAppLogin').controller('UserLoginController',
		[ '$scope', 'UserLoginService',function($scope, UserLoginService) {
			var self = this;
			self.login = {
				loginname : '',
				password : ''
			};
			self.returnValue = '';
			self.returnValues = [];

			self.submit = submit;
			self.reset = reset;

			function submit() {
				UserLoginService.checkUserLogin(this.loginname,this.password)
				.then(
			            function(errResponse){
			                console.error('Error while creating User');
			            }
			        );
			}

			function reset() {
				self.login = {
						loginname : '',
						password : ''
				};
				$scope.myForm.$setPristine(); //reset Form
			}

		} ]);
