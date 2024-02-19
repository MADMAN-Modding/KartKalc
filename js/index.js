// Point Values
const pointValues = [15, 12, 10, 8, 6, 4, 2, 1];

// Places
const places = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

// Main function
function main() {
    // Resets the text
    const placesElement = document.getElementById('places');

    // Gets the values from the form
    const redPoints = +document.getElementById("redPoints").value;
    const bluePoints = +document.getElementById("bluePoints").value;

    const redTeamButton = document.getElementById("redTeamButton");
    const blueTeamButton = document.getElementById("blueTeamButton");

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

    if (clientTeam === "blue") {
        for (let i = 0; i < pointValues.length; i++) {
            if (checkPointsBlue(redPoints, bluePoints, i)) {
                placesElement.innerHTML += " " + places[i] + " | ";
            } else {
                for (let ii = i + 1; ii < pointValues.length; ii++) {
                    if (checkPointsBlue(redPoints, bluePoints, i, ii)) {
                        placesElement.innerHTML += " " + places[i] + " and " + places[ii] + " | ";
                    } else {
                        for (let iii = ii + 1; iii < pointValues.length; iii++) {
                            if (checkPointsBlue(redPoints, bluePoints, i, ii, iii)) {
                                placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", and " + places[iii] + " | ";
                            } else {
                                for (let iv = iii + 1; iv < pointValues.length; iv++) {
                                    if (checkPointsBlue(redPoints, bluePoints, i, ii, iii, iv)) {
                                        placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", " + places[iii] + ", and " + places[iv] + " | "
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (clientTeam === "red") {
        for (let i = 0; i < pointValues.length; i++) {
            if (checkPointsRed(redPoints, redPoints, i)) {
                placesElement.innerHTML += " " + places[i] + " | ";
            } else {
                for (let ii = i + 1; ii < pointValues.length; ii++) {
                    if (checkPointsRed(redPoints, redPoints, i, ii)) {
                        placesElement.innerHTML += " " + places[i] + " and " + places[ii] + " | ";
                    } else {
                        for (let iii = ii + 1; iii < pointValues.length; iii++) {
                            if (checkPointsRed(redPoints, redPoints, i, ii, iii)) {
                                placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", and " + places[iii] + " | ";
                            } else {
                                for (let iv = iii + 1; iv < pointValues.length; iv++) {
                                    if (checkPointsRed(redPoints, redPoints, i, ii, iii, iv)) {
                                        placesElement.innerHTML += " " + places[i] + ", " + places[ii] + ", " + places[iii] + ", and " + places[iv] + " | "
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (placesElement.innerHTML == "The possible places are: " || placesElement.innerHTML == "No Solution :(") {
        placesElement.innerHTML = "No Solution :(";
    } else {
        placesElement.innerHTML = placesElement.innerHTML.slice(0, -3) + '.';
    }
}

function checkPointsBlue(redPoints, bluePoints, ...indices) {
    const totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
    return bluePoints + totalPoints > redPoints;
}

function checkPointsRed(redPoints, bluePoints, ...indices) {
    const totalPoints = indices.reduce((sum, index) => sum + pointValues[index], 0);
    return redPoints + totalPoints > bluePoints;
}