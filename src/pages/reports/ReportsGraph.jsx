import Tabs from '../../Tabs.jsx';
import Svg from './Svg.jsx';
import { getDateWithoutTimeAndYear, getDateWithoutTime, getTimeWithoutDate, getDatesBackwards, getMinutesByTypeAndDay, isDividable } from '../../utils/sessionUtils';
import { useState } from "react";

const reports = [
    {
        name: 'Day',
        days: 1,
        labelFormat: getTimeWithoutDate,
        labelInterval: 1
    },
    {
        name: 'Week', 
        days: 7,
        labelFormat: getDateWithoutTimeAndYear,
        labelInterval: 1
    }, 
    {
        name: 'Month',
        days: 31,
        labelFormat: getDateWithoutTimeAndYear,
        labelInterval: 5
    }
];
const tabNames = reports.map((element) => element.name);

const ReportsGraph = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const report = reports[activeTab];
    const datesBackwards = getDatesBackwards(props.today, report.days);
    const minutes = [];
    datesBackwards.forEach((element) => {
        const dateWithoutTime = getDateWithoutTime(element);
        const minutesPerDay = getMinutesByTypeAndDay('screen', dateWithoutTime);
        minutes.push({date: element, minutes: minutesPerDay});
    });

    return <div className='reports-container'>
        <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className='reports-graph-container'>
            {minutes.map((element, index) => isDividable(index, report.labelInterval) && 
                <div className='reports-graph-interval' key={`interval ${index}`}>
                    {report.labelFormat(element.date)}
                </div>
            )}
            <Svg 
                screenTimePath={minutes.map((element) => element.minutes)}
                activityPath={minutes.map((element) => element.minutes)}
                smoothing={0.8} 
            />
        </div>
        <div className='reports-legend-container'>
            <div className='reports-legend'><span className='text-yellow'>&#9679;</span>Screen time</div>
            <div className='reports-legend'><span className='text-blue'>&#9679;</span>Activity</div>
        </div>
    </div>
}

export default ReportsGraph;

/* 
            <Svg 
                screenTimePath={minutesPerDays}
                activityPath={minutesPerDays}
                smoothing={0.4} 
            />
            */