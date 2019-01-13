import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import counterStore from './CounterStore';

ReactDOM.render(<App store={counterStore} />, document.querySelector('#root'));

module.hot.accept();
