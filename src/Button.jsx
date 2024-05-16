import { useNavigate } from "react-router-dom";

const Button = (props: {navigateTo: string, text: string}) => {
    const navigate = useNavigate();
    const navigateTo = () => {
      navigate(props.navigateTo);
    }
    return (
      <button 
        type="button" 
        onClick={navigateTo}
      >
        {props.text}
      </button>
    );
  };
  
  export default Button;