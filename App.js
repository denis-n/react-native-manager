import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";

import reducers from "./src/reducers";

const store = createStore(reducers);

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDlRxPcboWjajgXsyqPupIr_jMhTNfF4TQ",
      authDomain: "manager-6e216.firebaseapp.com",
      databaseURL: "https://manager-6e216.firebaseio.com",
      projectId: "manager-6e216",
      storageBucket: "manager-6e216.appspot.com",
      messagingSenderId: "1088809690764"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
