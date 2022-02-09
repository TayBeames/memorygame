const gameContainer = document.getElementById("game");
let clickedCards = [];
let count = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "teal",
  "pink",
  "cyan",
  "black",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "teal",
  "pink",
  "cyan",
  "black",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  
  const currentDiv = event.target;
  currentDiv.style.backgroundColor = currentDiv.classList[0];
  currentDiv.classList.add("flipped");
  currentDiv.removeEventListener("click", handleCardClick);
  clickedCards.push(event.target);
  count++;


if(count === 2){
  
  if(clickedCards[0].className === clickedCards[1].className){      
    clickedCards[0].removeEventListener("click", handleCardClick);
    clickedCards[1].removeEventListener("click", handleCardClick);
    count = 0;
    clickedCards.length = 0;
    console.log("match");
    

   } else{ setTimeout(function(){
    clickedCards[0].classList.remove("flipped");
    clickedCards[1].classList.remove("flipped");
    clickedCards[0].style.backgroundColor = "transparent";
    clickedCards[1].style.backgroundColor = "transparent";
    clickedCards[0].addEventListener("click", handleCardClick);
    clickedCards[1].addEventListener("click", handleCardClick);
    count = 0;
    clickedCards.length = 0;
   }, 1000);
    
    console.log("not a match");
   }
}
if (count > 2){
  alert("You are clicking too fast!");
  clickedCards[2].classList.remove("flipped");
  clickedCards[2].style.backgroundColor = "transparent";
  clickedCards[2].addEventListener("click", handleCardClick);
}
 
console.log(clickedCards);
  console.log(count);
}

// when the DOM loads
createDivsForColors(shuffledColors);
