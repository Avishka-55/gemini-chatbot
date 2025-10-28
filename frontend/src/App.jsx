
import { useState} from 'react'
import './App.css'
import  ChatInput  from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages'

      
function App() {

           const [chatMessages, setChatMessages] = useState([
          
          { message: "hello, how can I help you?", sender: "robot" },
          
        ]);
        
        return (
          <div
            className="app-container">
            
            <ChatMessages chatMessages = {chatMessages}/>
            <ChatInput chatMessages = {chatMessages} setChatMessages = {setChatMessages}/>
          </div>
        );
      }
export default App
