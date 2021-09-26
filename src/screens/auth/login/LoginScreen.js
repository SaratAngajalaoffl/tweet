import './main.css';
import './util.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/GTranslate';
import GithubIcon from '@material-ui/icons/GitHub';

import useSnackbar, { types } from 'utils/snackbar';
import { handle_email_password_login, handle_facebook_login, handle_github_login, handle_gmail_login } from 'services/firebase/login-services';

function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const openSnackbar = useSnackbar();

	const handleNormalLogin = async () => {
		try {
			await handle_email_password_login(email, password);
			openSnackbar('User Signed Up Successfully!', types.SNACKBAR_SUCCESS);
		} catch (err) {
			openSnackbar(err.message);
		}
	};

	return (
		<div>
			<div className='limiter'>
				<div className='container-login100' style={{ backgroundImage: 'url("assets/bg-01.jpg")' }}>
					<div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
						<span className='login100-form-title p-b-49'>Login</span>
						<div className='wrap-input100 validate-input m-b-23' data-validate='Email is required'>
							<span className='label-input100'>Email</span>
							<input onChange={(e) => setEmail(e.target.value)} value={email} className='input100' type='text' placeholder='Type your email' autoComplete='none' />
							<span className='focus-input100' />
						</div>
						<div className='wrap-input100 validate-input' data-validate='Password is required'>
							<span className='label-input100'>Password</span>
							<input onChange={(e) => setPassword(e.target.value)} value={password} className='input100' type='password' placeholder='Type your password' />
							<span className='focus-input100' />
						</div>
						<div className='text-right p-t-8 p-b-31'></div>
						<div className='container-login100-form-btn'>
							<div className='wrap-login100-form-btn'>
								<div className='login100-form-bgbtn' />
								<button className='login100-form-btn' onClick={handleNormalLogin}>
									Login
								</button>
							</div>
						</div>
						<div className='txt1 text-center p-t-54 p-b-20'>
							<span>Or Log In Using</span>
						</div>
						<div className='flex-c-m'>
							<button onClick={handle_facebook_login} className='login100-social-item bg1'>
								<FacebookIcon />
							</button>
							<button onClick={handle_github_login} className='login100-social-item bg2'>
								<GithubIcon />
							</button>
							<button onClick={handle_gmail_login} className='login100-social-item bg3'>
								<GoogleIcon />
							</button>
						</div>
						<div className='flex-col-c p-t-155'>
							<span className='txt1 p-b-17'>Or Sign Up Using</span>
							<Link to='/signup' className='txt2'>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
