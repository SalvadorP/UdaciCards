import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import styles from "./Styles";
// TODO: WIP, Refactor for the cards...
class ShowCard extends Component {

    correctBtnSubmit = (() => {
    const { currentCard, totalCards } = this.state;
    if (currentCard <= totalCards - 1) {
        this.setState((prevState) => ({
        correct : prevState.correct + 1
        }))
    }
    // More Cards? 
    // FIXME: Check DRY!
    if (currentCard < totalCards - 1) {
        this.setState((prevState) => ({
        currentCard: prevState.currentCard + 1,
        front: true
        }))
    }
    })

    incorrectBtnSubmit = (() => {
    const { currentCard, totalCards } = this.state;
    if (currentCard <= totalCards - 1) {
        this.setState((prevState) => ({
        incorrect : prevState.incorrect + 1
        }))
    }
    // FIXME: Check DRY!      
    if (currentCard < totalCards - 1) {
        this.setState((prevState) => ({
        currentCard: prevState.currentCard + 1,
        front: true
        }))
    }
    })

    changeCard = (() => {
    this.setState((prevState) => ({
        front: !prevState.front
    }))
    })
  render() {
        const { question, answer, changeCard, title } = this.props;
        const { front, correct, incorrect, totalCards, currentCard } = this.props;
        const totalAnswers = correct + incorrect;
        let text = '';
        let link = '';
        // Check if all questions have been answered.
        if (totalAnswers !== totalCards) {
          if (front === true) {
            text = question;
            link = 'Answer!';
          } else {
            text = answer;
            link = 'Question';
          }
        } else {
          text = 'You answered correctly to ' + (correct * 100 / totalAnswers) + '% of the questions.';
          
          clearLocalNotification().then(setLocalNotification)
          return (
            <View>
              <Card
                textDisplayed={text}
              />
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
            </View>
          );
        // Otherwise, display the normal card and check its visible front.
        } 
    
        return (
          <View>
            <Card
              textDisplayed={text}
              linkToFlip={link}
              flipFunc={changeCard}
            />
            <View>            
              <GenericButton
                btnStyle={"greenBtn"}
                btnText={"Correct"}
                onPress={this.correctBtnSubmit}
                textStyle={"greenBtnText"}
              />
              <GenericButton
                btnStyle={"redBtn"}
                btnText={"Incorrect"}
                onPress={this.incorrectBtnSubmit} 
                textStyle={"redBtnText"}
              />
             
            </View>
          </View>
    
        );
      })
  }
}

export default ShowCard;
