import { useState } from "react";

const Loading = (props) => {
    const [ className, setClassName] = useState('progress');
    setInterval(() => {
        setClassName('ready');
    }, props.duration)
    return <div className={'loading-container'}>
        <svg viewBox='0 0 100 100' className={className}>
            <circle 
                id='spinningCircle' 
                cx='50' 
                cy='50' 
                r='46'
                strokeWidth={props.strokeWidth}
                fill='transparent'
            />
            <polyline 
                id='checkMark'
                points='25,55 45,70 75,33'
                strokeWidth={props.strokeWidth}
                fill='transparent'
            />
        </svg>
    </div>
};

export default Loading; 