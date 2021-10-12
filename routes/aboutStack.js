import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="about GiftSender" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#0c70ab",
      height: 65,
    },
  },
});

export default AboutStack;
