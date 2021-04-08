import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
  });
};