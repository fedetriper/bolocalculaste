function clickInicio() {
  document.getElementById("currentScreen").innerHTML = "BoloCalculaste?";
  $("#screenInicio").show();
  $("#screenPubli").hide();
  $("#screenLargo").hide();
  $("#screenAbout").hide();
  $("#help").hide();
  $("#footer").show();
}

function clickPubli() {
  document.getElementById("currentScreen").innerHTML = "Publicidad";
  $("#screenInicio").hide();
  $("#screenPubli").show();
  $("#screenLargo").hide();
  $("#screenAbout").hide();
  $("#help").show();
  $("#footer").show();
  botonResetPubli();
  document.getElementById("btnCalcPubli").disabled = true;
  document.getElementById("btnResetPubli").disabled = true;
}

function clickLargo() {
  document.getElementById("currentScreen").innerHTML = "Largo";
  $("#screenInicio").hide();
  $("#screenPubli").hide();
  $("#screenLargo").show();
  $("#screenAbout").hide();
  $("#help").show();
  $("#screenAbout").hide();

  botonResetLargo();
  document.getElementById("btnCalcLargo").disabled = true;
  document.getElementById("btnResetLargo").disabled = true;
}

function clickAbout() {
  document.getElementById("currentScreen").innerHTML = "Contacto";
  $("#screenInicio").hide();
  $("#screenPubli").hide();
  $("#screenLargo").hide();
  $("#screenAbout").show();
  $("#footer").hide();
  $("#help").hide();
}
