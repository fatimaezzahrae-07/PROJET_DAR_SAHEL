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

  if (name.length < 3) {
    alert("Le nom doit contenir au moins 3 caractères");
    return false;
  }

  let nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Le nom doit contenir uniquement des lettres");
    return false;
  }

  let phoneRegex = /^(05|06|07)[0-9]{8}$/;
  if (!phoneRegex.test(phone)) {
    alert("Numéro de téléphone invalide");
    return false;
  }

  if (date === "") {
    alert("Veuillez choisir une date");
    return false;
  }

  let today = new Date().toISOString().split("T")[0];
  if (date < today) {
    alert("Veuillez choisir une date valide");
    return false;
  }

  if (time === "") {
    alert("Veuillez choisir une heure");
    return false;
  }

  if (isNaN(people) || people < 1 || people > 20) {
    alert("Nombre de personnes invalide (1 à 20)");
    return false;
  }

  alert("Réservation envoyée avec succès !");
  return true;
}
function sendMessage() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("mail").value.trim();
  let message = document.getElementById("message").value.trim();

  // ================= NOM =================
  if (name.length < 3) {
    alert("Le nom doit contenir au moins 3 caractères");
    return false;
  }

  let nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Le nom doit contenir uniquement des lettres");
    return false;
  }

  // ================= EMAIL =================
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Adresse email invalide");
    return false;
  }

  // ================= MESSAGE =================
  if (message.length < 10) {
    alert("Le message doit contenir au moins 10 caractères");
    return false;
  }

  alert("Message envoyé avec succès !");
  return true;
}