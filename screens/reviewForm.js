// Formik x React Native example
import React, { useEffect } from "react";
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

const reviewSchema = yup.object({
  email: yup.string().email("Invalid email").required().min(4),
  password: yup.string().required().min(8),
});

export function ReviewForm({ addReview, navigation }) {
  const handleLogin = () => {
    auth

      .signInWithEmailAndPassword(values.email, values.password)
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
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={reviewSchema}
      onSubmit={(values) => {
        addReview(values);
        // actions.resetForm();
        // console.log(errors);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
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
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
            />

            <Text style={globalStyles.errorText}>{errors.email}</Text>
            <TextInput
              style={globalStyles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
            />
            <Text style={globalStyles.errorText}>{errors.password}</Text>

            <View>
              {/* {errors.email && errors.password && (
                <FlatButton
                  onPress={() => {
                    handleSubmit;
                  }}
                  text="submit"
                />
              )} */}

              <FlatButton
                onPress={() => {
                  handleSubmit;
                  handleLogin;
                }}
                text="submit"
              />
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
                navigation.navigate("Register"), console.log(errors.email);
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
      )}
    </Formik>
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
