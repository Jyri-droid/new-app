class Session {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    get startDate() {
        const startDate = new Date(this.start);
        return startDate.toISOString().split('T')[0];
    }
    get duration() {
        const startDate = new Date(this.start);
        const endDate = new Date(this.end);
        return (endDate - startDate) / 60000;
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
}

sessions.screen.push(new ScreenSession('2024-05-16T12:00:00Z', '2024-05-16T13:00:00Z', 'Laptop'));
sessions.screen.push(new ScreenSession('2024-05-16T13:00:00Z', '2024-05-16T14:00:00Z', 'Phone'));
sessions.screen.push(new ScreenSession('2024-05-15T12:00:00Z', '2024-05-15T13:00:00Z', 'PlayStation'));
sessions.activity.push(new ActivitySession('2024-05-16T12:00:00Z', '2024-05-16T14:00:00Z', 'Golf'));
sessions.activity.push(new ActivitySession('2024-05-16T16:00:00Z', '2024-05-16T18:00:00Z', 'Climbing'));

export default sessions;