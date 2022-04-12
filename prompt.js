//ÚKOL 1 - ověření rozměrů pračky
let vyskaMax = 70;
let sirkaMax = 62;
let hloubkaMax = 80;


function overRozmery() {
  let vyska = parseFloat(document.querySelector('input[name="vyska"]').value);
  let sirka = parseFloat(document.querySelector('input[name="sirka"]').value);
  let hloubka = parseFloat(document.querySelector('input[name="hloubka"]').value);
  if (vyska > vyskaMax || sirka > sirkaMax || hloubka > hloubkaMax) {
    return "Bohužel, pračka se ti nevejde";
  } else {
    return "OK";
  }
}

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('change', vypocitejVypisOvereni);
});

function vypisVysledek(overeni) {
  document.querySelector('#vysledek > span').innerHTML = overeni;
}

function vypocitejVypisOvereni() {
  let overeni = overRozmery();
  vypisVysledek(overeni);
}
