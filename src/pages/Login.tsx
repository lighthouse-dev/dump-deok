import { firebaseAuthUI, firebaseAuthUIConfig } from '../utils/firebase';
import logo from '../logo.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

export default () => {
  const user = useContext(UserContext);
  // const [redirectUrl, setRedirectUrl] = useState<"/home" | null>(null);

  useEffect(() => {
    // setIsLoading(false);

    firebaseAuthUI.start('#firebaseui-auth-container', {
      ...firebaseAuthUIConfig,
      callbacks: {
        signInSuccessWithAuthResult: (
          _authResult: firebaseui.auth.AuthUI,
          _redirectUrl: string
        ) => {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          // console.log(redirectUrl);
          return true;
        },
        uiShown: () => {
          // The widget is rendered.
          // Hide the loader.
          const loaderElem = document.getElementById('loader') ?? null;
          if (loaderElem) {
            loaderElem.style.display = 'none';
          }
        }
      }
    });
  }, []);

  if (user) {
    // TODO: 이미 로그인 한 상태에서 /접근시 일시적으로 SNS 로그인 버튼들이 표시되는 문제 대응
    return <Navigate replace to="/home" />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="firebaseui-auth-container" />
        {/* TODO: meterial-uiのLoadingを使うように修正  */}
        <div id="loader">Loading...</div>
      </header>
    </div>
  );
};
