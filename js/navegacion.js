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

function help() {
  $("#tituloHelp").text($("#currentScreen").text());
  if (document.getElementById("currentScreen").innerHTML == "Publicidad") {
    document.getElementById("idImagenesHelp").innerHTML =
      '<img class="responsive-img imagenesHelp"  src="assets/Publicidad01.jpeg">' +
      '<p id="textoHelp1"></p>' +
      '<img class="responsive-img imagenesHelp"  src="assets/Publicidad02.jpeg">' +
      ' <p id="textoHelp2"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Publicidad03.jpeg">' +
      '  <p id="textoHelp3"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Publicidad04.jpeg">' +
      '  <p id="textoHelp4"></p>' +
      '<img class="responsive-img imagenesHelp"  src="assets/Publicidad05.jpeg">' +
      '  <p id="textoHelp5"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Publicidad06.jpeg">' +
      '  <p id="textoHelp6"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Publicidad07.jpeg">' +
      '  <p id="textoHelp7"></p>';

    document.getElementById("textoHelp1").innerHTML =
      "Primero seleccioná tu Rol, si tu rol no figura o queres calcular con un valor personalizado , seleccioná “Otro Rol”.";
    document.getElementById("textoHelp2").innerHTML =
      "Acá podés ver la fecha de la escala salarial y el valor de las jornadas.";
    document.getElementById("textoHelp3").innerHTML =
      "Ingresá la cantidad de Jornadas trabajadas. Las Jornadas de 8hs son las de scouting tecnico o Chequeos de Equipos.";
    document.getElementById("textoHelp4").innerHTML =
      "Ingresá la cantidad de Jornadas de Rodaje";
    document.getElementById("textoHelp5").innerHTML =
      "ingresá las Horas extras en formato decimal. Ej. 5 horas 15 minutos se escribe 5.25";
    document.getElementById("textoHelp6").innerHTML =
      "Si no sos Afiliado al Sindicato desactivá la casilla.<br> Tocá en Calcular para ver el resultado.";
    document.getElementById("textoHelp7").innerHTML =
      "Acá podes ver el total a cobrar y tambien el desglose.<br>*Los descuentos corresponden a: 3% Obra Social, 3 o 2% de Aporte Sindical(depende si sos afiliadx o no) y 14% de Sistema Jubilatorio.";
  } else if (document.getElementById("currentScreen").innerHTML == "Largo") {
    document.getElementById("idImagenesHelp").innerHTML =
      '<img class="responsive-img imagenesHelp"  src="assets/Largo01.jpeg">' +
      '<p id="textoHelp1"></p>' +
      '<img class="responsive-img imagenesHelp"  src="assets/Largo02.jpeg">' +
      ' <p id="textoHelp2"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Largo03.jpeg">' +
      '  <p id="textoHelp3"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Largo04.jpeg">' +
      '  <p id="textoHelp4"></p>' +
      '<img class="responsive-img imagenesHelp"  src="assets/Largo05.jpeg">' +
      '  <p id="textoHelp5"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Largo06.jpeg">' +
      '  <p id="textoHelp6"></p>' +
      ' <img class="responsive-img imagenesHelp"  src="assets/Largo07.jpeg">' +
      '  <p id="textoHelp7"></p>';

    document.getElementById("textoHelp1").innerHTML =
      "Primero seleccioná tu Rol, si tu rol no figura o queres calcular con un valor personalizado , seleccioná “Otro Rol”.";
    document.getElementById("textoHelp2").innerHTML =
      "Acá podés ver la fecha de la escala salarial y el valor de las jornadas.";
    document.getElementById("textoHelp3").innerHTML =
      "Ingresá la cantidad de Semanas trabajadas. Si te contrataron por Jornada activá la opción Refuerzo.";
    document.getElementById("textoHelp4").innerHTML =
      "Ingresá la cantidad de Sábados y/o Domingos trabajados";
    document.getElementById("textoHelp5").innerHTML =
      "ingresá las Horas extras en formato decimal. Ej. 10 horas 45 minutos se escribe 10.75";
    document.getElementById("textoHelp6").innerHTML =
      "Si no sos Afiliado al Sindicato desactivá la casilla.";
    document.getElementById("textoHelp7").innerHTML =
      "Acá podes ver el total a cobrar y tambien el desgloce.<br>* los descuentos están todos sumados pero corresponden a 3% Obra Social, 3 o 2% de Aporte Sindical(depende si sos afiliadx o no) y 14% de Sistema Jubilatorio.";
  }
}
