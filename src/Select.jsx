import IconCalendar from "./assets/IconCalendar";

const Select = (props) => {
    return <div className='select-container'>
        <select onChange={props.onChange} name='dates' id='dates'>
            {props.options.map((element, index) => 
                <option 
                    value={element}
                    key={`option ${index}`}
                >{element}</option>
            )}
        </select>
        <div className='select-icon-container'>
            <IconCalendar />
        </div>
        <div className='select-arrow-container'>
            <svg width='10' height='8'>
                <polygon points='1,1 5,7 9,1' />
            </svg>
        </div>
    </div>
}

export default Select;