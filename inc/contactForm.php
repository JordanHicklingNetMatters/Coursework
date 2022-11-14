<?php

    include_once 'dbh.php';

    $nameErr = $companyErr = $emailErr = $telephoneErr = $subjectErr = $messageErr = "";

    $first = $_POST['name'];
    $company = $_POST['company-name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql = "INSERT INTO user_information (Name, Company, Email, Telephone, Subject, Message) VALUES ('$first', '$company', '$email', '$telephone', '$subject', '$message');";
    mysqli_query($conn, $sql);

    header("Location: ../contact.php?information=success");

    $title = $_GET['title'][1];
    $company = $_GET['imgsrc'][1];
    $description = $_GET['description'][1];
    $author = $_GET['author'][1];
    $authorsrc = $_GET['authorsrc'][1];
    $date = $_GET['dateposted'][1];