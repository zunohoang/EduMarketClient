import React, { useState, useRef, useEffect } from 'react';
import { Send, Search, User } from 'lucide-react';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import ChatBox from './ChatBox';

const AdminChatBox = () => {
    const [userChats, setUserChats] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const socket = useRef(null);

    useEffect(() => {
        const callApiChats = async () => {
            try {
                const res = await fetch(`${process.env.VITE_API}/api/v1/chats`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('accessToken')}`,
                    },
                });
                const data = await res.json();

                if (data.status) {
                    setUserChats(data.data.chats);
                }
            } catch (error) {
                console.log(error);
            }
        }
        callApiChats();
    }, []);

    useEffect(() => {
        socket.current = io(process.env.VITE_API, {
            extraHeaders: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
        });

        socket.current.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.current.on('chat_message', (message) => {
            setUserChats((prev) => {
                const newChats = { ...prev };
                const chatKey = message.sender.role === 'STUDENT' ? message.sender.username : message.receiver;

                if (!newChats[chatKey]) {
                    newChats[chatKey] = {
                        id: Date.now(),
                        sender: {
                            id: message.sender.id,
                            username: chatKey,
                            role: 'STUDENT',
                        },
                        messages: []
                    };
                }

                // Check if the message already exists to prevent duplicates
                const messageExists = newChats[chatKey].messages.some(
                    m => m.content === message.content && m.createdAt === message.createdAt
                );

                if (!messageExists) {
                    newChats[chatKey].messages.push({
                        content: message.content,
                        createdAt: message.createdAt,
                        sender: {
                            username: message.sender.username,
                            role: message.sender.role,
                        }
                    });
                }

                // Move this chat to the top
                const { [chatKey]: recentChat, ...restChats } = newChats;
                return { [chatKey]: recentChat, ...restChats };
            });
        });

        return () => {
            socket.current.off('connect');
            socket.current.off('chat_message');
            socket.current.disconnect();
        };
    }, []);

    const callApiMessages = async (username) => {
        try {
            const res = await fetch(`${process.env.VITE_API}/api/v1/chats?username=${username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('accessToken')}`,
                },
            });
            const data = await res.json();
            if (data.status) {
                setUserChats(prev => {
                    const newChats = { ...prev };
                    newChats[username] = {
                        ...newChats[username],
                        messages: data.data.chats.map(message => ({
                            content: message.content,
                            createdAt: message.createdAt,
                            sender: {
                                username: message.sender.username,
                                role: message.sender.role,
                            }
                        }))
                    };
                    return newChats;
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSendMessage = (username, content) => {
        if (content.trim()) {
            socket.current.emit('chat_message', {
                content: content,
                receiver: username,
            });
        }
    };

    const filteredUsers = Object.entries(userChats)
        .filter(([username]) => username.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort(([, a], [, b]) => {
            const aLastMessage = a.messages[a.messages.length - 1];
            const bLastMessage = b.messages[b.messages.length - 1];
            return new Date(bLastMessage?.createdAt || 0) - new Date(aLastMessage?.createdAt || 0);
        });

    return (
        <div className="flex h-[calc(100vh-64px)] bg-gray-50">
            {/* Users List */}
            <div className="w-80 bg-white border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm người dùng..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-180px)]">
                    {filteredUsers.map(([username, userChat]) => (
                        <div
                            key={userChat.id}
                            className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${selectedUser === username ? 'bg-blue-50' : ''}`}
                            onClick={() => {
                                setSelectedUser(username);
                                callApiMessages(username);
                            }}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <User className="text-gray-500" size={24} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-sky-100" />
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="font-medium text-gray-900">{username}</h3>
                                <p className="text-sm text-gray-500 truncate">
                                    {userChat.messages[userChat.messages.length - 1]?.content || ''}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {selectedUser ? (
                    <ChatBox userChat={userChats[selectedUser]} sendMessage={handleSendMessage} />
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Chọn một người dùng để bắt đầu cuộc trò chuyện
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminChatBox;

