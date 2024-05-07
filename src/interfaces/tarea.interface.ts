import { ReactNode } from "react";

export interface TareaState {
    tareas: Tarea[],
}

export interface TareasContextType {   
    tareas: Tarea[];
    agregarTarea: (tarea: Tarea) => void;
    eliminarTarea: ( tarea: Tarea) => void;
    actualizarTarea: (tarea: Tarea) => void;
}

export interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
    titulo:string

}

export type TareaAction = {
    type: string,
    payload: Tarea

}


export interface TareaStateProps {
    children: ReactNode;
  }

export type ActionTypes = {
    AGREGAR_TAREA: string,
    ELIMINAR_TAREA: string,
    ACTUALIZAR_TAREA: string
}

export const actionsTypes: ActionTypes = {
    AGREGAR_TAREA: 'agregar_tarea',
    ELIMINAR_TAREA: 'eliminar_tarea',
    ACTUALIZAR_TAREA: 'actualizar_tarea'
}
