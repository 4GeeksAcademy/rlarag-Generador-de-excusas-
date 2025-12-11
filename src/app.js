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
  let num1 = Math.floor(Math.random() * 5);
  let num2 = Math.floor(Math.random() * 4);
  let num3 = Math.floor(Math.random() * 6);
  

  let respuesta =  who[num1] + " " + action[num1] + " " + what[num2] + " " + when[num3];

  document.getElementById("excusa").innerHTML = respuesta;
};
