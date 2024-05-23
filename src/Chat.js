import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Chat = () => {
    const {id}=useParams();

    const [messages,setMessages] =useState([]);
    const [message,setMessage] = useState('');

    const sendMessage = () => {
        setMessages([...messages,{text:message,sender:'user'}])
        setMessage('')
    }

  return (
    <div className="Chats">
        <Link className="back" to={`/product/${id}`}>BACK</Link>
        <div className="cws">Chat with Seller</div>
        <div className="chats">
            <ul className='messages'>
                {messages.map((msg,index)=>(
                    <li key={index} className='message'>
                        <div className="msg">{msg.text}</div>
                    </li>
                ))}
            </ul>
            <div className="typing">
                <textarea className='messageArea' value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                <button className="send" onClick={sendMessage}>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Chat