$(document).ready(function(){
	var title="matrix";
	var queryURL = "https://www.omdbapi.com/?t=" + title
	 + "&y=&plot=short&apikey=40e9cece";


	$.ajax({
	  	url: queryURL,
	  	method: "GET"
	}).done(function(response){
		$("#tittle").append(response);
		console.log(response);
	})
	$.ajax({
	  	url: "https://www.omdbapi.com/?t=" + "avatar"
	 + "&y=&plot=short&apikey=40e9cece",
	  	method: "GET"
	}).done(function(response){
		$("#tittle").append(response);
		console.log(response);
	})
	$.ajax({
	  	url: "https://www.omdbapi.com/?t=" + "toy+stories"
	 + "&y=&plot=short&apikey=40e9cece",
	  	method: "GET"
	}).done(function(response){
		$("#tittle").append(response);
		console.log(response);
	})
	$.ajax({
	  	url: "https://www.omdbapi.com/?t=" + "the+one"
	 + "&y=&plot=short&apikey=40e9cece",
	  	method: "GET"
	}).done(function(response){
		$("#tittle").append(response);
		console.log(response);
	})
}); 