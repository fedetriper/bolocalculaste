const tipoJornada = document.getElementById("swTipoJornada");
const fechaInControl = document.getElementById("fechaInPubli");
const fechaOutControl = document.getElementById("fechaOutPubli");
const penaltyCheckbox = document.getElementById("penaltyPubli");
const duracionPenaltyInput = document.getElementById("duracionPenaltyPubli");

let jornadaNumero = 0;
const jornadasArray = [];

document.addEventListener("DOMContentLoaded", () => {
  //pone en default el penalty
  penaltyCheckbox.addEventListener("change", () => {
    duracionPenaltyInput.style.display = penaltyCheckbox.checked
      ? "block"
      : "none";
  });
  //al presionar el boton agregar dia
  btnAgregarDia.addEventListener("click", (e) => {
    e.preventDefault();
    const fechaIn = fechaInControl.value;
    const fechaOut = fechaOutControl.value;
    const penalty = penaltyPubli.checked;
    const duracionPenalty = penalty
      ? parseFloat(duracionPenaltyPubli.value)
      : 0.0;

    // Convert the datetime-local values to Date objects
    const dateIn = new Date(fechaIn);
    const dateOut = new Date(fechaOut);

    if (jornadasArray.length > 0) {
      const lastJornada = jornadasArray[jornadasArray.length - 1];
      const lastJornadaDate = new Date(
        lastJornada.inicio.date + "T" + lastJornada.inicio.time
      );

      if (dateIn < lastJornadaDate) {
        alert(
          "La fecha de inicio no puede ser anterior a la última jornada registrada."
        );
        return;
      }
    }

    if (dateOut < dateIn) {
      alert("La fecha de salida no puede ser anterior a la fecha de inicio.");
      return;
    }

    if (tipoJornada.checked === true) {
      AgregarJor12(fechaIn, fechaOut, penalty, duracionPenalty);
    } else {
      AgregarJor8(fechaIn, fechaOut, penalty, duracionPenalty);
    }

    // Reset the form after adding jornada
    fechaInControl.value = "";
    fechaOutControl.value = "";
    tipoJornada.checked = false;
    penaltyPubli.checked = false;
    duracionPenaltyPubli.value = "00:00";
    duracionPenaltyPubli.style.display = "none";
    updateButtonState();
  });
});
duracionPenaltyInput.style.display = "none";
duracionPenaltyInput.value = "00:00";

const ul = document.getElementById("listaDiasPubli");
const btnAgregarDia = document.getElementById("btnAgregarDiaPubli");

//blockea y desbloquea botton
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

// funcion 12hs

function AgregarJor12(fechaIn, fechaOut, penalty, duracionPenalty) {
  const dateIn = new Date(fechaIn);
  const dateOut = new Date(fechaOut);

  const diffInHours = Math.abs(dateOut - dateIn) / 36e5;
  const regularHours = Math.max(12, diffInHours); // Consider jornadas de 12hs with minimum 12 hours

  const penaltyHours = penalty ? duracionPenalty : 0.0;
  const overtimeHours = Math.max(0, regularHours - 12 - penaltyHours);
  const regularRate = 1.0; // Regular rate is 100%
  const overtimeRate = regularRate + 1.0; // Overtime rate is regular rate + 100%

  const totalPay = regularHours * regularRate + overtimeHours * overtimeRate;

  jornadaNumero++; // Increment the jornada counter

  // const penaltyCheckbox = document.getElementById("penaltyPubli");
  // const penaltyDurationInput = document.getElementById("duracionPenaltyPubli");

  const jornada = {
    numero: jornadaNumero,
    tipo: "12hs",
    inicio: extractDateAndTime(fechaIn),
    fin: extractDateAndTime(fechaOut),
    penalty: penalty,
    duracionPenalty: duracionPenalty,
    regularHours: regularHours,
    overtimeHours: overtimeHours,
    totalPay: totalPay,
  };

  jornadasArray.push(jornada);
  CrearLista(jornada);
  console.log("Nueva jornada agregada: ", jornada);
  console.log("Todas las jornadas:", jornadasArray);
}
//funcion 8hs
function AgregarJor8(fechaIn, fechaOut) {
  // const penaltyCheckbox = document.getElementById("penaltyPubli");
  //const penaltyDurationInput = document.getElementById("duracionPenaltyPubli");
  const dateIn = new Date(fechaIn);
  const dateOut = new Date(fechaOut);
  const diffInHours = Math.abs(dateOut - dateIn) / 36e5;

  if (diffInHours > 8) {
    alert("La duración de la Jornada de 8hs no puede ser superior a 8 horas.");
    return;
  }
  const regularHours = diffInHours;
  const regularRate = 1.0; // Regular rate is 100%

  const totalPay = regularHours * regularRate;
  jornadaNumero++;
  const jornada = {
    numero: jornadaNumero,
    tipo: "8hs",
    inicio: extractDateAndTime(fechaIn),
    fin: extractDateAndTime(fechaOut),
    penalty: penaltyCheckbox.checked,
    penaltyDuration: penaltyCheckbox.checked
      ? penaltyDurationInput.value
      : "00:00",
    regularHours: regularHours,
    totalPay: totalPay,
  };

  jornadasArray.push(jornada);
  CrearLista(jornada);
  console.log("Nueva jornada agregada: ", jornada);
  console.log("Todas las jornadas:", jornadasArray);
}

