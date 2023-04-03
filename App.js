import { StyleSheet, View } from 'react-native';
import { Header } from './app/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEECCA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
