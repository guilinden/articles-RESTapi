(function(){
	angular
	.module('app')
	.service('search', search);

	function search($http){
		var vm = this;
		
		vm.getAllArticles = getAllArticles;
		vm.createArticle = createArticle;
		vm.deleteArticle = deleteArticle;
		vm.editArticle = editArticle;

		function editArticle(id,jsonObject){
			return $http({
				method: 'put',
				url: 'http://localhost:3000/api/v1/articles/' + id,
				data: jsonObject
			});
		}
		


		function deleteArticle(id){
			return $http({
				method: 'delete',
				url: 'http://localhost:3000/api/v1/articles/' + id
			});
		}

		function getAllArticles(){
			return $http({
				method: 'get',
				url: 'http://localhost:3000/api/v1/articles'

			});
		}

		function createArticle(jsonObject){
			return $http({
				method: 'post',
				url: 'http://localhost:3000/api/v1/articles',
				data: jsonObject
			});
		}

	}
})();