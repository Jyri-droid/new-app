const getHoursFromMinutes = (minutes) => {
    if (!minutes) {return 0};
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const minsToHrs = mins !== 0 ? `.${(mins / 60 * 10).toFixed()}` : '';
    return `${hrs + minsToHrs}`
}
export default getHoursFromMinutes;