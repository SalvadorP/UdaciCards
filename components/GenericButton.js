import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import styles from "./Styles.js";

class GenericButton extends Component {
  render() {
    const { btnStyle, textStyle, btnText, onPress } = this.props;
    var btst = "";
    var btstxt = "";
    switch (btnStyle) {
      case "blackBtn":
        btst = StyleSheet.flatten([styles.blackBtn]);
        btstxt = StyleSheet.flatten([styles.blackBtnText]);
        break;
      case "greenBtn":
        btst = StyleSheet.flatten([styles.greenBtn]);
        btstxt = StyleSheet.flatten([styles.greenBtnText]);
        break;
      case "orangeBtn":
        btst = StyleSheet.flatten([styles.orangeBtn]);
        btstxt = StyleSheet.flatten([styles.orangeBtnText]);
        break;
      case "blueBtn":
        btst = StyleSheet.flatten([styles.blueBtn]);
        btstxt = StyleSheet.flatten([styles.blueBtnText]);
        break;
      default:
        break;
    }
    return (
      <TouchableOpacity onPress={onPress} style={btst}>
        <Text style={btstxt}>{btnText}</Text>
      </TouchableOpacity>
    );
  }
}

export default GenericButton;
