import classes from './Car.module.scss'
import withClass from "../HigherOrderComponent/withClass";
import PropTypes from 'prop-types'
import React from 'react'

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const inputClasses = [classes.input]

        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed')
        // }

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <>
                <p>Name: {this.props.name}</p>
                <p>Year: {this.props.year}</p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}
export default withClass(Car, classes.Car)