import MenuItem from './MenuItem';
import { useState } from "react";
import IconHourglassActive from './assets/IconHourglassActive';
import IconHourglassDefault from './assets/IconHourglassDefault';
import IconFamilyDefault from './assets/IconFamilyActive';
import IconFamilyActive from './assets/IconFamilyDefault';
import IconWaveformDefault from './assets/IconWaveformDefault';
import IconWaveformActive from './assets/IconWaveformActive';

const menuItems = [
    {
        text: 'Activity', 
        navigateTo: '/new-app/activity', 
        defaultIcon: <IconHourglassDefault />, 
        activeIcon: <IconHourglassActive />
    }, {
        text: 'Recap', 
        navigateTo: '/new-app/recap', 
        defaultIcon: <IconWaveformDefault />, 
        activeIcon: <IconWaveformActive />
    }, {
        text: 'Family', 
        navigateTo: '/new-app/family', 
        defaultIcon: <IconFamilyDefault />, 
        activeIcon: <IconFamilyActive />
    },
];

const Menu = () => {
    const [active, setActive] = useState(0);
    return <div className='menu-container'>
        {menuItems.map((element, index) => 
            <MenuItem
                navigateTo={element.navigateTo}
                defaultIcon={element.defaultIcon}
                activeIcon={element.activeIcon}
                active={active}
                setActive={setActive} 
                index={index}
                key={`menuItem ${index}`} 
            >
                {element.text}
            </MenuItem>
        )}
    </div>
}

export default Menu;

