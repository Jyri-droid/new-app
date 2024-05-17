const icons = [
    {
        name: 'default',
        icon: '😀'
    },
    {
        name: 'Tennis',
        icon: '🎾'
    },
    {
        name: 'Golf',
        icon: '⛳️'
    },
    {
        name: 'Running',
        icon: '👟'
    },
    {
        name: 'PlayStation',
        icon: '🎮'
    },
    {
        name: 'Cycling',
        icon: '🚲'
    },
    {
        name: 'Laptop',
        icon: '💻'
    },
    {
        name: 'Phone',
        icon: '📱'
    },
    {
        name: 'Climbing',
        icon: '🧗‍♂️'
    },
];


export const getIconByName = (name) => {
    const object = icons.find((element) => element.name === name);
    return object ? object.icon : icons[0].icon;
}

