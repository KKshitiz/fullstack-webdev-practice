var randomNo1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNo1 + ".png");
var randomNo2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNo2 + ".png");
if (randomNo1 === randomNo2) {
  document.querySelector("h1").innerHTML = "Draw!!";
} else if (randomNo1 > randomNo2) {
  document.querySelector("h1").innerHTML = "🎊Player1 won!";
} else {
  document.querySelector("h1").innerHTML = "Player2 won!🎊";
}
