import Svg from './Svg.jsx';
import { formatDate, isDividable } from '../../utils/sessionUtils';

const ReportsGraph = ({ report, dates }) => {
    const screenTimeMinutes = [];
    const activityMinutes = [];
    dates.forEach((element) => {
        const date = formatDate(element);
        const hour = new Date(element).getHours();
        const screenTime = report.getMinutes('screen', date, hour);
        const activity = report.getMinutes('activity', date, hour);
        screenTimeMinutes.push({date: element, minutes: screenTime});
        activityMinutes.push({date: element, minutes: activity});
    });
    return <>
        <div className='reports-graph-container'>
            {screenTimeMinutes.map((element, index) => isDividable(index, report.labelInterval) && 
                <div className='reports-graph-interval' key={`interval ${index}`}>
                    {report.formatLabel(element.date)}
                </div>
            )}
            <Svg
                screenTimePath={screenTimeMinutes.map((element) => element.minutes)}
                activityPath={activityMinutes.map((element) => element.minutes)}
                smoothing={0.3}
            />
        </div>
        <div className='reports-legend-container'>
            <div className='reports-legend'><span className='text-yellow'>&#9679;</span>Screen time</div>
            <div className='reports-legend'><span className='text-blue'>&#9679;</span>Activity</div>
        </div>
    </>
}

export default ReportsGraph;