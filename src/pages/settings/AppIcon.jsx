import { getIconByName } from "../../utils/getIconByName";

const AppIcon = (props) => {
    return <div className="icon-app">
        <img src={getIconByName(props.name)} alt={props.name} />
    </div>
};

export default AppIcon;