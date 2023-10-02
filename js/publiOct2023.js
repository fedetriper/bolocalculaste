//script Modulo Publi Ocubre 2023

//declaracion Variables

let valor8Publi;
let valor12Publi;
let valorExtPubli;
let valorExt200Publi;
let valorExt300Publi;
let sacPubli;
let vacPubli;
let sacSvacPubli;
let subTotalPubli; // bruto mas sac
let totalBrutoPubli;
let totalNetoPubli;
let valoresActualesSica = document.getElementById("fechaActualPubli");
let valor8hsOtre;
let valor12hsOtre;
let valorXtraOtre;
let valorXtraOtre200;
let valorXtraOtre300;
let otreSelectedTrue = false;
let listaValores8PubliActual = [
  0, 45046, 37534, 26241, 17551, 45046, 26241, 17551, 17453, 33786, 26241,
  17551, 195210, 79595, 52551, 37534, 32696, 67568, 37534, 58394, 52551, 40527,
  30041, 52551, 40527, 52551, 40527, 52551, 40527, 52551, 30041, 79595, 36033,
  52551, 49722, 34011, 26241, 17551, 42381, 26241, 17551, 85584, 45046, 31535,
  7872,
];
let listaValores12PubliActual = [
  0, 78831, 65685, 45922, 30714, 78831, 45922, 30714, 30542, 59125, 45922,
  30714, 341617, 139292, 91964, 65685, 57218, 118244, 65685, 102190, 91964,
  70922, 52571, 91964, 70922, 91964, 70922, 91964, 70922, 91964, 52571, 139292,
  63057, 91964, 87014, 59520, 45922, 30714, 74167, 45922, 30714, 149772, 78831,
  55186, 13776,
];

let listaValores12Publi = listaValores12PubliActual;
let listaValores8Publi = listaValores8PubliActual;
// valores pasados
let listaValores8PubliPasada = [
  //Agosto 2023
  0, 38790, 32321, 22597, 15113, 38790, 22597, 15113, 15029, 29093, 22597,
  15113, 168097, 68541, 45253, 32321, 28394, 58183, 32321, 50284, 45253, 34898,
  25869, 45253, 34898, 45253, 34898, 45253, 34898, 45253, 25869, 68541, 31028,
  45253, 42817, 29287, 22597, 15113, 36495, 22597, 15113, 73698, 38790, 27155,
  6779,
];
let listaValores12PubliPasada = [
  // Agosto 2023
  0, 67882, 56562, 39544, 26448, 67882, 39544, 26448, 26300, 50913, 39544,
  26448, 294170, 119946, 79192, 56562, 49690, 101821, 56562, 87997, 79192,
  61072, 45270, 79192, 61072, 79192, 61072, 79192, 61072, 79192, 45270, 119946,
  54299, 79192, 74929, 51253, 39544, 26448, 63866, 39544, 26448, 128971, 67882,
  47522, 11863,
];

let textoEscActual = "Valores Octubre 2023"; // CAMBIAR FECHA Cuando Se Actualiza
let textoEscPasada = "Valores Agosto 2023"; // CAMBIAR FECHA Cuando Se Actualiza
let textoEscalaSel = textoEscActual;

let swEscalaPubliElement = document.getElementById("swEscalaPubli");
// Agregar el event listener al elemento de selección
swEscalaPubliElement.addEventListener("change", actualizarValores);

// Función que se llamará cada vez que cambie la selección
function actualizarValores() {
  // Obtener el valor seleccionado (true si está activado, false si no)
  const switchEscalaPubli = swEscalaPubliElement.checked;

  // Llamar a la función opcionActualPasada con el valor del switch
  const valoresActualizados = opcionActualPasada(switchEscalaPubli);

  // Aquí puedes utilizar los valores actualizados como desees
  console.log(valoresActualizados);
}
function opcionActualPasada(switchEscalaPubli) {
  // Suponiendo que listaValores8Actual, listaValores12Actual, listaValores8Pasada y listaValores12Pasada son arreglos definidos previamente

  // Utilizar el operador ternario para asignar los valores adecuados según el valor del switch
  listaValores8Publi = switchEscalaPubli
    ? listaValores8PubliActual
    : listaValores8PubliPasada;
  listaValores12Publi = switchEscalaPubli
    ? listaValores12PubliActual
    : listaValores12PubliPasada;
  textoEscalaSel = switchEscalaPubli ? textoEscActual : textoEscPasada;

  // Aquí puedes realizar cualquier otra operación que necesites con los valores resultantes
  mostrarRolesSica();
  // Finalmente, puedes devolver o hacer uso de los valores resultantes
  return {
    listaValores8Publi: listaValores12Publi,
  };
}

