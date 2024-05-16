import IconCalendar from "./assets/IconCalendar";

const Select = () => {
    return <div className='select-container'>
        <select name='dates' id='dates'>
            <option value='May 16'>May 16</option>
            <option value='May 15'>May 15</option>
            <option value='May 14'>May 14</option>
            <option value='May 13'>May 13</option>
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