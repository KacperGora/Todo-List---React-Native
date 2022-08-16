import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "./components/AddTask";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <AddTask />
      </View>
      <View>
        <TaskList />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
