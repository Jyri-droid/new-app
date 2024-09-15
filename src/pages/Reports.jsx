import Avatar from '../Avatar';
import ReportsGraph from '../ReportsGraph';

const Reports = () => {

  return <div className='content-container'>
    <div className='row'>
        <h2>Reports</h2>
        <Avatar />
    </div>
    <ReportsGraph />
  </div>;
}

export default Reports;