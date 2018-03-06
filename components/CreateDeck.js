import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import CardField from "./CardField";
import { addDeck } from "../actions";
import { NavigationActions } from "react-navigation";
import { white } from "../utils/colors";
import { saveDeck } from "../utils/api";
import GenericButton from "./GenericButton";
import styles from "./Styles.js";

// FIXME: When creating a deck the system does not get refreshed correctly...

class CreateDeck extends Component {
  state = {
    title: "",
    allFilled: false
  };

  submit = () => {
    const { decks } = this.props;
    const { title } = this.state;

    if (title) {
      const newDeck = {
        title: title,
        cards: []
      };

      // Save to 'DB' (AsyncStorage).
      saveDeck(newDeck);

      // Update Redux.
      this.props.dispatch(
        addDeck({
          [title]: newDeck
        })
      );

      // Clean the title so if create deck is clicked again it will be empty.
      this.setState({
        title: '',
        allFilled: false
      });

      // Redirect the user to Deck Details.
      this.gotoDeckDetails(title);
    } else {
      this.setState({
        allFilled: true
      });
    }
  };

  // Navigate to the DeckDetail View, passing a title property.
  gotoDeckDetails = title => {
    this.props.navigation.navigate("DeckDetails", { title: title });
  };

  // Display the warning message.
  showAlertMessage = () => {
    if (this.state.allFilled) {
      return <Text style={styles.message}>The title is required!</Text>;
    }
  };

  render() {
    return (
      <View style={stylesCustom.container}>
        <CardField fieldText={"Deck Title?"} />
        {this.showAlertMessage()}
        <TextInput
          onChangeText={title => this.setState({ title })}
          placeholder="Deck Title"
          style={styles.input}
          value={this.state.title}
        />
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
    backgroundColor: white
  }
});

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(CreateDeck);
