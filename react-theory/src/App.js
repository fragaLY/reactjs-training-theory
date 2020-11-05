import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi world!</h1>
                <Car/>
            </div>
        )
    }
}

export default App;
