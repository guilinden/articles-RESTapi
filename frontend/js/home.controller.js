(function(){
	angular
	.module('app')
	.controller('homeController', homeController);

	function homeController(search,$log){

		var vm = this;


		vm.deleteArticle = deleteArticle;
		vm.getAllArticles = getAllArticles;
		vm.editableArticle = editableArticle;
		vm.log = log;

		function log(){
			console.log(vm.editableArticleObject);
		}


		function editableArticle(article){
			vm.editableArticleObject = article;
			console.log(vm.editableArticleObject.title);
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