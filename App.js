import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import reducers from "./src/reducers";
import LoginForm from "./src/components/LoginForm";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
        <LoginForm />
      </Provider>
    );
  }
}
