import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  //excusas
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let oracion = who + " " + action + " " + what + " " + when;

  //funcion para aleatorios
  let ElQuien = Math.floor(Math.random() * who.length);
  let QueHizo = Math.floor(Math.random() * action.length);
  let QueFueLoAfectado= Math.floor(Math.random() * what.length);
  let CuandoFue = Math.floor(Math.random() * when.length);
  

  let Excusa =  who[ElQuien] + " " + action[QueHizo] + " " + what[QueFueLoAfectado] + " " + when[CuandoFue];

  document.getElementById("excusa").innerHTML = Excuasa;
};
