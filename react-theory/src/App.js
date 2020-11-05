import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        const divStyle = {
            'text-align': 'center'
        }

        return (
            <div style={divStyle}>
                <h1 style={{color: 'blue', fontSize: '5em'}}>Hi world!</h1>
            </div>
        )
    }
}

export default App;
