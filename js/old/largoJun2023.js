/* declaracion de variables */
var valorSemanaLargo;
var valorRefuerzoLargo;
var valorSabLargo;
var valorDomLargo;
var etra50Largo;
var extra100Largo;
var sacLargo = 0;
var vacLargo = 0;
var subTotalLargo; // bruto mas sac
var totalBrutoLargo;
var totalNetoLargo;
var llenarLista;
var otreSelectedLargo = false;
var valoresActualesSicaLargo;
var refuerzoChecked = false;
var valorSemanaOtre;

var listaValoresLargo = [
  // lista de valores jun 2023
  0, 134872, 101689, 75177, 126423, 92879, 134872, 101689, 101689, 75177,
  134872, 92879, 150266, 132605, 120636, 101689, 79535, 101689, 92879, 75177,
  75177, 79535, 101689, 92879, 84028, 75177, 75177, 150266, 128247, 101689,
  92879, 128247, 92879, 75177, 92879, 75177, 92879, 101689, 88433, 75177,
  128247, 101689, 128247, 101689, 101689, 150266, 103100, 75177, 36071,
];

var listaRolesLargo = [
  //lista de roles 2023
  "Jefe/a de Producción",
  "Asistente de Producción",
  "Ayudante de Producción",
  "Jefe/a de Locaciones",
  "Asistente de Locaciones",
  "Asistente de Dirección",
  "Continuista / Script",
  "1º Ayudante de Dirección",
  "2º Ayudante de Dirección",
  "Dirección de Casting",
  "Asistente de Casting",
  "Dirección de Fotografía",
  "Técnico/a Hd",
  "Camarógrafo/a",
  "1º Ayudante de Cámara",
  "2º Ayudante de Cámara",
  "Key Grip",
  "Grip",
  "Asistente de Grip",
  "Video Assist",
  "Fotógrafo/a de Filmación",
  "Gaffer",
  "Jefe/a Reflectorista",
  "Capataz Reflectorista",
  "Reflectorista",
  "Operador/a de Generador",
  "Dirección de Arte",
  "Escenógrafo/a",
  "Ambientador/a",
  "Ayudante de Escenografía",
  "Vestuarista",
  "Ayudante de Vestuario",
  "Modisto/a",
  "Utilero/a - Carpintero/a",
  "Asistente de Utilero",
  "Realizador/a",
  "Jefe/a de Maquillaje",
  "Peinador/a",
  "Ayte. de Maquillaje / Peinado",
  "Dirección de Sonido",
  "Ayudante de Sonido",
  "Dirección de Sonido Post / Mezclador/a",
  "Editor/a de Dialogos",
  "Editor/a de Ambientes y Efectos",
  "Compaginador/a",
  "Ayudante de Compaginación",
  "Cortador/a de Negativos",
  "Aprendiz",
  "Otro Rol",
];

/* funciones */

function afterSelecLargo() {
  /* unblock inputs */
  document.getElementById("cantSemanasLargo").disabled = false;
  document.getElementById("cantSabLargo").disabled = false;
  document.getElementById("cantDomLargo").disabled = false;
  document.getElementById("cantXtra50Largo").disabled = false;
  document.getElementById("cantXtra100Largo").disabled = false;
  document.getElementById("afiliadoLargo").disabled = false;
  document.getElementById("calcSacVacLargo").disabled = false;
  document.getElementById("switchLargoMode").disabled = false;

  /* Show valores Sica */
  if (document.getElementById("rolesLargo").value == "Otro Rol") {
    OtreSelectedLargo();
    otreSelectedLargo = true;
  } else {
    cargarValoresLargo();
    rolesSicaLargo();

    otreSelectedLargo = false;
  }
}

