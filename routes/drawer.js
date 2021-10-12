import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import React from "react";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import LoginStack from "./loginStack";
import { auth } from "../firebase/firebase";
import { Button, View } from "react-native";
const RootDrawerNavigator = createDrawerNavigator(
  {
    // screen: LoginStack,
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },

    contentComponent: () => (
      <View style={{ flex: 1 }}>
        {/* <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}> */}
        {/* <DrawerItems {...props} /> */}
        <Button
          title="Logout"
          onPress={() => {
            auth
              .signOut()
              .then(() => {
                navigation.navigate("ReviewForm");
              })
              .catch((error) => alert(error.message));
          }}
        />
        {/* </SafeAreaView> */}
      </View>
    ),
    // drawerOpenRoute: "DrawerOpen",
    // drawerCloseRoute: "DrawerClose",
    // drawerToggleRoute: "DrawerToggle",
  },
  {
    drawerBackgroundColor: "#262A2C",
  }
);

export default createAppContainer(RootDrawerNavigator);
