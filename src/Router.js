import React from "react";
import { Text } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee"
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            initial
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
