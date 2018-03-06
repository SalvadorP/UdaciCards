import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white } from "../utils/colors";

class Quiz extends Component {
  componentDidMount() {}

  render() {
    return <View style={stylesCustom.container} />;
  }
}

const stylesCustom = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: white
  }
});

function mapStateToProps(decks) {
  return { 
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
