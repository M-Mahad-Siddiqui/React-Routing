import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    const banner = document.getElementById('banner');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const loginToggle = document.getElementById('login-form-toggler');
    const signupToggle = document.getElementById('signup-form-toggler');

    signupToggle.addEventListener('click', () => {
      banner.style.transform = 'translateX(-100%)';
      loginContainer.style.transform = 'scale(0)';
      signupContainer.style.transform = 'scale(1)';
    });

    loginToggle.addEventListener('click', () => {
      banner.style.transform = 'translateX(0%)';
      signupContainer.style.transform = 'scale(0)';
      loginContainer.style.transform = 'scale(1)';
    });

    // Clean up event listeners on component unmount
    return () => {
      signupToggle.removeEventListener('click', () => {});
      loginToggle.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div>
      <style>
        {`
          *, *::after, *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: "Roboto", sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #737879d0;
          }

          .form-container {
            height: 500px;
            width: 720px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            background-color: white;
            overflow: hidden;
            position: relative;
            box-shadow: 0 0 10px rgba(229, 133, 15, 0.9);
          }

          .login-container,
          .signup-container {
            width: 50%;
            padding: 40px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            transition: all 500ms ease;
          }

          .signup-container {
            transform: scale(0);
          }

          .title {
            font-size: 27px;
            font-weight: 600;
          }

          .desc {
            font-size: 14px;
          }

          .input-container {
            margin-top: 10px;
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 2px solid #d6e0eb;
            display: flex;
            align-items: center;
          }

          input {
            height: 100%;
            border: none;
            margin-left: 6px;
            outline: none;
            width: 100%;
            padding: 0 10px;
            font-family: "Roboto", sans-serif;
          }

          .account-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .account-controls > a {
            text-decoration: none;
            color: #890ab3;
            font-size: 14px;
          }

          .account-controls > button {
            width: 65px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            border: none;
            background: #041a86;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 400ms ease;
            box-shadow: 0 2px 8px 1px #b77fd8;
          }

          .account-controls > button:hover {
            transform: scale(1.08);
            background-color: #fff;
            border: 1px solid #041a86;
            color: #0b1962;
            box-shadow: 0px 0px 8px #334341;
          }

          .line {
            width: 100%;
            height: 2px;
            background-color: #bfc0c9;
            border-radius: 10px;
          }

          .other-login-text {
            text-align: center;
            font-size: 12px;
            color: #64656a;
          }

          .placeholder-banner {
            width: 50%;
            height: 100%;
            position: absolute;
            right: 0;
            transition: all 500ms ease;
            z-index: 4;
          }

          .social-logins {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
          }

          .social-login {
            height: 40px;
            aspect-ratio: 1/1;
            border: 2px solid #bfc0c9;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 500ms ease;
          }

          .social-login:hover {
            transform: scale(1.1);
          }

          .signup-text {
            margin-top: 8px;
            font-size: 13px;
          }

          #signup-form-toggler,
          #login-form-toggler {
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            color: #0f60f6;
          }

          #signup-form-toggler:hover,
          #login-form-toggler:hover {
            border-bottom: 2px solid;
          }

          .banner {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 500ms ease;
          }
        `}
      </style>
      <div className="form-container">
        <div className="login-container" id="login-container">
          <h1 className="title">Log In</h1>
          <p className="desc">Login to your account to upload or download pictures, videos, music.</p>

          <div className="input-container">
            <input type="email" placeholder="Enter Your Email Address" autoFocus />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="account-controls">
            <a href="#">Forgot Password?</a>
            <button>Next <i className="fas fa-angle-right"></i></button>
          </div>

          <span className="line"></span>

          <span className="other-login-text">Or log in with</span>

          <div className="social-logins">
            <button className="social-login">
              <i className="fab fa-facebook-f" style={{ color: '#1e7bf2' }}></i>
            </button>
            <button className="social-login">
              <i className="fab fa-google" style={{ color: '#e02210' }}></i>
            </button>
          </div>

          <span className="signup-text">Don't have an account yet? <a id="signup-form-toggler" href="#">Sign up</a></span>
        </div>

        <div className="placeholder-banner" id="banner">
          <img
            src="https://img.freepik.com/free-vector/man-sitting-desktop-pc-computer-screen_3446-328.jpg?t=st=1725187780~exp=1725191380~hmac=7c280fd3c702a847059e03ba96dfac1b6701e4807ae2df127524e47add940726&w=740"
            alt="Banner"
            className="banner"
          />
        </div>

        <div className="signup-container" id="signup-container">
          <h1 className="title">Signup</h1>

          <p className="desc">Create your account to upload or download pictures, videos, music.</p>

          <div className="input-container">
            <input type="email" placeholder="Enter Your Email Address" />
          </div>

          <div className="input-container">
            <input type="password" placeholder="Enter Your Password" />
          </div>

          <div className="account-controls">
            <button>Next <i className="fa fa-angle-right"></i></button>
          </div>

          <span className="line"></span>

          <span className="other-login-text">Or Sign up with</span>

          <div className="social-logins">
            <button className="social-login">
              <i className="fab fa-facebook-f" style={{ color: '#1e7bf2' }}></i>
            </button>
            <button className="social-login">
              <i className="fab fa-google" style={{ color: '#ea4335' }}></i>
            </button>
          </div>

          <span className="signup-text">Already have an account? <a id="login-form-toggler" href="#">Login here</a></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
