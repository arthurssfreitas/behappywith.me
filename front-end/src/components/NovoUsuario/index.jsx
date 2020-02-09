import React, { Component } from 'react';
import Label from '../Label';

export class NovoUsuario extends Component {
  render() {
    return (
      <div className="center">
        <form>
          <Label htmlFor="nome" texto="Quem é você?"/>
        </form>
      </div>
    );
  }
}

export default NovoUsuario;
