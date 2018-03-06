# UdaciCards
UdaciCards project for react nanodegree of Udacity.com

The app will allow the users to create and study collections of flashcards.

The app will provide the users with:
1. Method to create different categories of flashcards called "decks"
2. Add flashcards to decks
3. Take quizzes on those decks.

# Installation
1. Clone the repository.
2. Go to the root of the repository ( cd UdaciCards ).
3. Run yarn / npm install.
4. yarn / npm start.
5. After building the application it can be tested using Expo.

# Functionality of the App
1. Allow users to create a deck which can hold an unlimited number of cards.
2. Allow users to add a card to a specific deck.
3. The front of the card should display the question.
4. The back of the card should display the answer.
5. Users should be able to quiz themselves on a specific deck and receive a score once they're done.
6. Users should receive a notification to remind themselves to study if they haven't already for that day.

# Views
1. Deck List (Default View)
    1. Shows title of each deck
    2. Shows number of cards per deck
2. Individual Deck View
    1. displays the title of the Deck
    2. displays the number of cards in the deck
    3. displays an option to start a quiz on this specific deck
    4. An option to add a new question to the deck
3. Quiz View
    1. displays a card question
    2. an option to view the answer (flips the card)
    3. a "Correct" button
    4. an "Incorrect" button
    5. the number of cards left in the quiz
    6. Displays the percentage correct once the quiz is complete
4. New Deck View
    1. An option to enter in the title for the new deck
    2. An option to submit the new deck title
5. New Question View
    1. An option to enter in the question
    2. An option to enter in the answer
    3. An option to submit the new question