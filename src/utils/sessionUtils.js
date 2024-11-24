import sessions from '../utils/sessions';

export const formatDate = (dateString) => {
    return dateString.toISOString().split('T')[0];
};

export const formatHour = (dateString) => {
    const time = dateString.toISOString().split('T')[1];
    return time.split(':')[0];
};

export const formatWeekday = (dateString) => {
    return dateString.toLocaleDateString('en-EN', { weekday: 'short' });
}

export const formatDayAndMonth = (dateString) => {
    const date = dateString.toISOString().split('T')[0];
    return `${date.split('-')[2]}/${date.split('-')[1]}`;
};

export const getSessionsByTypeAndDay = (type, dateString) => {
    return sessions[type].filter((element) => element.startDay === dateString);;
};

export const getTotalTimeByTypeAndDay = (type, dateString) => {
    const sessionsOfDay = getSessionsByTypeAndDay(type, dateString);
    const totalTime = sessionsOfDay.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0 );
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
    const sessionsOfDay = getSessionsByTypeAndDay(type, dateString);
    const minutes = sessionsOfDay.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0);
    return minutes;
}

export const getMinutesByTypeAndDayAndHour = (type, dateString, hour) => {
    const sessionsOfDay = getSessionsByTypeAndDay(type, dateString);
    const sessionsPerHours = sessionsOfDay.map((element) => element.perHour);
    const sessionsOfHour = sessionsPerHours.flat().filter((element) => {
        const date = new Date(element.date);
        return element.date.getHours() === hour;
    });
    const minutes = sessionsOfHour.reduce((accumulator, currentValue) => accumulator + currentValue.minutes, 0)
    return minutes;
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
    for (let i = 23; i >= 0; i--) {
        const date = new Date(today);
        const timezoneOffset = date.getTimezoneOffset()/ 60;
        date.setHours(i - timezoneOffset);
        hoursBackwards.push(date);
    }
    return hoursBackwards;
}

export const isDividable = (number, divider) => {
    return number % divider === 0;
};