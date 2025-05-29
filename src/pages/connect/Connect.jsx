import Avatar from "../../Avatar";

const Connect = (props) => {
    return <div className='content-container'>
        <div className='row'>
            <h2>Connect</h2>
            <Avatar onClick={props.handleOpenSettings} />
        </div>
    </div>
};

export default Connect;