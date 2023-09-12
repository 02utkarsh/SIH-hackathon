// $(document).ready(function () {
// 	var currentGfgStep, nextGfgStep, previousGfgStep;
// 	var opacity;
// 	var current = 1;
// 	var steps = $("fieldset").length;

// 	setProgressBar(current);

// 	$(".next-step").click(function () {

// 		currentGfgStep = $(this).parent();
// 		nextGfgStep = $(this).parent().next();

// 		$("#progressbar li").eq($("fieldset")
// 			.index(nextGfgStep)).addClass("active");

// 		nextGfgStep.show();
// 		currentGfgStep.animate({ opacity: 0 }, {
// 			step: function (now) {
// 				opacity = 1 - now;

// 				currentGfgStep.css({
// 					'display': 'none',
// 					'position': 'relative'
// 				});
// 				nextGfgStep.css({ 'opacity': opacity });
// 			},
// 			duration: 500
// 		});
// 		setProgressBar(++current);
// 	});

// 	$(".previous-step").click(function () {

// 		currentGfgStep = $(this).parent();
// 		previousGfgStep = $(this).parent().prev();

// 		$("#progressbar li").eq($("fieldset")
// 			.index(currentGfgStep)).removeClass("active");

// 		previousGfgStep.show();

// 		currentGfgStep.animate({ opacity: 0 }, {
// 			step: function (now) {
// 				opacity = 1 - now;

// 				currentGfgStep.css({
// 					'display': 'none',
// 					'position': 'relative'
// 				});
// 				previousGfgStep.css({ 'opacity': opacity });
// 			},
// 			duration: 500
// 		});
// 		setProgressBar(--current);
// 	});

// 	function setProgressBar(currentStep) {
// 		var percent = parseFloat(100 / steps) * current;
// 		percent = percent.toFixed();
// 		$(".progress-bar")
// 			.css("width", percent + "%")
// 	}

// 	$(".submit").click(function () {
// 		return false;
// 	})
// });


$(document).ready(function() {
var current_fs, next_fs, pre_fs;
var opacity;
var current = 1;
var steps = $("fieldset").length;
setProgressBar(current);
$(".next").click(function() {
current_fs = $(this).parent();
next_fs = $(this).parent().next();
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
next_fs.show();
current_fs.animate({opacity: 0}, {
step: function(now) {
opacity = 1 - now;
current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});
$(".pre").click(function() {
current_fs = $(this).parent();
pre_fs = $(this).parent().prev();
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
pre_fs.show();
current_fs.animate({opacity: 0}, {
step: function(now) {
opacity = 1 - now;
current_fs.css({
'display': 'none',
'position': 'relative'
});
pre_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});
function setProgressBar(curStep) {
var percent = parseFloat(100 / steps) * curStep;
percentpercent = percent.toFixed();
$(".pbar")
.css("width",percent+"%")
}
$(".submit").click(function() {
return false;
})
});
//num1=total students
//num2=student enrolles in various T & V programs
//num3= total average fee
//num4= scholarship aid
//num5= attendance
//avialability of sports facility as 1
//sanitation and technical facilities as 1(sani & techi)
//teaching staff good institution 70%(tsi)
//average income is 12000-50000 so we have taken 35000
// urban areas average tution fee is 64763 and rural is 32127
// nothing for personality devlopment programs
function score() {
    var num1 = parseFloat(document.getElementById("stu").value);
    var num2 = parseFloat(document.getElementById("pro").value);
    var num3 = parseFloat(document.getElementById("fee").value);
    var num4 = parseFloat(document.getElementById("scho").value);
    var num5 = parseFloat(document.getElementById("Atte").value);
    var num6 = parseFloat(document.getElementById("resi").value);
    var num7 = parseFloat(document.getElementById("phhd").value);
    var num8 = parseFloat(document.getElementById("mte").value);
    var sani= 1;
    var techi = 1;
    var tsi= 70;

    var result1 = ((num2/num1)*(1-(num3/35000))*(1+(num4/100))*1*(num5/100)*1*techi*sani**tsi*((num6+num7+num8)/100))*100;
    document.getElementById("ccl").innerHTML = result1;
  }
