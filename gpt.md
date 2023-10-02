function clickPubli() {
document.getElementById("currentScreen").textContent = "Publicidad";
document.getElementById("screenPubli").style.display = "none";
document.getElementById("screenLargo").style.display = "none";
document.getElementById("screenInicio").style.display = "none";
document.getElementById("screenAbout").style.display = "none";

document.getElementById("help").style.display = "block";
document.getElementById("footer").style.display = "block";
botonResetPubli();
document.getElementById("btnCalcPubli").disabled = true;
document.getElementById("btnResetPubli").disabled = true;
}
