//Enero 2024
/* declaracion de variables */
let valorSemanaLargo;
let valorRefuerzoLargo;
let valorSabLargo;
let valorDomLargo;
let extra50Largo;
let extra100Largo;
let sacLargo = 0;
let vacLargo = 0;
let subTotalLargo; // bruto mas sac
let totalBrutoLargo;
let totalNetoLargo;
let llenarLista;
let otreSelectedLargo = false;
let valoresActualesSicaLargo = document.getElementById("fechaActualLargo");
let refuerzoChecked = false;
let valorSemanaOtre;

let textoEscLargoActual = "Valores Enero 2024"; // CAMBIAR FECHA Cuando Se Actualiza
let textoEscLargoPasada = "Valores Diciembre 2023"; // CAMBIAR FECHA Cuando Se Actualiza
let textoEscLargoSel = textoEscLargoActual;

let listaValoresLargoActual = [
  // lista de valores Enero 2024
  0, 234778, 177014, 130864, 220069, 161678, 234778, 177014, 177014, 130864,
  234778, 161678, 261573, 230831, 209997, 177014, 138449, 177014, 161678,
  130864, 130864, 138449, 177014, 161678, 146271, 130864, 130864, 261573,
  223245, 177014, 161678, 223245, 161678, 130864, 161678, 130864, 161678,
  177014, 153939, 130864, 223245, 177014, 223245, 177014, 177014, 261573,
  179470, 130864, 62790,
];
let listaValoresLargoPasada = [
  // lista de valores Diciembre 2023
  0, 219792, 165715, 122511, 206022, 151358, 219792, 165715, 165715, 122511,
  219792, 151358, 244877, 216097, 196593, 165715, 129612, 165715, 151358,
  122511, 122511, 129612, 165715, 151358, 136935, 122511, 122511, 244877,
  208996, 165715, 151358, 208996, 151358, 122511, 151358, 122511, 151358,
  165715, 144113, 122511, 208996, 165715, 208996, 165715, 165715, 244877,
  168014, 122511, 58782,
];
let listaRolesLargo = [
  //lista de roles 2024
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
let listaValoresLargo = listaValoresLargoActual;
let swEscalaLargoElement = document.getElementById("swEscalaLargo");
// Agregar el event listener al elemento de selección
swEscalaLargoElement.addEventListener("change", actualizarValoresLargo);

// Función que se llamará cada vez que cambie la selección
function actualizarValoresLargo() {
  // Obtener el valor seleccionado (true si está activado, false si no)
  const switchEscalaLargo = swEscalaLargoElement.checked;

  // Llamar a la función opcionActualPasada con el valor del switch
  const valoresActualizadosLargo = opcionActualPasadaLargo(switchEscalaLargo);

  // Aquí puedes utilizar los valores actualizados como desees
  console.log(valoresActualizadosLargo);
}
function opcionActualPasadaLargo(switchEscalaLargo) {
  // Utilizar el operador ternario para asignar los valores adecuados según el valor del switch
  listaValoresLargo = switchEscalaLargo
    ? listaValoresLargoActual
    : listaValoresLargoPasada;

  textoEscLargoSel = switchEscalaLargo
    ? textoEscLargoActual
    : textoEscLargoPasada;

  // Aquí puedes realizar cualquier otra operación que necesites con los valores resultantes
  rolesSicaLargo();

  // Finalmente, puedes devolver o hacer uso de los valores resultantes
  return {
    listaValoresLargo,
  };
}

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
    document.getElementById("swEscalaLargo").disabled = true;
  } else {
    rolesSicaLargo();

    document.getElementById("swEscalaLargo").disabled = false;
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

      valoresActualesSicaLargo.innerHTML = "Valores Personalizados";
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
  valoresActualesSicaLargo.innerHTML = textoEscLargoSel;
  cargarValoresLargo();

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
