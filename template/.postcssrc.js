<% if (adaptationScheme==='vw') { %>
const path = require('path');
module.exports = ({ file }) => {
  return {
    plugins: {
      "autoprefixer": {},
      "postcss-px-to-viewport": {
        viewportWidth: file.includes(path.join('node_modules', 'vant')) ? 375 : 750,
      },
    },
  }
};
<% } %>
<% if (adaptationScheme==='rem') { %>
module.exports = () => {
  return {
    plugins: {
      "autoprefixer": {},
      "postcss-pxtorem": {
        rootValue: ({ file }) => (file.indexOf('vant') > -1 ? 16 : 32),
        propList: ['*'],
        exclude: /node_modules\/(?!(vant))/i,
      }
    },
  }
};
<% } %>
