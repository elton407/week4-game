$( document ).ready(function(){
  var numberToWin=Math.floor(Math.random()*101+19)
  //random number for user to get

  $("#randomNumber").text(numberToWin);
  //text added to index showing random number

var gem1 = Math.floor(Math.random()*11+1)
var gem2 = Math.floor(Math.random()*11+1)
var gem3 = Math.floor(Math.random()*11+1)
var gem4 = Math.floor(Math.random()*11+1)

// random gem values 

var userPoints = 0;
var wins = 0;
var loss = 0;;

$("#gamesWon").text(wins);
$("#gamesLost").text(loss);

function reset (){
	numberToWin = Math.floor(Math.random()*101+19);
	$("#randomNumber").text(numberToWin);
	gem1 = Math.floor(Math.random()*11+1);
	gem2 = Math.floor(Math.random()*11+1);
	gem3 = Math.floor(Math.random()*11+1);
	gem4 = Math.floor(Math.random()*11+1);
	userPoints = 0;
	$("#userScore").text(userPoints);
}


function winner (){
	alert("Congratulations Your star power is amazing, you win!");
	wins++;
	$("#gamesWon").text(wins);
	reset();
}

function lose (){
	alert("Your star power has gone over the limit, your efforts are futile, you lose!");
	loss++;
	$("#gamesLost").text(loss);
	reset();
}

$("#g1").on("click", function(){
	userPoints = userPoints + gem1;
	$("#userScore").text(userPoints);
	if (userPoints == numberToWin) {
		winner();
	}
	else if (userPoints > numberToWin){
		lose();
	}
})

$("#g2").on("click", function(){
	userPoints = userPoints + gem2;
	$("#userScore").text(userPoints);
	if (userPoints == numberToWin) {
		winner();
	}
	else if (userPoints > numberToWin){
		lose();
	}
})

$("#g3").on("click", function(){
	userPoints = userPoints + gem3;
	$("#userScore").text(userPoints);
	if (userPoints == numberToWin) {
		winner();
	}
	else if (userPoints > numberToWin){
		lose();
	}
})

$("#g4").on("click", function(){
	userPoints = userPoints + gem4;
	$("#userScore").text(userPoints);
	if (userPoints == numberToWin) {
		winner();
	}
	else if (userPoints > numberToWin){
		lose();
	}
})

});




