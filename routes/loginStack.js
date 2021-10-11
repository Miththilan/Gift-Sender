import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { ReviewForm } from "../screens/reviewForm";
import React from "react";
const screens = {
  ReviewForm: {
    screen: ReviewForm,
    navigationOptions: {
      header: null,
    },
  },
};

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
