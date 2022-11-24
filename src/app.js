import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function random() {
  
  //Opciones
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  
  //Aleatorizador
  let actionRandom = Math.floor(Math.random() * action.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  

  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}`;
};
