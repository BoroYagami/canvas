var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

DibujarLinea("pink", 10, 300, 220, 10);
DibujarLinea("yelow", 300, 10, 10, 220);

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
