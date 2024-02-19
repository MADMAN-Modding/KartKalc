// Point Values
const pointValues = [15, 12, 10, 8, 6, 4, 2, 1];

// Places
const places = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

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
            placesElement.innerHTML += " " + places[i] + " | ";
        } else {
            for (let ii = i + 1; ii < pointValues.length; ii++) {
                if (checkPoints(redPoints, bluePoints, i, ii)) {
                    placesElement.innerHTML += " " + places[i] + " and " + places[ii] + " | ";
                } else {
                    for (let iii = ii + 1; iii < pointValues.length; iii++) {
                        if (checkPoints(redPoints, bluePoints, i, ii, iii)) {
                            placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", and " + places[iii] + " | ";
                        } else {
                            for (let iv = iii + 1; iv < pointValues.length; iv++) {
                                if (checkPoints(redPoints, bluePoints, i, ii, iii, iv)) {
                                    placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", " + places[iii] + ", and " + places[iv] + " | "
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
function checkPoints(redPoints, bluePoints, ...indices) {
    if (clientTeam == "blue") {
        const totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
        return bluePoints + totalPoints > redPoints;
    } else if (clientTeam == "red") {
        const totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
        return redPoints + totalPoints > bluePoints;
    }
}