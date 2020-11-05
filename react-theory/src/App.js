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
        title: 'REACTIVE CARS, YEAH!',
        time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    }

    update = (date) => {
        this.setState({time: date})
    }

    render() {
        const cars = this.state.cars

        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <h2>Updated at: { this.state.time }</h2>
                <button onClick={ this.update.bind(this, new Date().getSeconds()) }>Current Time</button> // the best performance
                <Car onBuy={() => this.update(new Date().getMilliseconds())} name={cars[0].name} year={cars[0].year}/> // the worst performance
                <Car onBuy={() => this.update(new Date().getMilliseconds())} name={cars[1].name} year={cars[1].year}/>
                <Car onBuy={() => this.update(new Date().getMilliseconds())} name={cars[2].name} year={cars[2].year}/>
            </div>
        )
    }
}

export default App;
