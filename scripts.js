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
function sendMessage() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("mail").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!/^[A-Za-zÀ-ÿ\s]{3,}$/.test(name)) {
    alert("Nom invalide");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Email invalide");
    return;
  }

  if (message.length < 10) {
    alert("Message trop court");
    return;
  }

  alert("Message envoyé avec succès !");
}