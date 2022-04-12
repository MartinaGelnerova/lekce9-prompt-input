//ÚKOL 2 - input

function secti () {
  let A = parseFloat(document.querySelector('input[name="A"]').value);
  let B = parseFloat(document.querySelector('input[name="B"]').value);
  let C = A + B;
  document.querySelector('#soucet > span').innerHTML = C;
}

function odecti () {
  let A = parseFloat(document.querySelector('input[name="A"]').value);
  let B = parseFloat(document.querySelector('input[name="B"]').value);
  let C = A - B;
  document.querySelector('#rozdil > span').innerHTML = C;
}

function vynasob () {
  let A = parseFloat(document.querySelector('input[name="A"]').value);
  let B = parseFloat(document.querySelector('input[name="B"]').value);
  let C = A * B;
  document.querySelector('#soucin > span').innerHTML = C;
}

function vydel () {
  let A = parseFloat(document.querySelector('input[name="A"]').value);
  let B = parseFloat(document.querySelector('input[name="B"]').value);
  let C = A / B;
  document.querySelector('#podil > span').innerHTML = C;
}

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener("change", vypocitejAVypis);
});

function vypocitejAVypis() {
  secti();
  odecti();
  vynasob();
  vydel();
}
