const React = require('react');

const { Button } = require('mx-react-components');
const FitnessIcon = require('./FitnessIcon');

const StyleConstants = require('../constants/Style');

const Links = React.createClass({
  propTypes: {
    onButtonClick: React.PropTypes.func.isRequired,
  },

  getInitialState () {
    return {
      selectedButton: 'program'
    };
  },

  _handleButtonClick (selectedButton) {
    this.setState({
      selectedButton
    });

    this.props.onButtonClick(selectedButton);
  },

  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <div style={styles.buttonWrapper}>
          <Button
            icon='chart'
            onClick={this._handleButtonClick.bind(null, 'program')}
            type={this.state.selectedButton === 'program' ? 'primary' : 'primaryOutline'}
          >
            Program
          </Button>
        </div>
        <div style={styles.buttonWrapper}>
          <Button
            icon='segments'
            onClick={this._handleButtonClick.bind(null, 'locations')}
            type={this.state.selectedButton === 'locations' ? 'primary' : 'primaryOutline'}
          >
            Training Locations
          </Button>
        </div>
        <div style={styles.buttonWrapper}>
          <Button
            icon='user'
            onClick={this._handleButtonClick.bind(null, 'about')}
            type={this.state.selectedButton === 'about' ? 'primary' : 'primaryOutline'}
          >
            About Me
          </Button>
        </div>
        <div style={styles.buttonWrapper}>
          <Button
            icon='phone'
            onClick={this._handleButtonClick.bind(null, 'contact')}
            type={this.state.selectedButton === 'contact' ? 'primary' : 'primaryOutline'}
          >
            Contact
          </Button>
        </div>
      </div>
    );
  },

  styles () {
    return {
      buttonWrapper: {
        paddingLeft: 10,
        paddingRight: 10
      },
      component: {
        alignItems: 'center',
        borderTop: '2px solid ' + StyleConstants.Colors.PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 50,
        paddingTop: 50
      }
    };
  }
});

module.exports = Links;