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
*/

export default Header;