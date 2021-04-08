import React from "react";
import { AppNavigation } from "./src/navigation/AppNavigation";

import AppLoading from "expo-app-loading";
import { loadFonts } from "./src/helpers/loadFonts";

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}></AppLoading>
      );
    } else {
      return <AppNavigation />;
    }
  }
}
