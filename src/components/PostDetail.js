import React, { useEffect, useState } from 'react';
import faker from 'faker'

function PostDetail({match}) {

  useEffect(()=> {
    fetchItem();
    // fetchUsers();
    fetchUser();
    // console.log(match)
  }, []);

  const [item, setItem] = useState({});
  const root = 'https://jsonplaceholder.typicode.com/posts/';

  const fetchItem = async () => {
    const fetchItem = await fetch(
      root + match.params.userId
    );
    const item = await fetchItem.json();
    // console.log(item);
    setItem(item);
  };


  const [user, setUser] = useState({});

  const fetchUser =  async () => {
    const fetchUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random()*10)}`
    );

    const user = await fetchUser.json();

    setUser(user);
  };
  console.log('1st console log with users', user);



  return (
   <div>
     <div className="containerPostDetail">
       <img src={faker.image.avatar()} alt=""/>
       <div className="containerWithDetail">
         <h1>Author: <span>{user.name}</span></h1>
         {/*<h1>Author: <span>{oneNameFromArray}</span></h1>*/}
         <h1>Title:</h1><p>{item.title}</p>
         <h1>Description:</h1>
         <p>{item.body + ' '} </p>
       </div>
     </div>
   </div>

  )
}


export default PostDetail;