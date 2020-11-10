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

    changeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars] // spread operator for duplicating the data
        cars[index] = car
        this.setState({ cars })
    }

    toggle = () => { // doesn't creates its context and works with previous one
        this.setState({ showCars: !this.state.showCars})
    }

    delete(index) { // uses context of parent
        let cars = [...this.state.cars] // spread operator for duplicating the data
        cars.splice(index, 1)
        this.setState({ cars })
    }

    render() {
        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car key={index}
                         name={car.name}
                         year={car.year}
                         onChangeName={ event => this.changeName(event.target.value, index)}
                         onDelete={ this.delete.bind(this, index) }
                    />
                )
            })
        }
        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <button onClick={ this.toggle }>Toggle Cars</button>
                { cars }
            </div>
        )
    }
}

export default App;
