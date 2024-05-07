import { useContext } from "react"
import { TareasContext } from "../context/tareas.context"
import { FlatList } from "react-native";
import Tarea from "./Tarea";

export const ListaTareas = () => {

    const { tareas, eliminarTarea } = useContext(TareasContext);

  return (
    <>
        <FlatList
            data={tareas}
            renderItem={({ item: tarea }) => (
                <Tarea tarea={ tarea } />
            )}
        />
    </>
  )
}
