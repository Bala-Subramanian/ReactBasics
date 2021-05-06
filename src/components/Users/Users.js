import React from 'react'
import { useHistory } from 'react-router-dom';

const Users = (props) => {
    const history = useHistory();

    const handleClick = (user) => {
        console.log(user);
        var userid = user.id;
        history.push(
            {
                pathname: '/users/' + userid,
                selecteduser:user
            }
        )
    }

    return (<div className="div_class">
        <button onClick={() => handleClick(props.user)} >{props.user.username}
        </button>
    </div>

    )

}
export default (Users)