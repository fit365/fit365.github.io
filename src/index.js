const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render () {
    return (
      <div>
        Fit 365 - React
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('fit-365'));