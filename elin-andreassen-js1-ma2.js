// Question 1
const myFunctionExpression = function () {
    console.log("Elin");
}
myFunctionExpression()


// Question 2
const clickButton = document.querySelector(".btn");

function afterClick() {
  console.log("I was clicked");
};

clickButton.addEventListener("click", afterClick);


// Question 3
const inputText = document.querySelector("#firstName");

function logKeyValue(event) {
  console.dir(event.key);
};

inputText.addEventListener("keydown", logKeyValue);


// Question 4
const hoverButton = document.querySelector("button");

function hoverCall() {
  console.log("Cursor touched");
};

hoverButton.addEventListener("mouseover", hoverButton);


// Question 5
const hoverOut = document.querySelector("[data-animal='dog']");
hoverOut.addEventListener("mouseout", classRemove);

function classRemove() {
  hoverOut.classList.remove("hover");
};


// Question 6
const animals = document.querySelectorAll("li");

for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("mouseover", animalType)

  function animalType() {
    console.dir(animals[i].dataset.animal);
  }
}


// Question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}


// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

function handleEachName(sheep) {
  console.log(sheep);
}

sheep.forEach(handleEachName);


// Question 9
function logTime() {
  console.log("hello");
  if(counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}

let counter = 0;
const intervalId = setInterval(logTime, 500);


// Question 10
const updateText = document.querySelector("div.container");

function twoSeconds() {
  updateText.innerHTML = "Text updated";
}

setTimeout(twoSeconds, 2000);