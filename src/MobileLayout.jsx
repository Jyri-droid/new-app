const MobileLayout = (props) => {
    return <div className="mobile-container">
        <div className="mobile-content-container">
            {props.children}
        </div>
    </div>
};

export default MobileLayout;