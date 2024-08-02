// Point Values
const pointValues = [10, 8, 6, 5, 4, 3, 2, 1];

// Places
const places = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

// Initializing variables
const totalPossiblePoints = 39;

let remainingPoints;

let totalPoints;

let enemyPoints;

let friendlyPoints = 0;

let racesRemaining;

let raceCount = 1;

function kalc() {
  // Reset divs
  for (let i = 1; i <= 5; i++) {
    document.getElementById("races" + i + "Results").innerHTML = "";
  }

  // Gets the values from the form
  const yourPoints = +document.getElementById("yourPoints").value;
  const theirPoints = +document.getElementById("theirPoints").value;
  racesRemaining = +document.getElementById("racesRemaining").value;

  if (yourPoints > theirPoints) {
    return;
  }

  for (let i = 0; i < racesRemaining; i++) {
    document.getElementById("races" + (i + 1)).style.display = "block";
  }

  // For loop that goes through the options
  for (let playerOne = 0; playerOne < pointValues.length; playerOne++) {
    if (checkPoints(yourPoints, theirPoints, 1, playerOne)) {
      document.innerHTML("races1Results").innerHTML +=
        " " +
        places[playerOne] +
        " " +
        friendlyPoints +
        " to " +
        enemyPoints +
        " | ";
    }
    if (checkPoints(yourPoints, theirPoints, 2, playerOne, playerOne + 1)) {
      document.getElementById("races2Results").innerHTML +=
        " Race 1: " +
        places[playerOne] +
        ", Race 2: " +
        places[playerOne + 1] +
        " " +
        friendlyPoints +
        " to " +
        enemyPoints +
        " | ";
    }
    if (
      checkPoints(
        yourPoints,
        theirPoints,
        3,
        playerOne,
        playerOne + 1,
        playerOne + 2
      )
    ) {
      document.getElementById("races3Results").innerHTML +=
        " Race 1: " +
        places[playerOne] +
        ", Race 2: " +
        places[playerOne + 1] +
        ", Race 3: " +
        places[playerOne + 2] +
        " " +
        friendlyPoints +
        " to " +
        enemyPoints +
        " | ";
    }
    if (
      checkPoints(
        yourPoints,
        theirPoints,
        4,
        playerOne,
        playerOne + 1,
        playerOne + 2,
        playerOne + 3,
        playerOne + 4
      )
    ) {
      document.getElementById("races4Results").innerHTML +=
        " Race 1: " +
        places[playerOne] +
        ", Race 2: " +
        places[playerOne + 1] +
        ", Race 3: " +
        places[playerOne + 2] +
        " Race 4: " +
        places[playerOne + 3] +
        " " +
        friendlyPoints +
        " to " +
        enemyPoints +
        " | ";
    }
    friendlyPoints = 0;
  }
}

// Function for checking points
function checkPoints(yourPoints, theirPoints, multiplier, ...indices) {
  // All the points that would be obtained from the friendly team
  totalPoints =
    indices.reduce((sum, index) => sum + pointValues[index], 0) +
    friendlyPoints;
  // All the points remaining in the game
  remainingPoints = totalPossiblePoints * multiplier - totalPoints;
  enemyPoints = theirPoints + remainingPoints;
  friendlyPoints = yourPoints + totalPoints;
  return friendlyPoints > enemyPoints;
}
