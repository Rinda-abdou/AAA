// Ajouter produit au panier
function ajouterAuPanier(nom, prix) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  let produit = panier.find(p => p.nom === nom);
  if (produit) {
    produit.quantite++;
  } else {
    panier.push({ nom, prix, quantite: 1 });
  }

  localStorage.setItem("panier", JSON.stringify(panier));

}

// Affichage du panier
function afficherPanier() {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  let tbody = document.getElementById("cart-body");
  let total = 0;
  tbody.innerHTML = "";

  panier.forEach((p, index) => {
    let sousTotal = p.prix * p.quantite;
    total += sousTotal;

    tbody.innerHTML += `
      <tr>
        <td>${p.nom}</td>
        <td>${p.prix} MAD</td>
        <td>
          <button onclick="modifierQuantite(${index}, -1)">➖</button>
          ${p.quantite}
          <button onclick="modifierQuantite(${index}, 1)">➕</button>
        </td>
        <td>${sousTotal.toFixed(2)} MAD</td>
        <td><button onclick="supprimerProduit(${index})">🗑</button></td>
      </tr>
    `;
  });

  document.getElementById("cart-total").textContent = total.toFixed(2) + " MAD";
  
}

// Modifier quantité
function modifierQuantite(index, changement) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier[index].quantite += changement;

  if (panier[index].quantite <= 0) {
    panier.splice(index, 1);
  }

  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
}

// Supprimer un produit
function supprimerProduit(index) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.splice(index, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
}
// Rendre la recherche fonctionnelle
document.getElementById('searchBar').addEventListener('input', function () {
  const recherche = this.value.toLowerCase();
  const medicaments = document.querySelectorAll('.medicament');

  medicaments.forEach(function (med) {
    const nomMedicament = med.querySelector('b').textContent.toLowerCase();
    if (nomMedicament.includes(recherche)) {
      med.style.display = 'block';
    } else {
      med.style.display = 'none';
    }
  });
});// اختيار زر Valider la commande
const validerBtn = document.getElementById("valider-btn");
const formCommande = document.getElementById("form-commande");
const annulerBtn = document.getElementById("annuler-btn");
const form = document.getElementById("commande-form");

// عند الضغط على زر Valider la commande، نعرض النموذج
validerBtn.addEventListener("click", function() {
  formCommande.style.display = "block";
});

// عند الضغط على زر Annuler، نخفي النموذج
annulerBtn.addEventListener("click", function() {
  formCommande.style.display = "none";
});
function afficherFormulaire() {
  
  let tbody = document.getElementById("cart-body");

   let lignes = tbody.getElementsByTagName("tr");

  if (lignes.length > 0) {
       window.location.href = "F.html";
  } else {
   
    document.getElementById("p").innerText = "Votre panier est vide !!!!"
    
  }
}
function AZER(){

      const nom = document.getElementById("nom").value.trim();
      const adresse = formulaire.querySelector("textarea").value.trim();
      const numero = document.getElementById("num").value.trim();
      const paiement = document.getElementById("paiement").value;

      if (nom === "" || adresse === "" || numero === "" || paiement === "") {
        alert("Veuillez remplir tous les champs !");
      } else {
        alert("✅ Votre commande a été effectuée avec succès ! La livraison se fera dans les plus brefs délais 🚚");
        // يمكنك هنا إرسال البيانات إلى السيرفر أو إعادة توجيه المستخدم
      }
    }

