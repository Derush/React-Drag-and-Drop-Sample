import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';


class App extends Component {
  render() {

      const style = {
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "20px"
      }

      const listOne = [
          { id: 1, text: "Item 1" },
          { id: 2, text: "Item 2" },
          { id: 3, text: "Item 3" }
      ];

      const listTwo = [
          { id: 4, text: "Item 4" },
          { id: 5, text: "Item 5" },
          { id: 6, text: "Item 6" }
      ];

      const listThree = [
          { id: 7, text: "Item 7" },
          { id: 8, text: "Item 8" },
          { id: 9, text: "Item 9" }
      ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div style={{...style}}>
              <Container id={1} list={listOne} />
              <Container id={2} list={listTwo} />
              <Container id={3} list={listThree} />
          </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
