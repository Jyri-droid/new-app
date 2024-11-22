const Circle = (props) => {
    return <><line 
        x1={props.x} 
        y1={props.y} 
        x2={props.x} 
        y2={props.y} 
        stroke={props.color}
        strokeWidth='12px'
        strokeLinecap='round'
        vectorEffect='non-scaling-stroke'
    />
    <line 
        x1={props.x} 
        y1={props.y} 
        x2={props.x} 
        y2={props.y} 
        stroke='white'
        strokeWidth='7px'
        strokeLinecap='round'
        vectorEffect='non-scaling-stroke'
    />
    </>
}

export default Circle;

