import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className="header-nav">
    <header>
      <Link to="/home"><h1>OpenWall</h1></Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
