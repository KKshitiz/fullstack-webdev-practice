var gamePattern = [];
var userClickedPattern = [];
var level = -1;
var currentLevel = 0;

var buttonColors = ["red", "blue", "green", "yellow"];

function reset() {
  gamePattern = [];
  userClickedPattern = [];
  level = -1;
  currentLevel = 0;
  $("body").css("background-color", "red");
  setTimeout(function () {
    $("#level-title").text("Press A Key to Start");
    $("body").css("background-color", "#011F3F");
  }, 1000);
}

$(document).on("keypress", function (e) {
  if (level === -1) {
    nextLevel();
  }
});

function nextLevel() {
  level++;
  $("#level-title").text("Level " + level);
  addSequence();
}

function addSequence() {
  var randomChosenColor = buttonColors[newSequence()];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut()
    .fadeIn();
  playSound(randomChosenColor);
}

// button handler
$(".btn").click(handler);

function handler() {
  if (level !== -1) {
    var userChosenColor = this.getAttribute("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer();
    console.log(userClickedPattern);
  }
}

function checkAnswer() {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    currentLevel++;
    console.log("current" + currentLevel + "level" + level);
    if (currentLevel > level) {
      currentLevel = 0;
      userClickedPattern = [];
      nextLevel();
    }
  } else {
    reset();
  }
}

// animating button press
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 50);
}

// generating no
function newSequence() {
  return Math.floor(Math.random() * 4);
}

// playing sound
function playSound(color) {
  //   console.log("sounds/" + color + ".mp3");
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}
