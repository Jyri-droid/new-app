import BarHorizontal from './BarHorizontal';

const TimeBalance = (props) => {
    return <div className='time-balance-container'>
        <div className='time-balance-column'>
            <h3>
                <span className='time-balance-time'>{props.screenTime}</span>
                <span className='time-balance-hour'> h</span>
            </h3>
            <div className='time-balance-row'>
                <p className='time-balance-activity'>Activity</p>
                <p className='time-balance-share'>75 %</p>
            </div>
            <BarHorizontal width={75} class='bar-yellow' />
        </div>
        <div className='time-balance-column'>
            <h3>
                <span className='time-balance-time'>{props.activityTime}</span>
                <span className='time-balance-hour'> h</span>
            </h3>
            <div className='time-balance-row'>
                <p className='time-balance-activity'>Activity</p>
                <p className='time-balance-share'>25 %</p>
            </div>
            <BarHorizontal width={25} class='bar-blue' />
        </div>
    </div>
}

export default TimeBalance;