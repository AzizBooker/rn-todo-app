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
import { Colors, FontSize,Spacing } from "../theme/theme";
import { useDispatch,useSelector} from "react-redux";
import Task from "../models/task.model";
import { addTask } from "../redux/actions/todo.action";
import TaskModal from "./task.screen";
export default function HomeScreen() {
  const dispatch=useDispatch()
  console.log(useSelector((state)=>{console.log(state)}))
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>TODO</Text>
      <Searchbar placeholder="Search" style={styles.searchBar} />
      <View style={styles.listContainer}>
        <FlatList/>
        <View style={styles.fabView}>
          <FAB
            style={styles.fab}
            color={Colors.text}
            animated={true}
            icon="plus"
            onPress={() => {
              dispatch(addTask(new Task('testing','checking test')))
            }}
            onLongPress={()=>{
              console.log('Long Press')
            }}
          />
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.xlg,
    paddingHorizontal:Spacing.lg,
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  listContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
    color: Colors.text,
  },
  searchBar:{
    marginTop:Spacing.sm
  },
  fabView: {
    paddingBottom:100,

  },
});
