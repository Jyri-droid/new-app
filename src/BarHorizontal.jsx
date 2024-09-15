const BarHorizontal = (props) => {
    const width = props.value <= 100 ? props.value : 100;
    return <div className='bar-container'>
        <div className={props.class} style={{width: `${width}%`}} ></div>
    </div>
}

export default BarHorizontal;