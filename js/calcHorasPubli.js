$(document).ready(function () {
  // initialize datepickers and timepickers
  $(".datepicker").datepicker({
    format: "dd/mm/yyyy",
  });
  $(".timepicker").timepicker({
    default: "now",
    twelveHour: false, // change to 12 hour AM/PM clock from 24 hour
    doneText: "OK",
    autoClose: false,

    vibrate: true, // vibrate the device when dragging clock hand
  });

  // initialize radio buttons
  let radio8 = document.getElementById("swJ8");
  let radio12 = document.getElementById("swJ12");

  // listener for 8hs radio button
  radio8.addEventListener("change", function () {
    if (this.checked) {
      // if checked, set min and max time to 8 hours
      setMinMaxTime(8);
    }
  });

  // listener for 12hs radio button
  radio12.addEventListener("change", function () {
    if (this.checked) {
      // if checked, remove min and max time
      removeMinMaxTime();
    }
  });

  // function to set min and max time for 8 hours
  function setMinMaxTime(horas) {
    let fechaInicio = document.getElementById("fechaInPubli");
    let horaInicio = document.getElementById("horaInicioPubli");
    let fechaFin = document.getElementById("fechaOutPubli");
    let horaFin = document.getElementById("horaFinalPubli");

    // set min to current time
    fechaInicio.setAttribute("min", getDateTime());
    horaInicio.setAttribute("min", getTime());

    // set max to 8 hours from current time
    let date = new Date();
    date.setHours(date.getHours() + horas);
    fechaFin.setAttribute("max", date.toISOString().slice(0, 16));
    horaFin.setAttribute("max", getTimeFromDate(date));
  }

  // function to remove min and max time
  function removeMinMaxTime() {
    let fechaInicio = document.getElementById("fechaInPubli");
    let horaInicio = document.getElementById("horaInicioPubli");
    let fechaFin = document.getElementById("fechaOutPubli");
    let horaFin = document.getElementById("horaFinalPubli");

    fechaInicio.removeAttribute("min");
    horaInicio.removeAttribute("min");
    fechaFin.removeAttribute("max");
    horaFin.removeAttribute("max");
  }

  // function to get current date and time in format yyyy-mm-ddThh:mm
  function getDateTime() {
    let date = new Date();
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2) +
      "T" +
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2)
    );
  }

  // function to get current time in format hh:mm
  function getTime() {
    let date = new Date();
    return (
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2)
    );
  }

  // function to get time from date object
  function getTimeFromDate(date) {
    return (
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2)
    );
  }

  // listener for penalty checkbox
  let checkboxPenalizacion = document.getElementById("penaltyPubli");
  checkboxPenalizacion.addEventListener("change", function () {
    if (this.checked) {
      // if checked, display select with options from 0 to 60 minutes
      showPenalizacion();
    } else {
      // if unchecked, hide select
      hidePenalizacion();
    }
  });
  // listener for select
  let selectPenalizacion = document.getElementById("duracionPenaltyPubli");
  selectPenalizacion.addEventListener("change", function () {
    setDuracionPenalty();
  });
});

function setDuracionPenalty() {
  let duracionPenalty = document.getElementById("duracionPenaltyPubli");
  let duracionPenaltyValue = duracionPenalty.value;
  let duracionPenaltyElement = document.getElementById("duracionPenaltyPubli");
  duracionPenaltyElement.value = duracionPenaltyValue;
}

function showPenalizacion() {
  let selectPenalizacion = document.getElementById("duracionPenaltyPubli");
  selectPenalizacion.style.display = "block";
}

function hidePenalizacion() {
  let selectPenalizacion = document.getElementById("duracionPenaltyPubli");
  selectPenalizacion.style.display = "none";
}

