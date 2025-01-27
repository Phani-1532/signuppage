import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt='user' />
          <input type='text' placeholder='Enter your Name' />
        </div>
        <div className='input'>
          <img src={email_icon} alt='user' />
          <input type='email' placeholder='Enter your Email' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='user' />
          <input type='password' placeholder='Enter your Password' />
        </div>
      </div>
      <div className='forgot-password'>
        <p>Forgotten Password? <a href='#' className='link'>Click here!</a></p>
      </div>
      <div className='submit-container'>
        <div className='submit'>SignUp</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  );
}

export default App;
