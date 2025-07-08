import Card from "../../Card";

const Menu = (props) => {
    return <>
        <Card
            link
            title={<h3>General</h3>}
            onClick={() => props.setView(1)}
        >
            <p className='greyText'>Set your rules</p>
        </Card>
        <Card
            link
            title={<h3>Screen time</h3>}
            onClick={() => props.setView(1)}
        >
            <p className='greyText'>Your screen time apps and limits</p>
        </Card>
        <Card
            link
            title={<h3>Activity</h3>}
            onClick={() => props.setView(1)}
        >
            <p className='greyText'>Your activity devices and goals</p>
        </Card>
    </>
}

export default Menu;