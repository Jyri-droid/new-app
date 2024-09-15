import MenuItem from './MenuItem';
import { useState } from "react";
import IconHourglassActive from './assets/IconHourglassActive';
import IconHourglassDefault from './assets/IconHourglassDefault';
import IconGearDefault from './assets/IconGearDefault';
import IconGearActive from './assets/IconGearActive';

const Menu = () => {
    const [active, setActive] = useState(0);
    const items = [
        {text: 'Activity', navigateTo: '/', defaultIcon: <IconHourglassDefault />, activeIcon: <IconHourglassActive />},
        {text: 'Reports', navigateTo: '/reports', defaultIcon: <IconHourglassDefault />, activeIcon: <IconHourglassActive />},
        {text: 'Settings', navigateTo: '/settings', defaultIcon: <IconGearDefault />, activeIcon: <IconGearActive />},
    ];
    return <div className='menu-container'>
        {items.map((element, index) => 
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

