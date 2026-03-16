import React, { useState, useEffect } from "react";
import AgregarTareas from "./AgregarTareas";
import ListaTareas from "./ListaTareas";
import TotalTareas from "./TotalTareas";
import "./Home.css";

const usuario = "alesanchezr";
const URL = "https://playground.4geeks.com/todo";

const Home = () => {

	const [tareaPendiente, setTareaPendiente] = useState([]);

	// CREAR USUARIO
	const crearUsuario = () => {
		fetch(`${URL}/users/${usuario}`, {
			method: "POST"
		})
		.then(resp => resp.json())
		.then(data => console.log("Usuario creado:", data))
		.catch(error => console.log(error));
	};

	// OBTENER TAREAS
	const obtenerTareas = () => {
		fetch(`${URL}/users/${usuario}`)
		.then(resp => resp.json())
		.then(data => {
			setTareaPendiente(data.todos);
		})
		.catch(error => console.log(error));
	};

	// AGREGAR TAREA
	const agregarTarea = (texto) => {

		const nuevaTarea = {
			label: texto,
			is_done: false
		};

		fetch(`${URL}/todos/${usuario}`, {
			method: "POST",
			body: JSON.stringify(nuevaTarea),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => resp.json())
		.then(() => obtenerTareas())
		.catch(error => console.log(error));
	};

	// ELIMINAR TAREA
	const eliminarTarea = (id) => {

		fetch(`${URL}/todos/${id}`, {
			method: "DELETE"
		})
		.then(() => obtenerTareas())
		.catch(error => console.log(error));
	};

	// LIMPIAR TODAS
	const limpiarTareas = () => {

		fetch(`${URL}/users/${usuario}`, {
			method: "DELETE"
		})
		.then(() => {
			setTareaPendiente([]);
			crearUsuario();
		})
		.catch(error => console.log(error));
	};

	// CARGAR AL INICIAR
	useEffect(() => {
		crearUsuario();
		obtenerTareas();
	}, []);

	return (
		<>
			<div className="container">

				<div className='title'>
					<h1>Lista de Tareas</h1>
				</div>

				<AgregarTareas agregarTarea={agregarTarea}/>

				<ListaTareas 
					tareaPendiente={tareaPendiente}
					eliminarTarea={eliminarTarea}
				/>

				<TotalTareas tareaPendiente={tareaPendiente}/>

				<button 
					className="btn btn-info mt-3 mb-3"
					onClick={limpiarTareas}
				>
					Limpiar todas las tareas
				</button>

			</div>
		</>
	);
};

export default Home;