import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {RootState} from '../redux/store';
import {ReactPhotoSphereViewer} from 'react-photo-sphere-viewer';
import { useEffect } from 'react';
import {portfolioActions} from '../redux/slices';


const My360App: React.FC<{onActive360: (img: string) => void;}> = ({onActive360}) => {

    const {img360} = useAppSelector((state: RootState) => state.portfolio);



useEffect(()=>{

},[img360])



    return (

        <div className="panorama" id='panorama'>

            <ReactPhotoSphereViewer src={process.env.PUBLIC_URL +'/'+img360} width="70%" height='60vh' container="panorama" keyboard="always" />

            <button onClick={() => onActive360('')} className="btn-360">Close</button>
        </div >



    );
};

export {My360App};







