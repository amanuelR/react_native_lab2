import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

function MenuItem(props) {
  // Keep track of quantity
  const [quantity, setQuantity] = useState(0);
  // TODO (part 3): add state for special instructions text
  const [instruction, setInstraction] = useState("");
  // Return JSX to render
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          source={props.imageSource
          }
          style={styles.photo}
        />
      </View>
      <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
      <Text>Price: ${props.price}</Text>
      <Text>Quantity: {quantity}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="-"
          onPress={() => {
            if(quantity == 0) setQuantity(0);
            else {
             let y = quantity - 1;
              setQuantity(y);
            }
            // TODO (part 2): decrease quantity by 1
            // watch out for negative quantity
          }}
        />
        <Button
          title="+"
          onPress={() => {
            console.log("plus pressed");
            // TODO (part 2): increase quantity by 1
            let x = quantity + 1;
            setQuantity(x);
          }}
        />
      </View>
      <Text>Special Instructions: {instruction}</Text>
      <TextInput
        placeholder="Type instructions here"
        onSubmitEditing={({ nativeEvent, currentTarget }) => {
          console.log(nativeEvent.text);
          // TODO (part 3): Update special instructions text
          setInstraction(nativeEvent.text)
          currentTarget.clear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 2,
    width: "90%",
    padding: 30,
    margin: 20,
  },
  photoContainer: {
    padding: 5,
  },
  photo: {
    resizeMode: "contain",
    height: 0,
    width: 0,
    padding: 50,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
});

export default MenuItem;
