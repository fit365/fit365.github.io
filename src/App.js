const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./components/header');

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('fit-365'));