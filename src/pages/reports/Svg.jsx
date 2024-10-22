import SmoothSvgPath from "./SmoothSvgPath";

const Svg = (props) => {
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
            yStart={element}
            yEnd={props.screenTimePath[index + 1]}
            xSteps={props.screenTimePath.length}
            smoothing={props.smoothing}
            color="#007AFF"
            key={`screenTimePath ${index}`}
          />
        )}
          {props.activityPath.map((element, index) => 
          <SmoothSvgPath
            index={index}
            yStart={element}
            yEnd={props.activityPath[index + 1]}
            xSteps={props.activityPath.length}
            smoothing={props.smoothing}
            color="#E5F61B"
            key={`activityPath ${index}`}
          />
        )}
      </svg>
    </>
  );
};

export default Svg;