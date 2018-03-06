import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Styles";

class CardField extends Component {
  render() {
    return (
      <View>
        <Text style={styles.question}>{this.props.fieldText}</Text>
      </View>
    );
  }
}

export default CardField;
