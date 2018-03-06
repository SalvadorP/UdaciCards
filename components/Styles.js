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
  lightDarkBlue
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
    width: 200,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    justifyContent: "center",
    alignItems: "center"
  },
  greenBtnText: {
    color: white,
    fontSize: 16,
    textAlign: "center"
  },
  orangeBtn: {
    backgroundColor: darkOrange,
    padding: 10,
    height: 45,
    width: 200,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  orangeBtnText: {
    color: white,
    fontSize: 16,
    textAlign: "center"
  },
  blackBtn: {
    backgroundColor: black,
    padding: 10,
    height: 45,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 60,
    borderRadius: 6,
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
    width: 200,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: grey,
    justifyContent: "center",
    alignItems: "center"
  },
  blueBtnText: {
    color: white,
    fontSize: 16,
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
    marginTop: 120,
    marginBottom: 120
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
    marginTop: 30,
    height: 40,
    width: 300,
    alignSelf: "center"
  },
  inputContainer: {
    marginTop: 140,
    marginBottom: 60
  }
});

// This makes styles available as an export
module.exports = styles;
