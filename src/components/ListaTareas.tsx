import { useContext } from "react"
import { TareasContext } from "../context/tareas.context"
import { FlatList } from "react-native";
import TareaCard from "./Tarea";

export const ListaTareas = () => {

    const { tareas } = useContext(TareasContext);

  return (
    <>
        <FlatList
            data={tareas}
            renderItem={({ item: tarea }) => (
                <TareaCard tarea={ tarea } />
            )}
        />
    </>
  )
}
