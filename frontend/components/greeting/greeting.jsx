import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
    <div className='splash-logo'><label className="logo-letter">O</label>pen<label className="logo-letter">W</label>all</div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-nav">
    <Link to="/home"><img className="icon" src="http://res.cloudinary.com/dt5viyxyq/image/upload/v1472601564/font-template-calligraphy-o_on3edg.gif"/></Link>
    <button className="header-button" onClick={logout}>Log Out</button>
		<h2 className="header-name">{currentUser.username}</h2>
	</hgroup>
);

function Greeting({currentUser, logout}){
  if (currentUser){
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
