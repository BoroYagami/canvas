var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas =15;
var l = 0;
var yi, xf, xi;
var colorcito = "#FAA";
var yf = 150;
var yf2 = 160;
var yf3 = 150;
var xf1 = 150;
var xf2 = 300
var yi1 = 150;

for (l = 0; l < lineas; l++)
{
  xi = 10 * l;
  yf = yf - 10;
  yi = 10 * l;
  xf1 = xf1 + 10;
  xi = 10 * l;
  yf3 = yf3 + 10;
  yi1 = yi1 + 10;
  xf2 = xf2 - 10;
  DibujarLinea(colorcito, 150, yi1, xf2, 150);
  DibujarLinea(colorcito, xi, 150, 150, yf3);
  DibujarLinea(colorcito, 150, yi, xf1, 150);
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
