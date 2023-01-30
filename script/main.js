//variables always go at the top 
// these are the connections that you're making to elements on the page 
//use CSS slectors to make connection to elements with Javascript
let theButton = document.querySelector("#buttonOne")

//step 3
//functionality always goes in the middle -> how do we want
//the app to behave?
function changeBGImage() {
	debugger;
}
//step 2
//event handling always foes at the bottom =>
//how do we want users to interact with our app
theButton.addEventListener("click", changeBGImage);
