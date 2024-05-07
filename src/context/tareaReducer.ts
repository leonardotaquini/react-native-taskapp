import { TareaAction, TareaState, actionsTypes } from "../interfaces/tarea.interface";




export const TareaReducer = (state: TareaState, action: TareaAction) => {
    switch (action.type) {
        case actionsTypes.AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }
        case actionsTypes.ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload.id)
            }
        case actionsTypes.ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }
        default:
            return state;
    }
}