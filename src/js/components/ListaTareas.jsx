import React from 'react'
import ItemTarea from './ItemTarea'
import "./ListaTareas.css"

function ListaTareas({ tareaPendiente, eliminarTarea }) {

  return (
    <div>
      <ul>
        {tareaPendiente.map((tarea) => (
          <ItemTarea
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas