import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '714538910544-jsqnfiagajp4k3ls4u2cfhod215qt9b5.apps.googleusercontent.com'

const Auth = () => {
  
  const success = (response) => {
    toggleShow(false);
    console.log(response);
  }
  
  const error = (response) => {
    console.error(response);
  }
  
  const logout = () => {
    toggleShow(true);
    console.log('logout');
  }

  const [showButton, toggleShow] = useState(true);

  if (showButton) {
    return (
      <GoogleLogin
        buttonText="Login"
        onSuccess={success}
        onFailure={error}
        clientId={clientId}
      />
    );
  }

  return <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />;
}

export default Auth;