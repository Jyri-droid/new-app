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
                sport: 'Golf',
                steps: 5000,
                duration: 180
            },
            {
                sport: 'Running',
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
                platform: 'PlayStation',
                games: 1,
                duration: 120
            }
        ],
        activities:
        [
            {
                sport: 'Climbing',
                steps: 2000,
                duration: 120
            },
            {
                sport: 'Cycling',
                steps: 1000,
                duration: 360
            }
        ]
    }
]

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