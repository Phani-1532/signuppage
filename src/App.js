import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import './App.css';
import { useState } from 'react';

function App() {
  const [action, setAction] = useState('Sign Up')
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt='user' />
          <input type='text' placeholder='Enter your Name' required />
        </div>
        <div className='input'>
          <img src={email_icon} alt='user' />
          <input type='email' placeholder='Enter your Email' required />
        </div>
        <div className='input'>
          <img src={password_icon} alt='user' />
          <input type='password' placeholder='Enter your Password' required />
        </div>
      </div>
      <div className='forgot-password'>
        <p>Forgotten Password? <a href='#' className='link'>Click here!</a></p>
      </div>
      <div className='submit-container'>
        <div className='submit' onClick={() => setAction('Sign Up')}>SignUp</div>
        <div className='submit' onClick={() => setAction('Log In')}>Login</div>
      </div>
    </div>
  );
}

export default App;
