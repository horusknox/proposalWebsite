document.getElementById("noButton").addEventListener("click", function () {
  // Increase the font size of the "Yes" button
  let yesButton = document.getElementById("yesButton");
  let currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
  let newFontSize = currentFontSize + 15; // Increase font size by 5px

  yesButton.style.fontSize = newFontSize + "px";
});
