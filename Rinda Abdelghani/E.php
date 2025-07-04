<?php
require 'PA.php';

$data = json_decode(file_get_contents("php://input"), true);

$nom = $data["nom"];
$adresse = $data["adresse"];
$paiement = $data["mode_paiement"];
$panier = $data["panier"];


$stmt = $pdo->prepare("INSERT INTO commandes (user_id, adresse_livraison, mode_paiement) VALUES (?, ?, ?)");
$stmt->execute([null, $adresse, $paiement]);
$commande_id = $pdo->lastInsertId();


foreach ($panier as $p) {
    $stmt = $pdo->prepare("INSERT INTO commande_produits (commande_id, produit_id, quantite, prix_unitaire)
                           VALUES (?, ?, ?, ?)");
    $stmt->execute([$commande_id, $p["id"], $p["quantite"], $p["prix"]]);
}

echo json_encode(["status" => "success"]);
?>
