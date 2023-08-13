<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $mobile = $_POST['mobile'];
    
    // Database connection
    $conn = new mysqli('localhost', 'root', 'root', 'portfolio_db');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("INSERT INTO userdetails (First_Name, Last_Name, Email, Gender, Mobile_Number) VALUES (?, ?, ?, ?, ?)");
    
    // Check if the prepare statement was successful
    if ($stmt) {
        $stmt->bind_param("sssss", $firstName, $lastName, $email, $gender, $mobile);
        
        if ($stmt->execute()) {
            // Set session variable for success message
            session_start();
            $_SESSION['submitSuccess'] = true;

            // Close the statement
            $stmt->close();
        } else {
            echo "Error: " . $stmt->error;
        }
    } else {
        echo "Error: " . $conn->error;
    }

    // Close the connection
    $conn->close();

    // Redirect back to index.html
    header("Location: index.html#form");
    exit();
}
?>
