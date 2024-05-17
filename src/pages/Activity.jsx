import Avatar from '../Avatar';
import Select from '../Select';
import ScreenTimeLeft from '../ScreenTimeLeft';
import TimeBalance from '../TimeBalance';
import Card from '../Card';
import { days } from '../assets/MockData';
import { useState } from "react";

const Activity = () => {
    const [date, setDate] = useState(days[0].date);
    const handleDate = (event) => {
        setDate(event.target.value);
    }
    const today = days.find((element) => element.date === date);
    console.log(today);
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
        <ScreenTimeLeft value={10.5}/>
        <TimeBalance screenTime={60} activityTime={120}/>
        <div className='section-title'>
            <h3>Screen time</h3>
        </div>
        {today.screenSessions.map((element, index) => 
            <Card 
                icon='👟'
                title={element.platform}
                text={`${element.games} games - ${element.duration} minutes`}
                key={`screenSession ${index}`}
            />
        )}
        <div className='section-title'>
            <h3>Activities</h3>
        </div>
        {today.activities.map((element, index) => 
            <Card 
                icon='👟'
                title={element.sport}
                text={`${element.steps} steps - ${element.duration} minutes`}
                key={`screenSession ${index}`}
            />
        )}
    </div>
}

export default Activity;