import React from 'react';
import NavigationBar from 'NavigationBar';
import 'app/style.scss';

class Main extends React.Component{
  render() {
    return (
      <div>
      <NavigationBar/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {this.props.children}
        </div>
      </div>
      </div>
    );
  }
};

export default Main;
