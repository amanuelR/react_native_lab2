import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      {/* TODO (part 1): update these props with your favorite food item */}
      <MenuItem name={"Chicken Wings BBQ"} price={20} imageSource={{uri: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?t=st=1657226744~exp=1657227344~hmac=6b92326deb9eda7b98e121febdb5e520b55a1789b2543c97058facb8c9a739fc&w=1380'}} />
      <MenuItem name={"Chicken Wings BBQ"} price={18} imageSource={{uri: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?t=st=1657226744~exp=1657227344~hmac=6b92326deb9eda7b98e121febdb5e520b55a1789b2543c97058facb8c9a739fc&w=1380'}} />
      {/* TODO (part 2): add another MenuItem! */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100
  },
});
