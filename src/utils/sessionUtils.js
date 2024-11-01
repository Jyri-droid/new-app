import sessions from '../utils/sessions';

export const getDateWithoutTime = (dateString) => {
    return dateString.toISOString().split('T')[0];
};

export const getTimeWithoutDate = (dateString) => {
    const time = dateString.toISOString().split('T')[1];
    return time.split(':')[0];
};

export const getDateWithoutTimeAndYear = (dateString) => {
    const date = dateString.toISOString().split('T')[0];
    return `${date.split('-')[2]}/${date.split('-')[1]}`;
};

export const getSessionsByTypeAndDay = (type, dateString) => {
    const sessionsByTypeAndDay = sessions[type].filter((element) => element.startDay === dateString);
    return sessionsByTypeAndDay;
};

export const getTotalTimeByTypeAndDay = (type, dateString) => {
    const sessions = getSessionsByTypeAndDay(type, dateString);
    const totalTime = sessions.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0 );
    return totalTime;
};

export const getUniqueDates = () => {
    const types = ['screen', 'activity'];
    const allDates = [];
    types.forEach((type) => {
        allDates.push(sessions[type].map((element) => element.startDay));
    });
    const uniqueDates = [];
    allDates.flat().forEach((date) => {
       !uniqueDates.includes(date) && uniqueDates.push(date);
    });
    return uniqueDates;
};

export const getMinutesByTypeAndDay = (type, dateString) => {
    const sessionsByTypeAndDay = getSessionsByTypeAndDay(type, dateString);
    const minutes = sessionsByTypeAndDay.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0);
    return minutes;
}

export const getMinutesByTypeAndHour = (type, dateString, hour) => {
    const sessionsByTypeAndDay = getSessionsByTypeAndDay(type, dateString);
    const sessionsByHour = sessionsByTypeAndDay.filter((element) => element.perHour[0].date.getHours() === hour);
    return sessionsByHour;
};

export const getDatesBackwards = (today, days) => {
    const datesBackWards = [];
    for (let i = days; i > 0; i--) {
        const fullDate = new Date(today);
        const date = fullDate.getDate();
        fullDate.setDate(date - i + 1);
        datesBackWards.push(fullDate);
    }
    return datesBackWards;
}

export const isDividable = (number, divider) => {
    return number % divider === 0;
};