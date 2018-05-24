import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { employeeUpdate, employeeSave } from "../actions";
import { Card, CardSection, Button } from "./common";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({
        prop,
        value
      });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onClick={this.onButtonPress}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(
  EmployeeEdit
);
