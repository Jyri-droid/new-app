import sessions from '../assets/MockSessions';

export const getSessionsByTypeAndDay = (type, dateString) => {
    const sessionsByTypeAndDay = sessions[type].filter((element) => element.startDate === dateString);
    console.log('getSessionsByTypeAndDay: ' + JSON.stringify(sessionsByTypeAndDay));
    return sessionsByTypeAndDay;
}

export const getTotalTimeByTypeAndDay = (type, dateString) => {
    const sessions = getSessionsByTypeAndDay(type, dateString);
    const totalTime = sessions.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0 );
    console.log('getTotalTimeByTypeAndDay: ' + type, totalTime);
    return totalTime;
}

export const getUniqueDates = () => {
    const types = ['screen', 'activity'];
    const allDates = [];
    types.forEach((type) => {
        allDates.push(sessions[type].map((element) => element.startDate));
    });
    const uniqueDates = [];
    console.log('All dates: ' + JSON.stringify(allDates));
    allDates.flat().forEach((date) => {
       !uniqueDates.includes(date) && uniqueDates.push(date);
    });
    return uniqueDates;
}