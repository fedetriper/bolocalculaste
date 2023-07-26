const tipoJornada = document.getElementById("swTipoJornada");
const fechaInControl = document.getElementById("fechaInPubli");
const fechaOutControl = document.getElementById("fechaOutPubli");
let jornadaNumero = 0;
const jornadasArray = [];
let mensaje = "";

const ul = document.getElementById("listaDiasPubli");
const btnAgregarDia = document.getElementById("btnAgregarDiaPubli");

function updateButtonState() {
  const isFormValid =
    fechaInControl.checkValidity() &&
    fechaOutControl.checkValidity() &&
    tipoJornada.checkValidity();
  btnAgregarDia.disabled = !isFormValid;
}

fechaInControl.addEventListener("input", updateButtonState);
fechaOutControl.addEventListener("input", updateButtonState);
tipoJornada.addEventListener("input", updateButtonState);

btnAgregarDia.addEventListener("click", (e) => {
  e.preventDefault();
  const fechaIn = fechaInControl.value;
  const fechaOut = fechaOutControl.value;
  if (tipoJornada.checked === true) {
    AgregarJor12(fechaIn, fechaOut);
  } else {
    AgregarJor8(fechaIn, fechaOut);
  }
  // Reset the form after adding jornada
  fechaInControl.value = "";
  fechaOutControl.value = "";
  tipoJornada.checked = false;
  updateButtonState();
});

function AgregarJor12(fechaIn, fechaOut) {
  jornadaNumero++; // Increment the jornada counter
  const jornada = {
    numero: jornadaNumero,
    tipo: "12hs",
    inicio: extractDateAndTime(fechaIn),
    fin: extractDateAndTime(fechaOut),
  };
  jornadasArray.push(jornada);
  CrearLista(jornada);
  console.log("Nueva jornada agregada: ", jornada);
  console.log("Todas las jornadas:", jornadasArray);
}

function AgregarJor8(fechaIn, fechaOut) {
  // ... (same as before)

  jornadaNumero++; // Increment the jornada counter
  const jornada = {
    numero: jornadaNumero,
    tipo: "8hs",
    inicio: extractDateAndTime(fechaIn),
    fin: extractDateAndTime(fechaOut),
  };
  jornadasArray.push(jornada);
  CrearLista(jornada);
  console.log("Nueva jornada agregada: ", jornada);
  console.log("Todas las jornadas:", jornadasArray);
}

function extractDateAndTime(dateTime) {
  const [datePart, timePart] = dateTime.split("T");
  return { date: datePart, time: timePart };
}

// Rest of the code unchanged