function OtreSelectedLargo() {
  valorSemanaOtre = prompt("Ingrese valor por Semana");
  if (valorSemanaOtre == null) {
    // user hit cancel
    //alert("vuelve a valores sica");
    botonResetLargo();
  } else {
    if (valorSemanaOtre.length <= 0 || isNaN(valorSemanaOtre)) {
      // user pressed OK, but input invalid or does not input anything
      alert("ingresar un numero valido.");
      botonResetLargo();
    } else {
      // user typed something valid and hit OK

      console.log(valorSemanaOtre);
      extra50Largo = (valorSemanaOtre / 44) * 1.5;
      extra100Largo = (valorSemanaOtre / 44) * 2;
      valorSabLargo = (valorSemanaOtre / 5) * 1.5;
      valorDomLargo = (valorSemanaOtre / 5) * 1.5;
      valorRefuerzoLargo = (valorSemanaOtre / 5) * 1.5;
      valorSemanaLargo = valorSemanaOtre;
      console.log(
        "valor otre " + valorSemanaOtre + " valorLargo " + valorSemanaLargo
      );
      $("#valoresSicaLargo").slideDown();

      valoresActualesSicaLargo = document.getElementById(
        "fechaActualLargo"
      ).innerHTML = "Valores Personalizados";
      document.getElementById("showValorSemanalLargo").innerHTML =
        "$" + Number(valorSemanaOtre).toFixed(2);
      document.getElementById("showValorXtraLargo").innerHTML =
        "$" + Number(extra50Largo).toFixed(2);
    }
  }
  //alert(valor12hsOtre);
  //alert(valor12hsOtre + " v8h " + valor8hsOtre + " vxtra " + valorXtraOtre);
}

function cargarValoresLargo() {
  valorSemanaLargo =
    listaValoresLargo[document.getElementById("rolesLargo").selectedIndex];
  extra50Largo = (valorSemanaLargo / 44) * 1.5;
  extra100Largo = (valorSemanaLargo / 44) * 2;
  valorSabLargo = (valorSemanaLargo / 5) * 1.5;
  valorDomLargo = (valorSemanaLargo / 5) * 1.5;
  valorRefuerzoLargo = (valorSemanaLargo / 5) * 1.5; //averiguar si esta bien
}

function rolesSicaLargo() {
  valoresActualesSicaLargo = document.getElementById(
    "fechaActualLargo"
  ).innerHTML = "Valores Junio 2023"; // CAMBIAR FECHA Cuando Se Actualiza

  $("#valoresSicaLargo").slideDown();

  document.getElementById("showValorSemanalLargo").innerHTML =
    "$" + valorSemanaLargo;
  document.getElementById("showValorXtraLargo").innerHTML =
    "$" + extra50Largo.toFixed(2);
}

function cerrarModuloValoresLargo() {
  /* document.getElementById("valoresSicaPubli").setAttribute("class", "modulo hide");  */
  $("#valoresSicaLargo").slideUp();
  $("#inputUsuarioLargo").show();
}

