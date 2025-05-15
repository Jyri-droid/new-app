const Stepper = (props) => {
    return <div className="stepper-container">
        <label for={props.value} />
        <input 
            type="number" 
            id={props.value} 
            name={props.value} 
            value={props.value} 
            step={props.steps} 
        />
    </div>
};

export default Stepper;