import React from 'react';
import { Link } from 'react-router';
import PhotoIndexContainer from '../photo/index_container';
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div>
      <div className='home-nav'>
        <h1 className="explore-text">EXPLORE</h1>
      </div>
      <PhotoIndexContainer/>
    </div>
    )
  }
}

export default Home;
