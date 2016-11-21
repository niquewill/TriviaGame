//USE ONE ON CLICK THAT USES A BUTTON CLASS, INSTEAD OF FOUR INDIVIDUAL BUTTONS

//Questions object
$(document).ready(function()
//Game object
var pos = 0, trivia, trivia_status, question, correctScore, chA, chB, chC, chD, incorrectScore, choices, choice, unanswered, answer, correctAnswer =0; 
var results: ["They were threatened by my intelligence and too stupid to know that’s why they hated me.", "Not knowing is part of the fun. Was that the motto of your community college?"],
}
var question = [
    ["What kind of candy did Buu turn Krillin into?", "A Jellybean", "A Gummybear", "A Chocolate Bar", "C"],
    ["Who was Naruto's teacher at the ninja academy?", "Kakashi", "Jiraiya", "Iruka", "Sarutobi", "C"],             
	["How many androids were in Trunks Future?", "9", "12", "5", "2", "D"],
    ["Who is the second hokage of Konoha?","Tobirama Senju", "Minato Namikaze", "Hashirama Senju", "Hiruzen Sarutobi", "A" ],              
    ["What did Ichigo's hollow threaten to do if he ever slipped up again?", "Step on his skull and crush it like an egg", "Make him king", "Show him true pain", "Throw up all over his face", "A"],             
    ["What is the last hand sign for the Uchiha Clan's Katon: Gōkakyū no Jutsu?","Boar", "Tiger", "Serpent", "Horse", "B"],              
    ["How many forms did cell go through after he hatched from his egg?", "7-forms", "1-form", "4-forms", "2-forms","C"],
    ["Which vizard caused Ichigo to pass out?", "Hiyori", "Shinji", "Hachi", "Rose", "B" ],
    ["Who is the creator of bleach?","Masashi Kishimoto", "Tite Kubo", "Rukia Kuchiki", "Ichigo Kurosaki", "B" ],
    ["Who was the first ninja to be attacked by Naruto's Rasengan-Shuriken?", "Pein", "Kakuzu", "Sasuke", "Orochimaru","B"] 
];
function _(x){
    return document.getElementById(x);
}
                  
