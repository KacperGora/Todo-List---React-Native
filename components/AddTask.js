import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const AddTask = (props) => {
  const [userInput, setUserInput] = useState("");

  const getUserInputHandler = (e) => {
    setUserInput(e);
  };
  const addTaskHandler = () => {
    props.onAddTask(userInput);
    setUserInput("");
  };
  const closeAddingHandler = () => {
    props.closeModal();
  };
  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={getUserInputHandler}
          style={styles.input}
          placeholder="Add new task"
          value={userInput}
        ></TextInput>
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button onPress={closeAddingHandler} title="Cancel"></Button>
          </View>
          <View style={styles.button}>
            <Button onPress={addTaskHandler} title="Add new!"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default AddTask;
