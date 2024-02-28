// import React from 'react';
// import ChatBubble from './Components/ChatBubble';
// import './App.css';

// const App = () => {
//   const handleSendMessage = (message) => {
//     console.log('Message sent:', message);
//   };

//   return (
//     <div className="app">
//       <h1>ChatBubble Task!</h1>
//       <ChatBubble
//         name="Naseej Co."
//         accentColor="#3498db"
//         locale="en"
//         rtl={false}
//         messages={[
//           { content: 'Hello!', sender: 'other', type: 'text' },
//           { content: 'Hi there!', sender: 'user', type: 'text' },
//         ]}
      //   onSendMessage={handleSendMessage}
      //   width="400px"
      //   height="550px"
      // />
//     </div>
//   );
// };

// export default App;
import React from 'react';
import ChatExample from './Components/ChatExample'; 

const App = () => {
  return (
    <div>
      <ChatExample />
    </div>
  );
};

export default App;
