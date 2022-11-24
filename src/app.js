import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function random() {
  //Opciones
  let who = ["The dog", "My granma", "His turtle", "My bird", "Messi"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //Aleatorizador

  let whenRandom = Math.floor(Math.random() * when.length);
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);

  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[whoRandom]} ${what[whatRandom]} ${when[whenRandom]}`;
};
