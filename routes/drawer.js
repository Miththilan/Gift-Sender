import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import LoginStack from "./loginStack";

const RootDrawerNavigator = createDrawerNavigator({
  // screen: LoginStack,
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
