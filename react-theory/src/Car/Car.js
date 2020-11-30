import classes from './Car.module.scss'
import withClass from "../HigherOrderComponent/withClass";
import PropTypes from 'prop-types'

const Car = props => {
    const inputClasses = [classes.input]

    // if (Math.random() > 0.7) {
    //     throw new Error('Car random failed')
    // }

    if (props.name !== '') {
        inputClasses.push(classes.green)
    } else {
        inputClasses.push(classes.red)
    }

    if (props.name.length > 4) {
        inputClasses.push(classes.bold)
    }

    return (
        <>
            <p>Name: {props.name}</p>
            <p>Year: {props.year}</p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </>
    )
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}
export default withClass(Car, classes.Car)