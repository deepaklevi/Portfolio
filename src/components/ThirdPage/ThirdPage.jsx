import React from 'react';
import './ThirdPage.css';

const ThirdPage = () => {
  return (
    <div className='educational_content'> {/* Fixed typo */}
      <div className='educational_contentContainer'> {/* Fixed typo */}
        <div>
          <img className='myphoto3' src="/images/myphoto3.jpg" alt="My Photo" />
        </div>
        <div className='educational_contentContainer1'> {/* Fixed typo */}
          <h1>Educational Background</h1>
          <p className='p1'>Bachelor of Computer Application</p>
          <p className='p2'>2019-20</p>
          <p className='p3'>"I earned my Bachelor of Computer Applications (BCA) degree from Sunder Deep College of Management and Technology, located on NH-24, Delhi-Hapur Road, Dasna, Uttar Pradesh."</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;