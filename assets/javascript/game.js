var wins = 0;
var losses = 0;
var images = ["assets/images/blue.jpg", "assets/images/purple.jpg", "assets/images/pink.jpg", "assets/images/green.jpg"];
var imgAlts = ["Blue Crystal", "Purple Crystal", "Pink Crystal", "Green Crystal"];

var target;
var score;
var crystalValues;

newGame();

function newGame () {
	$("#totalWins").text(wins);
	$("#totalLosses").text(losses);
  target = Math.floor((Math.random() * 102) + 19);
  $("#targetScore").text(target);
  score = 0;
  $("#userScore").text(score);
  crystalValues = [getCrystalValue(), getCrystalValue(), getCrystalValue(), getCrystalValue()];
  $("#crystals").html("");
	setupCrystals();
}

function getCrystalValue() {
  return Math.floor((Math.random() * 12) + 1);
}

function setupCrystals() {
	for (var i = 0; i < crystalValues.length; i++) {
		var image = $("<img>");
		image.addClass("crystal-image");
		image.attr("src", images[i]);
		image.attr("data-value", crystalValues[i]);
    image.attr("alt", imgAlts[i]);
		$("#crystals").append(image);
	}

	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#userScore").text(score);

    if (score === target) {
      wins++;
      $("#result").text("You Won!");
      newGame();
    }

    else if (score >= target) {
      losses++;
      $("#result").text("You Lost.");
      newGame();
    }
  });
}