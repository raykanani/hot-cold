$(function(){
	var counter = 0;
	var counterBucket = []; 
	var randNumber = Math.floor(Math.random()*101);
	var answer;

//assign value in input to answer
var getInput = function(){
	answer = parseInt($('#input').val());
	//Validate answer
	if (answer < 0 || answer > 100 || !answer || isNaN(answer)){
	$('.request').html("It must be your first time. Make sure you pick a number between 0 and 100");
	valid = false;
	}
	else{
	counter += 1;
	if(counterBucket[0] === undefined){
		$('.request').html("Set your best score. You have taken " + counter + " tries");
	}else{
		$('.request').html("Your best score is " + counterBucket[0] + ". " + "This round, you have taken " + counter + " tries");
	}
	valid = true;
	}
}

//Checks answer againsts randNumber
//Returns well done or hints based on range of answer against randNumber
var checkAnswer = function(){
	if (answer === randNumber){
		$('.hint').html("Well done. It took you " + counter + " tries");
		counterBucket.push(counter);
		counterBucket.sort(function(a,b){return a-b});
		randNumber = Math.floor(Math.random()*101);
		counter = 0;
		$('.request').html("I'm thinking of a new number. Guess again to beat your top score.");
	} 
	else if(answer < (randNumber + 10) && answer > (randNumber - 10)){
		$('.hint').html("Getting Really Warm");
	}
	else if(answer < (randNumber + 20) && answer > (randNumber - 20)){
		$('.hint').html("Getting Warm");
	}
	else{
		$('.hint').html("way off");
	}
}

//Sets randNumber to random number between 0 and 100
//Resets counter
$('.new').on('click', function(){
	randNumber = Math.floor(Math.random()*101);
	counter = 0;
	$('.request').html("I'm thinking of a new number. Take a guess");
	$('.hint').html("See if you can beat your top score");
});


$(".submit").on('click', function(){
	getInput();
	if(valid === true){
		checkAnswer();
	}
});

});