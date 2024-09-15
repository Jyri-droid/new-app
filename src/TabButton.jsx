const TabButton = (props) => {
    const isActive = props.active;
    return <button 
        className={`tab-button ${isActive && `active`}`} 
        key={`tabButton ${props.children}`}
        onClick={props.onClick}
    >
        {props.children}
    </button>
};

export default TabButton;
