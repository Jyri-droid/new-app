import Avatar from '../../Avatar.js';
import RecapGraph from './RecapGraph.jsx';
import Tabs from '../../Tabs.jsx';
import Entries from './Entries.jsx';
import { formatHour, formatWeekday, formatDayAndMonth, getDatesBackwards, getHoursBackwards, getMinutesByTypeAndDay, getMinutesByTypeAndDayAndHour } from '../../utils/sessionUtils.js';
import { useState } from "react";

const reports = [
  {
      name: 'Day',
      days: 1,
      labelInterval: 3,
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
      labelInterval: 5,
      formatLabel: formatDayAndMonth,
      getTicks: getDatesBackwards,
      getMinutes: getMinutesByTypeAndDay
  }
];
const tabNames = reports.map((element) => element.name);

const Recap = (props) => {
  
  const [activeTab, setActiveTab] = useState(0);
  const report = reports[activeTab];
  let dates = report.getTicks(props.today, report.days);

  return <div className='content-container'>
    <div className='row'>
        <h2>Recap</h2>
        <Avatar onClick={props.handleOpenSettings} />
    </div>
    <div className='reports-container'>
      <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
      <RecapGraph report={report} dates={dates} />
    </div>
    <div className='section-title'>
      <Entries report={report} dates={dates} />
    </div>
        
  </div>
};

export default Recap;