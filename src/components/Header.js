import React from 'react';

// Components
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = ({players, title}) => {
  // OF
  // const { players, title } = props;
  // ipv props.players, props.title
  return (
    <header>
      <Stats players={players}/>
        <h1>{ title }</h1>
        <Stopwatch />
    </header>
    
  );
}

export default Header;