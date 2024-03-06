import React, { useState } from 'react'

export default function PostMethod() {

  const saveUser = () =>{
    // console.log({title,body,userId});
    let data = {title,body,userId}
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify(data)
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }





  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userId, setuserId] = useState(""); 
  return (
    <div>
      <label htmlFor="title">
        Title
        <input type="text"
        name='title'
        id='title'
        value={title}
        onChange={(e)=>{settitle(e.target.value)}}
        />
      </label>
      <br /><br />
      <label htmlFor="body">
        Body
        <input type="body"
        name='body'
        id='body'
        value={body}
        onChange={(e)=>{setbody(e.target.value)}}
        />
      </label>
      <br /><br />
      <label htmlFor="userId">
      userId
        <input type="userId"
        name='userId'
        id='userId'
        value={userId}
        onChange={(e)=>{setuserId(e.target.value)}}
        />
      </label>
      <button type='button' onClick={saveUser}>
        Save New User
      </button>
    </div>
  )
}
