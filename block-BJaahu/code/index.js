// let questionMethods = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// function createQuestion(title, options, correctAnswerIndex) {
//   let question = Object.create(questionMethods);
//   question.title = title;
//   question.options = options;
//   question.correctAnswerIndex = correctAnswerIndex;
//   return question;
// }

//Prototypal method
// function createQuestion(title, options, correctAnswerIndex) {
//   let question = Object.create(createQuestion.prototype);
//   question.title = title;
//   question.options = options;
//   question.correctAnswerIndex = correctAnswerIndex;
//   return question;
// }
// createQuestion.prototype = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// const firstQuestion = createQuestion(
//   "Where is the capital of Jordan?",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );

// const secondQuestion = createQuestion(
//   "Where is the capital of Jamaica?",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

//Pseudoclassical function method
function CreateQuestion(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}
CreateQuestion.prototype = {
  isAnswerCorrect: function (index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

const firstQuestion = new CreateQuestion(
  "Where is the capital of Jordan?",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

const secondQuestion = new CreateQuestion(
  "Where is the capital of Jamaica?",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

//Class pattern method
class CreateQuestion {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

const firstQuestion = new CreateQuestion(
  "Where is the capital of Jordan?",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

const secondQuestion = new CreateQuestion(
  "Where is the capital of Jamaica?",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
