import FetchApi from "./FetchApi";
import  Form  from "./Form"
import FormEliminar from "./FormEliminar";

const FormComponent = () => {
    return (
        
        <div className="container">
            <h2 className="text-center mt-4"  >Aplicación Tareas Cop</h2>
            <FetchApi />
            <Form />
            <FormEliminar />
        </div>

    )
}

export default FormComponent;