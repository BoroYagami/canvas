var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas =15;
var l = 0;
var yi, xf, xi;
var colorcito = "#FAA";
var yf = 150;

for (l = 0; l < lineas; l++)
{
  xi = 10 * l;
  yf = yf - 10;
  DibujarLinea(colorcito, xi, 150, 150, yf);
  console.log("Linea " + 1);
}

DibujarLinea(colorcito, 1, 1, 1, 299);
DibujarLinea(colorcito, 1, 299, 299, 299);
DibujarLinea(colorcito, 299, 299, 299, 1);
DibujarLinea(colorcito, 299, 1, 1, 1);

DibujarLinea(colorcito, 150, 1, 150, 299);
DibujarLinea(colorcito, 1, 150, 299, 150);

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
