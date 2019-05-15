import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/Library';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class AppRouter extends Component {

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/library/">Library</Link>
              </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/library" exact component={Library} />
      </div>
    </Router>
    );
  }
}

export default AppRouter;
