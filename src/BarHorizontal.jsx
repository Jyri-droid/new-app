const BarHorizontal = (props) => {
    return <div className='bar-container'>
        <div className={props.class} style={{width: `${props.width}%`}} ></div>
    </div>
}

export default BarHorizontal;