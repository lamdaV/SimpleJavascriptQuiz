var TOTAL = 5;
var CORRECT = ["a", "a", "d", "b", "d"];

function isValid(answers) {
	for (var i  = 0; i < answers.length; i++) {
		var questionNumber = i + 1;
		if (answers[i] === null || answers[i] === "") {
			alert("You missed question " + questionNumber + "!");
			return false;
		}
	}
	return true;
}

function checkSubmission(answers) {
	var score = 0;
	for (var i = 0; i < answers.length; i++) {
		if (answers[i] === CORRECT[i]) {
			score++;
		}
	}
	return score;
}

function submitAnswers() {
	// Initialize variables.
	var score = 0;
	var answers = new Array();

	// Get User Input.
	answers.push(document.forms["quizForm"]["q1"].value);
	answers.push(document.forms["quizForm"]["q2"].value);
	answers.push(document.forms["quizForm"]["q3"].value);
	answers.push(document.forms["quizForm"]["q4"].value);
	answers.push(document.forms["quizForm"]["q5"].value);

	// Validation.
	if (!(isValid(answers))) {
		return false;
	}
	
	// Get Score.
	score = checkSubmission(answers);
	
	// Display results.
	var results = document.getElementById("results");
	results.innerHTML = "<h3>You scored <span>" + score + "/" + TOTAL + "</span></h3>";
	alert("Results: " + score + "/" + TOTAL);
	return false;
}

