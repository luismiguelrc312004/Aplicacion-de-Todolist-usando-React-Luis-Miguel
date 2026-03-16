import React, { useState } from 'react'
import "./ItemTarea.css"

function ItemTarea({ tarea, eliminarTarea }) {

	const [mostrar, setMostrar] = useState(false);

	return (
		<li>
			<div
				onMouseEnter={() => setMostrar(true)}
				onMouseLeave={() => setMostrar(false)}
			>

				{tarea.label}

				{mostrar && (
					<span
						className="fs-4 float-end cursor-pointer"
						onClick={() => eliminarTarea(tarea.id)}
					>
						❌
					</span>
				)}

			</div>
		</li>
	)
}

export default ItemTarea