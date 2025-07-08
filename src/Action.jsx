const Action = (props) => {
    return <button className='action' onClick={props.onClick}>
        {props.children}
    </button>
};

export default Action;