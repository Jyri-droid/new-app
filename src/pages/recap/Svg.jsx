import Gradient from "./Gradient";
import Line from "./Line";
import Circle from "./Circle";

const Svg = (props) => {  
  const max = Math.max(...[...props.screenTimePath, ...props.activityPath]);
  const getY = (y) => 100 - (y / max * 100);

  const createPathDescription = (path) => {
    const xSteps = path.length;
    // Calculate coordinates
    const getX = (index) => index * (100 / (xSteps - 1));
    const coordinates = path.map((element, index) => ({x: getX(index), y: getY(element)}));
    const smoothingX = coordinates[1].x * props.smoothing;

    // Build path description
    // M
    const startXY = `0 ${coordinates[0].y}`;
    // C
    const controlStartXY = `${smoothingX} ${coordinates[0].y}`;
    const controlEndXY = `${coordinates[1].x - smoothingX} ${coordinates[1].y}`;
    const endXY = `${coordinates[1].x} ${coordinates[1].y}`;
    // S
    const describeS = (index, y) => {
        const controlXY = `${coordinates[index].x - smoothingX} ${coordinates[index].y}`;
        const endXY = `${coordinates[index].x} ${coordinates[index].y}`;
        return `S ${controlXY}, ${endXY}`
    }
    const yAfterFirst = path.filter((element, index) => index > 0);
    const restXY = yAfterFirst.map((element, index) => describeS(index + 1, element));
    return `M ${startXY} C ${controlStartXY}, ${controlEndXY}, ${endXY} ${restXY}`;
  };
  
  // Get Y for end circles
  const getFirstY = (path) => {
    return getY(path[0]);
  }
  const getLastY = (path) => {
    const lastValue = path[path.length - 1];
    return getY(lastValue);
  }
  const yellow = "#E5F61B";
  const blue = "#007AFF";
  
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Gradient path={createPathDescription(props.screenTimePath)} color={yellow} />
        <Gradient path={createPathDescription(props.activityPath)} color={blue} />
        <Line
            path={createPathDescription(props.screenTimePath)}
            color={yellow}
        />
        <Circle x={0} y={getFirstY(props.screenTimePath)} color={yellow} />
        <Circle x={100} y={getLastY(props.screenTimePath)} color={yellow} />
        <Line
            path={createPathDescription(props.activityPath)}
            color={blue}
        />
        <Circle x={0} y={getFirstY(props.activityPath)} color={blue} />
        <Circle x={100} y={getLastY(props.activityPath)} color={blue} />
      </svg>
    </>
  );
};

export default Svg;