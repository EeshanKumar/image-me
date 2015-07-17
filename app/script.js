$(document).ready(function() {
	//On button click, do something
	$("button").on("click", function() {
		var url = $(this).attr("id");

		//Request and then recieve reponse from server
		$.get("/" + url, function(response) {
			var resText;

			//Once received, format response basd on url requested
			switch (url) {
				case "song":
					resText = response;
					break;
				case "joke":
					resText = response.setup + ": " + response.punchline;
					break;
				case "pizza":
					resText = "You get a " + response.crust + " pizza ";
					resText += "with " + response.cheese + " cheese ";
					resText += "and " + response.toppings + " on top!";
					break;
				default:
					break;
			}

		  //Return value in appropriate p tag
		  $("p#ajax-" + url).text(resText);
	  });
	});

	//On makePizza form submit, do something
	$("#makePizza").on("submit", function(e) {
		e.preventDefault();
		var crust = $("input[name=crust]").val();
		var cheese = $("input[name=cheese]").val();
		var toppings = $("input[name=toppings]").val();
		var yourPizza = { crust: crust, cheese: cheese, toppings: toppings };

		$.post("makePizza", yourPizza, function(response) {
			$("#yourPizza").text("You get a " + response.pizzaString);
			$("#hubot").text("Hubot! Image me " + response.pizzaString);
			$("#pizzaImg").attr("src", response.img);
			$("#pizzaImg").width(200);
			$("#pizzaImg").height(200);
		});
	});

	//On piglatin form submit, do something
	$("#piglatin").on("submit", function(e) {
		e.preventDefault();
		var firstname = $("input[name=firstname]").val();
		var lastname = $("input[name=lastname]").val();
		var name = { firstname: firstname, lastname: lastname };

		$.post("piglatin", name, function(response) {
			var piglatinified = response.firstname + " " + response.lastname;
			$("#piglatinified").text(piglatinified);
		});
	});
});
