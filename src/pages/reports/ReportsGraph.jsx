import Tabs from '../../Tabs.jsx';
import Svg from './Svg.jsx';
import { useState } from "react";

const reportTypes = [
    {
        name: 'Day',
        intervals:  ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24']
    }, 
    {
        name: 'Week', 
        intervals:  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }, 
    {
        name: 'Month',
        intervals: ['', '', '', '', '', '', '']
    }
];

const tabNames = reportTypes.map((element) => element.name);

const ReportsGraph = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const intervalsOfActiveTab = reportTypes[activeTab].intervals;
    return <div className='reports-container'>
        <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className='reports-graph-container'>
            {intervalsOfActiveTab.map((element, index) => 
            <div className='reports-graph-interval' key={`interval ${index}`}>
                {element}
            </div>)}
            <Svg path1={[50, 75, 10, 20, 50]} path2={[25, 0, 65, 90]} smoothing={0.5} />
        </div>
        <div className='reports-legend-container'>
            <div className='reports-legend'><span className='text-blue'>&#9679;</span>Activity</div>
            <div className='reports-legend'><span className='text-yellow'>&#9679;</span>Screen time</div>
        </div>
    </div>
}

export default ReportsGraph;