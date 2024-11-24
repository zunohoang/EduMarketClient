import { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import Cookies from 'js-cookie';

const useUserChat = (serverUrl) => {
    const [messages, setMessages] = useState([
        { text: 'Xin chào! Tôi có thể giúp gì cho bạn?', sender: 'Admin' },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(serverUrl);

        socket.current.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.current.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.current.off('connect');
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
        if (!Cookies.get('accessToken')) {
            alert('Bạn cần đăng nhập để sử dụng tính năng này!');
            return;
        }
        if (inputMessage.trim()) {
            const message = {
                text: inputMessage,
                sender: 'User',
                timestamp: new Date(),
            };
            socket.current.emit('message', message);
            setMessages((prevMessages) => [...prevMessages, message]);
            setInputMessage('');
        }
    };

    return {
        messages,
        inputMessage,
        setInputMessage,
        messagesEndRef,
        handleSendMessage,
    };
};

export default useUserChat;