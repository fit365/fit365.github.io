const React = require('react');

const StyleConstants = require('../constants/Style');

const Header = React.createClass({
  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>

      </div>
    );
  },

  styles () {
    return {
      component: {
        backgroundColor: StyleConstants.Colors.PRIMARY,
        height: 450,
        width: '100%'
      }
    }
  }
});

module.exports = Header;