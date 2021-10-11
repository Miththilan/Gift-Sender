import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import { ReviewForm } from "../screens/reviewForm";
import { Register } from "../screens/register";

import React from "react";
const screens = {
  Login: {
    screen: ReviewForm,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Gift Sender" />
        ),
        headerLeft: () => null,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      //   headerStyle: {
      //     backgroundColor: "#eee",
      //   },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#0c70ab",
      height: 60,
    },
  },
});

export default createAppContainer(HomeStack);
