const Toggle = (props) => {
    return <label className="toggle-container" htmlFor={props.name}>
        <input 
            type="checkbox" 
            id={props.value} 
            name={props.value} 
            value={props.value}
            checked={props.checked}
            onChange={props.onChange}
        />
        <span className="toggle-slider"></span>
    </label>
};

export default Toggle;