<?php
include('./db_connect.php');

$sql = "SELECT * FROM products";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['name'];
    $products['category'] = $row['category'];
    $products['seller'] = $row['seller'];
    $products['price'] = $row['price'];
    $products['url'] = $row['url'];
    $myproducts['product'][] = $products;
}
echo json_encode(['success' => "Yes", 'items' => $myproducts]);
