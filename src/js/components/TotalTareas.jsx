import React from 'react'

function TotalTareas({ tareaPendiente }) {

	return (
		<div>
			{tareaPendiente.length === 0
				? "No hay tareas pendientes"
				: tareaPendiente.length + " tareas pendientes"}
		</div>
	)
}

export default TotalTareas