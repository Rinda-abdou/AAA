<?php
require 'PA.php';

$stmt = $pdo->query("SELECT * FROM produits");
$produits = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($produits);
?>
