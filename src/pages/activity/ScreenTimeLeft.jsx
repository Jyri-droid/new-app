import getHoursDotMinutes from '../../utils/getHoursDotMinutes';

const ScreenTimeLeft = (props) => {
    return <div className='screen-time-left-container'>
        <div className='screen-time-left-chip'>
            <p>Screen time left</p>
        </div>
        <h3 className='screen-time-left-digits'>{getHoursDotMinutes(props.value)}h</h3>
        <div className='screen-time-left-gradient'></div>
    </div>
}

export default ScreenTimeLeft;