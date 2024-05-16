import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(props.navigateTo);
      props.setActive(props.index);
    }
    const isSelected = props.active === props.index;
    return (
      <button
        className={isSelected ? 'menu-item menu-active' : 'menu-item'}
        type="button" 
        onClick={handleClick}
      >
        <div className='menu-icon'>{isSelected ? props.activeIcon : props.defaultIcon}</div>
        {props.children}
      </button>
    );
  };
  
  export default MenuItem;