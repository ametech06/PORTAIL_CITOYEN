// Simulation du suivi d'une demande
document.getElementById('suiviForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const numero = document.getElementById('numero').value.trim();
  const result = document.getElementById('resultat');

  if (numero === "D20251017001") {
    result.textContent = "Statut : Demande validée ✅";
  } else {
    result.textContent = "Aucune demande trouvée pour ce numéro.";
  }
});

// Simulation d’envoi de demande
document.getElementById('demandeForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Votre demande a été envoyée avec succès !");
});

// Vérification du mot de passe à l’inscription
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  const password = document.getElementById('password')?.value;
  const confirm = document.getElementById('confirm')?.value;

  if (password && confirm && password !== confirm) {
    e.preventDefault();
    alert("Les mots de passe ne correspondent pas !");
  }
});

// Connexion (simulation)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Connexion réussie (simulation) !");
});
