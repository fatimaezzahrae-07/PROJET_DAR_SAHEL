function goToMenu() {
  window.location.href ="menu.html";
}
function goToplats() {
  window.location.href ="plats.html";
}
function validateForm() {

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let people = parseInt(document.getElementById("people").value);

  if (!/^[A-Za-zÀ-ÿ\s]{3,}$/.test(name)) {
    alert("Nom invalide");
    return false;
  }

  if (!/^(05|06|07)[0-9]{8}$/.test(phone)) {
    alert("Téléphone invalide");
    return false;
  }

  let today = new Date().toISOString().split("T")[0];

  if (!date || date < today) {
    alert("Date invalide");
    return false;
  }

  if (!time) {
    alert("Choisir une heure");
    return false;
  }

  if (people < 1 || people > 20) {
    alert("Nombre de personnes invalide");
    return false;
  }

  alert("Réservation envoyée avec succès !");
  return true;
}
document.getElementById('submitBtn').addEventListener('click', function() {

  let nameInput = document.getElementById('userName');
  let emailInput = document.getElementById('userEmail');
  let messageInput = document.getElementById('userMessage');

  let statusDiv = document.getElementById('statusMessage');
  let btn = this;

  let namePattern = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset
  statusDiv.innerText = "";

  // Name
  if (nameInput.value.trim() === "") {
    statusDiv.style.color = "#ff4d4d";
    statusDiv.innerText = "Le nom est obligatoire.";
    return;
  }

  if (!namePattern.test(nameInput.value.trim())) {
    statusDiv.style.color = "#ff4d4d";
    statusDiv.innerText = "Nom invalide.";
    return;
  }

  // Email
  if (emailInput.value.trim() === "") {
    statusDiv.style.color = "#ff4d4d";
    statusDiv.innerText = "L'email est obligatoire.";
    return;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    statusDiv.style.color = "#ff4d4d";
    statusDiv.innerText = "Email invalide.";
    return;
  }

  // Message
  if (messageInput.value.trim() === "") {
    statusDiv.style.color = "#ff4d4d";
    statusDiv.innerText = "Le message est obligatoire.";
    return;
  }

  if (messageInput.value.trim().length < 10) {
    statusDiv.style.color = "#ff4d4d";
    statusDiv.innerText = "Le message doit contenir au moins 10 caractères.";
    return;
  }

  // Success
  btn.innerText = "Envoi en cours...";
  btn.disabled = true;

  setTimeout(function() {
    statusDiv.style.color = "#4BB543";
    statusDiv.innerText = "Message envoyé avec succès !";

    btn.innerText = "Envoyer";
    btn.disabled = false;

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }, 1500);
});