import React from 'react'
import { useHistory } from 'react-router-dom';

const UserItem = (useritem) => {
    console.log(useritem);
    const history = useHistory();
    const selecteduser_details = useritem.location.selecteduser;
    console.log(selecteduser_details);

    const onclick_back = (e) =>{
        console.log("Inside onclick_back");
        history.push('/Userlist')
    }

    return (
        <div>
            <h1>{selecteduser_details.username}</h1>
            <p>{selecteduser_details.email}</p>
            <p>{selecteduser_details.phone}</p>
            <p>{selecteduser_details.website}</p>
            <button onClick={onclick_back}>Back</button>
        </div>
    )
}
export default (UserItem)