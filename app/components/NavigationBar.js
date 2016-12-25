import React from 'react';
import {Link, IndexLink} from 'react-router';


var NavigationBar = React.createClass({
  render: function () {
    return (
      <div>
      <h2>Navigation Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </IndexLink>
      <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </IndexLink>
      </div>
    );
  }
});

module.exports = NavigationBar;
