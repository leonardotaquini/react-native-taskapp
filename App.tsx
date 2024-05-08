import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TareaState } from './src/context/TareaState';
import { ListaTareas } from './src/components/ListaTareas';
import { FormularioTarea } from './src/components/FormularioTarea';


export default function App() {
  return (
    <TareaState>
      <View style={styles.container}>
        <ListaTareas />
        <FormularioTarea />
      </View>
    </TareaState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
