angular.module('criminalApp', [])
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];


function CriminalsController($http){

var context = this;
context.all = [];
context.addCriminal = addCriminal;
context.newCriminal = {};
context.getCriminals = getCriminals;
context.deleteCriminals = deleteCriminals;


getCriminals();

function getCriminals(){
	$http
	.get('http://localhost:3000/criminals')
	.then(function(response){
		context.all = response.data;
	});
}

function addCriminal(){
	$http
	.post('http://localhost:3000/criminals', context.newCriminal)
	.then(function(response){
		getCriminals();
	});
	context.newCriminal = {};
}


	//DELETE
	function deleteCriminals(criminal) {
		console.log("delete button clicked");

		  $http
		  .delete('http://localhost:3000/criminals/' + criminal._id)
		  .then(function(response){
		  	console.log(response);
		  	var index = context.all.indexOf(criminal);
		  	context.all.splice(index, 1);
		  });
		
	}
}