import Path from "./Path";
import Circle from "./Circle";

const Svg = (props) => {  
  const maxValue = Math.max(...[...props.screenTimePath, ...props.activityPath]);  
  const getY = (y) => 100 - (y / maxValue * 100);
  const getLastValueOfArray = (array) => array[array.length - 1];
  const screenTimePath = [...props.screenTimePath];
  const activityPath = [...props.activityPath];
  screenTimePath.push(getLastValueOfArray(screenTimePath));
  activityPath.push(getLastValueOfArray(activityPath));
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
        {screenTimePath.map((element, index) => 
          <Path
            index={index}
            yStart={getY(element)}
            yEnd={getY(screenTimePath[index + 1])}
            xSteps={props.screenTimePath.length + 1}
            smoothing={props.smoothing}
            color={yellow}
            key={`screenTimePath ${index}`}
          />
        )}
        <Circle x={0} y={getY(screenTimePath[0])} color={yellow} />
        <Circle x={100} y={getY(getLastValueOfArray(screenTimePath))} color={yellow} />
        {activityPath.map((element, index) => 
          <Path
            index={index}
            yStart={getY(element)}
            yEnd={getY(activityPath[index + 1])}
            xSteps={props.activityPath.length + 1}
            smoothing={props.smoothing}
            color={blue}
            key={`activityPath ${index}`}
          />
        )}
        <Circle x={0} y={getY(activityPath[0])} color={blue} />
        <Circle x={100} y={getY(getLastValueOfArray(activityPath))} color={blue} />
      </svg>
    </>
  );
};

export default Svg;

/*

        {props.screenTimePath.map((element, index) => 
          <SmoothSvgPath
            index={index}
            yStart={getY(0)}
            yEnd={getY(0)}
            xSteps={props.screenTimePath.length + 1}
            smoothing={props.smoothing}
            color="#E5F61B"
            key={`screenTimePath ${index}`}
          />
        )}
          */