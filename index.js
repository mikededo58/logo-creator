const inquirer = require("inquirer");
const fs = require("fs");
const GenerateSvg = require("./lib/Generatesvg");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");

// Using prompt to create questions
const questions = [
  {
    type: "input",
    name: "logo_text",
    message: "What 3 letters would you like in your logo?",
  },
  {
    type: "input",
    name: "text_color",
    message: "What text color would you like for your logo?",
  },
  {
    type: "list",
    message: "What shape would you like your logo to be?",
    name: "shape",
    choices: ["square", "circle", "triangle"],
  },
  {
    type: "input",
    name: "bg_color",
    message: "What color would you like your background to be for your logo",
  },
];

function writeToFile(fileName, data) {
  // create the SVG file
  fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("Succes!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    let userShape = "";
    switch (answers.shape) {
      case "square":
        userShape = new Square();
        userShape.setColor(answers.bg_color);
        logoGen(answers, userShape);
        break;
      case "circle":
        userShape = new Circle();
        userShape.setColor(answers.bg_color);
        logoGen(answers, userShape);
        break;
      case "triangle":
        userShape = new Triangle();
        userShape.setColor(answers.bg_color);
        logoGen(answers, userShape);
        break;
    }
  });
}
function logoGen(answers, userShape) {
  let userSVG = new GenerateSvg();
  userSVG.setText(answers.logo_text, answers.text_color);
  userSVG.setShape(userShape.render());
  writeToFile("./examples/logo.svg", userSVG.render());
}

// Function call to initialize app
init();
