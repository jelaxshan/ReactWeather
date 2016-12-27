import React from 'react';
import NavigationBar from 'NavigationBar';
import 'app/style.scss';
class Main extends React.Component{
  render() {
    return (
      <div>
      <NavigationBar/>
      <h2>Main Component</h2>
      {this.props.children}
      </div>
    );
  }
};

export default Main;
