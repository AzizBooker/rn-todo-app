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
import { Button, Searchbar, FAB } from "react-native-paper";
import { Colors, FontSize,Spacing } from "../theme/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>TODO</Text>
      <Searchbar placeholder="Search" style={styles.searchBar} />
      <View style={styles.listContainer}>
        <FlatList />
        <View style={styles.fabView}>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => {
              console.log("FAB Clicked");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Spacing.xlg,
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
    paddingBottom:50
  },
});
