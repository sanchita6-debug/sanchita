const quizQuestions = [ 
    "What is the capital of France?",
    "What is 2 + 2?",
    "What programming language are we using?",
    "What is the largest planet in our solar system?",
    "What is 5 + 5?"
]

const answers = [ 
    "paris",
     "4",
     "javascript",
     "jupiter",
     "10"
 ]

let score = 0;

for (let i = 0; i < quizQuestions.length; i++) {
  let userInput = prompt(quizQuestions[i]);


  userInput = userInput.toLowerCase().trim();


  if (userInput === answers[i]) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! Correct answer is: " + answers[i]);
  }
}

alert("Quiz Completed! Your score is: " + score + "/" + quizQuestions.length);