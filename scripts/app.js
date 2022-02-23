import { citations } from "./citations.js";

window.onload = ()=>{
  let citation = document.querySelector(".citation");
let auteur = document.querySelector(".auteur");
let date = document.querySelector(".date");

const day = new Date()
const currentDay = day.toLocaleString().split(",")[0]

let dernierreCitation = 0
let dernierJour = ""

if(localStorage.getItem("dernierreCitation") && localStorage.getItem("dernierJour")){
  dernierreCitation = parseInt(localStorage.getItem("dernierreCitation"))
  dernierJour = localStorage.getItem("dernierJour")
  if (dernierJour !== currentDay) {
    dernierreCitation = dernierreCitation + 1
    localStorage.setItem("dernierreCitation", dernierreCitation)
    localStorage.setItem("dernierJour", currentDay)
  }
} else {
  localStorage.setItem("dernierreCitation", 0)
  localStorage.setItem("dernierJour", currentDay)
}

let dateValue = new Date();




citation.textContent = citations[dernierreCitation][0];
auteur.textContent = citations[dernierreCitation][1];

dateValue = new Date();

let dateLocale = dateValue.toLocaleString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

date.innerHTML = dateLocale;
}


