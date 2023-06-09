import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const Formulario = () => {

    const baseURL = 'http://localhost:8080/tareas'
    const [post, setPost] = useState(null);
    const [eliminar, setEliminar] = useState(null);
    const [modificar, setModificar] = useState(null);
    const [tareas, setTareas] = useState({
        id:"",
        descripcion:"",
        createAt:"",
        vigente:true
    })
    
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(tareas.id,tareas.descripcion, tareas.createAt, tareas.vigente)
        if(tareas.descripcion.trim() === "" || tareas.createAt.trim() === ""){
            Swal.fire({
                icon: "error",
                title:"Oops...",
                text:"Debes llenar el formulario",
                footer:'<a href="">Algo anda mal, revisa el formulario</a>'
            })
            return 
        }
    }

    const handleChange = (e) => {
        setTareas({
            ...tareas,
            [e.target.name]: e.target.value
        })
    }

    function createPost() {
        axios.post(baseURL,{
            descripcion:tareas.descripcion,
            createAt: tareas.createAt,
            vigente: tareas.vigente
        }).then((response) => {
            console.log(response)
            setPost(response.data);
            console.log(response.data);
        });
    }

    function deletePost(){
        axios.delete(`${baseURL}/${tareas.id}`)
             .then(() => {
                alert("Registro eliminado!");
                setEliminar(null);
             })
    }

    function modificarPost(){
         axios.put(`${baseURL}/${tareas.id}`,{
            descripcion:tareas.descripcion,
            createAt: tareas.createAt,
            vigente: tareas.vigente
         })
            .then((response) => {
                setModificar(response.data)
              });
    }


    return(
        <form onSubmit={handleSumbit} >
            <label className="form-label">Ingresa una descripción de la actividad</label>
            <input 
                type="text"
                placeholder="Ingrese datos"
                className="form-control mb-2"
                name="descripcion"
                value={tareas.descripcion}
                onChange={handleChange}
            />
            <label className="form-label">Ingresa la fecha de la actividad</label>
            <input 
                className="form-control mb-2" 
                type="date"
                placeholder="Ingrese fecha de actividad 2022-03-15"
                name="createAt"
                value={tareas.createAt}
                onChange={handleChange}
            ></input>
            <label className="form-label">Selecciona una opción para la actividad</label>
            <select className="form-select mb-2" 
                    name="vigente" 
                    value={tareas.vigente}
                    onChange={handleChange}
            >
                <option value="true">Vigente</option>
                <option value="false">No vigente</option>
            </select>
            <button type='submit' className="btn btn-primary mb-2 " onClick={createPost}>Procesar</button>
            <input
                className="form-control "
                type="number"
                placeholder="Ingresar id para modificar o eliminar"
                name="id"
                value={tareas.id}
                onChange={handleChange}
            ></input>
            <button type="submit" className="btn btn-danger mt-2 " onClick={()=> deletePost(tareas.id)}>Eliminar</button>
            <button type="submit" className="btn btn-warning ml-2 mt-2" onClick={modificarPost}>Modificar</button>
        </form>
    )
}

export default Formulario;