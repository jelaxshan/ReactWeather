import React from 'react';
import {Link, IndexLink} from 'react-router';


class NavigationBar extends React.Component{
  onSearch = e => {
    e.preventDefault();
    alert('not yet wired up');
  }
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul
            className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </IndexLink>
            </li>
            <li>
              <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </IndexLink>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
          </form>
      </div>
    </div>

    );
  }
}

export default NavigationBar;
