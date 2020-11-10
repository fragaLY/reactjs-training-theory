export default props => (
    <div style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px',
            boxShadow: '0 4px 5px rgba(0, 0, 0, .14)',
            borderRadius: '5px'
    }}>
        <p>Name: {props.name}</p>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)