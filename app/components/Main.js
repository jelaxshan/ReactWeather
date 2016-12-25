var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = React.createClass({
  render: function () {
    return (
      <div>
      <NavigationBar/>
      <h2>Main Component</h2>
      {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
