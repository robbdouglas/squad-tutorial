const readline = require("readline");

class Question {
  constructor(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  anzeigen() {
    console.log(this.questionText);
    this.optionen.forEach((options, index) => {
      console.log(`${index + 1}. ${options}`);
    });
  }

  istKorrekt(antwortIndex) {
    return antwortIndex === this.correctAnwser;
  }
}

const question = [
  new Question(
    "Was ist die Hauptstadt von Frankreich?",
    ["London", "Berlin", "Madrid", "Paris"],
    3
  ),
  new Question("Wie viele Kontinente gibt es?", ["6", "7", "5", "4"], 1),
  new Question(
    "Welches ist das größte Säugetier der Welt?",
    ["Nashorn", "Giraffe", "Elefant", "Blauwal"],
    3
  ),
];

function spieleQuiz(fragen) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
