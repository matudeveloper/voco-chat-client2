import React, {useState, useEffect} from 'react';
import Chatcard from "../chatcard/Chatcard";
import data from '../../data.json';

function Chat({messages}) {
    return (
        <div className="container">
            {messages.length !== 0 && messages.map((item) => {
                return(<Chatcard
                    message={item.message}
                    username={item.username}
                    date={item.date}
                    />)
            })}
        </div>
    );
}

export default Chat;