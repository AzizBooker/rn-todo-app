import React from "react";
import { useState } from "react";
import {
  Text,
  Modal,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Portal, Provider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { Colors, Spacing, FontSize } from "../theme/theme";
import {} from "react-native-paper";
import { Dimensions } from "react-native";
import { toggleModalVisible } from "../redux/actions/todo.action";
import { toggle } from "cli-spinners";

const screenWidth = Dimensions.get("screen").width;
const TaskModal = (props) => {
  const [text, setText] = useState();
  const [description, setDescription] = useState();
  const visible = useSelector((state) => state.visible);
  const dispatch = useDispatch();
  return (
    <View>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => {
          console.log("Request close"), dispatch(toggleModalVisible());
        }}
        transparent={true}
        style={styles.container}
        onDismiss={() => {
          console.log("Dismiss");
        }}
      >
        <View style={styles.transparentContainer}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.titleInput}
              placeholder="Title"
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              placeholder="Description"
              style={styles.input}
              multiline={true}
              label="description "
              onChangeText={(text) => setDescription(text)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 200,
    width: 200,
  },
  transparentContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    padding: Spacing.md,
    marginHorizontal: Spacing.md,
    width: screenWidth - Spacing.md * 2,
    backgroundColor: Colors.accent,
    borderTopLeftRadius: Spacing.lg,
    borderTopRightRadius: Spacing.lg,
  },
  titleInput: {
    height: 40,
  },

  modal: {
    height: 200,
    width: 200,
    backgroundColor: Colors.accent,
    padding: Spacing.md,
    borderRadius: Spacing.md,
    marginHorizontal: Spacing.xlg,
  },
});

export default TaskModal;
