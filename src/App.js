import React, { Component } from 'react';
import './App.css';

//components
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Omar",
        score: 0,
        id: 1
      },
      {
        name: "Aisha",
        score: 0,
        id: 2
      },
      {
        name: "Noeh",
        score: 0,
        id: 3
      }
    ]
  };

  //player id counter 
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
      /* is updating the score state of a player object 
      at the given index by the value passed in for delta*/
    }));
  }

/* adding items to state */
handleAddPlayer = (name) => {
  this.setState( prevState => {
    return{
      players: [
        // represents the players in state before the state was updated
        // will be included at bottom of the list
        ...prevState.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        },
        // ...this.state.players,
        // if put last in array, will include new players at top of the list
        // prevState: update new state, instead of previous state
      ]
    }
  })
}

/* removing items from state */
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }


  render() {
    return (
      <div className="scoreboard">
        <Header 
          // can delete title because defaultProps in Header.
          title="Scoreboard" 
          players={this.state.players}           
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer} 
          />
        )}

        {/* adding items to state */}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>

      </div>
    );
  }
}

/* 
//PROPTYPES


npm install --save prop-types
npm start 

import PropTypes from 'props-types';

FOR EXAMPLE COUNTER
Counter.propTypes = {
  index: propTypes.number,
  score: propTypes.number,
  changeScore: propTypes.func
};

https://reactjs.org/docs/typechecking-with-proptypes.html

PropTypes provide helpful warnings at runtime if the type of a prop is diffrent from the one defined in the PropTypes object
Not only help to catch and avoid bugs, also serve as a documentation for components
CHECK IN CONSOLE!

*/

export default App;


