import React, {Component} from 'react';

export default class Counter extends Component {

    state = {
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        // return (
        //     <div>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.increment}>+</button>
        //         <button onClick={this.decrement}>-</button>
        //     </div>
        // )

        // return [
        //         <h2 key={'counter'}>Counter {this.state.counter}</h2>,
        //         <button key={'increment'} onClick={this.increment}>+</button>,
        //         <button key={'decrement'} onClick={this.decrement}>-</button>
        //     ]

        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.increment}>+</button>
        //         <button onClick={this.decrement}>-</button>
        //     </React.Fragment>
        // )

        // return (
        //     <Auxilliary>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.increment}>+</button>
        //         <button onClick={this.decrement}>-</button>
        //     </Auxilliary>
        // )

        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )

    }
}