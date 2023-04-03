import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to HiKa Quiz!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEECCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 700,
  }
});
