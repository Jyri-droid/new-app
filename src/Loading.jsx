const Loading = (props) => {
    return <div className={'loading-container'}>
        <svg viewBox='0 0 100 100'>
            <circle 
                className='loading'
                cx='50' 
                cy='50'
                r='50'
            /> 
        </svg>
    </div>
};

export default Loading; 