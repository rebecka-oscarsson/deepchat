import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ChatPage from './components/ChatPage/ChatPage';
import {SocketProvider} from './SocketContext';
import {UsersProvider} from './UsersContext';

function App() {

  return (
    <SocketProvider>
      <UsersProvider>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/talk" element={<ChatPage />}></Route>
        </Routes>
    </HashRouter>
    </UsersProvider>
    </SocketProvider>
  );
}

export default App;
