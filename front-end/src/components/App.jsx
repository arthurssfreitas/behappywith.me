import React, { Component } from 'react';
import Header from './Header';
import NovoUsuario from './NovoUsuario';

export class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <NovoUsuario />
      </div>
    );
  }
}

export default App;
