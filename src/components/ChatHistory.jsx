// import React from "react"
// import ReactMarkDown from "react-markdown"

// const ChatHistory = ({chatHistory}) => {
//     return(
//         <>
//         {chatHistory.map((message, index) => (
//             <div
//             key={index}
//             className={`flex ${
//                 message.type === "user"
//                 ? "bg-gray-100"
//                 : "bg-blue-100"
//             }`}
//             >
//                 {message.type === "user" && (
//                     <span>You:</span>
//                 )}
//                 <div>
//                     <div>{message.message}</div>
//                 </div>
//             </div>
//         ))}
//         </>
//     )
// }

// export default ChatHistory





import React from 'react'; 
// import './ChatHistory.css'; 
import classes from './ChatHistory.css'; 
 
function ChatHistory({ chatHistory }) { 
  return ( 
    <div className={classes.massage}> 
      {chatHistory.map((message, index) => ( 
        <div 
          key={index} 
          className={`message ${message.type === "user" ? "user-message" : "bot-message"}`} 
        > 
          <p>{message.message}</p> 
        </div> 
      ))} 
    </div> 
  ); 
} 
// <div className={classes.buttons}> 
export default ChatHistory;