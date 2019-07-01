import React, { useEffect, useState } from 'react';

function PostDetail({match}) {

  useEffect(()=> {
    fetchPost();
    // console.log(match)
  }, []);

  const [item, setItem] = useState({});

  const fetchPost = async () => {
    const fetchPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.userId}`
    );
    const item = await fetchPost.json();
    // console.log(item);
    setItem(item);
  };

  const nameArray = [
    'Ehtel Tao',
    'Bernardo Trapp',
    'Hilario Groth',
    'Teri Sane',
    'Mason Burks',
    'Marissa Jone',
    'Granville Heyd',
    'Shea Kingsley',
    'Stewart Merrigan',
    'Odelia Duford',
    'Kent Tong',
    'Cecille Naylor',
    'Layne Howse',
    'Georgann Locher',
    'Fatima Fedor',
    'Myesha Height',
    'Elidia Sharpton',
    'Sook Blackmer',
    'Emmett Henslee',
    'Mazie Nail'];
  const oneImageFromArray = nameArray[Math.floor(Math.random()*nameArray.length)];

  return (
   <div>
     <div className="containerPostDetail">
       <div className="containerWithDetail">
         <h1>Author: <span>{oneImageFromArray}</span></h1>
         <h1>Title:</h1><p>{item.title}</p>
         <h1>Description:</h1>
         <p>{item.body + ' '} <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad adipisci beatae consectetur culpa doloremque, dolores, doloribus eos facere harum
          ipsa ipsam magnam minus omnis optio placeat similique tenetur unde velit.</span></p>
       </div>
     </div>
   </div>

  )
}


export default PostDetail;