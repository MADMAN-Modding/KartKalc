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


function kalc() {
 
    // Initializes the placesElement variable
    const placesElement = document.getElementById('places');
    
    placesElement.innerHTML = "The possible places are: ";
    
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
            placesElement.innerHTML += " " + places[playerOne] + " " + friendlyPoints + " to " + enemyPoints + " | ";
        } else if (checkPoints(yourPoints, theirPoints, 2, playerOne, playerOne + 1)) {
            document.getElementById("races2").innerHTML += " Race 1: " + places[playerOne] + ", Race 2: " + places[playerOne + 1] + " " + friendlyPoints + " to " + enemyPoints + " | "; 
        } else if (checkPoints(yourPoints, theirPoints, 2, playerOne, playerOne + 1, playerOne + 2)) {
            document.getElementById("races3").innerHTML += " Race 1: " + places[playerOne] + ", Race 2: " + places[playerOne + 1] + ", Race 3: " + places[playerOne + 2] + " " + friendlyPoints + " to " + enemyPoints + " | "; 
        }
        friendlyPoints = 0;
    }
}

// Function for checking points
function checkPoints(yourPoints, theirPoints, multiplier, ...indices) {
    // All the points that would be obtained from the friendly team
    totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0) + friendlyPoints;
    // All the points remaining in the game
    remainingPoints = totalPossiblePoints * multiplier - totalPoints;
    enemyPoints = theirPoints + remainingPoints;
    friendlyPoints = yourPoints + totalPoints;
    return friendlyPoints > enemyPoints;
}