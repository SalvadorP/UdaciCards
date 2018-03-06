import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions";
import { getAllDecks } from "../utils/api";
import styles from "./Styles";

class Deck extends Component {
  render() {
    const { title, cards, navigation } = this.props;
    return (
      <TouchableOpacity
        key={title}
        onPress={() => {
          navigation.navigate("DeckDetails", { title: title });
        }}
        style={styles.deck}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardsNumber}>{cards.length + " cards"}</Text>
      </TouchableOpacity>
    );
  }
}

export default Deck;
