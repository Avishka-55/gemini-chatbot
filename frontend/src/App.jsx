
import { useState} from 'react'
import './App.css'
import  ChatInput  from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages'



 

      
      
function App() {

           const [chatMessages, setChatMessages] = useState([
          
          { message: "hello, how can I help you?", sender: "robot" },
          
        ]);
        //const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
        return (
          <div
            className="app-container">
            
            <ChatMessages chatMessages = {chatMessages}/>
            <ChatInput chatMessages = {chatMessages} setChatMessages = {setChatMessages}/>
          </div>
        );
      }
export default App
