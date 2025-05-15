import Toggle from "../../Toggle";
const ToggleRow = (props) => {
    return <div className="toggle-row">
        <h4>{props.children}</h4>
        <Toggle checked={props.checked} value={props.value} onChange={props.onChange} />
    </div>
};

export default ToggleRow;