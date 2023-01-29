const meterToFeet = 3.281;
const literTogallon = 0.264;
const kiloToPound = 2.204;

let convertBtn = document.querySelector("#convert-btn");
let enterEl = document.querySelector("#enter-el");
let inputEl = document.querySelector("#input-el");
let lengthEl = document.querySelector("#length-el");
let volumeEl = document.querySelector("#volume-el");
let massEl = document.querySelector("#mass-el");

convertBtn.addEventListener("click", function () {
  let numberValue = inputEl.value; //! on récupère la valeur entrante

  lengthEl.textContent = `${numberValue} meters = ${(
    numberValue * meterToFeet
  ).toFixed(3)} feets | ${numberValue} feets = ${(
    numberValue / meterToFeet
  ).toFixed(3)} meters`;

  volumeEl.textContent = `${numberValue} liters = ${(
    numberValue * literTogallon
  ).toFixed(3)} gallons | ${numberValue} gallons = ${(
    numberValue / literTogallon
  ).toFixed(3)} liters`;

  massEl.textContent = `${numberValue} kilos = ${(
    numberValue * kiloToPound
  ).toFixed(3)} pounds | ${numberValue} pounds = ${(
    numberValue / kiloToPound
  ).toFixed(3)} kilos`;

  //! condition si la valeur entrante n'est pas un nb
  if (!numberValue || isNaN(numberValue)) {
    lengthEl.textContent = `0 meters = 0.00 feets | 0 feets = 0.000 meters`;
    volumeEl.textContent = `0 meters = 0.00 feets | 0 feets = 0.000 meters`;
    massEl.textContent = `0 meters = 0.00 feets | 0 feets = 0.000 meters`;

    enterEl.textContent = "PLEASE ENTER A NUMBER";
  } else {
    //! retire le texte lorsque l'user rentre de nouveau un nb
    enterEl.textContent = "";
  }
});
