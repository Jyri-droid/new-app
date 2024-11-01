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