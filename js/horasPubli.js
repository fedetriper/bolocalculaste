const tipoJornada = document.getElementById("swTipoJornada");
const fechaInControl = document.getElementById("fechaInPubli");
const fechaOutControl = document.getElementById("fechaOutPubli");
const penaltyCheckbox = document.getElementById("penaltyPubli");
const duracionPenaltyInput = document.getElementById("duracionPenaltyPubli");
const swJ8 = document.getElementById("swJ8");
const swJ12 = document.getElementById("swJ12");
let jornadaNumero = 0;
const jornadasArray = [];

document.addEventListener("DOMContentLoaded", () => {
  //pone en default el penalty
  duracionPenaltyInput.style.display = "none";
  duracionPenaltyInput.value = "00:00";
  penaltyCheckbox.addEventListener("change", () => {
    duracionPenaltyInput.style.display = penaltyCheckbox.checked
      ? "block"
      : "none";
  });
});
  //al presionar el boton GuardarDia
  btnGuardarDia.addEventListener("click", (e) => {
    e.preventDefault();
    const fechaIn = fechaInControl.value;
    const fechaOut = fechaOutControl.value;
    const penalty = penaltyPubli.checked;
    const duracionPenalty = penalty
      ? parseFloat(duracionPenaltyInput.value)
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

    if (swJ12.checked === true) {
      AgregarJor12(fechaIn, fechaOut, penalty, duracionPenalty);
    } else {
      AgregarJor8(fechaIn, fechaOut, penalty, duracionPenalty);
    }

    

    // Reset the form after adding jornada
    fechaInControl.value = "";
    fechaOutControl.value = "";
    swJ8.checked = false;
    swJ12.checked = false;
    penaltyPubli.checked = false;
    duracionPenaltyInput.value = "00:00";
    duracionPenaltyInput.style.display = "none";
    updateButtonState();
    //muestra y oculta las secciones
    // moduloHorasPubli.classList.add("hidden");
    // moduloJorGuardadas.classList.remove("hidden");
    moduloJorGuardadas.style.display = "block";
    moduloHorasPubli.style.display = "none";
    btnSumarDia.style.display = "block";
  });

// duracionPenaltyInput.style.display = "none";
// duracionPenaltyInput.value = "00:00";

const ul = document.getElementById("listaDiasPubli");
const btnGuardarDia = document.getElementById("btnGuardarDiaPubli");

