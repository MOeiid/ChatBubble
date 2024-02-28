import React from 'react';
import ChatBubble from './ChatBubble';
import userImage from './images/user.jpg'; 


const ChatExample = () => {
  const mockMessages = [
    { content: 'How are you doing?', sender: 'other', type: 'text' },
    { content: 'I\'m doing great, thank you!', sender: 'user', type: 'text' },

    {
        content: userImage,
        sender: 'user',
        type: 'image'
      },
      {
        content: 'Ok!',
        sender: 'other',
        type: 'text'
      }
  ];

  return (
    <div>
      <h1>Chat Example Page</h1>
      <ChatBubble
        name="Nassej Co."
        accentColor="#2986cc"
        locale="en"
        rtl={false}
        messages={mockMessages}
        onSendMessage={(message) => console.log('Message sent:', message)}
        width="350px"
        height="550px"
      />
    </div>
  );
};

export default ChatExample;
