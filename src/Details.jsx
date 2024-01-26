import React from 'react';
import Card from './component/Card';

const ProjectDescriptionCard = () => {
    return (

        <Card
        title={'This is Atomic Design Pattern in React'}>
            
            <div className='text-bold text-red-600 text-center flex flex-col items-center'>
                <img className='w-full' src="https://miro.medium.com/v2/resize:fit:1400/1*U-jFHRJxePDHHBWtd19M8g.png" alt="Atomic Design Pattern" />
            </div>
        </Card>

    );
};

export default ProjectDescriptionCard;
