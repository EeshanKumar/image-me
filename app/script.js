$(document).ready(function() {
	//On user submitting text
	$("#imageMe").on("submit", function(e) {
		//Prevent page refresh
		e.preventDefault();
		var imageObj = { imageTxt: $("input[name=imageTxt]").val() };
		console.log(imageObj);
		//POST to server using ajax
		$.post("imageMe", imageObj, function(res) {
			$("#yourImage p").text("Here is your " + res.imageTxt);
			$("#yourImage img").attr("src", res.img);
		});
	});
});
