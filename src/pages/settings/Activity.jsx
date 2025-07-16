import Action from '../../Action';

const Activity = (props) => {
    return <>
        <div className='row'>
            <Action onClick={props.handleClickBack}>Back</Action>
        </div>
        <div className='row'>
            <h3>Activity</h3>
        </div>
    </>
};

export default Activity;