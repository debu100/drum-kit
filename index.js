// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked");
// }); //only selects the first button and applies the event listener to it.

// document.querySelectorAll("button").addEventListener("click", function () {
//   alert("I got clicked");
// }); throws an error as querySelectorAll it returns an array.So, directly can't
//apply addeventlistener.
//need to use index values.
// document.querySelectorAll("button")[5].addEventListener("click", function () {
//   alert("I also got clicked");
// });
//but this process would be lengthly.
//use for loop to addevenent to all buttons.

// Now we have identify which button triggers the click event.
//We can do that with the "this" keyword.And will get the innerHTML of the buttons.
// var buttonInnerhtml = this.innerHTML;

// For detecting Button press

var varibale = document.querySelectorAll(".drum"); //returns an array. use lenth property to access the number of elements.
for (var i = 0; i < varibale.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //adding event listener to all the buttons.
    // this.style.color = "red";
    var buttonInnerhtml = this.innerHTML; //this selects the button that triggers the event and innerhtml gets the text of the button for switching
    makeSound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
  });
}

//if a button was pressed, then i check the innerhtml of it then i send
//that to makeSound() in order to play the relevant sound.

// For detecting keyboard press
//now for detecting keypress we need to use "keydown" event. then we need to
//capture the actual event(the key that we pressed) to identify the key that triggerd the event.

//Place the below code inside the for loop.

document.addEventListener("keydown", function (event) {
  makeSound(event.key); //e is the key that triggered and e.key gives the actual key content/innerhtml to identify the switch statements.
  buttonAnimation(event.key);
  //   // console.log(e); returns the keyboard event---the key that was pressed.
});

//if any keypress was detected i send the e.key to makeSound function to check
//agianst the switch cases.They all end up in the makeSound function and all the
//cases are checked.

//this e tells me which keyboard key was pressed.
//now we need to use the "key property" of the parameter e, which essentially tells
//us which key was pressed. key value represented by the event.

// Checking for both
function makeSound(key) {
  switch (
    key //switching on the innerhtml of each of the buttons.
  ) {
    case "w": //if the letter/innerhtml of button was w then follow-->
      var sound1 = new Audio("sounds/tom-1.mp3");
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio("sounds/tom-2.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("sounds/tom-3.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("sounds/tom-4.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("sounds/snare.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("sounds/crash.mp3");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("sounds/kick-bass.mp3");
      sound7.play();
      break;
    default:
      console.log(key);
  }
}

// Adding animation for button clicks and presses
function buttonAnimation(currentkey) {
  var createAnimation = document.querySelector("." + currentkey); //currentkey will be the innerhtml of each button for click and press.Conactenating the . to get the actual button
  createAnimation.classList.add("pressed"); //working but it doesn't go away once applied.
  setTimeout(function () {
    createAnimation.classList.remove("pressed");
  }, 100); //100ms=0.1sec
}
