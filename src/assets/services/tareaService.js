import axios from "axios";

const baseURL='http://localhost:8080/tareas'

export const getTareas = async() => {
   const response =  await fetch('http://localhost:8080/tareas');
   const tareas = await response.json();

    return tareas;
}

