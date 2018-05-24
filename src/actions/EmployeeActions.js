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

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({
        name,
        phone,
        shift
      })
      .then(() => {
        Actions.employeeList();

        dispatch({
          type: types.EMPLOYEE_SAVE_SUCCESS
        });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({
          type: types.EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
