#README

[Cavemen vs. Aliens Tic Tac Toe](http://lcurran.github.io/game-project-client)

##Technologies used:
  -Bootstrap 3.0
  -JavaScript
  -HTML5
  -SASS/CSS
  -Google. A lot of Google.

##Planning process:

---

###Wireframe

[project wireframe](./project1-wireframe-v1.png)

###Data structure

```javascript
  grid {
    rowA: [],
    rowB: [],
    rowC: [],
    col1: [],
    col2: [],
    col3: [],
    diagonalX: [],
    diagonalY: []
  }
```

  Increment for X, decrement for O. When abs(sum) = grid dimension, if positive
  player X wins, if negative player O wins.

  Row arrays can be translated to X's + O's fairly easily and concatenated to
  save in API.  Still debating how to make victory conditions translate back
  and forth between API and app, if unable to save my grid object.

###User Stories

  As a user, I want to be able to immediately play a game upon loading the page.

  As a user, I want to be able to create an account easily.

  As a user, I want to be able to save and access past games.

  As a user, I want to be able to change my password.

  As a user, I want to be able to play the app on mobile.

###Code modules

  Files:

  -HTML
  -CSS
  -Gameboard arrays
  -Actions
  -API calls
  -UI elements
  -Win conditions

  May end up discovering further compartmentalization is needed, but to begin to
  build this should do.

###Creativity

  I'd like to add a mode where you can play with any size game board, because it
  should be fairly straightforward with the logic I'm planning to use.  Won't be
  able to save super mode games in the API though because bigger board size isnt
  supported.

###Version Control

  Git repo already created, going to use a branch for each aspect of the
  project, one for HTML, one for CSS, one for JS and possibly even split the
  API js into another branch as well.  That way I can compartmentalize what I
  am working on and focus on one thing at a time.

###Bonuses

  I would love to be able to make multiplayer work

---

##Development Process and Problem Solving

I chose to start by building the basic front end and styling it to the point
that I had a functioning grid to work off of. Then I imported over the sign in,
sign up, sign out, and change password functionality before taking on the game
logic.

When approaching the game logic, I started with my grid and my one dimensional
array that represented the grid.  I started with the simplest parts, and then
built my way up.  I began with building the logic to place the game pieces on
the array, then added the functionality to display the game pieces on the front
end.  Next I tackled the win condition logic, then finally I added the api calls
to create new games and save them in the api, and the GET call to show game
statistics.

After that I chose to focus on delivering a polished and coherent application.
Once my UI was UX friendly, I began preliminary work on adding functionality
to list active games and load a previously saved game, but did not have time
to get it functional for the presentation build.

In future iterations, I would like to:
  -Fix console token errors when user is playing while not logged in.
  -Add functionality to load saved games.
  -Add online multiplayer.
  -Add AI for the user to play against.
  -Allow user to play on any size game board.

  ####Lindsey Curran
