<?php

include("db_connect.php");
$data = file_get_contents("php://input");
$data =  json_decode($data);
// print_r($data);

if (isset($data->email) && ($data->email != '')) {

    $email = $data->email;
    $password = $data->password;

    $result = mysqli_query($db_conn, "SELECT * FROM registration WHERE email = '$email' AND password = '$password'");

    $row = mysqli_fetch_assoc($result);

    if (mysqli_num_rows($result) > 0) {
        echo json_encode(["success" => "User Exist", "user" => $row]);
    } else {
        echo json_encode(["error" => "User Exist dosn't "]);
    }

    //echo mysqli_num_rows($result);
    // echo json_encode($data->email);
}
