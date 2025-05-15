import Svg from './Svg.jsx';
import { formatDate, isDividable } from '../../utils/sessionUtils.js';

const RecapGraph = ({ report, dates }) => {

    const getDatesAndMinutesByType = (type, dates) => {
        const array = [];
        dates.forEach((date) => {
            const dateAsISOstring = formatDate(date);
            const hour = new Date(date).getHours();
            const minutes = report.getMinutes(type, dateAsISOstring, hour);
            array.push({date: date, minutes: minutes});
        });
        return array;
    };
    console.log("with function: " + JSON.stringify(getDatesAndMinutesByType("screen", dates)));
    return <>
        <div className='reports-graph-container'>
            {getDatesAndMinutesByType("screen", dates).map((element, index) => isDividable(index, report.labelInterval) && 
                <div className='reports-graph-interval' key={`interval ${index}`}>
                    {report.formatLabel(element.date)}
                </div>
            )}
            <Svg
                screenTimePath={getDatesAndMinutesByType("screen", dates).map((element) => element.minutes)}
                activityPath={getDatesAndMinutesByType("activity", dates).map((element) => element.minutes)}
                smoothing={0.3}
            />
        </div>
        <div className='reports-legend-container'>
            <div className='reports-legend'><span className='text-yellow'>&#9679;</span>Screen time</div>
            <div className='reports-legend'><span className='text-blue'>&#9679;</span>Activity</div>
        </div>
    </>
}

export default RecapGraph;