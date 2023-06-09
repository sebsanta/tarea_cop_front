import Tareas from "./Tareas";
import generateStore from "../redux/store";
import {Provider} from "react-redux";


const Reducer = () => {

    const store = generateStore()

    return (
       
        <div>
            <Provider store={store}>
                <Tareas />
            </Provider>
        </div>
    )
}

export default Reducer;