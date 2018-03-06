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
      case "brightGreenBtn":
        btst = StyleSheet.flatten([styles.brightGreenBtn]);
        btstxt = StyleSheet.flatten([styles.brightGreenBtnText]);
        break;
      case "redBtn":
        btst = StyleSheet.flatten([styles.redBtn]);
        btstxt = StyleSheet.flatten([styles.redBtnText]);
        break;
      case "lightBlueBtn":
        btst = StyleSheet.flatten([styles.lightBlueBtn]);
        btstxt = StyleSheet.flatten([styles.lightBlueBtnText]);
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
