//USE ONE ON CLICK THAT USES A BUTTON CLASS, INSTEAD OF FOUR INDIVIDUAL BUTTONS
var game = {

	//Variables
	timer: 20,
	correctScore: 0,
	incorrectScore: 0,
	unanswered: 0,
results =  ["They were threatened by my intelligence and too stupid to know that’s why they hated me.", "Not knowing is part of the fun. Was that the motto of your community college?"],

//Questions object
var question = [{
	question: "What kind of candy did Buu turn Krillin into?",
	answers: ["A Jellybean", "A Gummybear", "A Chocolate Bar", "A Lollipop"],
	correctAnswer: "A Chocolate Bar"
}, {
	question: "Who was Naruto's teacher at the ninja academy?",
	answers: ["Kakashi", "Jiraiya", "Iruka", "Sarutobi"],
	correctAnswer: "Iruka"
}, {
	question: "How many androids were in Trunks Future?",
	answers: ["9", "12", "5", "2"],
	correctAnswer: "2"
},{
	question: "Who is the second hokage of Konoha?",
	answers: ["Tobirama Senju", "Minato Namikaze", "Hashirama Senju", "Hiruzen Sarutobi"],
	correctAnswer: "Tobirama Senju"
},{
	question: "What did Ichigo's hollow threaten to do if he ever slipped up again?",
	answers: ["Step on his skull and crush it like an egg", "Make him king", "Show him true pain", "Throw up all over his face"],
	correctAnswer: "Step on his skull and crush it like an egg"
},{
	question: "What is the last hand sign for the Uchiha Clan's Katon: Gōkakyū no Jutsu?",
	answers: ["Boar", "Tiger", "Serpent", "Horse"],
	correctAnswer: "Tiger"
},{
	question: "How many forms did cell go through after he hatched from his egg?",
	answers: ["7-forms", "1-form", "4-forms", "2-forms"],
	correctAnswer: "4 forms"
},{
	question: "Which vizard caused Ichigo to pass out?",
	answers: ["Hiyori", "Shinji", "Hachi", "Rose"],
	correctAnswer: "Shinji"
},{
	question: "Who is the creator of bleach?",
	answers: ["Masashi Kishimoto", "Tite Kubo", "Rukia Kuchiki", "Ichigo Kurosaki"],
	correctAnswer: "Tite Kubo"
},{
	question: "Who was the first ninja to be attacked by Naruto's Rasengan-Shuriken?",
	answers: ["Pein", "Kakuzu", "Sasuke", "Orochimaru"],
	correctAnswer: "Kakuzu"
}];
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

	Function timeUp() {

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

   }function askQuestion() {

		//Create divs for each answer to go
		$('#aDisplay').append("<div id ='answerOne'</div>");
		$('#aDisplay').append("<div id ='answerTwo'</div>");
		$('#aDisplay').append("<div id ='answerThree'</div>");
		$('#aDisplay').append("<div id ='answerFour'</div>");
        		$('#aDisplay').append("<div id ='answerFive'</div>");
		$('#aDisplay').append("<div id ='answerSix'</div>");
		$('#aDisplay').append("<div id ='answerSeven'</div>");
		$('#aDisplay').append("<div id ='answerEight'</div>");
        		$('#aDisplay').append("<div id ='answerNine'</div>");
		$('#aDisplay').append("<div id ='answerTen'</div>");
		console.log("In askQuestion");
  }
		//Timer counts down
		clock = setInterval(game.countDown, 2000);

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
        		var answerFive = question[0].answers[4];
		$('#answerFive').html(answerFive);
		var answerSix = question[0].answers[5];
		$('#answerSix').html(answerSix);
		var answerSeven = question[0].answers[6];
		$('#answerSeven').html(answerSeven);
        var answerEight = question[0].answers[7];
		$('#answerEight').html(answerEight);
		var answerNine = question[0].answers[8];
		$('#answerNine').html(answerNine);
		var answerTen = question[0].answers[9];
		$('#answerTen').html(answerTen);
        
		//Set correct answer
		var correct = question[0].correctAnswer;
	
		//Take user guess
		$('#answerOne').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerOne;
			game.checkGuess(userGuess, correct);
		});

		$('#answerTwo').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerTwo;
			game.checkGuess(userGuess, correct);
		});

		$('#answerThree').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerThree;
			game.checkGuess(userGuess, correct);
		});

		$('#answerFour').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerFour;
			game.checkGuess(userGuess, correct);
		});
	$('#answerFive').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerFive;
			game.checkGuess(userGuess, correct);
		});
      	$('#answerSix').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerSix;
			game.checkGuess(userGuess, correct);
		});
    $('#answerSeven').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerSeven;
			game.checkGuess(userGuess, correct);
		});
    $('#answerEight').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerEight;
			game.checkGuess(userGuess, correct);
		});
      	$('#answerNine').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerNine;
			game.checkGuess(userGuess, correct);
		});
    $('#answerTen').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerTen;
			game.checkGuess(userGuess, correct);
		});
    
	function checkGuess (userGuess,correct) {

		console.log("In checkGuess");
  }
		//If user picks correct answer
		if (userGuess === correct){
			
			//Display congrats
			$('#qDisplay').html(game.results[0]);
			
			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
        $('#answerThree').remove();
			$('#answerFour').remove();
            $('#answerFive').remove();
			$('#answerSix').remove();
			$('#answerSeven').remove();
			$('#answerEight').remove();
            $('#answerNine').remove();
			$('#answerTen').remove();
			
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
            $('#answerFive').remove();
			$('#answerSix').remove();
			$('#answerSeven').remove();
			$('#answerEight').remove();
            $('#answerNine').remove();
			$('#answerTen').remove();
            
			//Reveal correct answer
			$('#aDisplay').html("The correct answer was " + correct);

			//Assign pic to incorrectImg and display
			var incorrectImg = '<img src="https://media.giphy.com/media/M3EZtLUDLsYP6/giphy.gif" width="480" height="300"/>';
			$('#graphic').html(incorrectImg);

			//Increment unanswered count
			game.unanswered++;
			
			//Go to pause
			game.pause();

		}

		
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