function calculoLargo() {
  if (refuerzoChecked == true) {
    valorSemanaLargo = valorRefuerzoLargo;
    extra50Largo = (valorSemanaLargo / 8.75) * 1.5;
    extra100Largo = (valorSemanaLargo / 8.75) * 2;
    valorSabLargo = valorSemanaLargo * 1.5;
    valorDomLargo = valorSemanaLargo * 1.5;
  } else {
    extra50Largo = (valorSemanaLargo / 44) * 1.5;
    extra100Largo = (valorSemanaLargo / 44) * 2;
    valorSabLargo = (valorSemanaLargo / 5) * 1.5;
    valorDomLargo = (valorSemanaLargo / 5) * 1.5;
  }

  totalBrutoLargo =
    valorSemanaLargo * document.getElementById("cantSemanasLargo").value +
    extra50Largo * document.getElementById("cantXtra50Largo").value +
    extra100Largo * document.getElementById("cantXtra100Largo").value +
    valorSabLargo * document.getElementById("cantSabLargo").value +
    valorDomLargo * document.getElementById("cantDomLargo").value;
  /*  +
                (valorRefuerzoLargo * document.getElementById('cantRefuerzoLargo').value) */

  if (document.getElementById("calcSacVacLargo").checked == true) {
    sacLargo = totalBrutoLargo * 0.0833;
    vacLargo = (totalBrutoLargo + sacLargo) * 0.05;
    subTotalLargo = totalBrutoLargo + sacLargo;
    afiliadoLargo();
    totalNetoLargo =
      subTotalLargo - descAplicarLargo + vacLargo + vacLargo * 0.0833;
    totalButoLargo = totalBrutoLargo.toFixed(2);
    totalNetoLargo = totalNetoLargo.toFixed(2);
    sacLargo = sacLargo.toFixed(2);
    vacLargo = vacLargo.toFixed(2);
    descAplicarLargo = descAplicarLargo.toFixed(2);
    console.log(totalBrutoLargo);
    console.log(descAplicarLargo);
    console.log(totalNetoLargo);
  } else {
    sacLargo = 0;
    vacLargo = 0;

    subTotalLargo = totalBrutoLargo;
    afiliadoLargo();

    totalNetoLargo = subTotalLargo - descAplicarLargo;
    totalButoLargo = totalBrutoLargo.toFixed(2);
    totalNetoLargo = totalNetoLargo.toFixed(2);
    descAplicarLargo = descAplicarLargo.toFixed(2);
    console.log(totalBrutoLargo);
    console.log(descAplicarLargo);
    console.log(totalNetoLargo);
  }
  if (totalNetoLargo == 0) {
    M.toast({
      html: "Debe Ingresar los datos",
    });

    botonResetLargo();
  } else {
    printTableTotalLargo();
    $("#totalesLargo").slideDown();
    $("#inputUsuarioLargo").slideUp();
  }
}

function afiliadoLargo() {
  if (document.getElementById("afiliadoLargo").checked == true) {
    //variable global descAplicar
    descAplicarLargo = subTotalLargo * 0.2;
    percentLargoPrint = "20%";
  } else {
    descAplicarLargo = subTotalLargo * 0.19;
    percentLargoPrint = "19%";
  }
}

function opcionRefuerzo() {
  if (document.getElementById("switchLargoMode").checked == false) {
    document.getElementById("cambiarTxtModoLargo").innerHTML =
      "Cantidad de Jornadas";
    $("#semanaORefuerzoLargo").text("Jornadas");

    refuerzoChecked = true;
  } else {
    document.getElementById("cambiarTxtModoLargo").innerHTML =
      "Cantidad de Semanas";
    $("#semanaORefuerzoLargo").text("Semanas");

    refuerzoChecked = false;
  }
}

function printTableTotalLargo() {
  //semana
  document.getElementById("unidSemLargo").innerHTML =
    document.getElementById("cantSemanasLargo").value;
  document.getElementById("impSemLargo").innerHTML =
    "$ " +
    (
      valorSemanaLargo * document.getElementById("cantSemanasLargo").value
    ).toFixed(2);
  //  sabado
  document.getElementById("unidSabLargo").innerHTML =
    document.getElementById("cantSabLargo").value;
  document.getElementById("impSabLargo").innerHTML =
    "$ " +
    (valorSabLargo * document.getElementById("cantSabLargo").value).toFixed(2);
  //domingo
  document.getElementById("unidDomLargo").innerHTML =
    document.getElementById("cantDomLargo").value;
  document.getElementById("impDomLargo").innerHTML =
    "$ " +
    (valorDomLargo * document.getElementById("cantDomLargo").value).toFixed(2);
  //extra50
  document.getElementById("unidXtra50Largo").innerHTML =
    document.getElementById("cantXtra50Largo").value;
  document.getElementById("impXtra50Largo").innerHTML =
    "$ " +
    (extra50Largo * document.getElementById("cantXtra50Largo").value).toFixed(
      2
    );
  //extra100
  document.getElementById("unidXtra100Largo").innerHTML =
    document.getElementById("cantXtra100Largo").value;
  document.getElementById("impXtra100Largo").innerHTML =
    "$ " +
    (extra100Largo * document.getElementById("cantXtra100Largo").value).toFixed(
      2
    );
  //sac
  document.getElementById("unidSACLargo").innerHTML = "8,33%";
  document.getElementById("impSACLargo").innerHTML = "$ " + sacLargo;
  //vac
  document.getElementById("unidVACLargo").innerHTML = "5%";
  document.getElementById("impVACLargo").innerHTML = "$ " + vacLargo;
  //desc
  document.getElementById("unidDescLargo").innerHTML = percentLargoPrint;
  document.getElementById("impDescLargo").innerHTML = "-$ " + descAplicarLargo;
  //totales
  document.getElementById("printTotalBrutoLargo").innerHTML =
    "Total Bruto $" + totalBrutoLargo.toFixed(2);
  document.getElementById("printTotalNetoLargo").innerHTML =
    "Total Neto $" + Number(totalNetoLargo).toFixed(2);
}

