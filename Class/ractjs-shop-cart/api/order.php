<?php
include('./db_connect.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
$items = $data->items;

$userid = $data->user;
foreach ($items as $item) {
    $sql =  "INSERT INTO orders (product_id, product_name, product_price, product_qty, user_id) VALUES ('$item->id','$item->name','$item->price','$item->quantity','$userid' )";
    mysqli_query($db_conn, $sql);
}

if (mysqli_affected_rows($db_conn) > 0) {
    echo json_encode("Your Order Placed Successfully");
}
