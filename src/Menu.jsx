import MenuItem from './MenuItem';
import { useState } from "react";

const Menu = () => {
    const [active, setActive] = useState(0);
    const items = [
        {text: 'Activity', navigateTo: '/', defaultIcon: '􀖇', activeIcon: '􀖉'},
        {text: 'Settings', navigateTo: '/settings', defaultIcon: '􀣋', activeIcon: '􀣌'},
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

