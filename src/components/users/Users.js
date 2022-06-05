import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'



const Users = ({Users , loading}) => {
    if(loading)
    {
        return(<Spinner></Spinner>);
    }
    else
    {
        return (
            <div style={userStyle}>
                {Users.map(
                    user => (
                        <UserItem key={user.id} user={user} />
                    )
                )

                }
            </div>
        );
    }
    
        
    
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
