export default props => (
    <div style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px'
    }}>
        <p>Name: {props.name}</p>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)