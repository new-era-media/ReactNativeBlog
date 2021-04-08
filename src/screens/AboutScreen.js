import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Platform } from "react-native";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === "android" ? "white" : THEME.MAIN_COLOR}
    {...props}
  />
);

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>
        Версия приложения <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "О приложении",

  headerLeft: (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  version: {
    fontFamily: "OpenSans-Bold",
    fontWeight: "900",
  },
});
