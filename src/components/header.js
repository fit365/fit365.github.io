const React = require('react');

const StyleConstants = require('../constants/Style');

const Header = React.createClass({
  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <div style={styles.title}>
          <span style={styles.fit}>
            FIT
          </span>
          <span style={styles.threeSixtyFive}>
            365
          </span>
        </div>
        <div style={styles.quote}>
          Don't wish for it, Work for it.
        </div>
      </div>
    );
  },

  styles () {
    return {
      component: {
        alignItems: 'center',
        backgroundColor: StyleConstants.Colors.DARKGREY,
        display: 'flex',
        flexDirection: 'column',
        height: 550,
        justifyContent: 'center',
        width: '100%'
      },
      fit: {
        color: StyleConstants.Colors.PORCELAIN,
        fontFamily: StyleConstants.Fonts.SEMIBOLD,
        fontSize: 45
      },
      threeSixtyFive: {
        color: StyleConstants.Colors.PORCELAIN,
        fontFamily: StyleConstants.Fonts.NORMAL,
        fontSize: 30
      },
      title: {
        padding: 100
      },
      quote: {
        color: StyleConstants.Colors.PORCELAIN,
        fontFamily: StyleConstants.Fonts.THIN,
        fontSize: 50,
        textTransform: 'uppercase'
      }
    }
  }
});

module.exports = Header;