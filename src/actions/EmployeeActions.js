import firebase from "firebase";
import { Actions } from "react-native-router-flux";

import * as types from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: types.EMPLOYEE_UPDATE,
    payload: {
      prop,
      value
    }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({
        name,
        phone,
        shift
      })
      .then(() => {
        Actions.employeeList();

        dispatch({
          type: types.EMPLOYEE_CREATED
        });
      });
  };
};
