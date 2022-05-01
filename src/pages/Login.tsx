import { signInWithGoogle } from '../utils/firebase';
import logo from '../logo.svg';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="signin" onClick={signInWithGoogle}>
          Sign in With Google
        </button>
      </header>
    </div>
  );
};
