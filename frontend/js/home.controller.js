(function(){
	angular
	.module('app')
	.controller('homeController', homeController);

	function homeController(search,$log,$routeParams,$location){

		var vm = this;


		vm.deleteArticle = deleteArticle;
		vm.getAllArticles = getAllArticles;
		vm.editArticle = editArticle;

		function editArticle(){
			vm.jsonArticle = {
				'title': vm.articleTitle,
				'body': vm.articleBody
			}

			vm.ArticleId = $routeParams.id;
			
			search.editArticle(vm.ArticleId,vm.jsonArticle)
			.then(function successCallback(data){
				$location.path('/');
			}, function errorCallback(error){
				alert('Something went wrong');	
			})
		}


		function deleteArticle(id){
			search.deleteArticle(id)
			.then(function successCallback(data){
				getAllArticles();
			}, function errorCallback(error){
				alert('Something went wrong');	
			})

		}


		function getAllArticles(){
			search.getAllArticles()
				.then(function successCallback(data){
					vm.list = data;
				}, function errorCallback(error){
					$log.log("Unable to fetch data" + error);
				});
		}

		getAllArticles();
	}
})();