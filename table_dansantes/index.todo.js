// variables
var canvas, ctx, w, h, radius;
var margin = 1;

// initialisation
function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	w = canvas.width, h = canvas.height;
  radius = w/2-margin;
}

// effacer la zone de dessin
function clean(r, g, b) {
	ctx.fillStyle = 'rgb('+r+', '+g+', '+b+')';
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

// chargement
function load() {
  init();
  clean(50,200,120);
  console.log('load');
}

// dessiner le fond
function drawBackground() {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.strokeStyle = "rgb(255, 255, 255)";
  ctx.beginPath();
  ctx.arc(w/2, h/2, radius, 0, 2*Math.PI, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// dessiner une ligne
function drawLine(x1,y1,x2,y2) {
  ctx.fillStroke = "rgb(255, 255, 255)";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2,y2);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// dessiner un point
var pointSize = 3;
function drawPoint(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillStroke = "rgb(255, 255, 255)";
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

}

// récupérer les données de la page
var table, modulo;
function getData() {
  table = document.getElementById("table").value ? parseFloat(document.getElementById("table").value) : 0;
  modulo = document.getElementById("modulo").value ? parseFloat(document.getElementById("modulo").value) : 0;
}


function drawTable() {
  getData();
  drawBackground();

  for (var i = 0; i <= modulo; i++) {
    let step = 2 * Math.PI / modulo;
    let table2 = 2 * Math.PI / table;

    var centreX = w/2;
    var centreY = h/2;

    x = centreX + radius * Math.cos(i * step);
    y = centreY + radius * Math.sin(i * step);
    var x1 = centreX + radius * Math.cos(i * table2);
    var y1 = centreY + radius * Math.sin(i * table2);

    drawPoint(x, y, "rgb(255,255,0)");
    drawLine(x,y,x1,y1);
  }

}

function drawTableIncrement() {
  drawBackground();

  for (var i = 0; i <= modulo; i++) {
    let step = 2 * Math.PI / modulo;
    let table2 = 2 * Math.PI / table;

    var centreX = w/2;
    var centreY = h/2;

    x = centreX + radius * Math.cos(i * step);
    y = centreY + radius * Math.sin(i * step);
    var x1 = centreX + radius * Math.cos(i * table2);
    var y1 = centreY + radius * Math.sin(i * table2);

    drawPoint(x, y, "rgb(255,255,0)");
    drawLine(x,y,x1,y1);
  }

}

var resetLoop = false;

function autoIncrementModulo() {
  if (modulo == null) {
    getData();
  }
  var j = 0;
  setTimeout(function () { 
    drawTableIncrement();
    modulo++;
    showStat();
    j++;
    if (j < 1000 && resetLoop == false) {
      autoIncrementModulo();
    }
  }, 50)
}

function autoIncrementTable() {
  if (table == null) {
    getData();
  }
  var j = 0;
  setTimeout(function () { 
    drawTableIncrement();
    table++;
    showStat();
    j++;
    if (j < 1000 && resetLoop == false) {
      autoIncrementTable();
    }
  }, 50)
}

function autoIncrementBoth() {
  if (table == null || modulo == null) {
    getData();
  }
  var j = 0;
  setTimeout(function () { 
    drawTableIncrement();
    modulo += 5;
    table++;
    showStat();
    j++;
    if (j < 1000 && resetLoop == false) {
      autoIncrementBoth();
    }
  }, 50)
}

function stopFunction() {
  return resetLoop = true;
}

function showStat() {
  document.getElementById("stats").innerHTML = "Table : " + table + " Points : " + modulo;
}


