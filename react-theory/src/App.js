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

    handleInput = (event) => {
        this.setState({
                title: event.target.value
            }
        )
    }

    render() {

        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <h2>Updated at: {this.state.time}</h2>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.update.bind(this, new Date().getSeconds())}>Current Time</button>
                {
                    this.state.cars.map((car, index) => {
                        return (
                            <Car key={index} name={car.name} year={car.year}
                                 onBuy={this.update.bind(this, new Date().getMilliseconds())}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
