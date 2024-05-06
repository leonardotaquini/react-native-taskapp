import {  Reducer, useReducer } from "react";
import { TareasContext } from "./tareas.context"
import { TareaReducer } from "./tareaReducer";
import { Tarea, TareaStateProps, actionsTypes } from "../interfaces/tarea.interface";


 interface InitialState{
    tareas: Tarea[]
 }

export const TareaState = ({ children }: TareaStateProps ) => {
    
   const initialState: InitialState = {
        tareas: []
   }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const agregarTarea = (tarea: Tarea ) => {
       return dispatch({
            type: actionsTypes.AGREGAR_TAREA,
            payload: tarea
        });
    }
    const eliminarTarea = (id: number) => {
        return dispatch({
            type: actionsTypes.ELIMINAR_TAREA,
            payload: id
        });
    }

    const actualizarTarea = (tarea: Tarea) => {
        return dispatch({
            type: actionsTypes.ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

      
  return (
    <TareasContext.Provider value={{
        tareas: state.tareas,
        agregarTarea,
        eliminarTarea,
        actualizarTarea
        
    }}>
        { children }
    </TareasContext.Provider>
  )
}
