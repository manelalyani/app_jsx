import React from 'react';
function FullName (){
return (
  <div className="Full_name">
   <form>
  <label>
   Fisrt name:
    <input type="text" name="first name" />
  </label><br/>
  <label>
    Last name:
  <input type="text" name="last name"/>
  </label>
</form>
  </div>
);}

export default FullName;