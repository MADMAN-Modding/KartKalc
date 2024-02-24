// Point Values
const pointValues = [10, 8, 6, 5, 4, 3, 2, 1];

// Places
const places = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

// Intializing variables
const totalPossiblePoints = 39;

let remainingPoints;

let totalPoints;

let enemyPoints;

let friendlyPoints;

// Main function
function main() {
    // Intializes the placesElement variable
    const placesElement = document.getElementById('places');

    placesElement.innerHTML = "The possible places are: ";

    // Gets the values from the form
    const yourPoints = +document.getElementById("yourPoints").value;
    const thierPoints = +document.getElementById("thierPoints").value;

    if (yourPoints > thierPoints) {
        return;
    }

    // For loop that goes through the options
    for (let i = 0; i < pointValues.length; i++) {
        if (checkPoints(yourPoints, thierPoints, i)) {
            placesElement.innerHTML += " " + places[i] + " " + friendlyPoints + " to " + enemyPoints + " | ";
        } else {
            for (let ii = i + 1; ii < pointValues.length; ii++) {
                if (checkPoints(yourPoints, thierPoints, i, ii)) {
                    placesElement.innerHTML += " " + places[i] + " and " + places[ii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                } else {
                    for (let iii = ii + 1; iii < pointValues.length; iii++) {
                        if (checkPoints(yourPoints, thierPoints, i, ii, iii)) {
                            placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", and " + places[iii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                        } else {
                            for (let iv = iii + 1; iv < pointValues.length; iv++) {
                                if (checkPoints(yourPoints, thierPoints, i, ii, iii, iv)) {
                                    placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", " + places[iii] + ", and " + places[iv] + " " + friendlyPoints + " to " + enemyPoints + " | ";
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
function checkPoints(yourPoints, thierPoints, ...indices) {
    totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
    remainingPoints = totalPossiblePoints - totalPoints;
    enemyPoints = thierPoints + remainingPoints;
    friendlyPoints = yourPoints + totalPoints;
    return yourPoints + totalPoints > yourPoints + remainingPoints;
}