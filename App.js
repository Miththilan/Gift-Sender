import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

export default function App() {
  return <Navigator />;
  // const [fontLoaded, setFontLoaded] = useState(false);
  // if (fontLoaded) {
  //   return <Home />;
  // } else {
  //   return (
  //     <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
  //   );
  // }
}
