import React, { useState } from "react";

import { View } from "react-native";
import { FAB } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { addTask } from "../redux/actions/todo.action";
import { Colors, Spacing } from "../theme/theme";
import Task from "../models/task.model";
import TaskModal from "../screen/task.screen";
import { toggleModalVisible } from "../redux/actions/todo.action";
import Priority from "../enums/priority.enum";
const TaskButton = (props) => {
  const dispatch = useDispatch();
 
  return (
    <View style={styles.container}>
      <FAB
        style={styles.fab}
        color={Colors.text}
        animated={true}
        icon="plus"
        onPress={() => {
        console.log('Click')
         // dispatch(toggleModalVisible());
          dispatch(toggleModalVisible())
        }}
        onLongPress={() => {
          console.log("Long Press");
        }}
      />
    </View>
  );
};

export default TaskButton;

const styles = StyleSheet.create({
    container:{
        marginLeft:200
    },
  fab: {},
});
