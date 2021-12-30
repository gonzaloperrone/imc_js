//Switch de tablas
var m = document.getElementById("m");
var e = document.getElementById("e");

var btnTab1 = document.getElementById("showM");
var btnTab2 = document.getElementById("showE");

btnTab1.onclick = function() {
  m.style.display = "table";
  e.style.display = "none";
}

btnTab2.onclick = function() {
  m.style.display = "none";
  e.style.display = "table";
}

//Calcular imc tabla 1 y alertas
function imcM() {
    var h = document.getElementById("h").value;
    var w = document.getElementById("w").value;

    if (h === "" && w === "") {
        alert("Debe ingresar su peso y su altura")
    } else if (h === "" && w !== "") {
        alert("Debe ingresar su altura")
    } else if (h !== "" && w === "") {
        alert("Debe ingresar su peso")
    } else if (h !== "" && w !== "") {
        imc = w / (h * h);

    }
    document.getElementById("imcResult").innerHTML = "Su IMC es: " + imc.toFixed(0) + "<br>";

    if (imc < 18.5) {
        document.getElementById("imcResult").innerHTML += "Se encuentra dentro del rango de peso insuficiente."
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("imcResult").innerHTML += "Se encuentra dentro del rango de peso normal o saludable."
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("imcResult").innerHTML += "Se encuentra dentro del rango de sobrepeso."
    } else if (imc >= 30) {
        document.getElementById("imcResult").innerHTML += "Se encuentra dentro del rango de obesidad."
    }

    document.getElementById("deleteBtn").innerHTML = '<button id="rest1" onclick="rest()">Restablecer</button>'
}

//Calcular imc tabla 2 y alertas
function imcE(){
    var p = document.getElementById("p").value;
    var l = document.getElementById("l").value;

    if (p === "" && l === "") {
        alert("Debe ingresar su peso y su altura")
    } else if (p === "" && l !== "") {
        alert("Debe ingresar su altura")
    } else if (p !== "" && l === "") {
        alert("Debe ingresar su peso")
    } else if (p !== "" && l !== "") {
        imc2 = (p / (l * l))*703;

    }
    document.getElementById("imcResultE").innerHTML = "Su IMC es: " + imc2.toFixed(0) + "<br>";

    if (imc2 < 18.5) {
        document.getElementById("imcResultE").innerHTML += "Se encuentra dentro del rango de peso insuficiente."
    } else if (imc2 >= 18.5 && imc2 <= 24.9) {
        document.getElementById("imcResultE").innerHTML += "Se encuentra dentro del rango de peso normal o saludable."
    } else if (imc2 >= 25 && imc2 <= 29.9) {
        document.getElementById("imcResultE").innerHTML += "Se encuentra dentro del rango de sobrepeso."
    } else if (imc2 >= 30) {
        document.getElementById("imcResultE").innerHTML += "Se encuentra dentro del rango de obesidad."
    }

    document.getElementById("deleteBtn2").innerHTML = '<button id="rest1" onclick="rest()">Restablecer</button>'
}

function rest(){
    document.getElementById("h").value = "";
    document.getElementById("w").value = "";
    document.getElementById("p").value = "";
    document.getElementById("l").value = "";
    document.getElementById("imcResult").innerHTML = "";
    document.getElementById("imcResultE").innerHTML = "";
    document.getElementById("deleteBtn").innerHTML = "";
    document.getElementById("deleteBtn2").innerHTML = "";
}