import { View, Text } from "react-native"
import { Tarea } from "../interfaces/tarea.interface";



const Tarea = ( { tarea } : { tarea: Tarea } ) => {
  const { titulo, descripcion, id } = tarea;
  return (
    <View key={ id }>
      <Text> { titulo } </Text>
      <Text> { descripcion } </Text>
    </View>
  )
}

export default Tarea
