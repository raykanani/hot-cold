//How do you impliment document ready without JQuery

var counter = 0;
var counterBucket = [];
var answer = 0;

//Prompts user to pick a number and assigns it to "global" answer variable
//Should validate be included in this function??
//Should answer be global or local
var getAnswer = function(){
	answer = Number(prompt("Pick a number", ""));
};

//Validates answer is between 0 and 100, answer is a number and answer is not undefined
//If answer not valid, runs getAnswer function
//If answer is valid, adds 1 to counter and moves on
var validateAnswer = function(){
	//How do I check if input is empty //Check if NaN
	while (answer < 0 || answer > 100){
		alert("Sorry. Please enter a valid answer between 0 and 100")
		getAnswer();	
	}
	counter += 1;
}

//Checks answer againsts randNumber
//Returns well done or hints based on range of answer against randNumber
var checkAnswer = function(answer, randNumber){
	if (answer === randNumber){
		alert("Well done. It took you " + counter + " tries");
		counterBucket.push(counter);
		return true
	} 
	else if(answer < (randNumber + 10) && answer > (randNumber - 10)){
		alert("Getting Really Warm")
		return false
	}
	else if(answer < (randNumber + 20) && answer > (randNumber - 20)){
		alert("Getting Warm")
		return false
	}
	else{
		alert("way off")
		return false
	}
}

//Sets randNumber to random number between 0 and 100
//Starts new game
var newGame = function(){
	var randNumber = Math.floor(Math.random()*101);
	counter = 0;

	getAnswer();

	validateAnswer();

	while (!(checkAnswer(answer, randNumber))){
		getAnswer();
		validateAnswer();
	}

};
newGame();
