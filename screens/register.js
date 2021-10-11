// Formik x React Native example
import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
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
export const Register = ({ addReview, navigation }) => (
  <Formik
    initialValues={{ name: "", phone: "", email: "", password: "", adress: "" }}
    validationSchema={reviewSchema}
    onSubmit={(values, actions) => {
      addReview(values);
      actions.resetForm();
      // console.log(errors);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Full Name"
          />
          <Text style={globalStyles.errorText}>{errors.name}</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            value={values.phone}
            placeholder="Phone"
          />
          <Text style={globalStyles.errorText}>{errors.phone}</Text>

          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Email"
          />
          <Text style={globalStyles.errorText}>{errors.password}</Text>

          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="Password"
          />
          <Text style={globalStyles.errorText}>{errors.password}</Text>

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
                // navigation.navigate("Home");
              }}
              text="submit"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 35,
            justifyContent: "center",
          }}
        >
          <Text>Already have account</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                color: "#2596be",
                marginLeft: 8,
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
    // marginTop: 20,
  },
});
