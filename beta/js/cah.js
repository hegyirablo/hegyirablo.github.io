// Replace Dash propotype function
//
String.prototype.replaceDash = function(replacement) {
  var index;
  index = this.indexOf("_");
  return this.substr(0, index) + replacement + this.substr(index + 1);
}

// Shuffle array
//
function shuffleArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = Math.floor(prng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Game constants
//
var playerCount = 3;
var playerName = "A hegyirabló";
var whiteCount = 5;

// Game variables
//
var blackCard = [];
var blackDeck = [];
var blackDiscardDeck = [];
var whiteDeck = [];
var whiteDiscardDeck = [];
var whiteSelection = [];

var players = [];

var prng = new Math.seedrandom();

// Game functions
//
function initGame() {
  // Shuffle decks
  //
  blackDeck = shuffleArray(blackCards);
  whiteDeck = shuffleArray(whiteCards);

  // Shuffle names
  //
  names = shuffleArray(names);

  // Draw names
  //
  for (let i = 0; i < playerCount; i++) {
    if (i == 0) {
      players.push([playerName,
        [],0
      ])
    } else {
      players.push([names[i],
        [],0
      ])
    }
  }

  // Draw white cards
  //
  for (let i = 0; i < playerCount; i++) {
    for (let j = 0; j < whiteCount; j++) {
      drawWhite(i);
    }
  }

  // Draw black card
  //
  drawBlack();

  // Show black card
  //
  showBlack();

  // Show white cards
  //
  for (let i = 0; i < whiteCount; i++) {
    showWhite(i);
  }

  // LET THE FUN BEGIN //
}

function drawWhite(playerNum, cardNum = -1) {
  if (cardNum == -1) {
    console.log("Draw white : %s to %s ( %d left )", whiteDeck[0][0], players[playerNum][0], whiteDeck.length)
    players[playerNum][1].push(whiteDeck[0]);
  } else {
    console.log("Draw white : %s to %s - %d ( %d left )", whiteDeck[0][0], players[playerNum][0], cardNum, whiteDeck.length)
    players[playerNum][1][cardNum] = whiteDeck[0];
  }
  whiteDeck.shift();

  if (whiteDeck.length == 0) {
    console.log("Mix white discard deck");
    whiteDeck = shuffleArray(whiteDiscardDeck);
    whiteDiscardDeck = [];
  }
}

function discardWhite(playerNum, cardNum) {
  console.log("Discard white : %s ( %d in the deck ) ", players[playerNum][1][cardNum][0], whiteDiscardDeck.length + 1)
  whiteDiscardDeck.push(players[playerNum][1][cardNum]);
}

function drawBlack() {
  console.log("Darw black : %s ( %d left ) ", blackDeck[0][0], blackDeck.length)
  blackCard = blackDeck[0];
  blackDeck.shift();

  if (blackDeck.length == 0) {
    console.log("Mix black discard deck");
    blackDeck = shuffleArray(blackDiscardDeck);
    blackDiscardDeck = [];
  }
}

function discardBlack() {
  console.log("Discard black : %s ( %d in the deck ) ", blackCard[0], blackDiscardDeck.length + 1)
  blackDiscardDeck.push(blackCard);
}

// Print functions
//
function showSolutions(solutions) {
  $(".overlay").show();
  $(".overlay").html("");

  for (let i = 0; i < playerCount; i++) {
    $(".overlay").append("<div class=\"card solution\" nr=" + i + ">" +
      "<div class=\"content\">" +
      "<p>" + players[i][0] + " ( " + players[i][2] + " )</p>" +
      "<p>" + solutions[i] + "</p>" +
      "</div>" +
      "</div>");

    $(".card.solution")
      .on("click", function(event) {
        hideSolutions(event);
      });
  }
}

function hideSolutions(event) {
  var playerNum = parseInt(event.currentTarget.attributes["nr"].value);

  // Stop event propagation
  event.stopPropagation();
  event.stopImmediatePropagation();

  players[playerNum][2] = players[playerNum][2] + 1;

  $(".overlay").hide();
  $(".overlay").html("");

  var playerNum = 0;

  for (let i = 0; i < whiteSelection.length; i++) {
    var cardNum = whiteSelection[i][0];
    // Discard card
    discardWhite(playerNum, cardNum);

    // Draw next card
    drawWhite(playerNum, cardNum);

    // Hide card
    var newCard = players[playerNum][1][players[playerNum][1].length - 1];
    hideWhite(cardNum, newCard);
  }
  whiteSelection = [];

  // hide black card
  hideBlack();
}

function showBlack() {
  $(".card.black .content").html(blackCard[0]);

  $(".card.black").hide();

  $(".card.black")
    .show({
      effect: "slide",
      direction: "right",
      easing: "easeOutElastic",
      duration: 800,
    });
}

function hideBlack() {
  $(".card.black")
    .hide({
      effect: "slide",
      direction: "left",
      easing: "easeInExpo",
      duration: 400,
      complete: function() {
        // discard black card
        discardBlack();

        // drawblack
        drawBlack();

        // show black
        showBlack();
      }
    });
}

function showWhite(cardNum) {
  // Add content to HTML
  $("#whitecards").append("<div class=\"card white\" nr=\"" + cardNum + "\"><p class=\"content\">" + players[0][1][cardNum][0] + "</p></div>");

  // Register event
  $(".card.white")
    .on("click", function(event) {
      clickWhite(event);
    });

  var selector = "div[nr=" + cardNum + "]";

  // Hide card
  $(selector).hide();

  // Show card
  $(selector)
    .show({
      effect: "slide",
      direction: "right",
      easing: "easeOutElastic",
      duration: 800,
    });
}

function hideWhite(cardNum, newCard) {
  var selector = "div[nr=" + cardNum + "]";

  $(selector)
    .hide({
      effect: "slide",
      direction: "left",
      easing: "easeInExpo",
      duration: 400,
      complete: function() {
        $(selector).remove();
        showWhite(cardNum);
      }
    });
}

// GUI functions
//
function clickWhite(event) {
  // Save card
  var cardNum = parseInt(event.currentTarget.attributes["nr"].value);
  var selector = "div[nr=" + cardNum + "]";
  var card = [];
  card.push(cardNum);
  card.push(players[0][1][cardNum]);
  whiteSelection.push(card);

  // Stop event propagation
  event.stopPropagation();
  event.stopImmediatePropagation();

  var playerNum = 0;

  // Select card
  $(selector).css("background", "linear-gradient(to left, #8e9eab, #eef2f3)");

  // If solution is needed, get solutions
  var dashCount = (blackCard[0].match(/_/g) || []).length;

  if (dashCount == whiteSelection.length) {
    var solutions = [];
    var solution = "";

    // Get player 0 solution
    solution = blackCard[0];
    for (let i = 0; i < blackCard[1].length; i++) {
      solution = solution.replaceDash("<font color=\"red\">" + "_" + "</font>");
      solution = solution.replaceDash(whiteSelection[i][1][blackCard[1][i]]);
    }
    solutions.push(solution);

    for (let i = 1; i < players.length; i++) {
      solution = blackCard[0];
      for (let j = 0; j < blackCard[1].length; j++) {
        var random = Math.floor(prng() * whiteCount);
        var selection = players[i][1][random];

        discardWhite(i, random);
        drawWhite(i, random);

        solution = solution.replaceDash("<font color=\"red\">" + "_" + "</font>");
        solution = solution.replaceDash(selection[blackCard[1][j]]);
      }
      solutions.push(solution);
    }

    // print solutions
    showSolutions(solutions);
  }
}

// Entry point
//
$(document)
  .ready(function() {
    initGame();
  });