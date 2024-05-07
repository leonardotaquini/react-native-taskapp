import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TareaState } from './src/context/TareaState';


export default function App() {
  return (
    <TareaState>
      <View style={styles.container}>
        
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
