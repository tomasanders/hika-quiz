import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_hi}>Hi</Text>
      <Text style={styles.header_ka}>Ka</Text>
      <Text style={styles.header_quiz}>Quiz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    paddingTop: 40,
    paddingBottom: 8,

  },
  header_hi: {
    fontSize: 32,
    color: '#34C1AA',
    fontWeight: 700,
  },
  header_ka: {
    fontSize: 32,
    color: '#E4724E',
    fontWeight: 700,
  },
  header_quiz: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 700,
  },
});
