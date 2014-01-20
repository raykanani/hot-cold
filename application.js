//How do you impliment document ready without JQuery

var randNumber = 0; //can this be empty?

var newGame = function(){
	randNumber = Math.floor(Math.random()*101);
};

var checkAnswer = function(answer){
	if (answer === randNumber){
	alert("well done")
	//Why doesn't return work
	//Why doesn't break work when outside the while loop
	return
	} 
	else if(answer < (randNumber + 10) && answer > (randNumber - 10)){
		alert("Getting Really Warm")
	}
	else if(answer < (randNumber + 20) && answer > (randNumber - 20)){
	alert("Getting Warm")
	}
	else{
		alert("way off")
	}
}

var validateAnswer = function(answer){
	//How do I check if input is empty
	//Check if NaN
	if (answer < 0 || answer > 100){
		alert("Sorry. Please enter a valid answer between 0 and 100")
	}else{
		checkAnswer(answer)
	}
}

//when should a switch statement be used?
while(true){

	var answer = Number(prompt("Pick a number", ""));

	validateAnswer(answer);
}