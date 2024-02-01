document.addEventListener("DOMContentLoaded", () => {
  const swJ8 = document.getElementById("swJ8");
  const swJ12 = document.getElementById("swJ12");
  const fechaInControl = document.getElementById("fechaInPubli");
  const fechaOutControl = document.getElementById("fechaOutPubli");
  const penaltyCheckbox = document.getElementById("penaltyPubli");
  const duracionPenaltyInput = document.getElementById("duracionPenaltyPubli");
  const btnGuardarDia = document.getElementById("btnGuardarDiaPubli");
  const ul = document.getElementById("listaDiasPubli");
  const botonCierrePubli = document.getElementById("botonCierrePubli");
  const modCierrePubli = document.getElementById("modCierrePubli");
  const btnVolver = document.getElementById("btnVolver");
  const btnSumarDia = document.getElementById("btnSumarDia");
  const moduloHorasPubli = document.getElementById("seccionHorasPubli");
  const moduloJorGuardadas = document.getElementById("moduloJorGuardadas");

  swJ8.addEventListener("change", handleTipoJornadaChange);
  swJ12.addEventListener("change", handleTipoJornadaChange);

  fechaInControl.addEventListener("input", updateButtonState);
  fechaOutControl.addEventListener("input", updateButtonState);
  swJ8.addEventListener("input", updateButtonState);
  swJ12.addEventListener("input", updateButtonState);

  btnGuardarDia.addEventListener("click", handleGuardarDiaClick);
  botonCierrePubli.addEventListener("click", calcularCierre);

  btnVolver.addEventListener("click", handleVolverClick);
  btnSumarDia.addEventListener("click", handleSumarDiaClick);

  function handleTipoJornadaChange() {
    const spanJ12 = document.getElementById("swJ12");
    const spanJ8 = document.getElementById("swJ8");

    if (swJ12.checked) {
      spanJ12.classList.add("negrita");
      spanJ8.classList.remove("negrita");
    } else {
      spanJ12.classList.remove("negrita");
      spanJ8.classList.add("negrita");
    }
  }

  function updateButtonState() {
    const isFormValid =
      fechaInControl.checkValidity() &&
      fechaOutControl.checkValidity() &&
      (swJ8.checked || swJ12.checked);
    btnGuardarDia.disabled = !isFormValid;
  }

  function handleGuardarDiaClick(e) {
    e.preventDefault();
    const fechaIn = fechaInControl.value;
    const fechaOut = fechaOutControl.value;
    const penalty = penaltyCheckbox.checked;
    const duracionPenalty = penalty ? parseFloat(duracionPenaltyInput.value) : 0.0;

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
  }

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

  function handleVolverClick() {
    modCierrePubli.style.display = "none";
    moduloJorGuardadas.style.display = "none";
    moduloHorasPubli.style.display = "block";
  
    // Reiniciar el formulario
    const fechaInControl = document.getElementById("fechaInPubli");
    const fechaOutControl = document.getElementById("fechaOutPubli");
    const penaltyCheckbox = document.getElementById("penaltyPubli");
    const duracionPenaltyInput = document.getElementById("duracionPenaltyPubli");
  
    fechaInControl.value = "";
    fechaOutControl.value = "";
    penaltyCheckbox.checked = false;
    duracionPenaltyInput.value = "00:00";
    duracionPenaltyInput.style.display = "none";
  
    // Limpiar la lista de jornadas
    const ul = document.getElementById("listaDiasPubli");
    ul.innerHTML = "";
  
    // Resto del código para cualquier otra operación necesaria al volver...
  }
  

  function handleSumarDiaClick() {
    moduloHorasPubli.style.display = "block";
    moduloJorGuardadas.style.display = "none";
    btnSumarDia.style.display = "none";
    botonCierrePubli.style.display = "none";
  }
});
