// Point Values
const pointValues = [10, 8, 6, 5, 4, 3, 2, 1];

// Places
const places = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

// Initializing variables
const totalPossiblePoints = 39;

let remainingPoints;

let totalPoints;

let enemyPoints;

let friendlyPoints;

let racesCycled = 1;

let racesRemaining;

let pointsMultiplier = 1;

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

    // For loop that goes through the options
    for (let i = 0; i < racesRemaining; i++) {
        placesElement.innerHTML += "<h3>" + (i + 1) + " Races</h3>";
        for (let ii = 0; ii < pointValues.length; ii++) {
            if (checkPoints(yourPoints, theirPoints, ii)) {
                placesElement.innerHTML += " " + places[ii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
            } else {
                pointsMultiplier++;
                if (checkPoints(yourPoints, theirPoints, ii)) {
                    placesElement.innerHTML += " " + places[ii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                }
            }
        }
    }
}

// Function for checking points
function checkPoints(yourPoints, theirPoints, ...indices) {
    // All the points in the game
    totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0) * pointsMultiplier;
    // All the points remaining in the game
    remainingPoints = totalPossiblePoints * pointsMultiplier - totalPoints;
    enemyPoints = theirPoints + remainingPoints;
    friendlyPoints = yourPoints + totalPoints;
    return friendlyPoints > enemyPoints;
}