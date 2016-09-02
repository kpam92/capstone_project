import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
<div>
<div className="splash-background"/>
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">LOGIN</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">SIGN UP</Link>
    <div className='splash-logo'><label className="logo-letter">O</label>pen<label className="logo-letter">W</label>all</div>
    <div className='tagline'> A virtual space for creating and sharing...</div>
  </nav>
</div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-nav">
    <Link to="/home"><label className="icon">O</label></Link>
    <button className="header-button" onClick={logout}>Log Out</button>
    <div className="right-nav">
  		<li className="header-name">{currentUser.username}</li>
      <li><a href="#" className='prof-icon'><img src={currentUser.profile_pic}/></a></li>
    </div>
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