let rolesListPubli = [
  "Asistente De Dirección",
  "Continuista (Script)",
  "1º Ayudante De Dirección",
  "2º Ayudante De Dirección",
  "Jefe De Producción",
  "Asistente De Producción",
  "1º Ayudante De Producción",
  "Chaperonas",
  "Jefe De Locaciones",
  "Asistente De Locaciones",
  "1º Ayudante De Locaciones",
  "Director De Fotografía",
  "Camarografo",
  "Asistente (Foquista)",
  "Ayudante De Cámara",
  "Video Asistente",
  "Operador HD - DIT",
  "Data Manager",
  "Gaffer",
  "Jefe Eléctrico",
  "Eléctrico",
  "Op. De Generador",
  "Sonidista",
  "Microfonista",
  "Key Grip",
  "Grip",
  "Utilero - Carpintero",
  "Ayudante De Utilero",
  "Maquillador",
  "Ayudante Maquillaje",
  "Maquillaje y Peinado",
  "Asist. Maquillaje y Peinado",
  "Peinador",
  "Dirección De Arte",
  "Ambientador/a",
  "Asistente De Arte",
  "Ayudante De Arte",
  "Vestuarista",
  "Asistente De Vestuario",
  "Ayudante De Vestuario",
  "Edicion De Video En Film",
  "Editor",
  "Asistente De Edición",
  "Aprendiz",
  "Otro Rol",
];

document.getElementById("cantExtra200Publi").disabled = true;
document.getElementById("cantExtra300Publi").disabled = true;

