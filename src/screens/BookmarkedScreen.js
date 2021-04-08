import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Platform } from "react-native";
import { THEME } from "../theme";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Post } from "../components/Post";
import { DATA } from "../data";

const IoniconsHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === "android" ? "white" : THEME.MAIN_COLOR}
    {...props}
  />
);

export const BookmarkedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter((el) => el.booked)}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

BookmarkedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Избранное",
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
  wrapper: {
    padding: 10,
  },
});
