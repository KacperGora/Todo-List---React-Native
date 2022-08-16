import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const AddTask = () => {
  return (
    <View style={styles.inputContainer}>
      <Modal>
        <TextInput style={styles.input} placeholder="Add new task"></TextInput>
        <View style={styles.actions}>
          <Button title="Add new!"></Button>
          <Button title="Cancel"></Button>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
  },
  input: {
    borderColor: "red",
  },
  actions: {
    flexDirection: "row",
  },
});

export default AddTask;
