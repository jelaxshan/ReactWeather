import React from 'react';


class About extends React.Component{

  render() {
    return (
      <div>
      <h1 className="text-center">About</h1>
      <p>Building Weather App using React</p>
      <p>The tools are used to make this app:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="https://www.apixu.com/api.aspx">Apixu Weather API</a>
        </li>
      </ul>
      </div>
    )
  }
};

export default About ;
