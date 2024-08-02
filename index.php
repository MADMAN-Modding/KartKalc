<!DOCTYPE html>
<html>

<head>
    <title>KartKalc</title>
    <meta charset="utf-8" lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/index.css" rel="stylesheet" type="text/css">
    <!-- <script src="js/index.js"></script> -->

    <script>
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

            for (let playerOne = 0; playerOne < pointValues.length; playerOne++) {
                <?php
                include("kalc.php");

                $kalc = new Kalc();

                $kalc->makePlayerOneLoops(6);
                ?>
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
    </script>
</head>

<body>
    <h1>Welcome to KartKalc!</h1>
    <h2>I made this tool so it would be possible to kalculate what places your team would need in order to take the lead
        in a race.</h2>
    <h3>Click or tap on the "Check for places" text in order to see what places your team needs to take the lead.</h3>

    <p><input type="number" id="racesRemaining"> How many races remain?</p>

    <form>
        <p id="yourPointsText"><input type="number" id="yourPoints"> Your Team Points</p>
    </form>
    <form>
        <p id="theirPointsText"><input type="number" id="theirPoints"> Their Team Points</p>
    </form>

    <p onclick="kalc()" id="check">Check for places</p>
    <!-- <p onclick="main()" id="check">Check for places</p> -->
    <div id="races1">
        <h3>1 Race</h3>
        <div id="races1Results"></div>
    </div>
    <div id="races2">
        <h3>2 Races</h3>
        <div id="races2Results"></div>
    </div>
    <div id="races3">
        <h3>3 Races</h3>
        <div id="races3Results"></div>
    </div>
    <div id="races4">
        <h3>4 Races</h3>
        <div id="races4Results"></div>
    </div>
    <div id="races5">
        <h3>5 Races</h3>
        <div id="races5Results"></div>
    </div>

</body>
<footer>
    <h4>Credits:</h4>
    <h5>Creator: <a href="https://github.com/MADMAN-Modding" target="_blank">MADMAN-Modding</a></h5>
    <h5><a href="https://github.com/MADMAN-Modding/MarioKart-Calculator" target="_blank">Github Repo</a></h5>
</footer>

</html>