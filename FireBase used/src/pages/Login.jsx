                                // import { faAngleRight, faFacebookF, faGoogle } from '@fortawesome/free-solid-svg-icons';
                                // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { db } from '../firebase/firebase.js';

function Login() {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const bannerRef = useRef(null);
	const loginContainerRef = useRef(null);
	const signupContainerRef = useRef(null);

	const [email, setEmail]       = useState('');
	const [password, setPassword] = useState('');
	const [name, setName]         = useState('');

	const toggleMode = () => {
		if (isLoginMode) {
			bannerRef.current.style.transform = 'translateX(-100%)';
			loginContainerRef.current.style.transform = 'scale(0)';
			signupContainerRef.current.style.transform = 'scale(1)';
		} else {
			bannerRef.current.style.transform = 'translateX(0)';
			signupContainerRef.current.style.transform = 'scale(0)';
			loginContainerRef.current.style.transform = 'scale(1)';
		}
		setIsLoginMode(!isLoginMode);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const auth = getAuth();
		try {
			if (!isLoginMode && name) {
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);
				const user = userCredential.user;
				await setDoc(doc(db, 'users', user.uid), {
					name,
					email: user.email,
					password,
				});
				console.log("User successfully signed up:", user.email);
				window.location.href = '/home';
			} else {
				await signInWithEmailAndPassword(auth, email, password);
				console.log("User successfully logged in:", auth.currentUser.email);
				window.location.href = '/home';
			}
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	return (
		<div>
			<style>
				{" "}
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
            height          : 580px;
            width           : 720px;
            border-radius   : 10px;
            display         : flex;
            align-items     : center;
            background-color: white;
            overflow        : hidden;
            position        : relative;
            box-shadow      : 0 0 10px rgba(229, 133, 15, 0.9);
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
          `}{" "}
			</style>{" "}
			<form onSubmit  = {handleLogin}>
			<div  className = "form-container">
			<div  className = "login-container" ref                                       = {loginContainerRef}>
			<h1   className = "title">Log In</h1>
			<p    className = "desc">Login to your account to upload or download pictures, videos, music.</p>
			<div  className = "input-container">
							<input
								type="email"
								placeholder="Enter Your Email Address"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="input-container">
							<input
								type="password"
								placeholder="Enter Your Password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="account-controls">
							<a href="#" onClick={() => alert("Provide info to reset your password.")}>
								Forgot Password?
							</a>
                            <button>
                                by
								{/* Next <FontAwesomeIcon icon={faAngleRight} /> */}
							</button>
						</div>
						<span className="line"></span>
						<span className="other-login-text">Or log in with</span>
						<div className="social-logins">
							{/* <button className="social-login">
								<FontAwesomeIcon icon={faFacebookF} style={{ color: '#1e7bf2' }} />
							</button>
							<button className="social-login">
								<FontAwesomeIcon icon={faGoogle} style={{ color: '#e02210' }} />
							</button> */}
						</div>
						<span className="signup-text">
							Don't have an account?{" "}
							<a id="signup-form-toggler" onClick={toggleMode}>
								Sign up
							</a>
						</span>
					</div>
					<div className="placeholder-banner" ref={bannerRef}>
						<img
							src="https://img.freepik.com/free-vector/man-sitting-desktop-pc-computer-screen_3446-328.jpg"
							alt="Banner"
							className="banner"
						/>
					</div>
					<div className="signup-container" ref={signupContainerRef}>
						<h1 className="title">Signup</h1>
						<p className="desc">Create your account to upload or download pictures, videos, music.</p>
						<div className="input-container">
							<input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} required />
						</div>
						<div className="input-container">
							<input
								type="email"
								placeholder="Enter Your Email Address"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="input-container">
							<input
								type="password"
								placeholder="Enter Your Password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="account-controls">
                            <button>
                                hy
								{/* Next <FontAwesomeIcon icon={faAngleRight} /> */}
							</button>
						</div>
						<span className="line"></span>
						<span className="other-login-text">Or Sign up with</span>
						<div className="social-logins">
							{/* <button className="social-login"> */}
								{/* <FontAwesomeIcon icon={faFacebookF} style={{ color: '#1e7bf2' }} /> */}
							{/* </button> */}
							{/* <button className="social-login"> */}
								{/* <FontAwesomeIcon icon={faGoogle} style={{ color: '#ea4335' }} /> */}
							{/* </button> */}
						</div>
						<span className="signup-text">
							Already have an account?{" "}
							<a id="login-form-toggler" onClick={toggleMode}>
								Login here
							</a>
						</span>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
