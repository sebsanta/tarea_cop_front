import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormEliminar = () => {
    const baseURL = 'http://localhost:8080/tareas'
    const [tareasListar, setTareasListar] = useState([]);
    const [eliminar, setEliminar] = useState(null);
    const [tareas, setTareas] = useState({
        id:"",
    })

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setTareasListar(response.data);
        });
      }, []);


      const handleSumbit = (e) => {
        
        if(tareas.id.trim() === ""){
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

    function deletePost(){
      axios.delete(`${baseURL}/${tareas.id}`)
           .then(() => {
              alert("Registro eliminado!");
              setEliminar(null);
           })
  }

    return(
      <div>
        <br></br>
        <h3>Eliminar registro</h3>
        <form onSubmit={handleSumbit} >
        <input
                className="form-control mb-2"
                type="number"
                placeholder="Ingresar id para eliminar"
                name="id"
                value={tareas.id}
                onChange={handleChange}
            ></input>
          <button 
              type="submit" 
              className="btn btn-danger mt-2 " 
              onClick={()=> deletePost(tareas.id)}>Eliminar</button>
        </form>
      </div>
    )
}


export default FormEliminar;