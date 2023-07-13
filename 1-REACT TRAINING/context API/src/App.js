import { useState } from 'react';
import User from './components/User';
import UserContext from './context/UserContext';

import './App.css';

function App() {
  const [user, setUser] = useState('Serge');
  return (
    <UserContext.Provider value={user}>
      <div className='App'>
        <User />
      </div>
    </UserContext.Provider>
  );
}

export default App;
