import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/tasks';
import { KeyboardAvoidingView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Takss */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text='Task 1' />
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.writeTaskWrapper}>
          <TextInput styles={styles.input} placeHolder='Write a task' />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  }
});
