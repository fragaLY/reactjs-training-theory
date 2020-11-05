export default props => (
    <div>
        <h1>Car</h1>
        <p>Name: {props.name}</p>
        <p>Year: {props.year}</p>
        { props.children }
    </div>
)