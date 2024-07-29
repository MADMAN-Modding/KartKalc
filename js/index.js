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

// Main function
function main() {
    // Initializes the placesElement variable
    const placesElement = document.getElementById('places');
    
    placesElement.innerHTML = "The possible places are: ";
    
    // Gets the values from the form
    const yourPoints = +document.getElementById("yourPoints").value;
    const theirPoints = +document.getElementById("theirPoints").value;
    
    if (yourPoints > theirPoints) {
        return;
    }

    // For loop that goes through the options
    for (let ii = 0; ii < pointValues.length; ii++) {
        if (checkPoints(yourPoints, theirPoints, ii)) {
            placesElement.innerHTML += " " + places[ii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
        } else {
            for (let iii = ii + 1; iii < pointValues.length; iii++) {
                if (checkPoints(yourPoints, theirPoints, ii, iii)) {
                    placesElement.innerHTML += " " + places[ii] + " and " + places[iii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                } else {
                    for (let iv = iii + 1; iv < pointValues.length; iv++) {
                        if (checkPoints(yourPoints, theirPoints, ii, iii, iv)) {
                            placesElement.innerHTML += " " + places[ii] + ", " + places[iii] + ", and " + places[iv] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                        } else {
                            for (let v = iv + 1; v < pointValues.length; v++) {
                                if (checkPoints(yourPoints, theirPoints, ii, iii, iv, v)) {
                                    placesElement.innerHTML += " " + places[ii] + ", " + places[iii] + ", " + places[iv] + ", and " + places[v] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Gives a sad message or replaces the last comma with a .
    if (placesElement.innerHTML == "The possible places are: " || placesElement.innerHTML == "No Solution :(") {
        placesElement.innerHTML = "No Solution :(";
    } else {
        placesElement.innerHTML = placesElement.innerHTML.slice(0, -3) + '.';
    }
}

// Function for checking points
function checkPoints(yourPoints, theirPoints, ...indices) {
    // Adds all the possible point values together
    totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
    remainingPoints = totalPossiblePoints;
    // console.log(totalPossiblePoints * (racesRemaining - (racesRemaining - racesCycled)))
    enemyPoints = theirPoints + remainingPoints;
    friendlyPoints = yourPoints + totalPoints;
    return friendlyPoints > enemyPoints;
}