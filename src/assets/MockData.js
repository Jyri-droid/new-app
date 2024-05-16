/* suhdeluku ruutuaika vs aktiivisuus
mitkä sovellukset kerryttää ruutuaikaa
aktiivisuuden mittauslaitteet puhelimen lisäksi
/-> Lisää uusi laite */

/* Mallipäivä:
Screen time:
Pleikka 5 peliä • 30 min
Läppäri 3 peliä • 2h
Puhelin 4 peliä • Selain • 2h
Aktiivisuus:
Golf 2h
Juoksu 45 min
*/

export const MockDay = [
    { 
        date: '16 may',
        screenTime:
        [
            {
                platform: 'Laptop',
                games: 5,
                browser: 30,
                duration: 180
            },
            {
                platform: 'Laptop',
                games: 5,
                browser: 30,
                duration: 180
            }
        ],
        activity:
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
    }
]

export const mockSettings = {
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