import _ from "lodash";
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
import Deck from "./Deck";
import { getAllDecks } from "../utils/api";
import { white } from "../utils/colors";

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getAllDecks()
      .then(decks => {
        dispatch(getDecks(decks));
      })
      .catch(function(error) {
        console.log(
          "An error occurred while retrieving the decks => " + error.message
        );
        throw error;
      });
  }

  _keyExtractor = (item, index) => index;
  _renderItem = ({ item }) => {
    // TODO: Check if item comes undefined...
    if (item === undefined) {
      return "";
    } else {
      return <Deck {...item} navigation={this.props.navigation} />;
    }
  };

  render() {
    var { decks } = this.props;
    if (decks.length < 1) {
      decks = {};
    }

    return (
      <View style={stylesCustom.container}>
        <FlatList
          data={_.values(decks)}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const stylesCustom = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: white
  }
});

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);
