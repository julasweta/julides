import React, {useEffect, useState} from 'react';
import {My360App} from '../components/My360App';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {RootState} from '../redux/store';
import {portfolioActions} from '../redux/slices';
import {Card} from '../components/cards/Card';
import {ICard} from '../interfaces/globalInterface';

const ItemsPage = () => {
    const {portfolio, img360} = useAppSelector((state: RootState) => state.portfolio);
    const dispatch = useAppDispatch();
    const [active360, setActive360] = useState(false);

    useEffect(() => {
        dispatch(portfolioActions.getPortfolio());
    }, [dispatch]);
    console.log(portfolio);

    const onActive360 = (img: string) => {
        setActive360(!active360);
        dispatch(portfolioActions.setImg360(img));
         // Прокрутити сторінку до верхньої частини
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };




    return (
        <div className="portfolio">

            {portfolio && portfolio.map((card: ICard) => <Card card={card} key={card.id} onActive360={onActive360} />)}


            <div className={active360 ? "box-360 active-box-360" : "box-360"}>
            {img360 && <My360App onActive360={onActive360} />}
            </div>

        </div>

    );
};

export {ItemsPage};