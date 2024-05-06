import React from 'react'
import { fetchAllUsers } from '../apis';

function UserPage() {
  const [ userData, setUserData ] = React.useState([]);

  React.useEffect(() => {
    fetchAllUsers()
    .then(userData => {
      console.log("userData ", userData);

      if( userData && userData.status ) {
        const users = [];
        for( let key in userData.data ) {
          users.push(userData.data[key])
        }

        console.log("users ", users);
        setUserData(users);
      }
    })
    .catch(err => {
      console.log("error ", err);
    });
  }, []);

  return userData.length < 1 ? 
    (
      <div>
        No user data
      </div>
    ) : 
    (
      <>
        {
          userData.map(user => {
            return (
              <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
              </div>
            )
          })
        }
      </>
    )
}

export default UserPage
