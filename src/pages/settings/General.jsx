import Action from '../../Action';
import Stepper from "../../Stepper";

const General = (props) => {

    const handleStepperChange = (event) => {
        console.log(event);
    /*     const copy = {...props.settings};
        copy[event.target.name] = event.target.value;
        props.setSettings(copy); */
    };

    return <>
        <div className='row'>
            <Action onClick={props.handleClickBack}>Back</Action>
      </div>
        <div className='row'>
            <h3>General</h3>
        </div>
        <Stepper 
            name='screenVsActivityRatio'
            value={props.settings.screenVsActivityRatio}
            onChange={handleStepperChange}
            step={1}
        />
        </>
};

export default General;