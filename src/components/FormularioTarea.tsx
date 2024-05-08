import { Button, TextInput, View } from "react-native"
import { TareasContext } from "../context/tareas.context";
import { useContext, useState } from "react";
import { Tarea } from "../interfaces/tarea.interface";

export const FormularioTarea = () => {

  const { agregarTarea } = useContext(TareasContext);

  const [tarea, setTarea] = useState<Tarea>({
    id: 0,
    titulo: '',
    completada: false,
    descripcion: ''
    
  });


  const handleSubmit = () => {
    setTarea({
      ...tarea,
      id: new Date().getTime(),
    });
    agregarTarea( tarea );
  }

  return (
    <View>
      <TextInput
        value={ tarea.titulo }
        onChangeText={ ( titulo )=> setTarea( { ...tarea, titulo } ) }
        placeholder="Título"
      />
      <TextInput
        value={ tarea.descripcion }
        onChangeText={ ( descripcion )=> setTarea( { ...tarea, descripcion } ) }
        placeholder="Descripción"
      />
    <Button title="Agregar Tarea" onPress={ handleSubmit }/>
        
    </View>
  )
}
