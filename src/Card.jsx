import { getIconByName } from "./utils/getIconByName";

const Card = (props) => {
    return <button className='card-container' onClick={props.onClick}>
        {props.icon && <div className='card-icon-container'>{getIconByName(props.icon)}</div>}
        <div className='card-text-container'>
            {props.title}
            {props.children}
        </div>
    {props.link && <div className='card-arrow-container'>
            <svg width='10' height='15'>
                <path d='M0 0 L10 7.5 0 15' />
            </svg>
        </div>}
        {props.expander && <div className='card-arrow-container'>
            <svg width='10' height='15'>
                <path d='M0 0 L7.5 7.5 15 0' />
            </svg>
        </div>}
    </button>
}

export default Card;