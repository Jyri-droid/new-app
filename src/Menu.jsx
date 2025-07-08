import MenuItem from './MenuItem';
import { useState } from "react";
import IconHourglassActive from './assets/IconHourglassActive';
import IconHourglassDefault from './assets/IconHourglassDefault';
import IconFamilyDefault from './assets/IconFamilyDefault';
import IconFamilyActive from './assets/IconFamilyActive';
import IconWaveformDefault from './assets/IconWaveformDefault';
import IconWaveformActive from './assets/IconWaveformActive';

const menuItems = [
    {
        text: 'Activity', 
        navigateTo: '/', 
        defaultIcon: <IconHourglassDefault />, 
        activeIcon: <IconHourglassActive />
    }, {
        text: 'Recap', 
        navigateTo: '/recap', 
        defaultIcon: <IconWaveformDefault />, 
        activeIcon: <IconWaveformActive />
    }, {
        text: 'Family', 
        navigateTo: '/family', 
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

