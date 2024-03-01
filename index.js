document.getElementById("noButton").addEventListener("click", function () {
  // Get the button element
  let noButton = document.getElementById("noButton");

  // Generate random position values
  let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

  // Set the new position
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

document.getElementById("noButton").addEventListener("click", function () {
  // Increase the font size of the "Yes" button
  let yesButton = document.getElementById("yesButton");
  let currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
  let newFontSize = currentFontSize + 15; // Increase font size by 5px

  yesButton.style.fontSize = newFontSize + "px";
});
