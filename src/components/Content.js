const React = require('react');

const StyleConstants = require('../constants/Style');

const Content = React.createClass({
  propTypes: {
    selectedContent: React.PropTypes.string.isRequired
  },

  _getProgramContent () {
    const styles = this.styles();

    return (
      <div style={styles.itemWrapper}>
        <p style={styles.textWrapper}>
          Program!
        </p>
      </div>
    );
  },

  _getLocationsContent () {
    const styles = this.styles();

    return (
      <div style={styles.itemWrapper}>
        <p style={styles.textWrapper}>
          Locations!
        </p>
      </div>
    );
  },

  _getAboutMeContent () {
    const styles = this.styles();

    return (
      <div style={styles.itemWrapper}>
        <p style={styles.textWrapper}>
          About Me!
        </p>
      </div>
    );
  },

  _getContactContent () {
    const styles = this.styles();

    return (
      <div style={styles.itemWrapper}>
        <p style={styles.textWrapper}>
          Contact Me!
        </p>
      </div>
    );
  },

  _renderSelectedContent () {
    switch (this.props.selectedContent) {
      case 'program':
        return this._getProgramContent();
      case 'locations':
        return this._getLocationsContent();
      case 'about':
        return this._getAboutMeContent();
      case 'contact':
        return this._getContactContent();
      default:
        return null;
    }
  },

  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <div style={styles.contentWrapper}>
          {this._renderSelectedContent()}
        </div>
      </div>
    );
  },

  styles () {
    return {
      component: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      },
      contentWrapper: {
        width: 700,
        paddingBottom: 100
      },
      itemWrapper: {
        alignItems: 'flex-start',
        display: 'flex'
      },
      textWrapper: {
        color: StyleConstants.Colors.CHARCOAL,
        fontFamily: StyleConstants.Fonts.SEMIBOLD,
        fontSize: StyleConstants.FontSizes.LARGE,
        padding: 20
      }
    };
  }
});

module.exports = Content;