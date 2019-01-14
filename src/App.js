import React from 'react';
import { observer } from 'mobx-react';
import ActionButton from './ActionButton';
import './App.css';

@observer
class App extends React.Component {
  render() {
    const { store } = this.props;
    const {
      count, plusOperation, minusOperation, difference
    } = store;

    return (
      <div className="flex-container">
        <div className="ui segment row">
          <h1 className="count">
            {count}

            {difference !== 0 && (
            <span>
              {' '}
(
              {difference}
)
            </span>
            )}
          </h1>
          <ActionButton onClick={plusOperation} label="+" className="ui button big" />
          <ActionButton onClick={minusOperation} label="-" className="ui button big" />
        </div>
      </div>
    );
  }
}

export default App;
