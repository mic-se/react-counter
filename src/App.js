import React from 'react';
import ActionButton from './ActionButton';
import './App.css';


class App extends React.Component {
  state = { count: 0 };

  minusOperation = () => {
    const { count } = this.state;
    if (count === 0) {
      return;
    }

    this.setState({ count: count - 1 });
  };

  plusOperation = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="flex-container">
        <div className="ui segment row">
          <h1 className="count">{count}</h1>
          <ActionButton onClick={this.plusOperation} label="+" className="ui button big" />
          <ActionButton onClick={this.minusOperation} label="-" className="ui button big" />
        </div>
      </div>
    );
  }
}

export default App;