function resetTableTotalLargo() {
  //semana
  document.getElementById("unidSemLargo").innerHTML = "";
  document.getElementById("impSemLargo").innerHTML = "";
  //  sabado
  document.getElementById("unidSabLargo").innerHTML = "";
  document.getElementById("impSabLargo").innerHTML = "";
  //domingo
  document.getElementById("unidDomLargo").innerHTML = "";
  document.getElementById("impDomLargo").innerHTML = "";
  //extra50
  document.getElementById("unidXtra50Largo").innerHTML = "";
  document.getElementById("impXtra50Largo").innerHTML = "";
  //extra100
  document.getElementById("unidXtra100Largo").innerHTML = "";
  document.getElementById("impXtra100Largo").innerHTML = "";
  //sac
  document.getElementById("unidSACLargo").innerHTML = "";
  document.getElementById("impSACLargo").innerHTML = "";
  //vac
  document.getElementById("unidVACLargo").innerHTML = "";
  document.getElementById("impVACLargo").innerHTML = "";
  //desc
  document.getElementById("unidDescLargo").innerHTML = "";
  document.getElementById("impDescLargo").innerHTML = "";
  //totales
  document.getElementById("printTotalBrutoLargo").innerHTML = "";
  document.getElementById("printTotalNetoLargo").innerHTML = "";
  botonResetLargo();
}

function llenarRolesLargo() {
  llenarLista = document.getElementById("rolesLargo");
  for (var i = 0; i < listaRolesLargo.length; i++) {
    var opt = listaRolesLargo[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    llenarLista.appendChild(el);
  }
}

function unBlockBtnLargo() {
  document.getElementById("btnCalcLargo").disabled = false;
  document.getElementById("btnResetLargo").disabled = false;
}

function botonResetLargo() {
  $("#valoresSicaLargo").slideUp();
  $("#inputUsuarioLargo").slideDown();

  $("#totalesLargo").slideUp();
  document.getElementById("formIngresoLargo").reset();
  document.getElementById("cantSemanasLargo").disabled = true;
  document.getElementById("cantSabLargo").disabled = true;
  document.getElementById("cantDomLargo").disabled = true;
  document.getElementById("cantXtra50Largo").disabled = true;
  document.getElementById("cantXtra100Largo").disabled = true;
  document.getElementById("afiliadoLargo").disabled = true;
  document.getElementById("calcSacVacLargo").disabled = true;
  document.getElementById("btnCalcLargo").disabled = true;
  document.getElementById("switchLargoMode").disabled = true;
  document.getElementById("cambiarTxtModoLargo").innerHTML =
    "Cantidad de Semanas";
  document.getElementById("semanaORefuerzo").innerHTML = "Valor por Semana";
  refuerzoChecked = false;
}
