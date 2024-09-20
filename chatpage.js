import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {

    const [chats, setchats] = useState([]);
    // for rendering data from our backend to frontend we need use of api
    // to fetch chats we need to use axios for using axios we need async function
    const fetchChats = async () => {
        const { data } = await axios.get("/api/chats");
        setchats(data);
    };
    // for calling fetchfunction we need to use useeffect which is the hook in react 
    // which run to call function for first time
    useEffect(() => {
        
            fetchChats();
        
    }, []);

    return (
        <div>
            {chats.map((chats) => (
                <div key={chats._id}>{ chats.chatName }</div>
            ))}
        </div>
    );
};

export default ChatPage;
