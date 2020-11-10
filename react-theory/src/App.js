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
        showCars: false
    }

    update = (title) => {
        this.setState({title: title})
    }

    toggle = () => {
        this.setState({ showCars: !this.state.showCars})
    }

    handleInput = (event) => {
        this.setState({
                title: event.target.value
            }
        )
    }

    render() {
        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car key={index} name={car.name} year={car.year}
                         onBuy={this.update.bind(this, car.name)}/>
                )
            })
        }
        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <h2>Updated at: {this.state.time}</h2>
                <input type="text" onChange={this.handleInput}/>
                <br/>
                <button onClick={this.toggle}>Toggle Cars</button>
                { cars }
            </div>
        )
    }
}

export default App;
