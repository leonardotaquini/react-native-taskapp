import { View, Text } from "react-native"

type TareaModelo = {
    titulo: string,
    descripcion: string
}

const Tarea = ( { titulo, descripcion } : TareaModelo ) => {
  return (
    <View>
      <Text> { titulo } </Text>
      <Text> { descripcion } </Text>
    </View>
  )
}

export default Tarea
