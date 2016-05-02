const React = require('react');

const Carousel = require('./Carousel');
const FitnessIcon = require('./FitnessIcon');

const StyleConstants = require('../constants/Style');

const Header = React.createClass({
  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <div style={styles.title}>
          <span style={styles.runningIcon}>
            <FitnessIcon
              fillColor={StyleConstants.Colors.PRIMARY}
              size={35}
              type='running'
            />
          </span>
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
        <div style={styles.subQuote}>
          See the positive results of a newly gained lifestyle.
        </div>
        <div style={styles.carousel}>
          <Carousel
            duration={7000}
          />
        </div>
      </div>
    );
  },

  styles () {
    return {
      carousel: {
        borderLeft: '2px solid ' + StyleConstants.Colors.PRIMARY,
        borderRight: '2px solid ' + StyleConstants.Colors.PRIMARY,
        borderTop: '2px solid ' + StyleConstants.Colors.PRIMARY,
        height: 350,
        width: 700
      },
      component: {
        alignItems: 'center',
        backgroundColor: StyleConstants.Colors.DARKGREY,
        display: 'flex',
        flexDirection: 'column',
        height: 600,
        justifyContent: 'center',
        width: '100%'
      },
      fit: {
        color: StyleConstants.Colors.PORCELAIN,
        fontFamily: StyleConstants.Fonts.SEMIBOLD,
        fontSize: 45
      },
      runningIcon: {
        bottom: 5,
        position: 'relative'
      },
      subQuote: {
        color: StyleConstants.Colors.PRIMARY,
        fontFamily: StyleConstants.Fonts.THIN,
        fontSize: 20,
        paddingBottom: 25,
        textTransform: 'uppercase'
      },
      threeSixtyFive: {
        color: StyleConstants.Colors.PORCELAIN,
        fontFamily: StyleConstants.Fonts.NORMAL,
        fontSize: 30
      },
      title: {
        padding: 50
      },
      quote: {
        color: StyleConstants.Colors.PORCELAIN,
        fontFamily: StyleConstants.Fonts.THIN,
        fontSize: 50,
        paddingBottom: 5,
        textTransform: 'uppercase'
      }
    }
  }
});

module.exports = Header;