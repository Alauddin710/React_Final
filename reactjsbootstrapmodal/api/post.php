<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db = mysqli_connect("localhost", "root", "", "wdpf51_react_crud");

// Check connection
if ($db === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors', 'On');

$data = file_get_contents("php://input");
$data = json_decode($data);
// echo json_encode($data);

$data = $data->info;

if (isset($data->name) && !empty($data->name) && isset($data->city) && !empty($data->city)) {
    $name = $data->name;
    $city = $data->city;
    mysqli_query($db, "INSERT INTO student(name, city) VALUES ('$name', '$city')");
    if (mysqli_affected_rows($db)) {
        echo json_encode(["msg" => "Inserted"]);
    }
}