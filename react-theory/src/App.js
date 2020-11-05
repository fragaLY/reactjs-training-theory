import {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2002},
            {name: 'Lincoln', year: 2003},
            {name: 'Zaporozec', year: 2004},
            {name: 'Mazda', year: 2005}
        ],
        title: 'REACTIVE CARS, YEAH!'
    }

    render() {
        const cars = this.state.cars

        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <Car name = {cars[0].name} year={cars[0].year}/>
                <Car name = {cars[1].name} year={cars[1].year}/>
                <Car name = {cars[2].name} year={cars[2].year}/>
            </div>
        )
    }
}

export default App;
