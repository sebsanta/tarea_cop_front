import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarTarea, modificarTarea, obtenerTareas, crearTarea} from "../redux/api"
import FetchApi from "./FetchApi";
import Swal from "sweetalert2";

const Tareas = () => {

    const [tar, setTar] = useState({
        id:"",
        iddel:"",
        descripcion:"",
        createAt:"",
        vigente:true
    })

    const handleSumbit = (e) => {
       // e.preventDefault();
       if(tar.descripcion.trim() === "" || tar.createAt.trim() === ""){
        Swal.fire({
            icon: "error",
            title:"Oops...",
            text:"Debes llenar el formulario",
            footer:'<a href="">Algo anda mal, revisa el formulario</a>'
        })
        return e.preventDefault();
    }}

    const handleSubmits = (e) => {
       // e.preventDefault();
       if(tar.iddel.trim() === ""){
        Swal.fire({
            icon: "error",
            title:"Oops...",
            text:"Debes llenar el formulario",
            footer:'<a href="">Algo anda mal, revisa el formulario</a>'
        })
        return e.preventDefault();
    }}

    const handleChange = (e) => {
        setTar({
            ...tar,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()
    const tareas = useSelector(store => store.tareas.array)
    //console.log(tareas)
    //console.log(tar.id)
   // console.log(tar.descripcion, tar.createAt, tar.vigente)

    return(
    <div className="container">

        <div>
        <h2 className="text-center">lista tareas con redux</h2>
            <form onSubmit={handleSumbit} />
            <button type="submit" className="btn btn-primary mb-2 mt-2" onClick={()=> dispatch(obtenerTareas())}>GetTareas</button>
                <table className="table table-info" >
                    <thead>
                        <tr>
                            <th className="table-primary">#id</th>
                            <th className="table-primary">Descripción</th>
                            <th className="table-primary">Fecha creación</th>
                            <th className="table-primary">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        tareas.map(tarea => 
                            <tr key={tarea.id}>
                                <td className="table-success">{tarea.id}</td>
                                <td className="table-success">{tarea.descripcion}</td>
                                <td className="table-success">{tarea.createAt}</td>
                                <td className="table-success">{tarea.vigente == true ? "Vigente":"No Vigente"}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div>



            <div>
            <h3 className="text-center">Ingresar y modificar registro</h3>
            <form onSubmit={handleSumbit} >
            <label className="form-label">Ingresa una descripción de la actividad</label>
            <input 
                type="text"
                placeholder="Ingrese datos"
                className="form-control mb-2"
                name="descripcion"
                value={tar.descripcion}
                onChange={handleChange}
            />
            <label className="form-label">Ingresa la fecha de la actividad</label>
            <input 
                className="form-control mb-2" 
                type="date"
                placeholder="Ingrese fecha de actividad 2022-03-15"
                name="createAt"
                value={tar.createAt}
                onChange={handleChange}
            ></input>
            <label className="form-label">Selecciona una opción para la actividad</label>
            <select className="form-select mb-2" 
                    name="vigente" 
                    value={tar.vigente}
                    onChange={handleChange}
            >
                <option value="true">Vigente</option>
                <option value="false">No vigente</option>
            </select>
            <button type='submit' className="btn btn-primary ml-2 mb-2" onClick={()=>dispatch(crearTarea(tar.descripcion, tar.createAt, tar.vigente))}>Procesar</button>
            <input
                className="form-control "
                type="number"
                placeholder="Ingresar id para modificar"
                name="id"
                value={tar.id}
                onChange={handleChange}
            ></input>
            <button type="submit" className="btn btn-warning ml-2 mt-2" onClick={()=>dispatch(modificarTarea(tar.id, tar.descripcion, tar.createAt, tar.vigente))}>Modificar</button>
        </form>
        </div>
            <form onSubmit={handleSubmits}>
                <h3 className="mt-3">Eliminar registro</h3>
                <input 
                        type="number"  
                        className="form-control mb-2 mt-2 "
                        placeholder="Ingresar id para eliminar"
                        name="iddel"
                        value={tar.iddel}
                        onChange={handleChange}>
                </input>
                <button 
                    type="submit" 
                    className="btn btn-danger mb-2 mt-2" 
                    onClick={()=> dispatch(eliminarTarea(tar.iddel))}>Eliminar</button>
            </form>
        </div>
        </div>
    
        )
}

export default Tareas;