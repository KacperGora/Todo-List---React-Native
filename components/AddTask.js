import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const AddTask = (props) => {
  const [userInput, setUserInput] = useState("");

  const getUserInputHandler = (e) => {
    setUserInput(e);
  };
  const addTaskHandler = () => {
    props.onAddTask(userInput)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={getUserInputHandler}
        style={styles.input}
        placeholder="Add new task"
        value={userInput}
      ></TextInput>
      <View style={styles.actions}>
        <Button title="Cancel"></Button>
        <Button onPress={addTaskHandler} title="Add new!"></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 200,
  },
  input: {
    borderColor: "lightgrey",
    borderWidth: 2,
    padding: 16,
  },
  actions: {
    flexDirection: "row",
  },
});

export default AddTask;
