(function(){
	angular
	.module('app')
	.controller('createController', createController);

	function createController(search,$location){
		var vm = this;


		vm.createArticle = createArticle;




		function createArticle(){

			vm.jsonArticle = {
				'title': vm.articleTitle,
				'body': vm.articleBody
			}


			search.createArticle(vm.jsonArticle)
			.then(function successCallback(data){
				$location.path('/');

			}, function errorCallback(error){
				alert('Something went wrong');	
			})

		}
	}
})();