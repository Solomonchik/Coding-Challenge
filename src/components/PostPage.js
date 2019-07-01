import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function PostPage() {

  useEffect(() => {
    fetchPosts();
  }, []);

  const [items, setItems] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const items = await data.json();
    // console.log(items);

    setItems(items);
  };


  return (
    <div className="containerPostPageDetail">
      <ul className="ulContainer">
        {items.map(item => (
          <li
            className="liContainer"
            key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default PostPage;