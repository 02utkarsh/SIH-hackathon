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
      var carbonRate=document.getElementById("carbon").value;
      var wasteRate = document.getElementById("waste").value;
      var energyRate= document.getElementById("energy").value;
      var evtaaRate = document.getElementById("evtaa").value;


      var revenue = document.getElementById("revenue").value;
      var inv= document.getElementById("inv").value;
      var cost = document.getElementById("cost").value;
			// set variables for calculating each component score
      var carbonScore="";
      var wasteScore="";
      var energyscore="";
      var evtaaScore="";

      var revenuescore="";
      var invscore="";
      var costscore="";

			var totalScore = "";
      var totScore="";
			var finalScore="";


			if (carbonRate === 0 || carbonRate === "undefined") {
				carbonScore = 0;
			} else {
				carbonScore = carbonRate ;
			}
			console.log("solid score is: " + carbonScore);

			if (energyRate === 0 || energyRate === "undefined") {
				energyScore = 0;
			} else {
				energyScore = energyRate;
			}
			console.log("haz score is: " + energyScore);

			if (wasteRate === 0 || wasteRate === "undefined") {
				wasteScore = 0;
			} else {
				wasteScore = wasteRate ;
			}
			console.log("organic score is: " + wasteScore);

			if (evtaaRate === 0 || evtaaRate === "undefined") {
				evtaaScore = 0;
			} else {
				evtaaScore = evtaaRate;
			}
			console.log("e waste score is: " + evtaaScore);




      if (inv === 0 || inv === "undefined") {
				invscore = 0;
			} else {
				invscore = inv;
			}
			console.log("investment is: " + inv);



      if (cost === 0 || cost === "undefined") {
				costscore = 0;
			} else {
				costscore = cost;
			}
			console.log("cost score is: " + costscore);



      if (revenue === 0 || revenue === "undefined") {
				revenuescore = 0;
			} else {
				revenuescore = revenue;
			}
			console.log("e waste score is: " + revenuescore);


      console.log("hello");
      let a=parseFloat(carbonScore*0.40);
      let b=parseFloat(energyScore*0.30);
      let c=parseFloat(wasteScore*0.20);
      let d=parseFloat(evtaaScore*0.10);
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(a+b+c+d);
      let total=a+b+c+d;
			// calculate scores for each category
			// var wastedScore =;
      // console.log("wasted score is:"+wastedScore)
			// calculate total score and round to nearest whole integer
			totalScore = Math.round(total);
			var formattedScore = totalScore.toLocaleString("en");
			console.log(totalScore);
      formattedScore=formattedScore+"%"

			document.getElementById("score").innerHTML = formattedScore;





      let x=parseInt(revenuescore)
      let y=parseInt(costscore)
      let z=parseInt(invscore)
      let tot=((x-y)/z);
      totScore=Math.round(tot*100);
      var formatScore=totScore.toLocaleString("en");
      formatScore=formatScore+"%"

			document.getElementById("roi").innerHTML = formatScore;





			let aa=parseFloat(carbonScore*0.45);
			let bb=parseFloat(energyScore*0.10);
			let cc=parseFloat(wasteScore*0.30);
			let dd=parseFloat(evtaaScore*0.15);
			console.log(aa+bb+cc+dd);
			let t=aa+bb+cc+dd;
			// calculate scores for each category
			// var wastedScore =;
			// console.log("wasted score is:"+wastedScore)
			// calculate total score and round to nearest whole integer
			finalScore = Math.round(t);
			var formScore = finalScore.toLocaleString("en");
			formScore=formScore+"%"

			document.getElementById("benef").innerHTML = formScore;
			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}


			calculateAndDisplayScore();

	});
});
