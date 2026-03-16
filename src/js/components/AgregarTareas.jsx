import React, { useState } from 'react'
import "./AgregarTareas.css"

function AgregarTareas({ agregarTarea }) {

  const [texto, setTexto] = useState("");

  return (
    <div>
      <input
        type="text"
        value={texto}
        placeholder="Agrega una nueva tarea"
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && texto !== "") {
            agregarTarea(texto);
            setTexto("");
          }
        }}
      />
    </div>
  )
}

export default AgregarTareas;