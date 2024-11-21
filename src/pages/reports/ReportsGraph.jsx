import Tabs from '../../Tabs.jsx';
import Svg from './Svg.jsx';
import { formatDate, formatHour, formatWeekday, formatDayAndMonth, getDatesBackwards, getHoursBackwards, getMinutesByTypeAndDay, getMinutesByTypeAndDayAndHour, isDividable } from '../../utils/sessionUtils';
import { useState } from "react";

const reports = [
    {
        name: 'Day',
        days: 1,
        labelInterval: 2,
        formatLabel: formatHour,
        getTicks: getHoursBackwards,
        getMinutes: getMinutesByTypeAndDayAndHour
    },
    {
        name: 'Week', 
        days: 7,
        labelInterval: 1,
        formatLabel: formatWeekday,
        getTicks: getDatesBackwards,
        getMinutes: getMinutesByTypeAndDay
    }, 
    {
        name: 'Month',
        days: 31,
        labelInterval: 4,
        formatLabel: formatDayAndMonth,
        getTicks: getDatesBackwards,
        getMinutes: getMinutesByTypeAndDay
    }
];
const tabNames = reports.map((element) => element.name);

const ReportsGraph = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const report = reports[activeTab];
    const ticks = report.getTicks(props.today, report.days);
    const screenTimeMinutes = [];
    const activityMinutes = [];
    ticks.forEach((element) => {
        const date = formatDate(element);
        const hour = new Date(element).getHours();
        const screenTime = report.getMinutes('screen', date, hour);
        const activity = report.getMinutes('activity', date, hour);
        screenTimeMinutes.push({date: element, minutes: screenTime});
        activityMinutes.push({date: element, minutes: activity});
    });
    return <div className='reports-container'>
        <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className='reports-graph-container'>
            {screenTimeMinutes.map((element, index) => isDividable(index, report.labelInterval) && 
                <div className='reports-graph-interval' key={`interval ${index}`}>
                    {report.formatLabel(element.date)}
                </div>
            )}
            <Svg
                screenTimePath={screenTimeMinutes.map((element) => element.minutes)}
                activityPath={activityMinutes.map((element) => element.minutes)}
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