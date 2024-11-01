import Avatar from '../../Avatar';
import ReportsGraph from './ReportsGraph';

const Reports = (props) => {
  return <div className='content-container'>
    <div className='row'>
        <h2>Reports</h2>
        <Avatar />
    </div>
    <ReportsGraph today={props.today}/>
  </div>;
}

export default Reports;