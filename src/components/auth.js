import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '714538910544-jsqnfiagajp4k3ls4u2cfhod215qt9b5.apps.googleusercontent.com'

const Auth = () => {
  const [showButton, toggleShow] = useState(true);

  /**
   * Handler for when a user sucessfully logs into google
   * 
   * @param response - response object from google when a person successfully logs in
   */
  const success = (response) => {
    toggleShow(false);
    console.log(response);
  }
  
  /**
   * Handler for when a user unsucessfully logs into google
   * 
   * @param response - response object from google when a person unsuccessfully logs in
   */
  const error = (response) => {
    console.error(response);
  }
  
  /**
   * Handler for when a user attempts to logout
   */
  const logout = () => {
    toggleShow(true);
    console.log('logout');
  }

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