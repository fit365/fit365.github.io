const React = require('react');

const Carousel = React.createClass({
  propTypes: {
    duration: React.PropTypes.number.isRequired
  },

  getInitialState () {
    return {
      itemId: 1
    };
  },

  componentDidMount () {
    let itemId = this.state.itemId;
    const interval = setInterval(() => {
      itemId = itemId < 9 ? itemId + 1 : 1;

      this.setState({
        itemId
      });
    }, this.props.duration);

    this.setState({
      interval
    });
  },

  componentWillUnmount () {
    clearInterval(this.state.interval);
  },

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
        backgroundImage: 'url(./src/assets/images/carousel_' + this.state.itemId + '.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: 348,
        width: 696
      }
    };
  }
});

module.exports = Carousel;