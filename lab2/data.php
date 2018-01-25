<?php
//provide your hostname, username and dbname
$host="localhost"; 
$username="root";  
$password="";
$db_name="clickgamedb";

$conn = new mysqli($host, $username, $password);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully </br>";


mysqli_select_db($conn, "$db_name");

$scores = $_POST['scores'];

$sql = "select scores from clickgamedb where book_name LIKE '$scores%'";

$result = mysqli_query($conn, $sql);

echo ("<b>Here is the result</b>");
mysqli_close($conn);

?>