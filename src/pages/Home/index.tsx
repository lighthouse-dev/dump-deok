import { useContext, useEffect } from 'react';
import logo from '../../logo.svg';
import { UserContext } from '../../providers/AuthProvider';

export default () => {
  const user = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>welcome dump-duck!</p>
      </header>
    </div>
  );
};
