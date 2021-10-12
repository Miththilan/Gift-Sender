// Formik x React Native example
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import FlatButton from "../shared/button.js";
import { auth } from "../firebase/firebase";

export function ReviewForm({ addReview, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth

      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert("Incorrect "));
  };

  useEffect(() => {
    const person = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return person;
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../assets/gift.png")}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={globalStyles.input}
          onChangeText={(e) => setEmail(e)}
          value={email}
          placeholder="Email"
        />

        {/* <Text style={globalStyles.errorText}>{errors.email}</Text> */}
        <TextInput
          style={globalStyles.input}
          onChangeText={(e) => setPassword(e)}
          // onBlur={handleBlur("password")}
          value={password}
          placeholder="Password"
        />
        {/* <Text style={globalStyles.errorText}>{errors.password}</Text> */}

        <View>
          <FlatButton onPress={handleLogin} text="submit" />
        </View>
      </View>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Text
          style={{
            color: "#2596be",
            marginTop: 10,
          }}
        >
          FORGOT PASSWORD
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 35,
          justifyContent: "center",
        }}
      >
        <Text>New User?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              color: "#2596be",
              marginLeft: 8,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2596be",
    height: 250,
  },
  headerImage: {
    marginTop: 120,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginLeft: 140,
  },
  inputContainer: {
    marginTop: 20,
  },
});
