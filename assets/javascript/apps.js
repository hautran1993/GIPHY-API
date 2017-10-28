$(document).ready(function(){
//array of movies
	var heroes = ["SpiderMan","Rocket Racoon", "Groot", "Spawn", "Batman", "Wonder Women", "AquaMan", "Hawkgirl", "Green Lantern",
				  "Hulk", "Super-Girl", "Wolverine","Thor" , "Raven", "Robin", ]
//DELEGATION
	$(document).on("click", "button", function () {
	$("#gifHere").empty();
	var hero= $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=dc6zaTOxFJmzC&limit=15"
	        
	   
		$.ajax({
		  	url: queryURL,
		  	method: "GET"
		})
		//after the data from ajaz comback then run this command
		.done(function(response) {
			
			//so you don't have to use the long code repeatedly
			var result = response.data

			for (var i = 0; i < result.length; i++){

				var heroDiv = $("<div>");

				var h = $("<p>").text("rating is " + result[i].rating);

				var heroImg = $("<img>");
				heroImg.addClass("custom-class");
				//result[i].url

				heroImg.attr("src", result[i].images.fixed_height.url);
				heroImg.attr("data-still", result[i].images.fixed_height_still.url);
				heroImg.attr("data-animate", result[i].images.fixed_height.url);
				heroImg.attr("data-state", "animate");
				
				heroDiv.html(h);
				heroDiv.html(heroImg);

				$("#gifHere").append(heroDiv);
			}
		
		});

	});
	$(document).on("click", "img", function(){
		//grab the state that is in
		var state = $(this).attr("data-state")
		if (state === "animate") {
			$(this).attr("src", $(this).attr("data-still"))
			$(this).attr("data-state", "still");
		} else{
			$(this).attr("src", $(this).attr("data-animate"))
			$(this).attr("data-state", "animate");
		}

	}); 


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
	//function to add another button
	$("#add-hero").on("click", function(envent) {
		//event.preventDefault() prevents the form from entering while adding another button
		event.preventDefault();
		//this line will grab the text from the input box
		var hero = $("#hero-input").val().trim();
		//the movie from the textbox is then aded to our array
		heroes.push(hero);
		//calling renderbutton function will run the loop for all of the heroes
		renderButtons();
		$("#hero-input").val("")
	});
	//display the initial buttons from the og heroes
	renderButtons();
	
}); 