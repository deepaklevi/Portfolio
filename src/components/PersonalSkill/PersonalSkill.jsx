import React from 'react';
import './PersonalSkill.css';

const PersonalSkill = () => {
  return (
    <div className='personalSkill_main'>
      <div className='personalSkill_mainContent'>
        <h1>Personal Skill</h1>
        <p>
          Beyond video editing, I also specialize in photo editing and social media management, helping brands enhance 
          their digital presence through cohesive and engaging content.
        </p>
        
        <div className='personalSkill_mainContentimg'>
          <div className='personalSkill_mainContentimg1'>
            <img src="/images/pr95.png" alt="Video Editing Skill - 95%" />
            <p>Video Editing</p>
          </div>
          <div className='personalSkill_mainContentimg1'>
            <img src="/images/pr80.png" alt="Photo Editing Skill - 80%" />
            <p>Photo Editing</p>
          </div>
          <div className='personalSkill_mainContentimg1'>
            <img src="/images/pr75.png" alt="Social Media Management - 75%" />
            <p>SMM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSkill;
