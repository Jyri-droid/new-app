const Line = (props) => {
    return <path
        d={props.path}
        stroke={props.color}
        strokeWidth='3'
        fill='none'
        vectorEffect='non-scaling-stroke'
    />
  };
  
  export default Line;