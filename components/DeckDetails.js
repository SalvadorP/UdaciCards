import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";
import { lightGrey } from "../utils/colors";
import GenericButton from "./GenericButton";
import styles from "./Styles.js";
import { AsyncStorage } from "react-native";
import { getAllDecks, getDeck } from "../utils/api";

const DECKS_STORAGE_KEY = "udacicards.decks";

class DeckDetails extends Component {
  startQuiz = () => {
    const { decks } = this.props;
    const title = this.props.navigation.state.params.title;
    var cards = [];
    if (decks[title] !== undefined) {
      cards = decks[title].cards;
    }
    if (cards.length > 0) {
      return (
        <GenericButton
          btnStyle={"orangeBtn"}
          btnText={"Start Quiz"}
          onPress={() =>
            this.props.navigation.navigate("Quiz", { title: title })
          }
          textStyle={"orangeBtnText"}
        />
      );
    }
  };

  render() {
    const { decks } = this.props;
    const deckTitle = this.props.navigation.state.params.title;
    cardsNumber = 0;
    if (decks[deckTitle] !== undefined) {
      cardsNumber = decks[deckTitle].cards.length;
    }
    return (
      <View style={stylesCustom.container}>
        {
          // Text
        }
        <View style={styles.textContainer}>
          <Text style={styles.deckTitle}>{deckTitle}</Text>
          <Text style={styles.cardsNumber}>{cardsNumber + " cards"}</Text>
        </View>
        {
          // Buttons
        }
        <View>
          <GenericButton
            btnStyle={"blueBtn"}
            btnText={"Add Card"}
            onPress={() =>
              this.props.navigation.navigate("CreateCard", { title: deckTitle })
            }
            textStyle={"blueBtnText"}
          />
          {this.startQuiz()}
        </View>
      </View>
    );
  }
}

const stylesCustom = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: lightGrey
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckDetails);
