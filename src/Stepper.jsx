import { useRef } from "react";

const Stepper = (props) => {
    const ref = useRef(null);
    const handleDeduce = () => {
        ref.current.value = Number(ref.current.value) - 1;
    };
    const handleAdd = () => {
        ref.current.value = Number(ref.current.value) + 1;
    };
    return <div className="stepper-container">
        <button onClick={handleDeduce} >-</button>
        <label htmlFor={props.name} />
        <input 
            ref={ref}
            type="number"
            id={props.name} 
            name={props.name}
            value={props.value}
            step={props.steps}
            min={0}
            onChange={props.onChange}
            disabled
        />
        <button onClick={handleAdd} className="stepper-button">+</button>
    </div>
};

export default Stepper;