function llenarRolesPubli() {
  let llenarLista = document.getElementById("rolesPubli");

  for (let i = 0; i < rolesListPubli.length; i++) {
    let opt = rolesListPubli[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    llenarLista.appendChild(el);
  }
}

function afterSelecPubli() {
  /* unblock inputs */

  document.getElementById("cantJ8Publi").disabled = false;
  document.getElementById("cantJ12Publi").disabled = false;
  document.getElementById("cantExtraPubli").disabled = false;
  document.getElementById("cantExtra200Publi").disabled = false;
  document.getElementById("cantExtra300Publi").disabled = false;
  document.getElementById("afiliadoPubli").disabled = false;

  /* Show valores Sica */
  if (document.getElementById("rolesPubli").value == "Otro Rol") {
    OtreSelected();
    otreSelectedTrue = true;
    document.getElementById("swEscalaPubli").disabled = true;
  } else {
    mostrarRolesSica();
    document.getElementById("swEscalaPubli").disabled = false;
    otreSelectedTrue = false;
  }
}

function OtreSelected() {
  valor12hsOtre = prompt("Ingrese valor de jornada de 12hs");
  if (valor12hsOtre == null) {
    // user hit cancel
    // M.toast({
    //   html: "Adios",
    // });
    botonResetPubli();
  } else {
    if (valor12hsOtre.length <= 0 || isNaN(valor12hsOtre)) {
      // user pressed OK, but input invalid or does not input anything
      M.toast({
        html: "ingresar un numero valido.",
      });

      botonResetPubli();
    } else {
      // user typed something valid and hit OK

      //console.log(valor12hsOtre);
      valor8hsOtre = valor12hsOtre / 1.75;
      valorXtraOtre = valor8hsOtre / 4;
      valorXtraOtre200 = (valor8hsOtre / 8) * 3;
      valorXtraOtre300 = (valor8hsOtre / 8) * 4;
      valoresActualesSica.innerHTML = "Valores Personalizados";
      /* document.getElementById("valoresSicaPubli").setAttribute("class", "modulo"); */
      $("#valoresSicaPubli").slideDown();
      document.getElementById("showValorJ8Publi").innerHTML =
        "$" + valor8hsOtre.toFixed(2);
      document.getElementById("showValorJ12Publi").innerHTML =
        "$" + valor12hsOtre;
      document.getElementById("showValorXtraPubli").innerHTML =
        "$" + valorXtraOtre.toFixed(2);
    }
  }
}

function mostrarRolesSica() {
  valoresActualesSica.innerHTML = textoEscalaSel;

  $("#valoresSicaPubli").slideDown();

  document.getElementById("showValorJ8Publi").innerHTML =
    "$" +
    listaValores8Publi[document.getElementById("rolesPubli").selectedIndex];
  document.getElementById("showValorJ12Publi").innerHTML =
    "$" +
    listaValores12Publi[document.getElementById("rolesPubli").selectedIndex];
  document.getElementById("showValorXtraPubli").innerHTML =
    "$" +
    (
      listaValores8Publi[document.getElementById("rolesPubli").selectedIndex] /
      4
    ).toFixed(2);
}

function botonResetPubli() {
  /* document.getElementById("inputUsuarioPubli").setAttribute("class", "modulo"); */
  /* document.getElementById("valoresSicaPubli").setAttribute("class", "modulo hide"); */
  $("#valoresSicaPubli").slideUp();
  $("#inputUsuarioPubli").slideDown();
  /* document.getElementById("totalesPubli").setAttribute("class", "modulo hide"); */
  $("#totalesPubli").slideUp();
  document.getElementById("formIngresoPubli").reset();
  document.getElementById("cantJ8Publi").disabled = true;
  document.getElementById("cantJ12Publi").disabled = true;
  document.getElementById("cantExtraPubli").disabled = true;
  document.getElementById("cantExtra200Publi").disabled = true;
  document.getElementById("cantExtra300Publi").disabled = true;
  document.getElementById("afiliadoPubli").disabled = true;
  document.getElementById("btnCalcPubli").disabled = true;
}

function cerrarModuloValoresPubli() {
  /* document.getElementById("valoresSicaPubli").setAttribute("class", "modulo hide");  */
  $("#valoresSicaPubli").slideUp();
  $("#inputUsuarioPubli").show();
}

// funcion calculos
function calculoPubli() {
  if (otreSelectedTrue) {
    // si selecciono otre aplica valores personalizados si no aplica valor sica
    valor8Publi = valor8hsOtre;
    valor12Publi = valor12hsOtre;
    valorExtPubli = valor8hsOtre / 4;
    valorExt200Publi = (valor8hsOtre / 8) * 3;
    valorExt300Publi = (valor8hsOtre / 8) * 4;
  } else {
    valor8Publi =
      listaValores8Publi[document.getElementById("rolesPubli").selectedIndex];
    valor12Publi =
      listaValores12Publi[document.getElementById("rolesPubli").selectedIndex];
    valorExtPubli = valor8Publi / 4;
    valorExt200Publi = (valor8Publi / 8) * 3;
    valorExt300Publi = (valor8Publi / 8) * 4;
  }

  //asigna valores a partir de index y calcula la hora extra
  //calculo de Bruto
  totalBrutoPubli =
    valor8Publi * document.getElementById("cantJ8Publi").value +
    valor12Publi * document.getElementById("cantJ12Publi").value +
    valorExtPubli * document.getElementById("cantExtraPubli").value +
    valorExt200Publi * document.getElementById("cantExtra200Publi").value +
    valorExt300Publi * document.getElementById("cantExtra300Publi").value;
  // calculo de sac y vac
  sacPubli = totalBrutoPubli * 0.0833;
  vacPubli = (totalBrutoPubli + sacPubli) * 0.05;
  sacSvacPubli = vacPubli * 0.0833;
  //subtotal
  subTotalPubli = totalBrutoPubli + sacPubli;
  //inicia funcion define descuento a aplicar
  afiliadoPubli();
  /* total neto */
  totalNetoPubli = subTotalPubli - descAplicarPubli + vacPubli + sacSvacPubli;
  // 2 decimales a los totales
  totalBrutoPubli = totalBrutoPubli.toFixed(2);
  totalNetoPubli = totalNetoPubli.toFixed(2);
  sacPubli = sacPubli.toFixed(2);
  vacPubli = vacPubli.toFixed(2);
  sacSvacPubli = sacSvacPubli.toFixed(2);
  descAplicarPubli = descAplicarPubli.toFixed(2);
  console.log(totalBrutoPubli);
  console.log(descAplicarPubli);
  console.log(totalNetoPubli);
  console.log(valorExt200Publi);
  console.log(valorExt300Publi);

  if (totalNetoPubli == 0) {
    alert("Debe Ingresar los datos");
  }
  printTableTotalPubli();

  /* document.getElementById("totalesPubli").setAttribute("class", "row modulo");
    document.getElementById("inputUsuarioPubli").setAttribute("class", "row modulo hide"); */
  $("#totalesPubli").slideDown();
  $("#inputUsuarioPubli").slideUp();
}

//definir que descuento aplica
function afiliadoPubli() {
  if (document.getElementById("afiliadoPubli").checked == true) {
    //letiable global descAplicar
    descAplicarPubli = subTotalPubli * 0.2;
    percentPubliPrint = "20%";
  } else {
    descAplicarPubli = subTotalPubli * 0.19;
    percentPubliPrint = "19%";
  }
}
// Scripts Modulo Totales Publi
function printTableTotalPubli() {
  // table j8
  document.getElementById("unidJ8Publi").innerHTML =
    document.getElementById("cantJ8Publi").value;
  document.getElementById("impJ8Publi").innerHTML =
    "$ " +
    (valor8Publi * document.getElementById("cantJ8Publi").value).toFixed(2);
  //  table j12
  document.getElementById("unidJ12Publi").innerHTML =
    document.getElementById("cantJ12Publi").value;
  document.getElementById("impJ12Publi").innerHTML =
    "$ " + valor12Publi * document.getElementById("cantJ12Publi").value;
  //extra
  document.getElementById("unidXtraPubli").innerHTML =
    document.getElementById("cantExtraPubli").value;
  document.getElementById("impXtraPubli").innerHTML =
    "$ " +
    (valorExtPubli * document.getElementById("cantExtraPubli").value).toFixed(
      2
    );
  //extra200
  document.getElementById("unidXtra200Publi").innerHTML =
    document.getElementById("cantExtra200Publi").value;
  document.getElementById("impXtra200Publi").innerHTML =
    "$ " +
    (
      valorExt200Publi * document.getElementById("cantExtra200Publi").value
    ).toFixed(2);
  //extra300
  document.getElementById("unidXtra300Publi").innerHTML =
    document.getElementById("cantExtra300Publi").value;
  document.getElementById("impXtra300Publi").innerHTML =
    "$ " +
    (
      valorExt300Publi * document.getElementById("cantExtra300Publi").value
    ).toFixed(2);
  //sac
  document.getElementById("unidSACPubli").innerHTML = "8,33%";
  document.getElementById("impSACPubli").innerHTML = "$ " + sacPubli;
  //vac
  document.getElementById("unidVACPubli").innerHTML = "5%";
  document.getElementById("impVACPubli").innerHTML = "$ " + vacPubli;
  //Sac Sobre vac
  document.getElementById("unidSACSVACPubli").innerHTML = "8,33%";
  document.getElementById("impSACSVACPubli").innerHTML = "$ " + sacSvacPubli;
  //desc
  document.getElementById("unidDescPubli").innerHTML = percentPubliPrint;
  document.getElementById("impDescPubli").innerHTML = "-$ " + descAplicarPubli;
  //totales
  document.getElementById("printTotalBrutoPubli").innerHTML =
    "Total Bruto $" + totalBrutoPubli;
  document.getElementById("printTotalNetoPubli").innerHTML =
    "Total Neto $" + totalNetoPubli;
}

function resetTableTotalPubli() {
  // table j8
  document.getElementById("unidJ8Publi").innerHTML = "";
  document.getElementById("impJ8Publi").innerHTML = "";
  //  table j12
  document.getElementById("unidJ12Publi").innerHTML = "";
  document.getElementById("impJ12Publi").innerHTML = "";
  //extra
  document.getElementById("unidXtraPubli").innerHTML = "";
  document.getElementById("impXtraPubli").innerHTML = "";
  //extra200
  document.getElementById("unidXtra200Publi").innerHTML = "";
  document.getElementById("impXtra200Publi").innerHTML = "";
  //extra300
  document.getElementById("unidXtra300Publi").innerHTML = "";
  document.getElementById("impXtra300Publi").innerHTML = "";
  //sac
  document.getElementById("unidSACPubli").innerHTML = "";
  document.getElementById("impSACPubli").innerHTML = "";
  //vac
  document.getElementById("unidVACPubli").innerHTML = "";
  document.getElementById("impVACPubli").innerHTML = "";
  //desc
  document.getElementById("unidDescPubli").innerHTML = "";
  document.getElementById("impDescPubli").innerHTML = "";
  //totales
  document.getElementById("printTotalBrutoPubli").innerHTML = "";
  document.getElementById("printTotalNetoPubli").innerHTML = "";
  botonResetPubli();
}

function unBlockBtnPubli() {
  document.getElementById("btnCalcPubli").disabled = false;
  document.getElementById("btnResetPubli").disabled = false;

  //document.getElementById("btnResetPubli").disabled = false;
}
