import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Payment from "../shared/payment";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";
import FlatButton from "../shared/button";

export default function ReviewDetails({ navigation }) {
  // const rating = navigation.getParam("rating");
  const img = navigation.getParam("image");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Image source={img} style={styles.cardModal} />
              <Text style={{ marginTop: 30, color: "blue" }}>
                Total : {navigation.getParam("body")}
              </Text>
              <View style={{ marginTop: 25 }}>
                <FlatButton
                  text="Confirm"
                  onPress={() => setModalOpen(false)}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal visible={modalOpen2} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen2(false)}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Payment />
              <View style={{ marginTop: 25 }}>
                <FlatButton
                  text="Confirm"
                  onPress={() => setModalOpen2(false)}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Card>
        <Image source={img} style={styles.cardImage} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ marginTop: 10, color: "blue" }}>
            {navigation.getParam("title")} : {navigation.getParam("body")}
          </Text>
        </View>
        <Text style={{ marginTop: 10, color: "blue" }}>
          {navigation.getParam("description")}
        </Text>
        <TextInput style={globalStyles.input} placeholder="Address" />
        <TouchableWithoutFeedback>
          <Text
            style={styles.payment}
            onPress={() => {
              setModalOpen2(true);
            }}
          >
            Payment Method
          </Text>
        </TouchableWithoutFeedback>
        <View style={styles.rating}>
          <FlatButton text="Send" onPress={() => setModalOpen(true)} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cardImage: {
    width: 320,
    justifyContent: "center",
    height: 200,
    alignItems: "center",
    borderRadius: 20,
    // marginLeft: 50,
  },
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  cardModal: {
    width: 200,
    justifyContent: "center",
    height: 160,
    alignItems: "center",
    borderRadius: 20,
  },
  payment: {
    fontWeight: "800",
    color: "blue",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
