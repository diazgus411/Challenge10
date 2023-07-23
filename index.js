const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');


const questions = [
    {
      type: "input",
      name: "logo_name",
      message: "Enter text for the logo. (3 Characters Max)",
    },
    {
      type: "input",
      name: "text_color",
      message: "Enter a color for the text.",
    },
    {
      type: "list",
      name: "logo_shape",
      message: "Select a shape for your logo.",
      choices: [
        "circle",
        "square",
        "triangle",
        ]
    },
    {
      type: "input",
      name: "logo_color",
      message: `Enter a shape color`,
    },
  ]
