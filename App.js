import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addNewTask = (userInput) => {
    setTasks(prevState => [...prevState, userInput]);
  };
 
  return (
    <View style={styles.container}>
      <AddTask onAddTask={addNewTask} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
