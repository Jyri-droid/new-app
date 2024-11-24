import Avatar from '../../Avatar';
import ReportsGraph from './ReportsGraph';
import Tabs from '../../Tabs.jsx';
import Card from '../../Card.jsx';
import { formatHour, formatWeekday, formatDayAndMonth, getDatesBackwards, getHoursBackwards, getMinutesByTypeAndDay, getMinutesByTypeAndDayAndHour, getSessionsByTypeAndDay, formatDate } from '../../utils/sessionUtils';
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
let renderCount = 0;

const Reports = (props) => {
  const [activeTab, setActiveTab] = useState(0);
      // Get render count for creating a new Card on each render
      renderCount++;
  const report = reports[activeTab];
  let dates = report.getTicks(props.today, report.days);
  let screenSessions = [];
  let activitySessions = [];
  if (report.days > 1) {
    screenSessions = dates.map((element) => getSessionsByTypeAndDay('screen', formatDate(element)));
    activitySessions = dates.map((element) => getSessionsByTypeAndDay('activity', formatDate(element)));
  } else {
    screenSessions = getSessionsByTypeAndDay('screen', props.today);
    activitySessions = getSessionsByTypeAndDay('activity', props.today);
  };
  return <div className='content-container'>
    <div className='row'>
        <h2>Reports</h2>
        <Avatar />
    </div>
    <div className='reports-container'>
      <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ReportsGraph report={report} dates={dates} />
    </div>
    {screenSessions.length > 0 && (<>
      <div className='section-title'>
        <h3>Screen time</h3>
      </div>
      {screenSessions.flat().map((element, index) => 
        <Card 
          title={element.platform}
          text={`${element.duration} minutes`}
          key={`screenSession ${index + renderCount}`}
        />
      )}
      </>)}
      {activitySessions.length > 0 && (<>
      <div className='section-title'>
        <h3>Screen time</h3>
      </div>
      {activitySessions.flat().map((element, index) => 
        <Card 
          title={element.sport}
          text={`${element.duration} minutes`}
          key={`activitySession ${index + renderCount}`}
        />
      )}
      </>)}

        
  </div>
}

export default Reports;