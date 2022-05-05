import React from 'react';

function Chatcard({message, username, date}) {
    return (
        <div className="chat-card">
            <p>
                {message}
            </p>
            <div className="user-info">
                <p>
                    {username}  * {date}
                </p>
            </div>

            {/*
             <div className="chat-card">
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum iste minima placeat, praesentium quae tempora. Autem inventore iste iusto nostrum obcaecati officia pariatur, placeat provident. Et harum minus ullam?</span></p>
                <div className="user-info">
                    <p>John Smith * 12.01.2022 15:32 </p>
                </div>
            </div>
            */}
        </div>
    );
}

export default Chatcard;