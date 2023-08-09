<!-- modelo de lista  -->

            <div class="row">
              <ul class="collection">
                <li class="collection-item left-align">
                  <span><strong>Dia 1</strong></span>
                  <span> 25/07</span>
                  <span class="green-text"> 11:00 </span> <span>-</span>
                  <span class="red-text">14:00</span>
                  <a href="#!" class="secondary-content"
                    ><i class="material-icons red-text">delete</i></a
                  >
                  <br />
                  <span>Jornada de 8hs</span>
                </li>
                <li class="collection-item left-align">
                  <span><strong>Dia 2</strong></span>
                  <span> 26/07</span>
                  <span class="green-text"> 06:00 </span> <span>-</span>
                  <span class="red-text">23:00</span>
                  <a href="#!" class="secondary-content"
                    ><i class="material-icons red-text">delete</i></a
                  >
                  <br />
                  <span><strong>Hs Ext</strong> 100% 4 - 200% 0 - 300% 0</span>
                </li>
                <li class="collection-item left-align">
                  <span><strong>Dia 3</strong></span>
                  <span> 27/07</span>
                  <span class="green-text"> 06:00 </span> <span>-</span>
                  <span class="red-text">04:00</span>
                  <span> 28/07</span>
                  <a href="#!" class="secondary-content"
                    ><i class="material-icons red-text">delete</i></a
                  >
                  <br />
                  <span
                    ><strong>Hs Ext</strong> 100% 4 - 200% 2 - 300% 2
                    <span class="red-text">P</span> 1</span
                  >
                </li>
              </ul>
            </div>

tomando esta lista como referencia quiero odificar la siguiente funcion para que cuando cree la lista de jornadas se muestren con este modelo

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
      const confirmDelete = window.confirm("¿Quieres eliminar esta jornada?");
      if (confirmDelete) {
        DeleteJornada(jornada.numero);
      }
    });

}
const botonCierrePubli = document.getElementById("botonCierrePubli");
botonCierrePubli.style.display = jornadasArray.length > 0 ? "block" : "none";
}
