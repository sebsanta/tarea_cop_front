import { useEffect, useState } from "react";
import axios from "axios";
//import { getTareas } from "../assets/services/tareaService";

const FetchApi = () => {

    const baseURL = 'http://localhost:8080/tareas'
    const [tareas, setTareas] = useState([]);


          //metodo post
        useEffect(() => {
        axios.get(baseURL).then((response) => {
          setTareas(response.data);
        });
      }, []);
    
  
    return(
        <div className="container">
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
    )
}

export default FetchApi;