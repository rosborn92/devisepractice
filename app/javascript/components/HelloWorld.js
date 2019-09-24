import React from "react"
import PropTypes from "prop-types"
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import LearnMore from './pages/LearnMore'

class HelloWorld extends React.Component {
  render () {
      const {
          logged_in,
          sign_in_route,
          sign_out_route
      } = this.props

    return (
        <Router>
        {logged_in &&
            <div>
                <a href={sign_out_route}>Sign Out</a>
            </div>
        }
        {!logged_in &&
            <div>
            <a href={sign_in_route}>Sign In</a>
            </div>
        }
            <Nav>
	            <NavItem>
	              <NavLink to="/" tag={Link}>Home</NavLink>
	            </NavItem>
	            <NavItem>
	              <NavLink to="/about" tag={Link}>About Us</NavLink>
	            </NavItem>
	            <NavItem>
	              <NavLink to="/learnmore" tag={Link}>Learn More</NavLink>
	            </NavItem>
	          </Nav>
              <Jumbotron>
                <h1>Hello World</h1>
              </Jumbotron>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/learnmore" exact component={LearnMore} />

        </Router>
    );
  }
}

export default HelloWorld
