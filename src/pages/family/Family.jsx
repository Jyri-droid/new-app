import Avatar from "../../Avatar";

const Family = (props) => {
    return <div className='content-container'>
        <div className='row'>
            <h2>Family</h2>
            <Avatar onClick={props.handleOpenSettings} />
        </div>
    </div>
};

export default Family;