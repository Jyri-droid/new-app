const Gradient = (props) => {
    return <>
        <defs>
            <linearGradient id={props.color} x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor={props.color} stopOpacity='0.5' />
                <stop offset='25%' stopColor={props.color} stopOpacity='0.4' />
                <stop offset='100%'stopColor={props.color} stopOpacity='0' />
            </linearGradient>
        </defs>
        <path
            d={`${props.path} L 100 100 0 100Z`}
            stroke='none'
            vectorEffect='non-scaling-stroke'
            fill={`url(#${props.color})`}
        />
    </>
}
export default Gradient;