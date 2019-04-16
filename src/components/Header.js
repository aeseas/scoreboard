import React from 'react';

// Components
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = ({players, title}) => {
  // OF
  // const { players, title } = props;
  // iso props.players, props.title
  return (
    <header>
      <Stats players={players}/>
        <h1>{ title }</h1>
        <Stopwatch />
    </header>
    
  );
}




/* 
import PropTypes form 'prop-types';

Counter.propTypes = {
  index: propTypes.number,
  score: propTypes.number,
  changeScore: propTypes.func
};


//defaultprops will make sure that props.title will have the value Scoreboard, if it's not specified by the parent app component
Header.defaultProps = {
  title: "Scoreboard"
}


*/

export default Header;