import React from "react";
import { View, Text, StyleSheet, Switch, Button,TouchableOpacity, Dimensions } from "react-native";
import Priority from "../enums/priority.enum";
import { addTask } from "../redux/actions/todo.action";
import { Colors, FontSize, Spacing } from "../theme/theme";

const windowWidth=Dimensions.get('window').width
const TaskComponent = (props) => {
  const Task = props.task;
  let priorityColor=Colors.text
    switch(Task.priority){
        case Priority.p1:
            priorityColor=Colors.red
        break;
        case Priority.p2:
            priorityColor=Colors.yellow
        break;
        case Priority.p3:
            priorityColor=Colors.blue
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundButton}onPress={()=>{console.log('click on id:',Task.uuid)}} />
      <View style={styles.textContainer}>
        <Text style={styles.tile}>{Task.title}</Text>
        <Text style={styles.description}>{Task.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width:windowWidth,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: Spacing.sm,
  },
  textContainer:{
    alignSelf:'center'
  },
  tile: {
    fontSize: FontSize.md,
    color: Colors.text,
  },
  description: {
    fontSize: FontSize.sm,
    color: Colors.text,
  },
  roundButton: {
    backgroundColor:Colors.transparent,
    borderColor:Colors.text,
    borderWidth:2,
    marginRight:Spacing.md,
    alignSelf:'center',
    width:25,
    height:25,
    borderRadius:200
  },
});

export default TaskComponent;
