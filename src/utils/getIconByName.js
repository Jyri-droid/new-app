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
    {
        name: 'Success',
        icon: '🔥'
    },
    {
        name: "Phone",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/09/09/6409090d-8811-e92f-2ebf-37f842b72e98/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp"
    },
    {
        name: "Brilliant",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/90/5a/cf/905acf3c-dba2-0e1f-20cd-0a5fe261a27e/AppIcon-0-0-1x_U007epad-0-1-0-85-220.jpeg/246x0w.webp" 
    },
    {
        name: "Duolingo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d5/9a/7f/d59a7fd2-f97e-b4cd-db0b-53bd66f8d6bd/AppIcon-0-0-1x_U007epad-0-1-85-220.png/246x0w.webp"
    },
        {
        name: "Clash of Clans",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/d6/6a/ded66a02-d856-3006-09b4-a90969848ee5/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp"
    },
        {
        name: "Pokémon GO",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4f/25/4b/4f254b23-ef77-0a7c-d2ab-e80dc01d9778/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp"
    }
];

export const getIconByName = (name) => {
    const object = icons.find((element) => element.name === name);
    return object ? object.icon : icons[0].icon;
};

