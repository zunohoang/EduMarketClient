import React, { useState, useRef, useEffect } from 'react';
import { Send, User } from 'lucide-react';

const ChatBox = ({ userChat, sendMessage }) => {
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        console.log("CO TIN NHAN MOI");
        messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    }, [userChat.messages.length]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            sendMessage(userChat.sender.username, inputMessage);
            setInputMessage('');
        }
    };

    return (
        <>
            <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="text-gray-500" size={20} />
                    </div>
                    <div className="ml-4">
                        <h2 className="font-medium text-gray-900">{userChat.sender.username}</h2>
                        <p className="text-sm text-gray-500">STUDENT</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {userChat.messages && userChat.messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender.role !== 'STUDENT' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[70%] rounded-lg p-3 ${message.sender.role !== 'STUDENT'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                            }`}>
                            {message.content}
                            <div className={`text-xs ${message.sender.role === 'STUDENT' ? 'text-gray-500' : 'text-white'} mt-1`}>
                                {new Date(message.createdAt).toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Nhập tin nhắn..."
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChatBox;

