import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import TodoList from "../components/todoList.component";
import { Button, Searchbar, FAB } from "react-native-paper";
import { Colors, FontSize, Spacing } from "../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import Task from "../models/task.model";
import { addTask } from "../redux/actions/todo.action";
import TaskModal from "./task.screen";
import TaskButton from "../components/TaskButton.component";
const windowWidth = Dimensions.get("window").width;
export default function HomeScreen() {
  const dispatch = useDispatch();
  //console.log(useSelector((state)=>{console.log(state)}))

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TaskModal />
      <View style={styles.container2}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>TODO</Text>
          <TaskButton />
        </View>
        <Searchbar placeholder="Search" style={styles.searchBar} />
        <View style={styles.listContainer}>
          <TodoList />
          
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  container2: {
    paddingVertical: Spacing.xlg,
    paddingHorizontal: Spacing.lg,
  },
  headerContainer:{
    flexDirection:'row',
    justifyContent:"center",
    marginBottom:Spacing.md
  },
  listContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
    color: Colors.text,
    textAlign:'center',
    alignSelf:'center'
  },
  searchBar: {
    marginTop: Spacing.sm,
  },
});
