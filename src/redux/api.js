import axios from "axios"

//constantes
const dataInicial = {
    array : []
}

const GET_TAREAS = "GET_TAREAS"
const DEL_TAREA = "DEL_TAREA"
const MOD_TAREA = "MOD_TAREA"
const CREAR_TAREA = "CREAR_TAREA"

//reducer
export default function tareaReducer(state = dataInicial, action){
    switch(action.type){
        case GET_TAREAS:
            return {...state, array: action.payload}
        case DEL_TAREA:
            return {...state, array: newData}
        case MOD_TAREA:
            return {...state, array: newData}
        case CREAR_TAREA:
            return {...state, array: newData}
        default:
            return state
    }
}

//action
export const obtenerTareas = () => async (dispatch, getState) => {
try {
    const res = await axios.get('http://localhost:8080/tareas')
    dispatch({
        type:"GET_TAREAS",
        payload: res.data
    });
}catch (error){
    console.log(error)
}}

export const eliminarTarea = (id) => async(dispatch, getState) => {
    try{
        const del = await axios.delete("http://localhost:8080/tareas/"+id)
        dispatch({
            type:"DEL_TAREA",
            payload: del.id 
        });
    }catch (error){
      console.log(error);
    }
}

export const modificarTarea = (id,descripcion, createAt, vigente) => async(dispatch, getState) => {
    try {
        const mod = await axios.put("http://localhost:8080/tareas/"+id,{
            descripcion,
            createAt,
            vigente
         })
        dispatch({
            type:"MOD_TAREA",
            payload: mod.data
        });
    } catch (error) {
        console.log(error)
    }
}

export const crearTarea = (descripcion, createAt, vigente) => async(dispatch, getState) => {
    try {
        const crear = await axios.post("http://localhost:8080/tareas",{
            descripcion,
            createAt,
            vigente
         })
        dispatch({
            type:"CREAR_TAREA",
            payload: crear.data
        });
    } catch (error) {
        console.log(error)
    }
}