const General = () => {
    return <>
        <div className='row'>
            <h3>General</h3>
        </div>
        <div className='row'>
            <Action onClick={handleClickBack}/>
        </div>
        <Stepper 
        name='screenVsActivityRatio'
        value={props.settings.screenVsActivityRatio}
        onChange={handleStepperChange}
        step={1}
        />
        <div className='row'>
        <h3>Apps considered as screen time</h3>
        </div>
        {props.settings.apps.map((app, index) =>
            <ToggleRow 
            value={app.name} 
            checked={app.isScreenTime}
            onChange={handleToggleChange}
            key={`toggleRow ${index}`}
            >
                {app.name}
            </ToggleRow>
        )}
        </>
};

export default General;