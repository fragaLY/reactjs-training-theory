import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Cars</h1>
                <Car name = {'Ford'} year={2018}/>
                <Car name = {'Audi'} year={2020}/>
                <Car name = {'Mazda'} year={2015}>
                    <p style={{color: 'red'}}>COLOR</p>
                </Car>
            </div>
        )
    }
}

export default App;
