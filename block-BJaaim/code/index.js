let form = document.querySelector("form");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let quizElm = document.querySelector(".quiz");
let totalQuestions = document.querySelector("header p");

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return this.options[this.correctAnswerIndex] === answer;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }
  incrementScore() {
    this.score = this.score + 1;
  }
  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  previousQuestion() {
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
  }

  addQusetion(title, options, answerIndex) {
    let question = new Question(title, options, answerIndex);
    this.questions.push(question);
  }

  handleButtons() {
    if (this.activeIndex === 0) {
      prev.style.visibility = "hidden";
    } else if (this.activeIndex === this.questions.length - 1) {
      next.style.visibility = "hidden";
    } else {
      prev.style.visibility = "visible";
      next.style.visibility = "visible";
    }
  }
  createUI() {
    quizElm.innerHTML = "";
    let activeQuestion = this.questions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = activeQuestion.title;
    let optionsElm = document.createElement("div");
    optionsElm.classList.add("options");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");
    buttonWrapper.append(button);
    button.innerText = "Submit";
    button.classList.add("btn");
    button.type = "submit";

    activeQuestion.options.forEach((option, index) => {
      let input = document.createElement("input");
      let div = document.createElement("div");
      input.id = `option-${index}`;
      input.type = `radio`;
      input.name = `options`;
      input.value = option;
      let label = document.createElement("label");
      label.for = `option-${index}`;
      label.innerText = option;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.checked) {
          if (activeQuestion.isCorrect(input.value)) {
            this.incrementScore();
          }
        }
      });

      div.append(input, label);
      optionsElm.append(div);
    });
    this.handleButtons();
    totalQuestions.innerText = `Total Questions: ${this.questions.length}`;
    fieldset.append(legend, optionsElm, buttonWrapper);
    form.append(fieldset);
    quizElm.append(form);
  }
}
let quiz = new Quiz();

quizCollection.forEach((question) => {
  quiz.addQusetion(question.title, question.options, question.answerIndex);
});

quiz.createUI();

next.addEventListener("click", quiz.nextQuestion.bind(quiz));
prev.addEventListener("click", quiz.previousQuestion.bind(quiz));
