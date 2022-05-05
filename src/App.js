import React  from "react";
import './App.css';
import Input from "./components/input/Input";
import Chat from "./components/chat/Chat";
import {useEffect, useState} from 'react'
import {connectToServer, socket} from './socket-service'
import data from "./data.json";


function App() {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(data);


    useEffect(() => {
        connectToServer()
            .then((message) => {
                console.log(message);
            });
    }, []);
    
    const handleSubmit = () => {
        const chat = {
            message,
            username: author,
        }
        socket.send(JSON.stringify(chat));

        socket.onmessage = (websocketData) => {
            const chatObject = JSON.parse(websocketData.data);
            console.log('chatObject', chatObject)
            setMessages([...messages, {
                message: chatObject.message,
                username: chatObject.username,
                date: chatObject.date,
            }]);
        }
        setMessage('');
    };
    
    return (
        <div className="page">
            <h1> VOCO </h1>
            <div>
                <button className='buttonLog' type="submit"> Log in or create account </button>
            </div>
            <div className="chat-container">
                <Chat messages={messages}/>
                <br/>
            </div>
            <br/>

            <div className="btn-container" >
                <Input placeholder= "autor" onChange={setAuthor} value={author}/>
                <Input placeholder= "sõnum" onChange={setMessage} value={message}/>
                <button className='buttonSend' onClick={handleSubmit}> SEND </button>
            </div>

        </div>
    );
}

export default App;
