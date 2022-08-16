import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const addNewTask = (userInput) => {
    setTasks((prevState) => [
      ...prevState,
      { task: userInput, id: Math.random().toString() },
    ]);
    setIsVisible(false);
  };
  const startAddTaskHandler = () => {
    setIsVisible(!isVisible);
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.addNewButton}>
        <Button title="Dodaj nowe!" onPress={startAddTaskHandler} />
      </View>
      <AddTask
        visible={isVisible}
        closeModal={startAddTaskHandler}
        onAddTask={addNewTask}
      />
      <FlatList style={styles.taskContainer}
        data={tasks}
        renderItem={(tasksData) => {
          return (
            <TaskList
              task={tasksData.item.task}
              id={tasksData.item.id}
              onDeleteItem={deleteTaskHandler}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addNewButton: {
    margin: 60,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    padding: 8,
  },
  taskContainer: {
    flex:5
  }
});
