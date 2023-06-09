import FetchApi from "./components/FetchApi";
import  Form  from "./components/Form"
import Formulario from "./components/Formulario";
import Tareas from "./components/Tareas";
import {Provider} from "react-redux";
import generateStore from "./redux/store";
import FormEliminar from "./components/FormEliminar";
import Home from "./components/Home";




const App = () => {

const store = generateStore()

  return(
    <Provider store={store}>
      <div className="container">
          <h1 >Aplicación Tareas Cop</h1>
          <FetchApi />
          <Form />
          {/* <FetchApi />   */}
          {/* <Formulario /> */}
          {/* <Tareas /> */}
          <Home />
          <FormEliminar />
    </div>
  </Provider>
  )
}

export default App;
