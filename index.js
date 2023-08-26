const Circle = require("./lib/Circle")
const Square = require("./lib/Square")
const Triangle = require("./lib/Triangle")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
.createPromptModule([{
    type: "input",
    message: "Enter SVG Text:",
    name: "text",
},{
    type: "list",
    message: "Choose Text Color:",
    name: "textColor",
    choices: ["White", "Red", "Black"]
},{
    type: "list",
    message: "Choose Shape Color:",
    name: "shapeColor",
    choices: ["Blue", "Green", "Purple"]
}])
.then(response => {

})