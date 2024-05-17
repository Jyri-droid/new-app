export const days = [
    { 
        date: '16 may',
        screenSessions:
        [
            {
                platform: 'Laptop',
                games: 5,
                duration: 180
            },
            {
                platform: 'Phone',
                games: 3,
                duration: 120
            }
        ],
        activities:
        [
            {
                activity: 'Golf',
                steps: 5000,
                duration: 180
            },
            {
                activity: 'Running',
                steps: 1200,
                duration: 30
            }
        ]
    },
    { 
        date: '15 may',
        screenSessions:
        [
            {
                platform: 'Laptop',
                games: 3,
                duration: 60
            },
            {
                platform: 'Phone',
                games: 20,
                duration: 480
            },
            {
                platform: 'PlayStation',
                games: 1,
                duration: 120
            }
        ],
        activities:
        [
            {
                activity: 'Climbing',
                steps: 2000,
                duration: 120
            }
        ]
    },
    {
        date: '14 may',
        screenSessions:
        [
        ],
        activities:
        [
            {
                activity: 'Golf',
                steps: 5000,
                duration: 180
            },
            {
                activity: 'Running',
                steps: 1200,
                duration: 30
            },
            {
                activity: 'Cycling',
                steps: 1200,
                duration: 30
            }
        ]
    }
];

export const settings = {
    screenVsActivityRatio: 1,
    apps: 
        [
            {
                app: 'Phone calls',
                isScreenTime: true
            },
            {
                app: 'Duolingo',
                isScreenTime: true
            },
            {
                app: 'Brilliant',
                isScreenTime: false
            },
        ],
    activityTrackers:
        [
            {
                activityTracker: 'Polar Vantage M'
            }
        ]
    };