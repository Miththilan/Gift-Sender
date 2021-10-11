import React, { useState } from "react";
import { View, StyleSheet, Text, Image, CheckBox } from "react-native";
import FlatButton from "./button";

export default function payment(props) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Your Credit and debit Cards</Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/images/1.jpg")}
          style={styles.cardImage}
        />
        <View style={{ marginTop: 30, marginLeft: 30 }}>
          <FlatButton text="Add" />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cash On Delivery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 6,
    // elevation: 3,
    // backgroundColor: "#fff",
    // shadowOffset: { width: 1, height: 1 },
    // shadowColor: "#333",
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // marginHorizontal: 4,
    // marginVertical: 6,
  },
  heading: {
    color: "#7d7d7d",
  },
  cardImage: {
    width: 170,
    height: 90,
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 40,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
