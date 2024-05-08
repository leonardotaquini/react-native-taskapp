import { useContext } from "react"
import { TareasContext } from "../context/tareas.context"
import { FlatList } from "react-native";
import TareaCard from "./Tarea";
import TareaItem from "./TareaItem";

export const ListaTareas = () => {

    const { tareas } = useContext(TareasContext);

  return (
    <>
        <FlatList
            data={tareas}
            renderItem={({ item: tarea }) => (
                // <TareaCard tarea={ tarea } />
                <TareaItem tarea={ tarea } />
            )}
        />
    </>
  )
}
