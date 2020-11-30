import {Component} from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

class App extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor")
        this.state = {
            cars: [
                {name: 'Ford', year: 2002},
                // {name: 'Lincoln', year: 2003},
                // {name: 'Zaporozec', year: 2004},
                // {name: 'Mazda', year: 2005}
            ],
            title: props.title,
            showCars: false
        }
    }

    changeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars] // spread operator for duplicating the data
        cars[index] = car
        this.setState({cars})
    }

    toggle = () => { // doesn't creates its context and works with previous one
        this.setState((previousState) => {
            return {showCars: !previousState.showCars}
        })
    }

    delete(index) { // uses context of parent
        let cars = [...this.state.cars] // spread operator for duplicating the data
        cars.splice(index, 1)
        this.setState({cars})
    }

    // legacy , set state in constructor
    // componentWillMount() {
    //     console.log("Component will mount")
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get snapshot before update")
        // https://stackoverflow.com/questions/58032963/getderivedstatefromprops-returned-undefined
        // return {
        //     currentUser: {
        //         ...state.currentUser,
        //         id: props.location.state && props.location.state.user ? props.location.state.user.id : state.currentUser.id,
        //         name: props.location.state && props.location.state.user ? props.location.state.user.name : state.currentUser.name,
        //         roles: props.location.state && props.location.state.user ? props.location.state.user.roles : state.currentUser.roles,
        //         hasAuthenticated: true;
        //     }
        // }
        return null;
    }

    componentDidMount() {
        console.log("Component did mount")
    }

    // legacy. use getDerivedStateFromProps to prevent changing states in this methods
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log("Component will receive next props", nextProps)
    // }

    // legacy use getDerivedStateFromProps to prevent changing states in this methods
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("Component will update.", nextProps, nextState)
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Get derived state from props.", nextProps, prevState)
        return prevState
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Should component update.", nextProps, nextState)
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update.", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
        console.log("Render")

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            onChangeName={event => this.changeName(event.target.value, index)}
                            onDelete={this.delete.bind(this, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }
        return (
            <div className="App">
                {/*<h1>{this.state.title}</h1>*/}
                <h1>{this.props.title}</h1>
                <Counter/>
                <hr/>
                <button onClick={this.toggle}>Toggle Cars</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {cars}
                </div>
            </div>
        )
    }
}

export default App;
