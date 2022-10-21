import React from 'react';
import User from './User';

function UserList({userData}) {
  return (
    <div>
        {userData.map((data, i) => 
            <User
              key={i}
              first={data.first}
              last={data.last}
              email={data.email}
              address={data.address}
              created={data.created}
              balance={data.balance}
            />
        )}
    </div>
  )
}

export default UserList