import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import './App.css';
import chatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      <Route path="/chats" component={chatPage}/>
    </div>
  );
}

export default App;
