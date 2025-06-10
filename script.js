let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let phraseDisplay = document.createElement("div");
document.body.appendChild(phraseDisplay); // add the div to the body
let bubuDudu = document.querySelector("img");
let gunDuck = document.querySelector("img");

// Initial size of the Yes button
let yesButtonSize = 75; // Starting width of the Yes button in pixels
yesButton.style.width = yesButtonSize + "px"; // Set the initial width
yesButton.style.height = yesButtonSize + "px"; // Set the initial height

yesButton.style.fontSize = "1em"; // Set the initial font size

// Initial size of the nope button
let noButtonSize = 75; // Starting size for the "Nope" button
noButton.style.width = noButtonSize + "px"; // Set the initial width
noButton.style.height = noButtonSize + "px"; // Set the initial height
noButton.style.fontSize = "16px";

// aray of random phrases
const phrases = [
  "You’re breaking my heart 😭",
  "Ain't no way bruh",
  "You must be cappin. 😔",
  "ARE YOU SURE??? I GOT CHOCOLATES FATTY 🍫",
  "??????? tf is that answer",
  "Try again.",
  "404 ERROR OPTION NOT FOUND",
  "You've got to be shittin me",
  "SAY NO ONE MORE TIME AND IM SENDING YOU TO THE SQUID GAME ISLAND",
  "STOP CLICKING NO!!!!!! 😠😠😠",
  "Fine, I'll ask Jina instead. ❤️",
];

yesButton.addEventListener("click", function () {
  alert("NOT LIKE U GOT A CHOICE ANYWAYS. 😊😊😊");
  //Hide buttons
  yesButton.style.display = "none";
  noButton.style.display = "none";

  // change the cat image into something else
  bubuDudu.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVmZ3MyYWtxc2NzbGlsZHk2dW90cWJpZWt4M2t1MXd1dGd2cjRhZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/upZuFvKIUvIIIR0dM8/giphy.gif";

  let thankYouMessage = document.createElement("div");
  thankYouMessage.innerHTML = "<h2>I already knew the answer.😏";
  document.body.appendChild(thankYouMessage);

  // change background to lighter pink when said yes
  document.body.style.backgroundColor = "lightpink";

  // remove phrases when clicked yes
  phraseDisplay.innerHTML = "";

  // add audio autplay when said yes
  let audio = new Audio("./killshot.mp3");
  audio.autoplay = true;
  audio.play();
});

noButton.addEventListener("click", function () {
  // hide "nope" button and move it around
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * window.innerWidth + "px";
  noButton.style.top = Math.random() * window.innerHeight + "px";

  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  phraseDisplay.innerHTML = `<p>${randomPhrase}</p>`;
  phraseDisplay.style.fontSize = "3em";
  phraseDisplay.style.textAlign = "center";
  phraseDisplay.style.marginTop = "20px";
  phraseDisplay.style.color = "darkred";

  // change image to gun duck
  gunDuck.src = "https://img-9gag-fun.9cache.com/photo/aAGpn50_700bwp.webp";

  // make yes button bigger and bigger everytime she clicks no
  yesButtonSize += 50;
  yesButton.style.width = yesButtonSize + "px";
  yesButton.style.height = yesButtonSize + "px";

  // Increase font size of Yes text proportionally with the button size
  yesButton.style.fontSize = yesButtonSize / 5 + "px"; // Adjust the factor as needed

  // Make the "Nope" button smaller
  noButtonSize -= 5; // Reduce size
  if (noButtonSize > 0) {
    noButton.style.width = noButtonSize + "px";
    noButton.style.height = noButtonSize + "px";
    noButton.style.fontSize = Math.max(0, (noButtonSize / 100) * 16) + "px"; // Scale font size
  } else {
    noButton.style.display = "none"; // Hide the button when size is 0 or less
    alert('Looks like you ran out of "Nope"! 😏');
    phraseDisplay.innerHTML = "NO OTHER CHOICE";
  }
});
