$(function(){
	var counter = 0;
	var counterBucket = []; 
	var randNumber = Math.floor(Math.random()*101);
	var answer;
	var valid;
 
  //Do I have to include this before functions that reference this function?
  var reset = function(placeholder){
  	//Reset input
  	$('#input').val("");
  	//Set placeholder text to attribute
  	$('#input').attr('placeholder', placeholder);
  }
  
  var newGame = function(){
    randNumber = Math.floor(Math.random()*101);
  	counter = 0;
  	$('.request').html("I'm thinking of a new number. Take a guess");
    reset('??');
  }

  //assign value in input to answer
  var getInput = function(){
  	answer = parseInt($('#input').val());
  	//Validate answer
  	if (answer < 0 || answer > 100 || !answer || isNaN(answer)){
  	$('.request').html("It must be your first time. Make sure you pick a number between 0 and 100");
    reset('??');
  	valid = false;
  	}
  	else{
  	counter += 1;
    reset(answer);
  	//Check if there is a top score and display correct message
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
  		//Should refactor this based on not having to store every score
  		counterBucket.push(counter);
  		counterBucket.sort(function(a,b){return a-b});
  		newGame();
  		$('.request').html("I'm thinking of a new number. Guess again to beat your top score of " + counterBucket[0] + " tries.");
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
  
  var playGame = function(){
  	getInput();
  	if(valid === true){
  		checkAnswer();
  	}
  }
  //Sets randNumber to random number between 0 and 100
  //Resets counter
  $('.new').on('click', function(){
    newGame();
  	if(counterBucket[0] === undefined){
  		$('.hint').html("Set a top score");
  	}else{
  		$('.hint').html("See if you can beat your top score of " + counterBucket[0] + " tries.");
  	}
  });
  
  $(".submit").click(
  	playGame
  );
  
  $("#input").keydown(function(e) {
      if (e.which == 13){ 
      	e.preventDefault();
      	playGame();
  	}
  });

});
