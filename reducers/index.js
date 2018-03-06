import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARD:
      const deck = { ...state };
      const card = {
        question: action.card.question,
        answer: action.card.answer
      };
      const cardTitle = action.card.title;
      if (deck[cardTitle]) {
        deck[cardTitle].cards.push(card);
      }
      return deck;
    default:
      return state;
  }
}
