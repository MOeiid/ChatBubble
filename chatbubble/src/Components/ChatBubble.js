import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatBubble.css';
import naseejAvatar from './images/naseej_aas_logo.jpg';

const ChatBubble = ({
  name,
  accentColor,
  locale,
  rtl,
  messages: initialMessages,
  onSendMessage,
  messageRenderer,
  width,
  height
}) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [expanded, setExpanded] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (content, type) => {
    if (content.trim() !== '') {
      const newMessage = { content, sender: 'user', type };
      setMessages([...messages, newMessage]);
      onSendMessage(newMessage);
      setInputValue('');
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderMessage = (message, index) => {
    if (messageRenderer) {
      return messageRenderer(message, index);
    } else {
      switch (message.type) {
        case 'text':
          return <p key={index} style={{ backgroundColor: message.sender === 'user' ? '#2986cc' : '#F0F0F0', color: message.sender === 'user' ? '#fff' : '#333' }}>{message.content}</p>;
        case 'voice':
          return <audio key={index} src={message.content} controls />;
        case 'image':
          return <img key={index} src={message.content} alt="Image" />;
        // Add support for more message types here
        default:
          return null;
      }
    }
  };

  return (
    <div className={`chat-bubble ${rtl ? 'rtl' : 'ltr'} ${expanded ? 'expanded' : ''}`} style={{ width, height }}>
      {!expanded && <img src={naseejAvatar} alt="Avatar" className="avatar" onClick={toggleExpanded} />}
      {expanded && (
        <>
          <div className="chat-header" style={{ backgroundColor: accentColor }}>
            <img src={naseejAvatar} alt="Avatar" className="avatar" />
            <div>
              <h2>{name}</h2>
              <p>Active Now</p>
            </div>
            <div className="close-button" onClick={toggleExpanded}>X</div>
          </div>
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'user' ? 'user' : 'other'}`}>
                {renderMessage(message, index)}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={locale === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
            />
            <button onClick={() => handleSendMessage(inputValue, 'text')}>
              {locale === 'ar' ? 'إرسال' : 'Send'}
            </button>
            <label htmlFor="imageInput" className="icon-label">
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={(e) => handleSendMessage(URL.createObjectURL(e.target.files[0]), 'image')}
                style={{ display: 'none' }}
              />
              📷
            </label>
            <label htmlFor="voiceInput" className="icon-label">
              <input
                id="voiceInput"
                type="file"
                accept="audio/*"
                onChange={(e) => handleSendMessage(URL.createObjectURL(e.target.files[0]), 'voice')}
                style={{ display: 'none' }}
              />
              🎤
            </label>
          </div>
        </>
      )}
    </div>
  );
};

ChatBubble.propTypes = {
  name: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'ar']),
  rtl: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.object),
  onSendMessage: PropTypes.func,
  messageRenderer: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string
};

ChatBubble.defaultProps = {
  locale: 'en',
  rtl: false,
  messages: [],
  onSendMessage: () => {},
  width: '300px',
  height: '400px',
};

export default ChatBubble;
