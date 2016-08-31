import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='home'>
      <h1>this is home talking</h1>
      </div>
    )
  }
}

export default Home;
