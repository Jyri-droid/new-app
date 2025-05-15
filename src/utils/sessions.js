//import { formatDate } from "./sessionUtils";

const formatDate = (dateString) => {
    return dateString.toISOString().split('T')[0];
};

class Session {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    get startDate() {
        return new Date(this.start);
    }
    get startDay() {
        return formatDate(this.startDate);
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
                date: new Date(endDateWithEvenHour),
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
    ['2024-05-15T10:00:00', '2024-05-15T11:00:00', 'PlayStation'],
    ['2024-05-14T12:00:00', '2024-05-14T13:00:00', 'Phone'],
    ['2024-05-13T12:00:00', '2024-05-13T13:00:00', 'PlayStation'],
    ['2024-05-12T12:15:00', '2024-05-12T15:20:00', 'Laptop'],
    ['2024-05-11T13:15:00', '2024-05-11T14:17:00', 'Phone'],
    ['2024-05-10T07:00:00', '2024-05-10T13:00:00', 'PlayStation'],
    ['2024-05-09T12:00:00', '2024-05-09T13:00:00', 'Phone'],
    ['2024-05-08T12:00:00', '2024-05-08T13:00:00', 'PlayStation'],
];

const mockActivitySessions = [
    ['2024-05-16T10:00:00', '2024-05-16T14:00:00', 'Golf'],
    ['2024-05-16T12:10:00', '2024-05-16T13:47:00', 'Climbing'],
    ['2024-05-16T15:00:00', '2024-05-16T15:59:00', 'Running'],
    ['2024-05-16T15:00:00', '2024-05-16T16:00:00', 'Tennis'],
    ['2024-05-16T17:01:00', '2024-05-16T18:03:00', 'Cycling'],
    ['2024-05-15T22:50:00', '2024-05-15T23:00:00', 'Running'],
    ['2024-05-15T15:00:00', '2024-05-15T16:00:00', 'Tennis'],
    ['2024-05-14T14:00:00', '2024-05-14T18:00:00', 'Climbing'],
    ['2024-05-13T13:00:00', '2024-05-13T18:00:00', 'Running'],
    ['2024-05-12T12:00:00', '2024-05-12T14:00:00', 'Tennis'],
    ['2024-05-11T11:00:00', '2024-05-11T18:00:00', 'Climbing'],
    ['2024-05-10T10:00:00', '2024-05-10T18:00:00', 'Running']
];

mockScreenSessions.forEach((element) => sessions.screen.push(new ScreenSession(...element)));
mockActivitySessions.forEach((element) => sessions.activity.push(new ActivitySession(...element)));

const testSession = sessions.screen[0];
console.log("startDate: " + testSession.startDate, "startDay: " + testSession.startDay, "duration: " + testSession.duration, "perHour: " + JSON.stringify(testSession.perHour));
export default sessions;