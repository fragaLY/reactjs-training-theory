import React, {Component} from 'react'
import Car from './Car/Car'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class Cars extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ]
    }

    render() {
        return (
            <div style={{
                width: 400,
                margin: 'auto',
                paddingTop: '2em'
            }}>
                {this.state.cars.map((car, index) => {
                    return (
                        <ErrorBoundary>
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                            />
                        </ErrorBoundary>
                    )
                })}
            </div>
        )
    }
}