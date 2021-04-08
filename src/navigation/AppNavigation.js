import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
const navigarotOprions = {
  headerStyle: {
    backgroundColor: Platform.OS === "ios" ? "#fff" : THEME.MAIN_COLOR,
  },
  titleStyle: {
    color: "#fefefe",
  },
  headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : "white",
};

const AboutNavigator = createStackNavigator(
  { About: AboutScreen },
  { defaultNavigationOptions: navigarotOprions }
);

const CreateNavigator = createStackNavigator(
  { Create: CreateScreen },
  { defaultNavigationOptions: navigarotOprions }
);

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    defaultNavigationOptions: navigarotOprions,
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: {
      screen: BookmarkedScreen,
    },
  },
  {
    defaultNavigationOptions: navigarotOprions,
  }
);

const BookedNavigatorContainer = createMaterialBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarLabel: "Все",
        tabBarIcon: (info) => (
          <Ionicons name='ios-albums' size={25} color={info.tintColor} />
        ),
      },
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarLabel: "Избранное",
        tabBarIcon: (info) => (
          <Ionicons name='ios-star' size={25} color={info.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: THEME.MAIN_COLOR,
    barStyle: { height: 50 },
    shifting: true,
    // labeled: false,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BookedNavigatorContainer,
      navigationOptions: {
        title: "Главная",
        // drawerIcon: <Ionicons name="" />
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        title: "Создание поста",
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: "О приложении",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        marginLeft: 20,
      },
    },
  }
);

export const AppNavigation = createAppContainer(MainNavigator);
