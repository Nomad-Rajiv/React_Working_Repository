import React, { useEffect, useState } from 'react'

export default function GetMethod() {
  const [data, setData] = useState([])

  useEffect(()=>{
    const url = "https://jsonplaceholder.typicode.com/comments"
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log("json", json);
      setData(json)
    })

  },[])
  return (
    <div>
      {data.map((item)=>{
        return(
          <div >{item.email}</div>
        )
      })}
    </div>
  )
}
