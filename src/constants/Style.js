const _merge = require('lodash/merge');
const { Styles } = require('mx-react-components');

const Style = _merge(Styles, {
  Colors: {
    DARKGREY: '#222'
  },
  BoxShadow: '0 30px 30px 10px rgba(0,0,0,0.1)',
  BoxShadowThin: '0 1px 5px 0 rgba(0,0,0,0.1)'
});

module.exports = Style;