import React from "react";
import { FlatList, View,StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TaskComponent from "./task.component";
import { Colors,Spacing,FontSize } from "../theme/theme";
const TodoList = (props) => {
    const data=useSelector(state=>state.todos)
    const renderItem=(item)=>{
        
        return(
            <TaskComponent task={item.item} />
        )
    }
  return (
    
      <FlatList style={styles.container} data={data} renderItem={renderItem}  keyExtractor={(item)=> item.uuid} />
  );
};

const styles=StyleSheet.create({
    container:{
        height:300,
        marginVertical:Spacing.md
    }

})

export default TodoList;
