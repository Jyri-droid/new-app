const SmoothSvgPath = (props) => {

  // Coordinate calculator functions
  const getX = (index) => index * (100 / (props.xSteps - 1));

  // Coordinates for graph end points
  const points = {
    xStart: getX(props.index),
    xEnd: getX(props.index + 1),
    yStart: props.yStart,
    yEnd: props.yEnd,
  };

  // Coordinates for bezier control points
  const controls = {
    xStart: points.xStart + (points.xEnd - points.xStart) * props.smoothing,
    yStart: points.yStart,
    xEnd: points.xEnd - (points.xEnd - points.xStart) * props.smoothing,
    yEnd: points.yEnd,
  };
  
  // Create points
  const startPoint = `${points.xStart},${points.yStart}`;
  const endPoint = `${points.xEnd}, ${points.yEnd}`;
  const firstControlPoint = `${controls.xStart}, ${controls.yStart}`;
  const lastControlPoint = `${controls.xEnd}, ${controls.yEnd}`;
  const pathDescription = `M ${startPoint} C ${firstControlPoint} ${lastControlPoint} ${endPoint}`;

  return <path
    d={pathDescription}
    fill='none'
    strokeWidth='3'
    stroke={props.color}
    vectorEffect='non-scaling-stroke'
  />
};

export default SmoothSvgPath;


/*


 {props.index === -1 && (
        <>
          <line
            x1={points.xStart}
            y1={points.yStart}
            x2={points.xStart}
            y2={points.yStart}
            stroke='white'
            strokeLinecap='round'
            strokeWidth=''
            vectorEffect='non-scaling-stroke'
            />
          <line
            x1={points.xEnd}
            y1={points.yEnd}
            x2={points.xEnd}
            y2={points.yEnd}
            stroke={props.color}
            strokeLinecap='round'
            strokeWidth='14'
            vectorEffect='non-scaling-stroke'
            />
        </>
      )}

      */