//variables always go at the top 
// these are the connections that you're making to elements on the page 
//use CSS slectors to make connection to elements with Javascript

//create a 1 to 1 connection with a variable
let theButton = document.querySelector("buttonOne")

//create a 1 to many connection with a variable -> queryselectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"), 
theHeading = document.querySelector("#headLine h1");
puzzleBoard = document.querySelector(".puzzle-board");

//step 3
//functionality always goes in the middle -> how do we want
//the app to behave?
function changeBGImage() {
	debugger;
	//theHeading.textContent = "super awesome drag and drop game";
	//or run a method
	let theNewSource = "images/background" + this.id + ".jpg";

	console.log(theNewSource);

}
//step 2
//event handling always foes at the bottom =>
//how do we want users to interact with our app

//1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

//1 to 1 event handling
//add event handling to each button in the collection of buttons, one at a tim
theButtons.forEach(button => button.addEventListener("click",
changeBGImage))
