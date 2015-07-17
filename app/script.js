$(document).ready(function() {
	//On makePizza form submit, do something
	$("#imageMe").on("submit", function(e) {
		e.preventDefault();
		var imageTxt = $("input[name=imageTxt]").val();

		$.post("makePizza", yourPizza, function(response) {
			$("#yourPizza").text("You get a " + response.pizzaString);
			$("#hubot").text("Hubot! Image me " + response.pizzaString);
			$("#pizzaImg").attr("src", response.img);
			$("#pizzaImg").width(200);
			$("#pizzaImg").height(200);
		});
	});
});
