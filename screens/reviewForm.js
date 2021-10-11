// Formik x React Native example
import React from "react";
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

const reviewSchema = yup.object({
  email: yup.string().email("Invalid email").required().min(4),
  password: yup.string().required().min(8),
});
// const pressHandler = () => {
//   navigation.navigate("ReviewDetails");
// };
export const ReviewForm = ({ addReview, navigation }) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={reviewSchema}
    onSubmit={(values, actions) => {
      addReview(values);
      actions.resetForm();
      // console.log(errors);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
            <FlatButton
              onPress={() => {
                handleSubmit;
                navigation.navigate("Home");
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
    )}
  </Formik>
);

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
