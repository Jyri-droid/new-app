const Circle = (props) => {
    return <>
        <path
            d={`M ${props.x} ${props.y} l 0.0001 0`}
            vectorEffect="non-scaling-stroke"
            stroke={props.color}
            strokeWidth='12'
            strokeLinecap='round'
        />
        <path
            d={`M ${props.x} ${props.y} l 0.0001 0`}
            vectorEffect="non-scaling-stroke"
            stroke='white'
            strokeWidth='7'
            strokeLinecap='round'
        />
    </>
}

export default Circle;

