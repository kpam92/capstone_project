import React from 'react';
import { Link } from 'react-router';
import PhotoIndexContainer from '../photo/index_container';
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    // this.props.fetchAllUsers();
  }

  render() {
    return(
    <div>
      <div className='home-nav'>
        <h1 className="explore-text">EXPLORE</h1>
        <div className=""/>
        <button className="explore-button">By Album</button>
        <button className="explore-button">By Photo</button>
      </div>
      <PhotoIndexContainer/>
    </div>
    )
  }
}

export default Home;
