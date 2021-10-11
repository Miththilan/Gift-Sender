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
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const reviewSchema = yup.object({
  quality: yup.string(),
  price: yup.string(),
  owner: yup.string(),
});
// const pressHandler = () => {
//   navigation.navigate("ReviewDetails");
// };
export const AddPost = ({ addReview, navigation }) => (
  <Formik
    initialValues={{
      quality: "",
      price: "",
      owner: "",
      description: "",
      phone: "",
    }}
    validationSchema={reviewSchema}
    onSubmit={(values, actions) => {
      addReview(values);
      actions.resetForm();
      // console.log(errors);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <View style={{ marginTop: 60 }}>
        <Image
          source={require("../assets/images/1.jpg")}
          style={{ width: 200, height: 90 }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("quality")}
            onBlur={handleBlur("quality")}
            value={values.quality}
            placeholder="Quality"
          />
          <Text style={globalStyles.errorText}>{errors.email}</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("price")}
            onBlur={handleBlur("price")}
            value={values.price}
            placeholder="Price"
          />
          <Text style={globalStyles.errorText}>{errors.price}</Text>

          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("owner")}
            onBlur={handleBlur("owner")}
            value={values.owner}
            placeholder="Owner"
            maxLength={10}
          />
          <Text style={globalStyles.errorText}>{errors.owner}</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("description")}
            onBlur={handleBlur("description")}
            value={values.description}
            placeholder="Add Description"
            maxLength={10}
          />
          <Text style={globalStyles.errorText}>{errors.description}</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            value={values.phone}
            placeholder="Add Phone"
            maxLength={10}
          />
          <Text style={globalStyles.errorText}>{errors.phone}</Text>
          <View>
            <FlatButton
              onPress={() => {
                handleSubmit;
                navigation.navigate("Home");
              }}
              text="Post"
            />
          </View>
        </View>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {},

  inputContainer: {
    // marginTop: 20,
  },
});
