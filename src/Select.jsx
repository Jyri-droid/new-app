import IconCalendar from "./assets/IconCalendar";

const Select = () => {
    return <div className='select-container'>
        <select name='dates' id='dates'>
            <option value='May 16'><IconCalendar/>May 16</option>
            <option value='May 15'>May 15</option>
            <option value='May 14'>May 14</option>
            <option value='May 13'>May 13</option>
        </select>
        <div className='select-icon-container'>
            <IconCalendar />
        </div>
        <div className='select-arrow-container'>
            <svg width='12' height='8'>
                <polygon points='0,0 6,8 12,0' />
            </svg>
        </div>
    </div>
}

export default Select;