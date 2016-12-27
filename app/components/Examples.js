import React from 'react';
import {Link} from 'react-router';

class Examples extends React.Component{

  render() {
    return (
      <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example location to try out</p>
      <ol>
        <li>
          <Link to="/?location=London">London</Link>
        </li>
        <li>
          <Link to="/?location=Munich">Munich</Link>
        </li>
      </ol>
      </div>
    )
  }
};

export default Examples ;
