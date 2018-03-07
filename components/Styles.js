import { StyleSheet } from "react-native";
import {
  white,
  black,
  grey,
  darkGrey,
  red,
  darkGreen,
  darkOrange,
  darkBlue,
  lightGrey,
  lightDarkBlue,
  brightGreen,
  green,
  lightBlue,
  dimBlue
} from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: lightGrey
  },
  greenBtn: {
    backgroundColor: darkGreen,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: 'row',
  },
  greenBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  orangeBtn: {
    backgroundColor: darkOrange,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: 'row',
  },
  orangeBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  blackBtn: {
    backgroundColor: black,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  blackBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  blueBtn: {
    backgroundColor: darkBlue,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: 'row',
  },
  blueBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  lightBlueBtn: {
    backgroundColor: dimBlue,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: 'row',
  },
  lightBlueBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  brightGreenBtn: {
    backgroundColor: brightGreen,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  brightGreenBtnText: {
    color: black,
    fontSize: 22,
    textAlign: "center"
  },
  redBtn: {
    backgroundColor: red,
    padding: 10,
    height: 45,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  redBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  question: {
    color: darkGrey,
    fontSize: 32,
    textAlign: "center",
    marginTop: 80
  },
  deckTitle: {
    color: darkGrey,
    fontSize: 32,
    textAlign: "center"
  },
  cardsNumber: {
    color: grey,
    fontSize: 22,
    textAlign: "center"
  },
  textContainer: {
    marginTop: 100,
    marginBottom: 40
  },
  deck: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    borderBottomColor: grey,
    borderBottomWidth: 0.8
  },
  title: {
    color: darkGrey,
    fontSize: 22
  },
  message: {
    color: red,
    fontSize: 16,
    textAlign: "center"
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: grey,
    alignSelf: "stretch",
    marginTop: 10,
    height: 40,
    width: 300,
    alignSelf: "center"
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 60
  },
  mainText: {
    color: darkGrey,
    fontSize: 32,
    textAlign: "center"
  },
  secondaryText: {
    color: lightDarkBlue,
    fontSize: 20,
    textAlign: "center"
  },
  counter: {
    color: darkGrey,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16
  },
  card: {
    marginTop: 70,
    marginBottom: 10
  }
});

// This makes styles available as an export
module.exports = styles;
