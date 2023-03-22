
import React from 'react';
import ProfilePhoto from './Component/profile/ProfilePhoto';
import Nabvar from './Component/profile/Nabvar';
import FullName from './Component/profile/FullName';
import Address from './Component/profile/Address';




function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ProfilePhoto/>     
      <FullName/>
      <Address/>
    </div>
  );
}

export default App ;
