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
    const redPoints = +document.getElementById("redPoints").value;
    const bluePoints = +document.getElementById("bluePoints").value;

    const redTeamButton = document.getElementById("redTeamButton");
    const blueTeamButton = document.getElementById("blueTeamButton");

    // Sets the clientTeam value
    if (redTeamButton.checked) {
        clientTeam = "red";
    }

    if (blueTeamButton.checked) {
        clientTeam = "blue";
    }

    if (clientTeam === "blue" && bluePoints > redPoints) {
        return;
    } else if (clientTeam === "red" && redPoints > bluePoints) {
        return;
    }

    // For loop that goes through the options
    for (let i = 0; i < pointValues.length; i++) {
        if (checkPoints(redPoints, bluePoints, i)) {
            placesElement.innerHTML += " " + places[i] + " " + friendlyPoints + " to " + enemyPoints + " | ";
        } else {
            for (let ii = i + 1; ii < pointValues.length; ii++) {
                if (checkPoints(redPoints, bluePoints, i, ii)) {
                    placesElement.innerHTML += " " + places[i] + " and " + places[ii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                } else {
                    for (let iii = ii + 1; iii < pointValues.length; iii++) {
                        if (checkPoints(redPoints, bluePoints, i, ii, iii)) {
                            placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", and " + places[iii] + " " + friendlyPoints + " to " + enemyPoints + " | ";
                        } else {
                            for (let iv = iii + 1; iv < pointValues.length; iv++) {
                                if (checkPoints(redPoints, bluePoints, i, ii, iii, iv)) {
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

function teamChange(team) {
    if (team == 'red') {
        document.getElementById("redPointsText").innerHTML = "<input type='number' value='" + document.getElementById("redPoints").value + "' id='redPoints'> Red Team/Your Team Points";
        document.getElementById("bluePointsText").innerHTML = "<input type='number' value='" + document.getElementById("bluePoints").value + "' id='bluePoints'> Blue Team/Their Team Points";
    } else if (team == 'blue') {
        document.getElementById("redPointsText").innerHTML = "<input type='number' value='" + document.getElementById("redPoints").value + "' id='redPoints'> Red Team/Their Team Points"
        document.getElementById("bluePointsText").innerHTML = "<input type='number' value='" + document.getElementById("bluePoints").value + "' id='bluePoints'> Blue Team/Your Team Points"
    }

}

// Function for checking points
function checkPoints(redPoints, bluePoints, ...indices) {
    if (clientTeam == "blue") {
        totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
        remainingPoints = totalPossiblePoints - totalPoints;
        enemyPoints = redPoints + remainingPoints;
        friendlyPoints = bluePoints + totalPoints;
        return bluePoints + totalPoints > redPoints + remainingPoints;
    } else if (clientTeam == "red") {
        totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
        remainingPoints = totalPossiblePoints - totalPoints;
        enemyPoints = bluePoints + remainingPoints;
        friendlyPoints = redPoints + totalPoints;
        return redPoints + totalPoints > bluePoints + remainingPoints;
    }
}