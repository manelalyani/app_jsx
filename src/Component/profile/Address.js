import React from 'react';
function Address() {
    return (
        
        <form>
            <h1> my contact is </h1>
            <input name="address" placeholder="Address" type="text" /><br/>
            <input name="unit" placeholder="Unit number" type="text" /><br/>
            <input name="city" placeholder="City" type="text" /><br/>
            <input name="state" placeholder="State" type="text" /><br/>
            <input name="country" placeholder="Country" type="text"/><br/>
            <input name="postcode" placeholder="Postcode" type="text" /><br/>
        </form>
    );
}
export default Address