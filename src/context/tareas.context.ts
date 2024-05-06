import { createContext } from "react";
import { TareasContextType } from "../interfaces/tarea.interface";


export const TareasContext = createContext<TareasContextType>({
    tareas: [],
    agregarTarea: () => {},
    eliminarTarea: () => {},
    actualizarTarea: () => {}
});