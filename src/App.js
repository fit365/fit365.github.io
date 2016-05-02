const React = require('react');
const ReactDOM = require('react-dom');

const Content = require('./components/Content');
const Header = require('./components/header');
const Links = require('./components/Links');

const App = React.createClass({
  getInitialState () {
    return {
      selectedButton: 'program'
    };
  },

  _handleButtonClick (selectedButton) {
    this.setState({
      selectedButton
    });
  },

  render () {
    return (
      <div style={{ backgroundColor: '#ddd' }}>
        <Header />
        <Links onButtonClick={this._handleButtonClick} />
        <Content
          selectedContent={this.state.selectedButton}
        />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('fit-365'));