import "./Auth.css";
import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const server = 'http://127.0.0.1:8080';
const clientId = '714538910544-jsqnfiagajp4k3ls4u2cfhod215qt9b5.apps.googleusercontent.com'

const Auth = () => {
  const [showButton, toggleShow] = useState(true);
  const [buttonDesc, toggleLogin] = useState('Login');

  /**
   * Handler for when a user sucessfully logs into google
   * 
   * @param response - response object from google when a person successfully logs in
   */
  const success = (response) => {
    toggleShow(false);
    toggleLogin('Logout');
    const qs = response.Qs;
    const googleId = qs.ER;
    const name = qs.Te;
    const email = qs.zt;

    fetch(`${server}/api/auth/${googleId}/${name}/${email}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
          "Authorization": `Bearer: 1`,
          "Content-Type": "application/json"
      },
    }).then((err, res) => {
      fetch(`${server}/api/traffic/login`, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Authorization": `Bearer: 1`,
            "Content-Type": "application/json"
        },
      });
    });
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
    toggleLogin('Login');
    fetch(`${server}/api/traffic/logout`, {
      method: "POST",
      mode: "no-cors",
      headers: {
          "Authorization": `Bearer: 1`,
          "Content-Type": "application/json"
      },
    });
  }

  if (showButton) {
    return (
      <GoogleLogin
        theme="dark"
        style={{ background: 'red' }}
        onSuccess={success}
        onFailure={error}
        clientId={clientId}
      >
        <Button
          style={{ 
            marginRight: "10px",
            color: "blue",
            padding: "20px 40px 20px 40px",
            color: "white",
            backgroundColor: "rgb(174, 82, 33)",
            borderRadius: "14px"}}
          size="small"
          variant="contained"
          color="secondary"
        >
          {" "}
          {buttonDesc}{" "}
        </Button>
      </GoogleLogin>
    );
  }

  return (<GoogleLogout onLogoutSuccess={logout}>
            <Button
              style={{ 
                marginRight: "10px",
                color: "blue",
                padding: "20px 40px 20px 40px",
                color: "white",
                backgroundColor: "rgb(174, 82, 33)",
                borderRadius: "14px"}}
              size="small"
              variant="contained"
              color="secondary"
            >
              {" "}
              {buttonDesc}{" "}
            </Button>
          </GoogleLogout>);
}

export default Auth;