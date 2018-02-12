import React, { Component } from 'react';
import '../App.css';
import EmailConversionForm from './EmailConversionForm';
import CartConversionForm from './CartConversion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmailConversionForm />
        <CartConversionForm />
      </div>
    );
  }
}

export default App;
