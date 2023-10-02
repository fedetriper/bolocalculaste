function clickInicio() {
  // document.getElementById("currentScreen").innerHTML = "BoloCalculaste?";
  $("#currentScreen").text("BoloCalculaste?");
  $("#screenInicio").show();
  $("#screenPubli").hide();
  $("#screenLargo").hide();
  $("#screenAbout").hide();
  $("#help").hide();
  $("#footer").show();
}

function clickPubli() {
  //document.getElementById("currentScreen").innerHTML = "Publicidad";
  $("#currentScreen").text("Publicidad");
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
// function clickPubli() {
//   $("#currentScreen").text("Publicidad");
//   $("#screenInicio, #screenLargo, #screenAbout").hide();
//   $("#help, #screenPubli, #footer").show();
//   botonResetPubli();
//   $("#btnCalcPubli, #btnResetPubli").prop("disabled", true);
// }

function clickLargo() {
  $("#currentScreen").text("Largo");
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
  $("#currentScreen").text("Contacto");
  $("#screenInicio").hide();
  $("#screenPubli").hide();
  $("#screenLargo").hide();
  $("#screenAbout").show();
  $("#footer").hide();
  $("#help").hide();
}

function help() {
  $("#tituloHelp").text($("#currentScreen").text());

  if ($("#currentScreen").text() === "Publicidad") {
    $("#idImagenesHelp").html(
      '<img class="responsive-img imagenesHelp"  src="assets/Publicidad01.jpeg" alt="ayuda">' +
        '<p id="textoHelp1"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Publicidad02.jpeg" alt="ayuda">' +
        '<p id="textoHelp2"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Publicidad03.jpeg" alt="ayuda">' +
        '<p id="textoHelp3"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Publicidad04.jpeg" alt="ayuda">' +
        '<p id="textoHelp4"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Publicidad05.jpeg" alt="ayuda">' +
        '<p id="textoHelp5"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Publicidad06.jpeg" alt="ayuda">' +
        '<p id="textoHelp6"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Publicidad07.jpeg" alt="ayuda">' +
        '<p id="textoHelp7"></p>'
    );

    $("#textoHelp1").html(
      "Primero seleccioná tu Rol, si tu rol no figura o queres calcular con un valor personalizado, seleccioná “Otro Rol”."
    );
    $("#textoHelp2").html(
      "Acá podés ver la fecha de la escala salarial y el valor de las jornadas."
    );
    $("#textoHelp3").html(
      "Ingresá la cantidad de Jornadas trabajadas. Las Jornadas de 8hs son las de scouting técnico o Chequeos de Equipos."
    );
    $("#textoHelp4").html("Ingresá la cantidad de Jornadas de Rodaje");
    $("#textoHelp5").html(
      "Ingresá las Horas extras en formato decimal. Ej. 5 horas 15 minutos se escribe 5.25"
    );
    $("#textoHelp6").html(
      "Si no sos Afiliado al Sindicato desactivá la casilla.<br> Tocá en Calcular para ver el resultado."
    );
    $("#textoHelp7").html(
      "Acá podes ver el total a cobrar y también el desglose.<br>*Los descuentos corresponden a: 3% Obra Social, 3 o 2% de Aporte Sindical (depende si sos afiliadx o no) y 14% de Sistema Jubilatorio."
    );
  } else if ($("#currentScreen").text() === "Largo") {
    $("#idImagenesHelp").html(
      '<img class="responsive-img imagenesHelp"  src="assets/Largo01.jpeg" alt="ayuda">' +
        '<p id="textoHelp1"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Largo02.jpeg" alt="ayuda">' +
        '<p id="textoHelp2"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Largo03.jpeg" alt="ayuda">' +
        '<p id="textoHelp3"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Largo04.jpeg" alt="ayuda">' +
        '<p id="textoHelp4"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Largo05.jpeg" alt="ayuda">' +
        '<p id="textoHelp5"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Largo06.jpeg" alt="ayuda">' +
        '<p id="textoHelp6"></p>' +
        '<img class="responsive-img imagenesHelp"  src="assets/Largo07.jpeg" alt="ayuda">' +
        '<p id="textoHelp7"></p>'
    );

    $("#textoHelp1").html(
      "Primero seleccioná tu Rol, si tu rol no figura o queres calcular con un valor personalizado, seleccioná “Otro Rol”."
    );
    $("#textoHelp2").html(
      "Acá podés ver la fecha de la escala salarial y el valor de las jornadas."
    );
    $("#textoHelp3").html(
      "Ingresá la cantidad de Semanas trabajadas. Si te contrataron por Jornada activá la opción Refuerzo."
    );
    $("#textoHelp4").html(
      "Ingresá la cantidad de Sábados y/o Domingos trabajados"
    );
    $("#textoHelp5").html(
      "Ingresá las Horas extras en formato decimal. Ej. 10 horas 45 minutos se escribe 10.75"
    );
    $("#textoHelp6").html(
      "Si no sos Afiliado al Sindicato desactivá la casilla."
    );
    $("#textoHelp7").html(
      "Acá podes ver el total a cobrar y también el desgloce.<br>* Los descuentos están todos sumados pero corresponden a 3% Obra Social, 3 o 2% de Aporte Sindical (depende si sos afiliadx o no) y 14% de Sistema Jubilatorio."
    );
  }
}
