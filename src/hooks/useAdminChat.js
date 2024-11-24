import { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';

const useAdminChat = (serverUrl) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(serverUrl);

        socket.current.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.current.on('users', (users) => {
            setUsers(users);
        });

        socket.current.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.current.off('connect');
            socket.current.off('users');
            socket.current.off('message');
            socket.current.disconnect();
        };
    }, [serverUrl]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            const message = {
                user: selectedUser,
                text: inputMessage,
                timestamp: new Date(),
            };
            socket.current.emit('message', message);
            setMessages((prevMessages) => [...prevMessages, message]);
            setInputMessage('');
        }
    };

    return {
        users,
        selectedUser,
        setSelectedUser,
        messages,
        inputMessage,
        setInputMessage,
        messagesEndRef,
        handleSendMessage,
    };
};

export default useAdminChat;