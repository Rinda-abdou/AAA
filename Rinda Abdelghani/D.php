<?php
require 'A.php'; 

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $mot_de_passe = password_hash($_POST['mot_de_passe'], PASSWORD_DEFAULT);
    $adresse = $_POST['adresse'];

    $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetchColumn() > 0) {
        echo "❌ L'email est déjà utilisé.";
        exit;
    }

  
    $stmt = $pdo->prepare("INSERT INTO users (nom, email, mot_de_passe, adresse) VALUES (?, ?, ?, ?)");
    $stmt->execute([$nom, $email, $mot_de_passe, $adresse]);

    echo "✅ Inscription réussie";
}
header("Location: A.html");
exit();

?>
