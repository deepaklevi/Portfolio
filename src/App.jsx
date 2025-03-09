import React from 'react';
import './App.css';
import Firstpage from './components/Firstpage/Firstpage';
import SecondPage from './components/SecondPage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';
import PersonalSkill from './components/PersonalSkill/PersonalSkill';
import Shortvideo from './components/Shortvideo/Shortvideo';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Lastpage from './components/Lastpage/Lastpage';


function App() {
  return (
    <div>
      <Firstpage/>
      <SecondPage/>
      <ThirdPage/>
      <Shortvideo/>
      <PersonalSkill/>
      <Lastpage/>

    </div>
  );
}

export default App;