import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

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


    const personalGreeting = () => (
    	<hgroup className="header-nav">
        <Link to="/home"><label className="icon">O</label></Link>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
        <form onSubmit={this.props.receiveNewSearchResults}>
          <input className="search-bar"type="text" name="search"/>
        </form>
        <div className="right-nav">

      		<li className="header-name">{this.props.currentUser.username}</li>
          <li><a className='prof-icon'><img onClick={handleRouteClick(this.props.router, `/profile/${this.props.currentUser.id}`)}
                                            src={this.props.currentUser.profile_pic}/></a></li>
        </div>
    	</hgroup>
    );

    const handleRouteClick = (router, url) => (
    () => router.push(url)
    )

    if (this.props.currentUser){
      return personalGreeting();
    } else {
      return sessionLinks();
    }
  }
}



export default withRouter(Greeting);
