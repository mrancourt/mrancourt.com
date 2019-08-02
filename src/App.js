import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import resume from './resume.json'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class App extends Component {

 showMore = () => {
   this.refs.resume.style.width = "1460px";
 };

 showLess = () => {
   this.refs.resume.style.width = "960px";
 };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to mrancourt.com</h1>
        </header>
        <div className="App-container" ref="resume" onMouseOver={this.showMore} onMouseOut={this.showLess}>
          <p className="App-intro">
            <SyntaxHighlighter language="json" style={monokaiSublime} customStyle={{padding: 40}}>
              {JSON.stringify(resume, null, 2)}
            </SyntaxHighlighter>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
