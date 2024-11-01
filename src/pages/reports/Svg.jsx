import SmoothSvgPath from "./SmoothSvgPath";

const Svg = (props) => {  
  const maxValue = Math.max(...[...props.screenTimePath, ...props.activityPath]);  
  const getY = (y) => 100 - (y / maxValue * 100);
  const path = [...props.screenTimePath];
  const lastValue = props.screenTimePath[props.screenTimePath.length - 1];
  path.push(lastValue);
  console.log('path: ' + path);
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {props.screenTimePath.map((element, index) => 
          <SmoothSvgPath
            index={index}
            yStart={getY(element)}
            yEnd={getY(path[index + 1])}
            xSteps={props.screenTimePath.length + 1}
            smoothing={props.smoothing}
            color="#007AFF"
            key={`activityPath ${index}`}
          />
        )}

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