//blockea y desbloquea botton
function updateButtonState() {
  const isFormValid =
    fechaInControl.checkValidity() &&
    fechaOutControl.checkValidity() &&
    tipoJornada.checkValidity();
  btnGuardarDia.disabled = !isFormValid;
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

  let overtimeHours100 = 0; // Hours at 100% overtime rate
  let overtimeHours200 = 0; // Hours at 200% overtime rate
  let overtimeHours300 = 0; // Hours at 300% overtime rate

  if (regularHours > 12) {
    overtimeHours100 = Math.min(4, regularHours - 12);
    if (regularHours > 16) {
      overtimeHours200 = Math.min(2, regularHours - 16);
      if (regularHours > 18) {
        overtimeHours300 = Math.max(0, regularHours - 18);
      }
    }
  }

  const regularRate = 1.0; // Regular rate is 100%
  const overtimeRate100 = regularRate + 1.0; // Overtime rate is regular rate + 100%
  const overtimeRate200 = regularRate + 2.0; // Overtime rate is regular rate + 200%
  const overtimeRate300 = regularRate + 3.0; // Overtime rate is regular rate + 300%

  // Calculate penalty pay (if any)
  const penaltyPay = penalty ? duracionPenalty : 0.0;

  const totalPay =
    regularHours * regularRate +
    overtimeHours100 * overtimeRate100 +
    overtimeHours200 * overtimeRate200 +
    overtimeHours300 * overtimeRate300 +
    penaltyPay;

  jornadaNumero++; // incrementa el numero de jornada

  const jornada = {
    numero: jornadaNumero,
    tipo: "12hs",
    inicio: extractDateAndTime(fechaIn),
    fin: extractDateAndTime(fechaOut),
    penalty: penalty,
    duracionPenalty: duracionPenalty,
    regularHours: regularHours,
    overtimeHours100: overtimeHours100,
    overtimeHours200: overtimeHours200,
    overtimeHours300: overtimeHours300,
    penaltyPay: penaltyPay,
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

  const li = document.createElement("li");
  li.className = "collection-item left-align";

  const spanDia = document.createElement("span");
  spanDia.innerHTML = `<strong>Dia ${jornada.numero}</strong>`;
  li.appendChild(spanDia);

  const spanFecha = document.createElement("span");
  spanFecha.innerHTML = ` ${fechaInicioFormatted}`;
  li.appendChild(spanFecha);

  const spanHoraInicio = document.createElement("span");
  spanHoraInicio.className = "green-text";
  spanHoraInicio.innerHTML = ` ${horaInicioFormatted} `;
  li.appendChild(spanHoraInicio);

  const spanGuion = document.createElement("span");
  spanGuion.innerHTML = `<span> - </span>`;
  li.appendChild(spanGuion);

  const spanHoraFin = document.createElement("span");
  spanHoraFin.className = "red-text";
  spanHoraFin.innerHTML = `${horaFinFormatted}`;
  li.appendChild(spanHoraFin);

  const deleteBtn = document.createElement("a");
  deleteBtn.href = "#!";
  deleteBtn.className = "secondary-content";
  deleteBtn.innerHTML = `<i class="material-icons red-text">delete</i>`;
  li.appendChild(deleteBtn);

  if (jornada.tipo === "8hs") {
    const spanTipoJornada = document.createElement("span");
    spanTipoJornada.innerHTML = ` Jornada de 8hs`;
    li.appendChild(spanTipoJornada);
  } else if (jornada.tipo === "12hs") {
    const spanHorasExtras = document.createElement("span");
    spanHorasExtras.innerHTML = `<br /><strong>Hs Ext</strong> 100% ${jornada.overtimeHours100.toFixed(
      2
    )} - 200% ${jornada.overtimeHours200.toFixed(
      2
    )} - 300% ${jornada.overtimeHours300.toFixed(2)}`;
    li.appendChild(spanHorasExtras);

    if (jornada.penalty) {
      const spanPenalty = document.createElement("span");
      spanPenalty.className = "red-text";
      spanPenalty.innerHTML = ` <span class="red-text">P</span> ${jornada.duracionPenalty}`;
      li.appendChild(spanPenalty);
    }
  }

  ul.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    const confirmDelete = window.confirm("¿Quieres eliminar esta jornada?");
    if (confirmDelete) {
      DeleteJornada(jornada.numero);
    }
  });

  const botonCierrePubli = document.getElementById("botonCierrePubli");
  botonCierrePubli.style.display = jornadasArray.length > 0 ? "block" : "none";
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
    botonCierrePubli.style.display = "none";
  }

  // Re-create the list with the updated jornadasArray
  jornadasArray.forEach((jornada, index) => {
    jornada.numero = index + 1; // Update the jornada number based on the index
    CrearLista(jornada);
  });
  jornadaNumero--;
}

// Calculate the statistics and create the result object
function calcularCierre() {
  let jornadas8hs = 0;
  let jornadas12hs = 0;
  let totalHorasExtras100 = 0;
  let totalHorasExtras200 = 0;
  let totalHorasExtras300 = 0;
  let totalHorasPenalty = 0;

  jornadasArray.forEach((jornada) => {
    if (jornada.tipo === "8hs") {
      jornadas8hs++;
    } else if (jornada.tipo === "12hs") {
      jornadas12hs++;
      const regularHours = jornada.regularHours;
      const penaltyHours = jornada.penalty
        ? parseFloat(jornada.duracionPenalty)
        : 0.0;
      const overtimeHours = regularHours - 12 - penaltyHours;

      if (overtimeHours > 0) {
        if (overtimeHours <= 4) {
          totalHorasExtras100 += overtimeHours;
        } else if (overtimeHours <= 6) {
          totalHorasExtras100 += 4;
          totalHorasExtras200 += overtimeHours - 4;
        } else {
          totalHorasExtras100 += 4;
          totalHorasExtras200 += 2;
          totalHorasExtras300 += overtimeHours - 6;
        }
      }
    }

    if (jornada.penalty) {
      totalHorasPenalty += parseFloat(jornada.duracionPenalty);
    }
  });

  const resultadoCierre = {
    jornadas8hs: jornadas8hs,
    jornadas12hs: jornadas12hs,
    totalHorasExtras100: totalHorasExtras100,
    totalHorasExtras200: totalHorasExtras200,
    totalHorasExtras300: totalHorasExtras300,
    totalHorasPenalty: totalHorasPenalty,
  };
  MostrarCierrePubli(resultadoCierre);
  btnVolver();
  console.log("Resultado del cierre:", resultadoCierre);
}

