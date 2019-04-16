import React, { PureComponent } from 'react';
// import PropTypes from "prop-types"

//COMPONTENTS
import Counter from './Counter';

class Player extends PureComponent {

/*  PROPTYPES IN CLASS COMPONENTS
with static you don't need to instantiate the class to acces PropTypes

static propTypes = {
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  index: PropTypes.number
}
*/



  render() {
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props


    // console.log(this.props.name + ' rendered');
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          changeScore={changeScore} 
        />
      </div>
    );
  }
}




export default Player;