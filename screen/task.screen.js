import React from "react";
import { useState } from "react";
import { Text, View,StyleSheet } from "react-native";
import { Portal, Modal, Provider } from "react-native-paper";
import { Colors,Spacing,FontSize } from "../theme/theme";
const TaskModal = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <Provider>
      <Portal>
        <Modal visible={setVisible} contentContainerStyle={styles.modal}>
          <Text>Test Modal</Text>
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles=StyleSheet.create({
    modal:{
        backgroundColor:Colors.accent,
        padding:Spacing.md,
        borderRadius:Spacing.md,
        marginHorizontal:Spacing.xlg
        
    }
})

export default TaskModal;
