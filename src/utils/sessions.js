import { getDateWithoutTime } from "./sessionUtils";

class Session {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    get startDate() {
        const startDate = new Date(this.start);
        return startDate;
    }
    get startDay() {
        return getDateWithoutTime(this.startDate);
    }
    get duration() {
        const end = new Date(this.end);
        return (end - this.startDate) / 60000;
    }
    get perHour() {
        const sessions = [];
        // Start
        const startDateWithEvenMinutes = new Date(this.startDate);
        startDateWithEvenMinutes.setMinutes(0);
        sessions.push({
            date: startDateWithEvenMinutes,
            minutes: 60 - this.startDate.getMinutes()
        });
        // Hours in the middle
        const startHour = this.startDate.getHours();
        const endDate = new Date(this.end);
        const endHour = endDate.getHours();
        const hourAmount = endHour - startHour;
        if (hourAmount > 2) {
            for (let hour = startHour + 1; hour < endHour - 1; hour++) {
                const date = new Date(this.startDate);
                date.setHours(hour);
                date.setMinutes(0);
                sessions.push({
                    date: date,
                    minutes: 60
                });
            }
        }
        // End
        if (hourAmount > 1) {
            const endDateWithEvenHour = endDate.setHours(0);
            const minutes = endDate.getMinutes();
            sessions.push({
                date: endDateWithEvenHour,
                minutes: minutes
            });
        }
        return sessions;
    }
}

class ScreenSession extends Session {
    constructor(start, end, platform) {
        super(start, end);
        this.platform = platform;
    }
}

class ActivitySession extends Session {
    constructor(start, end, sport) {
        super(start, end);
        this.sport = sport;
    }
}
const sessions = {
    screen: [],
    activity: []
};

const mockScreenSessions = [
    ['2024-05-16T12:15:00', '2024-05-16T15:20:00', 'Laptop'],
    ['2024-05-16T13:00:00', '2024-05-16T14:00:00', 'Phone'],
    ['2024-05-15T12:00:00', '2024-05-15T13:00:00', 'PlayStation'],
    ['2024-05-14T12:00:00', '2024-05-14T13:00:00', 'Phone'],
    ['2024-05-13T12:00:00', '2024-05-13T13:00:00', 'PlayStation'],
];

const mockActivitySessions = [
    ['2024-05-16T12:00:00', '2024-05-16T14:00:00', 'Golf'],
    ['2024-05-16T16:00:00', '2024-05-16T18:00:00', 'Climbing'],
    ['2024-05-14T16:00:00', '2024-05-14T18:00:00', 'Running']
];

mockScreenSessions.forEach((element) => sessions.screen.push(new ScreenSession(...element)));
mockActivitySessions.forEach((element) => sessions.activity.push(new ActivitySession(...element)));

console.log('hours: ' + JSON.stringify(sessions.screen[0].perHour));
export default sessions;