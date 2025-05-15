import AppIcon from "./AppIcon";
import Toggle from "../../Toggle";

const ToggleRow = (props) => {
    return <div className="toggle-row">
        <AppIcon name={props.value} />
        <h4>{props.children}</h4>
        <Toggle checked={props.checked} value={props.value} onChange={props.onChange} />
    </div>
};

export default ToggleRow;