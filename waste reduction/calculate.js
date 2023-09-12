$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	// $(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();
      $(".full").hide();

			// get input values
      var solidWaste=document.getElementById("swaste").value;
      var hazWaste = document.getElementById("Hwaste").value;
      var organicWaste = document.getElementById("owaste").value;
      var eWaste = document.getElementById("ewaste").value;
      var recycledWaste = document.getElementById("rcycwaste").value;


			// set variables for calculating each component score
      var solidScore="";
      var hazScore="";
      var organicscore="";
      var eScore="";
      var recycledScore="";


			var totalScore = "";



			if (solidWaste === 0 || solidWaste === "undefined") {
				solidScore = 0;
			} else {
				solidScore = solidWaste ;
			}
			console.log("solid score is: " + solidScore);

			if (hazWaste === 0 || hazWaste === "undefined") {
				hazScore = 0;
			} else {
				hazScore = hazWaste;
			}
			console.log("haz score is: " + hazScore);

			if (organicWaste === 0 || organicWaste === "undefined") {
				organicscore = 0;
			} else {
				organicscore = organicWaste ;
			}
			console.log("organic score is: " + organicscore);

			if (ewaste === 0 || ewaste === "undefined") {
				eScore = 0;
			} else {
				eScore = eWaste;
			}
			console.log("e waste score is: " + eScore);

			if (recycledWaste === 0 || recycledWaste === "undefined") {
				recycledScore = 0;
			} else {
				recycledScore = recycledWaste;
			}
			console.log("recycled score is: " + recycledScore);
      console.log("hello");
      let a=parseInt(solidScore, 10);
      let b=parseInt(hazScore, 10);
      let c=parseInt(organicscore, 10);
      let d=parseInt(eScore, 10);
      let e=parseInt(recycledScore, 10);
      console.log(a+b+c+d);
      let total=a+b+c+d;
      let div=(total-e)/total;
			// calculate scores for each category
			// var wastedScore =;
      // console.log("wasted score is:"+wastedScore)
			// calculate total score and round to nearest whole integer
			totalScore = Math.round(div*100);
			var formattedScore = totalScore.toLocaleString("en");
			console.log(totalScore);


			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}

		// // check selection made for recycling newspaper before calculating and displaying score
		// var recycleNewspaperSelectionYes = document.getElementById("optionsRadio1").checked;
		// var recycleNewspaperSelectionNo = document.getElementById("optionsRadio2").checked;
		// var recycleAlumTinSelectionYes = document.getElementById("optionsRadio3").checked;
		// var recycleAlumTinSelectionNo = document.getElementById("optionsRadio4").checked;
    //
		// if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false || recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
		// 	if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false) {
		// 		$("#newspaper-alert").show();
		// 	} else {
		// 		$("#newspaper-alert").hide();
		// 	}
    //
		// 	if (recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
		// 		$("#alum-tin-alert").show();
		// 	} else {
		// 		$("#alum-tin-alert").hide();
		// 	}
		// } else {
			calculateAndDisplayScore();

	});
});
