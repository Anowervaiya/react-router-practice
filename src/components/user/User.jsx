import React from 'react';
import { useLoaderData } from 'react-router-dom'
import './user.css'
function User() {
  const user = useLoaderData();
  console.log(user);
  
  return (
    <>
      <div>User:{user.length}</div>

      <div>
        {
          user.map((item) => {
            return (
              <div className="style">
                <h1>name: {item.name}</h1>
                <h2>email:{item.email}</h2>
                <h3>userName :{item.username}</h3>
              </div>
            );
          })
``        }
      </div>
    </>
  );
}

export default User