// Add event listener for "Calcular Cierre" button
botonCierrePubli.addEventListener("click", () => {
  calcularCierre();
});

//mostar cierre
function MostrarCierrePubli(resultadoCierre) {
  //muestra resultado
  const modCierrePubli = document.getElementById("modCierrePubli");
  modCierrePubli.style.display = "block";
  //oculta input

  moduloHorasPubli.style.display = "none";
  //oculta jornadas

  moduloJorGuardadas.style.display = "none";
  //oculta botones
  btnSumarDia.style.display = "none";
  const botonCierrePubli = document.getElementById("botonCierrePubli");
  botonCierrePubli.style.display = "none";

  const ul = document.getElementById("resultadocierrePubli");
  ul.innerHTML = ""; // Clear any existing list items

  const li1 = document.createElement("li");
  li1.textContent = `Jornadas de 8hs: ${resultadoCierre.jornadas8hs}`;
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.textContent = `Jornadas de 12hs: ${resultadoCierre.jornadas12hs}`;
  ul.appendChild(li2);

  const li3 = document.createElement("li");
  li3.textContent = `Horas Extras al 100%: ${resultadoCierre.totalHorasExtras100.toFixed(
    2
  )}`;
  ul.appendChild(li3);

  const li4 = document.createElement("li");
  li4.textContent = `Horas Extras al 200%: ${resultadoCierre.totalHorasExtras200.toFixed(
    2
  )}`;
  ul.appendChild(li4);

  const li5 = document.createElement("li");
  li5.textContent = `Horas Extras al 300%: ${resultadoCierre.totalHorasExtras300.toFixed(
    2
  )}`;
  ul.appendChild(li5);

  const li6 = document.createElement("li");
  li6.textContent = `Horas Penalty: ${resultadoCierre.totalHorasPenalty.toFixed(
    2
  )}`;
  ul.appendChild(li6);
}
function btnVolver() {
  const btnVolver = document.getElementById("btnVolver");
  btnVolver.addEventListener("click", () => {
    // Hide the modCierrePubli div
    const modCierrePubli = document.getElementById("modCierrePubli");
    modCierrePubli.style.display = "none";
    moduloJorGuardadas.style.display = "none";
    moduloHorasPubli.style.display = "block";

    // Show the inputUsuarioHorasPubli div
    const inputUsuarioHorasPubli = document.getElementById(
      "inputUsuarioHorasPubli"
    );

    // Reset the form values
    const fechaInControl = document.getElementById("fechaInPubli");
    const fechaOutControl = document.getElementById("fechaOutPubli");
    const penaltyCheckbox = document.getElementById("penaltyPubli");
    const duracionPenaltyInput = document.getElementById(
      "duracionPenaltyPubli"
    );

    fechaInControl.value = "";
    fechaOutControl.value = "";
    penaltyCheckbox.checked = false;
    duracionPenaltyInput.value = "00:00";
    duracionPenaltyInput.style.display = "none";

    // Clear the jornadasArray and update the jornadas list
    jornadasArray.length = 0;
    UpdateJornadasList();
  });
}

const btnSumarDia = document.getElementById("btnSumarDia");
const moduloHorasPubli = document.getElementById("seccionHorasPubli");
const moduloJorGuardadas = document.getElementById("moduloJorGuardadas");

btnSumarDia.addEventListener("click", () => {
  moduloHorasPubli.style.display = "block";
  moduloJorGuardadas.style.display = "none";
  btnSumarDia.style.display = "none";
  const botonCierrePubli = document.getElementById("botonCierrePubli");
  botonCierrePubli.style.display = "none";
});

tipoJornada.addEventListener("change", () => {
  const spanJ12 = document.getElementById("swJ12");
  const spanJ8 = document.getElementById("swJ8");
  if (tipoJornada.checked) {
    console.log("checked");
    spanJ12.classList.add("negrita");
    spanJ8.classList.remove("negrita");
  } else {
    spanJ12.classList.remove("negrita");
    spanJ8.classList.add("negrita");
  }
});
