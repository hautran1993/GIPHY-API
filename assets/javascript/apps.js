$(document).ready(function(){
//array of movies
var heroes = ["Superman", "Batman", "WonderWomen", "the flash"]

	// $(".gif").on("click", function () {
	// var dcHero= $(this).attr("data-person");
	// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
 //        dcHero + "&api_key=dc6zaTOxFJmzC&limit=10";    

	// 	$.ajax({
	// 	  	url: queryURL,
	// 	  	method: "GET"
	// 	}).done(function(response){
	// 		console.log(response) 
	// 	})
	// });

	//function for displaying hero data
	function renderButtons() {
		//emptying the hero button div before adding more
		$("#hero-button").empty();

		for (var i = 0; i < heroes.length; i++){

			//dynamically generating buttons for each movie in the array
			var a = $("<button>");
			//adding a class of hero to our button
			a.addClass("hero");
			//adding a data-attribute
			a.attr("data-name", heroes[i]);
			//providingnthe initial button text
			a.text(heroes[i]);
			//adding the button to the html
			$("#hero-button").append(a);
		}
	}

	$("#add-hero").on("click", function(envent) {
		//event.preventDefault() prevents the form from entering while adding another button
		event.preventDefault();
		//this line will grab the text from the input box
		var hero = $("#hero-input").val().trim();
		//the movie from the textbox is then aded to our array
		heroes.push(hero);
		//calling renderbutton function will run the loop for all of the heroes
		renderButtons();
	})
	//display the initial buttons from the og heroes
	renderButtons();
	
	
}); 