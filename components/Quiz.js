import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white } from "../utils/colors";
import Card from "./Card";
import styles from "./Styles";
import GenericButton from "./GenericButton";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  state = {
    currentCard: 0,
    totalCards: 0,
    correct: 0,
    incorrect: 0,
    front: true
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;
    const cards = decks[title].cards;
    this.setState({
      totalCards: cards.length
    });
  }

  correctBtnSubmit = () => {
    const { currentCard, totalCards } = this.state;
    if (currentCard < totalCards) {
      this.setState(prevState => ({
        correct: prevState.correct + 1
      }));
    }
    // FIXME: Check DRY!
    if (currentCard < totalCards - 1) {
      this.setState(prevState => ({
        currentCard: prevState.currentCard + 1,
        front: true
      }));
    }
  };

  incorrectBtnSubmit = () => {
    const { currentCard, totalCards } = this.state;
    if (currentCard < totalCards) {
      this.setState(prevState => ({
        incorrect: prevState.incorrect + 1
      }));
    }
    // FIXME: Check DRY!
    if (currentCard < totalCards - 1) {
      this.setState(prevState => ({
        currentCard: prevState.currentCard + 1,
        front: true
      }));
    }
  };

  answerSubmit = answer => {
    const { currentCard, totalCards } = this.state;
    if (currentCard < totalCards) {
      this.setState(prevState => ({
        [answer]: prevState[answer] + 1
      }));
    }
    if (currentCard < totalCards - 1) {
      this.setState(prevState => ({
        currentCard: prevState.currentCard + 1,
        front: true
      }));
    }
  };

  // TODO: make an animation here?
  changeBetweenQA = () => {
    this.setState(prevState => ({
      front: !prevState.front
    }));
  };

  // IDEA: Think about refactor this or extract it to a component.
  displayCard = (question, answer, changeBetweenQA) => {
    const { front, correct, incorrect, totalCards, currentCard } = this.state;
    const { title } = this.props.navigation.state.params;
    const totalAnswers = correct + incorrect;
    var text = "";
    var link = "";

    if (totalAnswers < totalCards) {
      if (front === true) {
        text = question;
        link = "Check Answer";
      } else {
        text = answer;
        link = "Back to Question";
      }
    } else {
      text =
        "You answered correctly to " +
        (correct * 100 / totalAnswers).toFixed(2) +
        "% of the questions.";

      clearLocalNotification().then(setLocalNotification);
      return (
        <View>
          <Text style={styles.mainText}>{text}</Text>
          <GenericButton
            btnStyle={"lightBlueBtn"}
            btnText={"Back to Deck"}
            onPress={() =>
              this.props.navigation.navigate("DeckDetails", { title: title })
            }
            textStyle={"lightBlueBtnText"}
          />
          <GenericButton
            btnStyle={"orangeBtn"}
            btnText={"Restart!"}
            onPress={() =>
              this.props.navigation.navigate("Quiz", { title: title })
            }
            textStyle={"orangeBtnText"}
          />
          <GenericButton
            btnStyle={"blackBtn"}
            btnText={"Back to Deck List"}
            onPress={() => this.props.navigation.navigate("DeckList", {decks: this.props.decks})}
            textStyle={"blackBtnText"}
          />
        </View>
      );
    }

    return (
      <View>
        <Card
          textDisplayed={text}
          passCardLink={link}
          changeBetweenQA={changeBetweenQA}
        />
        <View>
          <GenericButton
            btnStyle={"greenBtn"}
            btnText={"Correct"}
            // onPress={this.answerSubmit('correct')}
            onPress={this.correctBtnSubmit}
            textStyle={"greenBtnText"}
          />
          <GenericButton
            btnStyle={"redBtn"}
            btnText={"Incorrect"}
            // onPress={this.answerSubmit('incorrect')}
            onPress={this.incorrectBtnSubmit}
            textStyle={"redBtnText"}
          />
        </View>
      </View>
    );
  };

  render() {
    const { correct, incorrect, totalCards, currentCard } = this.state;
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;
    const totalAnswers = correct + incorrect;
    const cards = decks[title].cards;
    const question = cards[currentCard].question;
    const answer = cards[currentCard].answer;
    return (
      <View style={stylesCustom.container}>
        <Text style={styles.counter}>{totalAnswers + " / " + totalCards}</Text>
        {this.displayCard(question, answer, this.changeBetweenQA)}
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

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
