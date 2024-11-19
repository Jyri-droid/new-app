import Tabs from '../../Tabs.jsx';
import Svg from './Svg.jsx';
import { getDate, getHour, getWeekday, getDayAndMonth, getDatesBackwards, getHoursBackwards, getMinutesByTypeAndDay, isDividable } from '../../utils/sessionUtils';
import { useState } from "react";

const reports = [
    {
        name: 'Day',
        days: 1,
        labelFormat: getHour,
        tickMethod: getHoursBackwards,
        labelInterval: 2
    },
    {
        name: 'Week', 
        days: 7,
        labelFormat: getWeekday,
        tickMethod: getDatesBackwards,
        labelInterval: 1
    }, 
    {
        name: 'Month',
        days: 31,
        labelFormat: getDayAndMonth,
        tickMethod: getDatesBackwards,
        labelInterval: 4
    }
];
const tabNames = reports.map((element) => element.name);

const ReportsGraph = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const report = reports[activeTab];
    const ticks = report.tickMethod(props.today, report.days);
    const minutes = [];
    ticks.forEach((element) => {
        const date = getDate(element);
        const minutesPerTick = getMinutesByTypeAndDay('screen', date);
        minutes.push({date: element, minutes: minutesPerTick});
    });
    console.log('Minutes: ' + JSON.stringify(minutes));
    console.log('getHoursBackwards: ' + getHoursBackwards(props.today));
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
                smoothing={0.4} 
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