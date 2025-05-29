import Avatar from '../../Avatar';
import Select from '../../Select';
import ScreenTimeLeft from './ScreenTimeLeft';
import TimeBalance from './TimeBalance';
import Card from '../../Card';
import { getSessionsByTypeAndDay, getTotalTimeByTypeAndDay, getUniqueDates } from '../../utils/sessionUtils';
import { useState } from 'react';

let renderCount = 0;

const Activity = (props) => {
    // Get render count for creating a new key for notification component on each render
    renderCount++;

    // Date selection
    const [date, setDate] = useState(props.today);

    // Calculate today's screen time left, total screen time and total activity time 
    const screenTimeToday = getTotalTimeByTypeAndDay('screen', date);
    const activityTimeToday = getTotalTimeByTypeAndDay('activity', date);
    let screenTimeLeft = activityTimeToday - (screenTimeToday / props.settings.screenVsActivityRatio);

    // Sessions list
    const screenSessionsToday = getSessionsByTypeAndDay('screen', date);
    const activitySessionsToday = getSessionsByTypeAndDay('activity', date);

    const handleDate = (event) => {
        setDate(event.target.value);
    };

    return <div className='content-container'>
        <div className='row'>
            <h2>Activity</h2>
            <Avatar onClick={props.handleOpenSettings} />
        </div>
        <div className='row'>
            <Select
                options={getUniqueDates()}
                onChange={handleDate}
            />
        </div>
        <ScreenTimeLeft 
            value={screenTimeLeft >= 0 ? screenTimeLeft : 0}
        />
        <TimeBalance 
            screenTime={screenTimeToday} 
            activityTime={activityTimeToday}
            screenTimeTarget={props.settings.screenTimeTarget}
            activityTimeTarget={props.settings.activityTimeTarget}
        />
        {screenSessionsToday.length > 0 && (<>
            <div className='section-title'>
                <h3>Screen time</h3>
            </div>
            {screenSessionsToday.map((element, index) => 
                <Card 
                    link
                    title={element.platform}
                    icon={element.platform}
                    key={`screenSession ${index + renderCount}`}
                >
                    <small>{element.duration} minutes</small>
                </Card>
            )}
        </>)}
        {activitySessionsToday.length > 0 && (<>
            <div className='section-title'>
                <h3>Activities</h3>
            </div>
            {activitySessionsToday.map((element, index) => 
                <Card 
                    link
                    title={element.sport}
                    icon={element.sport}
                    key={`activity ${index + renderCount}`}
                >
                    <small>{element.duration} minutes</small>
                </Card>
            )}
        </>)}
    </div>
};

export default Activity;