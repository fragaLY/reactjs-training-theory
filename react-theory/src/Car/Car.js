import './Car.css'

export default props => (
    <div className="Car">
        <p>Name: {props.name}</p>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)