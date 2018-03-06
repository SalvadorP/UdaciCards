import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
  } from "react-native";
import { connect } from "react-redux";
import styles from "./Styles";

class Card extends Component {
  render() {
    const { textDisplayed, passCardLink, changeBetweenQA } = this.props;
    return (
		<View style={styles.card}>
			<Text style={styles.mainText}>
				{textDisplayed}
			</Text>
			<Text
				onPress={() => changeBetweenQA()}
				style={styles.secondaryText}
			>
				{passCardLink}
			</Text>
		</View>
	);
  }
}

export default Card;
