import { Text, View } from "react-native";

const TaskList = (props) => {
  return (
    <View>
      <Text>{props.task}</Text>
    </View>
  );
};
export default TaskList;
