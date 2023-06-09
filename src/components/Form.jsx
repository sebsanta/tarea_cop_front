import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import FetchApi from "./FetchApi";

const Form = () => {

    const baseURL = 'http://localhost:8080/tareas'
    const [tareasListar, setTareasListar] = useState([]);
    const [post, setPost] = useState(null);
    const [modificar, setModificar] = useState(null);
    const [tareas, setTareas] = useState({
        id:"",
        descripcion:"",
        createAt:"",
        vigente:true
    })

        useEffect(() => {
        axios.get(baseURL).then((response) => {
            setTareasListar(response.data);
        });
      }, [FetchApi]);

      const handleSumbit = (e) => {
        //e.preventDefault();
       // console.log(tareas.id,tareas.descripcion, tareas.createAt, tareas.vigente)
        if(tareas.descripcion.trim() === "" || tareas.createAt.trim() === ""){
            Swal.fire({
                icon: "error",
                title:"Oops...",
                text:"Debes llenar el formulario",
                footer:'<a href="">Algo anda mal, revisa el formulario</a>'
            })
            return e.preventDefault();
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
            setPost(response.data);
            alert("Se ha creado un registro")
        });
    }

    function modificarPost(){
         axios.put(`${baseURL}/${tareas.id}`,{
            descripcion:tareas.descripcion,
            createAt: tareas.createAt,
            vigente: tareas.vigente
         })
            .then((response) => {
                setModificar(response.data)
                alert("Se ha modificado el registro")
              });
    }

    return(
        <div>
             <div className="container">
        </div >
        <h3 className="text-center">Ingresar y modificar registro</h3>
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
                placeholder="Ingresar id para modificar"
                name="id"
                value={tareas.id}
                onChange={handleChange}
            ></input>
            <button type="submit" className="btn btn-warning ml-2 mt-2" onClick={modificarPost}>Modificar</button>
        </form>
        
        </div>
    )
}

export default Form;