import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { employeesFetch } from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderRow = ({ item }) => {
    return <ListItem employee={item} />;
  };

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => item.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {
      ...val,
      uid
    };
  });

  return {
    employees
  };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
