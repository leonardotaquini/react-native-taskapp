import { View, Text, Button } from "react-native"
import { Tarea } from "../interfaces/tarea.interface";
import { useContext } from "react";
import { TareasContext } from "../context/tareas.context";



const TareaCard = ( { tarea } : { tarea: Tarea } ) => {
  const { eliminarTarea } = useContext(TareasContext);
  const { titulo, descripcion, id } = tarea;
  
  return (
    <View key={ id }>
      <Text> { titulo } </Text>
      <Text> { descripcion } </Text>
      <Button title="eliminar" onPress={ ()=> eliminarTarea(tarea) } />
    </View>
  )
}

export default TareaCard
