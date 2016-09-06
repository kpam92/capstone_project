import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
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

const handleProfileClick = (router, url) => (
() => router.push(url)
)

const personalGreeting = (currentUser, logout, router) => (
	<hgroup className="header-nav">
    <Link to="/home"><label className="icon">O</label></Link>
    <button className="header-button" onClick={logout}>Log Out</button>
    <form>
      <input className="search-bar"type="text" name="search"/>
    </form>
    <div className="right-nav">

  		<li className="header-name">{currentUser.username}</li>
      <li><a className='prof-icon'><img onClick={() => router.push(`/profile/${currentUser.id}`)}
                                        src={currentUser.profile_pic}/></a></li>
    </div>
	</hgroup>
);

function Greeting({currentUser, logout, router}){
  if (currentUser){
    return personalGreeting(currentUser, logout, router);
  } else {
    return sessionLinks();
  }
}



export default withRouter(Greeting);
