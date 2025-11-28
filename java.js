let fase = 0;

function azioni() {
  if (fase === 0) {

    document.getElementById("messaggio").textContent = "PEPPEREPE";
    this.textContent = "Nuova sorpresa";
    fase = 1;

  } else if (fase === 1) {
    document.getElementById("messaggio").textContent = "TADAAAA!";
    this.textContent = "E ora un bel disegno";
    fase = 2;
  }
  else if (fase === 2) {
    disegna();
    this.textContent = "Torna a capo";
    fase = 0;
  }
}

function disegna() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 190, 190);

  ctx.fillStyle = "#00FF00";


  for (let i = 0; i <= canvas.width; i += 20) {
    ctx.fillRect(i, i, 10, 10);
  }

  for (let i = 0; i <= canvas.width; i += 20) {
    ctx.fillRect(180 - i, i, 10, 10);
  }
}