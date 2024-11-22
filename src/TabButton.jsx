const TabButton = (props) => {
    const isActive = props.active;
    return <button 
        className={`tab-button ${isActive && `active`}`} 
        onClick={props.onClick}
    >
        {props.children}
    </button>
};

export default TabButton;
