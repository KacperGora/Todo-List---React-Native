import { Pressable, StyleSheet, Text, View } from "react-native";

const TaskList = (props) => {
  return (
    <View style={styles.item}>
      <Pressable android_ripple={{color: '#210644'}} style={({pressed})=> pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.singleTask}>{props.task}</Text>
      </Pressable>
    </View>
  );
};
export default TaskList;
const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  singleTask: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
