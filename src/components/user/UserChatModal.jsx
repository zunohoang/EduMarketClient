import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import Cookies from 'js-cookie';
import io from 'socket.io-client';

const UserChatModal = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { text: 'Xin chào! Tôi có thể giúp gì cho bạn?', sender: 'Admin' },

    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

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
            setMessages([...messages, { text: inputMessage, sender: 'User' }]);
            setInputMessage('');
            // Ở đây bạn có thể thêm logic để gửi tin nhắn đến admin
        }
    };

    return (
        <div className="fixed md:bottom-4  bottom-24 right-4">
            {isOpen ? (
                <ChatBox onClose={onClose} />
            ) : (
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                    {/* <div className='absolute right-1 top-1 rounded-full w-[10px] h-[10px] bg-red-600 animate-pulse text-[7px]'></div> */}
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    );
};

export default UserChatModal;

const ChatBox = ({ onClose }) => {
    const [inputMessage, setInputMessage] = useState('');

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const callapi = async () => {
            const response = await fetch(`${process.env.VITE_API}/api/v1/chats?username=${Cookies.get('username')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('accessToken')}`
                }
            });
            const data = await response.json();
            if (data.status) {
                setMessages(data.data.chats);
            }
        }
        callapi();
    }, []);

    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(process.env.VITE_API, {
            extraHeaders: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`
            }
        });
        socket.current.on('connect', () => {
            console.log('Connected to server');
        });

        socket.current.on('chat_message', (data) => {
            setMessages(prev => [...prev, data]);
        });

        return () => {
            socket.current.off('connect');
            socket.current.off('chat_message');
            socket.current.disconnect();
        };
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, [messages]);

    const messagesEndRef = useRef(null);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            socket.current.emit('chat_message', {
                sender: Cookies.get('username'),
                receiver: 'admin',
                content: inputMessage
            });
            setInputMessage('');
        }
    }

    return (
        <div className="bg-white rounded-lg md:w-80 w-72  h-96 flex flex-col shadow-2xl transition-all duration-300 ease-in-out transform scale-100 opacity-100">
            <div className="flex justify-between items-center p-4 border-b bg-sky-500 text-white rounded-t-lg">
                <h2 className="text-xl font-bold">Edu Market</h2>
                <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
                    <X size={24} />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender.username === Cookies.get('username') ? 'justify-end' : 'justify-start'} transition-all duration-300 ease-in-out transform translate-y-0 opacity-100`}
                    >
                        <div className={`rounded-lg p-3 max-w-[80%] ${message.sender.username === Cookies.get('username') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {message.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t">
                <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1 bg-transparent px-4 py-2 focus:outline-none"
                        placeholder="Nhập tin nhắn..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}