//separar fecha y hora
function extractDateAndTime(dateTime) {
  const [datePart, timePart] = dateTime.split("T");
  return { date: datePart, time: timePart };
}

//crea la lista
function CrearLista(jornada) {
  const fechaInicio = new Date(jornada.inicio.date + "T" + jornada.inicio.time);
  const fechaFin = new Date(jornada.inicio.date + "T" + jornada.fin.time);

  const fechaInicioFormatted = fechaInicio.toLocaleDateString("es-ES");
  const horaInicioFormatted = fechaInicio.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const horaFinFormatted = fechaFin.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const penaltyDuration = penaltyCheckbox.checked
    ? duracionPenaltyInput.value
    : "00:00";

  const text = `Dia:<strong>${jornada.numero}</strong> - J: <strong>${
    jornada.tipo
  } </strong> <strong>${fechaInicioFormatted}</strong> Entrada <strong>${horaInicioFormatted}</strong> Salida <strong>${horaFinFormatted}</strong>${
    penaltyCheckbox.checked ? `<strong> P:</strong> ${penaltyDuration}` : ""
  }`;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const deleteBtn = document.createElement("button");

    p.innerHTML = text;

    li.appendChild(p);
    li.className = "liJorCard";
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete red darken-3";

    deleteBtn.addEventListener("click", () => {
      DeleteJornada(jornada.numero);
    });
  }
  const botonCierre = document.getElementById("botonCierre");
  botonCierre.style.display = jornadasArray.length > 0 ? "block" : "none";
}
//borrar jornada
function DeleteJornada(jornadaNumeroToDelete) {
  const index = jornadasArray.findIndex(
    (jornada) => jornada.numero === jornadaNumeroToDelete
  );
  if (index !== -1) {
    jornadasArray.splice(index, 1); // Remove the jornada from the array
    UpdateJornadasList();
    console.log("Jornada eliminada:", jornadaNumeroToDelete);
    console.log("Todas las jornadas:", jornadasArray);
  }
}
// actualizar lista al borrar
function UpdateJornadasList() {
  // Clear the existing list
  ul.innerHTML = "";

  if (jornadasArray.length === 0) {
    // Hide the "Calcular Cierre" button if there are no jornadas
    botonCierre.style.display = "none";
  }

  // Re-create the list with the updated jornadasArray
  jornadasArray.forEach((jornada, index) => {
    jornada.numero = index + 1; // Update the jornada number based on the index
    CrearLista(jornada);
  });
}

// Calculate the statistics and create the result object
function CalcularCierre() {
  let jornadas8hs = 0;
  let jornadas12hs = 0;
  let horasExtras100 = 0;
  let horasExtras200 = 0;
  let horasExtras300 = 0;
  let horasPenalty = 0;

  jornadasArray.forEach((jornada) => {
    if (jornada.tipo === "8hs") {
      jornadas8hs++;
    } else if (jornada.tipo === "12hs") {
      jornadas12hs++;
    }

    if (jornada.tipo === "12hs") {
      horasExtras100 += Math.max(0, jornada.regularHours - 12);
      horasExtras200 += Math.max(0, jornada.regularHours - 16);
      horasExtras300 += Math.max(0, jornada.regularHours - 18);
    }

    if (jornada.penalty) {
      horasPenalty += parseFloat(jornada.duracionPenalty);
    }
  });

  const resultadoCierre = {
    jornadas8hs: jornadas8hs,
    jornadas12hs: jornadas12hs,
    horasExtras100: horasExtras100,
    horasExtras200: horasExtras200,
    horasExtras300: horasExtras300,
    horasPenalty: horasPenalty,
  };

  console.log("Resultado del cierre:", resultadoCierre);
  // You can now use the resultadoCierre object as needed (e.g., display it on the UI, etc.)
}

// ... (previous code unchanged)

// Add event listener for "Calcular Cierre" button
botonCierre.addEventListener("click", () => {
  CalcularCierre();
});