function renderQuestion(){
    test =_("trivia");
    _("trivia_status").innerHTML="Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML = "<input type='radio' name='choices' value='A'> "+A+"<br>";
    test.innerHTML = "<input type='radio' name='choices' value='A'> "+B+"<br>";
    test.innerHTML = "<input type='radio' name='choices' value='A'> "+C+"<br>";
    test.innerHTML = "<input type='radio' name='choices' value='A'> "+D+"<br>";
    test.innerHTML = "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
    alert("Ha");
}
window.addEventListener("load", renderQuestion, false);

		
	//Functions
	start: function() {
		//Create Start button
		$('#graphic').html('<button id="start">START</button>');

		//When Start clicked
		$('#start').unbind().click(function() {
			
			//Remove the button
			$('#start').remove();

			//Go to askQuestion
			game.askQuestion();
		})
	},
	countDown: function() {

		console.log("In countDown");

		if(game.timer > 0){
			
			//Decrement time
			game.timer--;
			
			//Display current time
			$('#timer').html(game.timer);
		}
		else {
			//Clear countDown timer
			clearInterval();
			//Go to timeUp
			game.timeUp();
		}
	},

	timeUp: function() {

		console.log("In timeUp");

		//Stop the timer
		clearInterval(clock);

		//Set userGuess to nothing. You get nothing! Good day, sir!
		userGuess = null;

		//Provide correct answer
		correct = question[0].correctAnswer

		//Go to checkGuess
		game.checkGuess(userGuess, correct);

	},

	askQuestion: function() {

		//Create divs for each answer to go
		$('#aDisplay').append("<div id ='answerOne'</div>");
		$('#aDisplay').append("<div id ='answerTwo'</div>");
		$('#aDisplay').append("<div id ='answerThree'</div>");
		$('#aDisplay').append("<div id ='answerFour'</div>");

		console.log("In askQuestion");

		//Timer counts down
		clock = setInterval(game.countDown, 1000);

		//Display question
		$('#qDisplay').html(question[0].question);

		//Set each answer to a variable
		var answerOne = question[0].answers[0];
		$('#answerOne').html(answerOne);

		var answerTwo = question[0].answers[1];
		$('#answerTwo').html(answerTwo);

		var answerThree = question[0].answers[2];
		$('#answerThree').html(answerThree);

		var answerFour = question[0].answers[3];
		$('#answerFour').html(answerFour);

		//Set correct answer
		var correct = question[0].correctAnswer;
	
		//Take user guess
		$('#answerOne').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerOne;
			game.checkGuess(userGuess, correct);
		})

		$('#answerTwo').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerTwo;
			game.checkGuess(userGuess, correct);
		})

		$('#answerThree').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerThree;
			game.checkGuess(userGuess, correct);
		})

		$('#answerFour').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerFour;
			game.checkGuess(userGuess, correct);
		})

	},

	checkGuess: function(userGuess,correct) {

		console.log("In checkGuess");

		//If user picks correct answer
		if (userGuess === correct){
			
			//Display congrats
			$('#qDisplay').html(game.results[0]);
			
			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
			$('#answerThree').remove();
			$('#answerFour').remove();

			//Assign pic to correctImg and display
			var correctImg = '<img src="https://media.giphy.com/media/vN3fMMSAmVwoo/giphy.gif" width="480" height="207"/>';
			$('#graphic').html(correctImg);

			game.correctScore++;
			
			game.pause();

		}

		//If user doesn't pick an answer before time runs out
		else if (userGuess === null){
			
			//Discourage
			$('#qDisplay').html(game.results[1]);

			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
			$('#answerThree').remove();
			$('#answerFour').remove();

			//Reveal correct answer
			$('#aDisplay').html("The correct answer was " + correct);

			//Assign pic to correctImg and display
			var correctImg = '<img src="https://media.giphy.com/media/vN3fMMSAmVwoo/giphy.gif" width="480" height="300"/>';
			$('#graphic').html(correctImg);

			//Increment unanswered count
			game.unanswered++;
			
			//Go to pause
			game.pause();

		}

		//If user picks wrong answer
		else {
			//Discourage
			$('#qDisplay').html(game.results[1]);

			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
			$('#answerThree').remove();
			$('#answerFour').remove();

			//Reveal correct answer
			$('#aDisplay').html("The correct answer was " + correct);

			//Assign pic to correctImg and display
			var correctImg = '<img src="https://media.giphy.com/media/vN3fMMSAmVwoo/giphy.gif" width="480" height="300"/>';
			$('#graphic').html(correctImg);

			//Increment incorrect count
			game.incorrectScore++;

			//Go to pause
			game.pause();
		}
	},

	pause: function() {

		console.log("In pause");

		//Wait 4 seconds before going to nextQuestion
		setTimeout(function(){ game.nextQuestion(); }, 4000);
	},

	nextQuestion: function() {

		console.log("In nextQuestion");

		//Clear "Correct answer was"
		$('#aDisplay').empty();

		//Clear the #graphic div
		$('#graphic').empty();

		//Set next question to index 0
		question.shift();

		//Checks if any questions are left
		if(question.length === 0) {
			
			//If no more questions, end game
			game.finished();
		}
		else {
			//Reset seconds
			game.timer = 15;

			//Ask new question
			game.askQuestion();	
		}

	},

	finished: function() {
		
		console.log("In finished");

		//Display stats
		$('#qDisplay').html("The Force will be with you, always.");
		$('#aDisplay').html("<p>Number of questions right: " + game.correctScore + "</p>" +
							"<p>Number of questions wrong: " + game.incorrectScore + "</p>" +
							"<p>Number of questions unanswered: " + game.unanswered + "</p>");


		//Create Reset button
		$('#graphic').html('<button id="reset">RESET</button>');

		//When Reset clicked
		$('#reset').unbind().click(function() {
			
			//Remove the button
			$('#reset').remove();

			//Go to game.reset()
			game.reset();

		})
	},

	reset: function() {

		console.log("In reset");

		//Reset page
		location.reload();
	},

};

//Start the game
game.start();