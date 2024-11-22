import TabButton from "./TabButton";

const Tabs = (props) => {
    const handleChange = (index) => {
        props.setActiveTab(index);
    };
    return <div className='tabs-container'>
        {props.tabs.map((element, index) => 
            <TabButton 
                active={props.activeTab === index}
                onClick={() => handleChange(index)}
                key={`tabButton ${index}`}
            >
                {element}
            </TabButton>
        )}
    </div>
}

export default Tabs;