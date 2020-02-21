import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import './index.scss';

const HelloWorld = () => (
  <div className="center wrapper">
    <h1>Welcome to React App 2020</h1>
    <p>ReactJs boilerplate 2020 containing webpack 4 configuration and sass</p>
  </div>
)
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
