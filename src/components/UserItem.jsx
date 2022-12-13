import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, id, RemoveUserById} = props;
    
    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p><input type="button" value="Remove" onClick={(event) => RemoveUserById(event, id)}/></p>
        </div>
    );
}

export default UserItem;