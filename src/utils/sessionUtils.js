import sessions from '../utils/sessions';

export const getDate = (dateString) => {
    return dateString.toISOString().split('T')[0];
};

export const getHour = (dateString) => {
    const time = dateString.toISOString().split('T')[1];
    return time.split(':')[0];
};

export const getWeekday = (dateString) => {
    return dateString.toLocaleDateString('en-EN', { weekday: 'short' });
}

export const getDayAndMonth = (dateString) => {
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

export const getMinutesByTypeAndDayAndHour = (type, dateString, hour) => {
    const sessionsByTypeAndDay = getSessionsByTypeAndDay(type, dateString);
    const sessionsByHour = sessionsByTypeAndDay.filter((element) => element.perHour[0].date.getHours() === hour);
    return sessionsByHour;
};

export const getDatesBackwards = (today, days) => {
    const datesBackwards = [];
    for (let i = days; i > 0; i--) {
        const fullDate = new Date(today);
        const date = fullDate.getDate();
        fullDate.setDate(date - i + 1);
        datesBackwards.push(fullDate);
    }
    return datesBackwards;
}

export const getHoursBackwards = (today) => {
    const hoursBackwards = [];
    for (let i = 24; i > 0; i--) {
        const date = new Date(today);
        date.setHours(i);
        hoursBackwards.push(date);
    }
    return hoursBackwards;
}

export const isDividable = (number, divider) => {
    return number % divider === 0;
};