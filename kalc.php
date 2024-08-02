<?php
class Kalc
{
    function makePlayerOneLoops(int $raceCount)
    {
        for ($i = 0; $i < $raceCount; $i++) {
            $this->makeChecker($i);
        }
    }

    function makeChecker(int $raceCount)
    {
        echo ("if (checkPoints(yourPoints, theirPoints, $raceCount, ");
        for ($i = 0; $i < $raceCount; $i++) {
            echo ("playerOne + $i,\n");
        }
        echo (")) {");

        echo ("document.getElementById(\"races$raceCount" . "Results\").innerHTML +=");
        for ($i = 0; $i < $raceCount; $i++) {
            echo ("\" Race " . $i + 1 . ": \" +
            places[playerOne + $i] +
            \" \" +"
            );
        }

        echo ("friendlyPoints +
            \" to \" +
            enemyPoints +
            \" | \";  
            }");
    }
}
