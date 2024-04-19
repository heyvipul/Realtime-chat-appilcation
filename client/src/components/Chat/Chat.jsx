import React, { useEffect, useState } from 'react'
import queryString from "query-string" //used to read data from url 
import io from "socket.io-client"

let socket;

const Chat = ({location}) => {

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "http://localhost:5000"

  useEffect(()=>{
    const {name,room} = queryString.parse(location.search)
    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    console.log(socket);

    return () => {
      socket.disconnect(); 
    };

  },[location.search])

  return (
    <div>Chat</div>
  )
}

export default Chat