import React from 'react';
import RegistrationCard from './RegistrationCard';
import ProjectDescriptionCard from './Details';


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <RegistrationCard />
        <div className="mt-8">
          <ProjectDescriptionCard />
        </div>
      </div>
    </div>
  );
};

export default App;
