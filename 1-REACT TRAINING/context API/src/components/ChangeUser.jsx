import UserContext from '../context/UserContext';
import { useContext } from 'react';

function ChangeUser() {
  const { userName, setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser(userName === 'Bogdan' ? 'Alice' : 'Bogdan')}>
      Change User
    </button>
  );
}

export default ChangeUser;
