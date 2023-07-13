import { createContext } from 'react';

const UserContext = createContext({
  userName: '',
  setUser: () => {},
});

export default UserContext;
