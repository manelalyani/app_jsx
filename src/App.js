 import './App.css';
import React from 'react';
import ProfilePhoto from './Component/profile/ProfilePhoto';
import header from './Component/profile/header' ;
import FullName from './Component/profile/FullName';



function App() {
  return (
    <div className="App">
      <ProfilePhoto className='profile'/>
      <header className='header'/>
      <FullName className='fname'/>
    </div>
  );
}

export default App ;
