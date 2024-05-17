const Card = (props) => {
    return <div className='card-container'>
        <div className='card-icon-container'>{props.icon}</div>
        <div className='card-text-container'>
            <h4 className='card-title'>{props.title}</h4>
            <p>{props.text}</p>
        </div>
        <div className='card-arrow-container'>
            <svg width='10' height='15'>
                <path d='M0 0 L10 7.5 0 15' />
            </svg>
        </div>
    </div>
}

export default Card;