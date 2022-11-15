<?php
    include_once 'dbh.php';

    $name = $_POST['name'];
    $company = $_POST['company-name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    try {
    $conn = new PDO("mysql:host=$dbServername;dbname=$dbName", $dbUsername, $dbPassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("INSERT INTO user_information (name, company, email, telephone, subject, message) VALUES ('$name', '$company', '$email', '$telephone', '$subject', '$message')");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':company', $company);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':telephone', $telephone);
    $stmt->bindParam(':subject', $subject);
    $stmt->bindParam(':message', $message);
    $stmt->execute();
    var_dump($_POST);
    // header("Location: ../contact.php?information=success");
    } catch (Exception $e) {
        echo "Error Connecting To Database";
    }

    // $nameErr = $companyErr = $emailErr = $telephoneErr = $subjectErr = $messageErr = "";

    // $sql = "INSERT INTO user_information (Name, Company, Email, Telephone, Subject, Message) VALUES ('$first', '$company', '$email', '$telephone', '$subject', '$message');";
    // mysqli_query($conn, $sql);

    // header("Location: ../contact.php?information=success");
