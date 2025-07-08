import Card from "../../Card";
import { formatDate } from "../../utils/sessionUtils";

const dateOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
};

const Entries = ({ dates, report }) => {
    const screenTimeMinutes = [];
    const activityMinutes = [];
    dates.forEach((element) => {
        const date = formatDate(element);
        const hour = new Date(element).getHours();
        const screenTime = report.getMinutes('screen', date, hour);
        const activity = report.getMinutes('activity', date, hour);
        screenTimeMinutes.push({date: element, minutes: screenTime});
        activityMinutes.push({date: element, minutes: activity});
    });
    return <><h3>Entries</h3>
    {activityMinutes.map((element, index) => (
        (element.minutes > 0 || screenTimeMinutes[index].minutes > 0) &&
        <Card
            /* expander */
            title={<h4>{element.date.toLocaleDateString('en-EN', dateOptions)}</h4>}
            icon="Success"
            key={`entry ${index}`}
        >
            <small><strong>{element.minutes}</strong> min screen time | <strong>{screenTimeMinutes[index].minutes}</strong> min activity</small>
        </Card>
    ))}

    </>
}

export default Entries;