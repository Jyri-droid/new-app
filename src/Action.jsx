const Action = (props) => {
    return <button className='action' onClick={props.onClick}>
        <div className='action-arrow-container'>
            <svg width='10' height='10'>
                <path d='M10 0 L0 5 10 10' />
            </svg>
        </div>
        {props.children}
    </button>
};

export default Action;