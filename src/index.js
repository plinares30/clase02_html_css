import "./styles.css";
function mensajeInicial() {
  document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>Hola
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
}
function dibujarCirculo() {
  let i = document.getElementById("micanvas");
  let c2x = i.getContext("2d");
  //circulo
  c2x.beginPath();
  c2x.clearRect(0, 0, 500, 500);
  c2x.arc(50, 50, 20, 0, 2 * Math.PI);
  c2x.fillStyle = "blue";
  c2x.stroke();
  c2x.fill();

  c2x.beginPath();
  c2x.arc(250, 250, 70, 0, 1 * Math.PI);
  c2x.fillStyle = "green";
  c2x.stroke();
  c2x.fill();

  c2x.beginPath();
  c2x.arc(350, 350, 50, 0, 1 * Math.PI);
  c2x.fillStyle = "violet";
  c2x.stroke();
  c2x.fill();

  c2x.fillStyle = "red";
  c2x.fillRect(110, 0, 110, 110);
}
function agregarEventoBoton() {
  let btn = document.getElementById("boton");
  btn.addEventListener("click", dibujarCirculo, false);
  //btn.onclick = dibujarCirculo;
}
agregarEventoBoton();
//dibujarCirculo();
