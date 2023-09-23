import React, {useState} from 'react';
import './header.css';
import {INavLink} from '../../interfaces';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routing/AppRoutes';


const Header = () => {
    const navLinks: INavLink[] = [
        {
            id: 1,
            name: 'Dream Design by Julianna',
            path: AppRoutes.HOME,
        },
        {
            id: 2,
            name: 'Portfolio',
            path: AppRoutes.ITEMS,
        },
        {
            id: 3,
            name: 'Contacts',
            path: AppRoutes.CONTACTS,
        },
        {
            id: 4,
            name: 'Orders',
            path: AppRoutes.ORDERS,
        },
    ];
    const [activeBtn, setActiveBtn] = useState(1);

    const onActiveBtn = (id: number) => {
        setActiveBtn(id);
    };
    console.log(activeBtn);
    return (
        <div className="header">
            <ul className="menu-ul">{
                navLinks.map((item: INavLink) => <Link to={item.path} className={item.id === activeBtn ? 'menu-li  active' : 'menu-li'} key={item.id} onClick={() => onActiveBtn(item.id)}>{item.name}</Link>)
            }</ul>

        </div>
    );
};

export {Header};