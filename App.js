import React, {Component} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DeckList from './components/DeckList';
import DeckDetails from './components/DeckDetails';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import Quiz from './components/Quiz';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { setLocalNotification, clearLocalNotification } from './utils/helpers';
import { white, ligthDarkGreen, yellow, black, darkGreen } from './utils/colors';
import { Constants } from 'expo';
import { resetDB } from './utils/api';

// TabNavigator Component.
const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck'
    }
  }  
}, {
  tabBarOptions: {
    style: {
      backgroundColor: ligthDarkGreen
    },
    labelStyle: {
      color: black
    }
  }
});

// StackNavigator Component.
const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },    
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: {
        backgroundColor: black,
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: yellow
    })
  },  
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'Create Card',
      headerStyle: {
        backgroundColor: black,
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: yellow
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerStyle: {
        backgroundColor: black,
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: yellow
    }
  }
});

function UdaciCardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  componentDidMount() {
    // resetDB();
    // clearLocalNotification();
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={customStyles.container}>
          <UdaciCardsStatusBar backgroundColor={ligthDarkGreen} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
