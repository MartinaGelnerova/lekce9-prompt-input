//ÚKOL 1 - ověření rozměrů pračky
const vyskaMax = 70;
const sirkaMax = 62;
const hloubkaMax = 80;

let vyska = prompt("Zadej VÝŠKU pračky v cm");
let sirka = prompt("Zadej ŠÍŘKU pračky v cm");
let hloubka = prompt("Zadej HLOUBKU pračky v cm");

vypocitejVypisOvereni();

function overRozmery() {
  if (vyska > vyskaMax || sirka > sirkaMax || hloubka > hloubkaMax) {
    return "Bohužel, pračka se ti nevejde";
  } else {
    return "OK - pračka se vejde";
  }
}

function vypisVysledek(overeni) {
  document.querySelector('#vysledek > span').innerHTML = overeni;
}

function vypocitejVypisOvereni() {
  let overeni = overRozmery();
  vypisVysledek(overeni);
}
