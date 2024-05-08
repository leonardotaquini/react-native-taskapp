import React from 'react';
import { Button } from 'react-native';
import { Card, Text } from 'react-native-paper'; // Import Card component
import { Tarea } from '../interfaces/tarea.interface';
import { useContext } from 'react';
import { TareasContext } from '../context/tareas.context';

const TareaItem = ({ tarea }: { tarea: Tarea }) => {
  const { eliminarTarea } = useContext(TareasContext);
  const { titulo, descripcion, id } = tarea;

  return (
    <Card key={id} elevation={4} style={{aspectRatio: 3, padding:8, margin:5}}>
      <Card.Title title={ titulo  } />
      <Card.Content>
        <Text>{ descripcion }</Text>
      </Card.Content>
      <Card.Actions style={{}}>
        <Button title="Eliminar" onPress={() => eliminarTarea(tarea)} color="red" />
        <Button title="Completar" onPress={() => eliminarTarea(tarea)} color="blue" />
      </Card.Actions>
    </Card>
  );
};

export default TareaItem;
