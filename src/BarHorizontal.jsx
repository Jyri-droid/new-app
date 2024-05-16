const BarHorizontal = (props) => {
    return <div className='bar-container'>
        <div className={`bar-${props.color}`} style={{width: `${props.width}%`}} ></div>
    </div>
}

export default BarHorizontal;