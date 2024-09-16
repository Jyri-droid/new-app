import Avatar from '../../Avatar';
import Select from '../../Select';
import ScreenTimeLeft from './ScreenTimeLeft';
import TimeBalance from './TimeBalance';
import Card from './Card';
import { days } from '../../assets/MockData';
import { useState } from 'react';

let renderCount = 0;

const Activity = (props) => {

    renderCount++;
    // Date selection
    const [date, setDate] = useState(days[0].date);
    const handleDate = (event) => {
        setDate(event.target.value);
    }
    const selectedDay = days.find((element) => element.date === date);
    console.log(selectedDay);

    // Calculate total screen time & activity
    const getTotalDuration = (array) => {
        let sum = 0;
        if (selectedDay.activities.length > 0) {
            array.forEach((element) => sum += element.duration);
        }
        return sum;
    }
    const screenTimeTotal = getTotalDuration(selectedDay.screenSessions);
    const activityTotal = getTotalDuration(selectedDay.activities);
    console.log(' screenTimeTotal ' + screenTimeTotal + 'activityTotal ' + activityTotal);

    // Calculate screen time left
    let screenTimeLeft = activityTotal - (screenTimeTotal / props.settings.screenVsActivityRatio);


    return <div className='content-container'>
        <div className='row'>
            <h2>Activity</h2>
            <Avatar />
        </div>
        <div className='row'>
            <Select
                options={days.map((element) => element.date)}
                onChange={handleDate}
            />
        </div>
        <ScreenTimeLeft 
            value={screenTimeLeft >= 0 ? screenTimeLeft : 0}
        />
        <TimeBalance 
            screenTime={screenTimeTotal} 
            activityTime={activityTotal}
            screenTimeTarget={props.settings.screenTimeTarget}
            activityTarget={props.settings.activityTarget}
        />
        {selectedDay.screenSessions.length > 0 && (<>
            <div className='section-title'>
                <h3>Screen time</h3>
            </div>
            {selectedDay.screenSessions.map((element, index) => 
                <Card 
                    title={element.platform}
                    text={`${element.games} games - ${element.duration} minutes`}
                    key={`screenSession ${index + renderCount}`}
                />
            )}
            </>
        )}
        {selectedDay.activities.length > 0 && (<>
            <div className='section-title'>
                <h3>Activities</h3>
            </div>
            {selectedDay.activities.map((element, index) => 
                <Card 
                    title={element.activity}
                    text={`${element.steps} steps - ${element.duration} minutes`}
                    key={`activity ${index+ renderCount}`}
                />
            )}
            </>
        )}
    </div>
}

export default Activity;