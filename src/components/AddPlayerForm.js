import React, { Component } from 'react';

class AddPlayerForm extends Component {

  // Building a form that does not require internal state: make use of the ref attribute (instead of writing an event handler for every state update)
  // make it possible to do more traditional DOM manipulation, commenly used to get form elements and their values
  // easier to get the value of en input field

  // !!
  // controled components have internal state and require fucntions to update state. Easier to modify or validate user input or filter results based on user input in real time.
  // controled components with state call render on every keystroke
  // refs render only called once

  // state = {
  //   value: ''
  // };

  // REF ATTRIBUTE, attach it to text input (in render method, by given ref attribute)
  playerInput = React.createRef();

  // handleValueChange = (e) => {
  //   this.setState({ value: e.target.value });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addPlayer(this.state.value);
    // REF ATTRIBUTE
    this.props.addPlayer(this.playerInput.current.value);
    // this.setState({ value: '' });
        // clears the text value
        // this.setState({value: ''})
        e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          // REF ATTRIBUTE puts a reference to the input on the AddPlayerForm Class, when input is rendered onto the page it returns the reference which you can eacces with this.playerInput
          ref={this.playerInput}
          // value={this.state.value}
          // onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        
        <input 
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;