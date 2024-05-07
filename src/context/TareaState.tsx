import { useReducer } from "react";
import { TareasContext } from "./tareas.context"
import { TareaReducer } from "./tareaReducer";
import { Tarea, TareaState as TareaStateType, TareaStateProps, actionsTypes } from "../interfaces/tarea.interface";



export const TareaState = ({ children }: TareaStateProps ) => {
    
   const initialState: TareaStateType = {
        tareas: []
   }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const agregarTarea = (tarea: Tarea ) => {
       return dispatch({
            type: actionsTypes.AGREGAR_TAREA,
            payload: tarea
        });
    }
    const eliminarTarea = ( tarea: Tarea) => {
        return dispatch({
            type: actionsTypes.ELIMINAR_TAREA,
            payload: tarea
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
