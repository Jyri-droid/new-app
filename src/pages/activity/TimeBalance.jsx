import BarHorizontal from './BarHorizontal';
import getHoursFromMinutes from '../../utils/getHoursFromMinutes';

const TimeBalance = (props) => {
    const screenTimePercentage = props.screenTime / props.screenTimeTarget * 100;
    const activityPercentage = props.activityTime / props.activityTimeTarget * 100;

    return <div className='time-balance-container'>
        <div className='time-balance-column'>
            <h3>
                <span className='time-balance-time'>{getHoursFromMinutes(props.screenTime)}</span>
                <span className='time-balance-hour'> h</span>
            </h3>
            <div className='time-balance-row'>
                <p className='time-balance-activity'>Screen time</p>
                <p className='time-balance-share'>{screenTimePercentage.toFixed(0)} %</p>
            </div>
            <BarHorizontal value={screenTimePercentage} class='bar-yellow' />
        </div>
        <div className='time-balance-column'>
            <h3>
                <span className='time-balance-time'>{getHoursFromMinutes(props.activityTime)}</span>
                <span className='time-balance-hour'> h</span>
            </h3>
            <div className='time-balance-row'>
                <p className='time-balance-activity'>Activity</p>
                <p className='time-balance-share'>{activityPercentage.toFixed(0)} %</p>
            </div>
            <BarHorizontal value={activityPercentage} class='bar-blue' />
        </div>
    </div>
}

export default TimeBalance;