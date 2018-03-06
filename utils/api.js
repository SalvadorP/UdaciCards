import React from "react";
import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "udacicards.decks";

function testDecks() {
  var data = {
    React: {
      title: "React",
      cards: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    JavaScript: {
      title: "JavaScript",
      cards: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  };
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  return data;
}

export function getAllDecks() {
  // Reset everything
  // AsyncStorage.clear();
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
    results => (results === null ? testDecks() : JSON.parse(results))
  );
}

export function getDeck(id) {
  return getAllDecks().then(decks => decks[id]);
}

export function saveDeck(deck) {
  getAllDecks().then(decks => {
    if (!decks[deck.title]) {
      decks[deck.title] = deck;
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
  });
}

export function addCardToDeck(deck, { question, answer }) {
  getAllDecks().then(decks => {
    if (decks[deck] && decks[deck]["question"]) {
      decks[deck]["question"].push({ question, answer });
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}
