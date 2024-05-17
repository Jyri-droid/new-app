import Avatar from '../Avatar';
import Select from '../Select';
import ScreenTimeLeft from '../ScreenTimeLeft';
import TimeBalance from '../TimeBalance';
import Card from '../Card';

const Activity = () => {

    return <div className='content-container'>
        <div className='row'>
            <h2>Activity</h2>
            <Avatar />
        </div>
        <div className='row'>
            <Select />
        </div>
        <ScreenTimeLeft value={10.5}/>
        <TimeBalance screenTime={60} activityTime={120}/>
        <div className='row'>
            <h3>Screen time</h3>
        </div>
        <Card 
            icon='👟'
            title='Running'
            text='1200 steps - 30 minutes'
        />
    </div>
}

export default Activity;