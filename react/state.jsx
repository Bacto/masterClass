import React, { Component } from 'react';
import {
  View
} from 'react-native';

class Example extends Component {

  constructor(props) {
    super(props);

    // First, we initialize the state as an object with a key "viewIsPressed" and a boolean value false
    // We could add as many keys has we want here
    this.state = {
      viewIsPressed: false
    };
  }


  // We create a method "viewOnPress" that will be called when we press the view
  viewOnPress() {
    // We set the state via the method "setState" and pass to it and object with the key "viewIsPressed" and the value true
    this.setState({ viewIsPressed: true });
  }


  // Method called on release
  viewOnRelease() {
    // We set the key "viewIsPressed" to false
    this.setState({ viewIsPressed: false });
  }


  // The render
  render() {

    // We set a green background to the style
    let viewStyle = { backgroundColor: '#00FF00' };

    // If the key "viewIsPressed" in the state is true, we set a red background
    if (this.state.viewIsPressed === true) {
      viewStyle = { backgroundColor: '#FF0000' };
    }

    // Be careful: in the return, it's not some JS code. It's JSX!
    return (
      // We add a View component
      <View
        style={viewStyle} // We apply the style that we have defined in the object "viewStyle"
        onPress={this.viewOnPress.bind(this)} // We pass to the props "onPress" the method "viewOnPress"
        onRelease={this.viewOnRelease.bind(this)} // We pass to the props "onRelease" the method "viewOnRelease"
      />
    );
  }
}

export default cExample;
