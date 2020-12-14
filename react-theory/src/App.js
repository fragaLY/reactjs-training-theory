import React, {Component} from 'react';
import './App.scss';
import About from "./About/About";
import {Route, NavLink} from 'react-router-dom'
import Cars from './Cars/Cars'

class App extends Component {
    render() {

        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName={'wfm-active'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={{pathname: "/cars", search: "?a=1&b=2", hash: "wfm-hash"}} exact>Cars</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr/>

                <Route path="/" exact render={() => <h1>Home Page</h1>} />
                <Route path="/about" component={About} />
                <Route path="/cars" component={Cars} />

            </div>
        );
    }
}

export default App;
