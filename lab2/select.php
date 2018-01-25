<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "clickgamedb";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $statement = $conn->prepare("SELECT users, score FROM scores ORDER BY score DESC LIMIT 3");
        $statement->execute();
        $rows = $statement->fetchAll();
            
        foreach ($rows as $row) {
            echo "<tr><td class='high-scores-name'>" . $row['users'] . "</td><td>" . $row['score'] . "</td></tr>";
        }
        
    } catch(PDOException $e) {
        echo "<p>" . $e->getMessage() . "</p>";
    }

?>