import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { Platform } from "react-native";
import { THEME } from "../theme";
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

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((post) => post.id === postId);

  const removeHandler = () =>
    Alert.alert("Удаление поста", "Вы точно хотите удалить пост?", [
      {
        text: "Отмена",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Удалить", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image}></Image>
      <View style={styles.textWrap}>
        <Text style={styles.textWrap}>{post.text}</Text>
      </View>
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const icon = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Пост №${postId} - ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title='Take photo'
          iconName={icon}
          onPress={() => console.log("Press photo")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "OpenSans-Regula",
  },
});
