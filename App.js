import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const addNewTask = (userInput) => {
    setTasks((prevState) => [...prevState, userInput]);
  };

  return (
    <View style={styles.container}>
      <AddTask onAddTask={addNewTask} />
      {tasks.map((el) => {
        return <TaskList task={el} />;
      })}

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
