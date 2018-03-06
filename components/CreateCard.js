import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { addCard } from "../actions";
import { white } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import GenericButton from "./GenericButton";
import styles from "./Styles";

class CreateCard extends Component {
  state = {
    question: "",
    answer: "",
    showMessage: false
  };

  submit = () => {
    const { question, answer } = this.state;
    const title = this.props.navigation.state.params.title;
    if (question && answer) {
      // Save to 'DB' (AsyncStorage has been used here).
      addCardToDeck(title, { question, answer });

      // Hide warning message
      this.setState({
        showMessage: false
      });

      // Update Redux.
      this.props.dispatch(addCard({ title, question, answer }));

      // Go back.
      this.goBack();
    } else {
      this.setState({ showMessage: true });
    }
  };

  // Go back.
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  // Display the warning message.
  showAlertMessage = () => {
    if (this.state.showMessage) {
      return (
        <Text style={styles.message}>Question and Answer are required!</Text>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={stylesCustom.container}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={question => this.setState({ question })}
            placeholder="Question"
            style={styles.input}
            value={this.state.question}
          />
          <TextInput
            onChangeText={answer => this.setState({ answer })}
            placeholder="Answer"
            style={styles.input}
            value={this.state.answer}
          />
        </View>
        {this.showAlertMessage()}
        <GenericButton
          btnStyle={"greenBtn"}
          btnText={"Submit"}
          onPress={this.submit}
          textStyle={"greenBtnText"}
        />
      </View>
    );
  }
}

const stylesCustom = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: white
  }
});

export default connect()(CreateCard);
