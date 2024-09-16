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
        {props.path1.map((element, index) => 
          <SmoothSvgPath
            index={index}
            yStart={element}
            yEnd={props.path1[index + 1]}
            xSteps={props.path1.length}
            smoothing={props.smoothing}
            color="#007AFF"
            key={`path ${index}`}
          />
        )}
          {props.path2.map((element, index) => 
          <SmoothSvgPath
            index={index}
            yStart={element}
            yEnd={props.path2[index + 1]}
            xSteps={props.path2.length}
            smoothing={props.smoothing}
            color="#E5F61B"
            key={`path ${index}`}
          />
        )}
      </svg>
    </>
  );
};

export default Svg;
