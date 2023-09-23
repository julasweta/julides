import React from 'react';
import {ReactPhotoSphereViewer} from 'react-photo-sphere-viewer'; // Підключення стилів


const My360App: React.FC<{img: string, onActive360: (img: string) => void;}> = ({img, onActive360}) => {


    return (
    
            <div className="panorama" id='panorama'>
                <ReactPhotoSphereViewer src="images/panorama2.jpg" width="70%" height='60vh' container="panorama" />
                <button onClick={() => onActive360('')} className="btn-360">Close</button>
            </div >
        
    

    );
};

export {My360App};







