import React, {useState} from 'react';
import './header.css';
import {INavLink} from '../../interfaces';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routing/AppRoutes';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import {useEffect} from 'react';
import {portfolioActions} from '../../redux/slices';


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
    const [show, setShow] = useState(true);
    const {showBurger, showMenuMedia} = useAppSelector((state: RootState) => state.portfolio);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const dispatch = useAppDispatch();

    const onActiveBtn = (id: number) => {
        setActiveBtn(id);
    };

    //  const mediaQuery = window.matchMedia('(max-width: 768px)');

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 768) {
            dispatch(portfolioActions.setShowBurger(true));
        } else {
            dispatch(portfolioActions.setShowBurger(false));
        }
    }, [windowWidth, dispatch]);

    const onShowMenuMedia = () => {
        dispatch(portfolioActions.setShowMenuMedia());
        setShow(!show)
    };

    return (
        <div className="header">
            {showBurger &&
                <div className="menu-media">
                    <Link to="/" className="logo" >Juli-Des</Link>
                    <div className="menu-icon" onClick={() => onShowMenuMedia()}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>}
            {showMenuMedia && (
                <ul className={`menu-ul-media ${show? 'show' : ''}`}>
                    {navLinks.map((item: INavLink) =>
                        item.id !== 1 ? (
                            <Link
                                to={item.path}
                                className={item.id === activeBtn ? 'menu-li active' : 'menu-li'}
                                key={item.id}
                                onClick={() => onActiveBtn(item.id)}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            ''
                        )
                    )}
                </ul>
            )}



            {!showBurger && <ul className="menu-ul">{
                navLinks.map((item: INavLink) => <Link to={item.path} className={item.id === activeBtn ? 'menu-li  active' : 'menu-li'} key={item.id} onClick={() => onActiveBtn(item.id)}>{item.name}</Link>)
            }</ul>}

        </div>
    );
};

export {Header};